window.onload = function() {
    // 폼에서 id가 joinForm인 폼의 submit 버튼이 눌러졌을 때 수행되는 이벤트 처리
    document.getElementById('joinForm').onsubmit = function() {
        // 성명을 입력하지 않은 경우 경고창 띄우기
        // 성명 입력 칸의 id를 찾아오기
        var name = document.getElementById('name')
        // 값이 비었는지 확인 후 비었으면 경고 출력, 입력란에 포커스, 서버로 전송되지 않게(다음 페이지로 이동 못하게)
        if(name.value == "") {
            alert("성명을 입력하세요.");
            name.focus();
            return false; // 서버로 전송되지 않게 함.
        } // 이름 검증 끝
        var id = document.getElementById('id');
        if(id.value == "") {
            alert("아이디를 입력하세요.");
            id.focus();
            return false;
        } // 아이디 검증 끝.
    }; // onsubmit 끝
}; // window.onload 끝