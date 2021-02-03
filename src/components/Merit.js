
import { Card } from 'react-bootstrap'

const Merit = ({ title, subtitle, paragraphs, style }) => {

    return (<div key={title}>
        <Card.Title className={style + " bit"} > <h1>{title}</h1> </Card.Title>
        <Card.Subtitle className="mb-2 text-muted"> <h4 className="bit">{subtitle}</h4> </Card.Subtitle>
        {paragraphs.map(p => (
            <Card.Text key={paragraphs.indexOf(p)} className="text-dark" style={{ fontFamily: "Lato" }}>
                {p}
            </Card.Text>))}

    </div>)
}

export default Merit