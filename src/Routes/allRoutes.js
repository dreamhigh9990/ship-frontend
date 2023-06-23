import React from "react";
import { Redirect } from "react-router-dom";

//Dashboard
import DashboardAnalytics from "../pages/DashboardAnalytics";
import DashboardCrm from "../pages/DashboardCrm";
import DashboardEcommerce from "../pages/DashboardEcommerce";

import DashboardCrypto from "../pages/DashboardCrypto";
import DashboardProject from "../pages/DashboardProject";

//Calendar
// Email box
import MailInbox from "../pages/EmailInbox";

//Chat
import Chat from "../pages/Chat";
import Calendar from "../pages/Calendar";

// Project
import ProjectList from "../pages/Projects/ProjectList";
import ProjectOverview from "../pages/Projects/ProjectOverview";
import CreateProject from "../pages/Projects/CreateProject";

//Task
import TaskDetails from "../pages/Tasks/TaskDetails";
import TaskList from "../pages/Tasks/TaskList";
import KanbanBoard from "../pages/Tasks/KanbanBoard/Index";

//Transactions
import Transactions from '../pages/Crypto/Transactions';
import BuySell from '../pages/Crypto/BuySell';
import CryproOrder from '../pages/Crypto/CryptoOrder';
import MyWallet from '../pages/Crypto/MyWallet';
import ICOList from '../pages/Crypto/ICOList';
import KYCVerification from '../pages/Crypto/KYCVerification';

//Crm Pages
import CrmCompanies from "../pages/Crm/CrmCompanies";
import CrmContacts from "../pages/Crm/CrmContacts";
import CrmDeals from "../pages/Crm/CrmDeals/index";
import CrmLeads from "../pages/Crm/CrmLeads/index";

//Invoices
import InvoiceList from "../pages/Invoices/InvoiceList";
import InvoiceCreate from "../pages/Invoices/InvoiceCreate";
import InvoiceDetails from "../pages/Invoices/InvoiceDetails";

// Support Tickets
import ListView from '../pages/SupportTickets/ListView';
import TicketsDetails from '../pages/SupportTickets/TicketsDetails';

// //Ecommerce Pages
import EcommerceProducts from "../pages/Ecommerce/EcommerceProducts/index";
import EcommerceProductDetail from "../pages/Ecommerce/EcommerceProducts/EcommerceProductDetail";
import EcommerceAddProduct from "../pages/Ecommerce/EcommerceProducts/EcommerceAddProduct";
import EcommerceOrders from "../pages/Ecommerce/EcommerceOrders/index";
import EcommerceOrderDetail from "../pages/Ecommerce/EcommerceOrders/EcommerceOrderDetail";
import EcommerceCustomers from "../pages/Ecommerce/EcommerceCustomers/index";
import EcommerceCart from "../pages/Ecommerce/EcommerceCart";
import EcommerceCheckout from "../pages/Ecommerce/EcommerceCheckout";
import EcommerceSellers from "../pages/Ecommerce/EcommerceSellers/index";
import EcommerceSellerDetail from "../pages/Ecommerce/EcommerceSellers/EcommerceSellerDetail";

// Base Ui
import UiAlerts from "../pages/BaseUi/UiAlerts/UiAlerts";
import UiBadges from "../pages/BaseUi/UiBadges/UiBadges";
import UiButtons from "../pages/BaseUi/UiButtons/UiButtons";
import UiColors from "../pages/BaseUi/UiColors/UiColors";
import UiCards from "../pages/BaseUi/UiCards/UiCards";
import UiCarousel from "../pages/BaseUi/UiCarousel/UiCarousel";
import UiDropdowns from "../pages/BaseUi/UiDropdowns/UiDropdowns";
import UiGrid from "../pages/BaseUi/UiGrid/UiGrid";
import UiImages from "../pages/BaseUi/UiImages/UiImages";
import UiTabs from "../pages/BaseUi/UiTabs/UiTabs";
import UiAccordions from "../pages/BaseUi/UiAccordion&Collapse/UiAccordion&Collapse";
import UiModals from "../pages/BaseUi/UiModals/UiModals";
import UiOffcanvas from "../pages/BaseUi/UiOffcanvas/UiOffcanvas";
import UiPlaceholders from "../pages/BaseUi/UiPlaceholders/UiPlaceholders";
import UiProgress from "../pages/BaseUi/UiProgress/UiProgress";
import UiNotifications from "../pages/BaseUi/UiNotifications/UiNotifications";
import UiMediaobject from "../pages/BaseUi/UiMediaobject/UiMediaobject";
import UiEmbedVideo from "../pages/BaseUi/UiEmbedVideo/UiEmbedVideo";
import UiTypography from "../pages/BaseUi/UiTypography/UiTypography";
import UiList from "../pages/BaseUi/UiLists/UiLists";
import UiGeneral from "../pages/BaseUi/UiGeneral/UiGeneral";
import UiRibbons from "../pages/BaseUi/UiRibbons/UiRibbons";
import UiUtilities from "../pages/BaseUi/UiUtilities/UiUtilities";

