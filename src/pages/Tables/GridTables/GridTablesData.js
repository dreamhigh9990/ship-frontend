import React from 'react';
import { Grid, _ } from 'gridjs-react';
import avatar1 from "../../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../../assets/images/users/avatar-3.jpg";

const data = [
    ["01", "Engineer", "1 level", "Senior Implementation Architect", "2023.1.03", "40"],
    ["02", "Engineer", "2 level", "Forward Creative Coordinator", "2023.1.03", "40"],
    ["03", "Engineer", "1 level", "Legacy Functionality Associate", "2023.1.03", "40"],
    ["04", "Engineer", "1 level", "Product Accounts Technician", "2023.1.03", "40"],
    ["05", "Engineer", "2 level", "Customer Data Director", "2023.1.03", "40"],
    ["06", "Engineer", "1 level", "Corporate Identity Director", "2023.1.03", "40"],
    ["07", "Engineer", "1 level", "Lead Applications Associate", "2023.1.03", "40"],
    ["08", "Engineer", "3 level", "Dynamic Assurance Director", "2023.1.03", "40"],
    ["09", "Engineer", "1 level", "Customer Data Director", "2023.1.03", "40"],
    ["10", "Engineer", "1 level", "Senior Response Liaison", "2023.1.03", "40"],
];

const article = [
    [[avatar1,"Manager", "(Man 24 yrs old)"], ["6", "4", "7"], ["Describe the policy about the article vote", "new", "2012.22.4", "science center", "Many artists and professional writers make the mistake of thinking that creativity is something that comes to you. Like the creative spark is lightning, and all an artist can do is sit in wait. This, of course, is ridiculous. Serious artists understand that books are written, and articles are published as a result of discipline. That means that creative powers are not ethereal and impossible to understand. You can work your “creative muscles” just like any other mental skills. As such, you can use the random letter generator to help. Have the system generate anywhere from 5-10 letters per day, and then go in and create a unique sentence for each letter."]], 
    [[avatar3,"Manager", "(Man 24 yrs old)"], ["6", "4", "7"], ["Describe the policy about the article vote", "new", "2012.22.4", "science center", "Many artists and professional writers make the mistake of thinking that creativity is something that comes to you. Like the creative spark is lightning, and all an artist can do is sit in wait. This, of course, is ridiculous. Serious artists understand that books are written, and articles are published as a result of discipline. That means that creative powers are not ethereal and impossible to understand. You can work your “creative muscles” just like any other mental skills. As such, you can use the random letter generator to help. Have the system generate anywhere from 5-10 letters per day, and then go in and create a unique sentence for each letter."]], 
    [[avatar2,"Manager", "(Man 24 yrs old)"], ["6", "4", "7"], ["Describe the policy about the article vote", "new", "2012.22.4", "science center", "Many artists and professional writers make the mistake of thinking that creativity is something that comes to you. Like the creative spark is lightning, and all an artist can do is sit in wait. This, of course, is ridiculous. Serious artists understand that books are written, and articles are published as a result of discipline. That means that creative powers are not ethereal and impossible to understand. You can work your “creative muscles” just like any other mental skills. As such, you can use the random letter generator to help. Have the system generate anywhere from 5-10 letters per day, and then go in and create a unique sentence for each letter."]], 
    [[avatar1,"Manager", "(Man 24 yrs old)"], ["6", "4", "7"], ["Describe the policy about the article vote", "new", "2012.22.4", "science center", "Many artists and professional writers make the mistake of thinking that creativity is something that comes to you. Like the creative spark is lightning, and all an artist can do is sit in wait. This, of course, is ridiculous. Serious artists understand that books are written, and articles are published as a result of discipline. That means that creative powers are not ethereal and impossible to understand. You can work your “creative muscles” just like any other mental skills. As such, you can use the random letter generator to help. Have the system generate anywhere from 5-10 letters per day, and then go in and create a unique sentence for each letter."]], 
    [[avatar3,"Manager", "(Man 24 yrs old)"], ["6", "4", "7"], ["Describe the policy about the article vote", "new", "2012.22.4", "science center", "Many artists and professional writers make the mistake of thinking that creativity is something that comes to you. Like the creative spark is lightning, and all an artist can do is sit in wait. This, of course, is ridiculous. Serious artists understand that books are written, and articles are published as a result of discipline. That means that creative powers are not ethereal and impossible to understand. You can work your “creative muscles” just like any other mental skills. As such, you can use the random letter generator to help. Have the system generate anywhere from 5-10 letters per day, and then go in and create a unique sentence for each letter."]], 
    [[avatar1,"Manager", "(Man 24 yrs old)"], ["6", "4", "7"], ["Describe the policy about the article vote", "new", "2012.22.4", "science center", "Many artists and professional writers make the mistake of thinking that creativity is something that comes to you. Like the creative spark is lightning, and all an artist can do is sit in wait. This, of course, is ridiculous. Serious artists understand that books are written, and articles are published as a result of discipline. That means that creative powers are not ethereal and impossible to understand. You can work your “creative muscles” just like any other mental skills. As such, you can use the random letter generator to help. Have the system generate anywhere from 5-10 letters per day, and then go in and create a unique sentence for each letter."]], 
    [[avatar1,"Manager", "(Man 24 yrs old)"], ["6", "4", "7"], ["Describe the policy about the article vote", "new", "2012.22.4", "science center", "Many artists and professional writers make the mistake of thinking that creativity is something that comes to you. Like the creative spark is lightning, and all an artist can do is sit in wait. This, of course, is ridiculous. Serious artists understand that books are written, and articles are published as a result of discipline. That means that creative powers are not ethereal and impossible to understand. You can work your “creative muscles” just like any other mental skills. As such, you can use the random letter generator to help. Have the system generate anywhere from 5-10 letters per day, and then go in and create a unique sentence for each letter."]], 
    [[avatar3,"Manager", "(Man 24 yrs old)"], ["6", "4", "7"], ["Describe the policy about the article vote", "new", "2012.22.4", "science center", "Many artists and professional writers make the mistake of thinking that creativity is something that comes to you. Like the creative spark is lightning, and all an artist can do is sit in wait. This, of course, is ridiculous. Serious artists understand that books are written, and articles are published as a result of discipline. That means that creative powers are not ethereal and impossible to understand. You can work your “creative muscles” just like any other mental skills. As such, you can use the random letter generator to help. Have the system generate anywhere from 5-10 letters per day, and then go in and create a unique sentence for each letter."]], 
    [[avatar1,"Manager", "(Man 24 yrs old)"], ["6", "4", "7"], ["Describe the policy about the article vote", "new", "2012.22.4", "science center", "Many artists and professional writers make the mistake of thinking that creativity is something that comes to you. Like the creative spark is lightning, and all an artist can do is sit in wait. This, of course, is ridiculous. Serious artists understand that books are written, and articles are published as a result of discipline. That means that creative powers are not ethereal and impossible to understand. You can work your “creative muscles” just like any other mental skills. As such, you can use the random letter generator to help. Have the system generate anywhere from 5-10 letters per day, and then go in and create a unique sentence for each letter."]], 
    [[avatar2,"Manager", "(Man 24 yrs old)"], ["6", "4", "7"], ["Describe the policy about the article vote", "new", "2012.22.4", "science center", "Many artists and professional writers make the mistake of thinking that creativity is something that comes to you. Like the creative spark is lightning, and all an artist can do is sit in wait. This, of course, is ridiculous. Serious artists understand that books are written, and articles are published as a result of discipline. That means that creative powers are not ethereal and impossible to understand. You can work your “creative muscles” just like any other mental skills. As such, you can use the random letter generator to help. Have the system generate anywhere from 5-10 letters per day, and then go in and create a unique sentence for each letter."]], 
];

