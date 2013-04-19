 /*
 * TipTip
 * Copyright 2010 Drew Wilson
 * www.drewwilson.com
 * code.drewwilson.com/entry/tiptip-jquery-plugin
 *
 * Version 1.3   -   Updated: Mar. 23, 2010
 *
 * This Plug-In will create a custom tooltip to replace the default
 * browser tooltip. It is extremely lightweight and very smart in
 * that it detects the edges of the browser window and will make sure
 * the tooltip stays within the current window size. As a result the
 * tooltip will adjust itself to be displayed above, below, to the left 
 * or to the right depending on what is necessary to stay within the
 * browser window. It is completely customizable as well via CSS.
 *
 * This TipTip jQuery plug-in is dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 *
 *
 * Has been changed:
 *
 * @author: 'weig'
 * @date: 2012-9-22
 *
 * @changes: make functions become candidates for content options, which means people can use content togenerate dynamic tipTip content 
 */
(function(c){c.fn.tipTip=function(A){var a=c.extend({activation:"hover",keepAlive:false,aliveDelay:3E3,maxWidth:"200px",edgeOffset:3,defaultPosition:"bottom",delay:400,fadeIn:200,fadeOut:200,attribute:"title",content:false,enter:function(){},exit:function(){}},A);if(c("#tiptip_holder").length<=0){var g=c('<div id="tiptip_holder" style="max-width:'+a.maxWidth+';"></div>'),k=c('<div id="tiptip_content"></div>'),r=c('<div id="tiptip_arrow"></div>');c("body").append(g.html(k).prepend(r.html('<div id="tiptip_arrow_inner"></div>')))}else{g=c("#tiptip_holder");k=c("#tiptip_content");r=c("#tiptip_arrow")}var h=false;return this.each(function(){var l=c(this),s=a.content?c.isFunction(a.content)?a.content(l,a):a.content:l.attr(a.attribute);if(s!=""){a.content||l.removeAttr(a.attribute);var p=false;if(a.activation=="hover"){l.hover(function(d){d.stopImmediatePropagation();v.call(this,s);if(a.keepAlive){h&&clearTimeout(h);h=setTimeout(function(){m.call(k)},a.aliveDelay)}},function(d){d.stopImmediatePropagation();a.keepAlive||m.call(this)});a.keepAlive&&k.hover(function(d){d.stopImmediatePropagation();h&&clearTimeout(h)},function(d){d.stopImmediatePropagation();m.call(this)})}else if(a.activation=="focus")l.focus(function(){v.call(this,s)}).blur(function(){m.call(this)});else if(a.activation=="click"){l.click(function(){v.call(this,s);return false}).hover(function(){},function(){a.keepAlive||m.call(this)});a.keepAlive&&k.hover(function(){},function(){m.call(this)})}var v=function(d){a.enter.call(this);var e=c(this);k.html(d);g.hide().removeAttr("class").css("margin","0");r.removeAttr("style");d=parseInt(e.offset().top);var f=parseInt(e.offset().left),n=parseInt(e.outerWidth());e=parseInt(e.outerHeight());var o=g.outerWidth(),i=g.outerHeight(),t=Math.round((n-o)/2),x=Math.round((e-i)/2),u=Math.round(f+t),j=Math.round(d+e+a.edgeOffset),b="",q="",w=Math.round(o-12)/2;if(a.defaultPosition=="bottom")b="_bottom";else if(a.defaultPosition=="top")b="_top";else if(a.defaultPosition=="left")b="_left";else if(a.defaultPosition=="right")b="_right";var y=t+f<parseInt(c(window).scrollLeft()),z=o+f>parseInt(c(window).width());if(y&&t<0||b=="_right"&&!z||b=="_left"&&f<o+a.edgeOffset+5){b="_right";q=Math.round(i-13)/2;w=-12;u=Math.round(f+n+a.edgeOffset);j=Math.round(d+x)}else if(z&&t<0||b=="_left"&&!y){b="_left";q=Math.round(i-13)/2;w=Math.round(o);u=Math.round(f-(o+a.edgeOffset+5));j=Math.round(d+x)}f=d+e+a.edgeOffset+i+8>parseInt(c(window).height()+c(window).scrollTop());n=d+e-(a.edgeOffset+i+8)<0;if(f||b=="_bottom"&&f||b=="_top"&&!n){if(b=="_top"||b=="_bottom")b="_top";else b+="_top";q=i;j=Math.round(d-(i+5+a.edgeOffset))}else if(n|(b=="_top"&&n)||b=="_bottom"&&!f){if(b=="_top"||b=="_bottom")b="_bottom";else b+="_bottom";q=-12;j=Math.round(d+e+a.edgeOffset)}if(b=="_right_top"||b=="_left_top")j+=5;else if(b=="_right_bottom"||b=="_left_bottom")j-=5;if(b=="_left_top"||b=="_left_bottom")u+=5;r.css({"margin-left":w+"px","margin-top":q+"px"});g.css({"margin-left":u+"px","margin-top":j+"px"}).attr("class","tip"+b);p&&clearTimeout(p);p=setTimeout(function(){g.stop(true,true).fadeIn(a.fadeIn)},a.delay)},m=function(){a.exit.call(this);h&&clearTimeout(h);p&&clearTimeout(p);g.fadeOut(a.fadeOut)}}})}})(jQuery);
