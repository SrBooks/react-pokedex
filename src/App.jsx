import { useContext, useState } from 'react'
import Pokemons from './components/Pokemons'
import Aside from './components/Aside'
import ModalPokemon from './components/ModalPokemon'
import { PokemonContext } from './context/PokemonContext'

function App() {
 const {showDetailPokemon} =  useContext(PokemonContext);
 console.log(showDetailPokemon);

  return (
    <section className="bg-[#F6F8FC] h-screen font-outfit overflow-y-auto">
      <main className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px]">
        <Pokemons />
        <Aside />
        <ModalPokemon showModal={showDetailPokemon}/>
      </main>
    </section>
  )
}

export default App
