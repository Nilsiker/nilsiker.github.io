
import { Button, Col, Row } from "react-bootstrap"
import { ArrowLeft, Book, Box, Code, GitHub } from "react-feather"
import ProjectCards from "./ProjectCards"
import { Link } from 'react-router-dom'


const Projects = () => {
    const css = {
        containerStyle: {
            height: "100%",
            paddingTop: "100px",
            paddingBottom: "1vh",
        },
        bit: {
            fontFamily: "Masaaki"
        }
    }

    const projects = [

        {
            name: "Vectovert",
            image: null,
            icon: <Code size="250" />,
            text: "A Vectorworks plugin that converts DXF files to SVG with custom data for SCADA purposes.",
            description: [
                <i>Vectovert is a Python script that converts DXF files to SVG files. The repository includes a plugin script for Vectorworks 2021 and a standalone script for use outside of the Vectorworks interface.</i>,
                <p>The application uses ezdxf and svgwrite to parse DXF files, convert graphical DXF entities to SVG elements, inject them with custom attributes and finally write them to a SVG file.</p>,
                <p>Fork of a university project, which I partook in. (<a href="https://github.com/Manisprani/Vectovert">https://github.com/Manisprani/Vectovert</a>).</p>,
                <Button href="https://github.com/Nilsiker/Vectovert" className="btn-teal">
                    GitHub <GitHub />
                </Button>
            ],
            style: {
                background: "teal",
                color: "white"
            },
            disabled: false
        },
        {
            name: "Brother Mouse",
            icon: <Book size="250" />,
            text: "An ascii-based game using ROT.js and TypeScript. Prove your devotion as a mouse priest!",
            route: "/brother-mouse",
            description:
                [
                    <i><b>Wake up, Brother!<br />Your mice need you.</b></i>,
                    <i>As the denizens of Gnawtingham starts putting their faith in the dark god Golgoth, will your resolve be strong enough to turn the tide?</i>,
                    <hr />,
                    <p>An ASCII adventure designed using ROT.js and TypeScript. It is (by its very nature) heavily inspired by classics such as Rogue and Angband, and draws further inspiration from  <a href="http://www.mouseguard.net/">Mouse Guard</a>, by David Petersen. At the moment, no mobile controls are planned, so make sure you have a keyboard at hand!</p>,
                    <p>It is very much a WIP. Once in a blue moon, however, you might stumble upon the game at a playable state and be forced to battle the forces of evil and show your mouse village the way back into the light!!</p>,
                    <b>Proceed at your own peril...</b>,
                    <Button disabled variant="dark">
                        Coming soon
                    </Button>
                ],
            style: {
                background: "#DB7",
                color: "#16161D"
            },
            disabled: false
        },
        {
            name: "Glytt",
            image: null,
            icon: <Box size="250" />,
            text: <p>A custom 3D rendering engine in C++, with the ambition to become a game engine.</p>,
            description: [
                <p><i>An OpenGL engine made in C++.</i></p>,
                <p>A huge thanks to <a href="https://www.youtube.com/c/TheChernoProject">TheCherno</a> over at YouTube, for continuously inspiring with your videos and how-tos!</p>,
                <Button href="https://github.com/nilsiker/glytt" variant="dark">
                    GitHub <GitHub />
                </Button>],
            route: "/joe3d",
            //link: "https://nilsiker.github.io/joe3d",
            style: { background: "black", color: "white" },
            variant: "dark",
            disabled: false,
        },
    ]


    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

    return (
        <Col className="fade-in">
            <Row className="ml-2">
                <Link to="/" >
                    <Button variant={'primary'} style={{ minWidth: "150px", maxWidth: "150px", minHeight: "150px", maxHeight: "150px" }} >
                        <h2 style={css.bit}>{'Back to intro'}</h2>
                        <ArrowLeft size="40px" />
                    </Button>
                </Link>
            </Row>

            <Row xl={3} lg={2} md={2} sm={1} className="mt-3 ml-auto mr-auto" style={{ justifyContent: "center" }}>

                <ProjectCards projects={projects} />
            </Row>
        </Col>
    )
}

export default Projects