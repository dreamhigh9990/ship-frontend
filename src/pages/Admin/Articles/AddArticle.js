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

// Import React FilePond
import { registerPlugin } from "react-filepond";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import Select from "react-select";

// Import FilePond styles
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import {
  addNewArticle,
  getArticle,
  updateOneArticle,
  getArticleCategories,
} from "../../../helpers/fakebackend_helper";
import "react-dropdown-tree-select/dist/styles.css";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const AddArticle = (props) => {
  let { id } = useParams();
  const [selectedFiles, setselectedFiles] = useState([]);
  const [articleCategories, setArticleCategories] = useState([]);
  const [articleCategory, setArticleCategory] = useState({});

  const [article, setArticle] = useState({
    name: "",
    description: "",
    contact_number: "",
    articleCategoryId: "",
    articleCategory: {
      title: "",
    },
    attach_url: "",
    recommends: "",
    source: "",
    oppositions: "",
    browingcount: "",
  });

  useEffect(() => {
    getArticleCategories().then((categories) => {
      console.log(categories);
      for (const category of categories) {
        category.label = category.title;
        category.value = category.id;
      }
      setArticleCategories(categories);
    });
  }, []);

  useEffect(() => {
    if (id) {
      getArticle(id).then((res) => {
        console.log("Article Data:", res);
        setArticle(res);
      });
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

  document.title = id ? "Edit Article" : "Add Article";

  return (
    <div className="page-content">
      <Container fluid>
        <BreadCrumb
          title={id ? "Edit Article" : "Add Article"}
          pageTitle="Admin Article"
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
                      value={article.name}
                      onChange={(e) => {
                        setArticle({ ...article, ...{ name: e.target.value } });
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <Label className="form-label" htmlFor="product-title-input">
                      Description
                    </Label>
                    <Input
                      type="textarea"
                      className="form-control"
                      id="product-title-input"
                      placeholder="Enter description"
                      value={article.description}
                      onChange={(e) => {
                        setArticle({
                          ...article,
                          ...{ description: e.target.value },
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
                          Contact_number
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="manufacturer-brand-input"
                          placeholder="Enter contact_number"
                          value={article.contact_number}
                          onChange={(e) => {
                            setArticle({
                              ...article,
                              ...{ contact_number: e.target.value },
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
                          Attach_url
                        </label>
                        <input
                          className="form-control"
                          id="product-image-input"
                          type="file"
                          accept="image/png, image/gif, image/jpeg"
                          value={article.attach_url}
                          onChange={(e) => {
                            setArticle({
                              ...article,
                              ...{ attach_url: e.target.files[0] },
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
                          Source
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="manufacturer-brand-input"
                          placeholder="Enter source"
                          value={article.source}
                          onChange={(e) => {
                            setArticle({
                              ...article,
                              ...{ source: e.target.value },
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
                          Recommends
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="manufacturer-brand-input"
                          placeholder="Enter recommends"
                          value={article.recommends}
                          onChange={(e) => {
                            setArticle({
                              ...article,
                              ...{ recommends: e.target.value },
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
                          Oppositions
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="manufacturer-brand-input"
                          placeholder="Enter oppositions"
                          value={article.oppositions}
                          onChange={(e) => {
                            setArticle({
                              ...article,
                              ...{ oppositions: e.target.value },
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
                          Browsing Count
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="manufacturer-brand-input"
                          placeholder="Enter browingcount"
                          value={article.browingcount}
                          onChange={(e) => {
                            setArticle({
                              ...article,
                              ...{ browingcount: e.target.value },
                            });
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
                          Article Category
                        </Label>
                        <Select
                          value={articleCategory}                          
                          onChange={(e) => {
                            setArticleCategory(e);
                            setArticle({
                              ...article,
                              ...{ articleCategoryId: e.id },
                            });
                            console.log("Set Article", articleCategories, e.id );
                          }}
                          options={articleCategories}
                          name="choices-publish-visibility-input"
                          classNamePrefix="select2-selection form-select"
                        />
                        {/* <Select
                          value={homeImageMedia}
                          onChange={(e) => {
                            setHomeImageMedia(e);
                          }}
                          options={mediaSelects}
                        /> */}
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
              <div className="text-end mb-3">
                <button
                  type="submit"
                  className="btn btn-success w-sm"
                  onClick={(e) => {
                    e.preventDefault();
                    const formData = new FormData();
                    formData.append("name", article.name);
                    formData.append("description", article.description);
                    formData.append("contact_number", article.contact_number);
                    formData.append("articleCategoryId", article.articleCategoryId);
                    formData.append("attach_url", article.attach_url);
                    formData.append("recommends", article.recommends);
                    formData.append("source", article.source);
                    formData.append("oppositions", article.oppositions);
                    formData.append("browingcount", article.browingcount);
                    if (id) {
                      updateOneArticle(id, article).then((res) => {
                        console.log(res);
                      });
                    } else {
                      addNewArticle(article).then((res) => {
                        console.log(res);
                      });
                    }
                  }}
                >
                  {id ? "Update Article" : "Add Article"}
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddArticle;
