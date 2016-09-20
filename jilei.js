//判断页面文本框中输入的email是否合法，如果不合法则输入获得焦点并重新输入，若输入合法则提交
function submitEmail(){
	var email = document.getElementById("email");
	var emailForm = document.getElementById("emailSubmit");
	var emailValue = email.value;
	var beforeL = emailValue.indexOf("@");
	var lastL = emailValue.lastIndexOf(".");
	if(beforeL<1 || lastL<beforeL+2 || lastL+3>=emailValue.length){
		alert("email格式不合法,请重新输入!");
		email.focus();
	}else{
		emailForm.submit();
	}
}
