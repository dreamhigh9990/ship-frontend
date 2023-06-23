import React, { useState, useEffect } from 'react';
import { TabPane, Table } from "reactstrap";
import { Link } from 'react-router-dom';
import { columnsPurchaseData, PurchaseDataList } from './TestData'
import TableContainer from "../../../../Components/Common/TableContainer";
import { getFindPurchaseHistoyById, getAuthenticatedUser } from '../../../../helpers/fakebackend_helper';

import { useMemo } from "react";

const MyPurchase = () => {
    const columnsPurchase = useMemo(() => columnsPurchaseData, []);
    const [dataList, setdataList] = useState([]);
    const [selectedType, setSelectedType] = useState("")

    useEffect(() => {
        var user = getAuthenticatedUser();
        console.log("Purchase History Called");
        getFindPurchaseHistoyById(user.id, { type: selectedType }).then(res => {
            console.log("purchase", res)
            setdataList(res);
        })
    }, [selectedType]);

    return (
        <React.Fragment>
            <TabPane tabId="4" id="v-pills-purchase">
                <div className="mb-2 d-flex justify-content-between">
                    {/* <h4 className="card-title flex-grow-1">Total Purchase Count: 11</h4> */}
                    <div className="d-flex align-items-left">
                        <label className="mt-2 pe-2">Sort:</label>
                        <select className="form-select" aria-label=".form-select-sm" style={{ width: "120px" }} value={selectedType}
                            onChange={e => setSelectedType(e.target.value)}>
                            <option defaultValue="All">All</option>
                            <option value="Test">Test</option>
                            <option value="Software">Software</option>
                            <option value="Data">Data</option>
                            <option value="Avatar">Avatar</option>
                            <option value="Campus">Campus</option>

                        </select>
                    </div>
                </div>
                <TableContainer
                    columns={columnsPurchase}
                    data={dataList}
                    isGlobalFilter={false}
                    isGlobalSearch={true}
                    isAddUserList={false}
                    customPageSize={10}
                    divClass="table-responsive mb-1"
                    tableClass="mb-0 table-borderless"
                    theadClass="text-muted"
                />
            </TabPane>
        </React.Fragment>
    )
}

export default MyPurchase;