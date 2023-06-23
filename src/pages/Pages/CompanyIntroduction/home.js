import React from 'react';
import { Col, Container, Row, CardBody, Card } from 'reactstrap';
import { Link } from 'react-router-dom';
// import "./homepage.css"
import Sliders from './Sliders';
import sliderData from './sliderData';




const Home = () => {
    return (
       
        <React.Fragment>             
            <section className="section pt-0 hero-section" id="home">
                
                    <div className='p-3'>
                        <Row>
                            <Col lg={12}>
                                <Card>

                                    <CardBody>
                                        <div className="live-preview">
                                            <Sliders sliderData={sliderData}/>

                                        </div>

                                    </CardBody>
                                </Card>
                            </Col>                            
                        </Row>
                    </div>

                


            </section>
         
        </React.Fragment>
       
    );
};

export default Home;