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
                I am a Sophomore at CMC studying Economics and Data Science. <br/>
                In the past, I have led a team in which we designed a mini wordle and a stats project that studied the factors affecting Professor ratings and won. <br/>
                On campus, I am a Salvatori Center Research Assistant wherein I am leading a research team in which we are studying the reentry programs for prisoners. I am also a Career Service mentor. In this role, I help students build their resumes, cover letters, and help the career coaches with administrative tasks.<br/>
                I am passionate about tech and I am enjoying a web development club where I have been creating my personal website and Project AI workshops where I am learning the fundamentals of AI and Machine Learning.
                <br/>I am passionate about the technology industry and I am looking for more experience in product management, SWE, and data science-related fields like Artificial Intelligence or Machine Learning. <br/>One fun fact about me is that I enjoy cooking and baking so I founded a <a href ="https://www.instagram.com/claremontculinaryclub/">Culinary Club</a> on campus in which we have biweekly meetings where we cook or bake savory/sweet food.
                </p>

                <hr/>
                <p> Some events we've set up</p>
                <a href = "https://www.instagram.com/p/CbpIEqELjR_/" className = "project-wrapper">
                    <div className ='project-box'>
                        <img src = "flan-event.png" id = "flan-event" />
                        <h2> Making Flan</h2>
                        <p>We baked Flan, and it was absolutely delicious! 😋</p>

                    </div>
                </a>
                
                <a href = "https://www.instagram.com/p/Cc1BdJKPt1I/" className = "project-wrapper">
                    <div className ='project-box'>
                        <img src = "cookie-event.png" id = "flan-event" />
                        <h2> Baking Cookies</h2>
                        <p>We baked Chocolate Chip Cookies! Everyone loved it so much that there were none left!</p>

                    </div>
                </a>
                
            </div>
            
        </>
    );
}
