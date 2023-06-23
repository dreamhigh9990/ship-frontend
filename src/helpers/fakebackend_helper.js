import { APIClient } from "./api_helper";
import * as url from "./url_helper";
import config from "../config";
import { data } from "dom7";

const api = new APIClient();
// Gets the logged in user data from local session



// Login Method
export const postJwtLogin = data => api.create(url.POST_JWT_LOGIN, data);

// Register Method
export const postJwtRegister = (url, data) => {
  return api.create(url, data)
    .catch(err => {
      var message;
      if (err.response && err.response.status) {
        switch (err.response.status) {
          case 404:
            message = "Sorry! the page you are looking for could not be found";
            break;
          case 500:
            message = "Sorry! something went wrong, please contact our support team";
            break;
          case 401:
            message = "Invalid credentials";
            break;
          default:
            message = err[1];
            break;
        }
      }
      throw message;
    });
};




// My page
export const getGetMyInformation = id => api.get(url.GET_MY_INFORMATION + '/' + id);
export const putSaveMyInformation = (id, data) => api.update(url.PUT_SAVE_MY_INFORMATION + '/' + id, data);
export const getFindBrowseHistoriesById = id => api.get(url.GET_FIND_BROWSER_HISTORY + '/' + id);
export const getFindPurchaseHistoyById = (id, selectedType) => api.create(url.GET_FIND_PURCHASE_HISTORY + '/' + id, selectedType);
export const getBrowserHistoriesAll = () => api.get(url.GET_FIND_BROWSER_HISTORY_ALL);
export const getPassedTestsById = id => api.get(url.GET_FIND_PASSED_TEST + '/' + id);
export const addNewBrowserHistory = data => api.create(url.ADD_NEW_BROWSER_HISTORY, data);

// Test page
export const getGetAllQA = () => api.get(url.GET_ALL_QA);
export const getGetQuestionById = id => api.get(url.GET_FIND_QUESTION + '/' + id);
export const addNewPassedTest = data => api.create(url.ADD_NEW_PASSEDTEST, data);
export const updatePassedTest = (id, data) => api.update(url.UPDATE_NOTIFICATION + '/' + id, data);

// Ship Data page
export const getGetAllShipData = () => api.get(url.GET_ALL_SHIP);
export const getGetShipCategoryById = id => api.get(url.GET_SHIP_BY_CATEGORY + '/' + id);
export const getGetShipDetail = id => api.get(url.GET_SHIP_DETAIL + '/' + id);

/**
   * Returns the authenticated user
   */

export const getAuthenticatedUser = () => {
  if (!localStorage.getItem("authUser")) return null;
  return JSON.parse(localStorage.getItem("authUser"));
};

export const updateAuthenticatedUser = (user) => {
  localStorage.setItem("authUser", JSON.stringify(user));
};


// Gets the logged in user data from local session
export const getLoggedInUser = () => {
  const user = localStorage.getItem("user");
  if (user) return JSON.parse(user);
  return null;
};

// //is user is logged in
export const isUserAuthenticated = () => {
  return getLoggedInUser() !== null;
};

// Register Method
export const postFakeRegister = (data) => {
  return api.create(url.POST_FAKE_REGISTER, data)
    .catch(err => {
      let message;
      if (err.response && err.response.status) {
        switch (err.response.status) {
          case 404:
            message = "Sorry! the page you are looking for could not be found";
            break;
          case 500:
            message = "Sorry! something went wrong, please contact our support team";
            break;
          case 401:
            message = "Invalid credentials";
            break;
          default:
            message = err[1];
            break;
        }
      }
      throw message;
    });
};

// Login Method
export const postFakeLogin = data => api.create(url.POST_FAKE_LOGIN, data);

// postForgetPwd
export const postFakeForgetPwd = data => api.create(url.POST_FAKE_PASSWORD_FORGET, data);

// Edit profile
export const postJwtProfile = data => api.update(url.POST_EDIT_JWT_PROFILE + "/" + data.id, data);

