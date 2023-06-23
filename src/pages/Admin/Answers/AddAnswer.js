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
import { addNewAnswer, getAnswer, updateOneAnswer, getQuestions } from "../../../helpers/fakebackend_helper";

import DropdownTreeSelect from 'react-dropdown-tree-select'
import 'react-dropdown-tree-select/dist/styles.css'

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const AddAnswer = (props) => {
  let { id } = useParams();
  const [selectedFiles, setselectedFiles] = useState([]);
  const [cateList, setCateList] = useState([]);
  const [questionCate, setQuestionCate] = useState([]);

  const [Answer, setAnswer] = useState({
    description: '',
    result: '',

  });

  var cateTree = [];
  useEffect(() => {
    getQuestions().then(res => {
      setQuestionCate(res);
      if (id) {
        getAnswer(id).then(e => {
          setAnswer(e);
        })
      }
    })
  }, []);

  useEffect(() => {
    cateTree = [];
    refreshTree(cateTree, 0);
    setCateList(cateTree);
  }, [Answer, questionCate]);

  const refreshTree = (obj, pid) => {
    questionCate.filter(e => e.parentId === pid).map(e => {
      var ch = {};
      ch = { label: e.title, value: e.id, expanded: true, checked: Answer.campusCategoryId === e.id, children: [] };
      obj.push(ch);
      refreshTree(ch.children, e.id);
    })
  }

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

  const onChange = (currentNode, selectedNodes) => {
    console.log('onChange::', currentNode, selectedNodes.title)
    if (selectedNodes.length) {
      setAnswer({ ...Answer, ...{ questionId: selectedNodes[0]['value'] } })
    }
  }
  const onAction = (node, action) => {
    console.log('onAction::', action, node)
  }
  const onNodeToggle = currentNode => {
    console.log('onNodeToggle::', currentNode)
  }

  const boolean = [
    {
      options: [
        { label: "Yes", value: "yes" },
        { label: "No", value: "no" },
      ],
    },
  ];
  document.title = id ? "Edit Answer" : "Add Answer";
  return (
    <div className="page-content">
      <Container fluid>

        <BreadCrumb title={id ? "Edit Answer" : "Add Answer"} pageTitle="Admin Answer" />

        <Row>
          <Col lg={8}>
            <form>
              <Card>
                <CardBody>
                  <Row>
                    <Col lg={5}>
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
                          value={Answer.description}
                          onChange={e => {
                            setAnswer({ ...Answer, ...{ description: e.target.value } })
                          }}
                        />
                      </div>
                    </Col>
                    <Col lg={7}>
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="manufacturer-brand-input"
                        >
                          Result
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="manufacturer-brand-input"
                          placeholder="Enter result"
                          value={Answer.result}
                          onChange={e => {
                            setAnswer({ ...Answer, ...{ result: e.target.value } })
                          }}
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={6}>
                      <div>
                        <Label
                          htmlFor="choices-publish-visibility-input"
                          className="form-label"
                        >
                          Select Boolean
                        </Label>
                        <Select
                          value={{ value: Answer.boolean, label: Answer.boolean === 'yes' ? 'Yes' : 'No' }}
                          onChange={(e) => {
                            console.log(e);
                            setAnswer({ ...Answer, ...{ boolean: e.value } })
                          }}
                          options={boolean}
                          name="choices-publish-visibility-input"
                          classNamePrefix="select2-selection form-select"
                        />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div>
                        <Label
                          htmlFor="choices-publish-visibility-input"
                          className="form-label"
                        >
                          Select Problem
                        </Label>
                        <DropdownTreeSelect data={cateList} onChange={onChange} onAction={onAction} onNodeToggle={onNodeToggle} mode="radioSelect" />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>

              <Card>
                <CardHeader>
                  <h5 className="card-title mb-0">Product Gallery</h5>
                </CardHeader>
                <CardBody>
                  <div className="mb-4">
                    <h5 className="fs-14 mb-1">Product Image</h5>
                    <p className="text-muted">Add Product main Image.</p>
                    <input
                      className="form-control"
                      id="product-image-input"
                      type="file"
                      accept="image/png, image/gif, image/jpeg"
                    />
                  </div>
                </CardBody>
              </Card>

              <div className="text-end mb-3">
                <button type="submit" className="btn btn-success w-sm" onClick={e => {
                  e.preventDefault();
                  if (id) {
                    updateOneAnswer(id, Answer).then(res => {
                      console.log(res);
                    })
                  } else {
                    addNewAnswer(Answer).then(res => {
                      console.log(res);
                    })
                  }
                }}>
                  {id ? "Update Answer" : "Add Answer"}
                </button>
              </div>
            </form>
          </Col>

        </Row>
      </Container>
    </div >
  );
};

export default AddAnswer;
