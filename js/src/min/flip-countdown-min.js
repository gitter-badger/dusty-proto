!function($){function d(d,t){this.element=d,this.options=t,this._name=i,this.init()}var i="flipclock",t={pad:function(d){return 10>d?"0"+d:d},time:function(d){if(d)var i=new Date(d),e=new Date,a=new Date(i.getTime()-e.getTime());else var a=new Date;var s=t.pad(d?a.getFullYear()-70:a.getFullYear())+""+t.pad(d?a.getMonth():a.getMonth()+1)+t.pad(d?a.getDate()-1:a.getDate())+t.pad(a.getHours())+t.pad(a.getMinutes())+t.pad(a.getSeconds());return{Y:{d2:s.charAt(2),d1:s.charAt(3)},M:{d2:s.charAt(4),d1:s.charAt(5)},D:{d2:s.charAt(6),d1:s.charAt(7)},h:{d2:s.charAt(8),d1:s.charAt(9)},m:{d2:s.charAt(10),d1:s.charAt(11)},s:{d2:s.charAt(12),d1:s.charAt(13)}}},play:function(d){$("body").removeClass("play");var i=$("ul"+d+" section.active");void 0==i.html()?(i=$("ul"+d+" section").eq(0),i.addClass("ready").removeClass("active").next("section").addClass("active").closest("body").addClass("play")):i.is(":last-child")?($("ul"+d+" section").removeClass("ready"),i.addClass("ready").removeClass("active"),i=$("ul"+d+" section").eq(0),i.addClass("active").closest("body").addClass("play")):($("ul"+d+" section").removeClass("ready"),i.addClass("ready").removeClass("active").next("section").addClass("active").closest("body").addClass("play"))},ul:function(d,i,t){return'<ul class="flip '+d+'">'+this.li("d2",i)+this.li("d1",t)+"</ul>"},li:function(d,i){return'<li class="'+d+'"><section class="ready"><div class="up"><div class="shadow"></div><div class="inn"></div></div><div class="down"><div class="shadow"></div><div class="inn"></div></div></section><section class="active"><div class="up"><div class="shadow"></div><div class="inn">'+i+'</div></div><div class="down"><div class="shadow"></div><div class="inn">'+i+"</div></div></section></li>"}};d.prototype={init:function(){var d,i=!1;this.options&&"clock"!=this.options?"date"==this.options?(d=t.time(),i=!0):(d=t.time(this.options),i=!0):d=t.time(),$(this.element).addClass("flipclock").html((i?t.ul("year",d.Y.d2,d.Y.d1)+t.ul("month",d.M.d2,d.M.d1)+t.ul("day",d.D.d2,d.D.d1):"")+t.ul("hour",d.h.d2,d.h.d1)+t.ul("minute",d.m.d2,d.m.d1)+t.ul("second",d.s.d2,d.s.d1)+'<audio id="flipclick"><source src="https://github.com/gokercebeci/flipclock/blob/master/js/plugins/flipclock/click.mp3?raw=true" type="audio/mpeg"/></audio>'),setInterval($.proxy(this.refresh,this),1e3)},refresh:function(){var d=$(this.element),i;i=this.options&&"clock"!=this.options&&"date"!=this.options?t.time(this.options):t.time(),setTimeout(function(){document.getElementById("flipclick").play()},500),d.find(".second .d1 .ready .inn").html(i.s.d1),t.play(".second .d1"),"0"===i.s.d1&&(d.find(".second .d2 .ready .inn").html(i.s.d2),t.play(".second .d2"),"0"===i.s.d2&&(d.find(".minute .d1 .ready .inn").html(i.m.d1),t.play(".minute .d1"),"0"===i.m.d1&&(d.find(".minute .d2 .ready .inn").html(i.m.d2),t.play(".minute .d2"),"0"===i.m.d2&&(d.find(".hour .d1 .ready .inn").html(i.h.d1),t.play(".hour .d1"),"0"===i.h.d1&&(d.find(".hour .d2 .ready .inn").html(i.h.d2),t.play(".hour .d2"),"0"===i.h.d2&&(d.find(".day .d1 .ready .inn").html(i.D.d1),t.play(".day .d1"),"0"===i.D.d1&&(d.find(".day .d2 .ready .inn").html(i.D.d2),t.play(".day .d2"),"0"===i.D.d2&&(d.find(".month .d1 .ready .inn").html(i.M.d1),t.play(".month .d1"),"0"===i.M.d1&&(d.find(".month .d2 .ready .inn").html(i.M.d2),t.play(".month .d2"),"0"===i.M.d2&&(d.find(".year .d1 .ready .inn").html(i.Y.d1),t.play(".year .d1"),"0"===i.Y.d1&&(d.find(".year .d2 .ready .inn").html(i.Y.d2),t.play(".year .d2"))))))))))))}},$.fn[i]=function(t){return this.each(function(){$(this).data("plugin_"+i)||$(this).data("plugin_"+i,new d(this,t))})}}("undefined"!=typeof jQuery?jQuery:Zepto);
//# sourceMappingURL=./flip-countdown-min.js.map