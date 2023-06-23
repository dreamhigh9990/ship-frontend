import React, { useState, useEffect } from 'react';
import { CardBody, TabPane } from "reactstrap";
import { BaseExample } from '../../Tables/GridTables/GridTablesData';
import TableContainer from "../../../Components/Common/TableContainer";

import { Link } from "react-router-dom";
import { columnsData, dataList } from './TestData'
import { useMemo } from "react";

const MyBrowser = () => {
    const columns = useMemo(() => columnsData, []);
    return (
        <React.Fragment>
            <TabPane tabId="2" id="v-pills-browser">
                    <TableContainer
                        columns={columns}
                        data={dataList}
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

export default MyBrowser;