const data1 = [
    ["#VL2111", "Jonathan", "07 Oct, 2021", "$24.05", "Paid",],
    ["#VL2110", "Harold", "07 Oct, 2021", "$26.15", "Paid"],
    ["#VL2109", "Shannon", "06 Oct, 2021", "$21.25", "Refund"],
    ["#VL2108", "Robert", "05 Oct, 2021", "$25.03", "Paid"],
    ["#VL2107", "Noel", "05 Oct, 2021", "$22.61", "Paid"],
    ["#VL2106", "Traci", "04 Oct, 2021", "$24.05", "Paid"],
    ["#VL2105", "Kerry", "04 Oct, 2021", "$26.15", "Paid"],
    ["#VL2104", "Patsy", "04 Oct, 2021", "$21.25", "Refund"],
    ["#VL2103", "Cathy", "03 Oct, 2021", "$22.61", "Paid"],
    ["#VL2102", "Tyrone", "03 Oct, 2021", "$25.03", "Paid"],
];

const data2 = [
    ["Jonathan", "jonathan@example.com", "Senior Implementation Architect", "Hauck Inc", "Holy See"],
    ["Harold", "harold@example.com", "Forward Creative Coordinator", "Metz Inc", "Iran"],
    ["Shannon", "shannon@example.com", "Legacy Functionality Associate", "Zemlak Group", "South Georgia"],
    ["Robert", "robert@example.com", "Product Accounts Technician", "Hoeger", "San Marino"],
    ["Noel", "noel@example.com", "Customer Data Director", "Howell - Rippin", "Germany"],
    ["Traci", "traci@example.com", "Corporate Identity Director", "Koelpin - Goldner", "Vanuatu"],
    ["Kerry", "kerry@example.com", "Lead Applications Associate", "Feeney, Langworth and Tremblay", "Niger"],
    ["Patsy", "patsy@example.com", "Dynamic Assurance Director", "Streich Group", "Niue"],
    ["Cathy", "cathy@example.com", "Customer Data Director", "Ebert, Schamberger and Johnston", "Mexico"],
    ["Tyrone", "tyrone@example.com", "Senior Response Liaison", "Raynor, Rolfson and Daugherty", "Qatar"],
];

