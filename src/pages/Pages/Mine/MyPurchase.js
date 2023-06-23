import React from 'react';
import { TabPane, Table } from "reactstrap";
import { Link } from 'react-router-dom';
import { columnsPurchaseData, PurchaseDataList } from './TestData'
import TableContainer from "../../../Components/Common/TableContainer";
import { useMemo } from "react";

const MyPurchase = () => {
    const columnsPurchase = useMemo(() => columnsPurchaseData, []);
    return (
        <React.Fragment>
            <TabPane tabId="4" id="v-pills-purchase">
                <div className="mb-2 d-flex justify-content-between">
                    <h4 className="card-title flex-grow-1">Total Purchase Count: 11</h4>
                    <div className="d-flex align-items-center">
                        <label className="mb-0 pe-2">Sort:</label>
                        <select className="form-select" aria-label=".form-select-sm" style={{ width: "100px" }}>
                            <option defaultValue="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
                <Table className="align-middle table-nowrap mb-0">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Title</th>
                            <th scope="col">Date</th>
                            <th scope="col">Purchase Score</th>
                            <th className="sort" data-sort="action"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"><Link to="#" className="fw-medium">1</Link></th>
                            <td>Electric</td>
                            <td>2022.1.3</td>
                            <td>10000</td>
                            <td>
                                <div className="d-flex gap-2">
                                    <div className="edit">
                                        <button className="btn btn-sm btn-success edit-item-btn"
                                            data-bs-toggle="modal" data-bs-target="#showModal">Detail</button>
                                    </div>
                                    <div className="remove">
                                        <button className="btn btn-sm btn-danger remove-item-btn">Download</button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row"><Link to="#" className="fw-medium">2</Link></th>
                            <td>Physical</td>
                            <td>2022.2.3</td>
                            <td>500</td>
                            <td>
                                <div className="d-flex gap-2">
                                    <div className="edit">
                                        <button className="btn btn-sm btn-success edit-item-btn"
                                            data-bs-toggle="modal" data-bs-target="#showModal">Detail</button>
                                    </div>
                                    <div className="remove">
                                        <button className="btn btn-sm btn-danger remove-item-btn">Download</button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <TableContainer
                        columns={columnsPurchase}
                        data={PurchaseDataList}
                        isGlobalFilter={false}
                        isGlobalSearch = {true}
                        isAddUserList={false}
                        customPageSize={10}
                        divClass="table-responsive mb-1"
                        tableClass="mb-0 table-borderless"
                        theadClass="table-light text-muted"
                    />
            </TabPane>
        </React.Fragment>
    )
}

export default MyPurchase;