// Advance Ui
import UiNestableList from "../pages/AdvanceUi/UiNestableList/UiNestableList";
import UiScrollbar from "../pages/AdvanceUi/UiScrollbar/UiScrollbar";
import UiAnimation from "../pages/AdvanceUi/UiAnimation/UiAnimation";
import UiTour from "../pages/AdvanceUi/UiTour/UiTour";
import UiSwiperSlider from "../pages/AdvanceUi/UiSwiperSlider/UiSwiperSlider";
import UiRatings from "../pages/AdvanceUi/UiRatings/UiRatings";
import UiHighlight from "../pages/AdvanceUi/UiHighlight/UiHighlight";

// Widgets
import Widgets from '../pages/Widgets/Index';

//Forms
import BasicElements from "../pages/Forms/BasicElements/BasicElements";
import FormSelect from "../pages/Forms/FormSelect/FormSelect";
import FormEditor from "../pages/Forms/FormEditor/FormEditor";
import CheckBoxAndRadio from "../pages/Forms/CheckboxAndRadio/CheckBoxAndRadio";
import Masks from "../pages/Forms/Masks/Masks";
import FileUpload from "../pages/Forms/FileUpload/FileUpload";
import FormPickers from "../pages/Forms/FormPickers/FormPickers";
import FormRangeSlider from "../pages/Forms/FormRangeSlider/FormRangeSlider";
import Formlayouts from "../pages/Forms/FormLayouts/Formlayouts";
import FormValidation from "../pages/Forms/FormValidation/FormValidation";
import FormWizard from "../pages/Forms/FormWizard/FormWizard";
import FormAdvanced from "../pages/Forms/FormAdvanced/FormAdvanced";

//Tables
import BasicTables from '../pages/Tables/BasicTables/BasicTables';
import GridTables from '../pages/Tables/GridTables/GridTables';
import ListTables from '../pages/Tables/ListTables/ListTables';

//Icon pages
import RemixIcons from "../pages/Icons/RemixIcons/RemixIcons";
import BoxIcons from "../pages/Icons/BoxIcons/BoxIcons";
import MaterialDesign from "../pages/Icons/MaterialDesign/MaterialDesign";
import FeatherIcons from "../pages/Icons/FeatherIcons/FeatherIcons";
import LineAwesomeIcons from "../pages/Icons/LineAwesomeIcons/LineAwesomeIcons";

//Maps
import GoogleMaps from "../pages/Maps/GoogleMaps/GoogleMaps";
import VectorMaps from "../pages/Maps/VectorMaps/VectorMaps";
import LeafletMaps from "../pages/Maps/LeafletMaps/LeafletMaps";

//AuthenticationInner pages
import BasicSignIn from '../pages/AuthenticationInner/Login/BasicSignIn';
import CoverSignIn from '../pages/AuthenticationInner/Login/CoverSignIn';
import BasicSignUp from '../pages/AuthenticationInner/Register/BasicSignUp';
import CoverSignUp from "../pages/AuthenticationInner/Register/CoverSignUp";
import BasicPasswReset from '../pages/AuthenticationInner/PasswordReset/BasicPasswReset';
//pages
import Starter from '../pages/Pages/Starter/Starter';
import SimplePage from '../pages/Pages/Profile/SimplePage/SimplePage';
import Settings from '../pages/Pages/Profile/Settings/Settings';
import Team from '../pages/Pages/Team/Team';
import Timeline from '../pages/Pages/Timeline/Timeline';
import Faqs from '../pages/Pages/Faqs/Faqs';
import Pricing from '../pages/Pages/Pricing/Pricing';
import Gallery from '../pages/Pages/Gallery/Gallery';
import Maintenance from '../pages/Pages/Maintenance/Maintenance';
import ComingSoon from '../pages/Pages/ComingSoon/ComingSoon';
import SiteMap from '../pages/Pages/SiteMap/SiteMap';
import SearchResults from '../pages/Pages/SearchResults/SearchResults';
// Landing Index
import Index from "../pages/Landing";

