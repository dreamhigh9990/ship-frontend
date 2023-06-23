import React from 'react';
import { Label, Input, TabPane } from "reactstrap";

const MyScore = () => {
    return (
        <React.Fragment>
            <TabPane tabId="5" id="v-pills-score-manage">
                <div className="mb-2">
                    <div className='pb-5'>
                        <span className='px-2'>no free score charge</span>
                        <span className='px-2'>no freescore move</span>
                        <span className='px-2'>score charge</span>
                        <span className='px-2'>socre move</span>
                    </div>
                    <div id="score-manage-field">
                        <div className="mt-4 md-0 d-flex">
                            <span>Sign mode:</span>
                            <div className="form-check mb-2 me-3">
                                <Input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <Label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Part1 Wallet
                                </Label>
                            </div>
                            <div className="form-check me-3">
                                <Input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                                <Label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Part2 Wallet
                                </Label>
                            </div>
                            <div className="form-check me-3">
                                <Input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" defaultChecked />
                                <Label className="form-check-label" htmlFor="flexRadioDefault3">
                                    Part3 Wallet
                                </Label>
                            </div>
                        </div>
                        <div className="mt-4 mt-3 md-0 d-flex">
                            <span>Currency Kind:</span>
                            <div className="form-check mb-2 me-3">
                                <Input className="form-check-input" type="radio" name="flexRadioCurrency" id="flexRadioCurrency1" />
                                <Label className="form-check-label" htmlFor="flexRadioCurrency1">
                                    Country
                                </Label>
                            </div>
                            <div className="form-check me-3">
                                <Input className="form-check-input" type="radio" name="flexRadioCurrency" id="flexRadioCurrency2" defaultChecked />
                                <Label className="form-check-label" htmlFor="flexRadioCurrency2">
                                    Abroad
                                </Label>
                            </div>
                        </div>
                        <div className="mt-4 mt-3 md-0 d-flex">
                            <span>Charging Score: </span>
                            <Input type="text" className="form-control" id="charing-score" placeholder="" style={{ width: "120px" }} />
                        </div>
                        <div className="mt-4 mt-3 md-0 d-flex">
                            <span>Receive Identifier: </span>
                            <Input type="text" className="form-control" id="receive-identifier" placeholder="" style={{ width: "120px" }} />
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">
                    Charge
                </button>
            </TabPane>
        </React.Fragment>
    )
}

export default MyScore;