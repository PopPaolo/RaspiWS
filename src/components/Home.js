import { Typography, styled } from "@mui/material";

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '3.5rem',
  fontWeight: 'bold',
  textAlign: 'center',
  margin: theme.spacing(2),
  textShadow: '1px 1px 2px #f56800',
}));

const IntroParagraph = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.dark,
  fontSize: '1.2rem',
  textAlign: 'left',
  margin: theme.spacing(2.8),
  textShadow: '1px 1px 2px #888'
}));

function Home() {
  return (
    <div style={{ marginTop: '3rem' }}>
      <Title variant="h1">
        This is the Home Page
      </Title>
      <IntroParagraph variant="body1">
        Hello, my name is Paolo Pop and I am a Software Engineering student at 
        <a
          style={{
            display: "inline",
            textDecoration: "none",
            color: '#f56800'
          }}
          href={"https://www.rit.edu"}>
          {" "}RIT{" "}
        </a>
        I have a strong passion for software development and have been driven
        toward making a career out of it since I was young. 
        Some of the technologies I have worked with include Ruby with the help of Capybara
        and Selenium Webdriver to automate system tests, JS with jQuery for
        front end components, and a .NET based web application in C#, HTML and
        SQL for DB. 
        I am looking to make connections with other developers and
        expand my knowledge in order to grow within the discipline and better
        myself professionally.
      </IntroParagraph>
    </div>
  );
}

export default Home;
