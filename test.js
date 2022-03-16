function solution(s) {
    var answer = 0;
    var str = s;
    var tempSet = new Set();
    var tmp = "";
    for(var i = 0; i < str.length; i++) {
        tem = "";
        for(var j = 0; j < i+1; j++) {
            tem = tem + str.substring(j-1, j+1);
            tempSet.add(tem);
        }
    }
    answer = tempSet.size;
    console.log(tempSet);
    return answer;
}
console.log(solution("abac"));