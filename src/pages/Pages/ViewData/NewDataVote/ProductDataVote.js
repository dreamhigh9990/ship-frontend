import React, { useState, useEffect } from "react";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import { Card, CardBody, Col, Container, CardHeader, Nav, NavItem, NavLink, Row, TabContent, TabPane, Input, Label, Button, Modal, ModalHeader } from "reactstrap";

import { addNewProductData, getAuthenticatedUser, getProductData, updateOneData, updateProductData } from "../../../../helpers/fakebackend_helper";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import classnames from "classnames";
import Dropzone from "react-dropzone";
import { Link, useParams } from "react-router-dom";
import MetaTags from 'react-meta-tags';

// Import React FilePond
import { registerPlugin } from "react-filepond";
import Flatpickr from "react-flatpickr";
import Select from "react-select";
// Import FilePond styles
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const ProductDataVote = (props) => {

  let { id } = useParams();
  const [category, setCategory] = useState({ label: "About Product", value: "about_product" });

  const [productData, setProductData] = useState({
    name: '',
    image_url: '',
    plan_date: '',
    type:'',
    port: '',
    price: '',
    amount: '',
    number: '',
    total_weight: '',
    load_weight: '',
    weight: '',
    current_height: '',
    width: '',
    length: '',
    full_load: '',
    engine: '',
    built_date: '',
    factory: '',
    location: '',
    status: '',
  });

  useEffect(() => {
    if (id) {
      getProductData(id).then(res => {
        setProductData(res);
      })
    }
  }, []);

  // Modal
  const [modal_togFirst, setmodal_togFirst] = useState(false);
  function tog_togFirst() {
    setmodal_togFirst(!modal_togFirst);
  }

  const [modal_togSecond, setmodal_togSecond] = useState(false);
  function tog_togSecond() {
    setmodal_togSecond(!modal_togSecond);
  }


  // Border Top Nav Justified Tabs
  const [topBorderjustifyTab, settopBorderjustifyTab] = useState("1");
  const topBorderJustifytoggle = (tab) => {
    if (topBorderjustifyTab !== tab) {
      settopBorderjustifyTab(tab);
    }
  };

  const [customActiveTab, setcustomActiveTab] = useState("1");
  const toggleCustom = (tab) => {
    if (customActiveTab !== tab) {
      setcustomActiveTab(tab);
    }
  };
 
  // Formats the size
  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  const sortProductOption = [
    {
      options: [
        { label: "Product1", value: "product1" },
        { label: "Product2", value: "product2" },
        { label: "Product3", value: "product3" },
        { label: "Product4", value: "product4" },
      ],
    },
  ];

  document.title = "New Data Vote";

  return (
    <React.Fragment>
      <h5 className="fs-24 mb-1 py-4">Input Product Data</h5>
      <Row>
        <Col lg={6}>
          <div className="mb-3">
            <Row>
              <Col sm={4}>
                <Label className="form-label" htmlFor="product-name-input">
                  1. Product Name
                </Label>
              </Col>
              <Col sm={8}>
                <Input
                  type="text"
                  className="form-control"
                  id="product-name-input"
                  placeholder="Enter product name"
                  value={productData.name}
                  onChange={e => {
                    setProductData({ ...productData, ...{ name: e.target.value } })
                  }}
                />
              </Col>
            </Row>
          </div>

          <div className="mb-3">
            <Row>
              <Col sm={4}>
                <label
                  htmlFor="plan-date-input"
                  className="form-label"
                >
                  3. Plan date
                </label>
              </Col>
              <Col sm={8}>
                <Flatpickr
                  className="form-control"
                  id="plan-date-input"
                  options={{
                    altInput: true,
                    altFormat: "F j, Y",
                    mode: "single",
                    dateFormat: "d.m.y",
                  }}
                  value={productData.plan_date}
                  onChange={e => {
                    setProductData({ ...productData, ...{ plan_date: e[0] } });
                  }}
                />
              </Col>
            </Row>
          </div>
          <div className="mb-3">
            <Row>
              <Col sm={4}>
                <Label className="form-label" htmlFor="product-type-input">
                  5. Type of Product
                </Label>
              </Col>
              <Col sm={8}>
                <Select
                  value={{ value: productData.type, label: productData.type }}
                  onChange={(e) => {
                    console.log(e);
                    setProductData({ ...productData, ...{ type: e.value } })
                  }}
                  options={sortProductOption}
                  name="choices-publish-visibility-input"
                  classNamePrefix="select2-selection form-select"
                />
              </Col>
            </Row>
          </div>
          <div className="mb-3">
            <Row>
              <Col sm={4}>
                <Label className="form-label" htmlFor="product-owner-input">
                  7. Amount
                </Label>
              </Col>
              <Col sm={8}>
                <Input
                  type="text"
                  className="form-control"
                  id="Product-owner-input"
                  placeholder="Enter product title"
                  value={productData.owner}
                  onChange={e => {
                    setProductData({ ...productData, ...{ amount: e.target.value } })
                  }}
                />
              </Col>
            </Row>
          </div>
        </Col>

        <Col lg={6}>
          <div className="mb-3">
            <Row>
              <Col sm={4}>
                <Label className="form-label" htmlFor="product-image-input">
                  2. Product image
                </Label>
              </Col>
              <Col sm={8}>
                <input
                  className="form-control"
                  id="product-image-input"
                  type="file"
                  accept="image/png, image/gif, image/jpeg"
                  onChange={e => {
                    setProductData({ ...productData, ...{ image_url: e.target.files[0] } })
                  }}
                />
              </Col>
            </Row>
          </div>
          <div className="mb-3">
            <Row>
              <Col sm={4}>
                <Label className="form-label" htmlFor="plan-product-input">
                  4. Port
                </Label>
              </Col>
              <Col sm={8}>
                <Input
                  type="text"
                  className="form-control"
                  id="plan-product-input"
                  placeholder="Enter plan port"
                  value={productData.port}
                  onChange={e => {
                    setProductData({ ...productData, ...{ port: e.target.value } })
                  }}
                />
              </Col>
            </Row>
          </div>
          <div className="mb-3">
            <Row>
              <Col sm={4}>
                <Label className="form-label" htmlFor="default-price-input">
                  6. Default Price
                </Label>
              </Col>
              <Col sm={8}>
                <Input
                  type="number"
                  className="form-control"
                  id="default-price-input"
                  placeholder="Enter plan port"
                  value={productData.price}
                  onChange={e => {
                    setProductData({ ...productData, ...{ price: e.target.value } })
                  }}
                />
              </Col>
            </Row>
          </div>
          <div className="mb-3">
            <Row>
              <Col sm={4}>
                <Label className="form-label" htmlFor="product-runner-input">
                  8. Number
                </Label>
              </Col>
              <Col sm={8}>
                <Input
                  type="text"
                  className="form-control"
                  id="product-runner-input"
                  placeholder="Enter plan port"
                  value={productData.runner}
                  onChange={e => {
                    setProductData({ ...productData, ...{ number: e.target.value } })
                  }}
                />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <div className="mb-3">
        <Label className="form-label" htmlFor="tech-properties-input">
          9. Tech Properties
        </Label>

        <Row className="mt-4 mx-5">
          <Col lg={6}>
            <div className="mb-1">
              <Row>
                <Col sm={4}>
                  <Label className="form-label" htmlFor="total-weight-input">
                    Total Weight
                  </Label>
                </Col>
                <Col sm={8}>
                  <Input
                    type="number"
                    className="form-control"
                    id="total-weight-input"
                    placeholder="Enter Total Weight"
                    value={productData.total_weight}
                    onChange={e => {
                      setProductData({ ...productData, ...{ total_weight: e.target.value } })
                    }}
                  />
                </Col>
              </Row>
            </div>
            <div className="mb-1">
              <Row>
                <Col sm={4}>
                  <Label className="form-label" htmlFor="load-weight-input">
                    Load Weight
                  </Label>
                </Col>
                <Col sm={8}>
                  <Input
                    type="number"
                    className="form-control"
                    id="load-weight-input"
                    placeholder="Enter Load Weight"
                    value={productData.load_weight}
                    onChange={e => {
                      setProductData({ ...productData, ...{ load_weight: e.target.value } })
                    }}
                  />
                </Col>
              </Row>
            </div>
            <div className="mb-1">
              <Row>
                <Col sm={4}>
                  <Label className="form-label" htmlFor="Product-weight-input">
                    Product Weight
                  </Label>
                </Col>
                <Col sm={8}>
                  <Input
                    type="number"
                    className="form-control"
                    id="Product-weight-input"
                    placeholder="Enter  Product Weight"
                    value={productData.weight}
                    onChange={e => {
                      setProductData({ ...productData, ...{ weight: e.target.value } })
                    }}
                  />
                </Col>
              </Row>
            </div>
            <div className="mb-1">
              <Row>
                <Col sm={4}>
                  <Label className="form-label" htmlFor="product-length-input">
                    Product Lenght
                  </Label>
                </Col>
                <Col sm={8}>
                  <Input
                    type="number"
                    className="form-control"
                    id="product-length-input"
                    placeholder="Enter Product Lenght"
                    value={productData.length}
                    onChange={e => {
                      setProductData({ ...productData, ...{ length: e.target.value } })
                    }}
                  />
                </Col>
              </Row>
            </div>
            <div className="mb-1">
              <Row>
                <Col sm={4}>
                  <Label className="form-label" htmlFor="product-width-input">
                    Product width
                  </Label>
                </Col>
                <Col sm={8}>
                  <Input
                    type="number"
                    className="form-control"
                    id="product-width-input"
                    placeholder="Enter Product width"
                    value={productData.width}
                    onChange={e => {
                      setProductData({ ...productData, ...{ width: e.target.value } })
                    }}
                  />
                </Col>
              </Row>
            </div>
            <div className="mb-1">
              <Row>
                <Col sm={4}>
                  <Label className="form-label" htmlFor="current-height-input">
                    Current Height
                  </Label>
                </Col>
                <Col sm={8}>
                  <Input
                    type="number"
                    className="form-control"
                    id="current-height-input"
                    placeholder="Enter Current Height"
                    value={productData.current_height}
                    onChange={e => {
                      setProductData({ ...productData, ...{ current_height: e.target.value } })
                    }}
                  />
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mb-1">
              <Row>
                <Col sm={4}>
                  <Label className="form-label" htmlFor="full-load-input">
                    Full Load
                  </Label>
                </Col>
                <Col sm={8}>
                  <Input
                    type="number"
                    className="form-control"
                    id="full-load-input"
                    placeholder="Enter Full Load"
                    value={productData.full_load}
                    onChange={e => {
                      setProductData({ ...productData, ...{ full_load: e.target.value } })
                    }}
                  />
                </Col>
              </Row>
            </div>
            <div className="mb-1">
              <Row>
                <Col sm={4}>
                  <Label className="form-label" htmlFor="product-engine-input">
                    Product Engine
                  </Label>
                </Col>
                <Col sm={8}>
                  <Input
                    type="text"
                    className="form-control"
                    id="product-engine-input"
                    placeholder="Enter Product Engine"
                    value={productData.engine}
                    onChange={e => {
                      setProductData({ ...productData, ...{ engine: e.target.value } })
                    }}
                  />
                </Col>
              </Row>
            </div>
            <div className="mb-1">
              <Row>
                <Col sm={4}>
                  <Label className="form-label" htmlFor="build-date-input">
                    Build Date
                  </Label>
                </Col>
                <Col sm={8}>
                  <Flatpickr
                    className="form-control"
                    id="build-date-input"
                    options={{
                      altInput: true,
                      altFormat: "F j, Y",
                      mode: "single",
                      dateFormat: "d.m.y",
                    }}
                    value={productData.built_date}
                    onChange={e => {
                      setProductData({ ...productData, ...{ built_date: e[0] } });
                    }}
                  />
                </Col>
              </Row>
            </div>
            <div className="mb-1">
              <Row>
                <Col sm={4}>
                  <Label className="form-label" htmlFor="factory-input">
                    Factory
                  </Label>
                </Col>
                <Col sm={8}>
                  <Input
                    type="text"
                    className="form-control"
                    id="factory-input"
                    placeholder="Enter Factory"
                    value={productData.factory}
                    onChange={e => {
                      setProductData({ ...productData, ...{ factory: e.target.value } })
                    }}
                  />
                </Col>
              </Row>
            </div>
            <div className="mb-1">
              <Row>
                <Col sm={4}>
                  <Label className="form-label" htmlFor="current-location-input">
                    Current Location
                  </Label>
                </Col>
                <Col sm={8}>
                  <Input
                    type="text"
                    className="form-control"
                    id="current-location-input"
                    placeholder="Enter Current Location"
                    value={productData.location}
                    onChange={e => {
                      setProductData({ ...productData, ...{ location: e.target.value } })
                    }}
                  />
                </Col>
              </Row>
            </div>
            <div className="mb-1">
              <Row>
                <Col sm={4}>
                  <Label className="form-label" htmlFor="current-status-input">
                    Current Status
                  </Label>
                </Col>
                <Col sm={8}>
                  <Input
                    type="text"
                    className="form-control"
                    id="current-status-input"
                    placeholder="Enter Current Status"
                    value={productData.status}
                    onChange={e => {
                      setProductData({ ...productData, ...{ status: e.target.value } })
                    }}
                  />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>

      <div className="text-end mb-3" style={{ display: 'inline-block', float: 'right' }}>
        <Link
          to="/view-data"
          className="btn btn-primary me-5"
        >
          Back
        </Link>
        <Button color="primary" className="shadow-none me-4" onClick={() => tog_togFirst()}>{id ? "Update Vote" : "Add Vote"}</Button>
      </div>

      <Modal
        isOpen={modal_togFirst}
        toggle={() => {
          tog_togFirst();
        }}
        id="firstmodal"
        centered
      >
        <ModalHeader className='purchase-setting-header'>
        To Add your Data!
          <Button
            type="button"
            className="btn-close"
            onClick={() => {
              setmodal_togFirst(false);
            }}
          >

          </Button>
        </ModalHeader>
        <div className="modal-body text-center">
          <div className=" ">
            <h4 className="mb-4">Would you add your data really? You have to pay!</h4>
            <Nav tabs className="nav nav-tabs nav-border-top nav-border-top-primary mb-3">
              <NavItem>
                <NavLink style={{ cursor: "pointer" }} className={classnames({ active: topBorderjustifyTab === "1", })} onClick={() => { topBorderJustifytoggle("1"); }} >
                  Real score
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{ cursor: "pointer" }} className={classnames({ active: topBorderjustifyTab === "2", })} onClick={() => { topBorderJustifytoggle("2"); }} >
                  Free score
                </NavLink>
              </NavItem>
            </Nav>

            <TabContent activeTab={topBorderjustifyTab} className="text-muted">
              <TabPane tabId="1" id="nav-border-top-home">
                <div className="d-block purchase-pro-setting mt-5">
                  <div className="flex-grow-1 ms-2 purchase-border-bottom">
                    <span>current: </span><p>100 Won</p>
                  </div><br /><hr />
                  <div className="flex-grow-1 ms-2 purchase-border-bottom">
                    <span>pay: </span><p>100 Won</p>
                  </div><br /><hr />
                  <div className="flex-grow-1 ms-2 purchase-border-bottom">
                    <span>real valance: </span><p>none</p>
                  </div><br /><hr /><br />
                </div>
              </TabPane>

              <TabPane tabId="2" id="nav-border-top-home">
                <div className="d-block purchase-pro-setting mt-5">
                  <div className="flex-grow-1 ms-2 purchase-border-bottom">
                    <span>current: </span><p> </p>
                  </div><br /><hr />
                  <div className="flex-grow-1 ms-2 purchase-border-bottom">
                    <span>pay: </span><p>100 Won</p>
                  </div><br /><hr />
                  <div className="flex-grow-1 ms-2 purchase-border-bottom">
                    <span>free valance: </span><p>none</p>
                  </div><br /><hr /><br />
                </div>
              </TabPane>
            </TabContent>
            <div className='purchase-button-group mb-5'>
              <Button color="primary" onClick={(e) => {
                tog_togSecond();
                tog_togFirst(false);
                e.preventDefault();
                const formData = new FormData();
                formData.append("name", productData.name);
                formData.append("plan_date", productData.plan_date);
                formData.append("type", productData.type);
                formData.append("port", productData.port);
                formData.append("price", productData.price);
                formData.append("amount", productData.amount);
                formData.append("number", productData.number);
                formData.append("total_weight", productData.total_weight);
                formData.append("load_weight", productData.load_weight);
                formData.append("weight", productData.weight);
                formData.append("current_height", productData.current_height);
                formData.append("width", productData.width);
                formData.append("length", productData.length);
                formData.append("full_load", productData.full_load);
                formData.append("engine", productData.engine);
                formData.append("built_date", productData.built_date);
                formData.append("factory", productData.enginfactorye);
                formData.append("location", productData.location);
                formData.append("status", productData.status);
                formData.append("file", productData.image_url);
                formData.append("voterId", getAuthenticatedUser().id);
                if (id) {
                  updateProductData(id, formData).then(res => {
                    console.log(res);
                  })
                } else {
                  addNewProductData(formData).then(res => {
                    console.log(res);
                  })
                }
              }} style={{ float: "left" }}>
                pay
              </Button>
              <Button color="primary" onClick={() => { }} style={{ float: "right" }}>
                charge
              </Button>
            </div><br /><br />
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={modal_togSecond}
        toggle={() => {
          tog_togSecond();
        }}
        id="secondmodal"
        centered
      >
        <div className="modal-body text-center p-3">
          <div className="mt-4 pt-3 pb-3">
            <h4 className="mb-3">Do you purchase really?</h4>
            <div className="hstack gap-2 justify-content-center">
              <NavLink href="view-data" className=' d-inline'>
                <Button color="primary" className="ms-3" onClick={() => tog_togSecond(false)}>Yes</Button>
              </NavLink>
              <Button color="primary" className="me-3" onClick={() => tog_togSecond(false)}>No</Button>
            </div>
          </div>
        </div>

      </Modal>
    </React.Fragment>
  );
};

export default ProductDataVote;
