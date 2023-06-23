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
} from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { columnsBlogData, BlogDataList } from "./TestBlogData";
import { useMemo } from "react";
import TableContainer from "../../../Components/Common/TableContainer";
import classnames from "classnames";
import { useSelector } from "react-redux";

import avatar1 from "../../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../../assets/images/users/avatar-3.jpg";
import { size } from "lodash";
import ArticleSideBar from "./ArticleSideBar";
import {
  getArticleFindTopUser,
  getArticleByUsername,
  getUser,
  getArticleByuserId,
} from "../../../helpers/fakebackend_helper";
import { Link, useParams } from "react-router-dom";

const ArticleMan = () => {
  document.title = "Blog Service";
  const columnsBlog = useMemo(() => columnsBlogData, []);

  const [BlogDataListFilter, setBlogDataList] = useState(BlogDataList);
  const [BlogDataPublisedFilter, setBlogDataPublisedFilter] = useState([]);
  const [BlogDataDraftFilter, setBlogDataDraftFilter] = useState([]);
  const [articleUser, setArticleUser] = useState([]);
  const [oneUser, setOneUser] = useState({});
  const [articles, setArticles] = useState([]);
  const [activeTab, setActiveTab] = useState("1");

  let { id } = useParams();

  const toggleTab = (tab, type) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
      let filteredBlogs = BlogDataList;
      if (type !== "trending") {
        filteredBlogs.map((product) => console.log(product));
        filteredBlogs = BlogDataList.filter((product) => product.type == type);
      }
      if (type === "date") {
        setBlogDataPublisedFilter(filteredBlogs);
        setBlogDataList(filteredBlogs);
      }
      if (type === "trending") {
        setBlogDataList(filteredBlogs);
      }
      if (type === "draft") {
        setBlogDataDraftFilter(BlogDataDraftFilter);
        setBlogDataList(filteredBlogs);
      }
      // setBlogDataList(filteredBlogs);
    }
  };

  useEffect(() => {
    setBlogDataList(BlogDataListFilter);
  }, [BlogDataListFilter]);

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
    if (id) {
      getUser(id).then((oneUser) => {
        setOneUser(oneUser);
      });

      getArticleByuserId(id).then((articleList) => {
        let today = new Date();
        for (const article of articleList) {
          let createdDate = new Date(article.createdAt);
          let difference = Math.abs(today - createdDate);
          article.ago = getAgoString(difference);
        }
        setArticles(articleList);
      });
    }
  }, [id]);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Blog Service" />
          <Row>
            <Col xl={9} lg={8}>
              <Card>
                <CardHeader className="text-center d-flex justify-content-center align-items-center">
                  <img
                    src={avatar1}
                    style={{
                      width: "40px",
                      height: "auto",
                      borderRadius: "50%",
                    }}
                    alt=""
                    className="me-3"
                  />
                  <h4>
                    {oneUser.username}
                    <span>'s Article</span>
                  </h4>
                </CardHeader>
                <CardBody className="">
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
              <ArticleSideBar />
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default ArticleMan;