import CoverPasswReset from '../pages/AuthenticationInner/PasswordReset/CoverPasswReset';
import BasicLockScreen from '../pages/AuthenticationInner/LockScreen/BasicLockScr';
import CoverLockScreen from '../pages/AuthenticationInner/LockScreen/CoverLockScr';
import BasicLogout from '../pages/AuthenticationInner/Logout/BasicLogout';
import CoverLogout from '../pages/AuthenticationInner/Logout/CoverLogout';
import BasicSuccessMsg from '../pages/AuthenticationInner/SuccessMessage/BasicSuccessMsg';
import CoverSuccessMsg from '../pages/AuthenticationInner/SuccessMessage/CoverSuccessMsg';
import BasicTwosVerify from '../pages/AuthenticationInner/TwoStepVerification/BasicTwosVerify';
import CoverTwosVerify from '../pages/AuthenticationInner/TwoStepVerification/CoverTwosVerify';
import Basic404 from '../pages/AuthenticationInner/Errors/Basic404';
import Cover404 from '../pages/AuthenticationInner/Errors/Cover404';
import Alt404 from '../pages/AuthenticationInner/Errors/Alt404';
import Error500 from '../pages/AuthenticationInner/Errors/Error500';

//login
import Login from "../pages/Authentication/Login";
import ForgetPasswordPage from "../pages/Authentication/ForgetPassword";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";

//Charts
import LineCharts from "../pages/Charts/ApexCharts/LineCharts";
import AreaCharts from "../pages/Charts/ApexCharts/AreaCharts";
import ColumnCharts from "../pages/Charts/ApexCharts/ColumnCharts";
import BarCharts from "../pages/Charts/ApexCharts/BarCharts";
import MixedCharts from "../pages/Charts/ApexCharts/MixedCharts";
import TimelineCharts from "../pages/Charts/ApexCharts/TimelineCharts";
import CandlestickChart from "../pages/Charts/ApexCharts/CandlestickChart";
import BoxplotCharts from "../pages/Charts/ApexCharts/BoxplotCharts";
import BubbleChart from "../pages/Charts/ApexCharts/BubbleChart";
import ScatterCharts from "../pages/Charts/ApexCharts/ScatterCharts";
import HeatmapCharts from "../pages/Charts/ApexCharts/HeatmapCharts";
import TreemapCharts from "../pages/Charts/ApexCharts/TreemapCharts";
import PieCharts from "../pages/Charts/ApexCharts/PieCharts";
import RadialbarCharts from "../pages/Charts/ApexCharts/RadialbarCharts";
import RadarCharts from "../pages/Charts/ApexCharts/RadarCharts";
import PolarCharts from "../pages/Charts/ApexCharts/PolarCharts";

import ChartsJs from "../pages/Charts/ChartsJs/index";
import Echarts from "../pages/Charts/ECharts/index";

//Mine Page
import Mine from "../pages/Pages/Mine/Mine";

//QuestionService PAge
import QuestionService from "../pages/Pages/QuestionService/Questionservice";

// BlogService Page
import BlogService from "../pages/Pages/BlogService/BlogService"
import ArticleKind from "../pages/Pages/BlogService/ArticleKind"
import ArticleMan from "../pages/Pages/BlogService/ArticleMan"
import BlogServiceDetail from "../pages/Pages/BlogService/BlogServiceDetail"

import TestPage from "../pages/Pages/Test/TestPage";
import TestPageStart from "../pages/Pages/Test/TestpageStart";


import HomePage from "../pages/Pages/HomePage/index";
import StudyDetail from "../pages/Pages/StudyField/detail";
import StudyField from "../pages/Pages/StudyField/index";
import Software from "../pages/Pages/Software/index";
import BuySoftware from "../pages/Pages/Software/buySoftware";
import CompanyIntroduction from "../pages/Pages/CompanyIntroduction/index";
import ViewData from "../pages/Pages/ViewData/ViewData";
import ShipDetails from "../pages/Pages/ViewData/DataDetails/ShipDetails";
import LoadDetails from "../pages/Pages/ViewData/DataDetails/LoadDetails";
import ProductDetails from "../pages/Pages/ViewData/DataDetails/ProductDetails";
import GoodDetails from "../pages/Pages/ViewData/DataDetails/GoodDetails";
import NewDataVote from "../pages/Pages/ViewData/NewDataVote/NewDataVote";


