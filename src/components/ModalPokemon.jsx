import { IconPokeballOff } from "@tabler/icons-react"

const ModalPokemon = ({ showModal }) => {
    return (
        <section className={
            showModal ? `fixed top-0 left-0 right-0 bg-green-200 h-screen` : `hidden`
        }>
            <button className="bg-white absolute top-4 right-4 p-1 rounded-lg hover:opacity-80 transition-opacity">
                <IconPokeballOff size={32} stroke={1.5} />
            </button>
            <article className="bg-white h-[85%] absolute w-full bottom-0 rounded-tl-3xl rounded-tr-3xl text-center">
                Pokemon
            </article>
        </section>
    )
}

export default ModalPokemon