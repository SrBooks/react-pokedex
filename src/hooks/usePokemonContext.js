import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext.jsx";

const usePokemonContext = () => useContext(PokemonContext);

export default usePokemonContext;