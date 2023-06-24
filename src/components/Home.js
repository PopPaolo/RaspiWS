function Home() {
    return <>
        <div className={'main-intro-container'}>
            <img className={'main-intro-pic'} src={'media/Headshot_1.png'} alt={"Headshot 1"} height={200}/>
            <Intro/>
        </div>
    </>
}

const Intro = () => {
    return <p className={'main-intro'}><span id={'hello'}>Hello,</span> My name is Paolo Pop and I am a Software
        Engineering student at
        <a className={'rit-link'} href={'https://www.rit.edu'}> RIT</a>.
        I have a strong passion for software development and have been driven toward making a career out of it since I was young. My skills include Java, Python, C++, HTML + CSS, JavaScript and various Web Design frameworks. I have experience using Version Control tools for automating tests, Project Management skills including Planning Methodologies, Scheduling, Estimating and Tracking projects. I am also proficient in Italian and Romanian.
        I am looking to make connections with other developers and expand my knowledge in order to grow within the discipline and better myself professionally.
    </p>

}

export default Home