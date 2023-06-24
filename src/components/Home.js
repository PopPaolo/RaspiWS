function Home() {
    return <>
        <div className={'main-intro-container'}>
            <img className={'main-intro-pic'} src={'media/Headshot_1.png'} alt={"Headshot 1"} height={200}/>
            <p className={'main-intro'}><span id={'hello'}>Hello,</span> My name is Paolo Pop and I am a Software Engineering student at
            <a className={'rit-link'} href={'https://www.rit.edu'}> Rochester institute of technology</a>. </p>
        </div>
    </>
}

export default Home