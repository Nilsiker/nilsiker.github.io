
import ProjectCard from "./ProjectCard"

const ProjectCards = ({ projects }) => {

    return <>{
        projects.map(p => (<div key={p.name}>
            <ProjectCard project={p} />
        </div>
        ))
    }</>
}

export default ProjectCards