// Base Example
const BaseExample = () => {
    return (
        <React.Fragment>
            <Grid
                data={data}
                columns={[{
                    name: 'ID',
                    formatter: (cell) => _(<span className="fw-semibold">{cell}</span>),
                },
                    "Sort",
                {
                    name: 'Level',
                },
                    "Title", "Browser Date",
                {
                    name: "Count",
                    width: 60
                }
                ]}
                search={true}
                sort={true}
                resizable = {true}
                pagination={{ enabled: true, limit: "6", }}
            />
        </React.Fragment>
    );
};

// Article Data
const ArticleData = () => {
    const[pagination, setPaginiation] = React.useState("4");

    const selectSetPaginiation = (pageValue) => {
        setPaginiation(pageValue)
    };
    return (
        <React.Fragment>
            <Grid
                data={article}
                columns={[{
                    name: "namedetail",
                    formatter: (cell) => _(<div className="d-flex flex-column align-items-center">
                        <img className="img-thumbnail rounded-circle avatar-xl" src={cell[0]} />
                        <span>{cell[1]}</span>
                        <span>{cell[2]}</span>
                        </div>),
                        width:"30px"
                },
                {
                    name: 'vote',
                    formatter: (cell) => _(<div className="d-flex flex-column align-items-center">
                        <div className='d-flex align-items-center'><i className="bx bx-like pe-1"></i><span>{cell[0]}</span></div>
                        <div className='d-flex align-items-center'><i className="bx bx-message pe-1"></i><span>{cell[1]}</span></div>
                        <div className='d-flex align-items-center'><i className="bx bx-message-dots pe-1"></i><span>{cell[2]}</span></div>
                        </div>)
                },
                {
                    name: "content",
                    formatter: (cell) => _(<div>
                        <div className='d-flex justify-content-between'>
                            <div className="d-flex"><h4 className="pe-3">{cell[0]}</h4><div><span className="badge bg-secondary p-2">{cell[1]}</span></div></div>
                        <div><span className="pe-2">{cell[2]}</span><span>{cell[3]}</span></div></div>
                        <p>{cell[4]}</p>
                    </div>)
                }
                ]}
                search={true}
                sort={true}
                resizable = {true}
                pagination={{ enabled: true, limit: 4, }}
            />
        </React.Fragment>
    );
};

// Card Table
const CardTableExample = () => {
    return (
        <React.Fragment>
            <Grid
                data={data2}
                columns={["Name", "Email", "Position", "Company", "Country"]}
                sort={true}
                pagination={{ enabled: true, limit: 5, }}
            />
        </React.Fragment>
    );
};

// Pagination
const PaginationExample = () => {
    return (
        <React.Fragment>
            <React.Fragment>
                <Grid
                    data={data1}
                    columns={[{
                        name: 'ID',
                        width: '120px',
                        formatter: (cell) => _(<a href="/#" className="fw-medium"> {cell} </a>)
                    }, "Name", "Date", "Total", "Status",
                    {
                        name: 'Actions',
                        width: '100px',
                        formatter: (cell) => _(<button type='button' className='btn btn-sm btn-light'> Details </button>)
                    },
                    ]}
                    pagination={{ enabled: true, limit: 5, }}
                />
            </React.Fragment>
        </React.Fragment>
    );
};

// Search
const SearchExample = () => {
    return (
        <React.Fragment>
            <Grid
                data={data2}
                columns={["Name", "Email", "Position", "Company", "Country"]}
                search={true}
                pagination={{ enabled: true, limit: 5, }}
            />
        </React.Fragment>
    );
};

// Sorting
const SortingExample = () => {
    return (
        <React.Fragment>
            <Grid
                data={data2}
                columns={["Name", "Email", "Position", "Company", "Country"]}
                sort={true}
                pagination={{ enabled: true, limit: 5, }}
            />
        </React.Fragment>
    );
};

// Loading State
const LoadingStateExample = () => {
    return (
        <React.Fragment>
            <Grid
                data={function () {
                    return new Promise(function (resolve) {
                        setTimeout(function () {
                            resolve(data2);
                        }, 2000);
                    });
                }}
                columns={[
                    "Name", "Email", "Position", "Company", "Country"]}
                sort={true}
                pagination={{ enabled: true, limit: 5, }}
            />            
        </React.Fragment>
    );
};

// Fixed Header
const FixedHeaderExample = () => {
    return (
        <React.Fragment>
            <Grid
                data={data2}
                columns={[
                    "Name", "Email", "Position", "Company", "Country"]}
                sort={true}
                pagination={{ enabled: true, limit: 10, }}
                fixedHeader={true}
                height={'400px'}
            />
        </React.Fragment>
    );
};

// Hidden Columns
const HiddenColumnsExample = () => {
    return (
        <React.Fragment>
            <Grid
                data={data}
                columns={[
                    {
                        name: 'ID',
                        hidden: true
                    },
                    "Name", "Email", "Position", "Company", {
                        name: 'Country',
                        hidden: true
                    }
                ]}
                sort={true}
                pagination={{ enabled: true, limit: 5, }}
            />
        </React.Fragment>
    );
};



export { ArticleData, BaseExample, CardTableExample, PaginationExample, SearchExample, SortingExample, LoadingStateExample, FixedHeaderExample, HiddenColumnsExample };
