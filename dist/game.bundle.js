!function(e){var t={};function l(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=t,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l(l.s=5)}([function(e,t,l){"use strict";l.r(t);var n=l(3);const a={};a.size=4,a.keys={},a.gameDom=document.querySelector(".game"),a.gameDom.style.left="0px",a.gameDom.style.top="0px",a.domMap=[],a.objectsFound=[],a.items=["ethernet","wifirouter","power","key","donut","list"],a.drawElement=function(e){e.isRendered=!0,a.gameDom.appendChild(e.dom)},a.remove=function(e){a.domMap[e.y][e.x]=void 0},a.addObject=function(e){let t=function(){let e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(var l=0;l<5;l++)e+=t.charAt(Math.floor(Math.random()*t.length));return e}(),l={name:e,id:t};a.objectsFound.push(l),n.default.addItemToInvent(e,t)},a.removeObject=function(e){for(var t=a.objectsFound.length-1;t>=0;t--)if(a.objectsFound[t].name===e)return n.default.setAsTaken(a.objectsFound[t].id),void a.objectsFound.splice(t,1)},window.addEventListener("keydown",function(e){a.keys[e.keyCode]=!0},!1),window.addEventListener("keyup",function(e){a.keys[e.keyCode]=!1},!1),t.default=a},function(e,t,l){"use strict";l.r(t);var n=l(0),a=l(2);const r={};var o,i,d=[["wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1"],["wall1","","","","","","","","","","","","","wall1","","","","","","","","","","","wall1","","","","","","","","","","","","","wall1","","","","","","","","","","","","","wall1"],["wall1","","","","","","","","","","","","","wall1","","","","","","","","","","","wall1","","","","","","","","","","","","","wall1","","","","","","","","","","","","","wall1"],["wall1","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","wifi","","","","","","","","wall1"],["wall1","ethernet","","flower","desktop","pnj","","","","","","","","","","","","","","flower","","pnj","","","","","","","pnj","flower","","pnj","","donut","","flower","","","","","pnj","","","","flower","pnj","desktop","pnj","wifirouter","","wall1"],["wall1","ground","ground","ground","ground","ground","ground","ground","ground","ground","","","stair flip","ground","stair","","","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","wall1"],["wall1","","","","","","","","","","","stair flip","substair flip","wall1","substair","stair","","","","","","","","","wall1","","","","","","","","","","","","","wall1","","","","","","","","","","","","","wall1"],["wall1","","","","","","","","","","stair flip","substair flip","wall1","wall1","wall1","substair","stair","","","","","","","","wall1","","","","","","","","","","","","","wall1","","","","","","","","","","","","","wall1"],["wall1","","wifi","","","","","","","stair flip","substair flip","wall1","wall1","wall1","wall1","wall1","substair","stair","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","wall1"],["wall1","power","desktop","pnj","","","pnj","","stair flip","substair flip","wall1","wall1","wall1","wall1","wall1","wall1","wall1","substair","stair","","","flower","","","","","","pnj","","","donut","pnj","","flower","pnj","","","","","","","","flower","","pnj","","","","","","wall1"],["wall1","ground","ground","ground","ground","ground","ground","ground","substair flip","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","substair","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","","","stair flip","wall1"],["wall1","","","","","","","","","","","","","wall1","","","","","","","","","","","wall1","","","","","","","","","","","","","wall1","","","","","","","","","","","stair flip","substair flip","wall1"],["wall1","","","","","","","","","","","","","wall1","","","","","","","","","","","wall1","","","","","","","","","","","","","wall1","","","","","","","","","","stair flip","substair flip","wall1","wall1"],["wall1","","wifi","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","stair flip","substair flip","wall1","wall1","wall1"],["wall1","bed","","","desktop","event-0","event-3","","","flower","","","","door","event-4","","pnj","","flower","","","","","","","","","","","","pnj","","flower","","","","pnj","","","","flower","pnj","","","","stair flip","substair flip","wall1","wall1","wall1","wall1"],["wall1","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","","","stair flip","ground","stair","","","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","substair flip","wall1","wall1","wall1","wall1","wall1"],["wall1","","","","","","","","","","","","","wall1","","","","","","","","","stair flip","substair flip","wall1","substair","stair","","","","","","","","","","","wall1","","","","","","","","","","","","","wall1"],["wall1","","it-plate","","","","","","","","","","","wall1","","","","","","","","stair flip","substair flip","wall1","wall1","wall1","substair","stair","","","","","","","","","","wall1","","","","","","","","","","","","","wall1"],["wall1","","","","","","","","","","","","","","","","","","","","stair flip","substair flip","wall1","wall1","wall1","wall1","wall1","substair","stair","","","","","","","","","","","","","","","","","","","wifi","","","wall1"],["wall1","it1","it2","event-1","","","","","","","","","","","","","pnj","","","stair flip","substair flip","wall1","wall1","wall1","wall1","wall1","wall1","wall1","substair","stair","","","","","","pnj","","","","desktop","pnj","","desktop","","pnj","desktop","","","desktop","key","wall1"],["wall1","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","substair flip","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","substair","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","wall1"]],s=["wall1","ground","substair","stair","stair flip","substair flip","it1","it2"],u=["pnj"],w=["it-plate","desktop","bed","door","flower"],f=[];for(o=0;o<d.length;o++){var g=d[o],c=[];for(i=0;i<g.length;i++)if(g[i]){var h=void 0;s.includes(g[i])?(h=new a.Decor(g[i],i,o),c.push(h)):n.default.items.includes(g[i])?(h=new a.Item(g[i],i,o),c.push(h)):u.includes(g[i])?(h=new a.Character("pnj",i,o),f.push(h),c.push({blocking:!1})):"wifi"===g[i]?(h=new a.Wifi(i,o),c.push(h)):w.includes(g[i])&&(h=new a.Element(g[i],i,o,!0),c.push({blocking:!1})),h?n.default.drawElement(h):0===g[i].indexOf("event")&&(h=new a.GameEvent(g[i].split("-")[1],"event",i,o),c.push(h))}else c.push({blocking:!1});n.default.domMap.push(c)}function m(e,t){var l=e.x<=t.x&&e.x+e.w>t.x,n=t.x<=e.x&&t.x+t.w>e.x,a=e.y<=t.y&&e.y+e.h>t.y,r=t.y<=e.y&&t.y+t.h>e.y;if((n||l)&&(a||r)){var o=[];return n&&o.push("left"),l&&o.push("right"),a&&o.push("top"),r&&o.push("bottom"),o.join("-")}return!1}r.getArround=function(e,t,l,a){var r,o,i=Math.floor(e),d=Math.floor(t),s=!1,u=!1,w=!1,f=!1,g={x:e,y:t,w:l,h:a};for(r=i-1;r<=i+1;r++)for(o=d-1;o<=d+1;o++){if(n.default.domMap[o]&&n.default.domMap[o][r])m(g,{x:r,y:o,w:1,h:1})&&n.default.domMap[o][r].blocking&&(r<=i&&(s=!0),r>=i&&(u=!0),o<=d&&(w=!0),o>=d&&(f=!0))}return{left:s,right:u,top:w,bottom:f}},r.getCurrents=function(e,t,l,a){var r,o,i=Math.floor(e),d=Math.floor(t),s=[],u={x:e,y:t,w:l,h:a};for(r=i-1;r<=i+1;r++)for(o=d-1;o<=d+1;o++)if(n.default.domMap[o]&&n.default.domMap[o][r]&&n.default.domMap[o][r].type){var w=m(u,n.default.domMap[o][r].getHitbox());w&&s.push({direction:w,element:n.default.domMap[o][r]})}return f.forEach(function(e){var t=m(e.getHitbox(),u);t&&s.push({direction:t,element:e})}),s},r.moveEnnemies=function(e){f.forEach(function(t){(t.x<t.baseX-1||t.x>t.baseX+1)&&(t.direction*=-1,-1===t.direction?t.currentMovement("walking-left"):t.currentMovement("walking-right")),t.move(t.direction*e,0)})},t.default=r},function(e,t,l){"use strict";l.r(t),l.d(t,"Element",function(){return r}),l.d(t,"Decor",function(){return o}),l.d(t,"Character",function(){return d}),l.d(t,"Item",function(){return s}),l.d(t,"GameEvent",function(){return u}),l.d(t,"Wifi",function(){return w});var n=l(0),a=l(4);class r{constructor(e,t,l,n){this.type=e,this.x=t,this.y=l,this.draw=n,this.draw&&(this.dom=document.createElement("div"),this.type.split(" ").forEach(e=>this.dom.classList.add(e)),this.dom.classList.add("sprite"),this.dom.style.top=this.y*i()+"px",this.dom.style.left=this.x*i()+"px"),this.isRendered=!1}move(e,t){this.x+=e,this.y+=t,this.dom.style.top=this.y*i()+"px",this.dom.style.left=this.x*i()+"px"}touch(e){}getHitbox(){return{x:this.x,y:this.y,w:1,h:1}}destroy(){this.draw&&this.dom.remove(),n.default.remove(this)}}class o extends r{constructor(e,t,l){super(e,t,l,!0),-1===this.type.indexOf("stair")&&(this.blocking=!0)}touch(e){if(0===this.type.indexOf("stair")&&-1!==this.type.indexOf("flip")){var t=(n=e.getHitbox()).x+n.w/2;if(Math.floor(t)===this.x){var l=t-this.x;n.y+n.h>this.y+1-l&&(e.move(0,-(n.y+n.h-(this.y+1-l))),e.isFalling&&e.falling(!1))}}else if(0===this.type.indexOf("stair")&&-1===this.type.indexOf("flip")){var n;t=(n=e.getHitbox()).x+n.w/2;if(Math.floor(t)===this.x){l=1+this.x-t;n.y+n.h>this.y+1-l&&(e.move(0,-(n.y+n.h-(this.y+1-l))),e.isFalling&&e.falling(!1))}}}}function i(){return 16*n.default.size}class d extends r{constructor(e,t,l){switch(e){case"player":super(e,t,l,!0),this.lastSelfieTime=(new Date).getTime(),this.selfieCount=0;break;case"pnj":super(`pnj${Math.floor(3*Math.random())} pnj`,t,l,!0),this.baseX=t,this.direction=0===Math.floor(2*Math.random())?-1:1;break;default:throw new Error(`Type ${e} unknown for class Character`)}}currentMovement(e){["walking-left","walking-right","hurted-left","hurted-right","dead"].forEach(t=>{t!==e?this.dom.classList.remove(t):this.dom.classList.add(t)}),"walking-left"===e||"hurted-right"===e?this.dom.classList.add("flip"):"walking-right"!==e&&"hurted-left"!==e||this.dom.classList.remove("flip")}move(e,t){super.move(e,t),"player"===this.type&&(n.default.gameDom.style.left=parseFloat(n.default.gameDom.style.left.split("px")[0])+e*i()*-1+"px",n.default.gameDom.style.top=parseFloat(n.default.gameDom.style.top.split("px")[0])+t*i()*-1+"px")}startJump(){this.jumping||(this.jumping=(new Date).getTime())}startHurt(e){this.hurted||(this.hurted=(new Date).getTime()+"-"+e,this.currentMovement("hurted-"+e))}endHurt(){this.hurted=!1,this.currentMovement()}falling(e){e?this.dom.classList.add("falling"):this.dom.classList.remove("falling"),this.isFalling=e}getHitbox(){return{x:this.x+.25,y:this.y,w:.5,h:1}}touch(e,t){"player"===e.type&&(-1!==t.indexOf("left")?e.startHurt("left"):e.startHurt("right"))}takeASelfie(){this.lastSelfieTime=(new Date).getTime(),this.selfieCount++,this.dom.classList.contains("flip")?document.querySelector(".flash").classList.add("flip"):document.querySelector(".flash").classList.remove("flip"),document.body.classList.add("flash-it"),setTimeout(()=>document.body.classList.remove("flash-it"),200)}die(){this.alreadyDead||(this.alreadyDead=!0),this.currentMovement("dead")}}class s extends r{constructor(e,t,l){super(e,t,l,!0),this.dom.classList.add("item")}touch(e){"player"===e.type&&(this.destroy(),n.default.addObject(this.type))}}class u extends r{constructor(e,t,l,n){super(t,l,n,!1),this.id=e}getHitbox(){return{x:this.x,y:this.y-2,w:1,h:3}}touch(e){a.default.startEvent(this,s)&&this.destroy()}}class w extends r{constructor(e,t){super("wifi",e,t,!0),this.bandwidth=4,this.consumeDate=!1,this.date=(new Date).getTime()}getHitbox(){return{x:this.x-2,y:this.y-1,w:5,h:3}}touch(e){if("player"===e.type){var t=(new Date).getTime();this.bandwidth>0&&n.default.keys[32]&&t-1e3>this.date&&(e.takeASelfie(),this.bandwidth--,this.date=t,this.dom.classList.remove("bandwidth-0"),this.dom.classList.remove("bandwidth-1"),this.dom.classList.remove("bandwidth-2"),this.dom.classList.remove("bandwidth-3"),this.dom.classList.remove("bandwidth-4"),this.dom.classList.add("bandwidth-"+this.bandwidth),0===this.bandwidth&&setTimeout(()=>{this.bandwidth=4,this.dom.classList.remove("bandwidth-0"),this.dom.classList.remove("bandwidth-1"),this.dom.classList.remove("bandwidth-2"),this.dom.classList.remove("bandwidth-3"),this.dom.classList.remove("bandwidth-4")},2e4))}}}},function(e,t,l){"use strict";l.r(t);const n={};n.el=document.querySelector(".menu"),n.status="close",n.inventory=[],n.inventoryEl=document.querySelector(".inventory"),n.open=function(){n.el.classList.add("open"),n.status="open"},n.close=function(){n.el.classList.replace("open","close"),setTimeout(function(){n.el.classList.remove("close"),n.status="close"},300)},n.addItemToInvent=function(e,t){let l={};l.id=t,l.name=e,l.state="",n.inventory[l.id]=l,n.drawInventoryItem(l)},n.drawInventoryItem=function(e){let t=document.createElement("li");t.classList.add("inventory__block");let l=document.createElement("div");l.classList="inventory__item sprite "+e.name,l.id=e.id,l.title=e.name,"listed"===e.state&&(l.innerText=e.name),t.appendChild(l),n.inventoryEl.appendChild(t)},n.setAsTaken=function(e){document.getElementById(e).classList.add("taken"),n.inventory[e].state="taken"},window.addEventListener("keyup",function(e){27!==e.keyCode&&73!==e.keyCode||("close"===n.status?n.open():n.close())},!1),t.default=n},function(e,t,l){"use strict";l.r(t);var n=l(0);const a={};var r=['Welcome to my new story "How I Saved The Internet" ! This is the panic in the University, Internet is broken! But, for you my followers, I NEED to upload selfies! I will find a way to fix the Internet!',"Have you tried turning it off and on again? If you want more help, give us Donuts!","Hmmm, we love donuts! Okay! Here is a list! Find all elements and come back to us. Maybe it will fix the Internet ?","And because you can't live without me, I promess to upload a selfie every 30secs ! I'm so niiiice!","Looks at those people! All affraid because they don't have a connection anymore... I must be careful, maybe they are dangerous?","Well done ! You find everything ! Mmmmh... Nope, we can't do anything here, you will have to call the hotline ! Bye !"],o=document.querySelector(".talks");a.startEvent=function(e,t,l){if("1"!==e.id||n.default.objectsFound.find(e=>"donut"===e.name)){if("1"===e.id){e.id=2;var a=new t("list",6,19);return n.default.domMap[19][6]=a,n.default.drawElement(a),n.default.removeObject("donut"),!1}return 2===e.id&&0===n.default.items.filter(e=>-1===n.default.objectsFound.map(e=>e.name).indexOf(e)).length?(e.id=5,!1):2===e.id?(o.innerHTML="<h1>"+r[e.id]+"<h1>",!1):(o.innerHTML="<h1>"+r[e.id]+"<h1>",l&&(timeout=setTimeout(()=>o.innerHTML="",l)),!0)}return o.innerHTML="<h1>"+r[e.id]+"<h1>",!1},t.default=a},function(e,t,l){"use strict";l.r(t);var n=l(0);l(6),l(0),l(2),l(7),l(1),l(4),l(3),l(8),window.game=n.default},function(e,t){e.exports="<header> <div class=remainingTime></div> </header> <div class=game-container> <div class=game></div> </div> <div class=talks></div> <div class=menu> <div class=menu__title> Options </div> <div class=menu__content></div> <div class=menu__title> Inventory </div> <div class=menu__content> <ul class=inventory> </ul> </div> </div> <div class=you-are-dead> <div class=centered-content> <div>You failed. Your followers have forgotten you... forever...</div> <div class=retry onclick=location.reload()>Retry ?</div> </div> </div> <div class=flash></div> "},function(e,t,l){"use strict";l.r(t);var n=l(2),a=l(0),r=l(1),o=new n.Character("player",5,14);a.default.drawElement(o);var i=o.dom.getBoundingClientRect(),d=window.innerWidth/2,s=window.innerHeight/2;a.default.gameDom.style.left=d-i.left-24+"px",a.default.gameDom.style.top=s-i.top-24+"px";var u=document.querySelector(".remainingTime"),w=document.querySelector(".you-are-dead"),f=!1;setInterval(function(){if(!f){var e=o.getHitbox();if(o.hurted){var[t,l]=o.hurted.split("-");(new Date).getTime()-t<300?"left"===l?r.default.getArround(e.x-.25,e.y-.125,e.w,e.h).left||o.move(-.25,-.125):r.default.getArround(e.x+.25,e.y-.125,e.w,e.h).right||o.move(.25,-.125):o.endHurt()}else if(a.default.keys[37]&&!r.default.getArround(e.x-.125,e.y,e.w,e.h).left&&(o.move(-.125,0),o.currentMovement("walking-left")),a.default.keys[39]&&!r.default.getArround(e.x+.125,e.y,e.w,e.h).right&&(o.move(.125,0),o.currentMovement("walking-right")),!a.default.keys[38]||o.jumping||o.isFalling||o.startJump(),a.default.keys[37]||a.default.keys[39]||o.currentMovement(),o.jumping){var n=(new Date).getTime()-o.jumping;o.falling(!0),n<300&&!r.default.getArround(e.x,e.y-.25,e.w,e.h).top?o.move(0,-.25):o.jumping=!1}else r.default.getArround(e.x,e.y+.25,e.w,e.h).bottom?r.default.getArround(e.x,e.y+.125,e.w,e.h).bottom?o.falling(!1):(o.move(0,.125),o.falling(!0)):(o.move(0,.25),o.falling(!0));r.default.moveEnnemies(.125),r.default.getCurrents(e.x,e.y,e.w,e.h).forEach(function(e){e.element.touch(o,e.direction)});var i=3e4-((new Date).getTime()-o.lastSelfieTime);i<0?(o.die(),u.innerHTML="YOU LOSE",w.classList.add("very-dead"),f=!0):u.innerHTML="Take a selfie before: "+i/1e3}},33)},function(e,t,l){}]);