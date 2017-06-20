/*
jQWidgets v4.5.3 (2017-Jun)
Copyright (c) 2011-2016 jQWidgets.
License: http://jqwidgets.com/license/
*/

var oldBrowser=document.all&&!document.addEventListener;if(!oldBrowser){(function(be,H){var r,ao,al=be.document,bp=be.location,bu=be.navigator,ay=be.JQXLite,Y=be.$,aS=Array.prototype.push,aE=Array.prototype.slice,aB=Array.prototype.indexOf,z=Object.prototype.toString,b=Object.prototype.hasOwnProperty,ax=String.prototype.trim,D=function(bv,bw){return new D.fn.init(bv,bw,r)},aF=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,au=/\S/,a9=/\s+/,T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,aG=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,e=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^[\],:{}\s]*$/,u=/(?:^|:|,)(?:\s*\[)+/g,a6=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,L=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,av=/^-ms-/,aT=/-([\da-z])/gi,n=function(bv,bw){return(bw+"").toUpperCase()},a5=function(){if(al.addEventListener){al.removeEventListener("DOMContentLoaded",a5,false);D.ready()}else{if(al.readyState==="complete"){al.detachEvent("onreadystatechange",a5);D.ready()}}},a1={};D.fn=D.prototype={constructor:D,init:function(bv,by,bz){var bx,bA,bw,bB;if(!bv){return this}if(bv.nodeType){this.context=this[0]=bv;this.length=1;return this}if(typeof bv==="string"){if(bv.charAt(0)==="<"&&bv.charAt(bv.length-1)===">"&&bv.length>=3){bx=[null,bv,null]}else{bx=aG.exec(bv)}if(bx&&(bx[1]||!by)){if(bx[1]){by=by instanceof D?by[0]:by;bB=(by&&by.nodeType?by.ownerDocument||by:al);bv=D.parseHTML(bx[1],bB,true);if(e.test(bx[1])&&D.isPlainObject(by)){this.attr.call(bv,by,true)}return D.merge(this,bv)}else{bA=al.getElementById(bx[2]);if(bA&&bA.parentNode){if(bA.id!==bx[2]){return bz.find(bv)}this.length=1;this[0]=bA}this.context=al;this.selector=bv;return this}}else{if(!by||by.jqx){return(by||bz).find(bv)}else{return this.constructor(by).find(bv)}}}else{if(D.isFunction(bv)){return bz.ready(bv)}}if(bv.selector!==H){this.selector=bv.selector;this.context=bv.context}return D.makeArray(bv,this)},selector:"",jqx:"4.5.0",length:0,size:function(){return this.length},toArray:function(){return aE.call(this)},get:function(bv){return bv==null?this.toArray():(bv<0?this[this.length+bv]:this[bv])},pushStack:function(bw,by,bv){var bx=D.merge(this.constructor(),bw);bx.prevObject=this;bx.context=this.context;if(by==="find"){bx.selector=this.selector+(this.selector?" ":"")+bv}else{if(by){bx.selector=this.selector+"."+by+"("+bv+")"}}return bx},each:function(bw,bv){return D.each(this,bw,bv)},ready:function(bv){D.ready.promise().done(bv);return this},eq:function(bv){bv=+bv;return bv===-1?this.slice(bv):this.slice(bv,bv+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(aE.apply(this,arguments),"slice",aE.call(arguments).join(","))},map:function(bv){return this.pushStack(D.map(this,function(bx,bw){return bv.call(bx,bw,bx)}))},end:function(){return this.prevObject||this.constructor(null)},push:aS,sort:[].sort,splice:[].splice};D.fn.init.prototype=D.fn;D.extend=D.fn.extend=function(){var bE,bx,bv,bw,bB,bC,bA=arguments[0]||{},bz=1,by=arguments.length,bD=false;if(typeof bA==="boolean"){bD=bA;bA=arguments[1]||{};bz=2}if(typeof bA!=="object"&&!D.isFunction(bA)){bA={}}if(by===bz){bA=this;--bz}for(;bz<by;bz++){if((bE=arguments[bz])!=null){for(bx in bE){bv=bA[bx];bw=bE[bx];if(bA===bw){continue}if(bD&&bw&&(D.isPlainObject(bw)||(bB=D.isArray(bw)))){if(bB){bB=false;bC=bv&&D.isArray(bv)?bv:[]}else{bC=bv&&D.isPlainObject(bv)?bv:{}}bA[bx]=D.extend(bD,bC,bw)}else{if(bw!==H){bA[bx]=bw}}}}}return bA};D.extend({noConflict:function(bv){if(be.$===D){be.$=Y}if(bv&&be.JQXLite===D){be.JQXLite=ay}return D},isReady:false,readyWait:1,holdReady:function(bv){if(bv){D.readyWait++}else{D.ready(true)}},ready:function(bv){if(bv===true?--D.readyWait:D.isReady){return}if(!al.body){return setTimeout(D.ready,1)}D.isReady=true;if(bv!==true&&--D.readyWait>0){return}ao.resolveWith(al,[D]);if(D.fn.trigger){D(al).trigger("ready").off("ready")}},isFunction:function(bv){return D.type(bv)==="function"},isArray:Array.isArray||function(bv){return D.type(bv)==="array"},isWindow:function(bv){return bv!=null&&bv==bv.window},isNumeric:function(bv){return !isNaN(parseFloat(bv))&&isFinite(bv)},type:function(bv){return bv==null?String(bv):a1[z.call(bv)]||"object"},isPlainObject:function(bx){if(!bx||D.type(bx)!=="object"||bx.nodeType||D.isWindow(bx)){return false}try{if(bx.constructor&&!b.call(bx,"constructor")&&!b.call(bx.constructor.prototype,"isPrototypeOf")){return false}}catch(bw){return false}var bv;for(bv in bx){}return bv===H||b.call(bx,bv)},isEmptyObject:function(bw){var bv;for(bv in bw){return false}return true},error:function(bv){throw new Error(bv)},parseHTML:function(by,bx,bv){var bw;if(!by||typeof by!=="string"){return null}if(typeof bx==="boolean"){bv=bx;bx=0}bx=bx||al;if((bw=e.exec(by))){return[bx.createElement(bw[1])]}bw=D.buildFragment([by],bx,bv?null:[]);return D.merge([],(bw.cacheable?D.clone(bw.fragment):bw.fragment).childNodes)},parseJSON:function(bv){if(!bv||typeof bv!=="string"){return null}bv=D.trim(bv);if(be.JSON&&be.JSON.parse){return be.JSON.parse(bv)}if(k.test(bv.replace(a6,"@").replace(L,"]").replace(u,""))){return(new Function("return "+bv))()}D.error("Invalid JSON: "+bv)},parseXML:function(bx){var bv,bw;if(!bx||typeof bx!=="string"){return null}try{if(be.DOMParser){bw=new DOMParser();bv=bw.parseFromString(bx,"text/xml")}else{bv=new ActiveXObject("Microsoft.XMLDOM");bv.async="false";bv.loadXML(bx)}}catch(by){bv=H}if(!bv||!bv.documentElement||bv.getElementsByTagName("parsererror").length){D.error("Invalid XML: "+bx)}return bv},noop:function(){},globalEval:function(bv){if(bv&&au.test(bv)){(be.execScript||function(bw){be["eval"].call(be,bw)})(bv)}},camelCase:function(bv){return bv.replace(av,"ms-").replace(aT,n)},nodeName:function(bw,bv){return bw.nodeName&&bw.nodeName.toLowerCase()===bv.toLowerCase()},each:function(bA,bB,bx){var bw,by=0,bz=bA.length,bv=bz===H||D.isFunction(bA);if(bx){if(bv){for(bw in bA){if(bB.apply(bA[bw],bx)===false){break}}}else{for(;by<bz;){if(bB.apply(bA[by++],bx)===false){break}}}}else{if(bv){for(bw in bA){if(bB.call(bA[bw],bw,bA[bw])===false){break}}}else{for(;by<bz;){if(bB.call(bA[by],by,bA[by++])===false){break}}}}return bA},trim:ax&&!ax.call("\uFEFF\xA0")?function(bv){return bv==null?"":ax.call(bv)}:function(bv){return bv==null?"":(bv+"").replace(T,"")},makeArray:function(bv,bx){var by,bw=bx||[];if(bv!=null){by=D.type(bv);if(bv.length==null||by==="string"||by==="function"||by==="regexp"||D.isWindow(bv)){aS.call(bw,bv)}else{D.merge(bw,bv)}}return bw},inArray:function(by,bw,bx){var bv;if(bw){if(aB){return aB.call(bw,by,bx)}bv=bw.length;bx=bx?bx<0?Math.max(0,bv+bx):bx:0;for(;bx<bv;bx++){if(bx in bw&&bw[bx]===by){return bx}}}return -1},merge:function(bz,bx){var bv=bx.length,by=bz.length,bw=0;if(typeof bv==="number"){for(;bw<bv;bw++){bz[by++]=bx[bw]}}else{while(bx[bw]!==H){bz[by++]=bx[bw++]}}bz.length=by;return bz},grep:function(bw,bB,bv){var bA,bx=[],by=0,bz=bw.length;bv=!!bv;for(;by<bz;by++){bA=!!bB(bw[by],by);if(bv!==bA){bx.push(bw[by])}}return bx},map:function(bv,bC,bD){var bA,bB,bz=[],bx=0,bw=bv.length,by=bv instanceof D||bw!==H&&typeof bw==="number"&&((bw>0&&bv[0]&&bv[bw-1])||bw===0||D.isArray(bv));if(by){for(;bx<bw;bx++){bA=bC(bv[bx],bx,bD);if(bA!=null){bz[bz.length]=bA}}}else{for(bB in bv){bA=bC(bv[bB],bB,bD);if(bA!=null){bz[bz.length]=bA}}}return bz.concat.apply([],bz)},guid:1,proxy:function(bz,by){var bx,bv,bw;if(typeof by==="string"){bx=bz[by];by=bz;bz=bx}if(!D.isFunction(bz)){return H}bv=aE.call(arguments,2);bw=function(){return bz.apply(by,bv.concat(aE.call(arguments)))};bw.guid=bz.guid=bz.guid||D.guid++;return bw},access:function(bv,bB,bE,bC,bz,bF,bD){var bx,bA=bE==null,by=0,bw=bv.length;if(bE&&typeof bE==="object"){for(by in bE){D.access(bv,bB,by,bE[by],1,bF,bC)}bz=1}else{if(bC!==H){bx=bD===H&&D.isFunction(bC);if(bA){if(bx){bx=bB;bB=function(bH,bG,bI){return bx.call(D(bH),bI)}}else{bB.call(bv,bC);bB=null}}if(bB){for(;by<bw;by++){bB(bv[by],bE,bx?bC.call(bv[by],by,bB(bv[by],bE)):bC,bD)}}bz=1}}return bz?bv:bA?bB.call(bv):bw?bB(bv[0],bE):bF},now:function(){return(new Date()).getTime()}});D.ready.promise=function(by){if(!ao){ao=D.Deferred();if(al.readyState==="complete"){setTimeout(D.ready,1)}else{if(al.addEventListener){al.addEventListener("DOMContentLoaded",a5,false);be.addEventListener("load",D.ready,false)}else{al.attachEvent("onreadystatechange",a5);be.attachEvent("onload",D.ready);var bx=false;try{bx=be.frameElement==null&&al.documentElement}catch(bw){}if(bx&&bx.doScroll){(function bv(){if(!D.isReady){try{bx.doScroll("left")}catch(bz){return setTimeout(bv,50)}D.ready()}})()}}}}return ao.promise(by)};D.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(bw,bv){a1["[object "+bv+"]"]=bv.toLowerCase()});r=D(al);var aY={};function C(bw){var bv=aY[bw]={};D.each(bw.split(a9),function(by,bx){bv[bx]=true});return bv}D.Callbacks=function(bF){bF=typeof bF==="string"?(aY[bF]||C(bF)):D.extend({},bF);var by,bv,bz,bx,bA,bB,bC=[],bD=!bF.once&&[],bw=function(bG){by=bF.memory&&bG;bv=true;bB=bx||0;bx=0;bA=bC.length;bz=true;for(;bC&&bB<bA;bB++){if(bC[bB].apply(bG[0],bG[1])===false&&bF.stopOnFalse){by=false;break}}bz=false;if(bC){if(bD){if(bD.length){bw(bD.shift())}}else{if(by){bC=[]}else{bE.disable()}}}},bE={add:function(){if(bC){var bH=bC.length;(function bG(bI){D.each(bI,function(bK,bJ){var bL=D.type(bJ);if(bL==="function"){if(!bF.unique||!bE.has(bJ)){bC.push(bJ)}}else{if(bJ&&bJ.length&&bL!=="string"){bG(bJ)}}})})(arguments);if(bz){bA=bC.length}else{if(by){bx=bH;bw(by)}}}return this},remove:function(){if(bC){D.each(arguments,function(bI,bG){var bH;while((bH=D.inArray(bG,bC,bH))>-1){bC.splice(bH,1);if(bz){if(bH<=bA){bA--}if(bH<=bB){bB--}}}})}return this},has:function(bG){return D.inArray(bG,bC)>-1},empty:function(){bC=[];return this},disable:function(){bC=bD=by=H;return this},disabled:function(){return !bC},lock:function(){bD=H;if(!by){bE.disable()}return this},locked:function(){return !bD},fireWith:function(bH,bG){bG=bG||[];bG=[bH,bG.slice?bG.slice():bG];if(bC&&(!bv||bD)){if(bz){bD.push(bG)}else{bw(bG)}}return this},fire:function(){bE.fireWith(this,arguments);return this},fired:function(){return !!bv}};return bE};D.extend({Deferred:function(bx){var bw=[["resolve","done",D.Callbacks("once memory"),"resolved"],["reject","fail",D.Callbacks("once memory"),"rejected"],["notify","progress",D.Callbacks("memory")]],by="pending",bz={state:function(){return by},always:function(){bv.done(arguments).fail(arguments);return this},then:function(){var bA=arguments;return D.Deferred(function(bB){D.each(bw,function(bD,bC){var bF=bC[0],bE=bA[bD];bv[bC[1]](D.isFunction(bE)?function(){var bG=bE.apply(this,arguments);if(bG&&D.isFunction(bG.promise)){bG.promise().done(bB.resolve).fail(bB.reject).progress(bB.notify)}else{bB[bF+"With"](this===bv?bB:this,[bG])}}:bB[bF])});bA=null}).promise()},promise:function(bA){return bA!=null?D.extend(bA,bz):bz}},bv={};bz.pipe=bz.then;D.each(bw,function(bB,bA){var bD=bA[2],bC=bA[3];bz[bA[1]]=bD.add;if(bC){bD.add(function(){by=bC},bw[bB^1][2].disable,bw[2][2].lock)}bv[bA[0]]=bD.fire;bv[bA[0]+"With"]=bD.fireWith});bz.promise(bv);if(bx){bx.call(bv,bv)}return bv},when:function(bz){var bx=0,bB=aE.call(arguments),bv=bB.length,bw=bv!==1||(bz&&D.isFunction(bz.promise))?bv:0,bE=bw===1?bz:D.Deferred(),by=function(bG,bH,bF){return function(bI){bH[bG]=this;bF[bG]=arguments.length>1?aE.call(arguments):bI;if(bF===bD){bE.notifyWith(bH,bF)}else{if(!(--bw)){bE.resolveWith(bH,bF)}}}},bD,bA,bC;if(bv>1){bD=new Array(bv);bA=new Array(bv);bC=new Array(bv);for(;bx<bv;bx++){if(bB[bx]&&D.isFunction(bB[bx].promise)){bB[bx].promise().done(by(bx,bC,bB)).fail(bE.reject).progress(by(bx,bA,bD))}else{--bw}}}if(!bw){bE.resolveWith(bC,bB)}return bE.promise()}});D.support=(function(){var bH,bG,bE,bF,by,bD,bC,bA,bz,bx,bv,bw=al.createElement("div");bw.setAttribute("className","t");bw.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";bG=bw.getElementsByTagName("*");bE=bw.getElementsByTagName("a")[0];if(!bG||!bE||!bG.length){return{}}bF=al.createElement("select");by=bF.appendChild(al.createElement("option"));bD=bw.getElementsByTagName("input")[0];bE.style.cssText="top:1px;float:left;opacity:.5";bH={leadingWhitespace:(bw.firstChild.nodeType===3),tbody:!bw.getElementsByTagName("tbody").length,htmlSerialize:!!bw.getElementsByTagName("link").length,style:/top/.test(bE.getAttribute("style")),hrefNormalized:(bE.getAttribute("href")==="/a"),opacity:/^0.5/.test(bE.style.opacity),cssFloat:!!bE.style.cssFloat,checkOn:(bD.value==="on"),optSelected:by.selected,getSetAttribute:bw.className!=="t",enctype:!!al.createElement("form").enctype,html5Clone:al.createElement("nav").cloneNode(true).outerHTML!=="<:nav></:nav>",boxModel:(al.compatMode==="CSS1Compat"),submitBubbles:true,changeBubbles:true,focusinBubbles:false,deleteExpando:true,noCloneEvent:true,inlineBlockNeedsLayout:false,shrinkWrapBlocks:false,reliableMarginRight:true,boxSizingReliable:true,pixelPosition:false};bD.checked=true;bH.noCloneChecked=bD.cloneNode(true).checked;bF.disabled=true;bH.optDisabled=!by.disabled;try{delete bw.test}catch(bB){bH.deleteExpando=false}if(!bw.addEventListener&&bw.attachEvent&&bw.fireEvent){bw.attachEvent("onclick",bv=function(){bH.noCloneEvent=false});bw.cloneNode(true).fireEvent("onclick");bw.detachEvent("onclick",bv)}bD=al.createElement("input");bD.value="t";bD.setAttribute("type","radio");bH.radioValue=bD.value==="t";bD.setAttribute("checked","checked");bD.setAttribute("name","t");bw.appendChild(bD);bC=al.createDocumentFragment();bC.appendChild(bw.lastChild);bH.checkClone=bC.cloneNode(true).cloneNode(true).lastChild.checked;bH.appendChecked=bD.checked;bC.removeChild(bD);bC.appendChild(bw);if(bw.attachEvent){for(bz in {submit:true,change:true,focusin:true}){bA="on"+bz;bx=(bA in bw);if(!bx){bw.setAttribute(bA,"return;");bx=(typeof bw[bA]==="function")}bH[bz+"Bubbles"]=bx}}D(function(){var bJ,bN,bL,bM,bK="padding:0;margin:0;border:0;display:block;overflow:hidden;",bI=al.getElementsByTagName("body")[0];if(!bI){return}bJ=al.createElement("div");bJ.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px";bI.insertBefore(bJ,bI.firstChild);bN=al.createElement("div");bJ.appendChild(bN);bN.innerHTML="<table><tr><td></td><td>t</td></tr></table>";bL=bN.getElementsByTagName("td");bL[0].style.cssText="padding:0;margin:0;border:0;display:none";bx=(bL[0].offsetHeight===0);bL[0].style.display="";bL[1].style.display="none";bH.reliableHiddenOffsets=bx&&(bL[0].offsetHeight===0);bN.innerHTML="";bN.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";bH.boxSizing=(bN.offsetWidth===4);bH.doesNotIncludeMarginInBodyOffset=(bI.offsetTop!==1);if(be.getComputedStyle){bH.pixelPosition=(be.getComputedStyle(bN,null)||{}).top!=="1%";bH.boxSizingReliable=(be.getComputedStyle(bN,null)||{width:"4px"}).width==="4px";bM=al.createElement("div");bM.style.cssText=bN.style.cssText=bK;bM.style.marginRight=bM.style.width="0";bN.style.width="1px";bN.appendChild(bM);bH.reliableMarginRight=!parseFloat((be.getComputedStyle(bM,null)||{}).marginRight)}if(typeof bN.style.zoom!=="undefined"){bN.innerHTML="";bN.style.cssText=bK+"width:1px;padding:1px;display:inline;zoom:1";bH.inlineBlockNeedsLayout=(bN.offsetWidth===3);bN.style.display="block";bN.style.overflow="visible";bN.innerHTML="<div></div>";bN.firstChild.style.width="5px";bH.shrinkWrapBlocks=(bN.offsetWidth!==3);bJ.style.zoom=1}bI.removeChild(bJ);bJ=bN=bL=bM=null});bC.removeChild(bw);bG=bE=bF=by=bD=bC=bw=null;return bH})();var aL=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,ar=/([A-Z])/g;D.extend({cache:{},deletedIds:[],uuid:0,expando:"JQXLite"+(D.fn.jqx+Math.random()).replace(/\D/g,""),noData:{embed:true,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:true},hasData:function(bv){bv=bv.nodeType?D.cache[bv[D.expando]]:bv[D.expando];return !!bv&&!N(bv)},data:function(by,bw,bA,bz){if(!D.acceptData(by)){return}var bB,bD,bE=D.expando,bC=typeof bw==="string",bF=by.nodeType,bv=bF?D.cache:by,bx=bF?by[bE]:by[bE]&&bE;if((!bx||!bv[bx]||(!bz&&!bv[bx].data))&&bC&&bA===H){return}if(!bx){if(bF){by[bE]=bx=D.deletedIds.pop()||D.guid++}else{bx=bE}}if(!bv[bx]){bv[bx]={};if(!bF){bv[bx].toJSON=D.noop}}if(typeof bw==="object"||typeof bw==="function"){if(bz){bv[bx]=D.extend(bv[bx],bw)}else{bv[bx].data=D.extend(bv[bx].data,bw)}}bB=bv[bx];if(!bz){if(!bB.data){bB.data={}}bB=bB.data}if(bA!==H){bB[D.camelCase(bw)]=bA}if(bC){bD=bB[bw];if(bD==null){bD=bB[D.camelCase(bw)]}}else{bD=bB}return bD},removeData:function(by,bw,bz){if(!D.acceptData(by)){return}var bC,bB,bA,bD=by.nodeType,bv=bD?D.cache:by,bx=bD?by[D.expando]:D.expando;if(!bv[bx]){return}if(bw){bC=bz?bv[bx]:bv[bx].data;if(bC){if(!D.isArray(bw)){if(bw in bC){bw=[bw]}else{bw=D.camelCase(bw);if(bw in bC){bw=[bw]}else{bw=bw.split(" ")}}}for(bB=0,bA=bw.length;bB<bA;bB++){delete bC[bw[bB]]}if(!(bz?N:D.isEmptyObject)(bC)){return}}}if(!bz){delete bv[bx].data;if(!N(bv[bx])){return}}if(bD){D.cleanData([by],true)}else{if(D.support.deleteExpando||bv!=bv.window){delete bv[bx]}else{bv[bx]=null}}},_data:function(bw,bv,bx){return D.data(bw,bv,bx,true)},acceptData:function(bw){var bv=bw.nodeName&&D.noData[bw.nodeName.toLowerCase()];return !bv||bv!==true&&bw.getAttribute("classid")===bv}});D.fn.extend({data:function(bE,bD){var bz,bw,bC,bv,by,bx=this[0],bB=0,bA=null;if(bE===H){if(this.length){bA=D.data(bx);if(bx.nodeType===1&&!D._data(bx,"parsedAttrs")){bC=bx.attributes;for(by=bC.length;bB<by;bB++){bv=bC[bB].name;if(!bv.indexOf("data-")){bv=D.camelCase(bv.substring(5));ba(bx,bv,bA[bv])}}D._data(bx,"parsedAttrs",true)}}return bA}if(typeof bE==="object"){return this.each(function(){D.data(this,bE)})}bz=bE.split(".",2);bz[1]=bz[1]?"."+bz[1]:"";bw=bz[1]+"!";return D.access(this,function(bF){if(bF===H){bA=this.triggerHandler("getData"+bw,[bz[0]]);if(bA===H&&bx){bA=D.data(bx,bE);bA=ba(bx,bE,bA)}return bA===H&&bz[1]?this.data(bz[0]):bA}bz[1]=bF;this.each(function(){var bG=D(this);bG.triggerHandler("setData"+bw,bz);D.data(this,bE,bF);bG.triggerHandler("changeData"+bw,bz)})},null,bD,arguments.length>1,null,false)},removeData:function(bv){return this.each(function(){D.removeData(this,bv)})}});function ba(bx,bw,by){if(by===H&&bx.nodeType===1){var bv="data-"+bw.replace(ar,"-$1").toLowerCase();by=bx.getAttribute(bv);if(typeof by==="string"){try{by=by==="true"?true:by==="false"?false:by==="null"?null:+by+""===by?+by:aL.test(by)?D.parseJSON(by):by}catch(bz){}D.data(bx,bw,by)}else{by=H}}return by}function N(bw){var bv;for(bv in bw){if(bv==="data"&&D.isEmptyObject(bw[bv])){continue}if(bv!=="toJSON"){return false}}return true}D.extend({queue:function(bx,bw,by){var bv;if(bx){bw=(bw||"fx")+"queue";bv=D._data(bx,bw);if(by){if(!bv||D.isArray(by)){bv=D._data(bx,bw,D.makeArray(by))}else{bv.push(by)}}return bv||[]}},dequeue:function(bA,bz){bz=bz||"fx";var bw=D.queue(bA,bz),bB=bw.length,by=bw.shift(),bv=D._queueHooks(bA,bz),bx=function(){D.dequeue(bA,bz)};if(by==="inprogress"){by=bw.shift();bB--}if(by){if(bz==="fx"){bw.unshift("inprogress")}delete bv.stop;by.call(bA,bx,bv)}if(!bB&&bv){bv.empty.fire()}},_queueHooks:function(bx,bw){var bv=bw+"queueHooks";return D._data(bx,bv)||D._data(bx,bv,{empty:D.Callbacks("once memory").add(function(){D.removeData(bx,bw+"queue",true);D.removeData(bx,bv,true)})})}});D.fn.extend({queue:function(bv,bw){var bx=2;if(typeof bv!=="string"){bw=bv;bv="fx";bx--}if(arguments.length<bx){return D.queue(this[0],bv)}return bw===H?this:this.each(function(){var by=D.queue(this,bv,bw);D._queueHooks(this,bv);if(bv==="fx"&&by[0]!=="inprogress"){D.dequeue(this,bv)}})},dequeue:function(bv){return this.each(function(){D.dequeue(this,bv)})},delay:function(bw,bv){bw=D.fx?D.fx.speeds[bw]||bw:bw;bv=bv||"fx";return this.queue(bv,function(by,bx){var bz=setTimeout(by,bw);bx.stop=function(){clearTimeout(bz)}})},clearQueue:function(bv){return this.queue(bv||"fx",[])},promise:function(bx,bB){var bw,by=1,bC=D.Deferred(),bA=this,bv=this.length,bz=function(){if(!(--by)){bC.resolveWith(bA,[bA])}};if(typeof bx!=="string"){bB=bx;bx=H}bx=bx||"fx";while(bv--){bw=D._data(bA[bv],bx+"queueHooks");if(bw&&bw.empty){by++;bw.empty.add(bz)}}bz();return bC.promise(bB)}});var bi,aU,az,aJ=/[\t\r\n]/g,aQ=/\r/g,d=/^(?:button|input)$/i,A=/^(?:button|input|object|select|textarea)$/i,h=/^a(?:rea|)$/i,af=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,B=D.support.getSetAttribute;D.fn.extend({attr:function(bv,bw){return D.access(this,D.attr,bv,bw,arguments.length>1)},removeAttr:function(bv){return this.each(function(){D.removeAttr(this,bv)})},prop:function(bv,bw){return D.access(this,D.prop,bv,bw,arguments.length>1)},removeProp:function(bv){bv=D.propFix[bv]||bv;return this.each(function(){try{this[bv]=H;delete this[bv]}catch(bw){}})},addClass:function(bz){var bB,bx,bw,by,bA,bC,bv;if(D.isFunction(bz)){return this.each(function(bD){D(this).addClass(bz.call(this,bD,this.className))})}if(bz&&typeof bz==="string"){bB=bz.split(a9);for(bx=0,bw=this.length;bx<bw;bx++){by=this[bx];if(by.nodeType===1){if(!by.className&&bB.length===1){by.className=bz}else{bA=" "+by.className+" ";for(bC=0,bv=bB.length;bC<bv;bC++){if(bA.indexOf(" "+bB[bC]+" ")<0){bA+=bB[bC]+" "}}by.className=D.trim(bA)}}}}return this},removeClass:function(bB){var by,bz,bA,bC,bw,bx,bv;if(D.isFunction(bB)){return this.each(function(bD){D(this).removeClass(bB.call(this,bD,this.className))})}if((bB&&typeof bB==="string")||bB===H){by=(bB||"").split(a9);for(bx=0,bv=this.length;bx<bv;bx++){bA=this[bx];if(bA.nodeType===1&&bA.className){bz=(" "+bA.className+" ").replace(aJ," ");for(bC=0,bw=by.length;bC<bw;bC++){while(bz.indexOf(" "+by[bC]+" ")>=0){bz=bz.replace(" "+by[bC]+" "," ")}}bA.className=bB?D.trim(bz):""}}}return this},toggleClass:function(by,bw){var bx=typeof by,bv=typeof bw==="boolean";if(D.isFunction(by)){return this.each(function(bz){D(this).toggleClass(by.call(this,bz,this.className,bw),bw)})}return this.each(function(){if(bx==="string"){var bB,bA=0,bz=D(this),bC=bw,bD=by.split(a9);while((bB=bD[bA++])){bC=bv?bC:!bz.hasClass(bB);bz[bC?"addClass":"removeClass"](bB)}}else{if(bx==="undefined"||bx==="boolean"){if(this.className){D._data(this,"__className__",this.className)}this.className=this.className||by===false?"":D._data(this,"__className__")||""}}})},hasClass:function(bv){var by=" "+bv+" ",bx=0,bw=this.length;for(;bx<bw;bx++){if(this[bx].nodeType===1&&(" "+this[bx].className+" ").replace(aJ," ").indexOf(by)>=0){return true}}return false},val:function(by){var bv,bw,bz,bx=this[0];if(!arguments.length){if(bx){bv=D.valHooks[bx.type]||D.valHooks[bx.nodeName.toLowerCase()];if(bv&&"get" in bv&&(bw=bv.get(bx,"value"))!==H){return bw}bw=bx.value;return typeof bw==="string"?bw.replace(aQ,""):bw==null?"":bw}return}bz=D.isFunction(by);return this.each(function(bB){var bC,bA=D(this);if(this.nodeType!==1){return}if(bz){bC=by.call(this,bB,bA.val())}else{bC=by}if(bC==null){bC=""}else{if(typeof bC==="number"){bC+=""}else{if(D.isArray(bC)){bC=D.map(bC,function(bD){return bD==null?"":bD+""})}}}bv=D.valHooks[this.type]||D.valHooks[this.nodeName.toLowerCase()];if(!bv||!("set" in bv)||bv.set(this,bC,"value")===H){this.value=bC}})}});D.extend({valHooks:{option:{get:function(bv){var bw=bv.attributes.value;return !bw||bw.specified?bv.value:bv.text}},select:{get:function(bv){var bB,bx,bD=bv.options,bz=bv.selectedIndex,by=bv.type==="select-one"||bz<0,bC=by?null:[],bA=by?bz+1:bD.length,bw=bz<0?bA:by?bz:0;for(;bw<bA;bw++){bx=bD[bw];if((bx.selected||bw===bz)&&(D.support.optDisabled?!bx.disabled:bx.getAttribute("disabled")===null)&&(!bx.parentNode.disabled||!D.nodeName(bx.parentNode,"optgroup"))){bB=D(bx).val();if(by){return bB}bC.push(bB)}}return bC},set:function(bw,bx){var bv=D.makeArray(bx);D(bw).find("option").each(function(){this.selected=D.inArray(D(this).val(),bv)>=0});if(!bv.length){bw.selectedIndex=-1}return bv}}},attrFn:{},attr:function(bB,by,bC,bA){var bx,bv,bz,bw=bB.nodeType;if(!bB||bw===3||bw===8||bw===2){return}if(bA&&D.isFunction(D.fn[by])){return D(bB)[by](bC)}if(typeof bB.getAttribute==="undefined"){return D.prop(bB,by,bC)}bz=bw!==1||!D.isXMLDoc(bB);if(bz){by=by.toLowerCase();bv=D.attrHooks[by]||(af.test(by)?aU:bi)}if(bC!==H){if(bC===null){D.removeAttr(bB,by);return}else{if(bv&&"set" in bv&&bz&&(bx=bv.set(bB,bC,by))!==H){return bx}else{bB.setAttribute(by,bC+"");return bC}}}else{if(bv&&"get" in bv&&bz&&(bx=bv.get(bB,by))!==null){return bx}else{bx=bB.getAttribute(by);return bx===null?H:bx}}},removeAttr:function(by,bA){var bz,bB,bw,bv,bx=0;if(bA&&by.nodeType===1){bB=bA.split(a9);for(;bx<bB.length;bx++){bw=bB[bx];if(bw){bz=D.propFix[bw]||bw;bv=af.test(bw);if(!bv){D.attr(by,bw,"")}by.removeAttribute(B?bw:bz);if(bv&&bz in by){by[bz]=false}}}}},attrHooks:{type:{set:function(bv,bw){if(d.test(bv.nodeName)&&bv.parentNode){D.error("type property can't be changed")}else{if(!D.support.radioValue&&bw==="radio"&&D.nodeName(bv,"input")){var bx=bv.value;bv.setAttribute("type",bw);if(bx){bv.value=bx}return bw}}}},value:{get:function(bw,bv){if(bi&&D.nodeName(bw,"button")){return bi.get(bw,bv)}return bv in bw?bw.value:null},set:function(bw,bx,bv){if(bi&&D.nodeName(bw,"button")){return bi.set(bw,bx,bv)}bw.value=bx}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(bA,by,bB){var bx,bv,bz,bw=bA.nodeType;if(!bA||bw===3||bw===8||bw===2){return}bz=bw!==1||!D.isXMLDoc(bA);if(bz){by=D.propFix[by]||by;bv=D.propHooks[by]}if(bB!==H){if(bv&&"set" in bv&&(bx=bv.set(bA,bB,by))!==H){return bx}else{return(bA[by]=bB)}}else{if(bv&&"get" in bv&&(bx=bv.get(bA,by))!==null){return bx}else{return bA[by]}}},propHooks:{tabIndex:{get:function(bw){var bv=bw.getAttributeNode("tabindex");return bv&&bv.specified?parseInt(bv.value,10):A.test(bw.nodeName)||h.test(bw.nodeName)&&bw.href?0:H}}}});aU={get:function(bw,bv){var by,bx=D.prop(bw,bv);return bx===true||typeof bx!=="boolean"&&(by=bw.getAttributeNode(bv))&&by.nodeValue!==false?bv.toLowerCase():H},set:function(bw,by,bv){var bx;if(by===false){D.removeAttr(bw,bv)}else{bx=D.propFix[bv]||bv;if(bx in bw){bw[bx]=true}bw.setAttribute(bv,bv.toLowerCase())}return bv}};if(!D.support.enctype){D.propFix.enctype="encoding"}var bg=/^(?:textarea|input|select)$/i,o=/^([^\.]*|)(?:\.(.+)|)$/,G=/(?:^|\s)hover(\.\S+|)\b/,aI=/^key/,bj=/^(?:mouse|contextmenu)|click/,O=/^(?:focusinfocus|focusoutblur)$/,bt=function(bv){return D.event.special.hover?bv:bv.replace(G,"mouseenter$1 mouseleave$1")};D.event={add:function(by,bC,bJ,bA,bz){var bD,bB,bK,bI,bH,bF,bv,bG,bw,bx,bE;if(by.nodeType===3||by.nodeType===8||!bC||!bJ||!(bD=D._data(by))){return}if(bJ.handler){bw=bJ;bJ=bw.handler;bz=bw.selector}if(!bJ.guid){bJ.guid=D.guid++}bK=bD.events;if(!bK){bD.events=bK={}}bB=bD.handle;if(!bB){bD.handle=bB=function(bL){return typeof D!=="undefined"&&(!bL||D.event.triggered!==bL.type)?D.event.dispatch.apply(bB.elem,arguments):H};bB.elem=by}bC=D.trim(bt(bC)).split(" ");for(bI=0;bI<bC.length;bI++){bH=o.exec(bC[bI])||[];bF=bH[1];bv=(bH[2]||"").split(".").sort();bE=D.event.special[bF]||{};bF=(bz?bE.delegateType:bE.bindType)||bF;bE=D.event.special[bF]||{};bG=D.extend({type:bF,origType:bH[1],data:bA,handler:bJ,guid:bJ.guid,selector:bz,needsContext:bz&&D.expr.match.needsContext.test(bz),namespace:bv.join(".")},bw);bx=bK[bF];if(!bx){bx=bK[bF]=[];bx.delegateCount=0;if(!bE.setup||bE.setup.call(by,bA,bv,bB)===false){if(by.addEventListener){by.addEventListener(bF,bB,false)}else{if(by.attachEvent){by.attachEvent("on"+bF,bB)}}}}if(bE.add){bE.add.call(by,bG);if(!bG.handler.guid){bG.handler.guid=bJ.guid}}if(bz){bx.splice(bx.delegateCount++,0,bG)}else{bx.push(bG)}D.event.global[bF]=true}by=null},global:{},remove:function(by,bD,bJ,bz,bC){var bK,bL,bG,bx,bw,bA,bB,bI,bF,bv,bH,bE=D.hasData(by)&&D._data(by);if(!bE||!(bI=bE.events)){return}bD=D.trim(bt(bD||"")).split(" ");for(bK=0;bK<bD.length;bK++){bL=o.exec(bD[bK])||[];bG=bx=bL[1];bw=bL[2];if(!bG){for(bG in bI){D.event.remove(by,bG+bD[bK],bJ,bz,true)}continue}bF=D.event.special[bG]||{};bG=(bz?bF.delegateType:bF.bindType)||bG;bv=bI[bG]||[];bA=bv.length;bw=bw?new RegExp("(^|\\.)"+bw.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(bB=0;bB<bv.length;bB++){bH=bv[bB];if((bC||bx===bH.origType)&&(!bJ||bJ.guid===bH.guid)&&(!bw||bw.test(bH.namespace))&&(!bz||bz===bH.selector||bz==="**"&&bH.selector)){bv.splice(bB--,1);if(bH.selector){bv.delegateCount--}if(bF.remove){bF.remove.call(by,bH)}}}if(bv.length===0&&bA!==bv.length){if(!bF.teardown||bF.teardown.call(by,bw,bE.handle)===false){D.removeEvent(by,bG,bE.handle)}delete bI[bG]}}if(D.isEmptyObject(bI)){delete bE.handle;D.removeData(by,"events",true)}},customEvent:{getData:true,setData:true,changeData:true},trigger:function(bw,bD,bB,bK){if(bB&&(bB.nodeType===3||bB.nodeType===8)){return}var bv,by,bE,bI,bA,bz,bG,bF,bC,bJ,bH=bw.type||bw,bx=[];if(O.test(bH+D.event.triggered)){return}if(bH.indexOf("!")>=0){bH=bH.slice(0,-1);by=true}if(bH.indexOf(".")>=0){bx=bH.split(".");bH=bx.shift();bx.sort()}if((!bB||D.event.customEvent[bH])&&!D.event.global[bH]){return}bw=typeof bw==="object"?bw[D.expando]?bw:new D.Event(bH,bw):new D.Event(bH);bw.type=bH;bw.isTrigger=true;bw.exclusive=by;bw.namespace=bx.join(".");bw.namespace_re=bw.namespace?new RegExp("(^|\\.)"+bx.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;bz=bH.indexOf(":")<0?"on"+bH:"";if(!bB){bv=D.cache;for(bE in bv){if(bv[bE].events&&bv[bE].events[bH]){D.event.trigger(bw,bD,bv[bE].handle.elem,true)}}return}bw.result=H;if(!bw.target){bw.target=bB}bD=bD!=null?D.makeArray(bD):[];bD.unshift(bw);bG=D.event.special[bH]||{};if(bG.trigger&&bG.trigger.apply(bB,bD)===false){return}bC=[[bB,bG.bindType||bH]];if(!bK&&!bG.noBubble&&!D.isWindow(bB)){bJ=bG.delegateType||bH;bI=O.test(bJ+bH)?bB:bB.parentNode;for(bA=bB;bI;bI=bI.parentNode){bC.push([bI,bJ]);bA=bI}if(bA===(bB.ownerDocument||al)){bC.push([bA.defaultView||bA.parentWindow||be,bJ])}}for(bE=0;bE<bC.length&&!bw.isPropagationStopped();bE++){bI=bC[bE][0];bw.type=bC[bE][1];bF=(D._data(bI,"events")||{})[bw.type]&&D._data(bI,"handle");if(bF){bF.apply(bI,bD)}bF=bz&&bI[bz];if(bF&&D.acceptData(bI)&&bF.apply&&bF.apply(bI,bD)===false){bw.preventDefault()}}bw.type=bH;if(!bK&&!bw.isDefaultPrevented()){if((!bG._default||bG._default.apply(bB.ownerDocument,bD)===false)&&!(bH==="click"&&D.nodeName(bB,"a"))&&D.acceptData(bB)){if(bz&&bB[bH]&&((bH!=="focus"&&bH!=="blur")||bw.target.offsetWidth!==0)&&!D.isWindow(bB)){bA=bB[bz];if(bA){bB[bz]=null}D.event.triggered=bH;bB[bH]();D.event.triggered=H;if(bA){bB[bz]=bA}}}}return bw.result},dispatch:function(bv){bv=D.event.fix(bv||be.event);var bC,bB,bL,bF,bE,bw,bD,bJ,by,bK,bz=((D._data(this,"events")||{})[bv.type]||[]),bA=bz.delegateCount,bH=aE.call(arguments),bx=!bv.exclusive&&!bv.namespace,bG=D.event.special[bv.type]||{},bI=[];bH[0]=bv;bv.delegateTarget=this;if(bG.preDispatch&&bG.preDispatch.call(this,bv)===false){return}if(bA&&!(bv.button&&bv.type==="click")){for(bL=bv.target;bL!=this;bL=bL.parentNode||this){if(bL.disabled!==true||bv.type!=="click"){bE={};bD=[];for(bC=0;bC<bA;bC++){bJ=bz[bC];by=bJ.selector;if(bE[by]===H){bE[by]=bJ.needsContext?D(by,this).index(bL)>=0:D.find(by,this,null,[bL]).length}if(bE[by]){bD.push(bJ)}}if(bD.length){bI.push({elem:bL,matches:bD})}}}}if(bz.length>bA){bI.push({elem:this,matches:bz.slice(bA)})}for(bC=0;bC<bI.length&&!bv.isPropagationStopped();bC++){bw=bI[bC];bv.currentTarget=bw.elem;for(bB=0;bB<bw.matches.length&&!bv.isImmediatePropagationStopped();bB++){bJ=bw.matches[bB];if(bx||(!bv.namespace&&!bJ.namespace)||bv.namespace_re&&bv.namespace_re.test(bJ.namespace)){bv.data=bJ.data;bv.handleObj=bJ;bF=((D.event.special[bJ.origType]||{}).handle||bJ.handler).apply(bw.elem,bH);if(bF!==H){bv.result=bF;if(bF===false){bv.preventDefault();bv.stopPropagation()}}}}}if(bG.postDispatch){bG.postDispatch.call(this,bv)}return bv.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(bw,bv){if(bw.which==null){bw.which=bv.charCode!=null?bv.charCode:bv.keyCode}return bw}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(by,bx){var bz,bA,bv,bw=bx.button,bB=bx.fromElement;if(by.pageX==null&&bx.clientX!=null){bz=by.target.ownerDocument||al;bA=bz.documentElement;bv=bz.body;by.pageX=bx.clientX+(bA&&bA.scrollLeft||bv&&bv.scrollLeft||0)-(bA&&bA.clientLeft||bv&&bv.clientLeft||0);by.pageY=bx.clientY+(bA&&bA.scrollTop||bv&&bv.scrollTop||0)-(bA&&bA.clientTop||bv&&bv.clientTop||0)}if(!by.relatedTarget&&bB){by.relatedTarget=bB===by.target?bx.toElement:bB}if(!by.which&&bw!==H){by.which=(bw&1?1:(bw&2?3:(bw&4?2:0)))}return by}},fix:function(bx){if(bx[D.expando]){return bx}var bw,bA,bv=bx,by=D.event.fixHooks[bx.type]||{},bz=by.props?this.props.concat(by.props):this.props;bx=D.Event(bv);for(bw=bz.length;bw;){bA=bz[--bw];bx[bA]=bv[bA]}if(!bx.target){bx.target=bv.srcElement||al}if(bx.target.nodeType===3){bx.target=bx.target.parentNode}bx.metaKey=!!bx.metaKey;return by.filter?by.filter(bx,bv):bx},special:{load:{noBubble:true},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(bx,bw,bv){if(D.isWindow(this)){this.onbeforeunload=bv}},teardown:function(bw,bv){if(this.onbeforeunload===bv){this.onbeforeunload=null}}}},simulate:function(bw,by,bx,bv){var bz=D.extend(new D.Event(),bx,{type:bw,isSimulated:true,originalEvent:{}});if(bv){D.event.trigger(bz,null,by)}else{D.event.dispatch.call(by,bz)}if(bz.isDefaultPrevented()){bx.preventDefault()}}};D.event.handle=D.event.dispatch;D.removeEvent=al.removeEventListener?function(bw,bv,bx){if(bw.removeEventListener){bw.removeEventListener(bv,bx,false)}}:function(bx,bw,by){var bv="on"+bw;if(bx.detachEvent){if(typeof bx[bv]==="undefined"){bx[bv]=null}bx.detachEvent(bv,by)}};D.Event=function(bw,bv){if(!(this instanceof D.Event)){return new D.Event(bw,bv)}if(bw&&bw.type){this.originalEvent=bw;this.type=bw.type;this.isDefaultPrevented=(bw.defaultPrevented||bw.returnValue===false||bw.getPreventDefault&&bw.getPreventDefault())?f:bo}else{this.type=bw}if(bv){D.extend(this,bv)}this.timeStamp=bw&&bw.timeStamp||D.now();this[D.expando]=true};function bo(){return false}function f(){return true}D.Event.prototype={preventDefault:function(){this.isDefaultPrevented=f;var bv=this.originalEvent;if(!bv){return}if(bv.preventDefault){bv.preventDefault()}else{bv.returnValue=false}},stopPropagation:function(){this.isPropagationStopped=f;var bv=this.originalEvent;if(!bv){return}if(bv.stopPropagation){bv.stopPropagation()}bv.cancelBubble=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=f;this.stopPropagation()},isDefaultPrevented:bo,isPropagationStopped:bo,isImmediatePropagationStopped:bo};D.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(bw,bv){D.event.special[bw]={delegateType:bv,bindType:bv,handle:function(bA){var by,bC=this,bB=bA.relatedTarget,bz=bA.handleObj,bx=bz.selector;if(!bB||(bB!==bC&&!D.contains(bC,bB))){bA.type=bz.origType;by=bz.handler.apply(this,arguments);bA.type=bv}return by}}});D.fn.extend({on:function(bx,bv,bA,bz,bw){var bB,by;if(typeof bx==="object"){if(typeof bv!=="string"){bA=bA||bv;bv=H}for(by in bx){this.on(by,bv,bA,bx[by],bw)}return this}if(bA==null&&bz==null){bz=bv;bA=bv=H}else{if(bz==null){if(typeof bv==="string"){bz=bA;bA=H}else{bz=bA;bA=bv;bv=H}}}if(bz===false){bz=bo}else{if(!bz){return this}}if(bw===1){bB=bz;bz=function(bC){D().off(bC);return bB.apply(this,arguments)};bz.guid=bB.guid||(bB.guid=D.guid++)}return this.each(function(){D.event.add(this,bx,bz,bA,bv)})},off:function(bx,bv,bz){var bw,by;if(bx&&bx.preventDefault&&bx.handleObj){bw=bx.handleObj;D(bx.delegateTarget).off(bw.namespace?bw.origType+"."+bw.namespace:bw.origType,bw.selector,bw.handler);return this}if(typeof bx==="object"){for(by in bx){this.off(by,bv,bx[by])}return this}if(bv===false||typeof bv==="function"){bz=bv;bv=H}if(bz===false){bz=bo}return this.each(function(){D.event.remove(this,bx,bz,bv)})},delegate:function(bv,bw,by,bx){return this.on(bw,bv,by,bx)},undelegate:function(bv,bw,bx){return arguments.length===1?this.off(bv,"**"):this.off(bw,bv||"**",bx)},trigger:function(bv,bw){return this.each(function(){D.event.trigger(bv,bw,this)})},triggerHandler:function(bv,bw){if(this[0]){return D.event.trigger(bv,bw,this[0],true)}},toggle:function(by){var bw=arguments,bv=by.guid||D.guid++,bx=0,bz=function(bA){var bB=(D._data(this,"lastToggle"+by.guid)||0)%bx;D._data(this,"lastToggle"+by.guid,bB+1);bA.preventDefault();return bw[bB].apply(this,arguments)||false};bz.guid=bv;while(bx<bw.length){bw[bx++].guid=bv}return this.click(bz)},hover:function(bv,bw){return this.mouseenter(bv).mouseleave(bw||bv)}});D.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "),function(bw,bv){D.fn[bv]=function(by,bx){if(bx==null){bx=by;by=null}return arguments.length>0?this.on(bv,null,by,bx):this.trigger(bv)};if(aI.test(bv)){D.event.fixHooks[bv]=D.event.keyHooks}if(bj.test(bv)){D.event.fixHooks[bv]=D.event.mouseHooks}});
/*!
         * Sizzle CSS Selector Engine
         * Copyright 2012 JQXLite Foundation and other contributors
         * Released under the MIT license
         * http://sizzlejs.com/
         */