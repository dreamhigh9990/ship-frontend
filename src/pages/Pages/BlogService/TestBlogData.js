import avatar1 from "../../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../../assets/images/users/avatar-3.jpg";
import { Link } from 'react-router-dom';
import { downloadAvatar } from "../../../helpers/fakebackend_helper";

const columnsBlogData = [    
    {
        Header: "Reply message",
        accessor: "content",
        filterable: false,
        Cell: (article) => (
        <>        
            <div className="blog-content-wrapper">            
                <div>
                    <Link to = {"/pages-blog-service/article-man/" + article.row.original.userId} style={{"display":"inline-block"}}><img className="author-img" alt="Img" src={downloadAvatar(article.row.original.currentAvatarId)}/></Link>
                    <span className="author-name"><b>{article.row.original.username}</b></span>
                    <span className="publish-date ms-1">{article.row.original.ago}</span>
                </div>
                <div className="pt-3 d-flex justify-content-between">
                    <Link to={"/pages-blog-service/detail/" + article.row.original.id}>
                        <div className="blog-content mx-4">
                            <h3 className="blog-title" style={{width:800}}>{article.row.original.name}</h3>                            
                        </div>
                    </Link>

                    {/* <div className="blog-detail-img-wrap">
                        <img className="blog-detail-img" alt="" src={article.row.original.attach_url} />
                    </div> */}

                </div>
                <div className="mx-2">
                    <Link to= {"/pages-blog-service/article-kind/" + 
                              article.row.original.articleCategoryId} className="rounded-pill btn btn-light tags me-4">{article.row.original.categoryTitle}</Link>
                    <i className="bx bx-like pe-1"></i><span className="pe-3">{article.row.original.recommends}</span>
                    <i className="bx bx-message pe-1"></i><span className="pe-3">{article.row.original.oppositions}</span>
                </div>

            </div>

        </>)
    },
]
// {article.row.original.content[0]}
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