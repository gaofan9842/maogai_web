//登录切换元素的父元素
var regTop=document.getElementById('reg-top');

//获取扫码登录元素
var saoma=document.getElementById('qrcode');
//获取PC登录元素
var screen=document.getElementById('screen');

//获取普通登录对应的div
var rc=document.getElementById('rc');
var sm=document.getElementById('sm');


//实现登录方式的切换

// saoma.onclick=function(){
// 	rc.style.display="none";
// 	sm.style.display="block";
// 	regTop.style.display="none";
// }
// screen.onclick=function(){
// 	rc.style.display="block";
// 	sm.style.display="none";
// 	regTop.style.display="block";
// }

function sign() {
	var phone = $("#sms_username_name").val();
	var pass = $("#sms_username_pass").val();

	$.ajax({
		type: "GET",//方法类型
		dataType: "text",//预期服务器返回的数据类型
		url: "sign?phone=" + phone+"&pass="+pass,
		contentType: "application/json; charset=utf-8",
		success: function (result) {
			$("#sign_info").html(JSON.stringify(result));
		},
		error: function () {
			$("#sign_info").html("注册发生错误，请联系工作人员！");
		}
	});
	console.log("??"+phone+"////"+pass);
}


function login() {
	var phone = $("#login_username").val();
	var pass = $("#login_password").val();
	$.ajax({
		type: "GET",//方法类型
		dataType: "text",//预期服务器返回的数据类型
		url: "login?phone=" + phone+"&pass="+pass,
		contentType: "application/json; charset=utf-8",
		success: function (result) {
			if(result.toString()=="登陆成功"){
				$("#user_model").attr("style","visibility : hidden;");
				$("#login_hidden").attr("style","visibility : visible;");
				$("#login_visible").attr("style","display:none;");
				$("#sign_visible").attr("style","display:none;");

			}else{
				$("#sign_info").html(JSON.stringify(result));
			}

		},
		error: function () {
			$("#sign_info").html("登录发生错误，请联系工作人员！");
		}
	});
	console.log("??"+phone+"////"+pass);
}


//  点击加载更多函数
function  loadmore() {

		$("#loadmore1").attr("style","display:block;");
		$("#nomore").attr("style","display:block;");
		$("#havemore").attr("style","display:none;");

}

