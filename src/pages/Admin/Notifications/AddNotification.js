import React, { useEffect, useState, useMemo } from "react";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import {
  Button,
  Card, CardBody, Col, Container, CardHeader, Nav, NavItem,
  NavLink, Row, TabContent, TabPane, Input, Label, Modal, ModalHeader,
} from "reactstrap";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import classnames from "classnames";
import Dropzone from "react-dropzone";
import MetaTags from 'react-meta-tags';

// Import React FilePond
import { registerPlugin } from "react-filepond";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Flatpickr from "react-flatpickr";
import Select from "react-select";
// Import FilePond styles
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { addNewNotification, getNotification, updateOneNotification } from "../../../helpers/fakebackend_helper";
// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const AddNotification = (props) => {
  let { id } = useParams();
  console.log("notification_ids", useParams());
  const [selectedFiles, setselectedFiles] = useState([]);

  // --------------- use modal ----------
  const [modal_positionTop, setmodal_positionTop] = useState(false);
  function tog_positionTop() {
    setmodal_positionTop(!modal_positionTop);
  }

  // --------------- use modal ----------

  const [notification, setNotification] = useState({
    date: new Date(),
    description: '',
    type: '',

  });

  useEffect(() => {
    if (id) {
      getNotification(id).then(res => {
        res['birthday'] = new Date(res['birthday']);
        setNotification(res);
      })
    }
  }, []);


  function handleAcceptedFiles(files) {
    files.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );
    setselectedFiles(files);
  }

  /**
   * Formats the size
   */
  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  const type = [
    {
      options: [
        { label: "Notification1", value: "notification1" },
        { label: "Notification2", value: "notification2" },
      ],
    },
  ];

  document.title = id ? "Edit Notification" : "Add Notification";
  return (
    <div className="page-content">
      <Container fluid>

        <BreadCrumb title={id ? "Edit Notification" : "Add Notification"} pageTitle="Admin Notification" />

        <Modal id="topmodal" isOpen={modal_positionTop} backdrop="static" keyboard={false} toggle={() => { tog_positionTop(); }} >
          <ModalHeader>
            Modal Heading
            <Button type="button" className="btn-close" onClick={() => { setmodal_positionTop(false); }} aria-label="Close"> </Button>
          </ModalHeader>
          <div className="modal-body text-center p-5">
            <lord-icon src="https://cdn.lordicon.com/pithnlch.json"
              trigger="loop" colors="primary:#121331,secondary:#08a88a" style={{ width: "120px", height: "120px" }}>
            </lord-icon>
            <div className="mt-4">
              <h4 className="mb-3">Your event has been created.</h4>
              <p className="text-muted mb-4"> The transfer was not successfully received by us. the email of the recipient wasn't correct.</p>
              <div className="hstack gap-2 justify-content-center">
                <Link to="#" className="btn btn-link link-success fw-medium shadow-none" onClick={() => { tog_positionTop(); }}><i className="ri-close-line me-1 align-middle"></i> Close</Link>
                <Link to="/admin-notifications" className="btn btn-success">Completed</Link>
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
                        <label
                          className="form-label"
                          htmlFor="manufacturer-brand-input"
                        >
                          Date
                        </label>
                        <Flatpickr
                          className="form-control"
                          id="datepicker-publish-input"
                          value={notification.date}
                          onChange={([date]) => {
                            setNotification({ ...notification, ...{ date: date } })
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
                      <div>
                        <Label
                          htmlFor="choices-publish-visibility-input"
                          className="form-label"
                        >
                          Select type
                        </Label>

                        <Select
                          value={{ value: notification.type, label: notification.type === 'notification2' ? 'notification1' : 'notification2' }}
                          onChange={(e) => {
                            console.log(e);
                            setNotification({ ...notification, ...{ type: e.value } })
                          }}
                          options={type}
                          name="choices-publish-visibility-input"
                          classNamePrefix="select2-selection form-select"
                        />
                      </div>
                    </Col>
                  </Row>
                  <div className="mb-3">
                    <label
                      className="form-label"
                      htmlFor="manufacturer-brand-input"
                    >
                      description
                    </label>
                    <textarea
                      rows="3"
                      className="form-control"
                      id="manufacturer-brand-input"
                      placeholder="Enter description"
                      value={notification.description}
                      onChange={e => {
                        setNotification({ ...notification, ...{ description: e.target.value } })
                      }}
                    />
                  </div>

                </CardBody>
              </Card>

              <div className="text-end mb-3">
                <button type="submit" className="btn btn-success w-sm" onClick={e => {
                  e.preventDefault();
                  if (id) {
                    updateOneNotification(id, notification).then(res => {
                      console.log(res);
                    })
                  } else {
                    addNewNotification(notification).then(res => {
                      console.log(res);
                    })
                  }
                  tog_positionTop();
                }}>
                  {id ? "Update" : "Add"}
                </button>
              </div>
            </form>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default AddNotification;
