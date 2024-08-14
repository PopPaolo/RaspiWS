/*
    This is the file that contains the logic 
    and design for the navigation bar.
    @author Paolo Pop
*/

// ######################## FUNCTIONALITY ########################
// #
import { BrowserRouter, Link } from 'react-router-dom';
import { vpSize } from "./vpSize";
// #
// ###############################################################


// ####################### APP COMPONENTS ########################
// #
import Home from "./components/Home";
import Sudoku from "./components/Sudoku/Sudoku";
import Conjugator from "./components/Conjugator/Conjugator";
// #
// ###############################################################

function Navbar() {

    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/sudoku">Sudoku</Link>
            {/* <Link to="/conjugator">Conjugator</Link> */}
        </div>
    )
}

export default Navbar;