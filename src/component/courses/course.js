
import { Col, Container, Row } from "react-bootstrap";
import './course.css'
import { Link } from "react-router-dom";
function Course(props){
    return(
        <>
        <Container >
            <Row className="py-5">
            <Col md={6} className="text-center">
            <h1 className="html-title">{props.courseName}</h1>
            <p>{props.courseInfo}</p>
            <button className="course-btn">
                <Link to={props.courseName} className="text-decoration-none">Learn {props.courseName}</Link>
            </button>
            <button className="course-btn bg-primary">Video Toturial</button>
            <button className="course-btn">{props.courseName} Refrences</button>
            </Col>
            <Col md={6}>
                <div className="course-right-container">
                    <h1>{props.courseName} Example:</h1>
                    <div className="example">
                    <p>{props.courseExample}</p>
                    </div>
                    <button className="course-btn">Try it Yourself</button>
                </div>
            </Col>
            </Row>
        </Container>
        </>
    )
}

export default Course