import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Navdata = () => {
    const history = useHistory();
    //state data
    const [isDashboard, setIsDashboard] = useState(false);
    const [isApps, setIsApps] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isBaseUi, setIsBaseUi] = useState(false);
    const [isAdvanceUi, setIsAdvanceUi] = useState(false);
    const [isForms, setIsForms] = useState(false);
    const [isTables, setIsTables] = useState(false);
    const [isCharts, setIsCharts] = useState(false);
    const [isIcons, setIsIcons] = useState(false);
    const [isMaps, setIsMaps] = useState(false);
    const [isMultiLevel, setIsMultiLevel] = useState(false);

    // Apps
    const [isEcommerce, setIsEcommerce] = useState(false);
    const [isProjects, setIsProjects] = useState(false);
    const [isTasks, setIsTasks] = useState(false);
    const [isCRM, setIsCRM] = useState(false);
    const [isCrypto, setIsCrypto] = useState(false);
    const [isInvoices, setIsInvoices] = useState(false);
    const [isSupportTickets, setIsSupportTickets] = useState(false);

    // Authentication
    const [isSignIn, setIsSignIn] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const [isPasswordReset, setIsPasswordReset] = useState(false);
    const [isLockScreen, setIsLockScreen] = useState(false);
    const [isLogout, setIsLogout] = useState(false);
    const [isSuccessMessage, setIsSuccessMessage] = useState(false);
    const [isVerification, setIsVerification] = useState(false);
    const [isError, setIsError] = useState(false);

    // Admin
    const [isUser, setIsUser] = useState(false);
    const [isNotification, setIsNotification] = useState(false);
    const [isProgram, setIsProgram] = useState(false);
    const [isProgramCategory, setIsProgramCategory] = useState(false);
    const [isSuggestion, setIsSuggestion] = useState(false);
    const [isDegree, setIsDegree] = useState(false);
    const [isArticle, setIsArticle] = useState(false);
    const [isArticleCategory, setIsArticleCategory] = useState(false);
    const [isComment, setIsComment] = useState(false);
    const [isAvatar, setIsAvatar] = useState(false);
    const [isMedia, setIsMedia] = useState(false);
    const [isSetting, setIsSetting] = useState(false);

    const [isData, setIsData] = useState(false);
    const [isShipData, setIsShipData] = useState(false);
    const [isLoadData, setIsLoadData] = useState(false);
    const [isProductData, setIsProductData] = useState(false);
    const [isGoodData, setIsGoodData] = useState(false);

    const [isCampus, setIsCampus] = useState(false);
    const [isCampusCategory, setIsCampusCategory] = useState(false);

    const [isQuestion, setIsQuestion] = useState(false);
    const [isAnswer, setIsAnswer] = useState(false);
    // Charts
    const [isApex, setIsApex] = useState(false);

    // Multi Level
    const [isLevel1, setIsLevel1] = useState(false);
    const [isLevel2, setIsLevel2] = useState(false);

    const [iscurrentState, setIscurrentState] = useState('Dashboard');

    function updateIconSidebar(e) {
        if (e && e.target && e.target.getAttribute("subitems")) {
            const ul = document.getElementById("two-column-menu");
            const iconItems = ul.querySelectorAll(".nav-icon.active");
            let activeIconItems = [...iconItems];
            activeIconItems.forEach((item) => {
                item.classList.remove("active");
                var id = item.getAttribute("subitems");
                if (document.getElementById(id))
                    document.getElementById(id).classList.remove("show");
            });
        }
    }

    useEffect(() => {
        document.body.classList.remove('twocolumn-panel');
        if (iscurrentState !== 'Dashboard') {
            setIsDashboard(false);
        }
        if (iscurrentState !== 'Apps') {
            setIsApps(false);
        }
        if (iscurrentState !== 'Auth') {
            setIsAuth(false);
        }
        if (iscurrentState !== 'Admin') {
            setIsAdmin(false);
        }
        if (iscurrentState !== 'BaseUi') {
            setIsBaseUi(false);
        }
        if (iscurrentState !== 'AdvanceUi') {
            setIsAdvanceUi(false);
        }
        if (iscurrentState !== 'Forms') {
            setIsForms(false);
        }
        if (iscurrentState !== 'Tables') {
            setIsTables(false);
        }
        if (iscurrentState !== 'Charts') {
            setIsCharts(false);
        }
        if (iscurrentState !== 'Icons') {
            setIsIcons(false);
        }
        if (iscurrentState !== 'Maps') {
            setIsMaps(false);
        }
        if (iscurrentState !== 'MuliLevel') {
            setIsMultiLevel(false);
        }
        if (iscurrentState === 'Widgets') {
            history.push("/widgets");
            document.body.classList.add('twocolumn-panel');
        }
        if (iscurrentState === 'Landing') {
            history.push("/landing");
            // document.body.classList.add('twocolumn-panel');
        }
        if (iscurrentState === 'blogservice') {
            history.push("/pages-blog-service");
            // document.body.classList.add('twocolumn-panel');
        }
    }, [
        history,
        iscurrentState,
        isDashboard,
        isApps,
        isAuth,
        isAdmin,
        isBaseUi,
        isAdvanceUi,
        isForms,
        isTables,
        isCharts,
        isIcons,
        isMaps,
        isMultiLevel
    ]);

    const menuItems = [
        {
            label: "Menu",
            isHeader: true,
        },
        {
            id: "admin",
            label: "Admin",
            icon: "bx bx-file",
            link: "/#",
            click: function (e) {
                e.preventDefault();
                setIsAdmin(!isAdmin);
                setIscurrentState('Admin');
                updateIconSidebar(e);
            },
            stateVariables: isAdmin,
            subItems: [
                {
                    id: "admin-user",
                    label: "User",
                    link: "/#",
                    isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsUser(!isUser);
                    },
                    parentId: "admin",
                    stateVariables: isUser,
                    childItems: [
                        { id: 1, label: "List", link: "/admin-users", parentId: "admin" },
                        { id: 2, label: "Create", link: "/admin-add-user", parentId: "admin" },
                    ]
                },
                {
                    id: "admin-notification",
                    label: "Notification",
                    link: "/#",
                    isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsNotification(!isNotification);
                    },
                    parentId: "admin",
                    stateVariables: isNotification,
                    childItems: [
                        { id: 1, label: "List", link: "/admin-notifications", parentId: "admin" },
                        { id: 2, label: "Create", link: "/admin-add-notification", parentId: "admin" },
                    ]
                },
                {
                    id: "admin-program",
                    label: "Program",
                    link: "/#",
                    isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsProgram(!isProgram);
                    },
                    parentId: "admin",
                    stateVariables: isProgram,
                    childItems: [
                        { id: 1, label: "List", link: "/admin-programs", parentId: "admin" },
                        { id: 2, label: "Create", link: "/admin-add-program", parentId: "admin" },
                        {
                            id: "admin-programCategory",
                            label: "Category",
                            link: "/#",
                            isChildItem: true,
                            click: function (e) {
                                e.preventDefault();
                                setIsProgramCategory(!isProgramCategory);
                            },
                            parentId: "admin",
                            stateVariables: isProgramCategory,
                            childItems: [
                                { id: 1, label: "List", link: "/admin-programCategories", parentId: "admin" },
                                { id: 2, label: "Create", link: "/admin-add-programCategory", parentId: "admin" },
                            ]
                        },
                        // { id: 3, label: "Category_List", link: "/admin-programCategoy", parentId: "admin" },
                        // { id: 4, label: "Category_Create", link: "/admin-add-programCategory", parentId: "admin" },
                    ]
                },

                {
                    id: "admin-suggestion",
                    label: "Suggestion",
                    link: "/#",
                    isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsSuggestion(!isSuggestion);
                    },
                    parentId: "admin",
                    stateVariables: isSuggestion,
                    childItems: [
                        { id: 1, label: "List", link: "/admin-suggestions", parentId: "admin" },
                        { id: 2, label: "Create", link: "/admin-add-suggestion", parentId: "admin" },
                    ]
                },
                {
                    id: "admin-avatar",
                    label: "Avatar",
                    link: "/#",
                    isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsAvatar(!isAvatar);
                    },
                    parentId: "admin",
                    stateVariables: isAvatar,
                    childItems: [
                        { id: 1, label: "List", link: "/admin-avatars", parentId: "admin" },
                        { id: 2, label: "Create", link: "/admin-add-avatar", parentId: "admin" },
                    ]
                },
                {
                    id: "admin-media",
                    label: "Media",
                    link: "/#",
                    isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsMedia(!isMedia);
                    },
                    parentId: "admin",
                    stateVariables: isMedia,
                    childItems: [
                        { id: 1, label: "List", link: "/admin-medias", parentId: "admin" },
                        { id: 2, label: "Create", link: "/admin-add-media", parentId: "admin" },
                    ]
                },
                {
                    id: "admin-article",
                    label: "Article",
                    link: "/#",
                    isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsArticle(!isArticle);
                    },
                    parentId: "admin",
                    stateVariables: isArticle,
                    childItems: [
                        { id: 1, label: "List", link: "/admin-articles", parentId: "admin" },
                        { id: 2, label: "Create", link: "/admin-add-article", parentId: "admin" },
                        {
                            id: "admin-articleCategory",
                            label: "Category",
                            link: "/#",
                            isChildItem: true,
                            click: function (e) {
                                e.preventDefault();
                                setIsArticleCategory(!isArticleCategory);
                            },
                            parentId: "admin",
                            stateVariables: isArticleCategory,
                            childItems: [
                                { id: 1, label: "List", link: "/admin-articleCategories", parentId: "admin" },
                                { id: 2, label: "Create", link: "/admin-add-articleCategory", parentId: "admin" },
                            ]
                        },
                        {
                            id: "admin-comment",
                            label: "Comment",
                            link: "/#",
                            isChildItem: true,
                            click: function (e) {
                                e.preventDefault();
                                setIsComment(!isComment);
                            },
                            parentId: "admin",
                            stateVariables: isComment,
                            childItems: [
                                { id: 1, label: "List", link: "/admin-comments", parentId: "admin" },
                                { id: 2, label: "Create", link: "/admin-add-comment", parentId: "admin" },
                            ]
                        },
                    ]
                },
                {
                    id: "admin-data",
                    label: "Data",
                    link: "/#",
                    isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsData(!isData);
                    },
                    parentId: "admin",
                    stateVariables: isData,
                    childItems: [
                        {
                            id: "admin-shipData", label: "ShipData", link: "/#", isChildItem: true,
                            click: function (e) {
                                e.preventDefault();
                                setIsShipData(!setIsShipData);
                            },
                            parentId: "admin",
                            stateVariables: isShipData,
                            childItems: [
                                { id: 1, label: "List", link: "/admin-shipDatas", parentId: "admin" },
                                { id: 2, label: "Create", link: "/admin-add-shipData", parentId: "admin" },
                            ]
                        },
                        { 
                            id: "admin-loadData", label: "LoadData", link: "/#", isChildItem: true,
                            click: function (e) {
                                e.preventDefault();
                                setIsLoadData(!setIsLoadData);
                            },
                            parentId: "admin",
                            stateVariables: isLoadData,
                            childItems: [
                                { id: 1, label: "List", link: "/admin-loadDatas", parentId: "admin" },
                                { id: 2, label: "Create", link: "/admin-add-loadData", parentId: "admin" },
                            ] },
                        { 
                            id: "admin-productData", label: "ProductData", link: "/#", isChildItem: true,
                            click: function (e) {
                                e.preventDefault();
                                setIsProductData(!setIsProductData);
                            },
                            parentId: "admin",
                            stateVariables: isProductData,
                            childItems: [
                                { id: 1, label: "List", link: "/admin-productDatas", parentId: "admin" },
                                { id: 2, label: "Create", link: "/admin-add-productData", parentId: "admin" },
                            ] },
                        { 
                            id: "admin-goodData", label: "GoodData", link: "/#", isChildItem: true,
                            click: function (e) {
                                e.preventDefault();
                                setIsGoodData(!setIsGoodData);
                            },
                            parentId: "admin",
                            stateVariables: isGoodData,
                            childItems: [
                                { id: 1, label: "List", link: "/admin-goodDatas", parentId: "admin" },
                                { id: 2, label: "Create", link: "/admin-add-goodData", parentId: "admin" },
                            ] },
                        { id: 5, label: "Traceview", link: "/admin-datas", parentId: "admin" },
                    ]
                },
                {
                    id: "admin-campus",
                    label: "Campus",
                    link: "/#",
                    isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsCampus(!isCampus);
                    },
                    parentId: "admin",
                    stateVariables: isCampus,
                    childItems: [
                        { id: 1, label: "List", link: "/admin-campuses", parentId: "admin" },
                        { id: 2, label: "Create", link: "/admin-add-campus", parentId: "admin" },
                        {
                            id: "admin-campusCategory",
                            label: "Category",
                            link: "/#",
                            isChildItem: true,
                            click: function (e) {
                                e.preventDefault();
                                setIsCampusCategory(!isCampusCategory);
                            },
                            parentId: "admin",
                            stateVariables: isCampusCategory,
                            childItems: [
                                { id: 1, label: "List", link: "/admin-campusCategories", parentId: "admin" },
                                { id: 2, label: "Create", link: "/admin-add-campusCategory", parentId: "admin" },
                            ]
                        },
                    ]
                },
                {
                    id: "admin-question",
                    label: "Question",
                    link: "/#",
                    isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsQuestion(!isQuestion);
                    },
                    parentId: "admin",
                    stateVariables: isQuestion,
                    childItems: [
                        { id: 1, label: "List", link: "/admin-questions", parentId: "admin" },
                        { id: 2, label: "Create", link: "/admin-add-question", parentId: "admin" },
                        // {
                        //     id: "admin-answer",
                        //     label: "answer",
                        //     link: "/#",
                        //     isChildItem: true,
                        //     click: function (e) {
                        //         e.preventDefault();
                        //         setIsAnswer(!isAnswer);
                        //     },
                        //     parentId: "admin",
                        //     stateVariables: isAnswer,
                        //     childItems: [
                        //         { id: 1, label: "List", link: "/admin-answers", parentId: "admin" },
                        //         { id: 2, label: "Create", link: "/admin-add-answer", parentId: "admin" },
                        //     ]
                        // },
                    ]
                },
                {
                    id: "admin-setting",
                    label: "Setting",
                    link: "/admin-settings",
                    isChildItem: false,
                    click: function (e) {
                        e.preventDefault();
                        setIsSetting(!isSetting);
                    },
                    parentId: "admin",
                    stateVariables: isSetting,
                }
            ]
        },

        {
            id: "blogservice",
            label: "Blog Service",
            icon: "ri-questionnaire-line",
            link: "/pages-blog-service",
            click: function (e) {
                e.preventDefault();
                setIscurrentState('blogservice');
            }
        },
        {
            id: "testservice",
            label: "Test",
            icon: "ri-customer-service-2-line",
            link: "/test-test-page-start",
            click: function (e) {
                e.preventDefault();
                setIscurrentState('testservice');
            }
        },
        {
            id: "studyservice",
            label: "Study",
            icon: "ri-book-open-line",
            link: "/pages-study-field",
            click: function (e) {
                e.preventDefault();
                setIscurrentState('studyservice');
            }
        },
        {
            id: "softwareservice",
            label: "Software",
            icon: "ri-apps-line",
            link: "/pages-software",
            click: function (e) {
                e.preventDefault();
                setIscurrentState('softwareservice');
            }
        },
        {
            id: "dataservice",
            label: "Data",
            icon: "ri-database-line",
            link: "/view-data",
            click: function (e) {
                e.preventDefault();
                setIscurrentState('dataservice');
            }
        },
        {
            id: "introductionservice",
            label: "Introduction",
            icon: "ri-map-pin-user-line",
            link: "/pages-company-introduction",
            click: function (e) {
                e.preventDefault();
                setIscurrentState('introductionservice');
            }
        },
    ];
    return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;