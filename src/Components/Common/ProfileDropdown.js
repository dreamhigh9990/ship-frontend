import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { downloadCurrentAvatar } from "../../helpers/fakebackend_helper";


import {
    loginUser,
    loginSuccess
    // resetValue
} from "../../store/actions";

// import images

import { getAuthenticatedUser } from '../../helpers/fakebackend_helper';

const ProfileDropdown = () => {
    //Dropdown Toggle
    const [isProfileDropdown, setIsProfileDropdown] = useState(false);
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const toggleProfileDropdown = () => {
        setIsProfileDropdown(!isProfileDropdown);
    };

    const myInformationSelector = useSelector(state => state.Profile.myinformation);

    useEffect(() => { 
        if (myInformationSelector) {
            setUsername(myInformationSelector.username);
            setName(myInformationSelector.name);
        } else {
            setUsername('');
            setName('');
        }
    }, [myInformationSelector])

    // useEffect(() => {
    //     console.log("Profiledropdown", getAuthenticatedUser())
    //     if (getAuthenticatedUser()) {
    //         console.log("getAuthenticatedUser().username", getAuthenticatedUser().username)
    //         setUsername(getAuthenticatedUser().username);
    //         setName(getAuthenticatedUser().name);
    //     } else {
    //         setUsername('');
    //         setName('');
    //     }
    // }, [getAuthenticatedUser().id])

    
    // const userAuth = getAuthenticatedUser();

    return (
        <React.Fragment>
            <Dropdown isOpen={isProfileDropdown} toggle={toggleProfileDropdown} className="ms-sm-3 header-item topbar-user">
                <DropdownToggle tag="button" type="button" className="btn shadow-none">
                    <span className="d-flex align-items-center">
                        <img className="rounded-circle header-profile-user" src={downloadCurrentAvatar(myInformationSelector)} alt="Header Avatar" />
                        <span className="text-start ms-xl-2">
                            <span className="d-none d-xl-inline-block ms-1 fw-medium user-name-text">{name}</span>
                            {/* <span className="d-none d-xl-block ms-1 fs-12 text-muted user-name-sub-text"></span> */}
                        </span>
                    </span>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-end">

                    <h6 className="dropdown-header">Welcome {username}!</h6>
                    {/* <DropdownItem href="/pages-profile"><i className="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i>
                        <span className="align-middle">Profile</span></DropdownItem> */}
                    <DropdownItem href="/pages-profile-settings"><i
                        className="mdi mdi-cog-outline text-muted fs-16 align-middle me-1"></i> <span
                            className="align-middle">My Page</span></DropdownItem>
                    {/* <DropdownItem href="/apps-chat"><i
                        className="mdi mdi-message-text-outline text-muted fs-16 align-middle me-1"></i> <span
                            className="align-middle">Messages</span></DropdownItem> */}
                    {/* <DropdownItem href="/apps-tasks-kanban"><i
                        className="mdi mdi-calendar-check-outline text-muted fs-16 align-middle me-1"></i> <span
                            className="align-middle">Taskboard</span></DropdownItem>
                    <DropdownItem href="/pages-faqs"><i
                        className="mdi mdi-lifebuoy text-muted fs-16 align-middle me-1"></i> <span
                            className="align-middle">Help</span></DropdownItem> */}
                    <div className="dropdown-divider"></div>
                    <DropdownItem ><i
                        className="mdi mdi-wallet text-muted fs-16 align-middle me-1"></i> <span
                            className="align-middle">Free Charge : <b>$3000</b></span></DropdownItem>
                    <DropdownItem ><i
                        className="mdi mdi-wallet text-muted fs-16 align-middle me-1"></i> <span
                            className="align-middle">Balance : <b>$5971.67</b></span></DropdownItem>
                    <div className="dropdown-divider"></div>
                    {/* <DropdownItem href="/auth-lockscreen-basic"><i
                        className="mdi mdi-lock text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Lock screen</span></DropdownItem> */}
                    <DropdownItem href="/logout"><i
                        className="mdi mdi-logout text-muted fs-16 align-middle me-1"></i> <span
                            className="align-middle" data-key="t-logout">Logout</span></DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </React.Fragment>
    );
};

export default ProfileDropdown;