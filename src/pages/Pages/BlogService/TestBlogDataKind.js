import avatar1 from "../../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../../assets/images/users/avatar-3.jpg";
import { Link } from 'react-router-dom';
const columnsBlogData = [
    {
        Header: "Reply message",
        accessor: "content",
        filterable: false,
        Cell: (purchase) => (<>
            <div className="blog-content-wrapper">
                <div>
                    <img className="author-img" src={purchase.row.original.content[0]} />
                    <span className="author-name">{purchase.row.original.content[1]}</span>
                    <span>.</span>
                    <span className="publish-date">{purchase.row.original.content[2]} days ago</span>
                </div>
                <div className="pt-3 d-flex justify-content-between">

                    <Link to="detail">
                        <div className="blog-content">
                            <h3 className="blog-title">{purchase.row.original.content[3]}</h3>
                            <p className="blog-detail">{purchase.row.original.content[4]}</p>
                        </div>
                    </Link>

                    <div className="blog-detail-img-wrap">
                        <img className="blog-detail-img" src={purchase.row.original.content[5]} />
                    </div>

                </div>
                <div>
                    <button className="rounded-pill btn btn-light tags me-4">{purchase.row.original.content[6]}</button>
                    <i className="bx bx-like pe-1"></i><span className="pe-3">{purchase.row.original.content[7]}</span>
                    <i className="bx bx-message pe-1"></i><span className="pe-3">{purchase.row.original.content[8]}</span>
                </div>

            </div>

        </>)
    },
]
// {purchase.row.original.content[0]}
const BlogDataList = [
    {
        id: "1",
        content: [avatar1, "Mohamed Aboelez", "2", "Functional Programming Is Great. But It Ain’t Magic",
            "It’s not magic, folks. It’s just code. An increasing annoyance in my day-to-day job as a coach and trainer is what I call FPF, or “Functional Programming Fanaticism”. Typically, it emanates from people who’ve",
            avatar2, 'programming', "30", "40", "50"],
        type: "dating"
    },
    {
        id: "2",
        content: [avatar2, "Mohamed Aboelez", "2", "Functional Programming Is Great. But It Ain’t Magic",
            "It’s not magic, folks. It’s just code. An increasing annoyance in my day-to-day job as a coach and trainer is what I call FPF, or “Functional Programming Fanaticism”. Typically, it emanates from people who’ve",
            avatar3, 'programming', "30", "40", "50"],
        type: "dating"
    },
    {
        id: "3",
        content: [avatar3, "Mohamed Aboelez", "2", "Functional Programming Is Great. But It Ain’t Magic",
            "It’s not magic, folks. It’s just code. An increasing annoyance in my day-to-day job as a coach and trainer is what I call FPF, or “Functional Programming Fanaticism”. Typically, it emanates from people who’ve",
            avatar2, 'programming', "30", "40", "50"],
        type: "nopublished"
    },
    {
        id: "4",
        content: [avatar3, "Mohamed Aboelez", "2", "Functional Programming Is Great. But It Ain’t Magic",
            "It’s not magic, folks. It’s just code. An increasing annoyance in my day-to-day job as a coach and trainer is what I call FPF, or “Functional Programming Fanaticism”. Typically, it emanates from people who’ve",
            avatar2, 'programming', "30", "40", "50"],
        type: "nopublished"
    },
    {
        id: "5",
        content: [avatar1, "Mohamed Aboelez", "2", "Functional Programming Is Great. But It Ain’t Magic",
            "It’s not magic, folks. It’s just code. An increasing annoyance in my day-to-day job as a coach and trainer is what I call FPF, or “Functional Programming Fanaticism”. Typically, it emanates from people who’ve",
            avatar2, 'programming', "30", "40", "50"],
        type: "nopublished"
    },
    {
        id: "6",
        content: [avatar3, "Mohamed Aboelez", "2", "Functional Programming Is Great. But It Ain’t Magic",
            "It’s not magic, folks. It’s just code. An increasing annoyance in my day-to-day job as a coach and trainer is what I call FPF, or “Functional Programming Fanaticism”. Typically, it emanates from people who’ve",
            avatar1, 'programming', "30", "40", "50"],
        type: "dating"
    },
    {
        id: "7",
        content: [avatar2, "Mohamed Aboelez", "2", "Functional Programming Is Great. But It Ain’t Magic",
            "It’s not magic, folks. It’s just code. An increasing annoyance in my day-to-day job as a coach and trainer is what I call FPF, or “Functional Programming Fanaticism”. Typically, it emanates from people who’ve",
            avatar2, 'programming', "30", "40", "50"],
        type: "dating"
    },
    {
        id: "8",
        content: [avatar1, "Mohamed Aboelez", "2", "Functional Programming Is Great. But It Ain’t Magic",
            "It’s not magic, folks. It’s just code. An increasing annoyance in my day-to-day job as a coach and trainer is what I call FPF, or “Functional Programming Fanaticism”. Typically, it emanates from people who’ve",
            avatar2, 'programming', "30", "40", "50"],
        type: "nopublished"
    },

]
export { columnsBlogData, BlogDataList }