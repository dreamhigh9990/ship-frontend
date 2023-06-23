import React, { useEffect, useState, useMemo } from "react";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { Card, CardBody, Col, Container, CardHeader, Nav, NavItem, NavLink, Row, TabContent, TabPane, Input, Label, } from "reactstrap";

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
import { addNewArticleCategory, getArticleCategory, updateOneArticleCategory } from "../../../helpers/fakebackend_helper";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const AddArticleCategory = (props) => {
  let { id } = useParams();
  const [selectedFiles, setselectedFiles] = useState([]);

  const [ArticleCategory, setArticleCategory] = useState({
    title: '',
    description: '',
    parentId: ''

  });

  useEffect(() => {
    if (id) {
      getArticleCategory(id).then(res => {
        setArticleCategory(res);
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

  const articleCategoryId = [
    {
      options: [
        { label: "politics", value: "1" },
        { label: "culture", value: "2" },
        { label: "artist", value: "3" },
        { label: "sport", value: "4" },

      ],
    },
  ];

  document.title = id ? "Edit ArticleCategory" : "Add ArticleCategory";
  return (
    <div className="page-content">
      <Container fluid>

        <BreadCrumb title={id ? "Edit ArticleCategory" : "Add ArticleCategory"} pageTitle="Admin ArticleCategory" />

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
                      value={ArticleCategory.title}
                      onChange={e => {
                        setArticleCategory({ ...ArticleCategory, ...{ title: e.target.value } })
                      }}
                    />
                  </div>
                  <Row>
                    <Col lg={8}>
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
                          value={ArticleCategory.description}
                          onChange={e => {
                            setArticleCategory({ ...ArticleCategory, ...{ description: e.target.value } })
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
                <button type="submit" className="btn btn-success w-sm" onClick={e => {
                  e.preventDefault();
                  if (id) {
                    updateOneArticleCategory(id, ArticleCategory).then(res => {
                      console.log(res);
                    })
                  } else {
                    addNewArticleCategory(ArticleCategory).then(res => {
                      console.log(res);
                    })
                  }
                }}>
                  {id ? "Update ArticleCategory" : "Add ArticleCategory"}
                </button>
              </div>
            </form>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default AddArticleCategory;
