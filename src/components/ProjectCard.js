import { Card } from "react-bootstrap"
import ProjectModal from "./ProjectModal"


const ProjectCard = ({ project }) => {
    const css = {
        card: {
            margin: "10px",
            height: "450px",
            filter: project.disabled ? "brightness(30%)" : "",
            opacity: project.disabled ? "90%" : ""
            
        },
        cardImg: {
            height: "250px",
            objectFit: "cover",
            borderRadius: "4px"
        }
    }

    return (
        <div key={project.name}>
            <Card style={css.card} >
                {project.image
                    ? <Card.Img variant="top" src={project.image} style={css.cardImg} />
                    : <div style={{ background: project.style.background, color: project.style.color, borderRadius: "4px" }}>
                        {project.icon}
                    </div>
                }
                <Card.Body>
                    <Card.Title>{project.name}</Card.Title>
                    <Card.Text style={{ height: "70px" }}>
                        {project.text}
                    </Card.Text>
                    <div style={{ textAlign: "right" }}>

                        <ProjectModal project={project} />
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}


export default ProjectCard