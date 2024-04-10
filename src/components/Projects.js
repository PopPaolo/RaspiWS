import {Route, Routes} from "react-router-dom";
import TicTacToe from "./TicTacToe";
import Test from "./Test";

function Projects() {
    return (<>
        This is the Projects Page!!!
        <Routes>
            <Route path={"TicTacToe"} element={<TicTacToe />} />
            <Route path={"test"} element={<Test />} />
        </Routes>
        <div class="container">
            <div class="row">
                <ProjectCard proj={"TicTacToe"} />
                <ProjectCard proj={"test"} />
            </div>
        </div>
    </>)
}

function ProjectCard({ proj }) {
    return (
        <a class="col" href={`~/${proj}`}>{proj}!!</a>
    )
}

export default Projects;

