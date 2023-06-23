import React, { useEffect, useState, useMemo } from "react";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import {
  Card,
  CardBody,
  Col,
  Container,
  Button,
  Modal,
  ModalHeader,
  NavLink,
  Row,
  TabContent,
  TabPane,
  Input,
  Label,
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
import { addNewProgramCategory, getProgramCategory, updateOneProgramCategory } from "../../../helpers/fakebackend_helper";
// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const AddProgramCategory = (props) => {
  let { id } = useParams();
  const [selectedFiles, setselectedFiles] = useState([]);

  // --------------- use modal ----------
  const [modal_positionTop, setmodal_positionTop] = useState(false);
  function tog_positionTop() {
    setmodal_positionTop(!modal_positionTop);
  }

  const [ProgramCategory, setProgramCategory] = useState({
    title: '',
    description: '',
    parentId: ''
  });

  useEffect(() => {
    if (id) {
      getProgramCategory(id).then(res => {
        setProgramCategory(res);
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

  document.title = id ? "Edit ProgramCategory" : "Add ProgramCategory";
  return (
    <div className="page-content">
      <Container fluid>

        <BreadCrumb title={id ? "Edit ProgramCategory" : "Add ProgramCategory"} pageTitle="Admin ProgramCategory" />

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
                <Link to="/admin-programs" className="btn btn-success">Completed</Link>
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
                      Title
                    </Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="product-title-input"
                      placeholder="Enter title"
                      value={ProgramCategory.title}
                      onChange={e => {
                        setProgramCategory({ ...ProgramCategory, ...{ title: e.target.value } })
                      }}
                    />
                  </div>
                  <Row>
                    <Col lg={7}>
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="manufacturer-brand-input"
                        >
                          Description
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="manufacturer-brand-input"
                          placeholder="Enter description"
                          value={ProgramCategory.description}
                          onChange={e => {
                            setProgramCategory({ ...ProgramCategory, ...{ description: e.target.value } })
                          }}
                        />
                      </div>
                    </Col>
                    <Col lg={5}>
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="manufacturer-brand-input"
                        >
                          ParentId
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="manufacturer-brand-input"
                          placeholder="Enter parentId"
                          value={ProgramCategory.parentId}
                          onChange={e => {
                            setProgramCategory({ ...ProgramCategory, ...{ parentId: e.target.value } })
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
                    updateOneProgramCategory(id, ProgramCategory).then(res => {
                      console.log(res);
                    })
                  } else {
                    addNewProgramCategory(ProgramCategory).then(res => {
                      console.log(res);
                    })
                  }
                  tog_positionTop();
                }}>
                  {id ? "Update ProgramCategory" : "Add ProgramCategory"}
                </button>
              </div>
            </form>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default AddProgramCategory;