// Admin Page
// User Section
import Users from "../pages/Admin/Users/index";
import UserDetail from "../pages/Admin/Users/UserDetail";
import AddUser from "../pages/Admin/Users/AddUser";

// Notification Section
import Notifications from "../pages/Admin/Notifications/index";
import NotificationDetail from "../pages/Admin/Notifications/NotificationDetail";
import AddNotification from "../pages/Admin/Notifications/AddNotification";

// Program Section
import Programs from "../pages/Admin/Programs/index";
import ProgramDetail from "../pages/Admin/Programs/ProgramDetail";
import AddProgram from "../pages/Admin/Programs/AddProgram";

// ProgramCategory Section
import ProgramCategories from "../pages/Admin/ProgramCategories/index";
import ProgramCategoryDetail from "../pages/Admin/ProgramCategories/ProgramCategoryDetail";
import AddProgramCategory from "../pages/Admin/ProgramCategories/AddProgramCategory";

// Suggestion Section
import Suggestions from "../pages/Admin/Suggestions/index";
import SuggestionDetail from "../pages/Admin/Suggestions/SuggestionDetail";
import AddSuggestion from "../pages/Admin/Suggestions/AddSuggestion";

// Degree Section
import Degrees from "../pages/Admin/Degrees/index";
import DegreeDetail from "../pages/Admin/Degrees/DegreeDetail";

// Article Section
import Articles from "../pages/Admin/Articles/index";
import ArticleDetail from "../pages/Admin/Articles/ArticleDetail";
import AddArticle from "../pages/Admin/Articles/AddArticle";

// ArticleCategory Section
import ArticleCategories from "../pages/Admin/ArticleCategories/index";
import ArticleCategoryDetail from "../pages/Admin/ArticleCategories/ArticleCategoryDetail";
import AddArticleCategory from "../pages/Admin/ArticleCategories/AddArticleCategory";

// Comment Section
import Comments from "../pages/Admin/Comments/index";
import CommentDetail from "../pages/Admin/Comments/CommentDetail";
import AddComment from "../pages/Admin/Comments/AddComment";

// Data Section
// import Datas from "../pages/Admin/Datas/index";
// import DataDetail from "../pages/Admin/Datas/DataDetail";
// import AddData from "../pages/Admin/Datas/AddData";

// DataCategory Section
import DataCategories from "../pages/Admin/DataCategories/index";
import DataCategoryDetail from "../pages/Admin/DataCategories/DataCategoryDetail";
import AddDataCategory from "../pages/Admin/DataCategories/AddDataCategory";

// Campus Section
import Campuses from "../pages/Admin/Campus/index";
import CampusDetail from "../pages/Admin/Campus/CampusDetail";
import AddCampus from "../pages/Admin/Campus/AddCampus";

// CampusCategory Section
import CampusCategories from "../pages/Admin/CampusCategories/index";
import CampusCategoryDetail from "../pages/Admin/CampusCategories/CampusCategoryDetail";
import AddCampusCategory from "../pages/Admin/CampusCategories/AddCampusCategory";

// Avatar Section
import Avatars from "../pages/Admin/Avatars/index";
import AvatarDetail from "../pages/Admin/Avatars/AvatarDetail";
import AddAvatar from "../pages/Admin/Avatars/AddAvatar";

// ShipData Section
import ShipDatas from "../pages/Admin/ShipDatas/index";
import ShipDataDetail from "../pages/Admin/ShipDatas/ShipDataDetail";
import AddShipData from "../pages/Admin/ShipDatas/AddShipData";

// ProductData Section
import ProductDatas from "../pages/Admin/ProductDatas/index";
import ProductDataDetail from "../pages/Admin/ProductDatas/ProductDataDetail";
import AddProductData from "../pages/Admin/ProductDatas/AddProductData";

