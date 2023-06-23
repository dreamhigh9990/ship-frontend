import React, { useState, useEffect } from "react";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import { Card, CardBody, Col, Container, CardHeader, Nav, NavItem, NavLink, Row, TabContent, TabPane, Input, Label, Button, Modal, ModalHeader } from "reactstrap";

import { addNewShipData, getShipData, updateOneData, updateShipData } from "../../../../helpers/fakebackend_helper";
import ShipDataVote from './ShipDataVote';
import LoadDataVote from './LoadDataVote'
import ProductDataVote from './ProductDataVote'
import GoodDataVote from './GoodDataVote'

// Import React FilePond
import { registerPlugin } from "react-filepond";
import Flatpickr from "react-flatpickr";
import Select from "react-select";
// Import FilePond styles
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const NewDataVote = (props) => {
  
  const [category, setCategory] = useState({ label: "About Ship", value: "about_ship" });

  // Modal
  const [modal_togFirst, setmodal_togFirst] = useState(false);
  function tog_togFirst() {
    setmodal_togFirst(!modal_togFirst);
  }

  const [modal_togSecond, setmodal_togSecond] = useState(false);
  function tog_togSecond() {
    setmodal_togSecond(!modal_togSecond);
  }


  // Border Top Nav Justified Tabs
  const [topBorderjustifyTab, settopBorderjustifyTab] = useState("1");
  const topBorderJustifytoggle = (tab) => {
    if (topBorderjustifyTab !== tab) {
      settopBorderjustifyTab(tab);
    }
  };

  const [customActiveTab, setcustomActiveTab] = useState("1");
  const toggleCustom = (tab) => {
    if (customActiveTab !== tab) {
      setcustomActiveTab(tab);
    }
  };
 
  // Formats the size
  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  const dataCategoryId = [
    {
      options: [
        { label: "About Ship", value: "about_ship" },
        { label: "Load Data", value: "load_data" },
        { label: "Product Data", value: "product_data" },
        { label: "Good Data", value: "good_data" },
      ],
    },
  ];

  const sortShipOption = [
    {
      options: [
        { label: "Ship1", value: "ship1" },
        { label: "Ship2", value: "ship2" },
        { label: "Ship3", value: "ship3" },
        { label: "Ship4", value: "ship4" },
      ],
    },
  ];

  document.title = "New Data Vote";

  return (

    <div className="page-content">

      <Container>
        <BreadCrumb title="Create Product" pageTitle="Ecommerce" />
        <Card>
          <CardBody>
            <form className="px-5">
              <div style={{ width: '30%' }}>
                <Row>
                  <Col sm={4}>
                    <Label
                      htmlFor="choices-publish-visibility-input"
                      className="form-label pt-2"
                    >
                      Sort
                    </Label>
                  </Col>
                  <Col sm={8}>
                    <Select
                      name="choices-publish-visibility-input"
                      classNamePrefix="select2-selection form-select"
                      value={category}
                      onChange={(e) => {
                        setCategory(e);
                      }}
                      options={dataCategoryId}
                    />
                  </Col>
                </Row>
              </div>

              {
                category.value === 'about_ship' &&
                <ShipDataVote />
              }

              {
                category.value === 'load_data' &&
                <LoadDataVote />
              }

              {
                category.value === 'product_data' &&
                <ProductDataVote />
              }

              {
                category.value === 'good_data' &&
                <GoodDataVote />
              }
            </form>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};

export default NewDataVote;
