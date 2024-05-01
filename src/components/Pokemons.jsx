import { IconPokeball } from "@tabler/icons-react"
import axios from "axios"
import { useEffect, useState } from "react"
import PokemonList from "./PokemonList"

const Pokemons = () => {

    const [allPokemons, setAllPokemons] = useState([])

    useEffect(() => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon?limit=50")
            .then(({ data }) => setAllPokemons(data.results))
            .catch((err) => console.log(err))
    }, [])

    return <section className="p-4 py-5">
        <form>
            <div className="bg-white p-4 flex rounded-2xl text-lg">
                <input className="outline-none flex-1" type="text" name="" id="" placeholder="Search your Pokémon" />
                <button className="bg-red-500 rounded-full p-1 hover:bg-[#000] transition-colors">
                    <IconPokeball color="#fff" size={"30px"}/>
                </button>
            </div>
        </form>
        <PokemonList pokemons={allPokemons}/>
    </section>

}

export default Pokemons