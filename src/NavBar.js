/*
    This is the file that contains the logic 
    and design for the navigation bar.
    @author Paolo Pop
*/

// ######################## FUNCTIONALITY ########################
// #
import { BrowserRouter, Link } from "react-router-dom"
import { vpSize } from "./vpSize"
// #
// ###############################################################

// ####################### APP COMPONENTS ########################
// #
import Home from "./components/Home/Home"
import Sudoku from "./components/Sudoku/Sudoku"
import Conjugator from "./components/Conjugator/Conjugator"
// #
// ###############################################################

function Navbar() {
  return (
    <div className={"d-inline-flex flex-row flex-lg-column gap-4 m-4 fs-1"}>
      <Link to="/">
        <i className="bi bi-house-fill text-black"></i>
      </Link>
      <Link to="/sudoku">
        <i className="bi bi-dice-3-fill text-black"></i>
      </Link>
      {/*<Link to="/conjugator">Conjugator</Link>*/}
    </div>
  )
}

export default Navbar
