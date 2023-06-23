import React from 'react';
import { CardHeader, TabPane } from "reactstrap";

import avatar1 from "../../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../../assets/images/users/avatar-3.jpg";

const Mine = () => {
    return (
        <React.Fragment>
            <TabPane tabId="6" id="v-pill-image-icon">
                <div className="mb-2">
                    <div className="ps-0">
                        <h4 className="card-title flex-grow-1">Image Icon Selection</h4>
                    </div>
                </div>
                <div>
                    <div className="mt-4 md-0 px-5 my-img-select">
                        <div className='d-flex justify-content-between pb-3'>
                            <img className="img-thumbnail rounded-circle avatar-xl" alt="200x200" src={avatar1} />
                            <img className="img-thumbnail rounded-circle avatar-xl" alt="200x200" src={avatar3} />
                            <img className="img-thumbnail rounded-circle avatar-xl" alt="200x200" src={avatar3} />
                            <img className="img-thumbnail rounded-circle avatar-xl" alt="200x200" src={avatar2} />
                            <img className="img-thumbnail rounded-circle avatar-xl" alt="200x200" src={avatar3} />
                        </div>
                        <div className='d-flex justify-content-between pb-3'>
                            <img className="img-thumbnail rounded-circle avatar-xl" alt="200x200" src={avatar3} />
                            <img className="img-thumbnail rounded-circle avatar-xl" alt="200x200" src={avatar1} />
                            <img className="img-thumbnail rounded-circle avatar-xl" alt="200x200" src={avatar3} />
                            <img className="img-thumbnail rounded-circle avatar-xl" alt="200x200" src={avatar2} />
                            <img className="img-thumbnail rounded-circle avatar-xl" alt="200x200" src={avatar3} />
                        </div>
                        <div className='d-flex justify-content-between pb-3'>
                            <img className="img-thumbnail rounded-circle avatar-xl" alt="200x200" src={avatar3} />
                            <img className="img-thumbnail rounded-circle avatar-xl" alt="200x200" src={avatar1} />
                            <img className="img-thumbnail rounded-circle avatar-xl" alt="200x200" src={avatar3} />
                            <img className="img-thumbnail rounded-circle avatar-xl" alt="200x200" src={avatar1} />
                            <img className="img-thumbnail rounded-circle avatar-xl" alt="200x200" src={avatar3} />
                        </div>
                    </div>
                    <div className="text-end pt-5">
                        <button type="submit" className="btn btn-primary">Purchase</button>
                    </div>
                </div>
            </TabPane>
        </React.Fragment>
    )
}

export default Mine;