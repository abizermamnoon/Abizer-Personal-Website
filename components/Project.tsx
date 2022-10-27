export default function Project(props:{
    title: string,
    description: string,
    link:string,
    image: string,
}){
    return(
        <p>
            <a href = {props.link}  className = "project-wrapper">
                    <div className ='project-box'>
                        <img src = {props.image} id = "flan-event" />
                        <h2> {props.title}</h2>
                        <p>{props.description}  </p>

                    </div>
                </a>
        </p>
    )
}