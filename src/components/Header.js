
import Logo from '../media/logo.png'
import { Navbar, Nav, Row } from "react-bootstrap"
import { ArrowRight, GitHub, Linkedin, Twitter } from 'react-feather'
import { Link } from 'react-router-dom'


const Header = () => {
    const url_linkedin = "https://www.linkedin.com/in/andreas-nilsson-0b9895188/"
    const url_github = "https://github.com/nilsiker"
    const url_twitter = "https://twitter.com/Nilsiker"
    

    let text = {
        color: "#AAAAAA",
        fontFamily: "Masaaki",
    }

    let icon = {
        marginRight: "0px",
        marginLeft: "0px",
        marginTop: "5px",
        width: "45px",
        height: "45px",
        borderRadius: "4px",
        backgroundColor: "darkgrey",
        color: "#16161D"
    }

    let logo = {
        marginTop: "0px",
        marginBottom: "10px",
        width: "45px",
        borderRadius: "8px",
        backgroundColor: "darkgrey",
        color: "#16161D",
    }


    return <header>
        <Navbar style={{ background: "#16161DCC" }} variant="dark" expand="md" className="fixed-top">
            <Link to="/">
                <img src={Logo} style={logo} alt="" className="mr-3 mt-0" />
                <Navbar.Brand style={text} ><h1>NILSIKER</h1></Navbar.Brand>
            </Link>

            
            <Navbar.Toggle className="ml-auto" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Row className="ml-auto">
                        <Navbar.Brand style={text}> <h3> Find me online <ArrowRight/> </h3></Navbar.Brand>
                        <Nav.Link className="mr-2" href={url_linkedin} style={icon}><Linkedin  /></Nav.Link>
                        <Nav.Link className="mr-2" href={url_github} style={icon}><GitHub  /></Nav.Link>
                        <Nav.Link className="mr-2" href={url_twitter} style={icon}><Twitter  /></Nav.Link>
                    </Row>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    </header>

}

export default Header