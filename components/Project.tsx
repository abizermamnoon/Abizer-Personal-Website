export default function Project(props: {
    title: string,
    description: React.ReactNode;
    link: string,
    image?: string,
    alt?: string,

}) {
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