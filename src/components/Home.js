import pb from '../media/pb.png'
import { BookOpen, User, Briefcase, ArrowRight, Paperclip } from 'react-feather'
import { Row, Col, Button } from 'react-bootstrap'
import './styles/Content.scss'
import Cardlet from './Cardlet'
import { Link } from 'react-router-dom'

const Home = () => {
    const sidePadding = "2vw"
    const iconSize = "30px"

    const css = {
        content: {
            height: "100vh",
        },
        lilPadding: {
            paddingLeft: "0.5vw",
            paddingRight: "0.5vw",
        },
        bit: {
            fontFamily: "Masaaki"
        }
    }

    const intro = {
        introduction: [
            {
                title: 'Andreas Nilsson',
                subtitle: 'Web and Software Developer',
                paragraphs: [
                    "Curious and driven techy. A former dental school student that segued into computer science by working at a dementia care center for little over a year. Yes, it was a rather intense journey!",
                    "I am closing in on graduation for three year programme in computer science at Lund University, and I'm constantly looking for new tech and tools to help grow my coding and project management skills."
                ],
                style: ''
            }
        ],
        educationMerits: [
            {
                title: 'Computer Science and Engineering',
                subtitle: 'Campus Helsingborg, LTH',
                paragraphs: [
                    "Having nearly finished the bachelor's programme in Computer Science, I've acquired a solid understanding of programming and object-oriented design. The programme has helped me accrue a sizeable and varied skill set, to be listed below once I get to it!",
                ],
                style: 'text-primary'
            }
        ],
        jobMerits: [
            {
                title: 'Student Ambassador',
                subtitle: 'Knowit Syd Group AB',
                paragraphs: [
                    "When I'm not attending job faires and chatting up people, I'm keeping an eye out for interested and interesting students with potential to join the ranks!",
                ],
                style: 'text-primary'
            },
            {
                title: 'Teaching Assistant',
                subtitle: 'Campus Helsingborg, LTH',
                paragraphs: [
                    "I've been helping out the university as a TA on several courses, helping students learn programming basics such as syntax and simpler algorithms, but also intermediate concepts such as abstract datatypes, interfaces and time complexity.",
                    "In addition to programming I've also helped out as a lab supervisor during courses for Computer networking and architecture. Lastly, I've acted as project supervisor for an app development project, done during the Computer networking course."
                ],
                style: 'text-primary'
            }
        ]
    }

    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

    return (
        <Row className="fade-in" style={{
            paddingLeft: sidePadding,
            paddingRight: sidePadding,
        }}>
            <Col xl={5} lg={6} style={css.lilPadding} >
                <Cardlet
                    image={pb}
                    icon={<User className="mb-2" size={iconSize} style={{ color: "#888888" }} />}
                    merits={intro.introduction}
                />
            </Col>

            <Col xl={5} lg={6}>
                <Row style={css.lilPadding}>
                    <Cardlet
                        image=""
                        icon={<BookOpen className="mb-2" size={iconSize} style={{ color: "#888888" }} />}
                        merits={intro.educationMerits}
                    />
                </Row>
                <Row style={css.lilPadding}>
                    <Cardlet
                        image=""
                        icon={<Briefcase className="mb-2" size={iconSize} style={{ color: "#888888" }} />}
                        merits={intro.jobMerits}
                    />
                </Row>
            </Col>
            <Col xl={1} lg={5} md={6} sm={8} className="mb-5 ml-xl-2 ml-lg-auto ml-md-auto ml-sm-auto ml-xs-auto mr-xs-auto mr-auto">
                <Row xl={1} lg={2} md={2} sm={2} xs={2}>
                    <a href="/files/CV.pdf" target="_blank">
                        <Button variant={'success'} className="mb-1  " style={{ minWidth: "150px", maxWidth: "150px", minHeight: "150px", maxHeight: "150px" }} >
                            <h2 className="bit">Resume as PDF</h2>
                            <Paperclip size="40px" />
                        </Button>
                    </a>
                    <Link to="/projects">
                        <Button variant={'primary'} style={{ minWidth: "150px", maxWidth: "150px", minHeight: "150px", maxHeight: "150px", }}>
                            <h2 className="bit">{'To Portfolio'}</h2>
                            <ArrowRight size="40px" />
                        </Button>
                    </Link>
                </Row>
            </Col>
        </Row>)
}

export default Home;