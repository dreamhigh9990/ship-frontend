const columnsData = [
    {
        Header: "ID",
        accessor: "id",
        filterable: false,
    },
    {
        Header: "Sort",
        accessor: "sort",
        filterable: false,
    },
    {
        Header: "Level",
        accessor: "level",
        filterable: false,
    },
    {
        Header: "Title",
        accessor: "title",
        filterable: false,
    },
    {
        Header: "View Date",
        accessor: "date",
        filterable: false,
    },
    {
        Header: "View count",
        accessor: "count",
        filterable: false,
    },
]
const dataList = [
    {
        id: "1",
        sort: "electric",
        level: "Level 1",
        title: "electric component principle and use",
        date: "2022.2.23",
        count: "48",
    },
    {
        id: "2",
        sort: "electric",
        level: "Level 1",
        title: "electric component principle and use",
        date: "2022.2.23",
        count: "48",
    },
    {
        id: "3",
        sort: "electric",
        level: "Level 1",
        title: "electric component principle and use",
        date: "2022.2.23",
        count: "48",
    },
    {
        id: "4",
        sort: "Physical",
        level: "Level 1",
        title: "electric component principle and use",
        date: "2022.2.23",
        count: "48",
    },
    {
        id: "5",
        sort: "electric",
        level: "Level 1",
        title: "electric component principle and use",
        date: "2022.2.23",
        count: "48",
    },
    {
        id: "6",
        sort: "electric",
        level: "Level 1",
        title: "electric component principle and use",
        date: "2022.2.23",
        count: "48",
    },
    {
        id: "7",
        sort: "electric",
        level: "Level 1",
        title: "electric component principle and use",
        date: "2022.2.23",
        count: "48",
    },
    {
        id: "8",
        sort: "electric",
        level: "Level 1",
        title: "electric component principle and use",
        date: "2022.2.23",
        count: "48",
    },
];
const columnsTestData = [
    {
        Header: "ID",
        accessor: "id",
        filterable: false,
    },
    {
        Header: "Sort",
        accessor: "sort",
        filterable: false,
    },
    {
        Header: "Level",
        accessor: "level",
        filterable: false,
    },
    {
        Header: "Total",
        accessor: "testcounter",
        filterable: false,
    },
    {
        Header: "Matched",
        accessor: "passedcounter",
        filterable: false,
    },
]
const TestDataList = [
    {
        id: "1",
        sort: "electric",
        level: "Level 1",
        testcounter: "30",
        passedcounter: "40",
    },
    {
        id: "1",
        sort: "electric",
        level: "Level 1",
        testcounter: "30",
        passedcounter: "60",
    },
    {
        id: "2",
        sort: "electric",
        level: "Level 1",
        testcounter: "30",
        passedcounter: "70",
    },
    {
        id: "3",
        sort: "Math",
        level: "Level 1",
        testcounter: "30",
        passedcounter: "10",
    },
    {
        id: "4",
        sort: "Math",
        level: "Level 1",
        testcounter: "30",
        passedcounter: "5",
    },
]
const columnsProcessData = [
    {
        Header: "ID",
        accessor: "id",
        filterable: false,
    },
    {
        Header: "Sort",
        accessor: "sort",
        filterable: false,
    },
    {
        Header: "Level",
        accessor: "level",
        filterable: false,
    },
    {
        Header: "Last Testing Problem",
        accessor: "testproblem",
        filterable: false,
    },
]
const ProcessDataList = [
    {
        id: "1",
        sort: "electric",
        level: "Level 1",
        testproblem: "Control method of the Ship. must have the 20 minutes",
    },
    {
        id: "2",
        sort: "electric",
        level: "Level 1",
        testproblem: "Control method of the Ship. must have the 20 minutes",
    },
    {
        id: "3",
        sort: "electric",
        level: "Level 1",
        testproblem: "Control method of the Ship. must have the 20 minutes",
    },
    {
        id: "3",
        sort: "electric",
        level: "Level 1",
        testproblem: "Control method of the Ship. must have the 20 minutes",
    },
    {
        id: "4",
        sort: "Biology",
        level: "Level 1",
        testproblem: "Control method of the Ship. must have the 20 minutes",
    },
    {
        id: "5",
        sort: "electric",
        level: "Level 1",
        testproblem: "Control method of the Ship. must have the 20 minutes",
    },
    {
        id: "6",
        sort: "Math",
        level: "Level 1",
        testproblem: "Control method of the Ship. must have the 20 minutes",
    },
    {
        id: "7",
        sort: "electric",
        level: "Level 1",
        testproblem: "Control method of the Ship. must have the 20 minutes",
    },
]
const columnsPurchaseData = [
    {
        Header: "ID",
        accessor: "id",
        filterable: false,
    },
    {
        Header: "Title",
        accessor: "title",
        filterable: false,
    },
    {
        Header: "Date",
        accessor: "date",
        filterable: false,
    },
    {
        Header: "Purchase Score",
        accessor: "score",
        filterable: false,
    },
    {
        Header: "",
        accessor: "action",
        filterable: false,
    },
]
const PurchaseDataList = [
    {
        id: "1",
        title: "electric",
        date: "2022.1.3",
        score: "1000",
        action: ["Detail", "Download"]
    },
]
export { columnsData, dataList, columnsTestData, TestDataList, columnsProcessData, ProcessDataList, columnsPurchaseData, PurchaseDataList }