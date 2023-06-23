import React, { useEffect,  useState } from "react";
import {
  Card,
  Button, 
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

//Simple bar
import SimpleBar from "simplebar-react"; 

import { addNewData, getShipData, updateOneData } from "../../../../helpers/fakebackend_helper";


import BreadCrumb from "../../../../Components/Common/BreadCrumb";

import ship1 from "../../../../assets/images/ship1.png";
import ship2 from "../../../../assets/images/ship2.png";
import ship3 from "../../../../assets/images/ship3.png";


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";
import { Link, useParams } from "react-router-dom";

SwiperCore.use([FreeMode, Navigation, Thumbs]);

const ProductReview = (props) => {
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
                        className="avatar-sm rounded object-cover"
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
            <div className="avatar-sm me-2">
              <div className="avatar-title rounded bg-transparent text-success fs-24">
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

function ShipDetails(props) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [ttop, setttop] = useState(false);
  
  const [customActiveTab, setcustomActiveTab] = useState("1"); 

  let { id } = useParams();

  const [Data, setData] = useState({
    name: '',
    file_url: '',
    data_type: '',
    dataCategoryId: '',
    date: '',
    amount: '',
    unit: '',
    port: '',
    price: '',
    from: '',
    to: '',
    owner: '',
    runner: '',
    total_weight: '',
    load_weight: '',
    weight: '',
    current_height: '',
    width: '',
    length: '',
    full_load: '',
    engine: '',
    created: '',
    factory: '',
    location: '',
    status: '',
  });


  const [ssize, setssize] = useState(false);
  const [msize, setmsize] = useState(false);
  const [lsize, setlsize] = useState(false);
  const [xlsize, setxlsize] = useState(false);

  const toggleCustom = tab => {
    if (customActiveTab !== tab) {
      setcustomActiveTab(tab);
    }
  };
  useEffect(() => {
    if (id) {
      getShipData(id).then(res => {
        setData(res);
      })
    }
  }, []);
  document.title = "Product Details | Velzon - React Admin & Dashboard Template";
  return (
    <div className="page-content">
      <Container fluid>

        <BreadCrumb title="Product Details" pageTitle="Ecommerce" />

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
                              src={ship2}
                              alt=""
                              className="img-fluid d-block"
                              style={{width: "100%"}}
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img
                              src={ship1}
                              alt=""
                              className="img-fluid d-block"
                              style={{width: "100%"}}
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img
                              src={ship1}
                              alt=""
                              className="img-fluid d-block"                              
                              style={{width: "100%"}}
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img
                              src={ship2}
                              alt=""
                              className="img-fluid d-block"                              
                              style={{width: "100%"}}
                            />
                          </SwiperSlide>
                        </div>
                      </Swiper>

                      <div className="product-nav-slider mt-2">
                        <Swiper
                          onSwiper={setThumbsSwiper}
                          slidesPerView={4}
                          freeMode={true}
                          watchSlidesProgress={true}
                          spaceBetween={10}
                          className="swiper product-nav-slider mt-2 overflow-hidden"
                        >
                          <div className="swiper-wrapper">
                            <SwiperSlide className="rounded">
                              <div className="nav-slide-item">
                                <img
                                  src={ship2}
                                  alt=""
                                  className="img-fluid d-block rounded"
                                />
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="nav-slide-item">
                                <img
                                  src={ship3}
                                  alt=""
                                  className="img-fluid d-block rounded"
                                />
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="nav-slide-item">
                                <img
                                  src={ship1}
                                  alt=""
                                  className="img-fluid d-block rounded"
                                />
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="nav-slide-item">
                                <img
                                  src={ship2}
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
                      {/* <div className="d-flex">
                        <div className="flex-grow-1">
                          <h4>Full Sleeve Sweatshirt for Men (Pink)</h4>
                        </div>
                        <div className="flex-shrink-0">
                          <div>
                            <Tooltip
                              placement="top"
                              target="TooltipTop"
                              toggle={() => {
                                setttop(!ttop);
                              }}
                            >
                              Edit
                            </Tooltip>
                            <a
                              href={"/new-data-vote/" + id}
                              id="TooltipTop"
                              className="btn btn-light"
                            >
                              <i className="ri-pencil-fill align-bottom"></i>
                            </a>
                          </div>
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
                                to="/new-data-vote"
                                className="btn btn-success"
                                
                              >
                                <i className="ri-add-line align-bottom me-1"></i> 
                                Edit
                              </Link>
                            </Tooltip>
                            <a
                              href={"/new-data-vote/"+id}
                              id="TooltipTop"
                              className="btn btn-light"
                            >
                              <i className="ri-pencil-fill align-bottom"></i>
                            </a>
                          </div>
                        </div>
                      </div> */}

                      {/* <div className="mt-4 text-muted">
                        <h5 className="fs-14">Description :</h5>
                        <p>
                          Tommy Hilfiger men striped pink sweatshirt. Crafted
                          with cotton. Material composition is 100% organic
                          cotton. This is one of the world’s leading designer
                          lifestyle brands and is internationally recognized for
                          celebrating the essence of classic American cool
                          style, featuring preppy with a twist designs.
                        </p>
                      </div> */}

                      
                      <div className="product-content mt-5">
                        <h5 className="fs-14 mb-3">Details of Ship :</h5>                        
                        <div className="table-responsive">
                          <table className="table mb-0">
                            <tbody>
                              <tr>
                                <th scope="row" style={{ width: "200px" }}>
                                  Business of Ship
                                </th>
                                <td>{Data.owner}</td>
                              </tr>
                              <tr>
                                <th scope="row">Running Business</th>
                                <td>{Data.runner}</td>
                              </tr>
                              <tr>
                                <th scope="row">Location</th>
                                <td>{Data.location}</td>
                              </tr>
                              {/* <tr>
                                <th scope="row">Call Sign</th>
                                <td>{Data.licence}</td>
                              </tr>
                              <tr>
                                <th scope="row">HTTP</th>
                                <td>Hidn</td>
                              </tr><tr>
                                <th scope="row">Contacts</th>
                                <td>jack +09443928234</td>
                              </tr> */}
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div className="product-content mt-5">
                        <h5 className="fs-14 mb-3">Properities of Ship :</h5>                        
                        <div className="table-responsive">
                          <table className="table mb-0">
                            <tbody>
                              <tr>
                                <th scope="row" style={{ width: "200px" }}>
                                  Kind of Ship
                                </th>
                                <td>{Data.type}p</td>
                                <th scope="row" style={{ width: "200px" }}>
                                  Full Load Index
                                </th>
                                <td>{Data.full_load}t</td>
                              </tr>
                              <tr>
                                <th scope="row">Total Weight</th>
                                <td>{Data.total_weight}t</td>                                
                                <th scope="row">Engine</th>
                                <td>{Data.engine}HP</td>
                              </tr>
                              <tr>
                                <th scope="row">Load limit</th>
                                <td>{Data.load_weight}t</td>
                                <th scope="row">Manufacture Date</th>
                                <td>{Data.built_date}</td>
                              </tr>
                              <tr>
                                <th scope="row">Load</th>
                                <td>{Data.load_weight}t</td>
                                <th scope="row">Manufacture Factory</th>
                                <td>{Data.factory}</td>
                              </tr>
                              <tr>
                                <th scope="row">length</th>
                                <td>{Data.length} m</td>
                                <th scope="row">location</th>
                                <td>{Data.location}  port</td>
                              </tr><tr>
                                <th scope="row">Width</th>
                                <td>{Data.width} m</td>
                                <th scope="row">Status</th>
                                <td>{Data.status}</td>
                              </tr>
                              <tr>
                                <th scope="row">Sub height</th>
                                <td>{Data.current_height} m</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
                
                <div className="modal-body text-center p-3">
                    <div className="mt-4 pt-3 pb-3">
                        <div className="hstack gap-2 justify-content-end">
                            <NavLink href="/view-data" className=' d-inline'>
                                <Button color="primary" className="ms-3">Go Back</Button>
                            </NavLink>
                        </div>
                    </div>
                </div>  
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ShipDetails;