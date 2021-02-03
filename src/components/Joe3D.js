
import { Button, Carousel, CarouselItem, Col, Jumbotron, Row } from "react-bootstrap"
import { ArrowLeft } from "react-feather"
import { Link } from "react-router-dom"

const Joe3D = () => {


    return (
        <Col className="fade-in">
            <Row className="ml-2">
                <Link to="/" >
                    <Button variant={'primary'} style={{ minWidth: "150px", maxWidth: "150px", minHeight: "150px", maxHeight: "150px" }} >
                        <h2 className="bit">{'Back to intro'}</h2>
                        <ArrowLeft size="40px" />
                    </Button>
                </Link>
            </Row>

            <Row xl={3} lg={2} md={2} sm={1} className="mt-3 ml-auto mr-auto" style={{ justifyContent: "center" }}>

                <Jumbotron>
                    <Carousel style={{ width: "100%" }}>
                        <CarouselItem>
                            <h1>About</h1>
                        </CarouselItem>
                    </Carousel>
                </Jumbotron>
            </Row>
        </Col>


    )
}

export default Joe3D