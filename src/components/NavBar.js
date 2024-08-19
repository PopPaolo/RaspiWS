/*
    This is the file that contains the logic 
    and design for the navigation bar.
    @author Paolo Pop
*/

// ######################## FUNCTIONALITY ########################
// #
import { Link } from "react-router-dom"
// #
// ###############################################################

function Navbar() {
  return (
    <div className={"d-flex flex-row flex-lg-column gap-5 bg-dark pt-4 fs-1 position-fixed z-3 align-items-center shadow-lg"}
      style={{
        width: "15vh",
        height: "100%"
      }}
    >
      <Link to="/">
        <svg width="66" height="40" viewBox="0 0 66 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M39.0971 13.619L36.98 14.9486L26.5036 21.5284L21.5928 13.7092C19.979 11.1397 17.5835 9.81607 15.0438 9.54859C12.5876 9.28992 10.1261 10.0228 8.13009 11.2764C6.13411 12.53 4.405 14.4291 3.57141 16.7539C2.70948 19.1578 2.86157 21.8905 4.47535 24.46L6.59243 23.1303L4.47535 24.46L10.7149 34.3946L12.0446 36.5117L14.1616 35.1821L20.6033 31.1363L26.3401 27.5333L26.341 27.5349L39.6393 19.1828L39.6423 19.1875L44.5492 27.0003C46.163 29.5698 48.5585 30.8935 51.0982 31.161C53.5544 31.4196 56.0159 30.6867 58.0119 29.4331C60.0079 28.1795 61.737 26.2805 62.5706 23.9556C63.4326 21.5517 63.2805 18.8191 61.6667 16.2496L59.5496 17.5792L61.6667 16.2495L56.7598 8.43666L55.7319 6.8001L55.4997 6.43053L55.4448 6.34308L55.4315 6.32184L55.4282 6.3166L55.4274 6.3153L55.4272 6.31498L55.4271 6.3149L53.3101 7.64462L55.4271 6.31487L54.0974 4.19796L51.9804 5.52754L39.0971 13.619Z"
            stroke="white" stroke-width="6" />
        </svg>

        {/* <i className="bi bi-house-fill text-white"></i> */}
      </Link>
      <Link to="/sudoku">
        <i className="bi bi-dice-3-fill text-white"></i>
      </Link>
      {/*<Link to="/conjugator">Conjugator</Link> */}
    </div>
  )
}

export default Navbar
