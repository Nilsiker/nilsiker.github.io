import { useState } from "react";
import { Button, Modal } from "react-bootstrap"

const ProjectModal = ({ project }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button disabled={project.disabled} onClick={handleShow}
                style={project.style ? { background: project.style.background, color: project.style.color } : ""}
                variant={project.variant ? project.variant : ""}>
                {project.disabled ? "Coming soon" : "Read more"}
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{project.name}</Modal.Title>
                </Modal.Header>


                <Modal.Body>
                    {
                        project.image
                            ? <img src={project.image} alt="" />
                            : <div style={{ background: project.style.background, color: project.style.color, textAlign: "center" }}>
                                {project.icon}
                            </div>
                    }
                    <hr />
                    <div>
                        {
                            project.description.map(p => (
                                <p key={project.description.indexOf(p)}>{p}</p>
                            ))
                        }
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ProjectModal