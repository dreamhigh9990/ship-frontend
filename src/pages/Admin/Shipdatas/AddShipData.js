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
import { addNewShipData, getShipData, updateShipData } from "../../../helpers/fakebackend_helper";

// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const AddShipData = (props) => {

  let { id } = useParams();
  const [selectedFiles, setselectedFiles] = useState([]);

  const [ShipData, setShipData] = useState({
    name: '', image_url: null, plan_date: new Date(), port: '', type: '', price: '', owner: '', runner: '', total_weight: '', load_weight: '', weight: '', length: '', width: '', current_height: '', full_load: '', engine: '', built_date: new Date(), factory: '', location: '', status: '', voterId: '0',

  });

  const type = [
    {
      options: [
        { label: "Ship1", value: "Ship1" },
        { label: "Ship2", value: "Ship2" },
        { label: "Ship3", value: "Ship3" },
        { label: "Ship4", value: "Ship4" },
      ],
    },
  ];

  const status = [
    {
      options: [
        { label: "Status1", value: "Status1" },
        { label: "Status2", value: "Status2" },
        { label: "Status3", value: "Status3" },
        { label: "Status4", value: "Status4" },
      ],
    },
  ];

  useEffect(() => {
    if (id) {
      getShipData(id).then(res => {
        setShipData(res);
      })
    }
  }, []);

  document.title = id ? "Edit ShipData" : "Add ShipData";
  return (
    <div className="page-content">
      <Container fluid>

        <BreadCrumb title={id ? "Edit ShipData" : "Add ShipData"} pageTitle="Admin ShipData" />

        <Row>
          <Col lg={8}>
            <form>
              <Card>
                <CardBody>
                  {/* name and plan_date */}
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
                          value={ShipData.name}
                          onChange={e => {
                            setShipData({ ...ShipData, ...{ name: e.target.value } })
                          }}
                        />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="mb-3">
                        <label
                          htmlFor="datepicker-publish-input"
                          className="form-label"
                        >
                          Plan_date
                        </label>
                        <Flatpickr
                          className="form-control"
                          id="datepicker-publish-input"
                          value={ShipData.plan_date}
                          onChange={([date]) => {
                            setShipData({ ...ShipData, ...{ plan_date: date } })
                          }}
                          options={{
                            altInput: true,
                            altFormat: "F j, Y",
                            mode: "single",
                            dateFormat: "d.m.y",
                          }}
                        />
                      </div>
                    </Col>
                  </Row>
                  {/* image_url and port */}
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
                            setShipData({ ...ShipData, ...{ image_url: e.target.files[0] } })
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
                          Port
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="manufacturer-brand-input"
                          placeholder="Enter port"
                          required={true}
                          value={ShipData.port}
                          onChange={e => {
                            setShipData({ ...ShipData, ...{ port: e.target.value } })
                          }}
                        />
                      </div>
                    </Col>
                  </Row>
                  {/* type and price */}
                  <Row>
                    <Col lg={6}>
                      <div className="mb-3">
                        <Label
                          htmlFor="choices-publish-visibility-input"
                          className="form-label"
                        >
                          Select type
                        </Label>

                        <Select
                          value={{ value: ShipData.type, label: ShipData.type }}
                          onChange={(e) => {
                            console.log(e);
                            setShipData({ ...ShipData, ...{ type: e.value } })
                          }}
                          options={type}
                          name="choices-publish-visibility-input"
                          classNamePrefix="select2-selection form-select"
                        />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="manufacturer-brand-input"
                        >
                          Price
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="manufacturer-brand-input"
                          placeholder="Enter price"
                          required={true}
                          value={ShipData.price}
                          onChange={e => {
                            setShipData({ ...ShipData, ...{ price: e.target.value } })
                          }}
                        />
                      </div>
                    </Col>
                  </Row>
                  {/* owner and runner */}
                  <Row>
                    <Col lg={6}>
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="manufacturer-brand-input"
                        >
                          Owner
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="manufacturer-brand-input"
                          placeholder="Enter owner"
                          required={true}
                          value={ShipData.owner}
                          onChange={e => {
                            setShipData({ ...ShipData, ...{ owner: e.target.value } })
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
                          Runner
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="manufacturer-brand-input"
                          placeholder="Enter runner"
                          required={true}
                          value={ShipData.runner}
                          onChange={e => {
                            setShipData({ ...ShipData, ...{ runner: e.target.value } })
                          }}
                        />
                      </div>
                    </Col>
                  </Row>
                  {/* total_weight and load_weight */}
                  <Row>
                    <Col lg={6}>
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="manufacturer-brand-input"
                        >
                          Total_weight
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="manufacturer-brand-input"
                          placeholder="Enter total_weight"
                          required={true}
                          value={ShipData.total_weight}
                          onChange={e => {
                            setShipData({ ...ShipData, ...{ total_weight: e.target.value } })
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
                          Load_weight
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="manufacturer-brand-input"
                          placeholder="Enter load_weight"
                          required={true}
                          value={ShipData.load_weight}
                          onChange={e => {
                            setShipData({ ...ShipData, ...{ load_weight: e.target.value } })
                          }}
                        />
                      </div>
                    </Col>
                  </Row>
                  {/* weight and length */}
                  <Row>
                    <Col lg={6}>
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="manufacturer-brand-input"
                        >
                          Weight
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="manufacturer-brand-input"
                          placeholder="Enter weight"
                          required={true}
                          value={ShipData.weight}
                          onChange={e => {
                            setShipData({ ...ShipData, ...{ weight: e.target.value } })
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
                          Lenght
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="manufacturer-brand-input"
                          placeholder="Enter length"
                          required={true}
                          value={ShipData.length}
                          onChange={e => {
                            setShipData({ ...ShipData, ...{ length: e.target.value } })
                          }}
                        />
                      </div>
                    </Col>
                  </Row>
                  {/* width and current_height */}
                  <Row>
                    <Col lg={6}>
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="manufacturer-brand-input"
                        >
                          Widht
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="manufacturer-brand-input"
                          placeholder="Enter width"
                          required={true}
                          value={ShipData.width}
                          onChange={e => {
                            setShipData({ ...ShipData, ...{ width: e.target.value } })
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
                          Current_height
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="manufacturer-brand-input"
                          placeholder="Enter current_height"
                          required={true}
                          value={ShipData.current_height}
                          onChange={e => {
                            setShipData({ ...ShipData, ...{ current_height: e.target.value } })
                          }}
                        />
                      </div>
                    </Col>
                  </Row>
                  {/* full_load and engine */}
                  <Row>
                    <Col lg={6}>
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="manufacturer-brand-input"
                        >
                          Full_load
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="manufacturer-brand-input"
                          placeholder="Enter full_load"
                          required={true}
                          value={ShipData.full_load}
                          onChange={e => {
                            setShipData({ ...ShipData, ...{ full_load: e.target.value } })
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
                          Engine
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="manufacturer-brand-input"
                          placeholder="Enter engine"
                          required={true}
                          value={ShipData.engine}
                          onChange={e => {
                            setShipData({ ...ShipData, ...{ engine: e.target.value } })
                          }}
                        />
                      </div>
                    </Col>
                  </Row>
                  {/* built_date and factory */}
                  <Row>
                    <Col lg={6}>
                      <div className="mb-3">
                        <label
                          htmlFor="datepicker-publish-input"
                          className="form-label"
                        >
                          Built_date
                        </label>
                        <Flatpickr
                          className="form-control"
                          id="datepicker-publish-input"
                          value={ShipData.built_date}
                          onChange={([date]) => {
                            setShipData({ ...ShipData, ...{ built_date: date } })
                          }}
                          options={{
                            altInput: true,
                            altFormat: "F j, Y",
                            mode: "single",
                            dateFormat: "d.m.y",
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
                          Factory
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="manufacturer-brand-input"
                          placeholder="Enter factory"
                          required={true}
                          value={ShipData.factory}
                          onChange={e => {
                            setShipData({ ...ShipData, ...{ factory: e.target.value } })
                          }}
                        />
                      </div>
                    </Col>
                  </Row>
                  {/* location and status */}
                  <Row>
                    <Col lg={6}>
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="manufacturer-brand-input"
                        >
                          Location
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="manufacturer-brand-input"
                          placeholder="Enter location"
                          required={true}
                          value={ShipData.location}
                          onChange={e => {
                            setShipData({ ...ShipData, ...{ location: e.target.value } })
                          }}
                        />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="mb-3">
                        <Label
                          htmlFor="choices-publish-visibility-input"
                          className="form-label"
                        >
                          Select Status
                        </Label>

                        <Select
                          value={{ value: ShipData.status, label: ShipData.status }}
                          onChange={(e) => {
                            console.log(e);
                            setShipData({ ...ShipData, ...{ status: e.value } })
                          }}
                          options={status}
                          name="choices-publish-visibility-input"
                          classNamePrefix="select2-selection form-select"
                        />
                      </div>
                    </Col>
                  </Row>
                  {/* voterId */}
                  <Row className="justify-content-center">
                    <Col lg={6}>
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="manufacturer-brand-input"
                        >
                          VoterId
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="manufacturer-brand-input"
                          placeholder="Enter voterId"
                          required={true}
                          value={ShipData.voterId}
                          onChange={e => {
                            setShipData({ ...ShipData, ...{ voterId: e.target.value } })
                          }}
                        />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>

              <div className="text-end mb-3">
                <button type="submit" id="add-shipData-button" className="btn btn-success w-sm" onClick={e => {
                  e.preventDefault();
                  const formData = new FormData();
                  formData.append("cost", ShipData.cost);
                  formData.append("name", ShipData.name);
                  formData.append("file", ShipData.file_url);
                  if ((ShipData.cost !== null) && (ShipData.name !== null) && (ShipData.file_url !== null)) {
                    console.log(e);

                    if (id) {
                      updateShipData(id, formData).then(res => {
                        console.log(res);
                      })
                    } else {
                      addNewShipData(formData).then(res => {
                        console.log(res);
                      })
                    }

                  }


                }}>
                  {id ? "Update ShipData" : "Add ShipData"}
                </button>
              </div>
            </form>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default AddShipData;