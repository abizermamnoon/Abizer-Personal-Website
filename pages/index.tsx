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
                    I am an international student from India (living in Dubai) studying Economics and Data Science at Claremont McKenna College. <br/>
                    On campus, I work as a Research Assistant for Salvatori Institute where I research pressing issues facing society and engage with Speakers who talk about Abortion policies or demagoguery in current politics.
                    I am also a Career Services mentor and Founder and President of Claremont Culinary Club <br/>
                    I am passionate about Data Science related fields like Product Management, Artificial Intelligence, Machine Learning and Software Engineering <br/>
                    In my free time, I enjoy <a href ="https://www.instagram.com/claremontculinaryclub/">cooking and baking </a>
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
