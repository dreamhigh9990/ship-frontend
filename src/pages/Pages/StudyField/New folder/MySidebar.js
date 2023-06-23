import React, { useState } from 'react';
import classnames from "classnames";
import { Button, Label, Card, CardBody, Col, Input, Nav, NavItem, NavLink, Row, TabContent, TabPane, Table, CardHeader } from "reactstrap";
import { FormGrid, Gutters, VerticalForm, HorizontalForm, HorizontalFormLabelSizing, ColumnSizing, AutoSizing, InlineForms, FloatingLabels } from '../../Forms/FormLayouts/FormlayoutsCode';
import { BaseExample, CardTableExample, PaginationExample, SearchExample, SortingExample, LoadingStateExample, FixedHeaderExample, HiddenColumnsExample } from '../../Tables/GridTables/GridTablesData';

import Flatpickr from "react-flatpickr";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const MySidebar = ({ toggleVertical, verticalTab }) => {
    // Vertical Nav Tabs
    return (
        <React.Fragment>
            <Nav pills className="flex-column" id="v-pills-tab">
                <NavItem>
                    <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                            "mb-2": true,
                            "text-center": true,
                            active: verticalTab === "1",
                        })}
                        onClick={() => {
                            toggleVertical("1");
                        }}
                        id="v-pills-myinformation-tab"
                    >
                        My Information
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                            "mb-2": true,
                            "text-center": true,
                            active: verticalTab === "2",
                        })}
                        onClick={() => {
                            toggleVertical("2");
                        }}
                        id="v-pills-browserhistory-tab"
                    >
                        Browser History
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                            "mb-2": true,
                            "text-center": true,
                            active: verticalTab === "3",
                        })}
                        onClick={() => {
                            toggleVertical("3");
                        }}
                        id="v-pills-testhistory-tab"
                    >
                        Test History
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                            "mb-2": true,
                            active: verticalTab === "4",
                            "text-center": true,
                        })}
                        onClick={() => {
                            toggleVertical("4");
                        }}
                        id="v-pills-purchasehistory-tab"
                    >
                        Purchase History
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                            "mb-2": true,
                            active: verticalTab === "5",
                            "text-center": true,
                        })}
                        onClick={() => {
                            toggleVertical("5");
                        }}
                        id="v-pills-scorehistory-tab"
                    >

                        Score Management
                    </NavLink>z
                </NavItem>
                <NavItem>
                    <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                            "mb-2": true,
                            active: verticalTab === "6",
                            "text-center": true,
                        })}
                        onClick={() => {
                            toggleVertical("6");
                        }}
                        id="v-pills-imgpurchase-tab"
                    >
                        Image Icon Purchase
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                            "mb-2": true,
                            active: verticalTab === "7",
                            "text-center": true,
                        })}
                        onClick={() => {
                            toggleVertical("7");
                        }}
                        id="v-pills-opinion-tab"
                    >
                        Opinion Box
                    </NavLink>
                </NavItem>
            </Nav>
        </React.Fragment>
    );
};

export default MySidebar;