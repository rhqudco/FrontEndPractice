import { useParams } from "react-router-dom";

const data = {
    ant : {
        title : '개미',
        director : '베르나르 베르베르',
        score : '5.0',
        date : '1991년',
        genre : '소설'
    },
    demian : {
        title : '데미안',
        director : '헤르만 헤세',
        score : '4.8점',
        date : '1919년',
        genre : '소설'
    }
}

function Book() {
    const params = useParams();
    const book = data[params.keyword];

    if(!book) {
        return <div><hr /><div>책 정보가 없습니다.</div></div>;
    }
    return (
        <div>
            <hr />
            <h3> 
                {params.keyword} : {book.title} 
            </h3>
            <p> 저자 : {book.director} </p>
            <p> 평점 : {book.score} </p>
            <p> 출간일 : {book.date} </p>
            <p> 장르 : {book.genre} </p>
        </div>
    )
}
export default Book;