// Browser My Inoformation

export const getJwtMyProfile = data => api.get(url.GET_MY_PROFILE + "/" + data.id, data);

export const postFakeProfile = data => api.create(url.POST_EDIT_PROFILE, data);




// postForgetPwd
export const postJwtForgetPwd = data => api.create(url.POST_FAKE_JWT_PASSWORD_FORGET, data);

// postSocialLogin
export const postSocialLogin = data => api.create(url.SOCIAL_LOGIN, data);


// get Events
export const getEvents = () => api.get(url.GET_EVENTS);

// get Events
export const getCategories = () => api.get(url.GET_CATEGORIES);

// get Upcomming Events
export const getUpCommingEvent = () => api.get(url.GET_UPCOMMINGEVENT);

// add Events
export const addNewEvent = event => api.create(url.ADD_NEW_EVENT, event);

// update Event
export const updateEvent = event => api.update(url.UPDATE_EVENT, event);

// delete Event
export const deleteEvent = event => api.delete(url.DELETE_EVENT, { headers: { event } });

// get Contact
export const getDirectContact = () => api.get(url.GET_DIRECT_CONTACT);

// get messages
export const getMessages = roomId => api.get(`${url.GET_MESSAGES}/${roomId}`, { params: { roomId } });

//add message
export const addMessage = message => api.create(url.ADD_MESSAGE, message);

// get Channels
export const getChannels = () => api.get(url.GET_CHANNELS);

//project list 
export const getProjectList = () => api.get(url.GET_PROJECT_LIST);
//Ecommerce

// get Products
export const getProducts = () => api.get(url.GET_PRODUCTS);
// get Orders
export const getOrders = () => api.get(url.GET_ORDERS);

// add order
export const addNewOrder = order => api.create(url.ADD_NEW_ORDER, order);

// update order
export const updateOrder = order => api.update(url.UPDATE_ORDER, order);

// delete order
export const deleteOrder = order => api.delete(url.DELETE_ORDER, { headers: { order } });

// get Sellers
export const getSellers = () => api.get(url.GET_SELLERS);


// get Task
export const getTaskList = () => api.get(url.GET_TASK_LIST);

// add Task
export const addNewTask = task => api.create(url.ADD_NEW_TASK, task);

// update Task
export const updateTask = task => api.update(url.UPDATE_TASK, task);

// delete Task
export const deleteTask = task => api.delete(url.DELETE_TASK, { headers: { task } });


// get Customers
export const getCustomers = () => api.get(url.GET_CUSTOMERS);

// add CUSTOMER
export const addNewCustomer = customer => api.create(url.ADD_NEW_CUSTOMER, customer);

// update CUSTOMER
export const updateCustomer = customer => api.update(url.UPDATE_CUSTOMER, customer);

// delete CUSTOMER
export const deleteCustomer = customer => api.delete(url.DELETE_CUSTOMER, { headers: { customer } });

//Crypto
export const getTransationList = () => api.get(url.GET_TRANSATION_LIST);
export const getOrderList = () => api.get(url.GET_ORDRER_LIST);


// Support Tickets 
export const getTicketsList = () => api.get(url.GET_TICKETS_LIST);

// add Support Tickets 
export const addNewTicket = ticket => api.create(url.ADD_NEW_TICKET, ticket);

// update Support Tickets 
export const updateTicket = ticket => api.update(url.UPDATE_TICKET, ticket);

// delete Support Tickets 
export const deleteTicket = ticket => api.delete(url.DELETE_TICKET, { headers: { ticket } });

//Crm

// get Contacts
export const getContacts = () => api.get(url.GET_CONTACTS);

// add Contact
export const addNewContact = contact => api.create(url.ADD_NEW_CONTACT, contact);

// update Contact
export const updateContact = contact => api.update(url.UPDATE_CONTACT, contact);

// delete Contact
export const deleteContact = contact => api.delete(url.DELETE_CONTACT, { headers: { contact } });

