import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import './maincss.css'

function CssBackground(){
    return(
        <>
        <Container>
            <Row>
            <hr />
            <h1>CssBackground tutorial</h1>
            <hr />
            <div className="d-flex justify-content-between py-5">
            <Button className="bg-black"> 
                <Link className="text-decoration-none text-danger" to={'#'}>Pervious</Link>
            </Button>
            <Button className="bg-black"> 
                <Link className="text-decoration-none text-danger" to={'#'}>Next </Link>
            </Button>
            </div>
            <div className="css-information">
                <h3>css</h3>
                <p>css means hyper text language markup language</p>
                <p>css is very easy and very nice</p>
                <p>css have a lot of good tutorial in youtube</p>
            <div className=" py-5">
                <Button className="p-3 bg-success">css websites for learning</Button>
                <hr />
                <Button className="p-3 bg-black"> css video tutorials for learning</Button>
            </div>
            </div>
            {/* css canvas example */}
            <div>
                <h2 className="py-3">Easy Learning with css "Try it Yourself"</h2>
                <p>With our "Try it Yourself" editor, you can edit the css code and view the result:</p>
                <div className="css-dif-example-container">
                    <h2>css canvas example :</h2>
                    <div className="css-dif-example">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero ipsa commodi amet asperiores maiores ducimus excepturi voluptatum, aspernatur earum, mollitia fugiat quidem quibusdam dolore iure omnis modi aliquam a eius?
                    </div>
                    <Button className="bg-success px-5">Try it yourself</Button>
                </div>
            </div>
            <hr />
            {/* css defination exercise */}
            <div>
                <h3>css Exercises</h3>
                <p>This css tutorial also contains nearly 100 css exercises.</p>
                <div className="css-defination-exercise-container">
                    <h2>Test Yourself With Exercises</h2>
                    <div className="css-defination-exercise">
                        <h2>Exercise : </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum similique nostrum corporis quod optio possimus atque delectus quae facilis odit debitis quo sunt asperiores soluta inventore nisi, suscipit deserunt quia!
                            <input type="text" />
                        </p>
                    </div>
                </div>
            </div>
            <hr />
            {/* css refrences */}
            <div className="css-refrences">
                <h2>css References</h2>
                <p>At W3Schools you will find complete references about css elements, attributes, events, color names, entities, character-sets, URL encoding, language codes, HTTP messages, browser support, and more:
                </p>
                <button className="refrence-btn">css canvas</button>
                <button className="refrence-btn">Browser suppert</button>
                <button className="refrence-btn">css color </button>
                <button className="refrence-btn">fonts size </button>
                <button className="refrence-btn">themes</button>
                <button className="refrence-btn">video </button>
                <button className="refrence-btn">audio </button>
                <button className="refrence-btn">coding support</button>
                <button className="refrence-btn">url information</button>
                <button className="refrence-btn">style in css</button>
                <button className="refrence-btn">encoding</button>
                <button className="refrence-btn">decoding</button>

            </div>
            </Row>
        </Container>
        </>
    )
}

export default CssBackground