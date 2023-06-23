import React, { useState, useEffect } from 'react'
import { Col, Container, Row, Card, CardBody, TabContent, CardHeader, TabPane } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { useMemo } from "react";
import {BlogDetailData, columnsReplyMessageData} from './TestBlogDetail'
import { getArticle, downloadAvatar } from "../../../helpers/fakebackend_helper";
import { Link, useParams  } from "react-router-dom";
import ArticleSideBar from "./ArticleSideBar";
import TableContainer from "../../../Components/Common/TableContainer";

const BlogServiceDetail = () => {
    document.title = "Blog Service";
    const columnsReplyMessage = useMemo(() => columnsReplyMessageData, []);
    const [BlogDetailDataFilter, setBlogDataList] = useState(BlogDetailData.user_response);

    let { id } = useParams();
    const [article, setArticleList] = useState({
        name: "",
        description: "",
        contact_number: "",      
        attach_url: "",
        recommends: "",
        source: "",
        oppositions: "",
        browingcount: "",
    });
    useEffect(() => {
      if (id) {
        getArticle(id).then(res => {
            setArticleList(res);          
        })
      }
    }, [id]);

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Blog Detail" />
                    <Row>
                        <Col xl={9} lg={8}>
                            <Card>
                                <CardHeader>
                                    <div className='d-flex justify-content-between'>
                                        <div>
                                            <Link className="btn btn-primary" data-bs-toggle="button" aria-pressed="false" to={"/pages-blog-service"}>Go listing</Link>
                                        </div>
                                        <div className='pe-5 d-flex align-items-center'>
                                        <i className="las la-angle-left" style={{fontSize: "25px"}}></i> <Link className="btn btn-primary ms-1 me-5" data-bs-toggle="button" aria-pressed="false" to={"#"}>Advertise</Link>
                                        <Link className="btn btn-primary ms-5 me-1" data-bs-toggle="button" aria-pressed="false" to={'#'}>Trending</Link><i className="las la-angle-right" style={{fontSize: "25px"}}></i>
                                        </div>
                                    </div>
                                    
                                </CardHeader>
                                <CardBody className='px-5 py-5 blog-user-detail'>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex mb-4'>
                                            <div style={{"width":"48px"}} className="me-3">
                                                <img src = {downloadAvatar(article.currentAvatarId)} style={{"width":"50px", "height": "50px", "borderRadius":"50%"}} alt=""/>    
                                            </div>
                                            <div>
                                                <h5>{article.name}</h5>
                                                <span>{article.description}</span>
                                            </div>
                                        </div>
                                        <div>
                                            <i className="bx bx-like pe-1"></i><span className="pe-3">{article.recommends}</span>
                                            <i className="bx bx-message pe-1"></i><span className="pe-3">{article.oppositions}</span>
                                            <i className="bx bx-message-dots pe-1"></i><span className="pe-3">{article.browingcount}</span>
                                        </div>
                                    </div>
                                    {/* <h4 className='mb-4'>{article.name}</h4>
                                    {article.content} */}
                                    <div className='pt-4'>
                                        <TabContent className="text-muted blog-detail-rtable-content">
                                            <TabPane>
                                                <div
                                                    id="table-product-list-all"
                                                    className="table-card gridjs-border-none pb-2"
                                                >
                                                    <TableContainer
                                                        columns={columnsReplyMessage}
                                                        data={BlogDetailDataFilter}
                                                        isGlobalFilter={false}
                                                        isGlobalSearch={true}
                                                        isAddUserList={false}
                                                        customPageSize={10}
                                                        divClass="table-responsive mb-1"
                                                        tableClass="mb-0 table-borderless"
                                                        theadClass="table-light text-muted"
                                                    />
                                                </div>
                                            </TabPane>
                                        </TabContent>
                                    </div>
                                </CardBody>
                                 
                            </Card>
                          </Col>
                         <Col xl={3} lg={4}>
                            <ArticleSideBar />
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default BlogServiceDetail;