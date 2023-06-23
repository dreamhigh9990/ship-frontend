import React from 'react';
import { TabPane } from "reactstrap";
import { columnsTestData, TestDataList, columnsProcessData, ProcessDataList} from './TestData'
import TableContainer from "../../../Components/Common/TableContainer";
import { useMemo } from "react";

const MyTest = () => {
    const columnsTest = useMemo(() => columnsTestData, []);
    const columnsProcess = useMemo(() => columnsProcessData, []);
    return (
        <React.Fragment>
            <TabPane tabId="3" id="v-pill-test">
                <div className="table-responsive">
                    <h4 className="card-title flex-grow-1">Passed Test</h4>
                    <TableContainer
                        columns={columnsTest}
                        data={TestDataList}
                        isGlobalFilter={false}
                        isGlobalSearch = {true}
                        isAddUserList={false}
                        customPageSize={10}
                        divClass="table-responsive mb-1"
                        tableClass="mb-0 table-borderless"
                        theadClass="table-light text-muted"
                    />
                </div>
                <div className="table-responsive pt-5">
                    <h4 className="card-title flex-grow-1">Progressing Test</h4>
                    <TableContainer
                        columns={columnsProcess}
                        data={ProcessDataList}
                        isGlobalFilter={false}
                        isGlobalSearch = {true}
                        isAddUserList={false}
                        customPageSize={10}
                        divClass="table-responsive mb-1"
                        tableClass="mb-0 table-borderless"
                        theadClass="table-light text-muted"
                    />
                </div>
            </TabPane>
        </React.Fragment>
    )
}

export default MyTest;