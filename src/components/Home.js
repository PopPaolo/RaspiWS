/*
    This is the file that defines the Home page and its components.
    @author Paolo Pop
 */
import { Typography } from "@mui/material";

function Home() {
  return (
    <>
      <Typography variant={"h1"} my={"0.5em"}>
        This is the Home Page
      </Typography>
      <Typography variant={"h2"}>
        <span id={"hello"}>Hello,</span>
        My name is Paolo Pop and I am a Software Engineering student at
        <a className={"rit-link"} href={"https://www.rit.edu"}>
          {" "}
          RIT
        </a>
        .{" "}
      </Typography>{" "}
      <Typography variant={"h3"}>
        I have a strong passion for software development and have been driven
        toward making a career out of it since I was young. Some of the
        technologies I have worked with include Ruby with the help of Capybara
        and Selenium Webdriver to automate system tests, JS with jQuery for
        front end components, and a .NET based web application in C#, HTML and
        SQL for DB. I am looking to make connections with other developers and
        expand my knowledge in order to grow within the discipline and better
        myself professionally.
      </Typography>
    </>
  );
}

export default Home;