// get Companies
export const getCompanies = () => api.get(url.GET_COMPANIES);

// add Companies
export const addNewCompanies = company => api.create(url.ADD_NEW_COMPANIES, company);

// update Companies
export const updateCompanies = company => api.update(url.UPDATE_COMPANIES, company);

// delete Companies
export const deleteCompanies = company => api.delete(url.DELETE_COMPANIES, { headers: { company } });

// get Deals
export const getDeals = () => api.get(url.GET_DEALS);

// get leads
export const getLeads = () => api.get(url.GET_LEADS);

// add Lead
export const addNewLead = lead => api.create(url.ADD_NEW_LEAD, lead);

// update Lead
export const updateLead = lead => api.update(url.UPDATE_LEAD, lead);

// delete Lead
export const deleteLead = lead => api.delete(url.DELETE_LEAD, { headers: { lead } });


//get invoice
export const getInvoices = () => api.get(url.GET_INVOICES);

// add Invoice
export const addNewInvoice = invoice => api.create(url.ADD_NEW_INVOICE, invoice);

// update Invoice
export const updateInvoice = invoice => api.update(url.UPDATE_INVOICE, invoice);

// delete Invoice
export const deleteInvoice = invoice => api.delete(url.DELETE_INVOICE, { headers: { invoice } });

//get mail
export const getMailDetails = () => api.get(url.GET_MAIL_DETAILS);

//delete mail
export const deleteMail = forId => api.delete(url.DELETE_MAIL, { headers: { forId } });

//product
export const deleteProducts = product => api.delete(url.DELETE_PRODUCT, { headers: { product } });

//studyfield
export const getAllStudy = study => api.get(url.GET_ALL_STUDY);
export const getAllStudyWithCategory = () => api.get(url.GET_ALL_STUDY_WITH_CATEGORY);
export const getAllStudyByCategory = (category) => api.get(url.GET_ALL_STUDY_BY_CATEGORY + '/' + category);

//softwarefield
export const getAllSoftware = () => api.get(url.GET_ALL_SOFTWARE);
export const getAllSoftwareWithCategory = () => api.get(url.GET_ALL_SOFTWARE_WITH_CATEGORY);
export const getAllSoftwareByCategory = (category) => api.get(url.GET_ALL_SOFTWARE_BY_CATEGORY + '/' + category);

export const getTopSoftwares = () => api.get(url.GET_ALL_TOP_SOFTWARES);


export const getTopCampus = () => api.get(url.GET_ALL_TOP_CAMPUS);
export const getTopUsers = () => api.get(url.GET_ALL_TOP_USERS);

//get BrowseHistory in StudyField
export const getAllCampusWithBrowses = () => api.get(url.GET_BROWSES);


// get Users
export const getUsers = () => api.get(url.GET_USERS);
export const getUser = (id) => api.get(url.GET_USER + '/' + id);

// add USER
export const addNewUser = customer => api.create(url.ADD_NEW_USER, customer);

// update USER
export const updateOneUser = (id, data) => api.update(url.UPDATE_USER + '/' + id, data);
// export const updateOneUser = (id, customer) => api.update(url.UPDATE_USER + '/' + id, customer);


// delete USER
export const deleteUser = id => api.delete(url.DELETE_USER + '/' + id);


// ----------- Notificaiton --------------

// get Notifications
export const getNotifications = () => api.get(url.GET_NOTIFICATIONS);

export const getNotification = (id) => api.get(url.GET_NOTIFICATION + '/' + id);

// add NOTIFICATION
export const addNewNotification = customer => api.create(url.ADD_NEW_NOTIFICATION, customer);

// update NOTIFICATION
export const updateOneNotification = (id, customer) => api.update(url.UPDATE_NOTIFICATION + '/' + id, customer);

// delete NOTIFICATION
export const deleteNotification = id => api.delete(url.DELETE_NOTIFICATION + '/' + id);

//-----------Program-----------
// get Programs
export const getPrograms = () => api.get(url.GET_PROGRAMS);

