import React, { useEffect, useState, useMemo } from "react";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { Card, CardBody, Col, Container, CardHeader, Nav, NavItem, NavLink, Row, TabContent, TabPane, Input, Label, Modal, ModalHeader, Button } from "reactstrap";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import classnames from "classnames";
import Dropzone from "react-dropzone";
import MetaTags from 'react-meta-tags';

// Import React FilePond
import { registerPlugin } from "react-filepond";
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import Flatpickr from "react-flatpickr";
import Select from "react-select";
// Import FilePond styles
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { addNewGoodData, getGoodData, updateGoodData } from "../../../helpers/fakebackend_helper";

// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const AddGoodData = (props) => {

  let { id } = useParams();
  const [selectedFiles, setselectedFiles] = useState([]);

  const [modal_backdrop, setmodal_backdrop] = useState(false);
  function tog_backdrop() {
    setmodal_backdrop(!modal_backdrop);
  }

  const [GoodData, setGoodData] = useState({
    name: '', usage: '', voterId: '', image_url: null, amount: '',tech_prop:'',
  });

  useEffect(() => {
    if (id) {
      getGoodData(id).then(res => {
        setGoodData(res);
      })
    }
  }, []);

  document.title = id ? "Edit GoodData" : "Add GoodData";
  return (
    <div className="page-content">
      <Container fluid>

        <BreadCrumb title={id ? "Edit GoodData" : "Add GoodData"} pageTitle="Admin GoodData" />

        {/* Static Backdrop Modal */}
        <Modal
          isOpen={modal_backdrop}
          toggle={() => {
            tog_backdrop();
          }}
          backdrop={'static'}
          id="staticBackdrop"
          centered
        >
          <ModalHeader>
            Modal title
            <Button type="button" className="btn-close"
              onClick={() => {
                setmodal_backdrop(false);
              }} aria-label="Close"></Button>
          </ModalHeader>
          <div className="modal-body text-center p-5">
            <lord-icon
              src="https://cdn.lordicon.com/lupuorrc.json"
              trigger="loop"
              colors="primary:#121331,secondary:#08a88a"
              style={{ width: "120px", height: "120px" }}>
            </lord-icon>

            <div className="mt-4">
              <h4 className="mb-3">You've made it!</h4>
              <p className="text-muted mb-4"> The transfer was not successfully received by us. the email of the recipient wasn't correct.</p>
              <div className="hstack gap-2 justify-content-center">
                <Link to="#" className="btn btn-link shadow-none link-success fw-medium" onClick={() => setmodal_backdrop(false)}><i className="ri-close-line me-1 align-middle"></i> Close</Link>
                <Link to="/admin-goodDatas" className="btn btn-success" onClick={() => setmodal_backdrop(true)}>Completed</Link>
              </div>
            </div>
          </div>
        </Modal>

        <Row>
          <Col lg={8}>
            <form>
              <Card>
                <CardBody>
                  <Row>
                    <Col lg={6}>
                      <div className="mb-3">
                        <Label className="form-label" htmlFor="validationDefaultUsername">
                          Name
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="validationDefaultUsername"
                          placeholder="Enter name"
                          required={true}
                          value={GoodData.name}
                          onChange={e => {
                            setGoodData({ ...GoodData, ...{ name: e.target.value } })
                          }}
                        />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="mb-3">
                        <Label className="form-label" htmlFor="validationDefaultUsername">
                          Tech_prop
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="validationDefaultUsername"
                          placeholder="Enter tech_prop"
                          required={true}
                          value={GoodData.tech_prop}
                          onChange={e => {
                            setGoodData({ ...GoodData, ...{ tech_prop: e.target.value } })
                          }}
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={6}>
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="manufacturer-brand-input"
                        >
                          Image_url
                        </label>
                        <input
                          className="form-control"
                          id="product-image-input"
                          type="file"
                          required={true}
                          accept="image/png, image/gif, image/jpeg, image/jpg, image/bmp"
                          onChange={e => {
                            setGoodData({ ...GoodData, ...{ image_url: e.target.files[0] } })
                          }}
                        />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="manufacturer-brand-input"
                        >
                          Amount
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="manufacturer-brand-input"
                          placeholder="Enter amount"
                          required={true}
                          value={GoodData.amount}
                          onChange={e => {
                            setGoodData({ ...GoodData, ...{ amount: e.target.value } })
                          }}
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={6}>
                      <div className="mb-3">
                        <Label className="form-label" htmlFor="validationDefaultUsername">
                          Usage
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="validationDefaultUsername"
                          placeholder="Enter usage"
                          required={true}
                          value={GoodData.usage}
                          onChange={e => {
                            setGoodData({ ...GoodData, ...{ usage: e.target.value } })
                          }}
                        />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="mb-3">
                        <Label className="form-label" htmlFor="validationDefaultUsername">
                          voterId
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="validationDefaultUsername"
                          placeholder="Enter voterId"
                          required={true}
                          value={GoodData.voterId}
                          onChange={e => {
                            setGoodData({ ...GoodData, ...{ voterId: e.target.value } })
                          }}
                        />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>

              <div className="text-end mb-3">
                <button type="submit" id="add-goodData-button" className="btn btn-success w-sm" onClick={e => {
                  e.preventDefault();
                  const formData = new FormData();
                  formData.append("amount", GoodData.amount);
                  formData.append("name", GoodData.name);
                  formData.append("file", GoodData.image_url);
                  formData.append("tech_prop", GoodData.tech_prop);
                  formData.append("usage", GoodData.usage);
                  formData.append("voterId", GoodData.voterId);

                  console.log(e);

                  if (id) {
                    updateGoodData(id, formData).then(res => {
                      console.log(res);
                    })
                  } else {
                    addNewGoodData(formData).then(res => {
                      console.log(res);
                    })
                  }
                  setmodal_backdrop(true)
                }
                }>
                  {id ? "Update GoodData" : "Add GoodData"}
                </button>
              </div>
            </form>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default AddGoodData;