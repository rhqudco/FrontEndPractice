$(document).ready(function() {
    // 시작시 ID 입력란에 포커스 추가
    let $id = $('#id');
    //$id.focus();
    let $pwd = $('#pwd');
    let $year = $(':radio[name="year"]'); // 여러 개 있는 경우
    // 한 개만 있는 경우 var $year = $(':radio'); 
    let $check = $(':checkbox[type=checkbox]');
    let $department = $('#department');
    // 완료버튼 클릭하면 입력 유효성 확인
    // input 텍스트 입력란에(id, pw) focus 있을 때 색상 변경
    $($id).on({
        focus:function() {
            $(this).css('background-color', 'pink');
        },
        blur:function() {
            $(this).css('background-color', 'white');
        }});
    $($pwd).on({
        focus:function() {
            $(this).css('background-color', 'yellow');
        },
        blur:function() {
            $(this).css('background-color', 'white');
        }});

        $('#hp1').on('keyup', function() {
            if($('#hp1').val().length > 2) {
                $('#hp2').focus();
            }
        });
        $('#hp2').on('keyup', function() {
            if($(this).val().length > 3) {
                $('#hp3').focus();
            }
        });
        // 엔터키 입력하면 sumbit 시키지 않게
        // function(e)의 e는 이벤트 발생 시 처리 함수로 전달되는 event 객체
        // 함수의 매개변수로 받아서 사용
        // 필요 없을 때는 function() 안 받으면 됨.
        // 이름은 임의로 사용 가능 : event로 해도 되고 a, b, c 등 자유
        // 일반적으로 이벤트를 의미하는 event, e 사용
        $(document).on('keydown', function(e){
            if(e.keyCode == 13) 
            return false;
        });
        // id에서 엔터키 입력하면 다음 pw칸으로 포커스
        $($id).on('keydown', function(e) {
            // id 값이 비어도 넘어감
            // if(e.keyCode == 13) 
            // $pwd.focus();
            // id 값이 입력되어야 엔터키 눌러도 넘어감
            if(e.keyCode == 13 && $id.val() != "") 
            $pwd.focus();
        });
        

    // ID를 입력하지 않은 경우 "아이디를 입력하세요"경고창 출력
    // ID 입력란에 포커스
    // 다음 페이지로 전송되지 않도록 처리
    // 비밀번호 입력하지 않은 경우 "비밀번호를 입력하세요" 출력
    // 비밀번호 입력란에 포커스
    // 다음 페이지로 전송되지 않도록 처리
    $('#newMemberForm').submit(function() {
        if($id.val() == "") {
            alert("아이디를 입력하세요.");
            $id.focus();
            return false;
        }
        if($pwd.val() == "" && $id.val() != "") {
            alert("비밀번호를 입력하세요.");
            $pwd.focus();
            return false;
        }
        if($year.is(':checked') == false) {
            alert("학년을 선택하세요.");
            return false;
        }
        if($check.is(':checked') == false) {
            alert("관심분야를 선택하세요.");
            return false;
        }
        if($department.val() == "") {
            alert("학과를 선택해 주세요.");
            $department.focus();
            return false;
        }
    }); // submit 끝.
}); //ready 종료