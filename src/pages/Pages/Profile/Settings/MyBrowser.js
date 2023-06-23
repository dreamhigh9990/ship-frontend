import React, {useState, useEffect} from 'react';
import { CardBody, TabPane } from "reactstrap";
import TableContainer from "../../../../Components/Common/TableContainer";
import { getFindBrowseHistoriesById, getAuthenticatedUser, getBrowserHistoriesAll} from '../../../../helpers/fakebackend_helper';

import { Link } from "react-router-dom";
import { columnsData, dataList } from './TestData'
import { useMemo } from "react";

// const userId = getAuthenticatedUser().id;

const MyBrowser = () => {
    const columns = useMemo(() => columnsData, []);

    const [dataList, setdataList] = useState([]);

    useEffect(() => {
        var user = getAuthenticatedUser();
        getBrowserHistoriesAll().then(res => {
            setdataList(res);
        })
    }, []);
    return (
        <React.Fragment>
            <TabPane tabId="2" id="v-pills-browser">
             {dataList && dataList !== "" ? (
                    <TableContainer
                        columns={columns}
                        data={dataList}
                        isGlobalFilter={false}
                        isGlobalSearch = {true}
                        isAddUserList={false}
                        customPageSize={10}
                        divClass="table-responsive mb-1"
                        tableClass="mb-0 table-borderless"
                        theadClass="text-muted"
                    />):(
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
            </TabPane>
        </React.Fragment>
    )
}

export default MyBrowser;