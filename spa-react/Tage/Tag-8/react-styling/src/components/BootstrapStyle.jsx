import "bootstrap/dist/css/bootstrap.min.css";
import { Button, CardBody, CardImg, CardText, CardTitle, Container } from "react-bootstrap";

const BootstrapStyle = () => {
  return (
    <>
        <Button variant="success">Klick mich</Button>
        <Container className="d-flex justify-content-center">
            <p>Hallo, Ich bin ein Programmierer</p>
            <Button variant="primary">Klick mich</Button>
        </Container>
        <CardBody>
            <CardTitle>React Styling</CardTitle>
            <CardText>React has a few different ways to style components. You can use regular CSS files, inline styles, or CSS-in-JS libraries.</CardText>
            <CardImg src="https://via.placeholder.com/150" alt="Card image" />
            <Button>Finde</Button>
        </CardBody>
        <Button a="b" variant="danger">Klick mich</Button>
    </>
  )
}

export default BootstrapStyle