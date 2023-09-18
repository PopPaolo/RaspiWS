/*
    This is the file that defines the navigation menu.
    @author Paolo Pop
 */

import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <div className={"navigation"}>
        <Link to={"/"}>
          {" "}
          alt={"Home icon"} width={30}/>
        </Link>
      </div>
    </>
  );
}

export default Navigation;
