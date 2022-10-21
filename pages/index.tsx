import Head from "next/head";

export default function Index() {
    return (
        <>
            <Head>
                <title>Abizer's Website</title>
                <meta name = "description" content = "Welcome to my Portfolio" />
            </Head>

            <div id = "navbar">
                <span>Abizer Mamnoon</span>
            </div>
            <div id = "container">
                <div id = "top-section">
                <img src = "abizer-pic.png" id = "abizer-pic" />
                <h1>Hi, nice to meet you! <br/> I'm Abizer. </h1>

                </div>
                <p>
                I am a Sophomore at Claremont McKenna College studying Economics and Data Science. <br/>
                In the past, I have led a team in which we designed a mini wordle and a stats project that studied the factors affecting Professor ratings and won. <br/>
                On campus, I am a <a href = "https://www.salvatoricenter.org/">Salvatori Center Research Assistant </a> and I am currently leading a research team in which we are studying the reentry programs for prisoners. I am also a Career Service mentor at <a href = "https://www.cmc.edu/career-services">Soll Center for Student Opportunity</a>. In this role, I help students build their resumes, cover letters, and help the career coaches with administrative tasks.<br/>
                I am passionate about the tech industry because it is dynamic. To explore my passion for tech, I am enjoying a web development club where I have been learning web design using CSS, React, MangoDB and <a href = "https://www.p-ai.org/Project"> AI workshops </a>where I am learning the fundamentals of AI and Machine Learning.
                <br/>I am passionate about the technology industry and I am looking for more experience in product management, SWE, and data science-related fields like Artificial Intelligence or Machine Learning. <br/>One fun fact about me is that I enjoy cooking and baking. I wanted to share my passion with a like-minded community on campus so I founded a <a href ="https://www.instagram.com/claremontculinaryclub/">Culinary Club</a> on campus in which we have biweekly meetings where we cook or bake savory/sweet food.
                </p>

                <hr/>
                <p> Some of my Achievements:</p>
                
                <a href = "https://github.com/abizermamnoon/Mini-Wordle-with-AI.git" className = "project-wrapper">
                    <div className ='project-box'>
                        <img src = "wordle.png" id = "flan-event" />
                        <h2> Designed a Mini-Wordle</h2>
                        <p>I designed mini-Wordle. It's a mini version because it's dictionary is smaller than the actual wordle. I think this is nicer because it is much easier to guess a word. </p>

                    </div>
                </a>

                <a href = "https://www.salvatoricenter.org/category/past-event/" className = "project-wrapper">
                    <div className ='project-box'>
                        <img src = "salvatori-team.jpg" id = "flan-event" />
                        <h2> Salvatori Team</h2>
                        <p>This is my Salvatori team. We are a small, tight-knit community who are passionate about the nitty-gritty components of the US Constitution such as religion in high schools, the Supreme Court decison on abortion and freedom to be an individual in scoiety  </p>

                    </div>
                </a>

                <a href = "https://www.instagram.com/p/CbpIEqELjR_/" className = "project-wrapper">
                    <div className ='project-box'>
                        <img src = "flan-event.png" id = "flan-event" />
                        <h2> Making Flan</h2>
                        <p>One of the highlights of our Culinary Club events was baking flan, and it was absolutely delicious! 😋</p>

                    </div>
                </a>
                
                
            </div>
            
        </>
    );
}
