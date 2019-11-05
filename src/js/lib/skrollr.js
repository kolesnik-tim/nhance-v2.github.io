// ScrollMe
// A jQuery plugin for adding simple scrolling effects to web pages
// http://scrollme.nckprsn.com
var scrollme=function(e) {var t={},a=e(document),n=e(window);return t.body_height=0,t.viewport_height=0,t.viewport_top=0,t.viewport_bottom=0,t.viewport_top_previous=-1,t.elements=[],t.elements_in_view=[],t.property_defaults={opacity:1,translatex:0,translatey:0,translatez:0,rotatex:0,rotatey:0,rotatez:0,scale:1,scalex:1,scaley:1,scalez:1},t.scrollme_selector='.scrollme',t.animateme_selector='.animateme',t.update_interval=10,t.easing_functions={linear:function(e) {return e;},easeout:function(e) {return e*e*e;},easein:function(e) {return 1-(e=1-e)*e*e;},easeinout:function(e) {return e<0.5?4*e*e*e:1-4*(e=1-e)*e*e;}},t.init_events=['ready','page:load','page:change'],t.init_if=function() {return!0;},t.init=function() {return!!t.init_if()&&(t.init_elements(),t.on_resize(),n.on('resize orientationchange',function() {t.on_resize();}),e(document).ready(function() {setTimeout(function() {t.on_resize();},100);}),setInterval(t.update,t.update_interval),!0);},t.init_elements=function() {e(t.scrollme_selector).each(function() {var a={};a.element=e(this);var n=[];e(this).find(t.animateme_selector).addBack(t.animateme_selector).each(function() {var a={};a.element=e(this),a.when=a.element.data('when'),a.from=a.element.data('from'),a.to=a.element.data('to'),a.element.is('[data-crop]')?a.crop=a.element.data('crop'):a.crop=!0,a.element.is('[data-easing]')?a.easing=t.easing_functions[a.element.data('easing')]:a.easing=t.easing_functions.easeout;var i={};a.element.is('[data-opacity]')&&(i.opacity=a.element.data('opacity')),a.element.is('[data-translatex]')&&(i.translatex=a.element.data('translatex')),a.element.is('[data-translatey]')&&(i.translatey=a.element.data('translatey')),a.element.is('[data-translatez]')&&(i.translatez=a.element.data('translatez')),a.element.is('[data-rotatex]')&&(i.rotatex=a.element.data('rotatex')),a.element.is('[data-rotatey]')&&(i.rotatey=a.element.data('rotatey')),a.element.is('[data-rotatez]')&&(i.rotatez=a.element.data('rotatez')),a.element.is('[data-scale]')&&(i.scale=a.element.data('scale')),a.element.is('[data-scalex]')&&(i.scalex=a.element.data('scalex')),a.element.is('[data-scaley]')&&(i.scaley=a.element.data('scaley')),a.element.is('[data-scalez]')&&(i.scalez=a.element.data('scalez')),a.properties=i,n.push(a);}),a.effects=n,t.elements.push(a);});},t.update=function() {window.requestAnimationFrame(function() {t.update_viewport_position(),t.viewport_top_previous!==t.viewport_top&&(t.update_elements_in_view(),t.animate()),t.viewport_top_previous=t.viewport_top;});},t.animate=function() {for(var e=t.elements_in_view.length,a=0;a<e;a++)for(var n=t.elements_in_view[a],i=n.effects.length,o=0;o<i;o++) {var r=n.effects[o];switch(r.when) {case'view':case'span':var s=n.top-t.viewport_height,l=n.bottom;break;case'exit':s=n.bottom-t.viewport_height,l=n.bottom;break;default:s=n.top-t.viewport_height,l=n.top;}r.crop&&(s<0&&(s=0),l>t.body_height-t.viewport_height&&(l=t.body_height-t.viewport_height));var m=(t.viewport_top-s)/(l-s),p=r.from,c=r.to,_=(m-p)/(c-p),u=r.easing(_),d=t.animate_value(m,u,p,c,r,'opacity'),v=t.animate_value(m,u,p,c,r,'translatey'),h=t.animate_value(m,u,p,c,r,'translatex'),f=t.animate_value(m,u,p,c,r,'translatez'),w=t.animate_value(m,u,p,c,r,'rotatex'),g=t.animate_value(m,u,p,c,r,'rotatey'),y=t.animate_value(m,u,p,c,r,'rotatez'),x=t.animate_value(m,u,p,c,r,'scale'),z=t.animate_value(m,u,p,c,r,'scalex'),b=t.animate_value(m,u,p,c,r,'scaley'),k=t.animate_value(m,u,p,c,r,'scalez');'scale'in r.properties&&(z=x,b=x,k=x),r.element.css({opacity:d,transform:'translate3d( '+h+'px , '+v+'px , '+f+'px ) rotateX( '+w+'deg ) rotateY( '+g+'deg ) rotateZ( '+y+'deg ) scale3d( '+z+' , '+b+' , '+k+' )'});}},t.animate_value=function(e,a,n,i,o,r) {var s=t.property_defaults[r];if(!(r in o.properties))return s;var l=o.properties[r],m=i>n;if(e<n&&m)return s;if(e>i&&m)return l;if(e>n&&!m)return s;if(e<i&&!m)return l;var p=s+a*(l-s);switch(r) {case'opacity':p=p.toFixed(2);break;case'translatex':case'translatey':case'translatez':p=p.toFixed(0);break;case'rotatex':case'rotatey':case'rotatez':p=p.toFixed(1);break;case'scale':p=p.toFixed(3);}return p;},t.update_viewport_position=function() {t.viewport_top=n.scrollTop(),t.viewport_bottom=t.viewport_top+t.viewport_height;},t.update_elements_in_view=function() {t.elements_in_view=[];for(var e=t.elements.length,a=0;a<e;a++)t.elements[a].top<t.viewport_bottom&&t.elements[a].bottom>t.viewport_top&&t.elements_in_view.push(t.elements[a]);},t.on_resize=function() {t.update_viewport(),t.update_element_heights(),t.update_viewport_position(),t.update_elements_in_view(),t.animate();},t.update_viewport=function() {t.body_height=a.height(),t.viewport_height=n.height();},t.update_element_heights=function() {for(var e=t.elements.length,a=0;a<e;a++) {var n=t.elements[a].element.outerHeight(),i=t.elements[a].element.offset();t.elements[a].height=n,t.elements[a].top=i.top,t.elements[a].bottom=i.top+n;}},e('docuemnt').ready(function() {t.init();}),t;}(jQuery);
