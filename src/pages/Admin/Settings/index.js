import React, { useEffect, useState, useMemo } from "react";

import {
  Container,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  TabContent,
  TabPane,
  Row,
  Col,
  Label,
  Button,
} from "reactstrap";
import Select from "react-select";

// RangeSlider
import "nouislider/distribute/nouislider.css";
import DeleteModal from "../../../Components/Common/DeleteModal";

import BreadCrumb from "../../../Components/Common/BreadCrumb";
import TableContainer from "../../../Components/Common/TableContainer";


//redux
import { Link } from "react-router-dom";

import { getMedias, deleteMedia, downloadMedia } from "../../../helpers/fakebackend_helper";
import { getSettingByTitle, updateOneSettingByTitle } from "../../../helpers/fakebackend_helper";

const Medias = (props) => {
  const [mediaList, setMediaList] = useState([]);
  const [homeImages, setHomeImages] = useState([]);
  const [mediaSelects, setMediaSelects] = useState([]);
  const [homeImageMedia, setHomeImageMedia] = useState({});
  const [homeImageTitle, setHomeImageTitle] = useState("");
  const [homeImageDescription, setHomeImageDescription] = useState("");

  const [dataImage, setDataImage] = useState({});
  const [questionImage, setQuestionImage] = useState({});
  const [softwareImage, setSoftwareImage] = useState({});
  const [studyImage, setStudyImage] = useState({});
  const [mypageImage, setMypageImage] = useState({});
  const [testImage, setTestImage] = useState({});

  useEffect(() => {
    getMediaList();
  }, []);

  const getMediaList = () => {
    getMedias().then(res => {
      console.log("Media list", res);
      setMediaSelects(res.map(e => {
        return { value: e.id, label: e.title }
      }))
      setMediaList(res);

      getSettingByTitle('homeImages').then(item => {
        setHomeImages(JSON.parse(item.value));
      })

      getSettingByTitle('dataImage').then(item => {
        setDataImage({ label: "", value: item.value });
      })

      getSettingByTitle('softwareImage').then(item => {
        setSoftwareImage({ label: "", value: item.value });
      })

      getSettingByTitle('questionImage').then(item => {
        setQuestionImage({ label: "", value: item.value });
      })

      getSettingByTitle('studyImage').then(item => {
        setStudyImage({ label: "", value: item.value });
      })

      getSettingByTitle('mypageImage').then(item => {
        setMypageImage({ label: "", value: item.value });
      })

      getSettingByTitle('testImage').then(item => {
        setTestImage({ label: "", value: item.value });
      })
    })
  }

  document.title = "Settings";
  return (
    <div className="page-content">

      <Container fluid>
        <BreadCrumb title="Settings" pageTitle="Admin" />

        <Row>
          <div className="col-xl-12 col-lg-12">
            <div>
              <div className="card">
                <div className="card-header border-0">
                  <div className="row g-4">
                    <div className="col-sm-auto">
                      <div>
                        <Link
                          to="#"
                          className="btn btn-success"
                          onClick={e => {
                            updateOneSettingByTitle('homeImages', { value: JSON.stringify(homeImages) }).then(res => {

                            });
                            updateOneSettingByTitle('dataImage', { value: dataImage.value }).then(res => {
                            });
                            updateOneSettingByTitle('questionImage', { value: questionImage.value }).then(res => {
                            });
                            updateOneSettingByTitle('softwareImage', { value: softwareImage.value }).then(res => {
                            });
                            updateOneSettingByTitle('studyImage', { value: studyImage.value }).then(res => {
                            });
                            updateOneSettingByTitle('mypageImage', { value: mypageImage.value }).then(res => {
                            });
                            updateOneSettingByTitle('testImage', { value: testImage.value }).then(res => {
                            });
                          }}
                        >
                          <i className="ri-add-line align-bottom me-1"></i> Save
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <Row>
                    <div className="card">
                      <div className="card-header border-0">
                        Home Images
                      </div>

                      <div className="card-body">
                        <div>
                          <Row>
                            <Col xl={3}>
                              <div className="mb-3">
                                <Label htmlFor="choices-single-default" className="form-label text-muted">Image</Label>
                                <Select
                                  value={homeImageMedia}
                                  onChange={(e) => {
                                    setHomeImageMedia(e);
                                  }}
                                  options={mediaSelects}
                                />
                              </div>

                            </Col>

                            <Col xl={3}>
                              <div className="mb-3">
                                <label
                                  className="form-label"
                                  htmlFor="manufacturer-brand-input"
                                >
                                  Title
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="manufacturer-brand-input"
                                  placeholder="Enter description"
                                  value={homeImageTitle}
                                  onChange={e => {
                                    setHomeImageTitle(e.target.value);
                                  }}
                                />
                              </div>

                            </Col>

                            <Col xl={3}>
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
                                  value={homeImageDescription}
                                  onChange={e => {
                                    setHomeImageDescription(e.target.value);
                                  }}
                                />
                              </div>
                            </Col>
                            <Col xl={3}>
                              <button type="button" className="btn btn-success w-sm" onClick={e => {
                                e.preventDefault();
                                if (!homeImages.filter(item => item.media === homeImageMedia.value).length)
                                  setHomeImages([...homeImages, ...[{ media: homeImageMedia.value, title: homeImageTitle, description: homeImageDescription }]])
                              }}>
                                Add
                              </button>
                            </Col>
                          </Row>
                        </div>

                        {
                          homeImages.map((e, key) => {
                            return <Row key={key}>
                              <Col>
                                <div className="d-flex">

                                  <img
                                    src={downloadMedia(e.media)}
                                    // {media.row.file_url}
                                    // src={downloadMedia}
                                    alt=""
                                    className="img-fluid d-block"
                                    style={{ width: '100px' }}
                                  />
                                  <h3>
                                    {e.title}
                                  </h3>
                                  <h5>
                                    {e.description}
                                  </h5>

                                  <Button color="primary" className="btn-icon" onClick={() => {
                                    console.log(e);
                                    setHomeImages(homeImages.filter(item => item.media !== e.media))
                                  }}>
                                    <i className=" ri-close-circle-line" />
                                  </Button>
                                </div>
                              </Col>
                            </Row>
                          }

                          )
                        }
                        <Row>

                        </Row>
                      </div>
                    </div>
                  </Row>
                  <Row>
                    <div className="card">
                      <div className="card-header border-0">
                        Data Image
                      </div>

                      <div className="card-body">
                        <Row>
                          <Col xl={3}>
                            <Label htmlFor="choices-single-default" className="form-label text-muted">Image</Label>
                            <Select
                              value={dataImage}
                              onChange={(e) => {
                                setDataImage(e);
                              }}
                              options={mediaSelects}
                            />
                          </Col>
                          <Col xl={3}>
                            <img
                              src={downloadMedia(dataImage.value)}
                              // {media.row.file_url}
                              // src={downloadMedia}
                              alt=""
                              className="img-fluid d-block"
                              style={{ width: '100px' }}
                            />
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Row>
                  <Row>
                    <div className="card">
                      <div className="card-header border-0">
                        Question Image
                      </div>

                      <div className="card-body">
                        <Row>
                          <Col xl={3}>
                            <Label htmlFor="choices-single-default" className="form-label text-muted">Image</Label>
                            <Select
                              value={questionImage}
                              onChange={(e) => {
                                setQuestionImage(e);
                              }}
                              options={mediaSelects}
                            />
                          </Col>
                          <Col xl={3}>
                            <img
                              src={downloadMedia(questionImage.value)}
                              // {media.row.file_url}
                              // src={downloadMedia}
                              alt=""
                              className="img-fluid d-block"
                              style={{ width: '100px' }}
                            />
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Row>
                  <Row>
                    <div className="card">
                      <div className="card-header border-0">
                        Software Image
                      </div>

                      <div className="card-body">
                        <Row>
                          <Col xl={3}>
                            <Label htmlFor="choices-single-default" className="form-label text-muted">Image</Label>
                            <Select
                              value={softwareImage}
                              onChange={(e) => {
                                setSoftwareImage(e);
                              }}
                              options={mediaSelects}
                            />
                          </Col>
                          <Col xl={3}>
                            <img
                              src={downloadMedia(softwareImage.value)}
                              // {media.row.file_url}
                              // src={downloadMedia}
                              alt=""
                              className="img-fluid d-block"
                              style={{ width: '100px' }}
                            />
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Row>
                  <Row>
                    <div className="card">
                      <div className="card-header border-0">
                        Study Image
                      </div>

                      <div className="card-body">
                        <Row>
                          <Col xl={3}>
                            <Label htmlFor="choices-single-default" className="form-label text-muted">Image</Label>
                            <Select
                              value={studyImage}
                              onChange={(e) => {
                                setStudyImage(e);
                              }}
                              options={mediaSelects}
                            />
                          </Col>
                          <Col xl={3}>
                            <img
                              src={downloadMedia(studyImage.value)}
                              // {media.row.file_url}
                              // src={downloadMedia}
                              alt=""
                              className="img-fluid d-block"
                              style={{ width: '100px' }}
                            />
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Row>

                  <Row>
                    <div className="card">
                      <div className="card-header border-0">
                        Test Image
                      </div>

                      <div className="card-body">
                        <Row>
                          <Col xl={3}>
                            <Label htmlFor="choices-single-default" className="form-label text-muted">Image</Label>
                            <Select
                              value={testImage}
                              onChange={(e) => {
                                setTestImage(e);
                              }}
                              options={mediaSelects}
                            />
                          </Col>
                          <Col xl={3}>
                            <img
                              src={downloadMedia(testImage.value)}
                              // {media.row.file_url}
                              // src={downloadMedia}
                              alt=""
                              className="img-fluid d-block"
                              style={{ width: '100px' }}
                            />
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Row>


                  <Row>
                    <div className="card">
                      <div className="card-header border-0">
                        My Page Image
                      </div>

                      <div className="card-body">
                        <Row>
                          <Col xl={3}>
                            <Label htmlFor="choices-single-default" className="form-label text-muted">Image</Label>
                            <Select
                              value={mypageImage}
                              onChange={(e) => {
                                setMypageImage(e);
                              }}
                              options={mediaSelects}
                            />
                          </Col>
                          <Col xl={3}>
                            <img
                              src={downloadMedia(mypageImage.value)}
                              // {media.row.file_url}
                              // src={downloadMedia}
                              alt=""
                              className="img-fluid d-block"
                              style={{ width: '100px' }}
                            />
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Medias;
