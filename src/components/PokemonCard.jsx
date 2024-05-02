import axios from "axios"
import { useEffect, useState } from "react"
import { colorByType } from "../constants/colorByType.js"

export const PokemonCard = ({ pokemonURL }) => {

    const [pokemon, setPokemon] = useState(null)

    useEffect(() => {
        axios
            .get(pokemonURL)
            .then(({ data }) => setPokemon(data))
            .catch((err) => console.log(err))
    }, [])


    return (
        pokemon &&
        
        <article className="text-center bg-white rounded-[20px] relative font-semibold capitalize pb-2
        shadow-lg shadow-slate-400/10 border-2 border-transparent hover:border-[#7e7cb48a] transition-colors cursor-pointer group">
            <header className="h-8">
                <img 
                    className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 group-hover:scale-110 transition-transform pixelated"
                    src={pokemon.sprites.versions["generation-v"]["black-white"].front_default} alt="" 
                />
            </header>
            <span className="text-sm text-slate-400">Nº {pokemon.id}</span>
            <h4 className="text-lg">{pokemon.name}</h4>
            <ul className="flex gap-2 justify-center pb-4 pt-4">
                {pokemon.types.map(type =>
                    <li className={`  p-1 rounded-md px-2 text-sm text-white font-light ${colorByType[type.type.name]}` } key={type.type.name}>{type.type.name}</li>
                )}
            </ul>
        </article>
    )
}
