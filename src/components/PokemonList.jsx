import usePokemonContext from "../hooks/usePokemonContext"
import { PokemonCard } from "./PokemonCard"


const PokemonList = ({pokemons}) => {

   const {showPokemonById} = usePokemonContext();

  return (
   <section className="pt-14 grid lg:grid-cols-[repeat(3,_minmax(180px,_1fr))] grid-cols-[repeat(2,_minmax(180px,_1fr))] gap-4 gap-y-14">
    {
        pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.url} pokemonURL={pokemon.url} onClick={showPokemonById}/>

    ))}
   </section>
  )
}

export default PokemonList