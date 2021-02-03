import { Card } from 'react-bootstrap'
import Merit from './Merit'
const Cardlet = ({image, icon, merits }) => {

    let cardStyle = {
        textAlign: "left",
        background: "#DDDDDDDD",
    }

    return (
        <Card style={cardStyle} className="mb-3 mr-auto ml-auto  ">
            <Card.Body>
                <Card.Img src={image} className="mb-3" />
                {icon}
                {merits.map(m => <Merit key={m.title} title={m.title} subtitle={m.subtitle} paragraphs={m.paragraphs} style={m.style}/>)}
            </Card.Body>
        </Card>
    )
}

export default Cardlet