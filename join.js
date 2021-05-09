window.addEventListener('load', function() {
		var signup = document.querySelector('#signup');
		
		//signup버튼을 클릭했을때
		signup.addEventListener('click', function() {
			// value로 사용시 객체 속성 사용이 불가능하여 포커스를 사용할 수가 없어서
			// 변수를 아래로 바꿨습니다.
			/* var id = document.querySelector('#id').value;
			var pw1 = document.querySelector('#pw1').value;
			var pw2 = document.querySelector('#pw2').value;
			var gender = document.querySelectorAll(".gender");
			var hobby = document.querySelectorAll(".hobby");
			var birth = document.querySelector('#birth').value;
			var age = document.querySelector('#age').value;
			var email = document.querySelector('#email').value;
			var memo = document.querySelector('#memo').value;
			 */
			 
			
			// 아이디와 비번,성별,취미,생일,나이,이메일,메모 객체 셋팅  
			var email = document.querySelector('#email');
			var pw1 = document.querySelector('#pw1');
			var pw2 = document.querySelector('#pw2');
			var name = document.querySelector('#name');
			var phone = document.querySelector('#phone');
			var gender = document.querySelectorAll(".gender");
			/* var birth = document.querySelector('#birth'); */
			
			//성별 검사

			var genderVal = false;
			for (var i = 0; i < gender.length; i++) {
				//성별을 검사하면서 한개라도 체크가되어있다면
				if (gender[i].checked) {
					//true를 셋팅
					genderVal = true;
				}
			}

			// 전체 검사
			// 이메일이 공백이거나 4글자 미만이면
			if (email.value == '' || email.value.length < 4) {
				alert('이메일을 4자이상!');
				//id포커스
				email.focus();
			// 비밀번호가 4자리 미만이거나 숫자가 아닐때
			} else if (pw1.value.length < 4/*  || isNaN(pw1.value) */) {
				alert('비번 숫자로 4자이상쓰셈');
				//비밀번호 포커스
				pw1.focus();
			// 비밀번호가 처음입력한 값과 다를시
			} else if (pw1.value != pw2.value) {
				alert('패스워드가 일치하지 않습니다.');
				pw2.focus();
            // 이름이 입력되지 않았을시    
            } else if (name.value == '') {
				alert('이름 공백안됨');
				name.focus();
            // 폰번호가 입력되지 않았을시
            } else if (phone.value == '') {
				alert('전화번호 공백안됨');
				email.focus();
			// 성별이 체크가 안되었을시
			} else if (genderVal == false) {
				alert("성별을 입력하세요!");
				gender[0].focus();
			// 전부완료되면 메인으로 이동
			} else {
				location.href = "./index.html";
			}

		});
	});