export const getProgram = (id) => api.get(url.GET_PROGRAM + '/' + id);

// add PROGRAM
export const addNewProgram = customer => api.postFormData(url.ADD_NEW_PROGRAM, customer);

// update PROGRAM
export const updateOneProgram = (id, customer) => api.postFormData(url.UPDATE_PROGRAM + '/' + id, customer);

// delete PROGRAM
export const deleteProgram = id => api.delete(url.DELETE_PROGRAM + '/' + id);

// download PROGRAM
// export const downloadProgram = (id) => api.get(url.DOWNLOAD_PROGRAM + '/' + id);
export const downloadProgram = (id) => {
  // http://localhost:8080/api/program/fileById/1
  var str = config.API_URL + "api/program/fileById/" + id;
  return str;
}

//ProgramUpvote
export const ProgramUpVote = (id, customer) => api.update(url.PROGRAM_UP_VOTE + '/' + id, customer);

//ProgramDownvote
export const ProgramDownVote = (id, customer) => api.update(url.PROGRAM_DOWN_VOTE + '/' + id, customer);

//-----------ProgramCategory-----------
// get ProgramCategories
export const getProgramCategories = () => api.get(url.GET_PROGRAMCATEGORIES);

export const getProgramCategory = (id) => api.get(url.GET_PROGRAMCATEGORY + '/' + id);

// add PROGRAMCATEGORY
export const addNewProgramCategory = customer => api.create(url.ADD_NEW_PROGRAMCATEGORY, customer);

// update PROGRAMCATEGORY
export const updateOneProgramCategory = (id, customer) => api.update(url.UPDATE_PROGRAMCATEGORY + '/' + id, customer);

// delete PROGRAMCATEGORY
export const deleteProgramCategory = id => api.delete(url.DELETE_PROGRAMCATEGORY + '/' + id);

//---------------Suggestion-----------//

// get Suggestions
export const getSuggestions = () => api.get(url.GET_SUGGESTIONS);

export const getSuggestion = (id) => api.get(url.GET_SUGGESTION + '/' + id);

// add SUGGESTION
export const addNewSuggestion = customer => api.create(url.ADD_NEW_SUGGESTION, customer);

// update SUGGESTION
export const updateOneSuggestion = (id, customer) => api.update(url.UPDATE_SUGGESTION + '/' + id, customer);

// delete SUGGESTION
export const deleteSuggestion = id => api.delete(url.DELETE_SUGGESTION + '/' + id);


//---------------Degree-----------//

// get Degrees
export const getDegrees = () => api.get(url.GET_DegreeS);

export const getDegree = (id) => api.get(url.GET_Degree + '/' + id);

// ----------- Article --------------

// get Articles
export const getArticles = () => api.get(url.GET_ARTICLES);
export const getTrendingArticles = () => api.get(url.GET_TRENDING_ARTICLES);
export const getRecentArticles = () => api.get(url.GET_RECENT_ARTICLES);
export const getArticleFindTopUser = () => api.get(url.GET_ARTICLE_FIND_TOP_USER);
export const getArticle = (id) => api.get(url.GET_ARTICLE + '/' + id);
export const getArticleByCategoryId = (id) => api.get(url.GET_ARTICLEBYCATEGORYID + '/' + id);
// add ARTICLE
export const addNewArticle = customer => api.create(url.ADD_NEW_ARTICLE, customer);
export const getArticleByuserId = (id) => api.get(url.GET_ARTICLEBYUSERID + '/' + id);
export const getOneArticlebyId = (id) => api.get(url.GET_ONEARTICLEBYID + '/' + id);

// update ARTICLE
export const updateOneArticle = (id, customer) => api.update(url.UPDATE_ARTICLE + '/' + id, customer);

// delete ARTICLE
export const deleteArticle = id => api.delete(url.DELETE_ARTICLE + '/' + id);

// ----------- ArticleCategory --------------

