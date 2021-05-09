/* function check_input(form) {
    if (!document.login_form.id_label.value)
    // login_form 이름을 가진 form 안의 id_val 의 value가 없으면
    {
        alert('이메일을 입력하세요!');
        document.login_form.id_label.focus();
        // 화면 커서 이동
        return;
    }
    if (!document.login_form.pw_label.value)
    {
        alert('비밀번호를 입력하세요!');
        // 화면 커서 이동
        return;
    }
    document.login_form.submit();
    // 모두 확인 후 submit()
 } */
/* 
    window.onload = ()=>{
        this.sessionStorage.setItem("id_label", "sakaos_userooo");
        this.sessionStorage.setItem("pw_label", "sakaos_passwordooo");
    }

    var input = document.getElementsByTagName('input');
    var login = document.getElementById('log-in');
    var form = document.querySelector('form');
    form.onsubmit = ()=>{return false}

    login.onclick= ()=> {
        if ((input[0].value != "") && (input[1].value != ""))
        {

        }
        else
        {
            if(input[0].value == "")
            {
                input[0].nextElementSibling.textContent = "Username is empty";
                setTimeout(()=> {
                    input[0].nextElementSibling.textContent = "";
                }, 2000);
            }
        }
    } */

var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app).listen(80);

app.get('/signin', function (req, res) {
res.sendfile("login.html");
});

console.log("server is running...");