import React, { useState } from 'react';
import Navbar from '../../Landing/navbar';
import Footer from '../../Landing/footer';
import "./home-page.css";
import { Button, Modal,Input,Label } from 'reactstrap';
// Import Images
import study_field from "../../../New folder/study_field.jpeg";
import company_introduction from "../../../New folder/company_introduction.jpeg";
import data_service from "../../../New folder/data_service.jpeg";
import question_service from "../../../New folder/question_service.jpeg"
// modal







const HomePage = () => {
    const [modal_center, setmodal_center] = useState(false);

    function tog_center() {
        setmodal_center(!modal_center);
    }
   
    function select_study_field(){
        document.getElementById("select-study-field").style.display='block';
        document.getElementById("image_study_field1").style.display ='block';
        document.getElementById("image_company_introduction1").style.display='none';
        document.getElementById("image_data_service1").style.display='none';
        document.getElementById("image_question_service1").style.display='none';
        document.getElementById("image_study_field2").style.display ='none';
        document.getElementById("image_company_introduction2").style.display='block';
        document.getElementById("image_data_service2").style.display='none';
        document.getElementById("image_question_service2").style.display='none';
    }
    function back_study_field(){
        document.getElementById("select-study-field").style.display='none';
        

    }
    function select_company_introduction(){
        document.getElementById("select-company-introduction").style.display='block';
        document.getElementById("image_study_field1").style.display ='none';
        document.getElementById("image_company_introduction1").style.display='block';
        document.getElementById("image_data_service1").style.display='none';
        document.getElementById("image_question_service1").style.display='none';
        document.getElementById("image_study_field2").style.display ='none';
        document.getElementById("image_company_introduction2").style.display='none';
        document.getElementById("image_data_service2").style.display='block';
        document.getElementById("image_question_service2").style.display='none';
    }
    function back_company_introduction(){
        document.getElementById("select-company-introduction").style.display='none';
    }
    function select_data_service(){
        document.getElementById("select-data-service").style.display='block';
        document.getElementById("image_study_field1").style.display ='none';
        document.getElementById("image_company_introduction1").style.display='none';
        document.getElementById("image_data_service1").style.display='block';
        document.getElementById("image_question_service1").style.display='none';
        document.getElementById("image_study_field2").style.display ='none';
        document.getElementById("image_company_introduction2").style.display='none';
        document.getElementById("image_data_service2").style.display='none';
        document.getElementById("image_question_service2").style.display='block';
    }
    function back_data_service(){
        document.getElementById("select-data-service").style.display='none';
    }
    function select_question_service(){
        document.getElementById("select-question-service").style.display='block';
        document.getElementById("image_study_field1").style.display ='none';
        document.getElementById("image_company_introduction1").style.display='none';
        document.getElementById("image_data_service1").style.display='none';
        document.getElementById("image_question_service1").style.display='block';
        document.getElementById("image_study_field2").style.display ='block';
        document.getElementById("image_company_introduction2").style.display='none';
        document.getElementById("image_data_service2").style.display='none';
        document.getElementById("image_question_service2").style.display='none';
    }
    function back_question_service(){
        document.getElementById("select-question-service").style.display='none';
    }
// function aaa(){
//     document.getElementById("image2").src = {data_service};
// }
    return (
        <React.Fragment>

            <div className="layout-wrapper landing" onLoad={tog_center}>
                <Navbar />
                <section className="section pb-0 hero-section" id="hero">
                    <div className='homepage-body'>
                      
                    <div className="select-field">
                        <div className="select-button1">
                        <a href='pages-study-field'> <Button color="success" outline className="shadow-none" onMouseOver={select_study_field} onMouseOut={back_study_field}>studyfield1</Button></a>
                          
                        </div>
                        <div className="select-button2">
                        {/* <button><a href='pages-company-introduction'>studyfield2</a></button> */}
                        <a href='pages-study-field'> <Button color="success" outline className="shadow-none" onMouseOver={select_company_introduction} onMouseOut={back_company_introduction}>studyfield1</Button></a>
                        </div>
                        <div className="select-button3">
                        {/* <button><a href='pages-data-service'>studyfield3</a></button> */}
                        <a href='pages-study-field'> <Button color="success" outline className="shadow-none"onMouseOver={select_data_service} onMouseOut={back_data_service}>studyfield1</Button></a>
                        </div>
                        <div className="select-button4">
                        {/* <button><a href='pages-question-service'>studyfield4</a></button> */}
                        <a href='pages-question-service'> <Button color="success" outline className="shadow-none"onMouseOver={select_question_service} onMouseOut={back_question_service}>studyfield1</Button></a>
                        </div>
                        <div className='select-detail'>
                            <div className='select-study-field'id='select-study-field'>
                            <h5>title</h5>
                          <p>detaildetaildetaildetaildeta</p>
                            </div>
                            <div className='select-company-introduction'id='select-company-introduction'>
                            <h5>title</h5>
                          <p>detaildetaildetaildetaildeta</p>
                            </div>
                            <div className='select-data-service' id='select-data-service'>
                            <h5>title</h5>
                          <p>detaildetaildetaildetaildeta</p>
                            </div>
                            <div className='select-question-service'id='select-question-service'>
                            <h5>title</h5>
                          <p>detaildetaildetaildetaildeta</p>
                            </div>
                          
                        </div>
                      
                    </div>

                 
                        <div className='image1' id="image_data_service1"><img src={data_service} width="100%" height="100%"></img></div> 
                        <div className='image1' id="image_company_introduction1"><img src={company_introduction} width="100%" height="100%"></img></div> 
                        <div className='image1' id="image_study_field1"><img src={study_field} width="100%" height="100%"></img></div> 
                        <div className='image1' id="image_question_service1"><img src={question_service} width="100%" height="100%"></img></div>                        
                        <div className='image2' id="image_data_service2"><img src={data_service} width="100%" height="100%"></img></div> 
                        <div className='image2' id="image_company_introduction2"><img src={company_introduction} width="100%" height="100%"></img></div> 
                        <div className='image2' id="image_study_field2"><img src={study_field} width="100%" height="100%"></img></div> 
                        <div className='image2' id="image_question_service2"><img src={question_service} width="100%" height="100%"></img></div>   
                        
                  
                    <div className="seperate-field">
                    <Button color="success" className="btn-animation" data-text="Success"> <a href='pages-software'>Success</a> </Button>
                    <Button color="success" className="btn-animation" data-text="Success"> <a href='pages-test-field'>Success</a></Button>
                    <Button color="success" className="btn-animation" data-text="Success"> <a href='pages-my-page'>Success</a> </Button>
                    </div>
                    </div>
                    

                </section>

                {/* <Button color="primary" onClick={() => tog_center()}>Center Modal</Button> */}

<Modal
    isOpen={modal_center}
    toggle={() => {
        tog_center();
    }}
    centered
>
   <div className='home_page_news'>
    <h1>Welcome to your visit</h1>
<div>- aaaaa<a href='#' style={{color:"red"}}>aaa</a>aaaaaaaa</div>
<div>- aaaaa<a href='#'style={{color:"red"}}>aaa</a>aaaaaaaa</div>
<div>- aaaaa<a href='#'style={{color:"red"}}>aaa</a>aaaaaaaa</div>
<div className='model_check'>
   <Input className="form-check-input" type="checkbox" id="formCheck11" defaultChecked />
                                                            <Label className="form-check-label" htmlFor="formCheck11">
                                                                Checkbox Info
                                                            </Label>
   </div>
   </div>
  
   
</Modal>


                {/* <button onClick={aaa} >aaa</button> */}
                <Footer />
            </div>
        </React.Fragment>
    );
};

export default HomePage;