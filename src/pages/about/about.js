import { Col, Container, Row } from "react-bootstrap";
import mukhtarimg from '../../assets/img/illustration4.png'
import Mynavbar from "../../component/navbar/navbar";
function About(){
    return(
        <>
        <Mynavbar />
        <Container className="bg-about">
            <Row>
            <h1>About us</h1>
            <h2 className="py-5 text-danger">This Fake W3schollWebsite created by Mukhtar Sultani </h2>
                <Col md={6}>
                    <img src={mukhtarimg} alt="" />
                </Col>
                <Col md={6}>
                    <h1>Mukhtar Sultani</h1>
                    <div className="bio-container">
                        <h2>Mukhtar Sultani Biography:</h2>
                        <p>Webdeveloper </p>
                        <p>youtuber </p>
                        <p>gamer</p>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default About