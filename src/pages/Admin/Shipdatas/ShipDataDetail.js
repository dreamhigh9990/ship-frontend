import React, { useEffect, useState, useMemo } from "react";
import {
  Card,
  CardBody,
  Col,
  Container,
  Input,
  Label,
  Tooltip,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { addNewShipData, getShipData, updateOneShipData, downloadShipImage } from "../../../helpers/fakebackend_helper";

import { Swiper, SwiperSlide } from "swiper/react";
import classnames from "classnames";
import MetaTags from 'react-meta-tags';

import product1 from "../../../assets/images/products/img-1.png";
import product6 from "../../../assets/images/products/img-6.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";

SwiperCore.use([FreeMode, Navigation, Thumbs]);

const ShipDataReview = (props) => {

  return (
    <React.Fragment>
      <li className="py-2">
        <div className="border border-dashed rounded p-3">
          <div className="d-flex align-items-start mb-3">
            <div className="hstack gap-3">
              <div className="badge rounded-pill bg-success mb-0">
                <i className="mdi mdi-star"></i> {props.review.rating}
              </div>
              <div className="vr"></div>
              <div className="flex-grow-1">
                <p className="text-muted mb-0">{props.review.comment}</p>
              </div>
            </div>
          </div>
          {props.review.subItems && (
            <React.Fragment>
              <div className="d-flex flex-grow-1 gap-2 mb-3">
                {props.review.subItems.map((subItem, key) => (
                  <React.Fragment key={key}>
                    <Link to="#" className="d-block">
                      <img
                        src={subItem.img}
                        alt=""
                        className="shipData-sm rounded object-cover"
                      />
                    </Link>
                  </React.Fragment>
                ))}
              </div>
            </React.Fragment>
          )}

          <div className="d-flex align-items-end">
            <div className="flex-grow-1">
              <h5 className="fs-14 mb-0">{props.review.name}</h5>
            </div>

            <div className="flex-shrink-0">
              <p className="text-muted fs-13 mb-0">{props.review.date}</p>
            </div>
          </div>
        </div>
      </li>
    </React.Fragment>
  );
};

const PricingWidgetList = (props) => {
  return (
    <React.Fragment>
      <Col lg={3} sm={6}>
        <div className="p-2 border border-dashed rounded">
          <div className="d-flex align-items-center">
            <div className="shipData-sm me-2">
              <div className="shipData-title rounded bg-transparent text-success fs-24">
                <i className={props.pricingDetails.icon}></i>
              </div>
            </div>
            <div className="flex-grow-1">
              <p className="text-muted mb-1">{props.pricingDetails.label} :</p>
              <h5 className="mb-0">{props.pricingDetails.labelDetail}</h5>
            </div>
          </div>
        </div>
      </Col>
    </React.Fragment>
  );
};

function ShipDataDetail(props) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [ttop, setttop] = useState(false);

  const [customActiveTab, setcustomActiveTab] = useState("1");
  let { id } = useParams();
  const [ShipData, setShipData] = useState({
    name: '', image_url: null, plan_date: new Date(), port: '', type: '', price: '', owner: '', runner: '', total_weight: '', load_weight: '', weight: '', length: '', width: '', current_height: '', full_load: '', engine: '', built_date: new Date(), factory: '', location: '', status: '', voterId: '0',
  });

  const [ShipDataSrc, setShipDataSrc] = useState({});

  useEffect(() => {
    if (id) {
      getShipData(id).then(res => {
        console.log("shipData detail", res);
        setShipData(res);
      });
      setShipDataSrc(downloadShipImage(id));
      console.log("downloadShipImage", downloadShipImage(id));
    }
  }, []);

  const toggleCustom = tab => {
    if (customActiveTab !== tab) {
      setcustomActiveTab(tab);
    }
  };
  document.title = "ShipData Details | Velzon - React Admin & Dashboard Template";
  return (
    <div className="page-content">
      <Container fluid>

        <BreadCrumb title="ShipData Details" pageTitle="Ecommerce" />

        <Row>
          <Col lg={12}>
            <Card>
              <CardBody>
                <Row className="gx-lg-5">
                  <Col xl={4} md={8} className="mx-auto">
                    <div className="product-img-slider sticky-side-div">
                      <Swiper
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        className="swiper product-thumbnail-slider p-2 rounded bg-light"
                      >
                        <div className="swiper-wrapper">
                          <SwiperSlide>
                            <img
                              src={product6}
                              alt=""
                              className="img-fluid d-block"
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img
                              src={product1}
                              alt=""
                              className="img-fluid d-block"
                            />
                          </SwiperSlide>
                        </div>
                      </Swiper>

                      <div className="product-nav-slider mt-2">
                        <Swiper
                          onSwiper={setThumbsSwiper}
                          slidesPerView={2}
                          freeMode={true}
                          watchSlidesProgress={true}
                          spaceBetween={10}
                          className="swiper product-nav-slider mt-2 overflow-hidden"
                        >
                          <div className="swiper-wrapper">

                            <SwiperSlide>
                              <div className="nav-slide-item">
                                <img
                                  src={product6}
                                  alt=""
                                  className="img-fluid d-block rounded"
                                />
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="nav-slide-item">
                                <img
                                  src={product1}
                                  alt=""
                                  className="img-fluid d-block rounded"
                                />
                              </div>
                            </SwiperSlide>
                          </div>
                        </Swiper>
                      </div>
                    </div>
                  </Col>

                  <Col xl={8}>
                    <div className="mt-xl-0 mt-5">
                      <div className="d-flex">
                        <div className="flex-grow-1">
                          <h4>{ShipData.name}</h4>
                        </div>
                        <div className="flex-shrink-0">
                          <div>
                            <Tooltip
                              placement="top"
                              isOpen={ttop}
                              target="TooltipTop"
                              toggle={() => {
                                setttop(!ttop);
                              }}
                            >
                              <Link
                                to="/admin-add-ShipData"
                                className="btn btn-success"

                              >
                                <i className="ri-add-line align-bottom me-1"></i>
                                Edit
                              </Link>
                            </Tooltip>
                            <a
                              href={"/admin-add-ShipData/" + id}
                              id="TooltipTop"
                              className="btn btn-light"
                            >
                              <i className="ri-pencil-fill align-bottom"></i>
                            </a>
                          </div>
                        </div>
                      </div>


                      <div className="product-content mt-5">
                        <h5 className="fs-14 mb-3">ShipData Description :</h5>
                        <Nav tabs className="nav-tabs-custom nav-success">
                          <NavItem>
                            <NavLink
                              style={{ cursor: "pointer" }}
                              className={classnames({
                                active: customActiveTab === "1",
                              })}
                              onClick={() => {
                                toggleCustom("1");
                              }}
                            >
                              Specification
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              style={{ cursor: "pointer" }}
                              className={classnames({
                                active: customActiveTab === "2",
                              })}
                              onClick={() => {
                                toggleCustom("2");
                              }}
                            >
                              Details
                            </NavLink>
                          </NavItem>
                        </Nav>

                        <TabContent
                          activeTab={customActiveTab}
                          className="border border-top-0 p-4"
                          id="nav-tabContent"
                        >
                          <TabPane
                            id="nav-speci"
                            tabId="1"
                          >
                            <div className="table-responsive">
                              <table className="table mb-0">
                                <tbody>
                                  <tr>
                                    <th scope="row" style={{ width: "200px" }}>
                                      Name
                                    </th>
                                    <td>{ShipData.name}</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Image_url</th>
                                    <td>{ShipData.image_url}</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Plan_date</th>
                                    {console.log("Plan_date", ShipData.plan_date)}
                                    {/* <td>{ShipData.plan_date}</td> */}
                                  </tr>
                                  <tr>
                                    <th scope="row">Port</th>
                                    <td>{ShipData.port}</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Type</th>
                                    <td>{ShipData.type}</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Price</th>
                                    <td>{ShipData.price}</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Owner</th>
                                    <td>{ShipData.owner}</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Runner</th>
                                    <td>{ShipData.runner}</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Total_weight</th>
                                    <td>{ShipData.total_weight}</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Load_weight</th>
                                    <td>{ShipData.load_weight}</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Weight</th>
                                    <td>{ShipData.weight}</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Length</th>
                                    <td>{ShipData.length}</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Width</th>
                                    <td>{ShipData.width}</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Current_height</th>
                                    <td>{ShipData.current_height}</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Full_load</th>
                                    <td>{ShipData.full_load}</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Engine</th>
                                    <td>{ShipData.engine}</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Built_date</th>
                                    {/* <td>{ShipData.built_date}</td> */}
                                  </tr>
                                  <tr>
                                    <th scope="row">Factory</th>
                                    <td>{ShipData.factory}</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Location</th>
                                    <td>{ShipData.location}</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Status</th>
                                    <td>{ShipData.status}</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">VoterId</th>
                                    <td>{ShipData.voterId}</td>
                                  </tr>

                                </tbody>
                              </table>
                            </div>
                          </TabPane>
                          <TabPane
                            id="nav-detail"
                            tabId="2"
                          >
                            <div>
                              <h5 className="font-size-16 mb-3">
                                Tommy Hilfiger Sweatshirt for Men (Pink)
                              </h5>
                              <p>
                                Tommy Hilfiger men striped pink sweatshirt.
                                Crafted with cotton. Material composition is
                                100% organic cotton. This is one of the world’s
                                leading designer lifestyle brands and is
                                internationally recognized for celebrating the
                                essence of classic American cool style,
                                featuring preppy with a twist designs.
                              </p>
                              <div>
                                <p className="mb-2">
                                  <i className="mdi mdi-circle-medium me-1 text-muted align-middle"></i>{" "}
                                  Machine Wash
                                </p>
                                <p className="mb-2">
                                  <i className="mdi mdi-circle-medium me-1 text-muted align-middle"></i>{" "}
                                  Fit Type: Regular
                                </p>
                                <p className="mb-2">
                                  <i className="mdi mdi-circle-medium me-1 text-muted align-middle"></i>{" "}
                                  100% Cotton
                                </p>
                                <p className="mb-0">
                                  <i className="mdi mdi-circle-medium me-1 text-muted align-middle"></i>{" "}
                                  Long sleeve
                                </p>
                              </div>
                            </div>
                          </TabPane>
                        </TabContent>
                      </div>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ShipDataDetail;