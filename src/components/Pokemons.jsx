import { IconPokeball } from "@tabler/icons-react"
import axios from "axios"
import { useEffect, useRef, useState } from "react"
import PokemonList from "./PokemonList.jsx"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver.js"

const INITIAL_LIMIT = 40;
const INCREASE_LIMIT = 20;

const Pokemons = () => {

    const [allPokemons, setAllPokemons] = useState([]);
    const [namePokemon, setNamePokemon] = useState("");
    const [filterLimit, setFilterLimit] = useState(INITIAL_LIMIT);

    const targetObserver = useRef(null);
    const entry = useIntersectionObserver(targetObserver, {});
    const isVisible = !!entry?.isIntersecting;

    //Filtering method that is executed by pressing the button
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setNamePokemon(e.target.pokemonName.value.toLowerCase());
    // }

    //Filtering method that is executed each time the user types a key in the search engine.
    const handleChangeNamePokemon = (e) => {
      setNamePokemon(e.target.value.toLowerCase());
    }

    const pokemonByName = allPokemons.filter( (pokemon) => pokemon.name.includes(namePokemon));

    useEffect(() => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon?limit=898")
            .then(({ data }) => setAllPokemons(data.results))
            .catch((err) => console.log(err))
    }, [])

    useEffect(() => {
        if(isVisible){
            const maxLimitPokemons = pokemonByName.length;
            const newFilterLimit = filterLimit + INCREASE_LIMIT;
            newFilterLimit > maxLimitPokemons ? setFilterLimit(maxLimitPokemons) : setFilterLimit(newFilterLimit);
        }
    }, [isVisible]);

    return <section className="p-4 py-5">
        <form autoComplete="off">
            <div className="bg-white p-4 flex rounded-2xl text-lg">
                <input 
                    className="outline-none flex-1" 
                    type="text" name="pokemonName" 
                    placeholder="Search your Pokémon" 
                    onChange={handleChangeNamePokemon}
                />
                <button className="bg-red-500 rounded-full p-1 hover:bg-[#000] transition-colors">
                    <IconPokeball color="#fff" size={"30px"}/>
                </button>
            </div>
        </form>
        <PokemonList pokemons={pokemonByName.slice(0, filterLimit)}/>
        {/* Target Observer */}
        <span ref={targetObserver}></span>
    </section>

}

export default Pokemons