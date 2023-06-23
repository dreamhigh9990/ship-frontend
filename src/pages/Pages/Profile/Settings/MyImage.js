import React, { useEffect, useState, useMemo } from 'react';
import { CardHeader, TabPane, Row, Col, Card } from "reactstrap";
import { getAvatars, downloadAvatar, getUser, updateOneUser } from '../../../../helpers/fakebackend_helper';
import { useSelector, useDispatch } from "react-redux";
import { profileUpdateSuccess } from '../../../../store/auth/profile/actions';


function Mine() {

    const [avatarList, setAvatarList] = useState([]);
    const [purchasedList, setPurchasedList] = useState([]);
    const [userID, setUserID] = useState('');
    const [avatarID, setAvatarID] = useState('');

    const myInformationSelector = useSelector(state => state.Profile.myinformation);

    const dispatch = useDispatch();

    var selectedImageListId;

    var selectedPurchasedAvatarId;


    useEffect(() => {
        getAvatarList();
    }, []);

    useEffect(() => {
        if (myInformationSelector) {
            setUserID(myInformationSelector.id);
        }
        else {
            console.log("Please login first")
        }
    }, [myInformationSelector]);

    useEffect(() => {        
        getPurchasedList(userID);
    }, [userID]);

    // realtime update purchase avatar list
    useEffect(() => {
        updateOneUser(userID, { purchasedAvatar: JSON.stringify(purchasedList) });
    }, [purchasedList]);

    useEffect(() => {
        updateOneUser(userID, { currentAvatarId: avatarID });
        const userInfo = JSON.parse(localStorage.getItem("authUser"));
        const newUpdatedUserInfo = {
            ...userInfo,
            "currentAvatarId": avatarID,
        };
        dispatch(profileUpdateSuccess(newUpdatedUserInfo));
    }, [avatarID, dispatch]);

    const getAvatarList = () => {
        getAvatars().then(res => {
            console.log("getAvatars",res);
            setAvatarList(res);
        });
    };

    const getPurchasedList = (userID) => {
        getUser(userID).then(res => {
            console.log("res.purchasedAvatar", res.purchasedAvatar);
            setPurchasedList(JSON.parse(res.purchasedAvatar));
        });
    };

    function selectAvatarList(e) {
        document.querySelectorAll(".src-avatar img").forEach(img => {
            if (img.src !== e.currentTarget.src) {
                img.classList.remove("img-buy");
            } else {
                selectedImageListId = parseInt(e.currentTarget.src.substr(42));
                img.classList.toggle("img-buy");
            }
        });
    }

    function purchaseAvatarSelect(event) {
        document.querySelectorAll(".pch-avatar img").forEach(img => {
            if (img.src !== event.currentTarget.src) {
                img.classList.remove("img-buy");
            } else {
                selectedPurchasedAvatarId = parseInt(event.currentTarget.src.substr(42));
                img.classList.toggle("img-buy");
            }
        });
    }

    function addPurchasedAvatar() {
        if ((!purchasedList.filter(item => item === selectedImageListId).length) && selectedImageListId !== null) {
            setPurchasedList([...purchasedList, selectedImageListId]);
        }
    }

    function applyAvatar() {
        setAvatarID(selectedPurchasedAvatarId);
    }

    return (
        <React.Fragment>
            <TabPane tabId="6" id="v-pill-image-icon">
                <Row>
                    <Col>
                        <div className="mb-2">
                            <div className="ps-0">
                                <h4 className="card-title flex-grow-1">Image Icon Selection</h4>
                            </div>
                        </div>
                        <div style={{ height: 300, overflowY: 'scroll' }}>
                            <div className="mt-4 md-0 px-5 my-img-select src-avatar">
                                <div className='d-block justify-content-between pb-3'>
                                    {avatarList.map((e) => {
                                        return <Row key={e.id} style={{ display: "inline" }}>
                                            <Col style={{ display: "inline" }}>
                                                <img className={"img-thumbnail rounded-circle avatar-xl "}
                                                    src={downloadAvatar(e.id)}
                                                    alt=""
                                                    onClick={(e) => selectAvatarList(e)}
                                                    style={{ margin: '', width: 80, height: 80 }} />
                                            </Col>
                                        </Row>;
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className="text-end pt-5">
                            <button type="submit" className="btn btn-primary" onClick={e => {
                                e.preventDefault();
                                addPurchasedAvatar();
                            }}>Purchase</button>
                        </div>
                    </Col>

                    <Col>
                        <div className="mb-2">
                            <div className="ps-0">
                                <h4 className="card-title flex-grow-1">My Image List</h4>
                            </div>
                        </div>
                        <div style={{ height: 300, overflowY: 'scroll', }}>
                            <div className="mt-4 md-0 px-5 my-img-select pch-avatar">
                                <div className='d-block justify-content-between pb-3'>
                                    {purchasedList.map((e,key) => {
                                        return <Row key={key} style={{ display: "inline" }}>
                                            <Col style={{ display: "inline" }}>
                                                <img className={"img-thumbnail rounded-circle avatar-xl "}
                                                    src={downloadAvatar(e)}
                                                    alt=""
                                                    onClick={(e) => purchaseAvatarSelect(e)}
                                                    style={{ margin: '', width: 80, height: 80 }} />
                                            </Col>
                                        </Row>;
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="text-end pt-5">
                            <button type="submit" className="btn btn-primary" onClick={() => {
                                applyAvatar();
                                console.log("Applying avatar", avatarID)
                            }}>Apply</button>
                        </div>
                    </Col>
                </Row>
            </TabPane>
        </React.Fragment>
    );
}

export default Mine;