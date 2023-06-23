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
import { addNewMedia, getMedia, updateOneMedia } from "../../../helpers/fakebackend_helper";
// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const AddMedia = (props) => {
  let { id } = useParams();
  const [selectedFiles, setselectedFiles] = useState([]);

  const [Media, setMedia] = useState({
    title: '',
    file_url: null,
    description: '',

  });

  useEffect(() => {
    if (id) {
      getMedia(id).then(res => {
        setMedia(res);
      })
    }
  }, []);

  document.title = id ? "Edit Media" : "Add Media";
  return (
    <div className="page-content">
      <Container fluid>

        <BreadCrumb title={id ? "Edit Media" : "Add Media"} pageTitle="Admin Media" />

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
                      placeholder="Enter title"
                      value={Media.title}
                      onChange={e => {
                        setMedia({ ...Media, ...{ title: e.target.value } })
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
                          File_url
                        </label>
                        <input
                          className="form-control"
                          id="product-image-input"
                          type="file"
                          accept="image/png, image/gif, image/jpeg"
                          onChange={e=>{
                            setMedia({ ...Media, ...{ file_url: e.target.files[0] } })
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
                          Description
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="manufacturer-brand-input"
                          placeholder="Enter description"
                          value={Media.description}
                          onChange={e => {
                            setMedia({ ...Media, ...{ description: e.target.value } })
                          }}
                        />
                      </div>
                    </Col>
                  </Row>


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
                  const formData = new FormData();
                  formData.append("description", Media.description);
                  formData.append("title", Media.title);
                  formData.append("file", Media.file_url);
                  console.log(formData, Media);
                  if (id) {
                    updateOneMedia(id, formData).then(res => {
                      console.log(res);
                    })
                  } else {
                    addNewMedia(formData).then(res => {
                      console.log(res);
                    })
                  }
                }}>
                  {id ? "Update Media" : "Add Media"}
                </button>
              </div>
            </form>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default AddMedia;