// get ArticleCategories
export const getArticleCategories = () => api.get(url.GET_ARTICLECATEGORIES);

export const getArticleCategory = (id) => api.get(url.GET_ARTICLECATEGORY + '/' + id);

// add ARTICLECATEGORY
export const addNewArticleCategory = customer => api.create(url.ADD_NEW_ARTICLECATEGORY, customer);

// update ARTICLECATEGORY
export const updateOneArticleCategory = (id, customer) => api.update(url.UPDATE_ARTICLECATEGORY + '/' + id, customer);

// delete ARTICLECATEGORY
export const deleteArticleCategory = id => api.delete(url.DELETE_ARTICLECATEGORY + '/' + id);

//-----------Comment-----------
// get Comments
export const getComments = () => api.get(url.GET_COMMENTS);

export const getComment = (id) => api.get(url.GET_COMMENT + '/' + id);

// add COMMENT
export const addNewComment = customer => api.create(url.ADD_NEW_COMMENT, customer);

// update COMMENT
export const updateOneComment = (id, customer) => api.update(url.UPDATE_COMMENT + '/' + id, customer);

// delete COMMENT
export const deleteComment = id => api.delete(url.DELETE_COMMENT + '/' + id);

//-----------Avatar-----------
// get Avatars
export const getAvatars = () => api.get(url.GET_AVATARS);

export const getAvatar = (id) => api.get(url.GET_AVATAR + '/' + id);

// add AVATAR
export const addNewAvatar = customer => api.postFormData(url.ADD_NEW_AVATAR, customer);

// update AVATAR
export const updateOneAvatar = (id, customer) => api.postFormData(url.UPDATE_AVATAR + '/' + id, customer);

// delete AVATAR
export const deleteAvatar = id => api.delete(url.DELETE_AVATAR + '/' + id);

// download AVATAR
// export const downloadAvatar = (id) => api.get(url.DOWNLOAD_AVATAR + '/' + id);
export const downloadAvatar = (id) => {
  // http://localhost:8080/api/avatar/fileById/1
  if (id !== null && id!== undefined) {
    return config.API_URL + "api/avatar/fileById/" + id;
  }
  return "";
}

export const downloadCurrentAvatar = (myInformationSelector) => {
  // http://localhost:8080/api/avatar/fileById/1
  if(myInformationSelector) {
    if (!myInformationSelector.currentAvatarId) {
      myInformationSelector.currentAvatarId = 0;
    }
    let str = config.API_URL + "api/avatar/fileById/" + myInformationSelector.currentAvatarId;
    return str;
  }  
}



//-----------Setting-----------
// get Settings
export const getSettings = () => api.get(url.GET_SETTINGS);

export const getSetting = (id) => api.get(url.GET_SETTING + '/' + id);

export const getSettingByTitle = (title) => api.get(url.GET_SETTING_BY_TITLE + '/' + title);

// add SETTING
export const addNewSetting = customer => api.postFormData(url.ADD_NEW_SETTING, customer);

// update SETTING
export const updateOneSetting = (id, setting) => api.update(url.UPDATE_SETTING + '/' + id, setting);
export const updateOneSettingByTitle = (title, setting) => api.update(url.UPDATE_SETTING_BY_TITLE + '/' + title, setting);

// delete SETTING
export const deleteSetting = id => api.delete(url.DELETE_SETTING + '/' + id);


//-----------Media-----------
// get Medias
export const getMedias = () => api.get(url.GET_MEDIAS);

export const getMedia = (id) => api.get(url.GET_MEDIA + '/' + id);

// add MEDIA
export const addNewMedia = customer => api.postFormData(url.ADD_NEW_MEDIA, customer);

// update MEDIA
export const updateOneMedia = (id, customer) => api.postFormData(url.UPDATE_MEDIA + '/' + id, customer);

// delete MEDIA
export const deleteMedia = id => api.delete(url.DELETE_MEDIA + '/' + id);

