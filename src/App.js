/*
    This is the file that defines the highest level of the React app.
    @author Paolo Pop
 */
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App({ theme }) {
  return (<>
    <Home />
    {/* <Footer /> */}
  </>
  );
}

export default App;
