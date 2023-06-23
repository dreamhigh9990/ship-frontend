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
import { addNewProductData, getProductData, updateProductData } from "../../../helpers/fakebackend_helper";

// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const AddProductData = (props) => {

  let { id } = useParams();
  const [selectedFiles, setselectedFiles] = useState([]);

  const [ProductData, setProductData] = useState({
    name: '', image_url: null, voterId: '', amount: '', number: '', price: ''
  });

  useEffect(() => {
    if (id) {
      getProductData(id).then(res => {
        setProductData(res);
      })
    }
  }, []);

  document.title = id ? "Edit ProductData" : "Add ProductData";
  return (
    <div className="page-content">
      <Container fluid>

        <BreadCrumb title={id ? "Edit ProductData" : "Add ProductData"} pageTitle="Admin ProductData" />

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
                          value={ProductData.name}
                          onChange={e => {
                            setProductData({ ...ProductData, ...{ name: e.target.value } })
                          }}
                        />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="mb-3">
                        <Label className="form-label" htmlFor="validationDefaultUsername">
                          Number
                        </Label>
                        <Input
                          type="number"
                          className="form-control"
                          id="validationDefaultUsername"
                          placeholder="Enter number"
                          required={true}
                          value={ProductData.number}
                          onChange={e => {
                            setProductData({ ...ProductData, ...{ number: e.target.value } })
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
                            setProductData({ ...ProductData, ...{ image_url: e.target.files[0] } })
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
                          value={ProductData.amount}
                          onChange={e => {
                            setProductData({ ...ProductData, ...{ amount: e.target.value } })
                          }}
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={6}>
                      <div className="mb-3">
                        <Label className="form-label" htmlFor="validationDefaultUsername">
                          Price
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="validationDefaultUsername"
                          placeholder="Enter price"
                          required={true}
                          value={ProductData.price}
                          onChange={e => {
                            setProductData({ ...ProductData, ...{ price: e.target.value } })
                          }}
                        />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="mb-3">
                        <Label className="form-label" htmlFor="validationDefaultUsername">
                          VoterId
                        </Label>
                        <Input
                          type="number"
                          className="form-control"
                          id="validationDefaultUsername"
                          placeholder="Enter voterId"
                          required={true}
                          value={ProductData.voterId}
                          onChange={e => {
                            setProductData({ ...ProductData, ...{ voterId: e.target.value } })
                          }}
                        />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>

              <div className="text-end mb-3">
                <button type="submit" id="add-productData-button" className="btn btn-success w-sm" onClick={e => {
                  e.preventDefault();
                  const formData = new FormData();
                  formData.append("price", ProductData.price);
                  formData.append("name", ProductData.name);
                  formData.append("file", ProductData.image_url);
                  formData.append("amount", ProductData.amount);
                  formData.append("number", ProductData.number);
                  formData.append("voterId", ProductData.voterId);

                  if (id) {
                    updateProductData(id, formData).then(res => {
                      console.log(res);
                    })
                  } else {
                    addNewProductData(formData).then(res => {
                      console.log(res);
                    })
                  }
                }
                }>
                  {id ? "Update ProductData" : "Add ProductData"}
                </button>
              </div>
            </form>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default AddProductData;