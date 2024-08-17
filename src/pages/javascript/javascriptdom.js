import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import './mainjavascript.css'

function JsDom(){
    return(
        <>
        <Container>
            <Row>
            <h1>javascript Dom tutorial</h1>
            <div className="d-flex justify-content-between py-5">
            <Button className="bg-black"> 
                <Link className="text-decoration-none text-danger" to={'#'}>Pervious</Link>
            </Button>
            <Button className="bg-black"> 
                <Link className="text-decoration-none text-danger" to={'#'}>Next </Link>
            </Button>
            </div>
            <div className="javascript-information">
                <h3>javascript</h3>
                <p>javascript means hyper text language markup language</p>
                <p>javascript is very easy and very nice</p>
                <p>javascript have a lot of good tutorial in youtube</p>
            <div className=" py-5">
                <Button className="p-3 bg-success">javascript websites for learning</Button>
                <hr />
                <Button className="p-3 bg-black"> javascript video tutorials for learning</Button>
            </div>
            </div>
            {/* javascript defination example */}
            <div>
                <h2 className="py-3">Easy Learning with javascript "Try it Yourself"</h2>
                <p>With our "Try it Yourself" editor, you can edit the javascript code and view the result:</p>
                <div className="javascript-dif-example-container">
                    <h2>javascript defination example :</h2>
                    <div className="javascript-dif-example">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero ipsa commodi amet asperiores maiores ducimus excepturi voluptatum, aspernatur earum, mollitia fugiat quidem quibusdam dolore iure omnis modi aliquam a eius?
                    </div>
                    <Button className="bg-success px-5">Try it yourself</Button>
                </div>
            </div>
            <hr />
            {/* javascript defination exercise */}
            <div>
                <h3>javascript Exercises</h3>
                <p>This javascript tutorial also contains nearly 100 javascript exercises.</p>
                <div className="javascript-defination-exercise-container">
                    <h2>Test Yourself With Exercises</h2>
                    <div className="javascript-defination-exercise">
                        <h2>Exercise : </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum similique nostrum corporis quod optio possimus atque delectus quae facilis odit debitis quo sunt asperiores soluta inventore nisi, suscipit deserunt quia!
                            <input type="text" />
                        </p>
                    </div>
                </div>
            </div>
            <hr />
            {/* javascript refrences */}
            <div className="javascript-refrences">
                <h2>javascript References</h2>
                <p>At W3Schools you will find complete references about javascript elements, attributes, events, color names, entities, character-sets, URL encoding, language codes, HTTP messages, browser support, and more:
                </p>
                <button className="refrence-btn">javascript canvas</button>
                <button className="refrence-btn">Browser suppert</button>
                <button className="refrence-btn">javascript color </button>
                <button className="refrence-btn">fonts size </button>
                <button className="refrence-btn">themes</button>
                <button className="refrence-btn">video </button>
                <button className="refrence-btn">audio </button>
                <button className="refrence-btn">coding support</button>
                <button className="refrence-btn">url information</button>
                <button className="refrence-btn">style in javascript</button>
                <button className="refrence-btn">encoding</button>
                <button className="refrence-btn">decoding</button>

            </div>
            </Row>
        </Container>
        </>
    )
}

export default JsDom