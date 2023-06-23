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
  Modal,
  Button,
  ModalHeader,
  TabContent,
  TabPane,
  Input,
  Label,
} from "reactstrap";

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
import { addNewCampus, getCampus, updateOneCampus, getCampusCategories } from "../../../helpers/fakebackend_helper";

import DropdownTreeSelect from 'react-dropdown-tree-select'
import 'react-dropdown-tree-select/dist/styles.css'

const data = [{
  label: 'search me',
  value: 'searchme',
  children: [
    {
      label: 'search me too',
      value: 'searchmetoo',
      children: [
        {
          label: 'No one can get me',
          value: 'anonymous',
        },
      ],
    },
  ],
}, {
  label: 'Other',
  value: 'other',
},]

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const AddCampus = (props) => {
  let { id } = useParams();
  const [selectedFiles, setselectedFiles] = useState([]);
  const [cateList, setCateList] = useState([]);
  const [campusCate, setCampusCate] = useState([]);
  const [modalPositionTop, setmodalPositionTop] = useState(false);
  function togPositionTop() {
    setmodalPositionTop(!modalPositionTop);
  }

  const [Campus, setCampus] = useState({
    name: '',
    description: '',
    browses: '',
    cost: '',
   
    campusCategoryId: '',
  });

  var cateTree = [];
  useEffect(() => {
    getCampusCategories().then(res => {
      setCampusCate(res);
      if (id) {
        getCampus(id).then(e => {
          setCampus(e);
        })
      }
    })
  }, []);

  useEffect(() => {
    cateTree = [];
    refreshTree(cateTree, 0);
    setCateList(cateTree);
  }, [Campus, campusCate]);

  const refreshTree = (obj, pid) => {
    campusCate.filter(e => e.parentId == pid).map(e => {
      var ch = {};
      ch = { label: e.title, value: e.id, expanded: true, checked: Campus.campusCategoryId == e.id, children: [] };
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
      setCampus({ ...Campus, ...{ campusCategoryId: selectedNodes[0]['value'] } })
    }
  }
  const onAction = (node, action) => {
    console.log('onAction::', action, node)
  }
  const onNodeToggle = currentNode => {
    console.log('onNodeToggle::', currentNode)
  }

  document.title = id ? "Edit Campus" : "Add Campus";
  return (
    <div className="page-content">
      <Container fluid>

        <BreadCrumb title={id ? "Edit Campus" : "Add Campus"} pageTitle="Admin Campus" />

        <Modal id="topmodal" isOpen={modalPositionTop} backdrop="static" keyboard={false} toggle={() => { togPositionTop(); }} >
          <ModalHeader>
            Modal Heading
            <Button type="button" className="btn-close" onClick={() => { setmodalPositionTop(false); }} aria-label="Close"> </Button>
          </ModalHeader>
          <div className="modal-body text-center p-5">
            <lord-icon src="https://cdn.lordicon.com/pithnlch.json"
              trigger="loop" colors="primary:#121331,secondary:#08a88a" style={{ width: "120px", height: "120px" }}>
            </lord-icon>
            <div className="mt-4">
              <h4 className="mb-3">Your event has been created.</h4>
              <p className="text-muted mb-4"> The transfer was not successfully received by us. the email of the recipient wasn't correct.</p>
              <div className="hstack gap-2 justify-content-center">
                <Link to="#" className="btn btn-link link-success fw-medium shadow-none" onClick={() => { togPositionTop(); }}><i className="ri-close-line me-1 align-middle"></i> Close</Link>
                <Link to="/admin-campuses" className="btn btn-success">Completed</Link>
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
                      value={Campus.name}
                      onChange={e => {
                        setCampus({ ...Campus, ...{ name: e.target.value } })
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      className="form-label"
                      htmlFor="manufacturer-brand-input"
                    >
                      Description
                    </label>
                    <textarea
                      rows={4}
                      className="form-control"
                      id="manufacturer-brand-input"
                      placeholder="Enter description"
                      value={Campus.description}
                      onChange={e => {
                        setCampus({ ...Campus, ...{ description: e.target.value } })
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
                          Cost
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="manufacturer-brand-input"
                          placeholder="Enter cost"
                          value={Campus.cost}
                          onChange={e => {
                            setCampus({ ...Campus, ...{ cost: e.target.value } })
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
                          CampusCategoryId
                        </label>
                        <DropdownTreeSelect data={cateList} onChange={onChange} onAction={onAction} onNodeToggle={onNodeToggle} mode="radioSelect" />
                      </div>
                    </Col>
                    {/* <Col lg={6}>
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="manufacturer-brand-input"
                        >
                          Browses
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="manufacturer-brand-input"
                          placeholder="Enter browses"
                          value={Campus.browses}
                          onChange={e => {
                            setCampus({ ...Campus, ...{ browses: e.target.value } })
                          }}
                        />
                      </div>
                    </Col> */}
                  </Row>

                  {/* <Row> */}
                    {/* <Col lg={6}>
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="manufacturer-brand-input"
                        >
                          Recommends
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="manufacturer-brand-input"
                          placeholder="Enter recommends"
                          value={Campus.recommends}
                          onChange={e => {
                            setCampus({ ...Campus, ...{ recommends: e.target.value } })
                          }}
                        />
                      </div>
                    </Col> */}
                    {/* <Col lg={6}>

                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="manufacturer-brand-input"
                        >
                          CampusCategoryId
                        </label>
                        <DropdownTreeSelect data={cateList} onChange={onChange} onAction={onAction} onNodeToggle={onNodeToggle} mode="radioSelect" />
                      </div>
                    </Col>
                  </Row> */}

                </CardBody>
              </Card>

              {/* <Card>
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
              </Card> */}

              <div className="text-end mb-3">
                <button type="submit" className="btn btn-success w-sm" onClick={e => {
                  e.preventDefault();
                  if (id) {
                    updateOneCampus(id, Campus).then(res => {
                      console.log(res);
                    })
                  } else {
                    addNewCampus(Campus).then(res => {
                      console.log(res);
                    })
                  }
                  togPositionTop();
                }}>
                  {id ? "Update Campus" : "Add Campus"}
                </button>
              </div>
            </form>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default AddCampus;
