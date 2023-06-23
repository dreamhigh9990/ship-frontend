import React, { useState } from 'react';
import classnames from "classnames";
import { Button, Label, Card, CardBody, Col, Input, Nav, NavItem, NavLink, Row, TabContent, TabPane, Table, CardHeader,  } from "reactstrap";
import { FormGrid, Gutters, VerticalForm, HorizontalForm, HorizontalFormLabelSizing, ColumnSizing, AutoSizing, InlineForms, FloatingLabels } from '../../Forms/FormLayouts/FormlayoutsCode';
import { BaseExample, CardTableExample, PaginationExample, SearchExample, SortingExample, LoadingStateExample, FixedHeaderExample, HiddenColumnsExample } from '../../Tables/GridTables/GridTablesData';

import Flatpickr from "react-flatpickr";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthenticatedUser } from '../../../helpers/fakebackend_helper';

const MyTabBar = ({ cardHeaderTab, cardHeaderToggle }) => {
    const user = getAuthenticatedUser();
    // Vertical Nav Tabs
    return (
        <React.Fragment>
            <div className="card-header align-items-center d-flex position-relative">
                <div className="flex-shrink-0 ms-2">
                    <Nav tabs className="nav justify-content-start nav-tabs-custom rounded card-header-tabs border-bottom-0">
                        <NavItem>
                            <NavLink style={{ cursor: "pointer" }} className={classnames({ active: cardHeaderTab === "1", })} onClick={() => { cardHeaderToggle("1"); }} >
                                About Ship
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{ cursor: "pointer" }} className={classnames({ active: cardHeaderTab === "2", })} onClick={() => { cardHeaderToggle("2"); }} >
                                Load Data
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{ cursor: "pointer" }} className={classnames({ active: cardHeaderTab === "3", })} onClick={() => { cardHeaderToggle("3"); }} >
                                Product Data
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{ cursor: "pointer" }} className={classnames({ active: cardHeaderTab === "4", })} onClick={() => { cardHeaderToggle("4"); }} >
                                Goods Data
                            </NavLink>
                        </NavItem>
                        {user &&
                            <NavItem>
                                <NavLink style={{ cursor: "pointer" }} className={classnames({ active: cardHeaderTab === "5", })} onClick={() => { cardHeaderToggle("5"); }} >
                                    My Trace VIew
                                </NavLink>
                            </NavItem>
                        }
                    </Nav>
                </div>
                <div className="col-sm-auto position-absolute" style={{right: "0"}}>
                    <Link
                    to="/new-data-vote"
                    className="btn btn-success"
                    >
                        <i className="ri-add-line align-bottom me-1"></i> Add New Data
                    </Link>
                </div>
            </div>
        </React.Fragment>
    )
};

export default MyTabBar;