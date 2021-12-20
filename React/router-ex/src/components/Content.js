function Content() {
    return (
        <div>
            <hr />
            <h2>책 정보</h2>
            <table border='1'>
                <tr><th>제목</th><th>저자</th><th>평점</th></tr>
                <th>출간일</th><th>장르</th>
                <tr><td>개미</td>
                <td>베르나르 베르베르</td><td>5.0점</td>
                <td>1991년</td><td>소설</td></tr>
                <tr><td>데미안</td>
                <td>헤르만 헤세</td><td>4.8점</td>
                <td>1919년</td><td>소설</td></tr>
            </table>
        </div>
    )
}

export default Content;