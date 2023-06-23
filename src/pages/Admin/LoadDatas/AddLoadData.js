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
import { addNewLoadData, getLoadData, updateLoadData } from "../../../helpers/fakebackend_helper";

// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const AddLoadData = (props) => {

  let { id } = useParams();
  const [selectedFiles, setselectedFiles] = useState([]);

  const [LoadData, setLoadData] = useState({
    name: '', amount: '', from: '', to: '', plan_date: new Date(), status: '', voterId: '',
  });

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
      getLoadData(id).then(res => {
        setLoadData(res);
      })
    }
  }, []);

  document.title = id ? "Edit LoadData" : "Add LoadData";
  return (
    <div className="page-content">
      <Container fluid>

        <BreadCrumb title={id ? "Edit LoadData" : "Add LoadData"} pageTitle="Admin LoadData" />


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
                          value={LoadData.name}
                          onChange={e => {
                            setLoadData({ ...LoadData, ...{ name: e.target.value } })
                          }}
                        />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="mb-3">
                        <Label className="form-label" htmlFor="validationDefaultUsername">
                          Amount
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="validationDefaultUsername"
                          placeholder="Enter amount"
                          required={true}
                          value={LoadData.amount}
                          onChange={e => {
                            setLoadData({ ...LoadData, ...{ amount: e.target.value } })
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
                          From
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="manufacturer-brand-input"
                          placeholder="Enter from"
                          required={true}
                          value={LoadData.from}
                          onChange={e => {
                            setLoadData({ ...LoadData, ...{ from: e.target.value } })
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
                          To
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="manufacturer-brand-input"
                          placeholder="Enter to"
                          required={true}
                          value={LoadData.to}
                          onChange={e => {
                            setLoadData({ ...LoadData, ...{ to: e.target.value } })
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
                          Plan_date
                        </label>
                        <Flatpickr
                          className="form-control"
                          id="datepicker-publish-input"
                          value={LoadData.plan_date}
                          onChange={([plan_date]) => {
                            setLoadData({ ...LoadData, ...{ plan_date: plan_date } })
                          }}
                          options={{
                            altInput: true,
                            altFormat: "F j, Y",
                            mode: "single",
                            dateFormat: "Y-m-d",
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
                          VoterId
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="manufacturer-brand-input"
                          placeholder="Enter voterId"
                          required={true}
                          value={LoadData.voterId}
                          onChange={e => {
                            setLoadData({ ...LoadData, ...{ voterId: e.target.value } })
                          }}
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row className="justify-content-center">
                    <Col lg={6}>

                    </Col>
                  </Row>
                </CardBody>
              </Card>

              <div className="text-end mb-3">
                <button type="submit" id="add-loadDataData-button" className="btn btn-success w-sm" onClick={e => {
                  e.preventDefault();
                  
                  if (id) {
                    updateLoadData(id,LoadData).then(res => {
                      console.log(res);
                    })
                  } else {
                    addNewLoadData(LoadData).then(res => {
                      console.log(res);
                    })
                  }
                }
                }>
                  {id ? "Update LoadData" : "Add LoadData"}
                </button>
              </div>
            </form>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default AddLoadData;