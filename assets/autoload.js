if (oCore['core.is_admincp'] != true) {

    !(function(){var a,b;a=this.jQuery||window.jQuery,b=a(window),a.fn.stick_in_parent=function(c){var d,e,f,g,h,i,j,k,l,m,n,o,p;for(null==c&&(c={}),m=c.sticky_class,g=c.inner_scrolling,l=c.recalc_every,k=c.parent,i=c.offset_top,h=c.spacer,f=c.bottoming,null==i&&(i=0),null==k&&(k=void 0),null==g&&(g=!0),null==m&&(m="is_stuck"),d=a(document),null==f&&(f=!0),j=function(a){var b,c,d;return window.getComputedStyle?(d=a[0],b=window.getComputedStyle(a[0]),c=parseFloat(b.getPropertyValue("width"))+parseFloat(b.getPropertyValue("margin-left"))+parseFloat(b.getPropertyValue("margin-right")),"border-box"!==b.getPropertyValue("box-sizing")&&(c+=parseFloat(b.getPropertyValue("border-left-width"))+parseFloat(b.getPropertyValue("border-right-width"))+parseFloat(b.getPropertyValue("padding-left"))+parseFloat(b.getPropertyValue("padding-right"))),c):a.outerWidth(!0)},n=function(c,e,n,o,p,q,r,s){var t,u,v,w,x,y,z,A,B,C,D,E;if(!c.data("sticky_kit")){if(c.data("sticky_kit",!0),x=d.height(),z=c.parent(),null!=k&&(z=z.closest(k)),!z.length)throw"failed to find stick parent";if(v=!1,t=!1,D=null!=h?h&&c.closest(h):a("<div />"),D&&D.css("position",c.css("position")),A=function(){var a,b,f;if(!s)return x=d.height(),a=parseInt(z.css("border-top-width"),10),b=parseInt(z.css("padding-top"),10),e=parseInt(z.css("padding-bottom"),10),n=z.offset().top+a+b,o=z.height(),v&&(v=!1,t=!1,null==h&&(c.insertAfter(D),D.detach()),c.css({position:"",top:"",width:"",bottom:""}).removeClass(m),f=!0),p=c.offset().top-(parseInt(c.css("margin-top"),10)||0)-i,q=c.outerHeight(!0),r=c.css("float"),D&&D.css({width:j(c),height:q,display:c.css("display"),"vertical-align":c.css("vertical-align"),float:r}),f?E():void 0},A(),q!==o)return w=void 0,y=i,C=l,E=function(){var a,j,k,u,B,E;if(!s)return k=!1,null!=C&&(C-=1,C<=0&&(C=l,A(),k=!0)),k||d.height()===x||(A(),k=!0),u=b.scrollTop(),null!=w&&(j=u-w),w=u,v?(f&&(B=u+q+y>o+n,t&&!B&&(t=!1,c.css({position:"fixed",bottom:"",top:y}).trigger("sticky_kit:unbottom"))),u<p&&(v=!1,y=i,null==h&&("left"!==r&&"right"!==r||c.insertAfter(D),D.detach()),a={position:"",width:"",top:""},c.css(a).removeClass(m).trigger("sticky_kit:unstick")),g&&(E=b.height(),q+i>E&&(t||(y-=j,y=Math.max(E-q,y),y=Math.min(i,y),v&&c.css({top:y+"px"}))))):u>p&&(v=!0,a={position:"fixed",top:y},a.width="border-box"===c.css("box-sizing")?c.outerWidth()+"px":c.width()+"px",c.css(a).addClass(m),null==h&&(c.after(D),"left"!==r&&"right"!==r||D.append(c)),c.trigger("sticky_kit:stick")),v&&f&&(null==B&&(B=u+q+y>o+n),!t&&B)?(t=!0,"static"===z.css("position")&&z.css({position:"relative"}),c.css({position:"absolute",bottom:e,top:"auto"}).trigger("sticky_kit:bottom")):void 0},B=function(){return A(),E()},u=function(){if(s=!0,b.off("touchmove",E),b.off("scroll",E),b.off("resize",B),a(document.body).off("sticky_kit:recalc",B),c.off("sticky_kit:detach",u),c.removeData("sticky_kit"),c.css({position:"",bottom:"",top:"",width:""}),z.position("position",""),v)return null==h&&("left"!==r&&"right"!==r||c.insertAfter(D),D.remove()),c.removeClass(m)},b.on("touchmove",E),b.on("scroll",E),b.on("resize",B),a(document.body).on("sticky_kit:recalc",B),c.on("sticky_kit:detach",u),setTimeout(E,0)}},o=0,p=this.length;o<p;o++)e=this[o],n(a(e));return this}}).call(this);

    function initStick()
    {
        var top = parseInt(window.cmStickyOffsetTop) || 0;
        var w = $(window).width();
        if (window.cmStickyBlocksSelector && w > 768) {
            $(window.cmStickyBlocksSelector).stick_in_parent({
                offset_top:  top
            });
        } else if(window.cmStickyBlocksSelector && w <= 768) {
            $(window.cmStickyBlocksSelector).trigger('sticky_kit:detach');
        }
    };

    $Ready(function() {
        initStick();
        $(window).resize(function(){
            initStick();
        })
    });
}
