
//���ض���
var scrolltotop={
	setting:{
		startline:100, //��ʼ��
		scrollto:0, //������ָ��λ��
		scrollduration:400, //��������ʱ��
		fadeduration:[500,100] //����������ʧ
	},
	controlHTML:'<img src="images/top.png" style="width:30px; height:30px; border:0;" />', //���ض�����ť
	controlattrs:{offsetx:100,offsety:30},//���ذ�ť�̶�λ��
	anchorkeyword:"#top",
	state:{
		isvisible:false,
		shouldvisible:false
	},scrollup:function(){
		if(!this.cssfixedsupport){
			this.$control.css({opacity:0});
		}
		var dest=isNaN(this.setting.scrollto)?this.setting.scrollto:parseInt(this.setting.scrollto);
		if(typeof dest=="string"&&jQuery("#"+dest).length==1){
			dest=jQuery("#"+dest).offset().top;
		}else{
			dest=0;
		}
		this.$body.animate({scrollTop:dest},this.setting.scrollduration);
	},keepfixed:function(){
		var $window=jQuery(window);
		var controlx=$window.scrollLeft()+$window.width()-this.$control.width()-this.controlattrs.offsetx;
		var controly=$window.scrollTop()+$window.height()-this.$control.height()-this.controlattrs.offsety;
		this.$control.css({left:controlx+"px",top:controly+"px"});
	},togglecontrol:function(){
		var scrolltop=jQuery(window).scrollTop();
		if(!this.cssfixedsupport){
			this.keepfixed();
		}
		this.state.shouldvisible=(scrolltop>=this.setting.startline)?true:false;
		if(this.state.shouldvisible&&!this.state.isvisible){
			this.$control.stop().animate({opacity:1},this.setting.fadeduration[0]);
			this.state.isvisible=true;
		}else{
			if(this.state.shouldvisible==false&&this.state.isvisible){
				this.$control.stop().animate({opacity:0},this.setting.fadeduration[1]);
				this.state.isvisible=false;
			}
		}
	},init:function(){
		jQuery(document).ready(function($){
			var mainobj=scrolltotop;
			var iebrws=document.all;
			mainobj.cssfixedsupport=!iebrws||iebrws&&document.compatMode=="CSS1Compat"&&window.XMLHttpRequest;
			mainobj.$body=(window.opera)?(document.compatMode=="CSS1Compat"?$("html"):$("body")):$("html,body");
			mainobj.$control=$('<div id="topcontrol" >'+mainobj.controlHTML+"</div>").css({position:mainobj.cssfixedsupport?"fixed":"absolute",bottom:mainobj.controlattrs.offsety,right:mainobj.controlattrs.offsetx,opacity:0,cursor:"pointer"}).attr({title:"回到顶部"}).click(function(){mainobj.scrollup();return false;}).appendTo("body");if(document.all&&!window.XMLHttpRequest&&mainobj.$control.text()!=""){mainobj.$control.css({width:mainobj.$control.width()});}mainobj.togglecontrol();
			$('a[href="'+mainobj.anchorkeyword+'"]').click(function(){mainobj.scrollup();return false;});
			$(window).bind("scroll resize",function(e){mainobj.togglecontrol();});
		});
	}
};
scrolltotop.init();




/*����>��Ѷ*/


var timeout         = 0;
var closetimer		= 0;
var ddmenuitem      = 0;

function jsddm_open()
{	jsddm_canceltimer();
	jsddm_close();
	ddmenuitem = $(this).find('ul').eq(0).css('visibility', 'visible');}

function jsddm_close()
{	if(ddmenuitem) ddmenuitem.css('visibility', 'hidden');}

function jsddm_timer()
{	closetimer = window.setTimeout(jsddm_close, timeout);}

function jsddm_canceltimer()
{	if(closetimer)
	{	window.clearTimeout(closetimer);
		closetimer = null;}}

$(document).ready(function()
{	$('#jsddm > li').bind('mouseover', jsddm_open);
	$('#jsddm > li').bind('mouseout',  jsddm_timer);});

document.onclick = jsddm_close;


/*��������*/
$(document).ready(function(){
	
	$('.search-li').click(function(){
		
		$('.box2').show();
		$('.cd-user-modal').hide();
		
		});
			
	$('.icon-search-close a').click(function(){
		
		$('.box2').hide();
		
		});
		
		$('.login-link-box').click(function(){
		
		
		$('.cd-user-modal').show();
		
		});
		
	// $('.box').easydrag();
	
	
	});


function shareTo(stype){
	var ftit = '';
	var flink = '';
	var lk = '';
	//��ȡ���±���
	ftit = document.title;
	//��ȡ��ҳ�����ݵĵ�һ��ͼƬ��ַ��Ϊ����ͼ
	flink = document.images[0].src;
	if(typeof flink == 'undefined'){
		flink='';
	}
	//��������û��ͼƬʱ�����÷���ͼƬΪ��վlogo
	if(flink == ''){
		lk = 'http://'+window.location.host+'/static/images/logo.png';
	}
	//������ϴ���ͼƬ����о���·��ƴ��
	if(flink.indexOf('/uploads/') != -1) {
		lk = 'http://'+window.location.host+flink;
	}
	//�ٶȱ༭���Դ�ͼƬ��ȡ
	if(flink.indexOf('ueditor') != -1){
		lk = flink;
	}
	//qq�ռ�ӿڵĴ���
	if(stype=='qzone'){
		window.open('https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url='+document.location.href+'?sharesource=qzone&title='+ftit+'&pics='+lk+'&summary= ');
	}
	//����΢���ӿڵĴ���
	if(stype=='sina'){
		window.open('http://service.weibo.com/share/share.php?url='+document.location.href+'?sharesource=weibo&title='+ftit+'&pic='+lk+'&appkey=2706825840');
	}
	//qq���ѽӿڵĴ���
	if(stype == 'qq'){
		window.open('http://connect.qq.com/widget/shareqq/index.html?url='+document.location.href+'?sharesource=qzone&title='+ftit+'&pics='+lk+'&summary= &desc= ');
	}
	//���ɶ�ά���΢��ɨ�����php���ɣ�Ҳ������jquery.qrcode.js���ʵ�ֶ�ά������
	if(stype == 'wechat'){
		window.open('http://zixuephp.net/inc/qrcode_img.php?url=http://zixuephp.net/article-1.html');
	}
}