// download MEDIA
// export const downloadMedia = (id) => api.get(url.DOWNLOAD_MEDIA + '/' + id);
export const downloadMedia = (id) => {
  // http://localhost:8080/api/media/fileById/1
  if (id !== null && id!== undefined) {
    return config.API_URL + "api/media/fileById/" + id;
  }
  return "";
}

//-----------ShipData-----------
// get ShipDatas
export const getShipDatas = () => api.get(url.GET_SHIP_DATAS);

export const getShipData = (id) => api.get(url.GET_SHIP_DATA + '/' + id);

// add DATA
export const addNewShipData = customer => api.postFormData(url.ADD_NEW_SHIP_DATA, customer);

// update DATA
export const updateShipData = (id, customer) => api.postFormData(url.UPDATE_SHIP_DATA + '/' + id, customer);

// delete DATA
export const deleteShipData = id => api.delete(url.DELETE_SHIP_DATA + '/' + id);

// get all top recommended data
export const getTopShipDatas = () => api.get(url.GET_ALL_TOP_SHIP_DATA);

// download MEDIA
// export const downloadMedia = (id) => api.get(url.DOWNLOAD_MEDIA + '/' + id);
export const downloadShipImage = (id) => {
  // http://localhost:8080/api/media/fileById/1
  var str = config.API_URL + "api/shipdata/fileById/" + id;
  return str;
}

//-----------LoadData-----------
// get LoadDatas
export const getLoadDatas = () => api.get(url.GET_LOAD_DATAS);

export const getLoadData = (id) => api.get(url.GET_LOAD_DATA + '/' + id);

// add DATA
export const addNewLoadData = customer => api.postFormData(url.ADD_NEW_LOAD_DATA, customer);

// update DATA
export const updateLoadData = (id, customer) => api.postFormData(url.UPDATE_LOAD_DATA + '/' + id, customer);

// delete DATA
export const deleteLoadData = id => api.delete(url.DELETE_LOAD_DATA + '/' + id);

// get all top recommended data
export const getTopLoadDatas = () => api.get(url.GET_ALL_TOP_LOAD_DATA);

export const downloadLoadImage = (id) => {
  // http://localhost:8080/api/media/fileById/1
  var str = config.API_URL + "api/loaddata/fileById/" + id;
  return str;
}

//-----------ProductData-----------
// get ProductDatas
export const getProductDatas = () => api.get(url.GET_PRODUCT_DATAS);

export const getProductData = (id) => api.get(url.GET_PRODUCT_DATA + '/' + id);

// add DATA
export const addNewProductData = customer => api.postFormData(url.ADD_NEW_PRODUCT_DATA, customer);

// update DATA
export const updateProductData = (id, customer) => api.postFormData(url.UPDATE_PRODUCT_DATA + '/' + id, customer);

// delete DATA
export const deleteProductData = id => api.delete(url.DELETE_PRODUCT_DATA + '/' + id);

// get all top recommended data
export const getTopProductDatas = () => api.get(url.GET_ALL_TOP_PRODUCT_DATA);

export const downloadProductImage = (id) => {
  // http://localhost:8080/api/media/fileById/1
  var str = config.API_URL + "api/productdata/fileById/" + id;
  return str;
}

//-----------GoodData-----------
// get GoodDatas
export const getGoodDatas = () => api.get(url.GET_GOOD_DATAS);

export const getGoodData = (id) => api.get(url.GET_GOOD_DATA + '/' + id);

// add DATA
export const addNewGoodData = customer => api.postFormData(url.ADD_NEW_GOOD_DATA, customer);

// update DATA
export const updateGoodData = (id, customer) => api.postFormData(url.UPDATE_GOOD_DATA + '/' + id, customer);

// delete DATA
export const deleteGoodData = id => api.delete(url.DELETE_GOOD_DATA + '/' + id);

// get all top recommended data
export const getTopGoodDatas = () => api.get(url.GET_ALL_TOP_GOOD_DATA);

