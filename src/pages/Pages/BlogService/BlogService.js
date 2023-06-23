import React, { useState, useEffect } from "react";
import {
  Col,
  Container,
  Row,
  Card,
  CardBody,
  TabContent,
  Nav,
  NavItem,
  NavLink,
  CardHeader,
  TabPane,
  Button,
  Modal,
  ModalHeader,
  Label,
  Input,
  Form,
} from "reactstrap";
import { useHistory  } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { columnsBlogData, BlogDataList } from "./TestBlogData";
import { useMemo } from "react";
import TableContainer from "../../../Components/Common/TableContainer";
import classnames from "classnames";
import {
  getTrendingArticles,
  getArticleCategories,
  getArticleFindTopUser,
  downloadAvatar,
  getRecentArticles,
} from "../../../helpers/fakebackend_helper";
import { addNewArticle } from "../../../helpers/fakebackend_helper";
import avatar1 from "../../../assets/images/users/avatar-1.jpg";
import { Link } from "react-router-dom";
import Select from "react-select";
import { useQuill } from "react-quilljs";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "quill/dist/quill.snow.css";

const BlogService = () => {
  const { quillRef } = useQuill();
  document.title = "Blog Service";
  const columnsBlog = useMemo(() => columnsBlogData, []);
  const [articles, setArticles] = useState([]);
  const [articleCategories, setArticleCategories] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [articleTopwriters, setarticleTopwriters] = useState([]);
  const [BlogDataPublisedFilter, setBlogDataPublisedFilter] = useState([]);
  const [BlogDataDraftFilter, setBlogDataDraftFilter] = useState([]);
  const [activeTab, setActiveTab] = useState("1");
  const [articleCategory, setArticleCategory] = useState({});
  const [articleUser, setArticleUser] = useState([]);
  const article = {
    name: "",
    description: "",
    contact_number: "",
    articleCategoryId: "",
    attach_url: "",
    recommends: "",
    source: "",
    oppositions: "",
    browingcount: "",
  };
  const history = useHistory();
  const myInformationSelector = useSelector(state => state.Profile.myinformation);

  const toggleTab = (tab, type) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const getAgoString = (difference) => {
    let dayDifference = Math.ceil(difference / (1000 * 60 * 60 * 24));
    let hourDifference = Math.ceil(difference / (1000 * 60 * 60 * 24));
    let minDifference = Math.ceil(difference / (1000 * 60 * 60 * 24));
    if (dayDifference > 0) {
      return dayDifference + (dayDifference === 1 ? " day ago" : " days ago");
    }
    if (hourDifference > 0) {
      return hourDifference + " hours ago";
    }
    return minDifference + " mins ago";
  };

  useEffect(() => {
    getArticles();

    getArticleFindTopUser().then((topWriter) => {
      setarticleTopwriters(topWriter);
    });
  }, []);

  useEffect(() => {
    getArticles();
  }, [activeTab]);

  const getArticles = () => {
    if (activeTab == "1") { // Trending Tab Selected
      getTrendingArticles().then((articles) => {
        refreshArtcles(articles);
      });
    } else { // Date Tab Selected
      getRecentArticles().then((articles) => {
        refreshArtcles(articles);
      });
    }
  }

  const refreshArtcles = (articles) => {
    let today = new Date();
    for (const article of articles) {
      let createdDate = new Date(article.createdAt);
      let difference = Math.abs(today - createdDate);
      article.ago = getAgoString(difference);
    }
    setArticles(articles);
  }

  useEffect(() => {
    getArticleCategories().then((categories) => {
      for (const category of categories) {
        category.label = category.title;
        category.value = category.id;
      }
      setCategoryList(categories);
      console.log("categoryList", categories);
    });
  }, []);

  const [modal_large, setmodal_large] = useState(false);
  function tog_large() {
    setmodal_large(!modal_large);
  }
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Blog Service" />
          <Row>
            <Col xl={9} lg={8}>
              <Card>
                <CardHeader className="d-flex justify-content-between">
                  <Nav
                    className="nav-tabs-custom card-header-tabs border-bottom-0"
                    role="tablist"
                  >
                    <NavItem>
                      <NavLink
                        role="button"
                        className={classnames(
                          { active: activeTab === "1" },
                          activeTab == "2" ? "cursor-pointer" : "",
                          "fw-semibold"
                        )}
                        onClick={() => {
                          toggleTab("1", "trending");
                        }}
                      >
                        Trending &nbsp;
                        {/* <span className="badge badge-soft-danger align-middle rounded-pill ms-1">
                          {articles.length}
                        </span> */}
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        role="button"
                        className={classnames(
                          { active: activeTab === "2" },
                          activeTab == "1" ? "cursor-pointer" : "",
                          "fw-semibold"
                        )}
                        onClick={() => {
                          toggleTab("2", "date");
                        }}
                      >
                        Date &nbsp;
                        {/* <span className="badge badge-soft-danger align-middle rounded-pill ms-1">
                          {articles.length}
                        </span> */}
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <Button
                    color="primary"
                    className="new-article-add-btn"
                    onClick={() => {
                      if (!myInformationSelector) {
                        history.push('/login');
                      } else {
                        tog_large();
                      }
                    }}
                  >
                    New Article Add
                  </Button>
                </CardHeader>
                <CardBody>
                  <TabContent className="text-muted blog-table-content">
                    <TabPane>
                      <div
                        id="table-product-list-all"
                        className="table-card gridjs-border-none pb-2"
                      >
                        <TableContainer
                          columns={columnsBlog}
                          data={articles}
                          isGlobalFilter={false}
                          isGlobalSearch={true}
                          isAddUserList={false}
                          customPageSize={10}
                          divClass="table-responsive mb-1"
                          tableClass="mb-0 table-borderless"
                          theadClass="table-light text-muted"
                        />
                      </div>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
            <Col xl={3} lg={4}>
              <Row>
                <Card>
                  <CardBody>
                    <h4 className="mb-sm-0">Related Topics</h4>
                    <div className="realted-topic d-flex flex-wrap">
                      {categoryList.map((oneCategory, key) => (
                        <React.Fragment key={key}>
                          <Link
                            className="rounded-pill btn btn-light tags me-4"
                            to={
                              "/pages-blog-service/article-kind/" +
                              oneCategory.id
                            }
                          >
                            {oneCategory.title}
                          </Link>
                        </React.Fragment>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              </Row>
              <Row>
                <Card className="my-5 pb-4">
                  <CardBody>
                    <h4 className="mb-sm-0" style={{ display: "inline-block" }}>
                      Top Writers
                    </h4>
                    <div className="top-writers d-flex align-items-center pt-4">
                      <div className="d-flex me-2">
                        <div className="pb-3">
                          {articleTopwriters.map((oneWriter) => (
                            <li key={oneWriter.id}>
                              <React.Fragment>
                                <img
                                  style={{
                                    width: "30px",
                                    height: "30px",
                                    borderRadius: "50%",
                                  }}
                                  alt="Img"
                                  src={downloadAvatar(
                                    oneWriter.currentAvatarId
                                  )}
                                />
                                <Link
                                  className="rounded-pill btn btn-light tags me-4 mb-3"
                                  to={
                                    "/pages-blog-service/article-man/" +
                                    oneWriter.id
                                  }
                                >
                                  {oneWriter.username}
                                </Link>
                              </React.Fragment>
                            </li>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Large Modal */}
      <Modal
        size="lg"
        isOpen={modal_large}
        toggle={() => {
          tog_large();
        }}
      >
        <ModalHeader>
          New Article Add
          <Button
            onClick={() => {
              setmodal_large(false);
            }}
            type="button"
            className="btn-close"
            aria-label="Close"
          ></Button>
        </ModalHeader>
        <div className="modal-body">
          <div className="mb-3">
            <Label htmlFor="id-field-sort" className="form-label">
              Sort
            </Label>
            {/* <Select name="sort" id="id-field-sort" options={sort}>
                        </Select> */}
            <Select
              onChange={(e) => {
                article.articleCategoryId = e.id;
              }}
              options={categoryList}
              name="choices-publish-visibility-input"
              classNamePrefix="select2-selection form-select"
            />
          </div>
          <div className="mb-3">
            <Label htmlFor="id-field-title" className="form-label">
              Title
            </Label>
            <Input
              name="title"
              id="id-field"
              className="form-control"
              placeholder="Enter Article Title"
              type="text"
              onChange={(e) => {
                article.name = e.target.value;
              }}
            />
          </div>
          <div className="mb-3">
            <Label>Article Content</Label>
            <Form method="post">
              <CKEditor
                editor={ClassicEditor}
                data=""
                onChange={(event, editor) => {
                  const data = editor.getData();
                  article.description = data;
                }}
              />
            </Form>
          </div>
          <div className="mb-3 d-flex justify-content-between align-items-center">
            <div className="d-flex">
              <span className="pe-3">Contact Information</span>
              <Input
                name="contactinfo"
                id="id-field-contactinfo"
                className="form-control"
                placeholder="129122312"
                type="text"
                onChange={(e) => {
                  article.contact_number = e.target.value;
                }}
              />
            </div>
            <div>
              <span className="pe-3">Attach File</span>
              <input
                className="form-control"
                id="product-image-input"
                type="file"
                accept="image/png, image/gif, image/jpeg"
                onChange={(e) => {
                  article.attach_url = e.target.files[0];
                }}
              />
            </div>
          </div>
          <div className="mb-3 d-flex align-items-center">
            <span className="pe-3">Source</span>
            <Input
              name="source"
              id="id-field-source"
              className="form-control"
              placeholder="Title Book"
              type="text"
              onChange={(e) => {
                article.source = e.target.value;
              }}
            />
          </div>
          <div className="pt-2 d-flex justify-content-between align-items-center">
            <Button
              color="primary"
              data-bs-toggle="button"
              aria-pressed="false"
              className="me-2"
              style={{}}
            >
              Grammar Checking
            </Button>
            <Button
              type="submit"
              color="primary"
              data-bs-toggle="button"
              aria-pressed="false"
              onClick={(e) => {
                e.preventDefault();
                article.userId = myInformationSelector.id;
                addNewArticle(article).then((res) => {
                  tog_large();
                });
              }}
            >
              Add
            </Button>

            {/* <button
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
                </button> */}
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default BlogService;
