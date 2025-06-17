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
                <img src = "abizer_pic.jpg" id = "abizer-pic" />
                <h1>Hi, nice to meet you! <br/> I'm <ReactTypingEffect text = {["Abizer"]}/> </h1>

                </div>
                <button className= {(tab ==="about") ? "tab selected": "tab"} onClick = {() => setTab("about")}>About</button>
                <button className= {(tab ==="blog") ? "tab selected": "tab"} onClick = {() => setTab("blog")}>My Blog</button>
                <button className= {(tab ==="projects") ? "tab selected": "tab"} onClick = {() => setTab("projects")}>Research  </button>

                {(tab === "about")?(
                    <p>
                    I am an Economics phD candidate at the University of Notre Dame I graduated from Claremont McKenna <i> Cum Laude </i> with a dual major in Economics and Data Science. <br/><br/>

                   
                    I am passionate about applied microeconomics. <br/><br/>
                    In my free time, I like to bake, cycle, play badminton and go on spontaneous hikes.
                    <br/><br/>
                    
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
                       
                        {projects.map((project, index) => (
                            <Project
                                key={index}
                                title={project.title}
                                description={project.description}
                                link={project.link}
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
    
                              
            
                    
    
                         

                            
                    
                
            
        