export const downloadGoodImage = (id) => {
  // http://localhost:8080/api/media/fileById/1
  var str = config.API_URL + "api/gooddata/fileById/" + id;
  return str;
}

//-----------DataCategory-----------
// get DataCategories
export const getDataCategories = () => api.get(url.GET_DATACATEGORIES);

export const getDataCategory = (id) => api.get(url.GET_DATACATEGORY + '/' + id);

// add DATACATEGORY
export const addNewDataCategory = customer => api.create(url.ADD_NEW_DATACATEGORY, customer);

// update DATACATEGORY
export const updateOneDataCategory = (id, customer) => api.update(url.UPDATE_DATACATEGORY + '/' + id, customer);

// delete DATACATEGORY
export const deleteDataCategory = id => api.delete(url.DELETE_DATACATEGORY + '/' + id);


// get Campuses
export const getCampuses = () => api.get(url.GET_CAMPUSES);
export const getCampus = (id) => api.get(url.GET_CAMPUS + '/' + id);

// add CAMPUS
export const addNewCampus = customer => api.create(url.ADD_NEW_CAMPUS, customer);

// update CAMPUS
export const updateOneCampus = (id, customer) => api.update(url.UPDATE_CAMPUS + '/' + id, customer);

// delete CAMPUS
export const deleteCampus = id => api.delete(url.DELETE_CAMPUS + '/' + id);

//upvote
export const upVote = (id, customer) => api.update(url.UP_VOTE + '/' + id, customer);

//downvote
export const downVote = (id, customer) => api.update(url.DOWN_VOTE + '/' + id, customer);

// ----------- CampusCategory --------------

// get CampusCategories
export const getCampusCategories = () => api.get(url.GET_CAMPUSCATEGORIES);

export const getCampusCategory = (id) => api.get(url.GET_CAMPUSCATEGORY + '/' + id);

// add CAMPUSCATEGORY
export const addNewCampusCategory = customer => api.create(url.ADD_NEW_CAMPUSCATEGORY, customer);

// update CAMPUSCATEGORY
export const updateOneCampusCategory = (id, customer) => api.update(url.UPDATE_CAMPUSCATEGORY + '/' + id, customer);

// delete CAMPUSCATEGORY
export const deleteCampusCategory = id => api.delete(url.DELETE_CAMPUSCATEGORY + '/' + id);

//--------Question--------
// get Questions
export const getQuestions = () => api.get(url.GET_QUESTIONS);
export const findSomeQuestions = (degreeId, level) => api.get(url.GET_SOME_QUESTIONS + '/' + degreeId + '/' + level);
export const getQuestion = (id) => api.get(url.GET_QUESTION + '/' + id);

// add QUESTION
export const addNewQuestion = customer => api.create(url.ADD_NEW_QUESTION, customer);

// update QUESTION
export const updateOneQuestion = (id, customer) => api.update(url.UPDATE_QUESTION + '/' + id, customer);

// delete QUESTION
export const deleteQuestion = id => api.delete(url.DELETE_QUESTION + '/' + id);

// ----------- Answer --------------

// get Answers
export const getAnswers = (id) => api.get(url.GET_ANSWERS + '/' + id);

export const getAnswer = (id) => api.get(url.GET_ANSWER + '/' + id);

// add ANSWER
export const addNewAnswer = customer => api.create(url.ADD_NEW_ANSWER, customer);

// update ANSWER
export const updateOneAnswer = (id, customer) => api.update(url.UPDATE_ANSWER + '/' + id, customer);

// delete ANSWER
export const deleteAnswer = id => api.delete(url.DELETE_ANSWER + '/' + id);

// -----------
export const addNewDataPurchaseHistory = data => api.create(url.ADD_NEW_DATA_PURCHASE_HISTORY, data);
export const getTraceViews = (id) => api.get(url.GET_DATA_PURCHASE_HISTORY_ALL + '/' + id);
// -----------
export const addNewTestPurchaseHistory = data => api.create(url.ADD_NEW_TEST_PURCHASE_HISTORY, data);