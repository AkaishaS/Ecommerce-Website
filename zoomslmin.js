/*www.zoomsl.tw1.ru Sergey Zaragulov skype: deeserge icq: 287295769 sergeland@mail.ru*/
(function(e){var k=!0,r=!1;e.fn.imagezoomsl=function(d){d=d||{};return this.each(function(){if(!e(this).is("img"))return k;var c=this;setTimeout(function(){e(new Image).on('load',function(){y.F(e(c),d)}).attr("src",e(c).attr("src"))},30)})};var y={};e.extend(y,{dsetting:{loadinggif:"",loadopacity:0.1,loadbackground:"#878787",cursorshade:k,magnifycursor:"crosshair",cursorshadecolor:"#fff",cursorshadeopacity:0.3,cursorshadeborder:"1px solid black",zindex:"",stepzoom:0.5,zoomrange:[2,2],zoomstart:2,disablewheel:k,showstatus:k,
    showstatustime:2E3,statusdivborder:"1px solid black",statusdivbackground:"#C0C0C0",statusdivpadding:"4px",statusdivfont:"bold 13px Arial",statusdivopacity:0.8,magnifierpos:"right",magnifiersize:[0,0],magnifiereffectanimate:"showIn",innerzoom:r,innerzoommagnifier:r,descarea:r,leftoffset:15,rightoffset:15,switchsides:k,magnifierborder:"1px solid black",textdnbackground:"#fff",textdnpadding:"10px",textdnfont:"13px/20px cursive",scrollspeedanimate:5,zoomspeedanimate:7,loopspeedanimate:2.5,magnifierspeedanimate:350,
    classmagnifier:"magnifier",classcursorshade:"cursorshade",classstatusdiv:"statusdiv",classtextdn:"textdn"},U:-1!=navigator.userAgent.indexOf("MSIE")?k:r,T:function(d){var c=0,a;d.parents().add(d).each(function(){a=e(this).css("zIndex");a=isNaN(a)?0:+a;c=Math.max(c,a)});return c},L:function(d,c,a){if("left"==d)return d=-a.f.b*a.k+a.e.b,0<c?0:c<d?d:c;d=-a.f.d*a.k+a.e.d;return 0<c?0:c<d?d:c},H:function(d){var c=this,a=d.data("specs");if(a){var e=a.r.offsetsl(),s=c.a.g-e.left,l=c.a.i-e.top;c.a.B+=(c.a.g-
    c.a.B)/2.45342;c.a.C+=(c.a.i-c.a.C)/2.45342;a.G.css({left:c.a.B-10,top:c.a.C+20});var h=Math.round(a.e.b/a.k),b=Math.round(a.e.d/a.k);c.a.z+=(s-c.a.z)/a.c.loopspeedanimate;c.a.A+=(l-c.a.A)/a.c.loopspeedanimate;a.K.css({left:a.f.b>h?Math.min(a.f.b-h,Math.max(0,c.a.z-h/2))+e.left-a.w.t.N:e.left-a.w.t.N,top:a.f.d>b?Math.min(a.f.d-b,Math.max(0,c.a.A-b/2))+e.top-a.w.t.R:e.top-a.w.t.R});a.c.innerzoommagnifier&&(c.a.p+=(c.a.g-c.a.p)/a.c.loopspeedanimate,c.a.q+=(c.a.i-c.a.q)/a.c.loopspeedanimate,a.l.css({left:c.a.p-
    Math.round(a.e.b/2),top:c.a.q-Math.round(a.e.d/2)}),a.s.css({left:c.a.p-Math.round(a.e.b/2),top:c.a.q+a.e.d/2}));c.a.u+=(s-c.a.u)/a.c.scrollspeedanimate;c.a.v+=(l-c.a.v)/a.c.scrollspeedanimate;a.J.css({left:c.L("left",-c.a.u*a.k+a.e.b/2,a),top:c.L("top",-c.a.v*a.k+a.e.d/2,a)});c.a.n=setTimeout(function(){c.H(d)},30)}},I:function(d){var c=this,a=d.data("specs");a&&(a.h+=(a.k-a.h)/a.c.zoomspeedanimate,a.h=Math.round(1E3*a.h)/1E3,a.K.css({width:a.f.b>Math.round(a.e.b/a.h)?Math.round(a.e.b/a.h):a.f.b,
    height:a.f.d>Math.round(a.e.d/a.h)?Math.round(a.e.d/a.h):a.f.d}),a.J.css({width:Math.round(a.h*a.m.b*(a.f.b/a.m.b)),height:Math.round(a.h*a.m.d*(a.f.d/a.m.d))}),c.a.o=setTimeout(function(){c.I(d)},30))},a:{},P:function(d){function c(){}var a=d.data("specs");d=a.c.magnifiersize[0];var p=a.c.magnifiersize[1],s,l=a.r.offsetsl(),h=0,b=0;s=l.left+("left"===a.c.magnifierpos?-a.e.b-a.c.leftoffset:a.f.b+a.c.rightoffset);a.c.switchsides&&!a.c.innerzoom&&("left"!==a.c.magnifierpos&&s+a.e.b+a.c.leftoffset>=
    e(window).width()&&l.left-a.e.b>=a.c.leftoffset?s=l.left-a.e.b-a.c.leftoffset:"left"===a.c.magnifierpos&&0>s&&(s=l.left+a.f.b+a.c.rightoffset));h=s;b=l.top;a.l.css({visibility:"visible",display:"none"});a.c.descarea&&(h=e(a.c.descarea).offsetsl().left,b=e(a.c.descarea).offsetsl().top);a.c.innerzoommagnifier&&(h=this.a.g-Math.round(a.e.b/2),b=this.a.i-Math.round(a.e.d/2));c=function(){a.s.stop(k,k).fadeIn(a.c.magnifierspeedanimate);a.c.innerzoommagnifier||a.s.css({left:h,top:b+p})};a.c.innerzoom&&
    (h=l.left,b=l.top,c=function(){a.r.css({visibility:"hidden"});a.s.css({left:h,top:b+p}).stop(k,k).fadeIn(a.c.magnifierspeedanimate)});switch(a.c.magnifiereffectanimate){case "slideIn":a.l.css({left:h,top:b-p/3,width:d,height:p}).stop(k,k).show().animate({top:b},a.c.magnifierspeedanimate,"easeOutBounceSL",c);break;case "showIn":a.l.css({left:l.left+Math.round(a.f.b/2),top:l.top+Math.round(a.f.d/2),width:Math.round(a.e.b/5),height:Math.round(a.e.d/5)}).stop(k,k).show().css({opacity:"0.1"}).animate({left:h,
    top:b,opacity:"1",width:d,height:p},a.c.magnifierspeedanimate,c);break;default:a.l.css({left:h,top:b,width:d,height:p}).stop(k,k).fadeIn(a.c.magnifierspeedanimate,c)}a.c.showstatus&&(a.Q||a.M)?a.G.html(a.Q+'<div style="font-size:80%">'+a.M+"</div>").stop(k,k).fadeIn().delay(a.c.showstatustime).fadeOut("slow"):a.G.hide()},S:function(d){var c=d.data("specs");d=c.r.offsetsl();switch(c.c.magnifiereffectanimate){case "showIn":c.l.stop(k,k).animate({left:d.left+Math.round(c.f.b/2),top:d.top+Math.round(c.f.d/
    2),opacity:"0.1",width:Math.round(c.e.b/5),height:Math.round(c.e.d/5)},c.c.magnifierspeedanimate,function(){c.l.hide()});break;default:c.l.stop(k,k).fadeOut(c.c.magnifierspeedanimate)}},F:function(d,c,a){function p(){this.i=this.g=0}function s(a){g.data("specs",{c:b,Q:y,M:E,r:d,l:u,J:a,G:n,K:q,s:t,f:m,m:{b:a.width(),d:a.height()},e:{b:u.width(),d:u.height()},w:{b:q.width(),d:q.height(),t:{N:parseInt(q.css("border-left-width"))||0,R:parseInt(q.css("border-top-width"))||0}},h:B,k:B})}function l(a){return!a.complete||
    "undefined"!==typeof a.naturalWidth&&0===a.naturalWidth?r:k}function h(a){var b=a||window.event,c=[].slice.call(arguments,1),d=0,f=0,g=0,h=0,h=0;a=e.event.fix(b);a.type="mousewheel";b.wheelDelta&&(d=b.wheelDelta);b.detail&&(d=-1*b.detail);b.deltaY&&(d=g=-1*b.deltaY);b.deltaX&&(f=b.deltaX,d=-1*f);void 0!==b.wheelDeltaY&&(g=b.wheelDeltaY);void 0!==b.wheelDeltaX&&(f=-1*b.wheelDeltaX);h=Math.abs(d);if(!z||h<z)z=h;h=Math.max(Math.abs(g),Math.abs(f));if(!w||h<w)w=h;b=0<d?"floor":"ceil";d=Math[b](d/z);f=
    Math[b](f/w);g=Math[b](g/w);c.unshift(a,d,f,g);return(e.event.dispatch||e.event.handle).apply(this,c)}var b=e.extend({},this.dsetting,c),x=b.zindex||this.T(d),m={b:d.width(),d:d.height()},p=new p,y=d.attr("data-title")?d.attr("data-title"):"",E=d.attr("data-help")?d.attr("data-help"):"",C=d.attr("data-text-bottom")?d.attr("data-text-bottom"):"",f=this,B,v,u,q,n,g,t;if(0===m.d||0===m.b)e(new Image).on('load',function(){f.F(d,c)}).attr("src",d.attr("src"));else{d.css({visibility:"visible"});b.j=d.attr("data-large")||
    d.attr("src");for(v in b)""===b[v]&&(b[v]=this.dsetting[v]);B=b.zoomrange[0]<b.zoomstart?b.zoomstart:b.zoomrange[0];if("0,0"===b.magnifiersize.toString()||""===b.magnifiersize.toString())b.magnifiersize=b.innerzoommagnifier?[m.b/2,m.d/2]:[m.b,m.d];b.descarea&&e(b.descarea).length?0===e(b.descarea).width()||0===e(b.descarea).height()?b.descarea=r:b.magnifiersize=[e(b.descarea).width(),e(b.descarea).height()]:b.descarea=r;b.innerzoom&&(b.magnifiersize=[m.b,m.d],c.cursorshade||(b.cursorshade=r),c.scrollspeedanimate||
    (b.scrollspeedanimate=10));if(b.innerzoommagnifier){if(!c.magnifycursor&&(window.chrome||window.sidebar))b.magnifycursor="none";b.cursorshade=r;b.magnifiereffectanimate="fadeIn"}v=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"];var A="onwheel"in document||9<=document.documentMode?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],z,w;if(e.event.fixHooks)for(var D=v.length;D;)e.event.fixHooks[v[--D]]=e.event.mouseHooks;e.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=
    A.length;a;)this.addEventListener(A[--a],h,r);else this.onmousewheel=h},teardown:function(){if(this.removeEventListener)for(var a=A.length;a;)this.removeEventListener(A[--a],h,r);else this.onmousewheel=null}};e.fn.offsetsl=function(){var a=this.get(0);if(a.getBoundingClientRect)a=this.offset();else{for(var b=0,c=0;a;)b+=parseInt(a.offsetTop),c+=parseInt(a.offsetLeft),a=a.offsetParent;a={top:b,left:c}}return a};e.easing.easeOutBounceSL=function(a,b,c,d,e){return(b/=e)<1/2.75?d*7.5625*b*b+c:b<2/2.75?
    d*(7.5625*(b-=1.5/2.75)*b+0.75)+c:b<2.5/2.75?d*(7.5625*(b-=2.25/2.75)*b+0.9375)+c:d*(7.5625*(b-=2.625/2.75)*b+0.984375)+c};u=e("<div />").attr({"class":b.classmagnifier}).css({position:"absolute",zIndex:x,width:b.magnifiersize[0],height:b.magnifiersize[1],left:-1E4,top:-1E4,visibility:"hidden",overflow:"hidden"}).appendTo(document.body);c.classmagnifier||u.css({border:b.magnifierborder});q=e("<div />");b.cursorshade&&(q.attr({"class":b.classcursorshade}).css({zIndex:x,display:"none",position:"absolute",
    width:Math.round(b.magnifiersize[0]/b.zoomstart),height:Math.round(b.magnifiersize[1]/b.zoomstart),top:0,left:0}).appendTo(document.body),c.classcursorshade||q.css({border:b.cursorshadeborder,opacity:b.cursorshadeopacity,backgroundColor:b.cursorshadecolor}));b.loadinggif||(b.loadinggif="data:image/gif;base64,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");
    n=e("<div />").attr({"class":b.classstatusdiv+" preloadevt"}).css({position:"absolute",display:"none",zIndex:x,top:0,left:0}).html('<img src="'+b.loadinggif+'" />').appendTo(document.body);g=e("<div />").attr({"class":"tracker"}).css({zIndex:x,backgroundImage:f.U?"url(cannotbe)":"none",position:"absolute",width:m.b,height:m.d,left:a?d.offsetsl().left:-1E4,top:a?d.offsetsl().top:-1E4}).appendTo(document.body);t=e("<div />");C&&(t.attr({"class":b.classtextdn}).css({position:"absolute",zIndex:x,left:0,
    top:0,display:"none"}).html(C).appendTo(document.body),c.classtextdn||t.css({border:b.magnifierborder,background:b.textdnbackground,padding:b.textdnpadding,font:b.textdnfont}),t.css({width:b.magnifiersize[0]-parseInt(t.css("padding-left"))-parseInt(t.css("padding-right"))}));g.data("largeimage",b.j);e(window).bind("resize",function(){var a=d.offsetsl();g.data("loadimgevt")&&g.css({left:a.left,top:a.top});n.filter(".preloadevt").css({left:a.left+m.b/2-n.width()/2,top:a.top+m.d/2-n.height()/2,visibility:"visible"})});
    e(document).mousemove(function(a){f.a.D=a.pageX;f.a.g!==f.a.D&&(clearTimeout(f.a.n),clearTimeout(f.a.o),d.css({visibility:"visible"}))});d.mouseover(function(){var a=d.offsetsl();g.css({left:a.left,top:a.top}).show()});g.mouseover(function(a){f.a.g=a.pageX;f.a.i=a.pageY;p.g=a.pageX;p.i=a.pageY;f.a.D=a.pageX;var h=d.offsetsl();a=f.a.g-h.left;h=f.a.i-h.top;f.a.z=a;f.a.A=h;f.a.u=a;f.a.v=h;f.a.p=f.a.g;f.a.q=f.a.i;f.a.B=f.a.g-10;f.a.C=f.a.i+20;g.css({cursor:b.magnifycursor});b.j=d.attr("data-large")||
    d.attr("src");n.show();clearTimeout(f.a.n);clearTimeout(f.a.o);b.j!==g.data("largeimage")&&(e(new Image).on('load',function(){}).attr("src",b.j),e(g).unbind(),e(n).remove(),e(q).remove(),e(u).remove(),e(g).remove(),e(t).remove(),f.F(d,c,k));g.data("loadevt")&&(q.fadeIn(),f.P(g),f.H(g),f.I(g))});g.mousemove(function(a){b.j=d.attr("data-large")||d.attr("src");b.j!==g.data("largeimage")&&(e(new Image).on('load',function(){}).attr("src",b.j),e(g).unbind(),e(n).remove(),e(q).remove(),e(u).remove(),e(g).remove(),
    e(t).remove(),f.F(d,c,k));f.a.g=a.pageX;f.a.i=a.pageY;p.g=a.pageX;p.i=a.pageY;f.a.D=a.pageX});g.mouseout(function(){clearTimeout(f.a.n);clearTimeout(f.a.o);d.css({visibility:"visible"});t.hide();q.add(n.not(".preloadevt")).stop(k,k).hide()});g.one("mouseover",function(){var a=d.offsetsl(),h=e('<img src="'+b.j+'"/>').css({position:"relative",maxWidth:"none"}).appendTo(u);f.O[b.j]||(g.css({opacity:b.loadopacity,background:b.loadbackground}),g.data("loadimgevt",k),n.css({left:a.left+m.b/2-n.width()/
    2,top:a.top+m.d/2-n.height()/2,visibility:"visible"}));h.bind("loadevt",function(a,e){if("error"!==e.type){g.mouseout(function(){f.S(g);clearTimeout(f.a.n);clearTimeout(f.a.o);d.css({visibility:"visible"});t.hide();g.hide().css({left:-1E4,top:-1E4})});g.mouseover(function(){l.h=l.k});g.data("loadimgevt",r);g.css({opacity:0,cursor:b.magnifycursor});n.empty();c.classstatusdiv||n.css({border:b.statusdivborder,background:b.statusdivbackground,padding:b.statusdivpadding,font:b.statusdivfont,opacity:b.statusdivopacity});
    n.hide().removeClass("preloadevt");f.O[b.j]=k;s(h);p.g==f.a.D&&(q.fadeIn(),f.P(g),clearTimeout(f.a.n),clearTimeout(f.a.o),f.H(g),f.I(g));var l=g.data("specs");h.css({width:b.zoomstart*l.m.b*(m.b/l.m.b),height:b.zoomstart*l.m.d*(m.d/l.m.d)});g.data("loadevt",k);b.zoomrange&&b.zoomrange[1]>b.zoomrange[0]?g.bind("mousewheel",function(a,c){var d=l.k,d="in"==(0>c?"out":"in")?Math.min(d+b.stepzoom,b.zoomrange[1]):Math.max(d-b.stepzoom,b.zoomrange[0]);l.k=d;l.V=c;a.preventDefault()}):b.disablewheel&&g.bind("mousewheel",
    function(a){a.preventDefault()})}});l(h.get(0))?h.trigger("loadevt",{type:"load"}):h.bind("load error",function(a){h.trigger("loadevt",a)})})}},O:{}})})(jQuery,window);