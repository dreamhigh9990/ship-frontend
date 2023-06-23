import React from 'react';
import { useQuill } from "react-quilljs";
import { Button, TabPane } from "reactstrap";

const MyOpinion = () => {
    const { quillRef } = useQuill();
    return (
        <React.Fragment>
            <TabPane tabId="7" id="v-pill-opinion-box">
                        <div className="opinion-wraper">
                            <h4 className="card-title flex-grow-1">Opinion</h4>
                            <div>
                                <div className="snow-editor" style={{ height: 300 }}>
                                    <div ref={quillRef} />
                                </div>
                                <div className='pt-2 d-flex justify-content-between align-items-center'>
                                    <span>Contact number: +191223123</span>
                                    <div>
                                        <Button color="primary" data-bs-toggle="button" aria-pressed="false" className='me-2'>
                                            Grammar Checking
                                        </Button>
                                        <Button color="primary" data-bs-toggle="button" aria-pressed="false">
                                            Contribution
                                        </Button>
                                    </div>
                                    <Button color="primary" className="btn-label right"><i className="ri-file-upload-line label-icon align-middle fs-16 ms-2"></i> Attach File </Button>
                                </div>
                            </div>
                        </div>

                    </TabPane>
        </React.Fragment>
    )
}


export default MyOpinion;