// GoodData Section
import GoodDatas from "../pages/Admin/GoodDatas/index";
import GoodDataDetail from "../pages/Admin/GoodDatas/GoodDataDetail";
import AddGoodData from "../pages/Admin/GoodDatas/AddGoodData";

// LoadData Section
import LoadDatas from "../pages/Admin/LoadDatas/index";
import LoadDataDetail from "../pages/Admin/LoadDatas/LoadDataDetail";
import AddLoadData from "../pages/Admin/LoadDatas/AddLoadData";

// Media Section
import Medias from "../pages/Admin/Medias/index";
import MediaDetail from "../pages/Admin/Medias/MediaDetail";
import AddMedia from "../pages/Admin/Medias/AddMedia";

// Settings Section
import AdminSettings from "../pages/Admin/Settings/index";

// Question Section
import Questions from "../pages/Admin/Questions/index";
import QuestionDetail from "../pages/Admin/Questions/QuestionDetail";
import AddQuestion from "../pages/Admin/Questions/AddQuestion";

// Answer Section
import Answers from "../pages/Admin/Answers/index";
import AnswerDetail from "../pages/Admin/Answers/AnswerDetail";
import AddAnswer from "../pages/Admin/Answers/AddAnswer";

const authProtectedRoutes = [
  { path: "/dashboard-analytics", component: DashboardAnalytics },
  { path: "/dashboard-crm", component: DashboardCrm },
  { path: "/dashboard", component: DashboardEcommerce },
  { path: "/dashboard-crypto", component: DashboardCrypto },
  { path: "/dashboard-projects", component: DashboardProject },
  { path: "/apps-calendar", component: Calendar },
  { path: "/apps-ecommerce-products", component: EcommerceProducts },
  { path: "/apps-ecommerce-product-details", component: EcommerceProductDetail },
  { path: "/apps-ecommerce-add-product", component: EcommerceAddProduct },
  { path: "/apps-ecommerce-orders", component: EcommerceOrders },
  { path: "/apps-ecommerce-order-details", component: EcommerceOrderDetail },
  { path: "/apps-ecommerce-customers", component: EcommerceCustomers },
  { path: "/apps-ecommerce-cart", component: EcommerceCart },
  { path: "/apps-ecommerce-checkout", component: EcommerceCheckout },
  { path: "/apps-ecommerce-sellers", component: EcommerceSellers },
  { path: "/apps-ecommerce-seller-details", component: EcommerceSellerDetail },

  //Chat
  { path: "/apps-chat", component: Chat },

  //EMail
  { path: "/apps-mailbox", component: MailInbox },

  //Projects
  { path: "/apps-projects-list", component: ProjectList },
  { path: "/apps-projects-overview", component: ProjectOverview },
  { path: "/apps-projects-create", component: CreateProject },

  //Task
  { path: "/apps-tasks-list-view", component: TaskList },
  { path: "/apps-tasks-details", component: TaskDetails },
  { path: "/apps-tasks-kanban", component: KanbanBoard },
  //Crm
  { path: "/apps-crm-contacts", component: CrmContacts },
  { path: "/apps-crm-companies", component: CrmCompanies },
  { path: "/apps-crm-deals", component: CrmDeals },
  { path: "/apps-crm-leads", component: CrmLeads },

  //Invoices
  { path: "/apps-invoices-list", component: InvoiceList },
  { path: "/apps-invoices-details", component: InvoiceDetails },
  { path: "/apps-invoices-create", component: InvoiceCreate },

  //Supports Tickets
  { path: "/apps-tickets-list", component: ListView },
  { path: "/apps-tickets-details", component: TicketsDetails },

  //transactions
  { path: "/apps-crypto-transactions", component: Transactions },
  { path: "/apps-crypto-buy-sell", component: BuySell },
  { path: "/apps-crypto-orders", component: CryproOrder },
  { path: "/apps-crypto-wallet", component: MyWallet },
  { path: "/apps-crypto-ico", component: ICOList },
  { path: "/apps-crypto-kyc", component: KYCVerification },

  //charts
  { path: "/charts-apex-line", component: LineCharts },
  { path: "/charts-apex-area", component: AreaCharts },
  { path: "/charts-apex-column", component: ColumnCharts },
  { path: "/charts-apex-bar", component: BarCharts },
  { path: "/charts-apex-mixed", component: MixedCharts },
  { path: "/charts-apex-timeline", component: TimelineCharts },
  { path: "/charts-apex-candlestick", component: CandlestickChart },
  { path: "/charts-apex-boxplot", component: BoxplotCharts },
  { path: "/charts-apex-bubble", component: BubbleChart },
  { path: "/charts-apex-scatter", component: ScatterCharts },
  { path: "/charts-apex-heatmap", component: HeatmapCharts },
  { path: "/charts-apex-treemap", component: TreemapCharts },
  { path: "/charts-apex-pie", component: PieCharts },
  { path: "/charts-apex-radialbar", component: RadialbarCharts },
  { path: "/charts-apex-radar", component: RadarCharts },
  { path: "/charts-apex-polar", component: PolarCharts },

  { path: "/charts-chartjs", component: ChartsJs },
  { path: "/charts-echarts", component: Echarts },


  // Base Ui
  { path: "/ui-alerts", component: UiAlerts },
  { path: "/ui-badges", component: UiBadges },
  { path: "/ui-buttons", component: UiButtons },
  { path: "/ui-colors", component: UiColors },
  { path: "/ui-cards", component: UiCards },
  { path: "/ui-carousel", component: UiCarousel },
  { path: "/ui-dropdowns", component: UiDropdowns },
  { path: "/ui-grid", component: UiGrid },
  { path: "/ui-images", component: UiImages },
  { path: "/ui-tabs", component: UiTabs },
  { path: "/ui-accordions", component: UiAccordions },
  { path: "/ui-modals", component: UiModals },
  { path: "/ui-offcanvas", component: UiOffcanvas },
  { path: "/ui-placeholders", component: UiPlaceholders },
  { path: "/ui-progress", component: UiProgress },
  { path: "/ui-notifications", component: UiNotifications },
  { path: "/ui-media", component: UiMediaobject },
  { path: "/ui-embed-video", component: UiEmbedVideo },
  { path: "/ui-typography", component: UiTypography },
  { path: "/ui-lists", component: UiList },
  { path: "/ui-general", component: UiGeneral },
  { path: "/ui-ribbons", component: UiRibbons },
  { path: "/ui-utilities", component: UiUtilities },

  // Advance Ui
  { path: "/advance-ui-nestable", component: UiNestableList },
  { path: "/advance-ui-scrollbar", component: UiScrollbar },
  { path: "/advance-ui-animation", component: UiAnimation },
  { path: "/advance-ui-tour", component: UiTour },
  { path: "/advance-ui-swiper", component: UiSwiperSlider },
  { path: "/advance-ui-ratings", component: UiRatings },
  { path: "/advance-ui-highlight", component: UiHighlight },

  // Widgets
  { path: "/widgets", component: Widgets },

  // Forms
  { path: "/forms-elements", component: BasicElements },
  { path: "/forms-select", component: FormSelect },
  { path: "/forms-editors", component: FormEditor },
  { path: "/forms-checkboxes-radios", component: CheckBoxAndRadio },
  { path: "/forms-masks", component: Masks },
  { path: "/forms-file-uploads", component: FileUpload },
  { path: "/forms-pickers", component: FormPickers },
  { path: "/forms-range-sliders", component: FormRangeSlider },
  { path: "/forms-layouts", component: Formlayouts },
  { path: "/forms-validation", component: FormValidation },
  { path: "/forms-wizard", component: FormWizard },
  { path: "/forms-advanced", component: FormAdvanced },

  //Tables
  { path: "/tables-basic", component: BasicTables },
  { path: "/tables-gridjs", component: GridTables },
  { path: "/tables-listjs", component: ListTables },

  //Icons
  { path: "/icons-remix", component: RemixIcons },
  { path: "/icons-boxicons", component: BoxIcons },
  { path: "/icons-materialdesign", component: MaterialDesign },
  { path: "/icons-feather", component: FeatherIcons },
  { path: "/icons-lineawesome", component: LineAwesomeIcons },

  //Maps
  { path: "/maps-google", component: GoogleMaps },
  { path: "/maps-vector", component: VectorMaps },
  { path: "/maps-leaflet", component: LeafletMaps },

  //Pages
  { path: "/pages-starter", component: Starter },
  { path: "/pages-profile", component: SimplePage },
  { path: "/pages-profile-settings", component: Settings },
  { path: "/pages-team", component: Team },
  { path: "/pages-timeline", component: Timeline },
  { path: "/pages-faqs", component: Faqs },
  { path: "/pages-gallery", component: Gallery },
  { path: "/pages-pricing", component: Pricing },
  { path: "/pages-sitemap", component: SiteMap },
  { path: "/pages-search-results", component: SearchResults },

  // Admin
  // Users
  { path: "/admin-users", component: Users },
  { path: "/admin-user-details/:id", component: UserDetail },
  { path: "/admin-add-user", component: AddUser },
  { path: "/admin-add-user/:id", component: AddUser },

  // Notifications
  { path: "/admin-notifications", component: Notifications },
  { path: "/admin-notification-details/:id", component: NotificationDetail },
  { path: "/admin-add-notification", component: AddNotification },
  { path: "/admin-add-notification/:id", component: AddNotification },


  // Programs
  { path: "/admin-programs", component: Programs },
  { path: "/admin-program-details/:id", component: ProgramDetail },
  { path: "/admin-add-program", component: AddProgram },
  { path: "/admin-add-program/:id", component: AddProgram },

  // ProgramCategory
  { path: "/admin-programCategories", component: ProgramCategories },
  { path: "/admin-programCategory-details/:id", component: ProgramCategoryDetail },
  { path: "/admin-add-programCategory", component: AddProgramCategory },
  { path: "/admin-add-programCategory/:id", component: AddProgramCategory },

  //Suggestion
  { path: "/admin-suggestions", component: Suggestions },
  { path: "/admin-suggestion-details/:id", component: SuggestionDetail },
  { path: "/admin-add-suggestion", component: AddSuggestion },
  { path: "/admin-add-suggestion/:id", component: AddSuggestion },

  //Degree
  { path: "/admin-degrees", component: Degrees },
  { path: "/admin-degree-details/:id", component: DegreeDetail },

  // Articles
  { path: "/admin-articles", component: Articles },
  { path: "/admin-article-details/:id", component: ArticleDetail },
  { path: "/admin-add-article", component: AddArticle },
  { path: "/admin-add-article/:id", component: AddArticle },

  // ArticleCategory
  { path: "/admin-articleCategories", component: ArticleCategories },
  { path: "/admin-articleCategory-details/:id", component: ArticleCategoryDetail },
  { path: "/admin-add-articleCategory", component: AddArticleCategory },
  { path: "/admin-add-articleCategory/:id", component: AddArticleCategory },

  // Comments
  { path: "/admin-comments", component: Comments },
  { path: "/admin-comment-details/:id", component: CommentDetail },
  { path: "/admin-add-comment", component: AddComment },
  { path: "/admin-add-comment/:id", component: AddComment },

  // DataCategory
  { path: "/admin-dataCategories", component: DataCategories },
  { path: "/admin-dataCategory-details/:id", component: DataCategoryDetail },
  { path: "/admin-add-dataCategory", component: AddDataCategory },
  { path: "/admin-add-dataCategory/:id", component: AddDataCategory },

  // Campuses
  { path: "/admin-campuses", component: Campuses },
  { path: "/admin-campus-details/:id", component: CampusDetail },
  { path: "/admin-add-campus", component: AddCampus },
  { path: "/admin-add-campus/:id", component: AddCampus },

  // CampusCategory
  { path: "/admin-campusCategories", component: CampusCategories },
  { path: "/admin-campusCategory-details/:id", component: CampusCategoryDetail },
  { path: "/admin-add-campusCategory", component: AddCampusCategory },
  { path: "/admin-add-campusCategory/:id", component: AddCampusCategory },


  // Avatars
  { path: "/admin-avatars", component: Avatars },
  { path: "/admin-avatar-details/:id", component: AvatarDetail },
  { path: "/admin-add-avatar", component: AddAvatar },
  { path: "/admin-add-avatar/:id", component: AddAvatar },

  // ShipDatas
  { path: "/admin-shipDatas", component: ShipDatas },
  { path: "/admin-shipData-details/:id", component: ShipDataDetail },
  { path: "/admin-add-shipData", component: AddShipData },
  { path: "/admin-add-shipData/:id", component: AddShipData },

  // ProductDatas
  { path: "/admin-productDatas", component: ProductDatas },
  { path: "/admin-productData-details/:id", component: ProductDataDetail },
  { path: "/admin-add-productData", component: AddProductData },
  { path: "/admin-add-productData/:id", component: AddProductData },

   // GoodDatas
   { path: "/admin-goodDatas", component: GoodDatas },
   { path: "/admin-goodData-details/:id", component: GoodDataDetail },
   { path: "/admin-add-goodData", component: AddGoodData },
   { path: "/admin-add-goodData/:id", component: AddGoodData },

   // LoadDatas
   { path: "/admin-loadDatas", component: LoadDatas },
   { path: "/admin-loadData-details/:id", component: LoadDataDetail },
   { path: "/admin-add-loadData", component: AddLoadData },
   { path: "/admin-add-loadData/:id", component: AddLoadData },

  // Media
  { path: "/admin-medias", component: Medias },
  { path: "/admin-media-details/:id", component: MediaDetail },
  { path: "/admin-add-media", component: AddMedia },
  { path: "/admin-add-media/:id", component: AddMedia },

  // Settings
  { path: "/admin-settings", component: AdminSettings },


  // Questions
  { path: "/admin-questions", component: Questions },
  { path: "/admin-question-details/:id", component: QuestionDetail },
  { path: "/admin-add-question", component: AddQuestion },
  { path: "/admin-add-question/:id", component: AddQuestion },

  // Answers
  { path: "/admin-answers", component: Answers },
  { path: "/admin-answer-details/:id", component: AnswerDetail },
  { path: "/admin-add-answer", component: AddAnswer },
  { path: "/admin-add-answer/:id", component: AddAnswer },

  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/pages-home-page" />,
  },
];

