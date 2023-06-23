import React, { useEffect, useState, useMemo } from "react";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import {
  Card,
  CardBody,
  Col,
  Container,
  CardHeader,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
  Input,
  Label,
  Button,
  Modal,
  ModalHeader
} from "reactstrap";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import classnames from "classnames";
import Dropzone from "react-dropzone";
import MetaTags from "react-meta-tags";

// Import React FilePond
import { registerPlugin } from "react-filepond";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import Flatpickr from "react-flatpickr";
import Select from "react-select";
// Import FilePond styles
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import {
  addNewQuestion,
  getQuestion,
  updateOneQuestion,
} from "../../../helpers/fakebackend_helper";
import { getDegrees } from "../../../helpers/fakebackend_helper";
// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const AddQuestion = (props) => {
  let { id } = useParams();
  const [selectedFiles, setselectedFiles] = useState([]);
  const [selectedSingle, setSelectedSingle] = useState(null);
  const [selectedDegree, setDegree] = useState({});
  const [degreeSelects, setDegreeSelects] = useState([]);
  const [levelSelects, setLevelSelects] = useState([]);
  const [selectedLevel, setLevel] = useState({});
  const [question, setQuestion] = useState({
    level: "",
    degreeId: "",
    description: "",
  });

  const [modal_positionTop, setmodal_positionTop] = useState(false);
  function tog_positionTop() {
    setmodal_positionTop(!modal_positionTop);
  }

  useEffect(() => {
    console.log("sss", degreeSelects);
  }, [degreeSelects])
  useEffect(() => {
    if (id) {
      getQuestion(id).then((response) => {
        setQuestion(response);

        getDegrees().then(res => {
          console.log("Degree list", res);
          setDegreeSelects(res.map(e => {
            return { value: e.id, label: e.name, max: e.maxdegree }
          }))

          // console.log(response.degreeId)
          let obj = res.find(o => o.id === response.degreeId);
          let priD = { value: obj.id, label: obj.name, max: obj.maxdegree }
          setDegree(priD);

          var arr = [];
          var len = obj.maxdegree
          for (var i = 0; i < len; i++) {
            arr.push({
              value: i + 1,
              label: (i + 1).toString(),
            });
          }
          setLevelSelects(arr)
          console.log(arr);

          let opj = arr.find(o => o.label === response.level);
          let priL = { value: opj.value, label: opj.label }
          setLevel(priL);
          // setLevel()
        })
      });
    }
    else {
      getDegrees().then(res => {
        console.log("Degree list", res);
        setDegreeSelects(res.map(e => {
          return { value: e.id, label: e.name, max: e.maxdegree }
        }))
        setLevelSelects([])
      })
    }
  }, [id]);

  function handleAcceptedFiles(files) {
    files.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );
    setselectedFiles(files);
  }

  function handleSelectSingle(selectedSingle) {
    setSelectedSingle(selectedSingle);
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

  document.title = id ? "Edit Question" : "Add Question";
  return (
    <div className="page-content">
      <Container fluid>
        <BreadCrumb
          title={id ? "Edit Question" : "Add Question"}
          pageTitle="Admin Question"
        />

        <Modal id="topmodal" isOpen={modal_positionTop} backdrop="static" keyboard={false} toggle={() => { tog_positionTop(); }} >
          <ModalHeader>
            Add Question
            <Button type="button" className="btn-close" onClick={() => { setmodal_positionTop(false); }} aria-label="Close"> </Button>
          </ModalHeader>
          <div className="modal-body text-center p-5">
            <lord-icon src="https://cdn.lordicon.com/pithnlch.json"
              trigger="loop" colors="primary:#121331,secondary:#08a88a" style={{ width: "120px", height: "120px" }}>
            </lord-icon>
            <div className="mt-4">
              <h4 className="mb-3">Add Question Successed.</h4>
              <p className="text-muted mb-3"> Do you add more questions?</p>
              <div className="hstack gap-2 justify-content-center">
                <Link to="#" className="btn btn-link link-success fw-medium shadow-none" onClick={() => { tog_positionTop(); }}><i className="ri-close-line me-1 align-middle"></i> Yes</Link>
                <Link to="/admin-questions" className="btn btn-success">No. That's all</Link>
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
                          degree
                        </label>
                        <Select
                          value={selectedDegree}
                          onChange={(e) => {
                            // console.log(e);
                            // console.log(degreeSelects);
                            var arr = [];
                            var len = e.max;
                            for (var i = 0; i < len; i++) {
                              arr.push({
                                value: i + 1,
                                label: (i + 1).toString(),
                              });
                            }
                            setLevelSelects(arr)
                            setDegree(e);
                            setQuestion({
                              ...question,
                              ...{ degreeId: e.value },
                            });
                          }}
                          options={degreeSelects}
                        />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="manufacturer-brand-input"
                        >
                          level
                        </label>
                        {/* <input
                          className="form-control"
                          id="manufacturer-brand-input"
                          placeholder="Enter level"
                          value={question.level}
                          onChange={(e) => {
                            setQuestion({
                              ...question,
                              ...{ level: e.target.value },
                            });
                          }}
                        /> */}
                        <Select
                          value={selectedLevel}
                          onChange={(e) => {
                            setLevel(e);
                            setQuestion({
                              ...question,
                              ...{ level: e.value },
                            });
                          }}
                          options={levelSelects}
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
                      value={question.description}
                      onChange={(e) => {
                        setQuestion({
                          ...question,
                          ...{ description: e.target.value },
                        });
                      }}
                    />
                  </div>
                </CardBody>
              </Card>

              <div className="text-end mb-3">
                <button
                  type="submit"
                  className="btn btn-success w-sm"
                  onClick={(e) => {
                    e.preventDefault();
                    if (id) {
                      updateOneQuestion(id, question).then((res) => {
                        console.log(res);
                      });
                    } else {
                      addNewQuestion(question).then((res) => {
                        console.log(res);
                      });
                    }
                    tog_positionTop();
                  }}
                >
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

export default AddQuestion;
