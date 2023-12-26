/* URL 인코딩/디코딩, 일반인에게만 모름, 웹 하는 사람들에게 보안개념 1도 없음
    인코딩함수  escape,     encodeURI,  encodeURIComponent
    디코딩함수  unescape,   decodeURI,  decodeURIComponent

*/


// var title = queryString.split("&")[0].split("=")[1];    // n_title=제목
// alert("넘어온 제목은 " + title);

// 공통으로 쓸 함수를 모으기 보통 util.js


var request = {};   // 네임스페이스용 빈 객체, 사용자요청을 처리할 객체의 의미

// 좀 더 정갈하고 의미있게, 1개만 넘어오는 값
request.getParameter = function(pName) {
    // n_title=merong&n_writer=hello&n_skill=js&n_skill=spring&n_cont=dd
    var items = queryString.split("&"); // 배열
    for(var i=0; i<items.length; i++) {
        var item = items[i].split("=");     // n_title=merong
        if(item[0] == pName) {
            return decodeURIComponent(item[1]); // 스페이스바는 +로 됨..
        }
    }
    return null;    // 요런 코드 처리는 회사내부 합의에 의해서, 여기선 일단 null로
}

// 여러개 넘어오는 값
request.getParameterValues = function(pName) {
    var schRslt = [];   // 찾은 걸 담을 빈 배열
    var items = queryString.split("&"); // 배열
    for(var i=0; i<items.length; i++) {
        var item = items[i].split("=");
        if(item[0] == pName) {
            schRslt.push(decodeURIComponent(item[1]));
        }
    }
    if(!schRslt.length) {
        return null;
    }
    return schRslt;
}