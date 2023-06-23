import avatar1 from "../../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../../assets/images/users/avatar-3.jpg";
const BlogDetailData =
{
    user_name: 'Thanesh Pannirselvam',  
    title: "Functional Programming Is Great. But It Ain’t Magic",
    content: `An increasing annoyance in my day-to-day job as a coach and trainer is what I call FPF, or “Functional Programming Fanaticism”. Typically, it emanates from people who’ve recently discovered FP in the last few years and have yet to realize that — like all programming innovations since the 1940s — it doesn’t actually solve all the problems for us.

        Putting aside the widely-held perception that functional programs can be considerably less easy to understand, even for experienced FP-ers, (and this is no small consideration when you realize that trying to understand program code is where programmers spend at least half our time), there is the question of side effects.
        
        More specifically, people keep telling me that functional programs don’t have any. This is patently not true: a program with no side effects is a program that does nothing of any use to us. Somewhere, somehow, data’s got to change. Try writing a word processor that doesn’t have side effects.
        
        FP helps us write more reliable code — in particular, more reliable concurrent code — by limiting and localizing side effects. But only if you do it right.
        
        It’s entirely possible to write functional programs that are riddled with concurrency errors, and, indeed, that’s what many teams are doing as we speak.
        
        How can this be so, though, if functions are said to be “clean” — side-effect free? Well, that bank account balance that gets passed from one function to next may indeed be a copy (of a copy of a copy) of the original balance, but from the external user’s perspective, whatever the current balance is, that is the balance (and it has changed.)
        
        The moment we persist that change (e.g., by writing it to the database, or through transactional memory, or however we’re handling shared data), the deed is done. Ipso facto: side effect.
        
        Languages like Haskell, Clojure and that other one that sounds like “Camel” don’t do our concurrent thinking for us. If joint account holder A checks their balance before trying to use the debit card, but joint account holder B uses their debit card before A does, then — you may be surprised to learn — these languages have no built-in feature for reconciling joint account transaction paradoxes like this. You have to THINK ABOUT HOW YOUR SOFTWARE SHOULD HANDLE CONCURRENT SCENARIOS from the user’s perspective.
        
        In non-FP work, we seek to make concurrent systems more reliable and more, well, concurrent, by strictly limiting and localizing concurrent access to shared data. FP just embeds this concept within the languages themselves, making that easier and more reliable to do.
        
        Just as workflow frameworks don’t decide what should happen in your workflows, functional programs don’t decide how your application should handle side-effects. The best they can do is give you the tools to realize the decisions you make.
        
        What I’m seeing, though, (and this was case when we were all prostrating before the Great Workflow Ju Ju In The Sky a decade or so ago), is that teams mistakenly lean on the technology, believing through some kind of magic that it will handle these scenarios for them. But, like all computer programs, they will only do exactly what we tell them to.`,
    user_img: avatar3,
    date: 'Jan26',
    thumb: '40',
    message: '34',
    reply_message: '40',
    user_response: [{
        img: avatar2 ,
        name: "robert032",
        content: 'You have to THINK ABOUT HOW YOUR SOFTWARE SHOULD HANDLE CONCURRENT SCENARIOS from the user’s perspective. In non-FP work, we seek to make concurrent systems more reliable and more, well, concurrent, by strictly limiting and localizing concurrent access to shared data.'
    },
    {
        img: avatar3,
        name: "robert033",
        content: 'You have to THINK ABOUT HOW YOUR SOFTWARE SHOULD HANDLE CONCURRENT SCENARIOS from the user’s perspective. In non-FP work, we seek to make concurrent systems more reliable and more, well, concurrent, by strictly limiting and localizing concurrent access to shared data.'
    },
    {
        img: avatar1,
        name: "Jhon032",
        content: 'You have to THINK ABOUT HOW YOUR SOFTWARE SHOULD HANDLE CONCURRENT SCENARIOS from the user’s perspective. In non-FP work, we seek to make concurrent systems more reliable and more, well, concurrent, by strictly limiting and localizing concurrent access to shared data.'
    }
    ]
}

const columnsReplyMessageData = [
    {
        Header: "Reply Message",
        accessor: "content",
        filterable: false,
        Cell: (purchase) => (<>
            <div className="blog-content-wrapper">
                <div>
                    <img className="author-img" src={purchase.row.original.img} />
                    <span style={{fontSize:"13px"}} className="author-name">{purchase.row.original.name}</span>
                    <div className="publish-date pt-2">{purchase.row.original.content}</div>
                </div>
            </div>
        </>)
    },
]
export { BlogDetailData, columnsReplyMessageData}