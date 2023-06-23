import React, { useEffect, useState, useMemo } from "react";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import {
  Button, Card, CardBody, Col, Container, CardHeader, Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
  Input,
  Label,
  Modal,
  ModalHeader,
} from "reactstrap";

import { PositionModalExample } from "../../BaseUi/UiModals/UiModalCode";

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
import { addNewUser, getUser, updateOneUser } from "../../../helpers/fakebackend_helper";
// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const AddUser = (props) => {
  let { id } = useParams();
  const [selectedFiles, setselectedFiles] = useState([]);

  // --------------- use modal ----------
  const [modal_positionTop, setmodal_positionTop] = useState(false);
  function tog_positionTop() {
    setmodal_positionTop(!modal_positionTop);
  }

  // --------------- use modal ----------

  const [user, setUser] = useState({
    username: '',
    name: '',
    email: '',
    gender: 'male',
    birthday: new Date(),
    balance: '',
    free_balance: '',
  });

  useEffect(() => {
    if (id) {
      getUser(id).then(res => {
        res['birthday'] = new Date(res['birthday']);
        setUser(res);
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

  const gender = [
    {
      options: [
        { label: "Male", value: "male" },
        { label: "Female", value: "female" },
      ],
    },
  ];
  document.title = id ? "Edit User" : "Add User";
  return (
    <div className="page-content">
      <Container fluid>

        <BreadCrumb title={id ? "Edit User" : "Add User"} pageTitle="Admin User" />

        <Modal id="topmodal" isOpen={modal_positionTop} toggle={() => { tog_positionTop(); }} >
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
                <Link to="/admin-users" className="btn btn-success">Completed</Link>
              </div>
            </div>
          </div>
        </Modal>

        <Row>
          <Col lg={8}>
            <form>
              <Card>
                <CardBody>
                  <div className="mb-3">
                    <Label className="form-label" htmlFor="product-title-input">
                      Name
                    </Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="product-title-input"
                      placeholder="Enter name"
                      value={user.name}
                      onChange={e => {
                        setUser({ ...user, ...{ name: e.target.value } })
                      }}
                    />
                  </div>

                  <Row>
                    <Col lg={6}>
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="manufacturer-brand-input"
                        >
                          Username
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="manufacturer-brand-input"
                          placeholder="Enter Username"
                          value={user.username}
                          onChange={e => {
                            setUser({ ...user, ...{ username: e.target.value } })
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
                          Email
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="manufacturer-brand-input"
                          placeholder="Enter Email"
                          value={user.email}
                          onChange={e => {
                            setUser({ ...user, ...{ email: e.target.value } })
                          }}
                        />
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={6}>
                      <div className="mb-3">
                        <Label
                          htmlFor="choices-publish-visibility-input"
                          className="form-label"
                        >
                          Select Gender
                        </Label>

                        <Select
                          value={{ value: !user.gender ? 'Male' : user.gender, label: (user.gender === 'female' ? 'Female' : 'Male') }}
                          onChange={(e) => {
                            console.log(e);
                            setUser({ ...user, ...{ gender: e.value } })
                          }}
                          options={gender}
                          name="choices-publish-visibility-input"
                          classNamePrefix="select2-selection form-select"
                        />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="mb-3">
                        <label
                          htmlFor="datepicker-publish-input"
                          className="form-label"
                        >
                          Input Date Of Birth
                        </label>
                        <Flatpickr
                          className="form-control"
                          id="datepicker-publish-input"
                          value={user.birthday}
                          onChange={([date]) => {
                            setUser({ ...user, ...{ birthday: date } })
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

                  <Row>
                    <Col lg={6}>
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="manufacturer-brand-input"
                        >
                          Balance
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="manufacturer-brand-input"
                          placeholder="Enter Balance"
                          value={user.balance}
                          onChange={e => {
                            setUser({ ...user, ...{ balance: e.target.value } })
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
                          Free_balance
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="manufacturer-brand-input"
                          placeholder="Enter Free_balance"
                          value={user.free_balance}
                          onChange={e => {
                            setUser({ ...user, ...{ free_balance: e.target.value } })
                          }}
                        />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>

              <div className="text-end mb-3">
                <button type="submit" className="btn btn-success w-sm" onClick={e => {
                  e.preventDefault();
                  if (id) {
                    updateOneUser(id, user).then(res => {
                      console.log(res);
                    });

                  } else {
                    addNewUser(user).then(res => {
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

export default AddUser;
