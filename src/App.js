/*
    This is the file that defines the highest level of the React app.
    @author Paolo Pop
 */
import "./App.css";
import Home from "./components/Home";
import Sudoku from "./components/Sudoku/Sudoku";

function App({ theme }) {
  return (
    <>
      {/*<Home />*/}
      <Sudoku />
    </>
  );
}

export default App;