const publicRoutes = [

  // Authentication Page
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPasswordPage },
  { path: "/register", component: Register },

  { path: "/pages-mine", component: Mine },
  { path: "/test-test-page-start", component: TestPageStart },
  { path: "/pages-study-field", component: StudyField },
  { path: "/pages-company-introduction", component: CompanyIntroduction },
  { path: "/pages-software", component: Software },
  { path: "/pages-software-buySoftware/:id", component: BuySoftware },
  { path: "/pages-question-service", component: QuestionService },
  { path: "/pages-blog-service", component: BlogService },
  { path: "/pages-blog-service/article-kind/:id", component: ArticleKind },
  { path: "/pages-blog-service/article-man/:id", component: ArticleMan },
  { path: "/pages-blog-service/detail/:id", component: BlogServiceDetail },

  //view ship data 
  { path: "/view-data", component: ViewData },
  { path: "/ship-details/:id", component: ShipDetails },
  { path: "/load-details/:id", component: LoadDetails },
  { path: "/product-details/:id", component: ProductDetails },
  { path: "/good-details/:id", component: GoodDetails },
  { path: "/new-data-vote", component: NewDataVote },
  { path: "/new-data-vote/:id", component: NewDataVote },
  { path: "/pages-study-detail/:id", component: StudyDetail },


  //AuthenticationInner pages 
  { path: "/auth-signin-basic", component: BasicSignIn },
  { path: "/auth-signin-cover", component: CoverSignIn },
  { path: "/auth-signup-basic", component: BasicSignUp },
  { path: "/auth-signup-cover", component: CoverSignUp },
  { path: "/auth-pass-reset-basic", component: BasicPasswReset },
  { path: "/auth-pass-reset-cover", component: CoverPasswReset },
  { path: "/auth-lockscreen-basic", component: BasicLockScreen },
  { path: "/auth-lockscreen-cover", component: CoverLockScreen },
  { path: "/auth-logout-basic", component: BasicLogout },
  { path: "/auth-logout-cover", component: CoverLogout },
  { path: "/auth-success-msg-basic", component: BasicSuccessMsg },
  { path: "/auth-success-msg-cover", component: CoverSuccessMsg },
  { path: "/auth-twostep-basic", component: BasicTwosVerify },
  { path: "/auth-twostep-cover", component: CoverTwosVerify },
  { path: "/auth-404-basic", component: Basic404 },
  { path: "/auth-404-cover", component: Cover404 },
  { path: "/auth-404-alt", component: Alt404 },
  { path: "/auth-500", component: Error500 },
  { path: "/pages-maintenance", component: Maintenance },
  { path: "/pages-coming-soon", component: ComingSoon },
  { path: "/landing", component: Index },
  { path: "/test-test-page/:currentLevel/:degreeId/:level", component: TestPage },
  { path: "/pages-home-page", component: HomePage },

];

export { authProtectedRoutes, publicRoutes };