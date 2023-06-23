import React, { useEffect, useState, useMemo } from "react";
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import "./homepage.css"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import software from "./assets/creative.jpeg";
import testfield from "./assets/default.jpeg";
import studyfield from "./assets/interactive.jpeg";

import { downloadMedia, getSettingByTitle } from '../../../helpers/fakebackend_helper';


const Home = () => {
    const [homeImages, setHomeImages] = useState([]);
    useEffect(() => {
        getSettingByTitle('homeImages').then(res => {
            console.log("homeimages", JSON.parse(res.value));
            setHomeImages(JSON.parse(res.value));
        })
    }, []);

    return (
        <React.Fragment>
            <section className="section pb-0 hero-section" id="home">
                <Carousel>
                    {
                        homeImages.map((e, key) =>

                            <div key={key}>
                                <div className="ca-background">
                                    <img src={downloadMedia(e.media)} alt="" />
                                </div>
                                <div className="ca-title">
                                    <div className='slide-inner-wrapper'>
                                        <div className='text-center'>
                                            <h1 className="home-slide-title">{e.title}</h1>
                                        </div>
                                        <p className="text-white home-slide-sub-title pt-5">{e.description}</p>
                                    </div>
                                    <div className='background-overlay'></div>
                                </div>
                            </div>

                        )
                    }
                </Carousel>
            </section>
        </React.Fragment>
    );
};

export default Home;