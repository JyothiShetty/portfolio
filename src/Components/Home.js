import React from 'react'
import { Row, Col} from 'react-bootstrap';
import { FaInstagram, FaGithub, FaLinkedin} from "react-icons/fa";


function Home() {
    return (
        <div className="container-fluid bg-dark">
            <Row>
                <Col>
                    <div className="d-flex justify-content-center align-items-center">
                        <img src="https://avatars0.githubusercontent.com/u/43513234?s=400&u=659a793442c3d8326c8d2f909c1de41c672209b2&v=4" alt="photo" className="m-5 shadow-lg" style={{borderRadius:"100%",width:"250px"}}/>
                    </div>
                </Col>
                <Col className="d-flex justify-content-center align-items-start flex-column">
                    <h1 style={{fontSize:"72px",color:"#919191"}}>Jyothi Shetty</h1>
                    <h3 style={{color:"#717171"}}>Web Developer</h3>

                    <div>
                        <a className="m-2" href="https://google.com" target="_blank"><FaInstagram color="#efefef" fontSize="32px"/></a>
                        <a className="m-2" href="https://www.linkedin.com/in/jyothi-b-r-3158621b1" target="_blank"><FaLinkedin color="#efefef" fontSize="32px"/></a>
                        <a className="m-2" href="https://github.com/JyothiShetty" target="_blank"><FaGithub color="#efefef" fontSize="32px"/></a>
                        

                    </div>

                </Col>
            </Row>
           
        </div>
    )
}

export default Home
