import React, { useEffect, useState, useMemo } from "react";
import {  Container,  UncontrolledDropdown,  DropdownToggle,  DropdownItem,  DropdownMenu,  TabContent,  TabPane,  Row,} from "reactstrap";

// RangeSlider
import "nouislider/distribute/nouislider.css";
import DeleteModal from "../../../Components/Common/DeleteModal";

import BreadCrumb from "../../../Components/Common/BreadCrumb";
import TableContainer from "../../../Components/Common/TableContainer";

//redux
import { Link } from "react-router-dom";
import { getArticles, deleteArticle } from "../../../helpers/fakebackend_helper";

const Articles = (props) => {
  const [articleList, setArticleList] = useState([]);
  useEffect(() => {
    getArticleList();
  }, []);

  const getArticleList = () => {
    getArticles().then(articles => {
      console.log("article",articles);
      setArticleList(articles);
    })
  };

  // useEffect(() => {
  //   if (articles && !articles.length) {
  //     dispatch(onGetArticles());
  //   }
  // }, [dispatch, articles]);

  // useEffect(() => {
  //   setArticleList(articles);
  // }, [articles]);

  // useEffect(() => {
  //   dispatch(onGetArticles());
  // }, [dispatch]);

  // useEffect(() => {
  //   if (!isEmpty(articles)) setArticleList(articles);
  // }, [articles]);

  //delete order
  const [deleteModal, setDeleteModal] = useState(false);
  const [currentID, setCurrentID] = useState(false);

  const onClickDelete = (article) => {
    setCurrentID(article.id);
    // setArticle(article);
    setDeleteModal(true);
  };

  const handleDeleteArticle = () => {
    if (currentID) {
      deleteArticle(currentID).then(res => {
        if (res === 1) {
          getArticleList();
          setDeleteModal(false);
        } else {
          setDeleteModal(false);
        }
      })
    }
  };

  const columns = useMemo(
    () => [
      {
        Header: "#",
        Cell: () => {
          return <input type="checkbox" />;
        },
      },
      {
        Header: "Name",
        accessor: "name",
        filterable: false,
      },
      {
        Header: "Description",
        accessor: "description",
        filterable: false,
      },
      {
        Header: "Contact_number",
        accessor: "contact_number",
        filterable: false,
      },
      {
        Header: "Date",
        accessor: "createdAt",
        filterable: false,
      },
      {
        Header: "Source",
        accessor: "source",
        filterable: false,
      },
      {
        Header: "Recommends",
        accessor: "recommends",
        filterable: false,
      },
      {
        Header: "Attach_url",
        accessor: "attach_url",
        filterable: false,
      },
      {
        Header: "Oppositions",
        accessor: "oppositions",
        filterable: false,
      },
      {
        Header: "Browingcount",
        accessor: "browingcount",
        filterable: false,
      },
      {
        Header: "ArticleCatetoryId",
        accessor: "articleCategoryId",
        filterable: false,
      },
      {
        Header: "Action",
        Cell: (cellProps) => {
          return (
            <UncontrolledDropdown>
              <DropdownToggle
                href="#"
                className="btn-soft-secondary btn-sm"
                tag="button"
              >
                <i className="ri-more-fill" />
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-end">
                <DropdownItem href={"admin-article-details/" + cellProps.row.original.id}>
                  <i className="ri-eye-fill align-bottom me-2 text-muted"></i>{" "}
                  View
                </DropdownItem>

                <DropdownItem href={"admin-add-article/" + cellProps.row.original.id}>
                  <i className="ri-pencil-fill align-bottom me-2 text-muted"></i>{" "}
                  Edit
                </DropdownItem>

                <DropdownItem divider />
                <DropdownItem
                  href="#"
                  onClick={() => {
                    const articleData = cellProps.row.original;
                    onClickDelete(articleData);
                  }}
                >
                  <i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i>{" "}
                  Delete
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          );
        },
      },
    ],
    []
  );
  document.title = "Articles";
  return (
    <div className="page-content" style={{overflow:"hidden"}}>
      <DeleteModal
        show={deleteModal}
        onDeleteClick={handleDeleteArticle}
        onCloseClick={() => setDeleteModal(false)}
      />

      <Container fluid>
        <BreadCrumb title="Articles" pageTitle="Admin" />

        <Row>
          <div className="col-xl-12 col-lg-12">
            <div>
              <div className="card">
                <div className="card-header border-0">
                  <div className="row g-4">
                    <div className="col-sm-auto">
                      <div>
                        <Link
                          to="/admin-add-article"
                          className="btn btn-success"
                        >
                          <i className="ri-add-line align-bottom me-1"></i> Add
                          Article
                        </Link>
                      </div>
                    </div>
                    <div className="col-sm">
                      <div className="d-flex justify-content-sm-end">
                        <div className="search-box ms-2">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search Articles..."
                          />
                          <i className="ri-search-line search-icon"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-body">
                  <TabContent className="text-muted">
                    <TabPane>
                      <div
                        id="table-product-list-all"
                        className="table-card gridjs-border-none pb-2"
                      >
                        {articleList && articleList !== "" ? (
                          <TableContainer
                            columns={columns}
                            data={articleList}
                            isGlobalFilter={false}
                            isAddArticleList={false}
                            customPageSize={10}
                            divClass="table-responsive mb-1"
                            tableClass="mb-0 table-borderless"
                            theadClass="table-light text-muted"
                          />
                        ) : (
                          <div className="py-4 text-center">
                            <div>
                              <lord-icon
                                src="https://cdn.lordicon.com/msoeawqm.json"
                                trigger="loop"
                                colors="primary:#405189,secondary:#0ab39c"
                                style={{ width: "72px", height: "72px" }}
                              ></lord-icon>
                            </div>

                            <div className="mt-4">
                              <h5>Sorry! No Result Found</h5>
                            </div>
                          </div>
                        )}
                      </div>
                    </TabPane>
                  </TabContent>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Articles;
