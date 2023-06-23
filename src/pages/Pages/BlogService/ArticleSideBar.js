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
import {
  getArticleCategories,
  getArticleFindTopUser,
  downloadAvatar
} from "../../../helpers/fakebackend_helper";
import avatar1 from "../../../assets/images/users/avatar-1.jpg";
import { Link } from "react-router-dom";
import "quill/dist/quill.snow.css";

const ArticleSideBar = () => {
  document.title = "Blog Service";
  const [articleCategories, setArticleCategories] = useState([]);
  const [articleTopwriters, setArticleTopWriters] = useState([]);

  useEffect(() => {
    getArticleCategories().then((categories) => {
      setArticleCategories(categories);
    });
    getArticleFindTopUser().then((topUser) => {
      setArticleTopWriters(topUser);
    });
  }, []);

  const [modal_large, setmodal_large] = useState(false);
  function tog_large() {
    setmodal_large(!modal_large);
  }

  return (
    <React.Fragment>
      <Card>
        <CardBody>
          <h4 className="mb-sm-0">Related Topics</h4>
          <div className="realted-topic d-flex flex-wrap">
            {articleCategories.map((articleCategory, key) => (
              <React.Fragment key={articleCategory.id}>
                <Link
                  className="rounded-pill btn btn-light tags me-4"
                  to={"/pages-blog-service/article-kind/" + articleCategory.id}
                >
                  {articleCategory.title}
                </Link>
              </React.Fragment>
            ))}
          </div>
        </CardBody>
      </Card>
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
    </React.Fragment>
  );
};

export default ArticleSideBar;
