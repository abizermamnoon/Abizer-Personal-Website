import Head from "next/head";

import Project from "../components/Project";
import projects from "../data/projects";
import blog from "../data/blog";
import ReactTypingEffect from "react-typing-effect";
import { useState } from "react";
export default function Index() {
    const [open, setOpen] = useState(false);
    const[tab,setTab] = useState("about");
    const [search, setSearch] = useState("");
    
    const myName = "Abizer"
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
                <h1>Hi, nice to meet you! <br/> I'm <ReactTypingEffect text = {["Abizer"]}/> </h1>

                </div>
                <button className= {(tab ==="about") ? "tab selected": "tab"} onClick = {() => setTab("about")}>About</button>
                <button className= {(tab ==="blog") ? "tab selected": "tab"} onClick = {() => setTab("blog")}>My Blog</button>
                <button className= {(tab ==="abizer art") ? "tab selected": "tab"} onClick = {() => setTab("abizer art")}><a href = "https://www.instagram.com/ab_just_for_fun/"> Abizer's Art  </a> </button>
                <button className= {(tab ==="projects") ? "tab selected": "tab"} onClick = {() => setTab("projects")}>Projects  </button>
                <button className= {(tab ==="culinary club") ? "tab selected": "tab"} onClick = {() => setTab("culinary club")}><a href = "https://www.instagram.com/claremontculinaryclub/">Culinary Club  </a> </button>

                {(tab === "about")?(
                    <p>
                    I am a Sophomore at Claremont McKenna College studying Economics and Data Science. <br/>
                    <br/>
                    In the past, I have led a team in which we designed a mini wordle and a stats project that studied the factors affecting Professor ratings and won. <br/><br/>

                    On campus, I am a <a href = "https://www.salvatoricenter.org/">Salvatori Center Research Assistant </a> and I am currently leading a research team in which we are studying the reentry programs for prisoners. I am also a Career Service mentor at <a href = "https://www.cmc.edu/career-services">Soll Center for Student Opportunity</a>. In this role, I help students build their resumes, cover letters, and help the career coaches with administrative tasks.<br/>
                    I am passionate about the tech industry because it is dynamic. To explore my passion for tech, I am enjoying a web development club where I have been learning web design using CSS, React, MongoDB and engaging with<a href = "https://www.p-ai.org/Project"> AI workshops </a>where I am learning the fundamentals of AI and Machine Learning.
                    <br/><br/>
                    I am passionate about the technology industry and I am looking for more experience in product management, SWE, and data science-related fields like Artificial Intelligence or Machine Learning. <br/><br/>
                    One fun fact about me is that I enjoy cooking and baking. I wanted to share my passion with a like-minded community on campus so I founded a Culinary Club on campus in which we have biweekly meetings where we cook or bake savory/sweet food.
                    </p>
                ):(tab === "blog") ? (
                    <p>
                        {blog.map(d => (
                            <Project
                                title = {d.title}
                                description = {d.description}
                                link = {d.link}
                                image = {d.image}
                                alt = {d.alt}
                                />
                            ))}  
                    </p>
                ) : (tab === "abizer art") ? (
                    <p>
                    
                    </p>

                ) : (tab === "projects") ? (
                    <p>
                       
                        {projects.map(d => (
                            <Project
                                title = {d.title}
                                description = {d.description}
                                link = {d.link}
                                image = {d.image}
                                alt = {d.alt}
                                />
                            ))}  
                            
                    </p>
                ) : (
                    <p>

                    </p>
                )}
                
                </div>
                </>

                )}
    
                              
            
                    
    
                         

                            
                    
                
            
        
