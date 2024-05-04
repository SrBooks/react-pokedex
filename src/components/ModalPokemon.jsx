import { IconPokeballOff } from "@tabler/icons-react"
import usePokemonContext from "../hooks/usePokemonContext"

const ModalPokemon = ({ showModal, onCloseModal }) => {

    return (
        <section className={
            showModal ? `fixed top-0 left-0 right-0 bg-green-200 h-screen transition-all duration-500 opacity-100` : `invisible opacity-0`
        }>
            <button onClick={onCloseModal} className="bg-white absolute top-4 right-4 p-1 rounded-lg hover:opacity-80 transition-opacity">
                <IconPokeballOff size={32} stroke={1.5} />
            </button>
            <article
                className={
                    showModal ? `bg-white h-[85%] absolute w-full  rounded-tl-3xl rounded-tr-3xl text-center transition-all duration-500 bottom-0` : `-bottom-full`
                }>
                Pokemon
            </article>
        </section>
    )
}

export default ModalPokemon