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
  addNewSuggestion,
  getSuggestion,
  updateOneSuggestion,
} from "../../../helpers/fakebackend_helper";
// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const AddSuggestion = (props) => {
  let { id } = useParams();
  const [selectedFiles, setselectedFiles] = useState([]);

  const [suggestion, setSuggestion] = useState({
    name: "",
    description: "",
    contact_number: "111-111-1111",
    attach_url: "",
    draft: "",
  });

  useEffect(() => {
    if (id) {
      getSuggestion(id).then((res) => {
        setSuggestion(res);
      });
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

  document.title = id ? "Edit Suggestion" : "Add Suggestion";
  return (
    <div className="page-content">
      <Container fluid>
        <BreadCrumb
          title={id ? "Edit Suggestion" : "Add Suggestion"}
          pageTitle="Admin Suggestion"
        />

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
                      value={suggestion.name}
                      onChange={(e) => {
                        setSuggestion({
                          ...suggestion,
                          ...{ name: e.target.value },
                        });
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
                          Description
                        </label>
                        <textarea
                          rows="3"
                          className="form-control"
                          id="manufacturer-brand-input"
                          placeholder="Enter Description"
                          value={suggestion.description}
                          onChange={(e) => {
                            setSuggestion({
                              ...suggestion,
                              ...{ description: e.target.value },
                            });
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
                          Contact_Number
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="manufacturer-brand-input"
                          placeholder="Enter Contact_Number"
                          value={suggestion.email}
                          onChange={(e) => {
                            setSuggestion({
                              ...suggestion,
                              ...{ contact_number: e.target.value },
                            });
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
                          Attach_Url
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="manufacturer-brand-input"
                          placeholder="Enter Attach_Url"
                          value={suggestion.attach_url}
                          onChange={(e) => {
                            setSuggestion({
                              ...suggestion,
                              ...{ attach_url: e.target.value },
                            });
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
                          Draft
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="manufacturer-brand-input"
                          placeholder="Enter Draft"
                          value={suggestion.draft}
                          onChange={(e) => {
                            setSuggestion({
                              ...suggestion,
                              ...{ draft: e.target.value },
                            });
                          }}
                        />
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
                <button
                  type="submit"
                  className="btn btn-success w-sm"
                  onClick={(e) => {
                    e.preventDefault();
                    if (id) {
                      updateOneSuggestion(id, suggestion).then((res) => {
                        console.log(res);
                      });
                    } else {
                      addNewSuggestion(suggestion).then((res) => {
                        console.log(res);
                      });
                    }
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

export default AddSuggestion;
