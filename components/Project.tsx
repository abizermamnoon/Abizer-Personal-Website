export default function Project(props){
    return(
        <p>
            <a href = {props.link}  className = "project-wrapper">
                    <div className ='project-box'>
                        <img src = {props.image} id = "flan-event" alt = {props.alt} />
                        <h2> {props.title}</h2>
                        <p>{props.description}  </p>

                    </div>
                </a>
        </p>
    )
}