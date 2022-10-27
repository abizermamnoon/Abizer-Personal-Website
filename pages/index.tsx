import Head from "next/head";

import Project from "../components/Project";
import projects from "../data/projects";
import ReactTypingEffect from "react-typing-effect";
import { useState } from "react";
export default function Index() {
    const [open, setOpen] = useState(false);
    const[tab,setTab] = useState("about");
    const [search, setSearch] = useState("");
    const filteredProjects = projects.filter( d => d.title.toLowerCase().includes(search.toLowerCase));
    const myName = "Abizer"
    const wordle = {
        title:"Designed a Mini-Wordle",
        description: "I designed mini-Wordle. It's a mini version because it's dictionary is smaller than the actual wordle. I think this is nicer because it is much easier to guess a word.",
        image: "wordle.png",
        link: "https://github.com/abizermamnoon/Mini-Wordle-with-AI.git",
    }
    
    

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
                <h1>Hi, nice to meet you! <br/> I'm <ReactTypingEffect text = {["Abizer"]}/>. </h1>

                </div>
                <button className= {(tab ==="about") ? "tab selected": "tab"} onClick = {() => setTab("about")}>About</button>
                <button className= {(tab ==="past achievements") ? "tab selected": "tab"} onClick = {() => setTab("past achievements")}>Past Achievement</button>
                <button className= {(tab ==="On Campus Activities") ? "tab selected": "tab"} onClick = {() => setTab("On Campus Activities")}>On Campus Activities</button>
                {(tab === "about")?(
                    <p>
                    I am a Sophomore at Claremont McKenna College studying Economics and Data Science. 
                    </p>
                ):(tab === "past achievements") ? (
                    <p>
                        In the past, I have led a team in which we designed a mini wordle and a stats project that studied the factors affecting Professor ratings and won. <br/>
                    </p>
                ) : (
                    <p>
                    On campus, I am a <a href = "https://www.salvatoricenter.org/">Salvatori Center Research Assistant </a> and I am currently leading a research team in which we are studying the reentry programs for prisoners. I am also a Career Service mentor at <a href = "https://www.cmc.edu/career-services">Soll Center for Student Opportunity</a>. In this role, I help students build their resumes, cover letters, and help the career coaches with administrative tasks.<br/>
                    I am passionate about the tech industry because it is dynamic. To explore my passion for tech, I am enjoying a web development club where I have been learning web design using CSS, React, MangoDB and engaging with<a href = "https://www.p-ai.org/Project"> AI workshops </a>where I am learning the fundamentals of AI and Machine Learning.
                    <br/>I am passionate about the technology industry and I am looking for more experience in product management, SWE, and data science-related fields like Artificial Intelligence or Machine Learning. <br/>One fun fact about me is that I enjoy cooking and baking. I wanted to share my passion with a like-minded community on campus so I founded a <a href ="https://www.instagram.com/claremontculinaryclub/">Culinary Club</a> on campus in which we have biweekly meetings where we cook or bake savory/sweet food.
                    </p>

                )}
                         

                <hr/>
                <p> Some of my Achievements:</p>
                <input type = "text" value = {search} onChange={ e => setSearch(e.target.value)}/>
                
                <a href = {wordle.link} className = "project-wrapper">
                    <div className ='project-box'>
                        <img src = {wordle.image} id = "flan-event" />
                        <h2> {wordle.title}</h2>
                        <p>{wordle.description} </p>

                    </div>
                </a>

                {projects.map(d => (
                    <Project
                    title = {d.title}
                    description = {d.description}
                    link = {d.link}
                    image = {d.image}
                    />
                ))}  
            </div>             
                
            
        </>
    );
}
