import React, { useState, useEffect } from "react";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import { Card, CardBody, Col, Container, CardHeader, Nav, NavItem, NavLink, Row, TabContent, TabPane, Input, Label, Button, Modal, ModalHeader } from "reactstrap";

import { addNewLoadData, getLoadData, updateOneData, updateLoadData, getAuthenticatedUser } from "../../../../helpers/fakebackend_helper";

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

const LoadDataVote = (props) => {

  let { id } = useParams();
  const [category, setCategory] = useState({ label: "About Load", value: "about_load" });

  const [loadData, setLoadData] = useState({
    name: '',
    image_url: null,
    plan_date: '',
    type:'',
    port: '',
    price: '',
    from: '',
    to: '',
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
      getLoadData(id).then(res => {
        setLoadData(res);
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

  const sortLoadOption = [
    {
      options: [
        { label: "Load1", value: "load1" },
        { label: "Load2", value: "load2" },
        { label: "Load3", value: "load3" },
        { label: "Load4", value: "load4" },
      ],
    },
  ];

  document.title = "New Data Vote";

  return (
    <React.Fragment>
      <h5 className="fs-24 mb-1 py-4">Input Load Data</h5>
      <Row>
        <Col lg={6}>
          <div className="mb-3">
            <Row>
              <Col sm={4}>
                <Label className="form-label" htmlFor="load-name-input">
                  1. Load Name
                </Label>
              </Col>
              <Col sm={8}>
                <Input
                  type="text"
                  className="form-control"
                  id="load-name-input"
                  placeholder="Enter load name"
                  value={loadData.name}
                  onChange={e => {
                    setLoadData({ ...loadData, ...{ name: e.target.value } })
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
                  value={loadData.plan_date}
                  onChange={e => {
                    setLoadData({ ...loadData, ...{ plan_date: e[0] } });
                  }}
                />
              </Col>
            </Row>
          </div>
          <div className="mb-3">
            <Row>
              <Col sm={4}>
                <Label className="form-label" htmlFor="load-type-input">
                  5. Type of Load
                </Label>
              </Col>
              <Col sm={8}>
                <Select
                  value={{ value: loadData.type, label: loadData.type }}
                  onChange={(e) => {
                    console.log(e);
                    setLoadData({ ...loadData, ...{ type: e.value } })
                  }}
                  options={sortLoadOption}
                  name="choices-publish-visibility-input"
                  classNamePrefix="select2-selection form-select"
                />
              </Col>
            </Row>
          </div>
          <div className="mb-3">
            <Row>
              <Col sm={4}>
                <Label className="form-label" htmlFor="load-from-input">
                  7. Load from
                </Label>
              </Col>
              <Col sm={8}>
                <Input
                  type="text"
                  className="form-control"
                  id="Load-from-input"
                  placeholder="Enter product title"
                  value={loadData.from}
                  onChange={e => {
                    setLoadData({ ...loadData, ...{ from: e.target.value } })
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
                <Label className="form-label" htmlFor="load-image-input">
                  2. Load image
                </Label>
              </Col>
              <Col sm={8}>
                <input
                  className="form-control"
                  id="load-image-input"
                  type="file"
                  accept="image/png, image/gif, image/jpeg"
                  onChange={e => {
                    setLoadData({ ...loadData, ...{ image_url: e.target.files[0] } })
                  }}
                />
              </Col>
            </Row>
          </div>
          <div className="mb-3">
            <Row>
              <Col sm={4}>
                <Label className="form-label" htmlFor="plan-load-input">
                  4. Port
                </Label>
              </Col>
              <Col sm={8}>
                <Input
                  type="text"
                  className="form-control"
                  id="plan-load-input"
                  placeholder="Enter plan port"
                  value={loadData.port}
                  onChange={e => {
                    setLoadData({ ...loadData, ...{ port: e.target.value } })
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
                  value={loadData.price}
                  onChange={e => {
                    setLoadData({ ...loadData, ...{ price: e.target.value } })
                  }}
                />
              </Col>
            </Row>
          </div>
          <div className="mb-3">
            <Row>
              <Col sm={4}>
                <Label className="form-label" htmlFor="load-to-input">
                  8. Load Runner
                </Label>
              </Col>
              <Col sm={8}>
                <Input
                  type="text"
                  className="form-control"
                  id="load-to-input"
                  placeholder="Enter plan port"
                  value={loadData.to}
                  onChange={e => {
                    setLoadData({ ...loadData, ...{ to: e.target.value } })
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
                    value={loadData.total_weight}
                    onChange={e => {
                      setLoadData({ ...loadData, ...{ total_weight: e.target.value } })
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
                    value={loadData.load_weight}
                    onChange={e => {
                      setLoadData({ ...loadData, ...{ load_weight: e.target.value } })
                    }}
                  />
                </Col>
              </Row>
            </div>
            <div className="mb-1">
              <Row>
                <Col sm={4}>
                  <Label className="form-label" htmlFor="Load-weight-input">
                    Load Weight
                  </Label>
                </Col>
                <Col sm={8}>
                  <Input
                    type="number"
                    className="form-control"
                    id="Load-weight-input"
                    placeholder="Enter  Load Weight"
                    value={loadData.weight}
                    onChange={e => {
                      setLoadData({ ...loadData, ...{ weight: e.target.value } })
                    }}
                  />
                </Col>
              </Row>
            </div>
            <div className="mb-1">
              <Row>
                <Col sm={4}>
                  <Label className="form-label" htmlFor="load-length-input">
                    Load Lenght
                  </Label>
                </Col>
                <Col sm={8}>
                  <Input
                    type="number"
                    className="form-control"
                    id="load-length-input"
                    placeholder="Enter Load Lenght"
                    value={loadData.length}
                    onChange={e => {
                      setLoadData({ ...loadData, ...{ length: e.target.value } })
                    }}
                  />
                </Col>
              </Row>
            </div>
            <div className="mb-1">
              <Row>
                <Col sm={4}>
                  <Label className="form-label" htmlFor="load-width-input">
                    Load width
                  </Label>
                </Col>
                <Col sm={8}>
                  <Input
                    type="number"
                    className="form-control"
                    id="load-width-input"
                    placeholder="Enter Load width"
                    value={loadData.width}
                    onChange={e => {
                      setLoadData({ ...loadData, ...{ width: e.target.value } })
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
                    value={loadData.current_height}
                    onChange={e => {
                      setLoadData({ ...loadData, ...{ current_height: e.target.value } })
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
                    value={loadData.full_load}
                    onChange={e => {
                      setLoadData({ ...loadData, ...{ full_load: e.target.value } })
                    }}
                  />
                </Col>
              </Row>
            </div>
            <div className="mb-1">
              <Row>
                <Col sm={4}>
                  <Label className="form-label" htmlFor="load-engine-input">
                    Load Engine
                  </Label>
                </Col>
                <Col sm={8}>
                  <Input
                    type="text"
                    className="form-control"
                    id="load-engine-input"
                    placeholder="Enter Load Engine"
                    value={loadData.engine}
                    onChange={e => {
                      setLoadData({ ...loadData, ...{ engine: e.target.value } })
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
                    value={loadData.built_date}
                    onChange={e => {
                      setLoadData({ ...loadData, ...{ built_date: e[0] } });
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
                    value={loadData.factory}
                    onChange={e => {
                      setLoadData({ ...loadData, ...{ factory: e.target.value } })
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
                    value={loadData.location}
                    onChange={e => {
                      setLoadData({ ...loadData, ...{ location: e.target.value } })
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
                    value={loadData.status}
                    onChange={e => {
                      setLoadData({ ...loadData, ...{ status: e.target.value } })
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
                formData.append("name", loadData.name);
                formData.append("plan_date", loadData.plan_date);
                formData.append("type", loadData.type);
                formData.append("port", loadData.port);
                formData.append("price", loadData.price);
                formData.append("from", loadData.from);
                formData.append("to", loadData.to);
                formData.append("total_weight", loadData.total_weight);
                formData.append("load_weight", loadData.load_weight);
                formData.append("weight", loadData.weight);
                formData.append("current_height", loadData.current_height);
                formData.append("width", loadData.width);
                formData.append("length", loadData.length);
                formData.append("full_load", loadData.full_load);
                formData.append("engine", loadData.engine);
                formData.append("built_date", loadData.built_date);
                formData.append("factory", loadData.enginfactorye);
                formData.append("location", loadData.location);
                formData.append("status", loadData.status);
                formData.append("file", loadData.image_url);
                formData.append("voterId", getAuthenticatedUser().id);
                if (id) {
                  updateLoadData(id, formData).then(res => {
                    console.log(res);
                  })
                } else {
                  addNewLoadData(formData).then(res => {
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

export default LoadDataVote;
