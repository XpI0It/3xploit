(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ro="145",hi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ui={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},au=0,Bo=1,ou=2,Rc=1,lu=2,hr=3,zi=0,Dt=1,Jt=2,In=0,Oi=1,ko=2,Vo=3,Go=4,cu=5,Ci=100,hu=101,uu=102,Wo=103,Ho=104,fu=200,du=201,pu=202,mu=203,Fc=204,Oc=205,gu=206,_u=207,vu=208,xu=209,yu=210,Mu=0,wu=1,Su=2,za=3,bu=4,Tu=5,Eu=6,Au=7,Us=0,Cu=1,Lu=2,pn=0,Pu=1,Iu=2,Du=3,Ru=4,Fu=5,Nc=300,Bi=301,ki=302,_s=303,Ba=304,zs=306,Mr=1e3,Lt=1001,ka=1002,dt=1003,Xo=1004,qo=1005,Bt=1006,Ou=1007,Bs=1008,Uc=1008,Qn=1009,Nu=1010,Uu=1011,zc=1012,zu=1013,jn=1014,Pn=1015,wr=1016,Bu=1017,ku=1018,Ni=1020,Vu=1021,Gu=1022,jt=1023,Wu=1024,Hu=1025,Kn=1026,Vi=1027,Xu=1028,qu=1029,ju=1030,Yu=1031,Zu=1033,Js=33776,Qs=33777,ea=33778,ta=33779,jo=35840,Yo=35841,Zo=35842,Ko=35843,Ku=36196,$o=37492,Jo=37496,Qo=37808,el=37809,tl=37810,nl=37811,il=37812,rl=37813,sl=37814,al=37815,ol=37816,ll=37817,cl=37818,hl=37819,ul=37820,fl=37821,dl=36492,Va=2200,$u=2201,Ju=2202,vs=2300,xs=2301,na=2302,Ii=2400,Di=2401,ys=2402,so=2500,Qu=2501,ei=3e3,Ge=3001,ef=3200,tf=3201,Ir=0,nf=1,un="srgb",Yn="srgb-linear",ia=7680,rf=519,pl=35044,ml="300 es",Ga=1035;class On{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let gl=1234567;const mr=Math.PI/180,Sr=180/Math.PI;function Nn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ut[s&255]+ut[s>>8&255]+ut[s>>16&255]+ut[s>>24&255]+"-"+ut[e&255]+ut[e>>8&255]+"-"+ut[e>>16&15|64]+ut[e>>24&255]+"-"+ut[t&63|128]+ut[t>>8&255]+"-"+ut[t>>16&255]+ut[t>>24&255]+ut[n&255]+ut[n>>8&255]+ut[n>>16&255]+ut[n>>24&255]).toLowerCase()}function ht(s,e,t){return Math.max(e,Math.min(t,s))}function ao(s,e){return(s%e+e)%e}function sf(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function af(s,e,t){return s!==e?(t-s)/(e-s):0}function gr(s,e,t){return(1-t)*s+t*e}function of(s,e,t,n){return gr(s,e,1-Math.exp(-t*n))}function lf(s,e=1){return e-Math.abs(ao(s,e*2)-e)}function cf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function hf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function uf(s,e){return s+Math.floor(Math.random()*(e-s+1))}function ff(s,e){return s+Math.random()*(e-s)}function df(s){return s*(.5-Math.random())}function pf(s){s!==void 0&&(gl=s);let e=gl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function mf(s){return s*mr}function gf(s){return s*Sr}function Wa(s){return(s&s-1)===0&&s!==0}function Bc(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Ms(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function _f(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),f=a((e-n)/2),p=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*u,l*f,o*c);break;case"YZY":s.set(l*f,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*f,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*p,o*c);break;case"YXY":s.set(l*p,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ur(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function wt(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var $t=Object.freeze({__proto__:null,DEG2RAD:mr,RAD2DEG:Sr,generateUUID:Nn,clamp:ht,euclideanModulo:ao,mapLinear:sf,inverseLerp:af,lerp:gr,damp:of,pingpong:lf,smoothstep:cf,smootherstep:hf,randInt:uf,randFloat:ff,randFloatSpread:df,seededRandom:pf,degToRad:mf,radToDeg:gf,isPowerOfTwo:Wa,ceilPowerOfTwo:Bc,floorPowerOfTwo:Ms,setQuaternionFromProperEuler:_f,normalize:wt,denormalize:ur});class Se{constructor(e=0,t=0){Se.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pt{constructor(){Pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],m=i[0],d=i[3],_=i[6],x=i[1],M=i[4],w=i[7],y=i[2],T=i[5],P=i[8];return r[0]=a*m+o*x+l*y,r[3]=a*d+o*M+l*T,r[6]=a*_+o*w+l*P,r[1]=c*m+h*x+u*y,r[4]=c*d+h*M+u*T,r[7]=c*_+h*w+u*P,r[2]=f*m+p*x+g*y,r[5]=f*d+p*M+g*T,r[8]=f*_+p*w+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,p=c*r-a*l,g=t*u+n*f+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=u*m,e[1]=(i*c-h*n)*m,e[2]=(o*n-i*a)*m,e[3]=f*m,e[4]=(h*t-i*l)*m,e[5]=(i*r-o*t)*m,e[6]=p*m,e[7]=(n*l-c*t)*m,e[8]=(a*t-n*r)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,r=i[0],a=i[3],o=i[6],l=i[1],c=i[4],h=i[7];return i[0]=t*r+n*l,i[3]=t*a+n*c,i[6]=t*o+n*h,i[1]=-n*r+t*l,i[4]=-n*a+t*c,i[7]=-n*o+t*h,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function kc(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function br(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function $n(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function us(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const ra={[un]:{[Yn]:$n},[Yn]:{[un]:us}},Wt={legacyMode:!0,get workingColorSpace(){return Yn},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.legacyMode||e===t||!e||!t)return s;if(ra[e]&&ra[e][t]!==void 0){const n=ra[e][t];return s.r=n(s.r),s.g=n(s.g),s.b=n(s.b),s}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}},Vc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rt={r:0,g:0,b:0},Ht={h:0,s:0,l:0},Br={h:0,s:0,l:0};function sa(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function kr(s,e){return e.r=s.r,e.g=s.g,e.b=s.b,e}class Me{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Wt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Yn){return this.r=e,this.g=t,this.b=n,Wt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Yn){if(e=ao(e,1),t=ht(t,0,1),n=ht(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=sa(a,r,e+1/3),this.g=sa(a,r,e),this.b=sa(a,r,e-1/3)}return Wt.toWorkingColorSpace(this,i),this}setStyle(e,t=un){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Wt.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Wt.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,h=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,h,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Wt.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Wt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=un){const n=Vc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$n(e.r),this.g=$n(e.g),this.b=$n(e.b),this}copyLinearToSRGB(e){return this.r=us(e.r),this.g=us(e.g),this.b=us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=un){return Wt.fromWorkingColorSpace(kr(this,rt),e),ht(rt.r*255,0,255)<<16^ht(rt.g*255,0,255)<<8^ht(rt.b*255,0,255)<<0}getHexString(e=un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Yn){Wt.fromWorkingColorSpace(kr(this,rt),t);const n=rt.r,i=rt.g,r=rt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Yn){return Wt.fromWorkingColorSpace(kr(this,rt),t),e.r=rt.r,e.g=rt.g,e.b=rt.b,e}getStyle(e=un){return Wt.fromWorkingColorSpace(kr(this,rt),e),e!==un?`color(${e} ${rt.r} ${rt.g} ${rt.b})`:`rgb(${rt.r*255|0},${rt.g*255|0},${rt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Ht),Ht.h+=e,Ht.s+=t,Ht.l+=n,this.setHSL(Ht.h,Ht.s,Ht.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ht),e.getHSL(Br);const n=gr(Ht.h,Br.h,t),i=gr(Ht.s,Br.s,t),r=gr(Ht.l,Br.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Me.NAMES=Vc;let fi;class Gc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{fi===void 0&&(fi=br("canvas")),fi.width=e.width,fi.height=e.height;const n=fi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=fi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=br("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=$n(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor($n(t[n]/255)*255):t[n]=$n(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Wc{constructor(e=null){this.isSource=!0,this.uuid=Nn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(aa(i[a].image)):r.push(aa(i[a]))}else r=aa(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function aa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Gc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vf=0;class yt extends On{constructor(e=yt.DEFAULT_IMAGE,t=yt.DEFAULT_MAPPING,n=Lt,i=Lt,r=Bt,a=Bs,o=jt,l=Qn,c=1,h=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=Nn(),this.name="",this.source=new Wc(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mr:e.x=e.x-Math.floor(e.x);break;case Lt:e.x=e.x<0?0:1;break;case ka:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mr:e.y=e.y-Math.floor(e.y);break;case Lt:e.y=e.y<0?0:1;break;case ka:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}yt.DEFAULT_IMAGE=null;yt.DEFAULT_MAPPING=Nc;class Ue{constructor(e=0,t=0,n=0,i=1){Ue.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],g=l[9],m=l[2],d=l[6],_=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-m)<.01&&Math.abs(g-d)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+m)<.1&&Math.abs(g+d)<.1&&Math.abs(c+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,w=(p+1)/2,y=(_+1)/2,T=(h+f)/4,P=(u+m)/4,v=(g+d)/4;return M>w&&M>y?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=T/n,r=P/n):w>y?w<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(w),n=T/i,r=v/i):y<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(y),n=P/r,i=v/r),this.set(n,i,r,t),this}let x=Math.sqrt((d-g)*(d-g)+(u-m)*(u-m)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(d-g)/x,this.y=(u-m)/x,this.z=(f-h)/x,this.w=Math.acos((c+p+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ti extends On{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ue(0,0,e,t),this.scissorTest=!1,this.viewport=new Ue(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new yt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Bt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Wc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hc extends yt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=dt,this.minFilter=dt,this.wrapR=Lt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xf extends yt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=dt,this.minFilter=dt,this.wrapR=Lt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const f=r[a+0],p=r[a+1],g=r[a+2],m=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=m;return}if(u!==m||l!==f||c!==p||h!==g){let d=1-o;const _=l*f+c*p+h*g+u*m,x=_>=0?1:-1,M=1-_*_;if(M>Number.EPSILON){const y=Math.sqrt(M),T=Math.atan2(y,_*x);d=Math.sin(d*T)/y,o=Math.sin(o*T)/y}const w=o*x;if(l=l*d+f*w,c=c*d+p*w,h=h*d+g*w,u=u*d+m*w,d===1-o){const y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*p-c*f,e[t+1]=l*g+h*f+c*u-o*p,e[t+2]=c*g+h*p+o*f-l*u,e[t+3]=h*g-o*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),f=l(n/2),p=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"YZX":this._x=f*h*u+c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u-f*p*g;break;case"XZY":this._x=f*h*u-c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_l.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_l.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*i-o*n,h=l*n+o*t-r*i,u=l*i+r*n-a*t,f=-r*t-a*n-o*i;return this.x=c*l+f*-r+h*-o-u*-a,this.y=h*l+f*-a+u*-r-c*-o,this.z=u*l+f*-o+c*-a-h*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return oa.copy(this).projectOnVector(e),this.sub(oa)}reflect(e){return this.sub(oa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oa=new L,_l=new xt;class _n{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const h=e[l],u=e[l+1],f=e[l+2];h<t&&(t=h),u<n&&(n=u),f<i&&(i=f),h>r&&(r=h),u>a&&(a=u),f>o&&(o=f)}return this.min.set(t,n,i),this.max.set(r,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const h=e.getX(l),u=e.getY(l),f=e.getZ(l);h<t&&(t=h),u<n&&(n=u),f<i&&(i=f),h>r&&(r=h),u>a&&(a=u),f>o&&(o=f)}return this.min.set(t,n,i),this.max.set(r,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let a=0,o=r.count;a<o;a++)kn.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(kn)}else n.boundingBox===null&&n.computeBoundingBox(),la.copy(n.boundingBox),la.applyMatrix4(e.matrixWorld),this.union(la);const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sr),Vr.subVectors(this.max,sr),di.subVectors(e.a,sr),pi.subVectors(e.b,sr),mi.subVectors(e.c,sr),Mn.subVectors(pi,di),wn.subVectors(mi,pi),Vn.subVectors(di,mi);let t=[0,-Mn.z,Mn.y,0,-wn.z,wn.y,0,-Vn.z,Vn.y,Mn.z,0,-Mn.x,wn.z,0,-wn.x,Vn.z,0,-Vn.x,-Mn.y,Mn.x,0,-wn.y,wn.x,0,-Vn.y,Vn.x,0];return!ca(t,di,pi,mi,Vr)||(t=[1,0,0,0,1,0,0,0,1],!ca(t,di,pi,mi,Vr))?!1:(Gr.crossVectors(Mn,wn),t=[Gr.x,Gr.y,Gr.z],ca(t,di,pi,mi,Vr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return kn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const sn=[new L,new L,new L,new L,new L,new L,new L,new L],kn=new L,la=new _n,di=new L,pi=new L,mi=new L,Mn=new L,wn=new L,Vn=new L,sr=new L,Vr=new L,Gr=new L,Gn=new L;function ca(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Gn.fromArray(s,r);const o=i.x*Math.abs(Gn.x)+i.y*Math.abs(Gn.y)+i.z*Math.abs(Gn.z),l=e.dot(Gn),c=t.dot(Gn),h=n.dot(Gn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const yf=new _n,vl=new L,Wr=new L,ha=new L;class ks{constructor(e=new L,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):yf.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ha.subVectors(e,this.center);const t=ha.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(ha.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?Wr.set(0,0,1).multiplyScalar(e.radius):Wr.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(vl.copy(e.center).add(Wr)),this.expandByPoint(vl.copy(e.center).sub(Wr)),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const an=new L,ua=new L,Hr=new L,Sn=new L,fa=new L,Xr=new L,da=new L;class Xc{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,an)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=an.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(an.copy(this.direction).multiplyScalar(t).add(this.origin),an.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ua.copy(e).add(t).multiplyScalar(.5),Hr.copy(t).sub(e).normalize(),Sn.copy(this.origin).sub(ua);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Hr),o=Sn.dot(this.direction),l=-Sn.dot(Hr),c=Sn.lengthSq(),h=Math.abs(1-a*a);let u,f,p,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const m=1/h;u*=m,f*=m,p=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy(Hr).multiplyScalar(f).add(ua),p}intersectSphere(e,t){an.subVectors(e.center,this.origin);const n=an.dot(this.direction),i=an.dot(an)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>i||((r>n||n!==n)&&(n=r),(a<i||i!==i)&&(i=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,an)!==null}intersectTriangle(e,t,n,i,r){fa.subVectors(t,e),Xr.subVectors(n,e),da.crossVectors(fa,Xr);let a=this.direction.dot(da),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Sn.subVectors(this.origin,e);const l=o*this.direction.dot(Xr.crossVectors(Sn,Xr));if(l<0)return null;const c=o*this.direction.dot(fa.cross(Sn));if(c<0||l+c>a)return null;const h=-o*Sn.dot(da);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ge{constructor(){ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,a,o,l,c,h,u,f,p,g,m,d){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=r,_[5]=a,_[9]=o,_[13]=l,_[2]=c,_[6]=h,_[10]=u,_[14]=f,_[3]=p,_[7]=g,_[11]=m,_[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ge().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/gi.setFromMatrixColumn(e,0).length(),r=1/gi.setFromMatrixColumn(e,1).length(),a=1/gi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=a*h,p=a*u,g=o*h,m=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=f-m*c,t[9]=-o*l,t[2]=m-f*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*h,p=l*u,g=c*h,m=c*u;t[0]=f+m*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=m+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*h,p=l*u,g=c*h,m=c*u;t[0]=f-m*o,t[4]=-a*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=m-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*h,p=a*u,g=o*h,m=o*u;t[0]=l*h,t[4]=g*c-p,t[8]=f*c+m,t[1]=l*u,t[5]=m*c+f,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*c,g=o*l,m=o*c;t[0]=l*h,t[4]=m-f*u,t[8]=g*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+g,t[10]=f-m*u}else if(e.order==="XZY"){const f=a*l,p=a*c,g=o*l,m=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+m,t[5]=a*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*h,t[10]=m*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mf,e,wf)}lookAt(e,t,n){const i=this.elements;return At.subVectors(e,t),At.lengthSq()===0&&(At.z=1),At.normalize(),bn.crossVectors(n,At),bn.lengthSq()===0&&(Math.abs(n.z)===1?At.x+=1e-4:At.z+=1e-4,At.normalize(),bn.crossVectors(n,At)),bn.normalize(),qr.crossVectors(At,bn),i[0]=bn.x,i[4]=qr.x,i[8]=At.x,i[1]=bn.y,i[5]=qr.y,i[9]=At.y,i[2]=bn.z,i[6]=qr.z,i[10]=At.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],m=n[6],d=n[10],_=n[14],x=n[3],M=n[7],w=n[11],y=n[15],T=i[0],P=i[4],v=i[8],A=i[12],I=i[1],Y=i[5],Q=i[9],O=i[13],R=i[2],k=i[6],H=i[10],j=i[14],V=i[3],F=i[7],B=i[11],K=i[15];return r[0]=a*T+o*I+l*R+c*V,r[4]=a*P+o*Y+l*k+c*F,r[8]=a*v+o*Q+l*H+c*B,r[12]=a*A+o*O+l*j+c*K,r[1]=h*T+u*I+f*R+p*V,r[5]=h*P+u*Y+f*k+p*F,r[9]=h*v+u*Q+f*H+p*B,r[13]=h*A+u*O+f*j+p*K,r[2]=g*T+m*I+d*R+_*V,r[6]=g*P+m*Y+d*k+_*F,r[10]=g*v+m*Q+d*H+_*B,r[14]=g*A+m*O+d*j+_*K,r[3]=x*T+M*I+w*R+y*V,r[7]=x*P+M*Y+w*k+y*F,r[11]=x*v+M*Q+w*H+y*B,r[15]=x*A+M*O+w*j+y*K,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],p=e[14],g=e[3],m=e[7],d=e[11],_=e[15];return g*(+r*l*u-i*c*u-r*o*f+n*c*f+i*o*p-n*l*p)+m*(+t*l*p-t*c*f+r*a*f-i*a*p+i*c*h-r*l*h)+d*(+t*c*u-t*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+_*(-i*o*h-t*l*u+t*o*f+i*a*u-n*a*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],p=e[11],g=e[12],m=e[13],d=e[14],_=e[15],x=u*d*c-m*f*c+m*l*p-o*d*p-u*l*_+o*f*_,M=g*f*c-h*d*c-g*l*p+a*d*p+h*l*_-a*f*_,w=h*m*c-g*u*c+g*o*p-a*m*p-h*o*_+a*u*_,y=g*u*l-h*m*l-g*o*f+a*m*f+h*o*d-a*u*d,T=t*x+n*M+i*w+r*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/T;return e[0]=x*P,e[1]=(m*f*r-u*d*r-m*i*p+n*d*p+u*i*_-n*f*_)*P,e[2]=(o*d*r-m*l*r+m*i*c-n*d*c-o*i*_+n*l*_)*P,e[3]=(u*l*r-o*f*r-u*i*c+n*f*c+o*i*p-n*l*p)*P,e[4]=M*P,e[5]=(h*d*r-g*f*r+g*i*p-t*d*p-h*i*_+t*f*_)*P,e[6]=(g*l*r-a*d*r-g*i*c+t*d*c+a*i*_-t*l*_)*P,e[7]=(a*f*r-h*l*r+h*i*c-t*f*c-a*i*p+t*l*p)*P,e[8]=w*P,e[9]=(g*u*r-h*m*r-g*n*p+t*m*p+h*n*_-t*u*_)*P,e[10]=(a*m*r-g*o*r+g*n*c-t*m*c-a*n*_+t*o*_)*P,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*p-t*o*p)*P,e[12]=y*P,e[13]=(h*m*i-g*u*i+g*n*f-t*m*f-h*n*d+t*u*d)*P,e[14]=(g*o*i-a*m*i-g*n*l+t*m*l+a*n*d-t*o*d)*P,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*f+t*o*f)*P,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,p=r*h,g=r*u,m=a*h,d=a*u,_=o*u,x=l*c,M=l*h,w=l*u,y=n.x,T=n.y,P=n.z;return i[0]=(1-(m+_))*y,i[1]=(p+w)*y,i[2]=(g-M)*y,i[3]=0,i[4]=(p-w)*T,i[5]=(1-(f+_))*T,i[6]=(d+x)*T,i[7]=0,i[8]=(g+M)*P,i[9]=(d-x)*P,i[10]=(1-(f+m))*P,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=gi.set(i[0],i[1],i[2]).length();const a=gi.set(i[4],i[5],i[6]).length(),o=gi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Xt.copy(this);const c=1/r,h=1/a,u=1/o;return Xt.elements[0]*=c,Xt.elements[1]*=c,Xt.elements[2]*=c,Xt.elements[4]*=h,Xt.elements[5]*=h,Xt.elements[6]*=h,Xt.elements[8]*=u,Xt.elements[9]*=u,Xt.elements[10]*=u,t.setFromRotationMatrix(Xt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a){const o=this.elements,l=2*r/(t-e),c=2*r/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i),f=-(a+r)/(a-r),p=-2*a*r/(a-r);return o[0]=l,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=c,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,r,a){const o=this.elements,l=1/(t-e),c=1/(n-i),h=1/(a-r),u=(t+e)*l,f=(n+i)*c,p=(a+r)*h;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const gi=new L,Xt=new ge,Mf=new L(0,0,0),wf=new L(1,1,1),bn=new L,qr=new L,At=new L,xl=new ge,yl=new xt;class It{constructor(e=0,t=0,n=0,i=It.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ht(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ht(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return xl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yl.setFromEuler(this),this.setFromQuaternion(yl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}It.DefaultOrder="XYZ";It.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class qc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sf=0;const Ml=new L,_i=new xt,on=new ge,jr=new L,ar=new L,bf=new L,Tf=new xt,wl=new L(1,0,0),Sl=new L(0,1,0),bl=new L(0,0,1),Ef={type:"added"},Tl={type:"removed"};class Xe extends On{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=Nn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xe.DefaultUp.clone();const e=new L,t=new It,n=new xt,i=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ge},normalMatrix:{value:new Pt}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=Xe.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Xe.DefaultMatrixWorldAutoUpdate,this.layers=new qc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _i.setFromAxisAngle(e,t),this.quaternion.multiply(_i),this}rotateOnWorldAxis(e,t){return _i.setFromAxisAngle(e,t),this.quaternion.premultiply(_i),this}rotateX(e){return this.rotateOnAxis(wl,e)}rotateY(e){return this.rotateOnAxis(Sl,e)}rotateZ(e){return this.rotateOnAxis(bl,e)}translateOnAxis(e,t){return Ml.copy(e).applyQuaternion(this.quaternion),this.position.add(Ml.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wl,e)}translateY(e){return this.translateOnAxis(Sl,e)}translateZ(e){return this.translateOnAxis(bl,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(on.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?jr.copy(e):jr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?on.lookAt(ar,jr,this.up):on.lookAt(jr,ar,this.up),this.quaternion.setFromRotationMatrix(on),i&&(on.extractRotation(i.matrixWorld),_i.setFromRotationMatrix(on),this.quaternion.premultiply(_i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ef)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Tl)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Tl)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),on.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),on.multiply(e.parent.matrixWorld)),e.applyMatrix4(on),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,e,bf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,Tf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Xe.DefaultUp=new L(0,1,0);Xe.DefaultMatrixAutoUpdate=!0;Xe.DefaultMatrixWorldAutoUpdate=!0;const qt=new L,ln=new L,pa=new L,cn=new L,vi=new L,xi=new L,El=new L,ma=new L,ga=new L,_a=new L;class fn{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),qt.subVectors(e,t),i.cross(qt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){qt.subVectors(i,t),ln.subVectors(n,t),pa.subVectors(e,t);const a=qt.dot(qt),o=qt.dot(ln),l=qt.dot(pa),c=ln.dot(ln),h=ln.dot(pa),u=a*c-o*o;if(u===0)return r.set(-2,-1,-1);const f=1/u,p=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,cn),cn.x>=0&&cn.y>=0&&cn.x+cn.y<=1}static getUV(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,cn),l.set(0,0),l.addScaledVector(r,cn.x),l.addScaledVector(a,cn.y),l.addScaledVector(o,cn.z),l}static isFrontFacing(e,t,n,i){return qt.subVectors(n,t),ln.subVectors(e,t),qt.cross(ln).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qt.subVectors(this.c,this.b),ln.subVectors(this.a,this.b),qt.cross(ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return fn.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;vi.subVectors(i,n),xi.subVectors(r,n),ma.subVectors(e,n);const l=vi.dot(ma),c=xi.dot(ma);if(l<=0&&c<=0)return t.copy(n);ga.subVectors(e,i);const h=vi.dot(ga),u=xi.dot(ga);if(h>=0&&u<=h)return t.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(vi,a);_a.subVectors(e,r);const p=vi.dot(_a),g=xi.dot(_a);if(g>=0&&p<=g)return t.copy(r);const m=p*c-l*g;if(m<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(xi,o);const d=h*g-p*u;if(d<=0&&u-h>=0&&p-g>=0)return El.subVectors(r,i),o=(u-h)/(u-h+(p-g)),t.copy(i).addScaledVector(El,o);const _=1/(d+m+f);return a=m*_,o=f*_,t.copy(n).addScaledVector(vi,a).addScaledVector(xi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Af=0;class vn extends On{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=Nn(),this.name="",this.type="Material",this.blending=Oi,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Fc,this.blendDst=Oc,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=za,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ia,this.stencilZFail=ia,this.stencilZPass=ia,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Oi&&(n.blending=this.blending),this.side!==zi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class jc extends vn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Us,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const et=new L,Yr=new Se;class en{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=pl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Yr.fromBufferAttribute(this,t),Yr.applyMatrix3(e),this.setXY(t,Yr.x,Yr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)et.fromBufferAttribute(this,t),et.applyMatrix3(e),this.setXYZ(t,et.x,et.y,et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)et.fromBufferAttribute(this,t),et.applyMatrix4(e),this.setXYZ(t,et.x,et.y,et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)et.fromBufferAttribute(this,t),et.applyNormalMatrix(e),this.setXYZ(t,et.x,et.y,et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)et.fromBufferAttribute(this,t),et.transformDirection(e),this.setXYZ(t,et.x,et.y,et.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ur(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ur(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ur(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ur(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),i=wt(i,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class oo extends en{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Yc extends en{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ze extends en{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Cf=0;const Ut=new ge,va=new Xe,yi=new L,Ct=new _n,or=new _n,ot=new L;class gt extends On{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=Nn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kc(e)?Yc:oo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Pt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ut.makeRotationFromQuaternion(e),this.applyMatrix4(Ut),this}rotateX(e){return Ut.makeRotationX(e),this.applyMatrix4(Ut),this}rotateY(e){return Ut.makeRotationY(e),this.applyMatrix4(Ut),this}rotateZ(e){return Ut.makeRotationZ(e),this.applyMatrix4(Ut),this}translate(e,t,n){return Ut.makeTranslation(e,t,n),this.applyMatrix4(Ut),this}scale(e,t,n){return Ut.makeScale(e,t,n),this.applyMatrix4(Ut),this}lookAt(e){return va.lookAt(e),va.updateMatrix(),this.applyMatrix4(va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yi).negate(),this.translate(yi.x,yi.y,yi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ze(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _n);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Ct.setFromBufferAttribute(r),this.morphTargetsRelative?(ot.addVectors(this.boundingBox.min,Ct.min),this.boundingBox.expandByPoint(ot),ot.addVectors(this.boundingBox.max,Ct.max),this.boundingBox.expandByPoint(ot)):(this.boundingBox.expandByPoint(Ct.min),this.boundingBox.expandByPoint(Ct.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ks);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(Ct.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];or.setFromBufferAttribute(o),this.morphTargetsRelative?(ot.addVectors(Ct.min,or.min),Ct.expandByPoint(ot),ot.addVectors(Ct.max,or.max),Ct.expandByPoint(ot)):(Ct.expandByPoint(or.min),Ct.expandByPoint(or.max))}Ct.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)ot.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(ot));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ot.fromBufferAttribute(o,c),l&&(yi.fromBufferAttribute(e,c),ot.add(yi)),i=Math.max(i,n.distanceToSquared(ot))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let I=0;I<o;I++)c[I]=new L,h[I]=new L;const u=new L,f=new L,p=new L,g=new Se,m=new Se,d=new Se,_=new L,x=new L;function M(I,Y,Q){u.fromArray(i,I*3),f.fromArray(i,Y*3),p.fromArray(i,Q*3),g.fromArray(a,I*2),m.fromArray(a,Y*2),d.fromArray(a,Q*2),f.sub(u),p.sub(u),m.sub(g),d.sub(g);const O=1/(m.x*d.y-d.x*m.y);!isFinite(O)||(_.copy(f).multiplyScalar(d.y).addScaledVector(p,-m.y).multiplyScalar(O),x.copy(p).multiplyScalar(m.x).addScaledVector(f,-d.x).multiplyScalar(O),c[I].add(_),c[Y].add(_),c[Q].add(_),h[I].add(x),h[Y].add(x),h[Q].add(x))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let I=0,Y=w.length;I<Y;++I){const Q=w[I],O=Q.start,R=Q.count;for(let k=O,H=O+R;k<H;k+=3)M(n[k+0],n[k+1],n[k+2])}const y=new L,T=new L,P=new L,v=new L;function A(I){P.fromArray(r,I*3),v.copy(P);const Y=c[I];y.copy(Y),y.sub(P.multiplyScalar(P.dot(Y))).normalize(),T.crossVectors(v,Y);const O=T.dot(h[I])<0?-1:1;l[I*4]=y.x,l[I*4+1]=y.y,l[I*4+2]=y.z,l[I*4+3]=O}for(let I=0,Y=w.length;I<Y;++I){const Q=w[I],O=Q.start,R=Q.count;for(let k=O,H=O+R;k<H;k+=3)A(n[k+0]),A(n[k+1]),A(n[k+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new en(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),m=e.getX(f+1),d=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,m),a.fromBufferAttribute(t,d),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,d),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ot.fromBufferAttribute(e,t),ot.normalize(),e.setXYZ(t,ot.x,ot.y,ot.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let p=0,g=0;for(let m=0,d=l.length;m<d;m++){o.isInterleavedBufferAttribute?p=l[m]*o.data.stride+o.offset:p=l[m]*h;for(let _=0;_<h;_++)f[g++]=c[p++]}return new en(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Al=new ge,Mi=new Xc,xa=new ks,Tn=new L,En=new L,An=new L,ya=new L,Ma=new L,wa=new L,Zr=new L,Kr=new L,$r=new L,Jr=new Se,Qr=new Se,es=new Se,Sa=new L,ts=new L;class tt extends Xe{constructor(e=new gt,t=new jc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),xa.copy(n.boundingSphere),xa.applyMatrix4(r),e.ray.intersectsSphere(xa)===!1)||(Al.copy(r).invert(),Mi.copy(e.ray).applyMatrix4(Al),n.boundingBox!==null&&Mi.intersectsBox(n.boundingBox)===!1))return;let a;const o=n.index,l=n.attributes.position,c=n.morphAttributes.position,h=n.morphTargetsRelative,u=n.attributes.uv,f=n.attributes.uv2,p=n.groups,g=n.drawRange;if(o!==null)if(Array.isArray(i))for(let m=0,d=p.length;m<d;m++){const _=p[m],x=i[_.materialIndex],M=Math.max(_.start,g.start),w=Math.min(o.count,Math.min(_.start+_.count,g.start+g.count));for(let y=M,T=w;y<T;y+=3){const P=o.getX(y),v=o.getX(y+1),A=o.getX(y+2);a=ns(this,x,e,Mi,l,c,h,u,f,P,v,A),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const m=Math.max(0,g.start),d=Math.min(o.count,g.start+g.count);for(let _=m,x=d;_<x;_+=3){const M=o.getX(_),w=o.getX(_+1),y=o.getX(_+2);a=ns(this,i,e,Mi,l,c,h,u,f,M,w,y),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,d=p.length;m<d;m++){const _=p[m],x=i[_.materialIndex],M=Math.max(_.start,g.start),w=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let y=M,T=w;y<T;y+=3){const P=y,v=y+1,A=y+2;a=ns(this,x,e,Mi,l,c,h,u,f,P,v,A),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const m=Math.max(0,g.start),d=Math.min(l.count,g.start+g.count);for(let _=m,x=d;_<x;_+=3){const M=_,w=_+1,y=_+2;a=ns(this,i,e,Mi,l,c,h,u,f,M,w,y),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}}}function Lf(s,e,t,n,i,r,a,o){let l;if(e.side===Dt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side!==Jt,o),l===null)return null;ts.copy(o),ts.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(ts);return c<t.near||c>t.far?null:{distance:c,point:ts.clone(),object:s}}function ns(s,e,t,n,i,r,a,o,l,c,h,u){Tn.fromBufferAttribute(i,c),En.fromBufferAttribute(i,h),An.fromBufferAttribute(i,u);const f=s.morphTargetInfluences;if(r&&f){Zr.set(0,0,0),Kr.set(0,0,0),$r.set(0,0,0);for(let g=0,m=r.length;g<m;g++){const d=f[g],_=r[g];d!==0&&(ya.fromBufferAttribute(_,c),Ma.fromBufferAttribute(_,h),wa.fromBufferAttribute(_,u),a?(Zr.addScaledVector(ya,d),Kr.addScaledVector(Ma,d),$r.addScaledVector(wa,d)):(Zr.addScaledVector(ya.sub(Tn),d),Kr.addScaledVector(Ma.sub(En),d),$r.addScaledVector(wa.sub(An),d)))}Tn.add(Zr),En.add(Kr),An.add($r)}s.isSkinnedMesh&&(s.boneTransform(c,Tn),s.boneTransform(h,En),s.boneTransform(u,An));const p=Lf(s,e,t,n,Tn,En,An,Sa);if(p){o&&(Jr.fromBufferAttribute(o,c),Qr.fromBufferAttribute(o,h),es.fromBufferAttribute(o,u),p.uv=fn.getUV(Sa,Tn,En,An,Jr,Qr,es,new Se)),l&&(Jr.fromBufferAttribute(l,c),Qr.fromBufferAttribute(l,h),es.fromBufferAttribute(l,u),p.uv2=fn.getUV(Sa,Tn,En,An,Jr,Qr,es,new Se));const g={a:c,b:h,c:u,normal:new L,materialIndex:0};fn.getNormal(Tn,En,An,g.normal),p.face=g}return p}class ni extends gt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ze(c,3)),this.setAttribute("normal",new Ze(h,3)),this.setAttribute("uv",new Ze(u,2));function g(m,d,_,x,M,w,y,T,P,v,A){const I=w/P,Y=y/v,Q=w/2,O=y/2,R=T/2,k=P+1,H=v+1;let j=0,V=0;const F=new L;for(let B=0;B<H;B++){const K=B*Y-O;for(let $=0;$<k;$++){const J=$*I-Q;F[m]=J*x,F[d]=K*M,F[_]=R,c.push(F.x,F.y,F.z),F[m]=0,F[d]=0,F[_]=T>0?1:-1,h.push(F.x,F.y,F.z),u.push($/P),u.push(1-B/v),j+=1}}for(let B=0;B<v;B++)for(let K=0;K<P;K++){const $=f+K+k*B,J=f+K+k*(B+1),re=f+(K+1)+k*(B+1),ue=f+(K+1)+k*B;l.push($,J,ue),l.push(J,re,ue),V+=6}o.addGroup(p,V,A),p+=V,f+=j}}static fromJSON(e){return new ni(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Gi(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function ft(s){const e={};for(let t=0;t<s.length;t++){const n=Gi(s[t]);for(const i in n)e[i]=n[i]}return e}function Pf(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}const If={clone:Gi,merge:ft};var Df=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ii extends vn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Df,this.fragmentShader=Rf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gi(e.uniforms),this.uniformsGroups=Pf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Zc extends Xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class pt extends Zc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Sr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(mr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sr*2*Math.atan(Math.tan(mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(mr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const wi=90,Si=1;class Ff extends Xe{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new pt(wi,Si,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new L(1,0,0)),this.add(i);const r=new pt(wi,Si,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new L(-1,0,0)),this.add(r);const a=new pt(wi,Si,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new L(0,1,0)),this.add(a);const o=new pt(wi,Si,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new L(0,-1,0)),this.add(o);const l=new pt(wi,Si,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new L(0,0,1)),this.add(l);const c=new pt(wi,Si,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new L(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,a,o,l,c]=this.children,h=e.getRenderTarget(),u=e.toneMapping,f=e.xr.enabled;e.toneMapping=pn,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.toneMapping=u,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Kc extends yt{constructor(e,t,n,i,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Bi,super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Of extends ti{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Kc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ni(5,5,5),r=new ii({name:"CubemapFromEquirect",uniforms:Gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dt,blending:In});r.uniforms.tEquirect.value=t;const a=new tt(i,r),o=t.minFilter;return t.minFilter===Bs&&(t.minFilter=Bt),new Ff(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const ba=new L,Nf=new L,Uf=new Pt;class Wn{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ba.subVectors(n,t).cross(Nf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(ba),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Uf.getNormalMatrix(e),i=this.coplanarPoint(ba).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bi=new ks,is=new L;class lo{constructor(e=new Wn,t=new Wn,n=new Wn,i=new Wn,r=new Wn,a=new Wn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],a=n[2],o=n[3],l=n[4],c=n[5],h=n[6],u=n[7],f=n[8],p=n[9],g=n[10],m=n[11],d=n[12],_=n[13],x=n[14],M=n[15];return t[0].setComponents(o-i,u-l,m-f,M-d).normalize(),t[1].setComponents(o+i,u+l,m+f,M+d).normalize(),t[2].setComponents(o+r,u+c,m+p,M+_).normalize(),t[3].setComponents(o-r,u-c,m-p,M-_).normalize(),t[4].setComponents(o-a,u-h,m-g,M-x).normalize(),t[5].setComponents(o+a,u+h,m+g,M+x).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(bi)}intersectsSprite(e){return bi.center.set(0,0,0),bi.radius=.7071067811865476,bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(is.x=i.normal.x>0?e.max.x:e.min.x,is.y=i.normal.y>0?e.max.y:e.min.y,is.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(is)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $c(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function zf(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,f=c.usage,p=s.createBuffer();s.bindBuffer(h,p),s.bufferData(h,u,f),c.onUploadCallback();let g;if(u instanceof Float32Array)g=5126;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(u instanceof Int16Array)g=5122;else if(u instanceof Uint32Array)g=5125;else if(u instanceof Int32Array)g=5124;else if(u instanceof Int8Array)g=5120;else if(u instanceof Uint8Array)g=5121;else if(u instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function r(c,h,u){const f=h.array,p=h.updateRange;s.bindBuffer(u,c),p.count===-1?s.bufferSubData(u,0,f):(t?s.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):s.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u===void 0?n.set(c,i(c,h)):u.version<c.version&&(r(u.buffer,c,h),u.version=c.version)}return{get:a,remove:o,update:l}}class Dr extends gt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,f=t/l,p=[],g=[],m=[],d=[];for(let _=0;_<h;_++){const x=_*f-a;for(let M=0;M<c;M++){const w=M*u-r;g.push(w,-x,0),m.push(0,0,1),d.push(M/o),d.push(1-_/l)}}for(let _=0;_<l;_++)for(let x=0;x<o;x++){const M=x+c*_,w=x+c*(_+1),y=x+1+c*(_+1),T=x+1+c*_;p.push(M,w,T),p.push(w,y,T)}this.setIndex(p),this.setAttribute("position",new Ze(g,3)),this.setAttribute("normal",new Ze(m,3)),this.setAttribute("uv",new Ze(d,2))}static fromJSON(e){return new Dr(e.width,e.height,e.widthSegments,e.heightSegments)}}var Bf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,kf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Gf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xf="vec3 transformed = vec3( position );",qf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jf=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Yf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Zf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Kf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,$f=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ed=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,td=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,id=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,rd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,sd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ad=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,od=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ld=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,cd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ud="gl_FragColor = linearToOutputTexel( gl_FragColor );",fd=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,pd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,md=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_d=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Md=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Sd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,bd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Td=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ed=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,Ad=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Cd=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Ld=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Id=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Rd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Fd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Od=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Nd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ud=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,zd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Vd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Gd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Xd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Kd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,$d=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Jd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Qd=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,np=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ip=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,rp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,sp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,ap=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,op=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,hp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,up=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gp=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,_p=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vp=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,xp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,wp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,bp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ep=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ap=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Lp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Pp=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Ip=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Dp=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Rp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Fp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Op=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Np=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Up=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zp=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kp=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Vp=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Gp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Wp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Hp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,jp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zp=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Kp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$p=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,em=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,nm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,im=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,am=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,om=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,hm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,um=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,dm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ce={alphamap_fragment:Bf,alphamap_pars_fragment:kf,alphatest_fragment:Vf,alphatest_pars_fragment:Gf,aomap_fragment:Wf,aomap_pars_fragment:Hf,begin_vertex:Xf,beginnormal_vertex:qf,bsdfs:jf,iridescence_fragment:Yf,bumpmap_pars_fragment:Zf,clipping_planes_fragment:Kf,clipping_planes_pars_fragment:$f,clipping_planes_pars_vertex:Jf,clipping_planes_vertex:Qf,color_fragment:ed,color_pars_fragment:td,color_pars_vertex:nd,color_vertex:id,common:rd,cube_uv_reflection_fragment:sd,defaultnormal_vertex:ad,displacementmap_pars_vertex:od,displacementmap_vertex:ld,emissivemap_fragment:cd,emissivemap_pars_fragment:hd,encodings_fragment:ud,encodings_pars_fragment:fd,envmap_fragment:dd,envmap_common_pars_fragment:pd,envmap_pars_fragment:md,envmap_pars_vertex:gd,envmap_physical_pars_fragment:Cd,envmap_vertex:_d,fog_vertex:vd,fog_pars_vertex:xd,fog_fragment:yd,fog_pars_fragment:Md,gradientmap_pars_fragment:wd,lightmap_fragment:Sd,lightmap_pars_fragment:bd,lights_lambert_fragment:Td,lights_lambert_pars_fragment:Ed,lights_pars_begin:Ad,lights_toon_fragment:Ld,lights_toon_pars_fragment:Pd,lights_phong_fragment:Id,lights_phong_pars_fragment:Dd,lights_physical_fragment:Rd,lights_physical_pars_fragment:Fd,lights_fragment_begin:Od,lights_fragment_maps:Nd,lights_fragment_end:Ud,logdepthbuf_fragment:zd,logdepthbuf_pars_fragment:Bd,logdepthbuf_pars_vertex:kd,logdepthbuf_vertex:Vd,map_fragment:Gd,map_pars_fragment:Wd,map_particle_fragment:Hd,map_particle_pars_fragment:Xd,metalnessmap_fragment:qd,metalnessmap_pars_fragment:jd,morphcolor_vertex:Yd,morphnormal_vertex:Zd,morphtarget_pars_vertex:Kd,morphtarget_vertex:$d,normal_fragment_begin:Jd,normal_fragment_maps:Qd,normal_pars_fragment:ep,normal_pars_vertex:tp,normal_vertex:np,normalmap_pars_fragment:ip,clearcoat_normal_fragment_begin:rp,clearcoat_normal_fragment_maps:sp,clearcoat_pars_fragment:ap,iridescence_pars_fragment:op,output_fragment:lp,packing:cp,premultiplied_alpha_fragment:hp,project_vertex:up,dithering_fragment:fp,dithering_pars_fragment:dp,roughnessmap_fragment:pp,roughnessmap_pars_fragment:mp,shadowmap_pars_fragment:gp,shadowmap_pars_vertex:_p,shadowmap_vertex:vp,shadowmask_pars_fragment:xp,skinbase_vertex:yp,skinning_pars_vertex:Mp,skinning_vertex:wp,skinnormal_vertex:Sp,specularmap_fragment:bp,specularmap_pars_fragment:Tp,tonemapping_fragment:Ep,tonemapping_pars_fragment:Ap,transmission_fragment:Cp,transmission_pars_fragment:Lp,uv_pars_fragment:Pp,uv_pars_vertex:Ip,uv_vertex:Dp,uv2_pars_fragment:Rp,uv2_pars_vertex:Fp,uv2_vertex:Op,worldpos_vertex:Np,background_vert:Up,background_frag:zp,cube_vert:Bp,cube_frag:kp,depth_vert:Vp,depth_frag:Gp,distanceRGBA_vert:Wp,distanceRGBA_frag:Hp,equirect_vert:Xp,equirect_frag:qp,linedashed_vert:jp,linedashed_frag:Yp,meshbasic_vert:Zp,meshbasic_frag:Kp,meshlambert_vert:$p,meshlambert_frag:Jp,meshmatcap_vert:Qp,meshmatcap_frag:em,meshnormal_vert:tm,meshnormal_frag:nm,meshphong_vert:im,meshphong_frag:rm,meshphysical_vert:sm,meshphysical_frag:am,meshtoon_vert:om,meshtoon_frag:lm,points_vert:cm,points_frag:hm,shadow_vert:um,shadow_frag:fm,sprite_vert:dm,sprite_frag:pm},ie={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Pt},uv2Transform:{value:new Pt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Pt}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Pt}}},Kt={basic:{uniforms:ft([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Ce.meshbasic_vert,fragmentShader:Ce.meshbasic_frag},lambert:{uniforms:ft([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Me(0)}}]),vertexShader:Ce.meshlambert_vert,fragmentShader:Ce.meshlambert_frag},phong:{uniforms:ft([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30}}]),vertexShader:Ce.meshphong_vert,fragmentShader:Ce.meshphong_frag},standard:{uniforms:ft([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag},toon:{uniforms:ft([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new Me(0)}}]),vertexShader:Ce.meshtoon_vert,fragmentShader:Ce.meshtoon_frag},matcap:{uniforms:ft([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Ce.meshmatcap_vert,fragmentShader:Ce.meshmatcap_frag},points:{uniforms:ft([ie.points,ie.fog]),vertexShader:Ce.points_vert,fragmentShader:Ce.points_frag},dashed:{uniforms:ft([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ce.linedashed_vert,fragmentShader:Ce.linedashed_frag},depth:{uniforms:ft([ie.common,ie.displacementmap]),vertexShader:Ce.depth_vert,fragmentShader:Ce.depth_frag},normal:{uniforms:ft([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Ce.meshnormal_vert,fragmentShader:Ce.meshnormal_frag},sprite:{uniforms:ft([ie.sprite,ie.fog]),vertexShader:Ce.sprite_vert,fragmentShader:Ce.sprite_frag},background:{uniforms:{uvTransform:{value:new Pt},t2D:{value:null}},vertexShader:Ce.background_vert,fragmentShader:Ce.background_frag},cube:{uniforms:ft([ie.envmap,{opacity:{value:1}}]),vertexShader:Ce.cube_vert,fragmentShader:Ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ce.equirect_vert,fragmentShader:Ce.equirect_frag},distanceRGBA:{uniforms:ft([ie.common,ie.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ce.distanceRGBA_vert,fragmentShader:Ce.distanceRGBA_frag},shadow:{uniforms:ft([ie.lights,ie.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:Ce.shadow_vert,fragmentShader:Ce.shadow_frag}};Kt.physical={uniforms:ft([Kt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Se(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag};function mm(s,e,t,n,i,r){const a=new Me(0);let o=i===!0?0:1,l,c,h=null,u=0,f=null;function p(m,d){let _=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=e.get(x));const M=s.xr,w=M.getSession&&M.getSession();w&&w.environmentBlendMode==="additive"&&(x=null),x===null?g(a,o):x&&x.isColor&&(g(x,1),_=!0),(s.autoClear||_)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===zs)?(c===void 0&&(c=new tt(new ni(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:Gi(Kt.cube.uniforms),vertexShader:Kt.cube.vertexShader,fragmentShader:Kt.cube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,(h!==x||u!==x.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=x,u=x.version,f=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new tt(new Dr(2,2),new ii({name:"BackgroundMaterial",uniforms:Gi(Kt.background.uniforms),vertexShader:Kt.background.vertexShader,fragmentShader:Kt.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||u!==x.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=x,u=x.version,f=s.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,d){t.buffers.color.setClear(m.r,m.g,m.b,d,r)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),o=d,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,g(a,o)},render:p}}function gm(s,e,t,n){const i=s.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=d(null);let c=l,h=!1;function u(R,k,H,j,V){let F=!1;if(a){const B=m(j,H,k);c!==B&&(c=B,p(c.object)),F=_(R,j,H,V),F&&x(R,j,H,V)}else{const B=k.wireframe===!0;(c.geometry!==j.id||c.program!==H.id||c.wireframe!==B)&&(c.geometry=j.id,c.program=H.id,c.wireframe=B,F=!0)}V!==null&&t.update(V,34963),(F||h)&&(h=!1,v(R,k,H,j),V!==null&&s.bindBuffer(34963,t.get(V).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function p(R){return n.isWebGL2?s.bindVertexArray(R):r.bindVertexArrayOES(R)}function g(R){return n.isWebGL2?s.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function m(R,k,H){const j=H.wireframe===!0;let V=o[R.id];V===void 0&&(V={},o[R.id]=V);let F=V[k.id];F===void 0&&(F={},V[k.id]=F);let B=F[j];return B===void 0&&(B=d(f()),F[j]=B),B}function d(R){const k=[],H=[],j=[];for(let V=0;V<i;V++)k[V]=0,H[V]=0,j[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:H,attributeDivisors:j,object:R,attributes:{},index:null}}function _(R,k,H,j){const V=c.attributes,F=k.attributes;let B=0;const K=H.getAttributes();for(const $ in K)if(K[$].location>=0){const re=V[$];let ue=F[$];if(ue===void 0&&($==="instanceMatrix"&&R.instanceMatrix&&(ue=R.instanceMatrix),$==="instanceColor"&&R.instanceColor&&(ue=R.instanceColor)),re===void 0||re.attribute!==ue||ue&&re.data!==ue.data)return!0;B++}return c.attributesNum!==B||c.index!==j}function x(R,k,H,j){const V={},F=k.attributes;let B=0;const K=H.getAttributes();for(const $ in K)if(K[$].location>=0){let re=F[$];re===void 0&&($==="instanceMatrix"&&R.instanceMatrix&&(re=R.instanceMatrix),$==="instanceColor"&&R.instanceColor&&(re=R.instanceColor));const ue={};ue.attribute=re,re&&re.data&&(ue.data=re.data),V[$]=ue,B++}c.attributes=V,c.attributesNum=B,c.index=j}function M(){const R=c.newAttributes;for(let k=0,H=R.length;k<H;k++)R[k]=0}function w(R){y(R,0)}function y(R,k){const H=c.newAttributes,j=c.enabledAttributes,V=c.attributeDivisors;H[R]=1,j[R]===0&&(s.enableVertexAttribArray(R),j[R]=1),V[R]!==k&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,k),V[R]=k)}function T(){const R=c.newAttributes,k=c.enabledAttributes;for(let H=0,j=k.length;H<j;H++)k[H]!==R[H]&&(s.disableVertexAttribArray(H),k[H]=0)}function P(R,k,H,j,V,F){n.isWebGL2===!0&&(H===5124||H===5125)?s.vertexAttribIPointer(R,k,H,V,F):s.vertexAttribPointer(R,k,H,j,V,F)}function v(R,k,H,j){if(n.isWebGL2===!1&&(R.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const V=j.attributes,F=H.getAttributes(),B=k.defaultAttributeValues;for(const K in F){const $=F[K];if($.location>=0){let J=V[K];if(J===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(J=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(J=R.instanceColor)),J!==void 0){const re=J.normalized,ue=J.itemSize,X=t.get(J);if(X===void 0)continue;const Pe=X.buffer,de=X.type,ve=X.bytesPerElement;if(J.isInterleavedBufferAttribute){const ce=J.data,Oe=ce.stride,Te=J.offset;if(ce.isInstancedInterleavedBuffer){for(let _e=0;_e<$.locationSize;_e++)y($.location+_e,ce.meshPerAttribute);R.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let _e=0;_e<$.locationSize;_e++)w($.location+_e);s.bindBuffer(34962,Pe);for(let _e=0;_e<$.locationSize;_e++)P($.location+_e,ue/$.locationSize,de,re,Oe*ve,(Te+ue/$.locationSize*_e)*ve)}else{if(J.isInstancedBufferAttribute){for(let ce=0;ce<$.locationSize;ce++)y($.location+ce,J.meshPerAttribute);R.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ce=0;ce<$.locationSize;ce++)w($.location+ce);s.bindBuffer(34962,Pe);for(let ce=0;ce<$.locationSize;ce++)P($.location+ce,ue/$.locationSize,de,re,ue*ve,ue/$.locationSize*ce*ve)}}else if(B!==void 0){const re=B[K];if(re!==void 0)switch(re.length){case 2:s.vertexAttrib2fv($.location,re);break;case 3:s.vertexAttrib3fv($.location,re);break;case 4:s.vertexAttrib4fv($.location,re);break;default:s.vertexAttrib1fv($.location,re)}}}}T()}function A(){Q();for(const R in o){const k=o[R];for(const H in k){const j=k[H];for(const V in j)g(j[V].object),delete j[V];delete k[H]}delete o[R]}}function I(R){if(o[R.id]===void 0)return;const k=o[R.id];for(const H in k){const j=k[H];for(const V in j)g(j[V].object),delete j[V];delete k[H]}delete o[R.id]}function Y(R){for(const k in o){const H=o[k];if(H[R.id]===void 0)continue;const j=H[R.id];for(const V in j)g(j[V].object),delete j[V];delete H[R.id]}}function Q(){O(),h=!0,c!==l&&(c=l,p(c.object))}function O(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:Q,resetDefaultState:O,dispose:A,releaseStatesOfGeometry:I,releaseStatesOfProgram:Y,initAttributes:M,enableAttribute:w,disableUnusedAttributes:T}}function _m(s,e,t,n){const i=n.isWebGL2;let r;function a(c){r=c}function o(c,h){s.drawArrays(r,c,h),t.update(h,r,1)}function l(c,h,u){if(u===0)return;let f,p;if(i)f=s,p="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,c,h,u),t.update(h,r,u)}this.setMode=a,this.render=o,this.renderInstances=l}function vm(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(P){if(P==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&s instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=s.getParameter(34930),f=s.getParameter(35660),p=s.getParameter(3379),g=s.getParameter(34076),m=s.getParameter(34921),d=s.getParameter(36347),_=s.getParameter(36348),x=s.getParameter(36349),M=f>0,w=a||e.has("OES_texture_float"),y=M&&w,T=a?s.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:d,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:M,floatFragmentTextures:w,floatVertexTextures:y,maxSamples:T}}function xm(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Wn,o=new Pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f,p){const g=u.length!==0||f||n!==0||i;return i=f,t=h(u,p,0),n=u.length,g},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1,c()},this.setState=function(u,f,p){const g=u.clippingPlanes,m=u.clipIntersection,d=u.clipShadows,_=s.get(u);if(!i||g===null||g.length===0||r&&!d)r?h(null):c();else{const x=r?0:n,M=x*4;let w=_.clippingState||null;l.value=w,w=h(g,f,M,p);for(let y=0;y!==M;++y)w[y]=t[y];_.clippingState=w,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,p,g){const m=u!==null?u.length:0;let d=null;if(m!==0){if(d=l.value,g!==!0||d===null){const _=p+m*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(d===null||d.length<_)&&(d=new Float32Array(_));for(let M=0,w=p;M!==m;++M,w+=4)a.copy(u[M]).applyMatrix4(x,o),a.normal.toArray(d,w),d[w+3]=a.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,d}}function ym(s){let e=new WeakMap;function t(a,o){return o===_s?a.mapping=Bi:o===Ba&&(a.mapping=ki),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===_s||o===Ba)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Of(l.height/2);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class co extends Zc{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ri=4,Cl=[.125,.215,.35,.446,.526,.582],qn=20,Ta=new co,Ll=new Me;let Ea=null;const Hn=(1+Math.sqrt(5))/2,Ti=1/Hn,Pl=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Hn,Ti),new L(0,Hn,-Ti),new L(Ti,0,Hn),new L(-Ti,0,Hn),new L(Hn,Ti,0),new L(-Hn,Ti,0)];class Il{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ea=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ea),e.scissorTest=!1,rs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bi||e.mapping===ki?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ea=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:wr,format:jt,encoding:ei,depthBuffer:!1},i=Dl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mm(r)),this._blurMaterial=wm(r,e,t)}return i}_compileMaterial(e){const t=new tt(this._lodPlanes[0],e);this._renderer.compile(t,Ta)}_sceneToCubeUV(e,t,n,i){const o=new pt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Ll),h.toneMapping=pn,h.autoClear=!1;const p=new jc({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1}),g=new tt(new ni,p);let m=!1;const d=e.background;d?d.isColor&&(p.color.copy(d),e.background=null,m=!0):(p.color.copy(Ll),m=!0);for(let _=0;_<6;_++){const x=_%3;x===0?(o.up.set(0,l[_],0),o.lookAt(c[_],0,0)):x===1?(o.up.set(0,0,l[_]),o.lookAt(0,c[_],0)):(o.up.set(0,l[_],0),o.lookAt(0,0,c[_]));const M=this._cubeSize;rs(i,x*M,_>2?M:0,M,M),h.setRenderTarget(i),m&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Bi||e.mapping===ki;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rl());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new tt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;rs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ta)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Pl[(i-1)%Pl.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new tt(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*qn-1),m=r/g,d=isFinite(r)?1+Math.floor(h*m):qn;d>qn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${qn}`);const _=[];let x=0;for(let P=0;P<qn;++P){const v=P/m,A=Math.exp(-v*v/2);_.push(A),P===0?x+=A:P<d&&(x+=2*A)}for(let P=0;P<_.length;P++)_[P]=_[P]/x;f.envMap.value=e.texture,f.samples.value=d,f.weights.value=_,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-n;const w=this._sizeLods[i],y=3*w*(i>M-Ri?i-M+Ri:0),T=4*(this._cubeSize-w);rs(t,y,T,3*w,2*w),l.setRenderTarget(t),l.render(u,Ta)}}function Mm(s){const e=[],t=[],n=[];let i=s;const r=s-Ri+1+Cl.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-Ri?l=Cl[a-s+Ri-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,m=3,d=2,_=1,x=new Float32Array(m*g*p),M=new Float32Array(d*g*p),w=new Float32Array(_*g*p);for(let T=0;T<p;T++){const P=T%3*2/3-1,v=T>2?0:-1,A=[P,v,0,P+2/3,v,0,P+2/3,v+1,0,P,v,0,P+2/3,v+1,0,P,v+1,0];x.set(A,m*g*T),M.set(f,d*g*T);const I=[T,T,T,T,T,T];w.set(I,_*g*T)}const y=new gt;y.setAttribute("position",new en(x,m)),y.setAttribute("uv",new en(M,d)),y.setAttribute("faceIndex",new en(w,_)),e.push(y),i>Ri&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Dl(s,e,t){const n=new ti(s,e,t);return n.texture.mapping=zs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rs(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function wm(s,e,t){const n=new Float32Array(qn),i=new L(0,1,0);return new ii({name:"SphericalGaussianBlur",defines:{n:qn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Rl(){return new ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Fl(){return new ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function ho(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Sm(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===_s||l===Ba,h=l===Bi||l===ki;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new Il(s)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{const u=o.image;if(c&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new Il(s));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function bm(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Tm(s,e,t,n){const i={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete i[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)e.update(f[g],34962);const p=u.morphAttributes;for(const g in p){const m=p[g];for(let d=0,_=m.length;d<_;d++)e.update(m[d],34962)}}function c(u){const f=[],p=u.index,g=u.attributes.position;let m=0;if(p!==null){const x=p.array;m=p.version;for(let M=0,w=x.length;M<w;M+=3){const y=x[M+0],T=x[M+1],P=x[M+2];f.push(y,T,T,P,P,y)}}else{const x=g.array;m=g.version;for(let M=0,w=x.length/3-1;M<w;M+=3){const y=M+0,T=M+1,P=M+2;f.push(y,T,T,P,P,y)}}const d=new(kc(f)?Yc:oo)(f,1);d.version=m;const _=r.get(u);_&&e.remove(_),r.set(u,d)}function h(u){const f=r.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Em(s,e,t,n){const i=n.isWebGL2;let r;function a(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function h(f,p){s.drawElements(r,p,o,f*l),t.update(p,r,1)}function u(f,p,g){if(g===0)return;let m,d;if(i)m=s,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](r,p,o,f*l,g),t.update(p,r,g)}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u}function Am(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(r/3);break;case 1:t.lines+=o*(r/2);break;case 3:t.lines+=o*(r-1);break;case 2:t.lines+=o*r;break;case 0:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Cm(s,e){return s[0]-e[0]}function Lm(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Pm(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new Ue,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u,f){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,d=m!==void 0?m.length:0;let _=r.get(h);if(_===void 0||_.count!==d){let H=function(){R.dispose(),r.delete(h),h.removeEventListener("dispose",H)};var g=H;_!==void 0&&_.texture.dispose();const w=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,P=h.morphAttributes.position||[],v=h.morphAttributes.normal||[],A=h.morphAttributes.color||[];let I=0;w===!0&&(I=1),y===!0&&(I=2),T===!0&&(I=3);let Y=h.attributes.position.count*I,Q=1;Y>e.maxTextureSize&&(Q=Math.ceil(Y/e.maxTextureSize),Y=e.maxTextureSize);const O=new Float32Array(Y*Q*4*d),R=new Hc(O,Y,Q,d);R.type=Pn,R.needsUpdate=!0;const k=I*4;for(let j=0;j<d;j++){const V=P[j],F=v[j],B=A[j],K=Y*Q*4*j;for(let $=0;$<V.count;$++){const J=$*k;w===!0&&(a.fromBufferAttribute(V,$),O[K+J+0]=a.x,O[K+J+1]=a.y,O[K+J+2]=a.z,O[K+J+3]=0),y===!0&&(a.fromBufferAttribute(F,$),O[K+J+4]=a.x,O[K+J+5]=a.y,O[K+J+6]=a.z,O[K+J+7]=0),T===!0&&(a.fromBufferAttribute(B,$),O[K+J+8]=a.x,O[K+J+9]=a.y,O[K+J+10]=a.z,O[K+J+11]=B.itemSize===4?a.w:1)}}_={count:d,texture:R,size:new Se(Y,Q)},r.set(h,_),h.addEventListener("dispose",H)}let x=0;for(let w=0;w<p.length;w++)x+=p[w];const M=h.morphTargetsRelative?1:1-x;f.getUniforms().setValue(s,"morphTargetBaseInfluence",M),f.getUniforms().setValue(s,"morphTargetInfluences",p),f.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}else{const m=p===void 0?0:p.length;let d=n[h.id];if(d===void 0||d.length!==m){d=[];for(let y=0;y<m;y++)d[y]=[y,0];n[h.id]=d}for(let y=0;y<m;y++){const T=d[y];T[0]=y,T[1]=p[y]}d.sort(Lm);for(let y=0;y<8;y++)y<m&&d[y][1]?(o[y][0]=d[y][0],o[y][1]=d[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(Cm);const _=h.morphAttributes.position,x=h.morphAttributes.normal;let M=0;for(let y=0;y<8;y++){const T=o[y],P=T[0],v=T[1];P!==Number.MAX_SAFE_INTEGER&&v?(_&&h.getAttribute("morphTarget"+y)!==_[P]&&h.setAttribute("morphTarget"+y,_[P]),x&&h.getAttribute("morphNormal"+y)!==x[P]&&h.setAttribute("morphNormal"+y,x[P]),i[y]=v,M+=v):(_&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),x&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),i[y]=0)}const w=h.morphTargetsRelative?1:1-M;f.getUniforms().setValue(s,"morphTargetBaseInfluence",w),f.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Im(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);return i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const Jc=new yt,Qc=new Hc,eh=new xf,th=new Kc,Ol=[],Nl=[],Ul=new Float32Array(16),zl=new Float32Array(9),Bl=new Float32Array(4);function Xi(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Ol[i];if(r===void 0&&(r=new Float32Array(i),Ol[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function st(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function at(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Vs(s,e){let t=Nl[e];t===void 0&&(t=new Int32Array(e),Nl[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Dm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Rm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;s.uniform2fv(this.addr,e),at(t,e)}}function Fm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(st(t,e))return;s.uniform3fv(this.addr,e),at(t,e)}}function Om(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;s.uniform4fv(this.addr,e),at(t,e)}}function Nm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(st(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),at(t,e)}else{if(st(t,n))return;Bl.set(n),s.uniformMatrix2fv(this.addr,!1,Bl),at(t,n)}}function Um(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(st(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),at(t,e)}else{if(st(t,n))return;zl.set(n),s.uniformMatrix3fv(this.addr,!1,zl),at(t,n)}}function zm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(st(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),at(t,e)}else{if(st(t,n))return;Ul.set(n),s.uniformMatrix4fv(this.addr,!1,Ul),at(t,n)}}function Bm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function km(s,e){const t=this.cache;st(t,e)||(s.uniform2iv(this.addr,e),at(t,e))}function Vm(s,e){const t=this.cache;st(t,e)||(s.uniform3iv(this.addr,e),at(t,e))}function Gm(s,e){const t=this.cache;st(t,e)||(s.uniform4iv(this.addr,e),at(t,e))}function Wm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Hm(s,e){const t=this.cache;st(t,e)||(s.uniform2uiv(this.addr,e),at(t,e))}function Xm(s,e){const t=this.cache;st(t,e)||(s.uniform3uiv(this.addr,e),at(t,e))}function qm(s,e){const t=this.cache;st(t,e)||(s.uniform4uiv(this.addr,e),at(t,e))}function jm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Jc,i)}function Ym(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||eh,i)}function Zm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||th,i)}function Km(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Qc,i)}function $m(s){switch(s){case 5126:return Dm;case 35664:return Rm;case 35665:return Fm;case 35666:return Om;case 35674:return Nm;case 35675:return Um;case 35676:return zm;case 5124:case 35670:return Bm;case 35667:case 35671:return km;case 35668:case 35672:return Vm;case 35669:case 35673:return Gm;case 5125:return Wm;case 36294:return Hm;case 36295:return Xm;case 36296:return qm;case 35678:case 36198:case 36298:case 36306:case 35682:return jm;case 35679:case 36299:case 36307:return Ym;case 35680:case 36300:case 36308:case 36293:return Zm;case 36289:case 36303:case 36311:case 36292:return Km}}function Jm(s,e){s.uniform1fv(this.addr,e)}function Qm(s,e){const t=Xi(e,this.size,2);s.uniform2fv(this.addr,t)}function eg(s,e){const t=Xi(e,this.size,3);s.uniform3fv(this.addr,t)}function tg(s,e){const t=Xi(e,this.size,4);s.uniform4fv(this.addr,t)}function ng(s,e){const t=Xi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function ig(s,e){const t=Xi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function rg(s,e){const t=Xi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function sg(s,e){s.uniform1iv(this.addr,e)}function ag(s,e){s.uniform2iv(this.addr,e)}function og(s,e){s.uniform3iv(this.addr,e)}function lg(s,e){s.uniform4iv(this.addr,e)}function cg(s,e){s.uniform1uiv(this.addr,e)}function hg(s,e){s.uniform2uiv(this.addr,e)}function ug(s,e){s.uniform3uiv(this.addr,e)}function fg(s,e){s.uniform4uiv(this.addr,e)}function dg(s,e,t){const n=this.cache,i=e.length,r=Vs(t,i);st(n,r)||(s.uniform1iv(this.addr,r),at(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Jc,r[a])}function pg(s,e,t){const n=this.cache,i=e.length,r=Vs(t,i);st(n,r)||(s.uniform1iv(this.addr,r),at(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||eh,r[a])}function mg(s,e,t){const n=this.cache,i=e.length,r=Vs(t,i);st(n,r)||(s.uniform1iv(this.addr,r),at(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||th,r[a])}function gg(s,e,t){const n=this.cache,i=e.length,r=Vs(t,i);st(n,r)||(s.uniform1iv(this.addr,r),at(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Qc,r[a])}function _g(s){switch(s){case 5126:return Jm;case 35664:return Qm;case 35665:return eg;case 35666:return tg;case 35674:return ng;case 35675:return ig;case 35676:return rg;case 5124:case 35670:return sg;case 35667:case 35671:return ag;case 35668:case 35672:return og;case 35669:case 35673:return lg;case 5125:return cg;case 36294:return hg;case 36295:return ug;case 36296:return fg;case 35678:case 36198:case 36298:case 36306:case 35682:return dg;case 35679:case 36299:case 36307:return pg;case 35680:case 36300:case 36308:case 36293:return mg;case 36289:case 36303:case 36311:case 36292:return gg}}class vg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=$m(t.type)}}class xg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=_g(t.type)}}class yg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Aa=/(\w+)(\])?(\[|\.)?/g;function kl(s,e){s.seq.push(e),s.map[e.id]=e}function Mg(s,e,t){const n=s.name,i=n.length;for(Aa.lastIndex=0;;){const r=Aa.exec(n),a=Aa.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){kl(t,c===void 0?new vg(o,s,e):new xg(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new yg(o),kl(t,u)),t=u}}}class fs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Mg(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Vl(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let wg=0;function Sg(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function bg(s){switch(s){case ei:return["Linear","( value )"];case Ge:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function Gl(s,e,t){const n=s.getShaderParameter(e,35713),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Sg(s.getShaderSource(e),a)}else return i}function Tg(s,e){const t=bg(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Eg(s,e){let t;switch(e){case Pu:t="Linear";break;case Iu:t="Reinhard";break;case Du:t="OptimizedCineon";break;case Ru:t="ACESFilmic";break;case Fu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ag(s){return[s.extensionDerivatives||!!s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(fr).join(`
`)}function Cg(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Lg(s,e){const t={},n=s.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===35674&&(o=2),r.type===35675&&(o=3),r.type===35676&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function fr(s){return s!==""}function Wl(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hl(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Pg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ha(s){return s.replace(Pg,Ig)}function Ig(s,e){const t=Ce[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ha(t)}const Dg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xl(s){return s.replace(Dg,Rg)}function Rg(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ql(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Fg(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Rc?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===lu?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===hr&&(e="SHADOWMAP_TYPE_VSM"),e}function Og(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Bi:case ki:e="ENVMAP_TYPE_CUBE";break;case zs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ng(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ki:e="ENVMAP_MODE_REFRACTION";break}return e}function Ug(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Us:e="ENVMAP_BLENDING_MULTIPLY";break;case Cu:e="ENVMAP_BLENDING_MIX";break;case Lu:e="ENVMAP_BLENDING_ADD";break}return e}function zg(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Bg(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Fg(t),c=Og(t),h=Ng(t),u=Ug(t),f=zg(t),p=t.isWebGL2?"":Ag(t),g=Cg(r),m=i.createProgram();let d,_,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[g].filter(fr).join(`
`),d.length>0&&(d+=`
`),_=[p,g].filter(fr).join(`
`),_.length>0&&(_+=`
`)):(d=[ql(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fr).join(`
`),_=[p,ql(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pn?"#define TONE_MAPPING":"",t.toneMapping!==pn?Ce.tonemapping_pars_fragment:"",t.toneMapping!==pn?Eg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ce.encodings_pars_fragment,Tg("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fr).join(`
`)),a=Ha(a),a=Wl(a,t),a=Hl(a,t),o=Ha(o),o=Wl(o,t),o=Hl(o,t),a=Xl(a),o=Xl(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,_=["#define varying in",t.glslVersion===ml?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ml?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const M=x+d+a,w=x+_+o,y=Vl(i,35633,M),T=Vl(i,35632,w);if(i.attachShader(m,y),i.attachShader(m,T),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),s.debug.checkShaderErrors){const A=i.getProgramInfoLog(m).trim(),I=i.getShaderInfoLog(y).trim(),Y=i.getShaderInfoLog(T).trim();let Q=!0,O=!0;if(i.getProgramParameter(m,35714)===!1){Q=!1;const R=Gl(i,y,"vertex"),k=Gl(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,35715)+`

Program Info Log: `+A+`
`+R+`
`+k)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(I===""||Y==="")&&(O=!1);O&&(this.diagnostics={runnable:Q,programLog:A,vertexShader:{log:I,prefix:d},fragmentShader:{log:Y,prefix:_}})}i.deleteShader(y),i.deleteShader(T);let P;this.getUniforms=function(){return P===void 0&&(P=new fs(i,m)),P};let v;return this.getAttributes=function(){return v===void 0&&(v=Lg(i,m)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=wg++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=T,this}let kg=0;class Vg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Gg(e),t.set(e,n)),n}}class Gg{constructor(e){this.id=kg++,this.code=e,this.usedTimes=0}}function Wg(s,e,t,n,i,r,a){const o=new qc,l=new Vg,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v,A,I,Y,Q){const O=Y.fog,R=Q.geometry,k=v.isMeshStandardMaterial?Y.environment:null,H=(v.isMeshStandardMaterial?t:e).get(v.envMap||k),j=!!H&&H.mapping===zs?H.image.height:null,V=g[v.type];v.precision!==null&&(p=i.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const F=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,B=F!==void 0?F.length:0;let K=0;R.morphAttributes.position!==void 0&&(K=1),R.morphAttributes.normal!==void 0&&(K=2),R.morphAttributes.color!==void 0&&(K=3);let $,J,re,ue;if(V){const Oe=Kt[V];$=Oe.vertexShader,J=Oe.fragmentShader}else $=v.vertexShader,J=v.fragmentShader,l.update(v),re=l.getVertexShaderID(v),ue=l.getFragmentShaderID(v);const X=s.getRenderTarget(),Pe=v.alphaTest>0,de=v.clearcoat>0,ve=v.iridescence>0;return{isWebGL2:h,shaderID:V,shaderName:v.type,vertexShader:$,fragmentShader:J,defines:v.defines,customVertexShaderID:re,customFragmentShaderID:ue,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,instancing:Q.isInstancedMesh===!0,instancingColor:Q.isInstancedMesh===!0&&Q.instanceColor!==null,supportsVertexTextures:f,outputEncoding:X===null?s.outputEncoding:X.isXRRenderTarget===!0?X.texture.encoding:ei,map:!!v.map,matcap:!!v.matcap,envMap:!!H,envMapMode:H&&H.mapping,envMapCubeUVHeight:j,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===nf,tangentSpaceNormalMap:v.normalMapType===Ir,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===Ge,clearcoat:de,clearcoatMap:de&&!!v.clearcoatMap,clearcoatRoughnessMap:de&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:de&&!!v.clearcoatNormalMap,iridescence:ve,iridescenceMap:ve&&!!v.iridescenceMap,iridescenceThicknessMap:ve&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===Oi,alphaMap:!!v.alphaMap,alphaTest:Pe,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!R.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||v.transmission>0||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||v.sheen>0||!!v.sheenColorMap||!!v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!O,useFog:v.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:u,skinning:Q.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:K,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:v.toneMapped?s.toneMapping:pn,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Jt,flipSided:v.side===Dt,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function d(v){const A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(const I in v.defines)A.push(I),A.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(_(A,v),x(A,v),A.push(s.outputEncoding)),A.push(v.customProgramCacheKey),A.join()}function _(v,A){v.push(A.precision),v.push(A.outputEncoding),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.combine),v.push(A.vertexUvs),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function x(v,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.map&&o.enable(4),A.matcap&&o.enable(5),A.envMap&&o.enable(6),A.lightMap&&o.enable(7),A.aoMap&&o.enable(8),A.emissiveMap&&o.enable(9),A.bumpMap&&o.enable(10),A.normalMap&&o.enable(11),A.objectSpaceNormalMap&&o.enable(12),A.tangentSpaceNormalMap&&o.enable(13),A.clearcoat&&o.enable(14),A.clearcoatMap&&o.enable(15),A.clearcoatRoughnessMap&&o.enable(16),A.clearcoatNormalMap&&o.enable(17),A.iridescence&&o.enable(18),A.iridescenceMap&&o.enable(19),A.iridescenceThicknessMap&&o.enable(20),A.displacementMap&&o.enable(21),A.specularMap&&o.enable(22),A.roughnessMap&&o.enable(23),A.metalnessMap&&o.enable(24),A.gradientMap&&o.enable(25),A.alphaMap&&o.enable(26),A.alphaTest&&o.enable(27),A.vertexColors&&o.enable(28),A.vertexAlphas&&o.enable(29),A.vertexUvs&&o.enable(30),A.vertexTangents&&o.enable(31),A.uvsVertexOnly&&o.enable(32),v.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.physicallyCorrectLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.specularIntensityMap&&o.enable(15),A.specularColorMap&&o.enable(16),A.transmission&&o.enable(17),A.transmissionMap&&o.enable(18),A.thicknessMap&&o.enable(19),A.sheen&&o.enable(20),A.sheenColorMap&&o.enable(21),A.sheenRoughnessMap&&o.enable(22),A.decodeVideoTexture&&o.enable(23),A.opaque&&o.enable(24),v.push(o.mask)}function M(v){const A=g[v.type];let I;if(A){const Y=Kt[A];I=If.clone(Y.uniforms)}else I=v.uniforms;return I}function w(v,A){let I;for(let Y=0,Q=c.length;Y<Q;Y++){const O=c[Y];if(O.cacheKey===A){I=O,++I.usedTimes;break}}return I===void 0&&(I=new Bg(s,A,v,r),c.push(I)),I}function y(v){if(--v.usedTimes===0){const A=c.indexOf(v);c[A]=c[c.length-1],c.pop(),v.destroy()}}function T(v){l.remove(v)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:M,acquireProgram:w,releaseProgram:y,releaseShaderCache:T,programs:c,dispose:P}}function Hg(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Xg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function jl(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Yl(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,f,p,g,m,d){let _=s[e];return _===void 0?(_={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:m,group:d},s[e]=_):(_.id=u.id,_.object=u,_.geometry=f,_.material=p,_.groupOrder=g,_.renderOrder=u.renderOrder,_.z=m,_.group=d),e++,_}function o(u,f,p,g,m,d){const _=a(u,f,p,g,m,d);p.transmission>0?n.push(_):p.transparent===!0?i.push(_):t.push(_)}function l(u,f,p,g,m,d){const _=a(u,f,p,g,m,d);p.transmission>0?n.unshift(_):p.transparent===!0?i.unshift(_):t.unshift(_)}function c(u,f){t.length>1&&t.sort(u||Xg),n.length>1&&n.sort(f||jl),i.length>1&&i.sort(f||jl)}function h(){for(let u=e,f=s.length;u<f;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function qg(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Yl,s.set(n,[a])):i>=r.length?(a=new Yl,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function jg(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Me};break;case"SpotLight":t={position:new L,direction:new L,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":t={color:new Me,position:new L,halfWidth:new L,halfHeight:new L};break}return s[e.id]=t,t}}}function Yg(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Zg=0;function Kg(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function $g(s,e){const t=new jg,n=Yg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new L);const r=new L,a=new ge,o=new ge;function l(h,u){let f=0,p=0,g=0;for(let Y=0;Y<9;Y++)i.probe[Y].set(0,0,0);let m=0,d=0,_=0,x=0,M=0,w=0,y=0,T=0,P=0,v=0;h.sort(Kg);const A=u!==!0?Math.PI:1;for(let Y=0,Q=h.length;Y<Q;Y++){const O=h[Y],R=O.color,k=O.intensity,H=O.distance,j=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)f+=R.r*k*A,p+=R.g*k*A,g+=R.b*k*A;else if(O.isLightProbe)for(let V=0;V<9;V++)i.probe[V].addScaledVector(O.sh.coefficients[V],k);else if(O.isDirectionalLight){const V=t.get(O);if(V.color.copy(O.color).multiplyScalar(O.intensity*A),O.castShadow){const F=O.shadow,B=n.get(O);B.shadowBias=F.bias,B.shadowNormalBias=F.normalBias,B.shadowRadius=F.radius,B.shadowMapSize=F.mapSize,i.directionalShadow[m]=B,i.directionalShadowMap[m]=j,i.directionalShadowMatrix[m]=O.shadow.matrix,w++}i.directional[m]=V,m++}else if(O.isSpotLight){const V=t.get(O);V.position.setFromMatrixPosition(O.matrixWorld),V.color.copy(R).multiplyScalar(k*A),V.distance=H,V.coneCos=Math.cos(O.angle),V.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),V.decay=O.decay,i.spot[_]=V;const F=O.shadow;if(O.map&&(i.spotLightMap[P]=O.map,P++,F.updateMatrices(O),O.castShadow&&v++),i.spotLightMatrix[_]=F.matrix,O.castShadow){const B=n.get(O);B.shadowBias=F.bias,B.shadowNormalBias=F.normalBias,B.shadowRadius=F.radius,B.shadowMapSize=F.mapSize,i.spotShadow[_]=B,i.spotShadowMap[_]=j,T++}_++}else if(O.isRectAreaLight){const V=t.get(O);V.color.copy(R).multiplyScalar(k),V.halfWidth.set(O.width*.5,0,0),V.halfHeight.set(0,O.height*.5,0),i.rectArea[x]=V,x++}else if(O.isPointLight){const V=t.get(O);if(V.color.copy(O.color).multiplyScalar(O.intensity*A),V.distance=O.distance,V.decay=O.decay,O.castShadow){const F=O.shadow,B=n.get(O);B.shadowBias=F.bias,B.shadowNormalBias=F.normalBias,B.shadowRadius=F.radius,B.shadowMapSize=F.mapSize,B.shadowCameraNear=F.camera.near,B.shadowCameraFar=F.camera.far,i.pointShadow[d]=B,i.pointShadowMap[d]=j,i.pointShadowMatrix[d]=O.shadow.matrix,y++}i.point[d]=V,d++}else if(O.isHemisphereLight){const V=t.get(O);V.skyColor.copy(O.color).multiplyScalar(k*A),V.groundColor.copy(O.groundColor).multiplyScalar(k*A),i.hemi[M]=V,M++}}x>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=g;const I=i.hash;(I.directionalLength!==m||I.pointLength!==d||I.spotLength!==_||I.rectAreaLength!==x||I.hemiLength!==M||I.numDirectionalShadows!==w||I.numPointShadows!==y||I.numSpotShadows!==T||I.numSpotMaps!==P)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=x,i.point.length=d,i.hemi.length=M,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=T+P-v,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=v,I.directionalLength=m,I.pointLength=d,I.spotLength=_,I.rectAreaLength=x,I.hemiLength=M,I.numDirectionalShadows=w,I.numPointShadows=y,I.numSpotShadows=T,I.numSpotMaps=P,i.version=Zg++)}function c(h,u){let f=0,p=0,g=0,m=0,d=0;const _=u.matrixWorldInverse;for(let x=0,M=h.length;x<M;x++){const w=h[x];if(w.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(_),f++}else if(w.isSpotLight){const y=i.spot[g];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(_),y.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(_),g++}else if(w.isRectAreaLight){const y=i.rectArea[m];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(_),o.identity(),a.copy(w.matrixWorld),a.premultiply(_),o.extractRotation(a),y.halfWidth.set(w.width*.5,0,0),y.halfHeight.set(0,w.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(w.isPointLight){const y=i.point[p];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(_),p++}else if(w.isHemisphereLight){const y=i.hemi[d];y.direction.setFromMatrixPosition(w.matrixWorld),y.direction.transformDirection(_),d++}}}return{setup:l,setupView:c,state:i}}function Zl(s,e){const t=new $g(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Jg(s,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let l;return o===void 0?(l=new Zl(s,e),t.set(r,[l])):a>=o.length?(l=new Zl(s,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Qg extends vn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ef,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class e0 extends vn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new L,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const t0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,n0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function i0(s,e,t){let n=new lo;const i=new Se,r=new Se,a=new Ue,o=new Qg({depthPacking:tf}),l=new e0,c={},h=t.maxTextureSize,u={0:Dt,1:zi,2:Jt},f=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:t0,fragmentShader:n0}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new gt;g.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new tt(g,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rc,this.render=function(w,y,T){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||w.length===0)return;const P=s.getRenderTarget(),v=s.getActiveCubeFace(),A=s.getActiveMipmapLevel(),I=s.state;I.setBlending(In),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let Y=0,Q=w.length;Y<Q;Y++){const O=w[Y],R=O.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;i.copy(R.mapSize);const k=R.getFrameExtents();if(i.multiply(k),r.copy(R.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/k.x),i.x=r.x*k.x,R.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/k.y),i.y=r.y*k.y,R.mapSize.y=r.y)),R.map===null){const j=this.type!==hr?{minFilter:dt,magFilter:dt}:{};R.map=new ti(i.x,i.y,j),R.map.texture.name=O.name+".shadowMap",R.camera.updateProjectionMatrix()}s.setRenderTarget(R.map),s.clear();const H=R.getViewportCount();for(let j=0;j<H;j++){const V=R.getViewport(j);a.set(r.x*V.x,r.y*V.y,r.x*V.z,r.y*V.w),I.viewport(a),R.updateMatrices(O,j),n=R.getFrustum(),M(y,T,R.camera,O,this.type)}R.isPointLightShadow!==!0&&this.type===hr&&_(R,T),R.needsUpdate=!1}d.needsUpdate=!1,s.setRenderTarget(P,v,A)};function _(w,y){const T=e.update(m);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ti(i.x,i.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(y,null,T,f,m,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(y,null,T,p,m,null)}function x(w,y,T,P,v,A){let I=null;const Y=T.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(Y!==void 0?I=Y:I=T.isPointLight===!0?l:o,s.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0){const Q=I.uuid,O=y.uuid;let R=c[Q];R===void 0&&(R={},c[Q]=R);let k=R[O];k===void 0&&(k=I.clone(),R[O]=k),I=k}return I.visible=y.visible,I.wireframe=y.wireframe,A===hr?I.side=y.shadowSide!==null?y.shadowSide:y.side:I.side=y.shadowSide!==null?y.shadowSide:u[y.side],I.alphaMap=y.alphaMap,I.alphaTest=y.alphaTest,I.clipShadows=y.clipShadows,I.clippingPlanes=y.clippingPlanes,I.clipIntersection=y.clipIntersection,I.displacementMap=y.displacementMap,I.displacementScale=y.displacementScale,I.displacementBias=y.displacementBias,I.wireframeLinewidth=y.wireframeLinewidth,I.linewidth=y.linewidth,T.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(T.matrixWorld),I.nearDistance=P,I.farDistance=v),I}function M(w,y,T,P,v){if(w.visible===!1)return;if(w.layers.test(y.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===hr)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,w.matrixWorld);const Y=e.update(w),Q=w.material;if(Array.isArray(Q)){const O=Y.groups;for(let R=0,k=O.length;R<k;R++){const H=O[R],j=Q[H.materialIndex];if(j&&j.visible){const V=x(w,j,P,T.near,T.far,v);s.renderBufferDirect(T,null,Y,V,w,H)}}}else if(Q.visible){const O=x(w,Q,P,T.near,T.far,v);s.renderBufferDirect(T,null,Y,O,w,null)}}const I=w.children;for(let Y=0,Q=I.length;Y<Q;Y++)M(I[Y],y,T,P,v)}}function r0(s,e,t){const n=t.isWebGL2;function i(){let D=!1;const oe=new Ue;let ne=null;const Z=new Ue(0,0,0,0);return{setMask:function(se){ne!==se&&!D&&(s.colorMask(se,se,se,se),ne=se)},setLocked:function(se){D=se},setClear:function(se,ye,We,Ke,xn){xn===!0&&(se*=Ke,ye*=Ke,We*=Ke),oe.set(se,ye,We,Ke),Z.equals(oe)===!1&&(s.clearColor(se,ye,We,Ke),Z.copy(oe))},reset:function(){D=!1,ne=null,Z.set(-1,0,0,0)}}}function r(){let D=!1,oe=null,ne=null,Z=null;return{setTest:function(se){se?Pe(2929):de(2929)},setMask:function(se){oe!==se&&!D&&(s.depthMask(se),oe=se)},setFunc:function(se){if(ne!==se){switch(se){case Mu:s.depthFunc(512);break;case wu:s.depthFunc(519);break;case Su:s.depthFunc(513);break;case za:s.depthFunc(515);break;case bu:s.depthFunc(514);break;case Tu:s.depthFunc(518);break;case Eu:s.depthFunc(516);break;case Au:s.depthFunc(517);break;default:s.depthFunc(515)}ne=se}},setLocked:function(se){D=se},setClear:function(se){Z!==se&&(s.clearDepth(se),Z=se)},reset:function(){D=!1,oe=null,ne=null,Z=null}}}function a(){let D=!1,oe=null,ne=null,Z=null,se=null,ye=null,We=null,Ke=null,xn=null;return{setTest:function(je){D||(je?Pe(2960):de(2960))},setMask:function(je){oe!==je&&!D&&(s.stencilMask(je),oe=je)},setFunc:function(je,rn,Ot){(ne!==je||Z!==rn||se!==Ot)&&(s.stencilFunc(je,rn,Ot),ne=je,Z=rn,se=Ot)},setOp:function(je,rn,Ot){(ye!==je||We!==rn||Ke!==Ot)&&(s.stencilOp(je,rn,Ot),ye=je,We=rn,Ke=Ot)},setLocked:function(je){D=je},setClear:function(je){xn!==je&&(s.clearStencil(je),xn=je)},reset:function(){D=!1,oe=null,ne=null,Z=null,se=null,ye=null,We=null,Ke=null,xn=null}}}const o=new i,l=new r,c=new a,h=new WeakMap,u=new WeakMap;let f={},p={},g=new WeakMap,m=[],d=null,_=!1,x=null,M=null,w=null,y=null,T=null,P=null,v=null,A=!1,I=null,Y=null,Q=null,O=null,R=null;const k=s.getParameter(35661);let H=!1,j=0;const V=s.getParameter(7938);V.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(V)[1]),H=j>=1):V.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),H=j>=2);let F=null,B={};const K=s.getParameter(3088),$=s.getParameter(2978),J=new Ue().fromArray(K),re=new Ue().fromArray($);function ue(D,oe,ne){const Z=new Uint8Array(4),se=s.createTexture();s.bindTexture(D,se),s.texParameteri(D,10241,9728),s.texParameteri(D,10240,9728);for(let ye=0;ye<ne;ye++)s.texImage2D(oe+ye,0,6408,1,1,0,6408,5121,Z);return se}const X={};X[3553]=ue(3553,3553,1),X[34067]=ue(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Pe(2929),l.setFunc(za),nt(!1),Tt(Bo),Pe(2884),qe(In);function Pe(D){f[D]!==!0&&(s.enable(D),f[D]=!0)}function de(D){f[D]!==!1&&(s.disable(D),f[D]=!1)}function ve(D,oe){return p[D]!==oe?(s.bindFramebuffer(D,oe),p[D]=oe,n&&(D===36009&&(p[36160]=oe),D===36160&&(p[36009]=oe)),!0):!1}function ce(D,oe){let ne=m,Z=!1;if(D)if(ne=g.get(oe),ne===void 0&&(ne=[],g.set(oe,ne)),D.isWebGLMultipleRenderTargets){const se=D.texture;if(ne.length!==se.length||ne[0]!==36064){for(let ye=0,We=se.length;ye<We;ye++)ne[ye]=36064+ye;ne.length=se.length,Z=!0}}else ne[0]!==36064&&(ne[0]=36064,Z=!0);else ne[0]!==1029&&(ne[0]=1029,Z=!0);Z&&(t.isWebGL2?s.drawBuffers(ne):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ne))}function Oe(D){return d!==D?(s.useProgram(D),d=D,!0):!1}const Te={[Ci]:32774,[hu]:32778,[uu]:32779};if(n)Te[Wo]=32775,Te[Ho]=32776;else{const D=e.get("EXT_blend_minmax");D!==null&&(Te[Wo]=D.MIN_EXT,Te[Ho]=D.MAX_EXT)}const _e={[fu]:0,[du]:1,[pu]:768,[Fc]:770,[yu]:776,[vu]:774,[gu]:772,[mu]:769,[Oc]:771,[xu]:775,[_u]:773};function qe(D,oe,ne,Z,se,ye,We,Ke){if(D===In){_===!0&&(de(3042),_=!1);return}if(_===!1&&(Pe(3042),_=!0),D!==cu){if(D!==x||Ke!==A){if((M!==Ci||T!==Ci)&&(s.blendEquation(32774),M=Ci,T=Ci),Ke)switch(D){case Oi:s.blendFuncSeparate(1,771,1,771);break;case ko:s.blendFunc(1,1);break;case Vo:s.blendFuncSeparate(0,769,0,1);break;case Go:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Oi:s.blendFuncSeparate(770,771,1,771);break;case ko:s.blendFunc(770,1);break;case Vo:s.blendFuncSeparate(0,769,0,1);break;case Go:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}w=null,y=null,P=null,v=null,x=D,A=Ke}return}se=se||oe,ye=ye||ne,We=We||Z,(oe!==M||se!==T)&&(s.blendEquationSeparate(Te[oe],Te[se]),M=oe,T=se),(ne!==w||Z!==y||ye!==P||We!==v)&&(s.blendFuncSeparate(_e[ne],_e[Z],_e[ye],_e[We]),w=ne,y=Z,P=ye,v=We),x=D,A=null}function ct(D,oe){D.side===Jt?de(2884):Pe(2884);let ne=D.side===Dt;oe&&(ne=!ne),nt(ne),D.blending===Oi&&D.transparent===!1?qe(In):qe(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),o.setMask(D.colorWrite);const Z=D.stencilWrite;c.setTest(Z),Z&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ke(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Pe(32926):de(32926)}function nt(D){I!==D&&(D?s.frontFace(2304):s.frontFace(2305),I=D)}function Tt(D){D!==au?(Pe(2884),D!==Y&&(D===Bo?s.cullFace(1029):D===ou?s.cullFace(1028):s.cullFace(1032))):de(2884),Y=D}function it(D){D!==Q&&(H&&s.lineWidth(D),Q=D)}function ke(D,oe,ne){D?(Pe(32823),(O!==oe||R!==ne)&&(s.polygonOffset(oe,ne),O=oe,R=ne)):de(32823)}function Rt(D){D?Pe(3089):de(3089)}function Ft(D){D===void 0&&(D=33984+k-1),F!==D&&(s.activeTexture(D),F=D)}function E(D,oe,ne){ne===void 0&&(F===null?ne=33984+k-1:ne=F);let Z=B[ne];Z===void 0&&(Z={type:void 0,texture:void 0},B[ne]=Z),(Z.type!==D||Z.texture!==oe)&&(F!==ne&&(s.activeTexture(ne),F=ne),s.bindTexture(D,oe||X[D]),Z.type=D,Z.texture=oe)}function S(){const D=B[F];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function G(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function C(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function U(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(D){J.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),J.copy(D))}function he(D){re.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),re.copy(D))}function pe(D,oe){let ne=u.get(oe);ne===void 0&&(ne=new WeakMap,u.set(oe,ne));let Z=ne.get(D);Z===void 0&&(Z=s.getUniformBlockIndex(oe,D.name),ne.set(D,Z))}function we(D,oe){const Z=u.get(oe).get(D);h.get(D)!==Z&&(s.uniformBlockBinding(oe,Z,D.__bindingPointIndex),h.set(D,Z))}function Ne(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},F=null,B={},p={},g=new WeakMap,m=[],d=null,_=!1,x=null,M=null,w=null,y=null,T=null,P=null,v=null,A=!1,I=null,Y=null,Q=null,O=null,R=null,J.set(0,0,s.canvas.width,s.canvas.height),re.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Pe,disable:de,bindFramebuffer:ve,drawBuffers:ce,useProgram:Oe,setBlending:qe,setMaterial:ct,setFlipSided:nt,setCullFace:Tt,setLineWidth:it,setPolygonOffset:ke,setScissorTest:Rt,activeTexture:Ft,bindTexture:E,unbindTexture:S,compressedTexImage2D:G,texImage2D:U,texImage3D:le,updateUBOMapping:pe,uniformBlockBinding:we,texStorage2D:xe,texStorage3D:C,texSubImage2D:ee,texSubImage3D:te,compressedTexSubImage2D:ae,scissor:fe,viewport:he,reset:Ne}}function s0(s,e,t,n,i,r,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(E,S){return _?new OffscreenCanvas(E,S):br("canvas")}function M(E,S,G,ee){let te=1;if((E.width>ee||E.height>ee)&&(te=ee/Math.max(E.width,E.height)),te<1||S===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const ae=S?Ms:Math.floor,xe=ae(te*E.width),C=ae(te*E.height);m===void 0&&(m=x(xe,C));const U=G?x(xe,C):m;return U.width=xe,U.height=C,U.getContext("2d").drawImage(E,0,0,xe,C),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+xe+"x"+C+")."),U}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function w(E){return Wa(E.width)&&Wa(E.height)}function y(E){return o?!1:E.wrapS!==Lt||E.wrapT!==Lt||E.minFilter!==dt&&E.minFilter!==Bt}function T(E,S){return E.generateMipmaps&&S&&E.minFilter!==dt&&E.minFilter!==Bt}function P(E){s.generateMipmap(E)}function v(E,S,G,ee,te=!1){if(o===!1)return S;if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ae=S;return S===6403&&(G===5126&&(ae=33326),G===5131&&(ae=33325),G===5121&&(ae=33321)),S===33319&&(G===5126&&(ae=33328),G===5131&&(ae=33327),G===5121&&(ae=33323)),S===6408&&(G===5126&&(ae=34836),G===5131&&(ae=34842),G===5121&&(ae=ee===Ge&&te===!1?35907:32856),G===32819&&(ae=32854),G===32820&&(ae=32855)),(ae===33325||ae===33326||ae===33327||ae===33328||ae===34842||ae===34836)&&e.get("EXT_color_buffer_float"),ae}function A(E,S,G){return T(E,G)===!0||E.isFramebufferTexture&&E.minFilter!==dt&&E.minFilter!==Bt?Math.log2(Math.max(S.width,S.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?S.mipmaps.length:1}function I(E){return E===dt||E===Xo||E===qo?9728:9729}function Y(E){const S=E.target;S.removeEventListener("dispose",Y),O(S),S.isVideoTexture&&g.delete(S)}function Q(E){const S=E.target;S.removeEventListener("dispose",Q),k(S)}function O(E){const S=n.get(E);if(S.__webglInit===void 0)return;const G=E.source,ee=d.get(G);if(ee){const te=ee[S.__cacheKey];te.usedTimes--,te.usedTimes===0&&R(E),Object.keys(ee).length===0&&d.delete(G)}n.remove(E)}function R(E){const S=n.get(E);s.deleteTexture(S.__webglTexture);const G=E.source,ee=d.get(G);delete ee[S.__cacheKey],a.memory.textures--}function k(E){const S=E.texture,G=n.get(E),ee=n.get(S);if(ee.__webglTexture!==void 0&&(s.deleteTexture(ee.__webglTexture),a.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let te=0;te<6;te++)s.deleteFramebuffer(G.__webglFramebuffer[te]),G.__webglDepthbuffer&&s.deleteRenderbuffer(G.__webglDepthbuffer[te]);else{if(s.deleteFramebuffer(G.__webglFramebuffer),G.__webglDepthbuffer&&s.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&s.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let te=0;te<G.__webglColorRenderbuffer.length;te++)G.__webglColorRenderbuffer[te]&&s.deleteRenderbuffer(G.__webglColorRenderbuffer[te]);G.__webglDepthRenderbuffer&&s.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let te=0,ae=S.length;te<ae;te++){const xe=n.get(S[te]);xe.__webglTexture&&(s.deleteTexture(xe.__webglTexture),a.memory.textures--),n.remove(S[te])}n.remove(S),n.remove(E)}let H=0;function j(){H=0}function V(){const E=H;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),H+=1,E}function F(E){const S=[];return S.push(E.wrapS),S.push(E.wrapT),S.push(E.magFilter),S.push(E.minFilter),S.push(E.anisotropy),S.push(E.internalFormat),S.push(E.format),S.push(E.type),S.push(E.generateMipmaps),S.push(E.premultiplyAlpha),S.push(E.flipY),S.push(E.unpackAlignment),S.push(E.encoding),S.join()}function B(E,S){const G=n.get(E);if(E.isVideoTexture&&Rt(E),E.isRenderTargetTexture===!1&&E.version>0&&G.__version!==E.version){const ee=E.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(G,E,S);return}}t.bindTexture(3553,G.__webglTexture,33984+S)}function K(E,S){const G=n.get(E);if(E.version>0&&G.__version!==E.version){de(G,E,S);return}t.bindTexture(35866,G.__webglTexture,33984+S)}function $(E,S){const G=n.get(E);if(E.version>0&&G.__version!==E.version){de(G,E,S);return}t.bindTexture(32879,G.__webglTexture,33984+S)}function J(E,S){const G=n.get(E);if(E.version>0&&G.__version!==E.version){ve(G,E,S);return}t.bindTexture(34067,G.__webglTexture,33984+S)}const re={[Mr]:10497,[Lt]:33071,[ka]:33648},ue={[dt]:9728,[Xo]:9984,[qo]:9986,[Bt]:9729,[Ou]:9985,[Bs]:9987};function X(E,S,G){if(G?(s.texParameteri(E,10242,re[S.wrapS]),s.texParameteri(E,10243,re[S.wrapT]),(E===32879||E===35866)&&s.texParameteri(E,32882,re[S.wrapR]),s.texParameteri(E,10240,ue[S.magFilter]),s.texParameteri(E,10241,ue[S.minFilter])):(s.texParameteri(E,10242,33071),s.texParameteri(E,10243,33071),(E===32879||E===35866)&&s.texParameteri(E,32882,33071),(S.wrapS!==Lt||S.wrapT!==Lt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(E,10240,I(S.magFilter)),s.texParameteri(E,10241,I(S.minFilter)),S.minFilter!==dt&&S.minFilter!==Bt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(S.type===Pn&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===wr&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(s.texParameterf(E,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function Pe(E,S){let G=!1;E.__webglInit===void 0&&(E.__webglInit=!0,S.addEventListener("dispose",Y));const ee=S.source;let te=d.get(ee);te===void 0&&(te={},d.set(ee,te));const ae=F(S);if(ae!==E.__cacheKey){te[ae]===void 0&&(te[ae]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,G=!0),te[ae].usedTimes++;const xe=te[E.__cacheKey];xe!==void 0&&(te[E.__cacheKey].usedTimes--,xe.usedTimes===0&&R(S)),E.__cacheKey=ae,E.__webglTexture=te[ae].texture}return G}function de(E,S,G){let ee=3553;S.isDataArrayTexture&&(ee=35866),S.isData3DTexture&&(ee=32879);const te=Pe(E,S),ae=S.source;t.bindTexture(ee,E.__webglTexture,33984+G);const xe=n.get(ae);if(ae.version!==xe.__version||te===!0){t.activeTexture(33984+G),s.pixelStorei(37440,S.flipY),s.pixelStorei(37441,S.premultiplyAlpha),s.pixelStorei(3317,S.unpackAlignment),s.pixelStorei(37443,0);const C=y(S)&&w(S.image)===!1;let U=M(S.image,C,!1,h);U=Ft(S,U);const le=w(U)||o,fe=r.convert(S.format,S.encoding);let he=r.convert(S.type),pe=v(S.internalFormat,fe,he,S.encoding,S.isVideoTexture);X(ee,S,le);let we;const Ne=S.mipmaps,D=o&&S.isVideoTexture!==!0,oe=xe.__version===void 0||te===!0,ne=A(S,U,le);if(S.isDepthTexture)pe=6402,o?S.type===Pn?pe=36012:S.type===jn?pe=33190:S.type===Ni?pe=35056:pe=33189:S.type===Pn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Kn&&pe===6402&&S.type!==zc&&S.type!==jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=jn,he=r.convert(S.type)),S.format===Vi&&pe===6402&&(pe=34041,S.type!==Ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Ni,he=r.convert(S.type))),oe&&(D?t.texStorage2D(3553,1,pe,U.width,U.height):t.texImage2D(3553,0,pe,U.width,U.height,0,fe,he,null));else if(S.isDataTexture)if(Ne.length>0&&le){D&&oe&&t.texStorage2D(3553,ne,pe,Ne[0].width,Ne[0].height);for(let Z=0,se=Ne.length;Z<se;Z++)we=Ne[Z],D?t.texSubImage2D(3553,Z,0,0,we.width,we.height,fe,he,we.data):t.texImage2D(3553,Z,pe,we.width,we.height,0,fe,he,we.data);S.generateMipmaps=!1}else D?(oe&&t.texStorage2D(3553,ne,pe,U.width,U.height),t.texSubImage2D(3553,0,0,0,U.width,U.height,fe,he,U.data)):t.texImage2D(3553,0,pe,U.width,U.height,0,fe,he,U.data);else if(S.isCompressedTexture){D&&oe&&t.texStorage2D(3553,ne,pe,Ne[0].width,Ne[0].height);for(let Z=0,se=Ne.length;Z<se;Z++)we=Ne[Z],S.format!==jt?fe!==null?D?t.compressedTexSubImage2D(3553,Z,0,0,we.width,we.height,fe,we.data):t.compressedTexImage2D(3553,Z,pe,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?t.texSubImage2D(3553,Z,0,0,we.width,we.height,fe,he,we.data):t.texImage2D(3553,Z,pe,we.width,we.height,0,fe,he,we.data)}else if(S.isDataArrayTexture)D?(oe&&t.texStorage3D(35866,ne,pe,U.width,U.height,U.depth),t.texSubImage3D(35866,0,0,0,0,U.width,U.height,U.depth,fe,he,U.data)):t.texImage3D(35866,0,pe,U.width,U.height,U.depth,0,fe,he,U.data);else if(S.isData3DTexture)D?(oe&&t.texStorage3D(32879,ne,pe,U.width,U.height,U.depth),t.texSubImage3D(32879,0,0,0,0,U.width,U.height,U.depth,fe,he,U.data)):t.texImage3D(32879,0,pe,U.width,U.height,U.depth,0,fe,he,U.data);else if(S.isFramebufferTexture){if(oe)if(D)t.texStorage2D(3553,ne,pe,U.width,U.height);else{let Z=U.width,se=U.height;for(let ye=0;ye<ne;ye++)t.texImage2D(3553,ye,pe,Z,se,0,fe,he,null),Z>>=1,se>>=1}}else if(Ne.length>0&&le){D&&oe&&t.texStorage2D(3553,ne,pe,Ne[0].width,Ne[0].height);for(let Z=0,se=Ne.length;Z<se;Z++)we=Ne[Z],D?t.texSubImage2D(3553,Z,0,0,fe,he,we):t.texImage2D(3553,Z,pe,fe,he,we);S.generateMipmaps=!1}else D?(oe&&t.texStorage2D(3553,ne,pe,U.width,U.height),t.texSubImage2D(3553,0,0,0,fe,he,U)):t.texImage2D(3553,0,pe,fe,he,U);T(S,le)&&P(ee),xe.__version=ae.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function ve(E,S,G){if(S.image.length!==6)return;const ee=Pe(E,S),te=S.source;t.bindTexture(34067,E.__webglTexture,33984+G);const ae=n.get(te);if(te.version!==ae.__version||ee===!0){t.activeTexture(33984+G),s.pixelStorei(37440,S.flipY),s.pixelStorei(37441,S.premultiplyAlpha),s.pixelStorei(3317,S.unpackAlignment),s.pixelStorei(37443,0);const xe=S.isCompressedTexture||S.image[0].isCompressedTexture,C=S.image[0]&&S.image[0].isDataTexture,U=[];for(let Z=0;Z<6;Z++)!xe&&!C?U[Z]=M(S.image[Z],!1,!0,c):U[Z]=C?S.image[Z].image:S.image[Z],U[Z]=Ft(S,U[Z]);const le=U[0],fe=w(le)||o,he=r.convert(S.format,S.encoding),pe=r.convert(S.type),we=v(S.internalFormat,he,pe,S.encoding),Ne=o&&S.isVideoTexture!==!0,D=ae.__version===void 0||ee===!0;let oe=A(S,le,fe);X(34067,S,fe);let ne;if(xe){Ne&&D&&t.texStorage2D(34067,oe,we,le.width,le.height);for(let Z=0;Z<6;Z++){ne=U[Z].mipmaps;for(let se=0;se<ne.length;se++){const ye=ne[se];S.format!==jt?he!==null?Ne?t.compressedTexSubImage2D(34069+Z,se,0,0,ye.width,ye.height,he,ye.data):t.compressedTexImage2D(34069+Z,se,we,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?t.texSubImage2D(34069+Z,se,0,0,ye.width,ye.height,he,pe,ye.data):t.texImage2D(34069+Z,se,we,ye.width,ye.height,0,he,pe,ye.data)}}}else{ne=S.mipmaps,Ne&&D&&(ne.length>0&&oe++,t.texStorage2D(34067,oe,we,U[0].width,U[0].height));for(let Z=0;Z<6;Z++)if(C){Ne?t.texSubImage2D(34069+Z,0,0,0,U[Z].width,U[Z].height,he,pe,U[Z].data):t.texImage2D(34069+Z,0,we,U[Z].width,U[Z].height,0,he,pe,U[Z].data);for(let se=0;se<ne.length;se++){const We=ne[se].image[Z].image;Ne?t.texSubImage2D(34069+Z,se+1,0,0,We.width,We.height,he,pe,We.data):t.texImage2D(34069+Z,se+1,we,We.width,We.height,0,he,pe,We.data)}}else{Ne?t.texSubImage2D(34069+Z,0,0,0,he,pe,U[Z]):t.texImage2D(34069+Z,0,we,he,pe,U[Z]);for(let se=0;se<ne.length;se++){const ye=ne[se];Ne?t.texSubImage2D(34069+Z,se+1,0,0,he,pe,ye.image[Z]):t.texImage2D(34069+Z,se+1,we,he,pe,ye.image[Z])}}}T(S,fe)&&P(34067),ae.__version=te.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function ce(E,S,G,ee,te){const ae=r.convert(G.format,G.encoding),xe=r.convert(G.type),C=v(G.internalFormat,ae,xe,G.encoding);n.get(S).__hasExternalTextures||(te===32879||te===35866?t.texImage3D(te,0,C,S.width,S.height,S.depth,0,ae,xe,null):t.texImage2D(te,0,C,S.width,S.height,0,ae,xe,null)),t.bindFramebuffer(36160,E),ke(S)?f.framebufferTexture2DMultisampleEXT(36160,ee,te,n.get(G).__webglTexture,0,it(S)):s.framebufferTexture2D(36160,ee,te,n.get(G).__webglTexture,0),t.bindFramebuffer(36160,null)}function Oe(E,S,G){if(s.bindRenderbuffer(36161,E),S.depthBuffer&&!S.stencilBuffer){let ee=33189;if(G||ke(S)){const te=S.depthTexture;te&&te.isDepthTexture&&(te.type===Pn?ee=36012:te.type===jn&&(ee=33190));const ae=it(S);ke(S)?f.renderbufferStorageMultisampleEXT(36161,ae,ee,S.width,S.height):s.renderbufferStorageMultisample(36161,ae,ee,S.width,S.height)}else s.renderbufferStorage(36161,ee,S.width,S.height);s.framebufferRenderbuffer(36160,36096,36161,E)}else if(S.depthBuffer&&S.stencilBuffer){const ee=it(S);G&&ke(S)===!1?s.renderbufferStorageMultisample(36161,ee,35056,S.width,S.height):ke(S)?f.renderbufferStorageMultisampleEXT(36161,ee,35056,S.width,S.height):s.renderbufferStorage(36161,34041,S.width,S.height),s.framebufferRenderbuffer(36160,33306,36161,E)}else{const ee=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let te=0;te<ee.length;te++){const ae=ee[te],xe=r.convert(ae.format,ae.encoding),C=r.convert(ae.type),U=v(ae.internalFormat,xe,C,ae.encoding),le=it(S);G&&ke(S)===!1?s.renderbufferStorageMultisample(36161,le,U,S.width,S.height):ke(S)?f.renderbufferStorageMultisampleEXT(36161,le,U,S.width,S.height):s.renderbufferStorage(36161,U,S.width,S.height)}}s.bindRenderbuffer(36161,null)}function Te(E,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,E),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),B(S.depthTexture,0);const ee=n.get(S.depthTexture).__webglTexture,te=it(S);if(S.depthTexture.format===Kn)ke(S)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,ee,0,te):s.framebufferTexture2D(36160,36096,3553,ee,0);else if(S.depthTexture.format===Vi)ke(S)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,ee,0,te):s.framebufferTexture2D(36160,33306,3553,ee,0);else throw new Error("Unknown depthTexture format")}function _e(E){const S=n.get(E),G=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Te(S.__webglFramebuffer,E)}else if(G){S.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(36160,S.__webglFramebuffer[ee]),S.__webglDepthbuffer[ee]=s.createRenderbuffer(),Oe(S.__webglDepthbuffer[ee],E,!1)}else t.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=s.createRenderbuffer(),Oe(S.__webglDepthbuffer,E,!1);t.bindFramebuffer(36160,null)}function qe(E,S,G){const ee=n.get(E);S!==void 0&&ce(ee.__webglFramebuffer,E,E.texture,36064,3553),G!==void 0&&_e(E)}function ct(E){const S=E.texture,G=n.get(E),ee=n.get(S);E.addEventListener("dispose",Q),E.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=s.createTexture()),ee.__version=S.version,a.memory.textures++);const te=E.isWebGLCubeRenderTarget===!0,ae=E.isWebGLMultipleRenderTargets===!0,xe=w(E)||o;if(te){G.__webglFramebuffer=[];for(let C=0;C<6;C++)G.__webglFramebuffer[C]=s.createFramebuffer()}else{if(G.__webglFramebuffer=s.createFramebuffer(),ae)if(i.drawBuffers){const C=E.texture;for(let U=0,le=C.length;U<le;U++){const fe=n.get(C[U]);fe.__webglTexture===void 0&&(fe.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&E.samples>0&&ke(E)===!1){const C=ae?S:[S];G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,G.__webglMultisampledFramebuffer);for(let U=0;U<C.length;U++){const le=C[U];G.__webglColorRenderbuffer[U]=s.createRenderbuffer(),s.bindRenderbuffer(36161,G.__webglColorRenderbuffer[U]);const fe=r.convert(le.format,le.encoding),he=r.convert(le.type),pe=v(le.internalFormat,fe,he,le.encoding,E.isXRRenderTarget===!0),we=it(E);s.renderbufferStorageMultisample(36161,we,pe,E.width,E.height),s.framebufferRenderbuffer(36160,36064+U,36161,G.__webglColorRenderbuffer[U])}s.bindRenderbuffer(36161,null),E.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),Oe(G.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(36160,null)}}if(te){t.bindTexture(34067,ee.__webglTexture),X(34067,S,xe);for(let C=0;C<6;C++)ce(G.__webglFramebuffer[C],E,S,36064,34069+C);T(S,xe)&&P(34067),t.unbindTexture()}else if(ae){const C=E.texture;for(let U=0,le=C.length;U<le;U++){const fe=C[U],he=n.get(fe);t.bindTexture(3553,he.__webglTexture),X(3553,fe,xe),ce(G.__webglFramebuffer,E,fe,36064+U,3553),T(fe,xe)&&P(3553)}t.unbindTexture()}else{let C=3553;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(o?C=E.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(C,ee.__webglTexture),X(C,S,xe),ce(G.__webglFramebuffer,E,S,36064,C),T(S,xe)&&P(C),t.unbindTexture()}E.depthBuffer&&_e(E)}function nt(E){const S=w(E)||o,G=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ee=0,te=G.length;ee<te;ee++){const ae=G[ee];if(T(ae,S)){const xe=E.isWebGLCubeRenderTarget?34067:3553,C=n.get(ae).__webglTexture;t.bindTexture(xe,C),P(xe),t.unbindTexture()}}}function Tt(E){if(o&&E.samples>0&&ke(E)===!1){const S=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],G=E.width,ee=E.height;let te=16384;const ae=[],xe=E.stencilBuffer?33306:36096,C=n.get(E),U=E.isWebGLMultipleRenderTargets===!0;if(U)for(let le=0;le<S.length;le++)t.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+le,36161,null),t.bindFramebuffer(36160,C.__webglFramebuffer),s.framebufferTexture2D(36009,36064+le,3553,null,0);t.bindFramebuffer(36008,C.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,C.__webglFramebuffer);for(let le=0;le<S.length;le++){ae.push(36064+le),E.depthBuffer&&ae.push(xe);const fe=C.__ignoreDepthValues!==void 0?C.__ignoreDepthValues:!1;if(fe===!1&&(E.depthBuffer&&(te|=256),E.stencilBuffer&&(te|=1024)),U&&s.framebufferRenderbuffer(36008,36064,36161,C.__webglColorRenderbuffer[le]),fe===!0&&(s.invalidateFramebuffer(36008,[xe]),s.invalidateFramebuffer(36009,[xe])),U){const he=n.get(S[le]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,he,0)}s.blitFramebuffer(0,0,G,ee,0,0,G,ee,te,9728),p&&s.invalidateFramebuffer(36008,ae)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),U)for(let le=0;le<S.length;le++){t.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+le,36161,C.__webglColorRenderbuffer[le]);const fe=n.get(S[le]).__webglTexture;t.bindFramebuffer(36160,C.__webglFramebuffer),s.framebufferTexture2D(36009,36064+le,3553,fe,0)}t.bindFramebuffer(36009,C.__webglMultisampledFramebuffer)}}function it(E){return Math.min(u,E.samples)}function ke(E){const S=n.get(E);return o&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Rt(E){const S=a.render.frame;g.get(E)!==S&&(g.set(E,S),E.update())}function Ft(E,S){const G=E.encoding,ee=E.format,te=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Ga||G!==ei&&(G===Ge?o===!1?e.has("EXT_sRGB")===!0&&ee===jt?(E.format=Ga,E.minFilter=Bt,E.generateMipmaps=!1):S=Gc.sRGBToLinear(S):(ee!==jt||te!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",G)),S}this.allocateTextureUnit=V,this.resetTextureUnits=j,this.setTexture2D=B,this.setTexture2DArray=K,this.setTexture3D=$,this.setTextureCube=J,this.rebindTextures=qe,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=ke}function a0(s,e,t){const n=t.isWebGL2;function i(r,a=null){let o;if(r===Qn)return 5121;if(r===Bu)return 32819;if(r===ku)return 32820;if(r===Nu)return 5120;if(r===Uu)return 5122;if(r===zc)return 5123;if(r===zu)return 5124;if(r===jn)return 5125;if(r===Pn)return 5126;if(r===wr)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Vu)return 6406;if(r===jt)return 6408;if(r===Wu)return 6409;if(r===Hu)return 6410;if(r===Kn)return 6402;if(r===Vi)return 34041;if(r===Xu)return 6403;if(r===Gu)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===Ga)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===qu)return 36244;if(r===ju)return 33319;if(r===Yu)return 33320;if(r===Zu)return 36249;if(r===Js||r===Qs||r===ea||r===ta)if(a===Ge)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Js)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Qs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ea)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ta)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Js)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Qs)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ea)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ta)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===jo||r===Yo||r===Zo||r===Ko)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===jo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Yo)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Zo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ko)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ku)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===$o||r===Jo)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===$o)return a===Ge?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Jo)return a===Ge?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Qo||r===el||r===tl||r===nl||r===il||r===rl||r===sl||r===al||r===ol||r===ll||r===cl||r===hl||r===ul||r===fl)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Qo)return a===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===el)return a===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===tl)return a===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===nl)return a===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===il)return a===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===rl)return a===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===sl)return a===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===al)return a===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ol)return a===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ll)return a===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===cl)return a===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===hl)return a===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ul)return a===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===fl)return a===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===dl)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===dl)return a===Ge?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===Ni?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class o0 extends pt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Qt extends Xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const l0={type:"move"};class Ca{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const m of e.hand.values()){const d=t.getJointPose(m,n);if(c.joints[m.jointName]===void 0){const x=new Qt;x.matrixAutoUpdate=!1,x.visible=!1,c.joints[m.jointName]=x,c.add(x)}const _=c.joints[m.jointName];d!==null&&(_.matrix.fromArray(d.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=d.radius),_.visible=d!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(l0)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}}class c0 extends yt{constructor(e,t,n,i,r,a,o,l,c,h){if(h=h!==void 0?h:Kn,h!==Kn&&h!==Vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Kn&&(n=jn),n===void 0&&h===Vi&&(n=Ni),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:dt,this.minFilter=l!==void 0?l:dt,this.flipY=!1,this.generateMipmaps=!1}}class h0 extends On{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=null,c=null,h=null,u=null,f=null,p=null;const g=t.getContextAttributes();let m=null,d=null;const _=[],x=[],M=new pt;M.layers.enable(1),M.viewport=new Ue;const w=new pt;w.layers.enable(2),w.viewport=new Ue;const y=[M,w],T=new o0;T.layers.enable(1),T.layers.enable(2);let P=null,v=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let B=_[F];return B===void 0&&(B=new Ca,_[F]=B),B.getTargetRaySpace()},this.getControllerGrip=function(F){let B=_[F];return B===void 0&&(B=new Ca,_[F]=B),B.getGripSpace()},this.getHand=function(F){let B=_[F];return B===void 0&&(B=new Ca,_[F]=B),B.getHandSpace()};function A(F){const B=x.indexOf(F.inputSource);if(B===-1)return;const K=_[B];K!==void 0&&K.dispatchEvent({type:F.type,data:F.inputSource})}function I(){i.removeEventListener("select",A),i.removeEventListener("selectstart",A),i.removeEventListener("selectend",A),i.removeEventListener("squeeze",A),i.removeEventListener("squeezestart",A),i.removeEventListener("squeezeend",A),i.removeEventListener("end",I),i.removeEventListener("inputsourceschange",Y);for(let F=0;F<_.length;F++){const B=x[F];B!==null&&(x[F]=null,_[F].disconnect(B))}P=null,v=null,e.setRenderTarget(m),f=null,u=null,h=null,i=null,d=null,V.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){r=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){o=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(F){l=F},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(F){if(i=F,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",A),i.addEventListener("selectstart",A),i.addEventListener("selectend",A),i.addEventListener("squeeze",A),i.addEventListener("squeezestart",A),i.addEventListener("squeezeend",A),i.addEventListener("end",I),i.addEventListener("inputsourceschange",Y),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const B={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,B),i.updateRenderState({baseLayer:f}),d=new ti(f.framebufferWidth,f.framebufferHeight,{format:jt,type:Qn,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let B=null,K=null,$=null;g.depth&&($=g.stencil?35056:33190,B=g.stencil?Vi:Kn,K=g.stencil?Ni:jn);const J={colorFormat:32856,depthFormat:$,scaleFactor:r};h=new XRWebGLBinding(i,t),u=h.createProjectionLayer(J),i.updateRenderState({layers:[u]}),d=new ti(u.textureWidth,u.textureHeight,{format:jt,type:Qn,depthTexture:new c0(u.textureWidth,u.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const re=e.properties.get(d);re.__ignoreDepthValues=u.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await i.requestReferenceSpace(o),V.setContext(i),V.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function Y(F){for(let B=0;B<F.removed.length;B++){const K=F.removed[B],$=x.indexOf(K);$>=0&&(x[$]=null,_[$].dispatchEvent({type:"disconnected",data:K}))}for(let B=0;B<F.added.length;B++){const K=F.added[B];let $=x.indexOf(K);if($===-1){for(let re=0;re<_.length;re++)if(re>=x.length){x.push(K),$=re;break}else if(x[re]===null){x[re]=K,$=re;break}if($===-1)break}const J=_[$];J&&J.dispatchEvent({type:"connected",data:K})}}const Q=new L,O=new L;function R(F,B,K){Q.setFromMatrixPosition(B.matrixWorld),O.setFromMatrixPosition(K.matrixWorld);const $=Q.distanceTo(O),J=B.projectionMatrix.elements,re=K.projectionMatrix.elements,ue=J[14]/(J[10]-1),X=J[14]/(J[10]+1),Pe=(J[9]+1)/J[5],de=(J[9]-1)/J[5],ve=(J[8]-1)/J[0],ce=(re[8]+1)/re[0],Oe=ue*ve,Te=ue*ce,_e=$/(-ve+ce),qe=_e*-ve;B.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(qe),F.translateZ(_e),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const ct=ue+_e,nt=X+_e,Tt=Oe-qe,it=Te+($-qe),ke=Pe*X/nt*ct,Rt=de*X/nt*ct;F.projectionMatrix.makePerspective(Tt,it,ke,Rt,ct,nt)}function k(F,B){B===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(B.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(i===null)return;T.near=w.near=M.near=F.near,T.far=w.far=M.far=F.far,(P!==T.near||v!==T.far)&&(i.updateRenderState({depthNear:T.near,depthFar:T.far}),P=T.near,v=T.far);const B=F.parent,K=T.cameras;k(T,B);for(let J=0;J<K.length;J++)k(K[J],B);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),F.matrix.copy(T.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale);const $=F.children;for(let J=0,re=$.length;J<re;J++)$[J].updateMatrixWorld(!0);K.length===2?R(T,M,w):T.projectionMatrix.copy(M.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(u!==null)return u.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(F){u!==null&&(u.fixedFoveation=F),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=F)};let H=null;function j(F,B){if(c=B.getViewerPose(l||a),p=B,c!==null){const K=c.views;f!==null&&(e.setRenderTargetFramebuffer(d,f.framebuffer),e.setRenderTarget(d));let $=!1;K.length!==T.cameras.length&&(T.cameras.length=0,$=!0);for(let J=0;J<K.length;J++){const re=K[J];let ue=null;if(f!==null)ue=f.getViewport(re);else{const Pe=h.getViewSubImage(u,re);ue=Pe.viewport,J===0&&(e.setRenderTargetTextures(d,Pe.colorTexture,u.ignoreDepthValues?void 0:Pe.depthStencilTexture),e.setRenderTarget(d))}let X=y[J];X===void 0&&(X=new pt,X.layers.enable(J),X.viewport=new Ue,y[J]=X),X.matrix.fromArray(re.transform.matrix),X.projectionMatrix.fromArray(re.projectionMatrix),X.viewport.set(ue.x,ue.y,ue.width,ue.height),J===0&&T.matrix.copy(X.matrix),$===!0&&T.cameras.push(X)}}for(let K=0;K<_.length;K++){const $=x[K],J=_[K];$!==null&&J!==void 0&&J.update($,B,l||a)}H&&H(F,B),p=null}const V=new $c;V.setAnimationLoop(j),this.setAnimationLoop=function(F){H=F},this.dispose=function(){}}}function u0(s,e){function t(m,d){m.fogColor.value.copy(d.color),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function n(m,d,_,x,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?i(m,d):d.isMeshToonMaterial?(i(m,d),h(m,d)):d.isMeshPhongMaterial?(i(m,d),c(m,d)):d.isMeshStandardMaterial?(i(m,d),u(m,d),d.isMeshPhysicalMaterial&&f(m,d,M)):d.isMeshMatcapMaterial?(i(m,d),p(m,d)):d.isMeshDepthMaterial?i(m,d):d.isMeshDistanceMaterial?(i(m,d),g(m,d)):d.isMeshNormalMaterial?i(m,d):d.isLineBasicMaterial?(r(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?o(m,d,_,x):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function i(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.bumpMap&&(m.bumpMap.value=d.bumpMap,m.bumpScale.value=d.bumpScale,d.side===Dt&&(m.bumpScale.value*=-1)),d.displacementMap&&(m.displacementMap.value=d.displacementMap,m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap),d.normalMap&&(m.normalMap.value=d.normalMap,m.normalScale.value.copy(d.normalScale),d.side===Dt&&m.normalScale.value.negate()),d.specularMap&&(m.specularMap.value=d.specularMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const _=e.get(d).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const w=s.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*w}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity);let x;d.map?x=d.map:d.specularMap?x=d.specularMap:d.displacementMap?x=d.displacementMap:d.normalMap?x=d.normalMap:d.bumpMap?x=d.bumpMap:d.roughnessMap?x=d.roughnessMap:d.metalnessMap?x=d.metalnessMap:d.alphaMap?x=d.alphaMap:d.emissiveMap?x=d.emissiveMap:d.clearcoatMap?x=d.clearcoatMap:d.clearcoatNormalMap?x=d.clearcoatNormalMap:d.clearcoatRoughnessMap?x=d.clearcoatRoughnessMap:d.iridescenceMap?x=d.iridescenceMap:d.iridescenceThicknessMap?x=d.iridescenceThicknessMap:d.specularIntensityMap?x=d.specularIntensityMap:d.specularColorMap?x=d.specularColorMap:d.transmissionMap?x=d.transmissionMap:d.thicknessMap?x=d.thicknessMap:d.sheenColorMap?x=d.sheenColorMap:d.sheenRoughnessMap&&(x=d.sheenRoughnessMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix));let M;d.aoMap?M=d.aoMap:d.lightMap&&(M=d.lightMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),m.uv2Transform.value.copy(M.matrix))}function r(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function o(m,d,_,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=x*.5,d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let M;d.map?M=d.map:d.alphaMap&&(M=d.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),m.uvTransform.value.copy(M.matrix))}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let _;d.map?_=d.map:d.alphaMap&&(_=d.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix))}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function u(m,d){m.roughness.value=d.roughness,m.metalness.value=d.metalness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function f(m,d,_){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),m.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===Dt&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap)}function p(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){m.referencePosition.value.copy(d.referencePosition),m.nearDistance.value=d.nearDistance,m.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function f0(s,e,t,n){let i={},r={},a=[];const o=t.isWebGL2?s.getParameter(35375):0;function l(x,M){const w=M.program;n.uniformBlockBinding(x,w)}function c(x,M){let w=i[x.id];w===void 0&&(g(x),w=h(x),i[x.id]=w,x.addEventListener("dispose",d));const y=M.program;n.updateUBOMapping(x,y);const T=e.render.frame;r[x.id]!==T&&(f(x),r[x.id]=T)}function h(x){const M=u();x.__bindingPointIndex=M;const w=s.createBuffer(),y=x.__size,T=x.usage;return s.bindBuffer(35345,w),s.bufferData(35345,y,T),s.bindBuffer(35345,null),s.bindBufferBase(35345,M,w),w}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const M=i[x.id],w=x.uniforms,y=x.__cache;s.bindBuffer(35345,M);for(let T=0,P=w.length;T<P;T++){const v=w[T];if(p(v,T,y)===!0){const A=v.value,I=v.__offset;typeof A=="number"?(v.__data[0]=A,s.bufferSubData(35345,I,v.__data)):(v.value.isMatrix3?(v.__data[0]=v.value.elements[0],v.__data[1]=v.value.elements[1],v.__data[2]=v.value.elements[2],v.__data[3]=v.value.elements[0],v.__data[4]=v.value.elements[3],v.__data[5]=v.value.elements[4],v.__data[6]=v.value.elements[5],v.__data[7]=v.value.elements[0],v.__data[8]=v.value.elements[6],v.__data[9]=v.value.elements[7],v.__data[10]=v.value.elements[8],v.__data[11]=v.value.elements[0]):A.toArray(v.__data),s.bufferSubData(35345,I,v.__data))}}s.bindBuffer(35345,null)}function p(x,M,w){const y=x.value;if(w[M]===void 0)return typeof y=="number"?w[M]=y:w[M]=y.clone(),!0;if(typeof y=="number"){if(w[M]!==y)return w[M]=y,!0}else{const T=w[M];if(T.equals(y)===!1)return T.copy(y),!0}return!1}function g(x){const M=x.uniforms;let w=0;const y=16;let T=0;for(let P=0,v=M.length;P<v;P++){const A=M[P],I=m(A);if(A.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=w,P>0){T=w%y;const Y=y-T;T!==0&&Y-I.boundary<0&&(w+=y-T,A.__offset=w)}w+=I.storage}return T=w%y,T>0&&(w+=y-T),x.__size=w,x.__cache={},this}function m(x){const M=x.value,w={boundary:0,storage:0};return typeof M=="number"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=48,w.storage=48):M.isMatrix4?(w.boundary=64,w.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),w}function d(x){const M=x.target;M.removeEventListener("dispose",d);const w=a.indexOf(M.__bindingPointIndex);a.splice(w,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function _(){for(const x in i)s.deleteBuffer(i[x]);a=[],i={},r={}}return{bind:l,update:c,dispose:_}}function d0(){const s=br("canvas");return s.style.display="block",s}function nh(s={}){this.isWebGLRenderer=!0;const e=s.canvas!==void 0?s.canvas:d0(),t=s.context!==void 0?s.context:null,n=s.depth!==void 0?s.depth:!0,i=s.stencil!==void 0?s.stencil:!0,r=s.antialias!==void 0?s.antialias:!1,a=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,o=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,l=s.powerPreference!==void 0?s.powerPreference:"default",c=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let h;t!==null?h=t.getContextAttributes().alpha:h=s.alpha!==void 0?s.alpha:!1;let u=null,f=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ei,this.physicallyCorrectLights=!1,this.toneMapping=pn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const m=this;let d=!1,_=0,x=0,M=null,w=-1,y=null;const T=new Ue,P=new Ue;let v=null,A=e.width,I=e.height,Y=1,Q=null,O=null;const R=new Ue(0,0,A,I),k=new Ue(0,0,A,I);let H=!1;const j=new lo;let V=!1,F=!1,B=null;const K=new ge,$=new Se,J=new L,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ue(){return M===null?Y:1}let X=t;function Pe(b,z){for(let W=0;W<b.length;W++){const N=b[W],q=e.getContext(N,z);if(q!==null)return q}return null}try{const b={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ro}`),e.addEventListener("webglcontextlost",pe,!1),e.addEventListener("webglcontextrestored",we,!1),e.addEventListener("webglcontextcreationerror",Ne,!1),X===null){const z=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&z.shift(),X=Pe(z,b),X===null)throw Pe(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let de,ve,ce,Oe,Te,_e,qe,ct,nt,Tt,it,ke,Rt,Ft,E,S,G,ee,te,ae,xe,C,U,le;function fe(){de=new bm(X),ve=new vm(X,de,s),de.init(ve),C=new a0(X,de,ve),ce=new r0(X,de,ve),Oe=new Am,Te=new Hg,_e=new s0(X,de,ce,Te,ve,C,Oe),qe=new ym(m),ct=new Sm(m),nt=new zf(X,ve),U=new gm(X,de,nt,ve),Tt=new Tm(X,nt,Oe,U),it=new Im(X,Tt,nt,Oe),te=new Pm(X,ve,_e),S=new xm(Te),ke=new Wg(m,qe,ct,de,ve,U,S),Rt=new u0(m,Te),Ft=new qg,E=new Jg(de,ve),ee=new mm(m,qe,ce,it,h,a),G=new i0(m,it,ve),le=new f0(X,Oe,ve,ce),ae=new _m(X,de,Oe,ve),xe=new Em(X,de,Oe,ve),Oe.programs=ke.programs,m.capabilities=ve,m.extensions=de,m.properties=Te,m.renderLists=Ft,m.shadowMap=G,m.state=ce,m.info=Oe}fe();const he=new h0(m,X);this.xr=he,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const b=de.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=de.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(b){b!==void 0&&(Y=b,this.setSize(A,I,!1))},this.getSize=function(b){return b.set(A,I)},this.setSize=function(b,z,W){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=b,I=z,e.width=Math.floor(b*Y),e.height=Math.floor(z*Y),W!==!1&&(e.style.width=b+"px",e.style.height=z+"px"),this.setViewport(0,0,b,z)},this.getDrawingBufferSize=function(b){return b.set(A*Y,I*Y).floor()},this.setDrawingBufferSize=function(b,z,W){A=b,I=z,Y=W,e.width=Math.floor(b*W),e.height=Math.floor(z*W),this.setViewport(0,0,b,z)},this.getCurrentViewport=function(b){return b.copy(T)},this.getViewport=function(b){return b.copy(R)},this.setViewport=function(b,z,W,N){b.isVector4?R.set(b.x,b.y,b.z,b.w):R.set(b,z,W,N),ce.viewport(T.copy(R).multiplyScalar(Y).floor())},this.getScissor=function(b){return b.copy(k)},this.setScissor=function(b,z,W,N){b.isVector4?k.set(b.x,b.y,b.z,b.w):k.set(b,z,W,N),ce.scissor(P.copy(k).multiplyScalar(Y).floor())},this.getScissorTest=function(){return H},this.setScissorTest=function(b){ce.setScissorTest(H=b)},this.setOpaqueSort=function(b){Q=b},this.setTransparentSort=function(b){O=b},this.getClearColor=function(b){return b.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(b=!0,z=!0,W=!0){let N=0;b&&(N|=16384),z&&(N|=256),W&&(N|=1024),X.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",we,!1),e.removeEventListener("webglcontextcreationerror",Ne,!1),Ft.dispose(),E.dispose(),Te.dispose(),qe.dispose(),ct.dispose(),it.dispose(),U.dispose(),le.dispose(),ke.dispose(),he.dispose(),he.removeEventListener("sessionstart",ye),he.removeEventListener("sessionend",We),B&&(B.dispose(),B=null),Ke.stop()};function pe(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const b=Oe.autoReset,z=G.enabled,W=G.autoUpdate,N=G.needsUpdate,q=G.type;fe(),Oe.autoReset=b,G.enabled=z,G.autoUpdate=W,G.needsUpdate=N,G.type=q}function Ne(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function D(b){const z=b.target;z.removeEventListener("dispose",D),oe(z)}function oe(b){ne(b),Te.remove(b)}function ne(b){const z=Te.get(b).programs;z!==void 0&&(z.forEach(function(W){ke.releaseProgram(W)}),b.isShaderMaterial&&ke.releaseShaderCache(b))}this.renderBufferDirect=function(b,z,W,N,q,me){z===null&&(z=re);const be=q.isMesh&&q.matrixWorld.determinant()<0,Ae=nu(b,z,W,N,q);ce.setMaterial(N,be);let Ee=W.index;const Ve=W.attributes.position;if(Ee===null){if(Ve===void 0||Ve.count===0)return}else if(Ee.count===0)return;let De=1;N.wireframe===!0&&(Ee=Tt.getWireframeAttribute(W),De=2),U.setup(q,N,Ae,W,Ee);let Re,Ye=ae;Ee!==null&&(Re=nt.get(Ee),Ye=xe,Ye.setIndex(Re));const zn=Ee!==null?Ee.count:Ve.count,oi=W.drawRange.start*De,li=W.drawRange.count*De,Yt=me!==null?me.start*De:0,ze=me!==null?me.count*De:1/0,ci=Math.max(oi,Yt),Qe=Math.min(zn,oi+li,Yt+ze)-1,Nt=Math.max(0,Qe-ci+1);if(Nt!==0){if(q.isMesh)N.wireframe===!0?(ce.setLineWidth(N.wireframeLinewidth*ue()),Ye.setMode(1)):Ye.setMode(4);else if(q.isLine){let yn=N.linewidth;yn===void 0&&(yn=1),ce.setLineWidth(yn*ue()),q.isLineSegments?Ye.setMode(1):q.isLineLoop?Ye.setMode(2):Ye.setMode(3)}else q.isPoints?Ye.setMode(0):q.isSprite&&Ye.setMode(4);if(q.isInstancedMesh)Ye.renderInstances(ci,Nt,q.count);else if(W.isInstancedBufferGeometry){const yn=Math.min(W.instanceCount,W._maxInstanceCount);Ye.renderInstances(ci,Nt,yn)}else Ye.render(ci,Nt)}},this.compile=function(b,z){function W(N,q,me){N.transparent===!0&&N.side===Jt?(N.side=Dt,N.needsUpdate=!0,zr(N,q,me),N.side=zi,N.needsUpdate=!0,zr(N,q,me),N.side=Jt):zr(N,q,me)}f=E.get(b),f.init(),g.push(f),b.traverseVisible(function(N){N.isLight&&N.layers.test(z.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights(m.physicallyCorrectLights),b.traverse(function(N){const q=N.material;if(q)if(Array.isArray(q))for(let me=0;me<q.length;me++){const be=q[me];W(be,b,N)}else W(q,b,N)}),g.pop(),f=null};let Z=null;function se(b){Z&&Z(b)}function ye(){Ke.stop()}function We(){Ke.start()}const Ke=new $c;Ke.setAnimationLoop(se),typeof self<"u"&&Ke.setContext(self),this.setAnimationLoop=function(b){Z=b,he.setAnimationLoop(b),b===null?Ke.stop():Ke.start()},he.addEventListener("sessionstart",ye),he.addEventListener("sessionend",We),this.render=function(b,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(z),z=he.getCamera()),b.isScene===!0&&b.onBeforeRender(m,b,z,M),f=E.get(b,g.length),f.init(),g.push(f),K.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),j.setFromProjectionMatrix(K),F=this.localClippingEnabled,V=S.init(this.clippingPlanes,F,z),u=Ft.get(b,p.length),u.init(),p.push(u),xn(b,z,0,m.sortObjects),u.finish(),m.sortObjects===!0&&u.sort(Q,O),V===!0&&S.beginShadows();const W=f.state.shadowsArray;if(G.render(W,b,z),V===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(u,b),f.setupLights(m.physicallyCorrectLights),z.isArrayCamera){const N=z.cameras;for(let q=0,me=N.length;q<me;q++){const be=N[q];je(u,b,be,be.viewport)}}else je(u,b,z);M!==null&&(_e.updateMultisampleRenderTarget(M),_e.updateRenderTargetMipmap(M)),b.isScene===!0&&b.onAfterRender(m,b,z),U.resetDefaultState(),w=-1,y=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,p.pop(),p.length>0?u=p[p.length-1]:u=null};function xn(b,z,W,N){if(b.visible===!1)return;if(b.layers.test(z.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(z);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||j.intersectsSprite(b)){N&&J.setFromMatrixPosition(b.matrixWorld).applyMatrix4(K);const be=it.update(b),Ae=b.material;Ae.visible&&u.push(b,be,Ae,W,J.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(b.isSkinnedMesh&&b.skeleton.frame!==Oe.render.frame&&(b.skeleton.update(),b.skeleton.frame=Oe.render.frame),!b.frustumCulled||j.intersectsObject(b))){N&&J.setFromMatrixPosition(b.matrixWorld).applyMatrix4(K);const be=it.update(b),Ae=b.material;if(Array.isArray(Ae)){const Ee=be.groups;for(let Ve=0,De=Ee.length;Ve<De;Ve++){const Re=Ee[Ve],Ye=Ae[Re.materialIndex];Ye&&Ye.visible&&u.push(b,be,Ye,W,J.z,Re)}}else Ae.visible&&u.push(b,be,Ae,W,J.z,null)}}const me=b.children;for(let be=0,Ae=me.length;be<Ae;be++)xn(me[be],z,W,N)}function je(b,z,W,N){const q=b.opaque,me=b.transmissive,be=b.transparent;f.setupLightsView(W),me.length>0&&rn(q,z,W),N&&ce.viewport(T.copy(N)),q.length>0&&Ot(q,z,W),me.length>0&&Ot(me,z,W),be.length>0&&Ot(be,z,W),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function rn(b,z,W){const N=ve.isWebGL2;B===null&&(B=new ti(1,1,{generateMipmaps:!0,type:de.has("EXT_color_buffer_half_float")?wr:Qn,minFilter:Bs,samples:N&&r===!0?4:0})),m.getDrawingBufferSize($),N?B.setSize($.x,$.y):B.setSize(Ms($.x),Ms($.y));const q=m.getRenderTarget();m.setRenderTarget(B),m.clear();const me=m.toneMapping;m.toneMapping=pn,Ot(b,z,W),m.toneMapping=me,_e.updateMultisampleRenderTarget(B),_e.updateRenderTargetMipmap(B),m.setRenderTarget(q)}function Ot(b,z,W){const N=z.isScene===!0?z.overrideMaterial:null;for(let q=0,me=b.length;q<me;q++){const be=b[q],Ae=be.object,Ee=be.geometry,Ve=N===null?be.material:N,De=be.group;Ae.layers.test(W.layers)&&tu(Ae,z,W,Ee,Ve,De)}}function tu(b,z,W,N,q,me){b.onBeforeRender(m,z,W,N,q,me),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),q.onBeforeRender(m,z,W,N,b,me),q.transparent===!0&&q.side===Jt?(q.side=Dt,q.needsUpdate=!0,m.renderBufferDirect(W,z,N,q,b,me),q.side=zi,q.needsUpdate=!0,m.renderBufferDirect(W,z,N,q,b,me),q.side=Jt):m.renderBufferDirect(W,z,N,q,b,me),b.onAfterRender(m,z,W,N,q,me)}function zr(b,z,W){z.isScene!==!0&&(z=re);const N=Te.get(b),q=f.state.lights,me=f.state.shadowsArray,be=q.state.version,Ae=ke.getParameters(b,q.state,me,z,W),Ee=ke.getProgramCacheKey(Ae);let Ve=N.programs;N.environment=b.isMeshStandardMaterial?z.environment:null,N.fog=z.fog,N.envMap=(b.isMeshStandardMaterial?ct:qe).get(b.envMap||N.environment),Ve===void 0&&(b.addEventListener("dispose",D),Ve=new Map,N.programs=Ve);let De=Ve.get(Ee);if(De!==void 0){if(N.currentProgram===De&&N.lightsStateVersion===be)return Uo(b,Ae),De}else Ae.uniforms=ke.getUniforms(b),b.onBuild(W,Ae,m),b.onBeforeCompile(Ae,m),De=ke.acquireProgram(Ae,Ee),Ve.set(Ee,De),N.uniforms=Ae.uniforms;const Re=N.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Re.clippingPlanes=S.uniform),Uo(b,Ae),N.needsLights=ru(b),N.lightsStateVersion=be,N.needsLights&&(Re.ambientLightColor.value=q.state.ambient,Re.lightProbe.value=q.state.probe,Re.directionalLights.value=q.state.directional,Re.directionalLightShadows.value=q.state.directionalShadow,Re.spotLights.value=q.state.spot,Re.spotLightShadows.value=q.state.spotShadow,Re.rectAreaLights.value=q.state.rectArea,Re.ltc_1.value=q.state.rectAreaLTC1,Re.ltc_2.value=q.state.rectAreaLTC2,Re.pointLights.value=q.state.point,Re.pointLightShadows.value=q.state.pointShadow,Re.hemisphereLights.value=q.state.hemi,Re.directionalShadowMap.value=q.state.directionalShadowMap,Re.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Re.spotShadowMap.value=q.state.spotShadowMap,Re.spotLightMatrix.value=q.state.spotLightMatrix,Re.spotLightMap.value=q.state.spotLightMap,Re.pointShadowMap.value=q.state.pointShadowMap,Re.pointShadowMatrix.value=q.state.pointShadowMatrix);const Ye=De.getUniforms(),zn=fs.seqWithValue(Ye.seq,Re);return N.currentProgram=De,N.uniformsList=zn,De}function Uo(b,z){const W=Te.get(b);W.outputEncoding=z.outputEncoding,W.instancing=z.instancing,W.skinning=z.skinning,W.morphTargets=z.morphTargets,W.morphNormals=z.morphNormals,W.morphColors=z.morphColors,W.morphTargetsCount=z.morphTargetsCount,W.numClippingPlanes=z.numClippingPlanes,W.numIntersection=z.numClipIntersection,W.vertexAlphas=z.vertexAlphas,W.vertexTangents=z.vertexTangents,W.toneMapping=z.toneMapping}function nu(b,z,W,N,q){z.isScene!==!0&&(z=re),_e.resetTextureUnits();const me=z.fog,be=N.isMeshStandardMaterial?z.environment:null,Ae=M===null?m.outputEncoding:M.isXRRenderTarget===!0?M.texture.encoding:ei,Ee=(N.isMeshStandardMaterial?ct:qe).get(N.envMap||be),Ve=N.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,De=!!N.normalMap&&!!W.attributes.tangent,Re=!!W.morphAttributes.position,Ye=!!W.morphAttributes.normal,zn=!!W.morphAttributes.color,oi=N.toneMapped?m.toneMapping:pn,li=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Yt=li!==void 0?li.length:0,ze=Te.get(N),ci=f.state.lights;if(V===!0&&(F===!0||b!==y)){const Et=b===y&&N.id===w;S.setState(N,b,Et)}let Qe=!1;N.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==ci.state.version||ze.outputEncoding!==Ae||q.isInstancedMesh&&ze.instancing===!1||!q.isInstancedMesh&&ze.instancing===!0||q.isSkinnedMesh&&ze.skinning===!1||!q.isSkinnedMesh&&ze.skinning===!0||ze.envMap!==Ee||N.fog===!0&&ze.fog!==me||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==S.numPlanes||ze.numIntersection!==S.numIntersection)||ze.vertexAlphas!==Ve||ze.vertexTangents!==De||ze.morphTargets!==Re||ze.morphNormals!==Ye||ze.morphColors!==zn||ze.toneMapping!==oi||ve.isWebGL2===!0&&ze.morphTargetsCount!==Yt)&&(Qe=!0):(Qe=!0,ze.__version=N.version);let Nt=ze.currentProgram;Qe===!0&&(Nt=zr(N,z,q));let yn=!1,rr=!1,Zs=!1;const _t=Nt.getUniforms(),Bn=ze.uniforms;if(ce.useProgram(Nt.program)&&(yn=!0,rr=!0,Zs=!0),N.id!==w&&(w=N.id,rr=!0),yn||y!==b){if(_t.setValue(X,"projectionMatrix",b.projectionMatrix),ve.logarithmicDepthBuffer&&_t.setValue(X,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),y!==b&&(y=b,rr=!0,Zs=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const Et=_t.map.cameraPosition;Et!==void 0&&Et.setValue(X,J.setFromMatrixPosition(b.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&_t.setValue(X,"isOrthographic",b.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||q.isSkinnedMesh)&&_t.setValue(X,"viewMatrix",b.matrixWorldInverse)}if(q.isSkinnedMesh){_t.setOptional(X,q,"bindMatrix"),_t.setOptional(X,q,"bindMatrixInverse");const Et=q.skeleton;Et&&(ve.floatVertexTextures?(Et.boneTexture===null&&Et.computeBoneTexture(),_t.setValue(X,"boneTexture",Et.boneTexture,_e),_t.setValue(X,"boneTextureSize",Et.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ks=W.morphAttributes;if((Ks.position!==void 0||Ks.normal!==void 0||Ks.color!==void 0&&ve.isWebGL2===!0)&&te.update(q,W,N,Nt),(rr||ze.receiveShadow!==q.receiveShadow)&&(ze.receiveShadow=q.receiveShadow,_t.setValue(X,"receiveShadow",q.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(Bn.envMap.value=Ee,Bn.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),rr&&(_t.setValue(X,"toneMappingExposure",m.toneMappingExposure),ze.needsLights&&iu(Bn,Zs),me&&N.fog===!0&&Rt.refreshFogUniforms(Bn,me),Rt.refreshMaterialUniforms(Bn,N,Y,I,B),fs.upload(X,ze.uniformsList,Bn,_e)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(fs.upload(X,ze.uniformsList,Bn,_e),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&_t.setValue(X,"center",q.center),_t.setValue(X,"modelViewMatrix",q.modelViewMatrix),_t.setValue(X,"normalMatrix",q.normalMatrix),_t.setValue(X,"modelMatrix",q.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const Et=N.uniformsGroups;for(let $s=0,su=Et.length;$s<su;$s++)if(ve.isWebGL2){const zo=Et[$s];le.update(zo,Nt),le.bind(zo,Nt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Nt}function iu(b,z){b.ambientLightColor.needsUpdate=z,b.lightProbe.needsUpdate=z,b.directionalLights.needsUpdate=z,b.directionalLightShadows.needsUpdate=z,b.pointLights.needsUpdate=z,b.pointLightShadows.needsUpdate=z,b.spotLights.needsUpdate=z,b.spotLightShadows.needsUpdate=z,b.rectAreaLights.needsUpdate=z,b.hemisphereLights.needsUpdate=z}function ru(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(b,z,W){Te.get(b.texture).__webglTexture=z,Te.get(b.depthTexture).__webglTexture=W;const N=Te.get(b);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=W===void 0,N.__autoAllocateDepthBuffer||de.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,z){const W=Te.get(b);W.__webglFramebuffer=z,W.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(b,z=0,W=0){M=b,_=z,x=W;let N=!0;if(b){const Ee=Te.get(b);Ee.__useDefaultFramebuffer!==void 0?(ce.bindFramebuffer(36160,null),N=!1):Ee.__webglFramebuffer===void 0?_e.setupRenderTarget(b):Ee.__hasExternalTextures&&_e.rebindTextures(b,Te.get(b.texture).__webglTexture,Te.get(b.depthTexture).__webglTexture)}let q=null,me=!1,be=!1;if(b){const Ee=b.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture)&&(be=!0);const Ve=Te.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(q=Ve[z],me=!0):ve.isWebGL2&&b.samples>0&&_e.useMultisampledRTT(b)===!1?q=Te.get(b).__webglMultisampledFramebuffer:q=Ve,T.copy(b.viewport),P.copy(b.scissor),v=b.scissorTest}else T.copy(R).multiplyScalar(Y).floor(),P.copy(k).multiplyScalar(Y).floor(),v=H;if(ce.bindFramebuffer(36160,q)&&ve.drawBuffers&&N&&ce.drawBuffers(b,q),ce.viewport(T),ce.scissor(P),ce.setScissorTest(v),me){const Ee=Te.get(b.texture);X.framebufferTexture2D(36160,36064,34069+z,Ee.__webglTexture,W)}else if(be){const Ee=Te.get(b.texture),Ve=z||0;X.framebufferTextureLayer(36160,36064,Ee.__webglTexture,W||0,Ve)}w=-1},this.readRenderTargetPixels=function(b,z,W,N,q,me,be){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Te.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&be!==void 0&&(Ae=Ae[be]),Ae){ce.bindFramebuffer(36160,Ae);try{const Ee=b.texture,Ve=Ee.format,De=Ee.type;if(Ve!==jt&&C.convert(Ve)!==X.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Re=De===wr&&(de.has("EXT_color_buffer_half_float")||ve.isWebGL2&&de.has("EXT_color_buffer_float"));if(De!==Qn&&C.convert(De)!==X.getParameter(35738)&&!(De===Pn&&(ve.isWebGL2||de.has("OES_texture_float")||de.has("WEBGL_color_buffer_float")))&&!Re){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=b.width-N&&W>=0&&W<=b.height-q&&X.readPixels(z,W,N,q,C.convert(Ve),C.convert(De),me)}finally{const Ee=M!==null?Te.get(M).__webglFramebuffer:null;ce.bindFramebuffer(36160,Ee)}}},this.copyFramebufferToTexture=function(b,z,W=0){const N=Math.pow(2,-W),q=Math.floor(z.image.width*N),me=Math.floor(z.image.height*N);_e.setTexture2D(z,0),X.copyTexSubImage2D(3553,W,0,0,b.x,b.y,q,me),ce.unbindTexture()},this.copyTextureToTexture=function(b,z,W,N=0){const q=z.image.width,me=z.image.height,be=C.convert(W.format),Ae=C.convert(W.type);_e.setTexture2D(W,0),X.pixelStorei(37440,W.flipY),X.pixelStorei(37441,W.premultiplyAlpha),X.pixelStorei(3317,W.unpackAlignment),z.isDataTexture?X.texSubImage2D(3553,N,b.x,b.y,q,me,be,Ae,z.image.data):z.isCompressedTexture?X.compressedTexSubImage2D(3553,N,b.x,b.y,z.mipmaps[0].width,z.mipmaps[0].height,be,z.mipmaps[0].data):X.texSubImage2D(3553,N,b.x,b.y,be,Ae,z.image),N===0&&W.generateMipmaps&&X.generateMipmap(3553),ce.unbindTexture()},this.copyTextureToTexture3D=function(b,z,W,N,q=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const me=b.max.x-b.min.x+1,be=b.max.y-b.min.y+1,Ae=b.max.z-b.min.z+1,Ee=C.convert(N.format),Ve=C.convert(N.type);let De;if(N.isData3DTexture)_e.setTexture3D(N,0),De=32879;else if(N.isDataArrayTexture)_e.setTexture2DArray(N,0),De=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(37440,N.flipY),X.pixelStorei(37441,N.premultiplyAlpha),X.pixelStorei(3317,N.unpackAlignment);const Re=X.getParameter(3314),Ye=X.getParameter(32878),zn=X.getParameter(3316),oi=X.getParameter(3315),li=X.getParameter(32877),Yt=W.isCompressedTexture?W.mipmaps[0]:W.image;X.pixelStorei(3314,Yt.width),X.pixelStorei(32878,Yt.height),X.pixelStorei(3316,b.min.x),X.pixelStorei(3315,b.min.y),X.pixelStorei(32877,b.min.z),W.isDataTexture||W.isData3DTexture?X.texSubImage3D(De,q,z.x,z.y,z.z,me,be,Ae,Ee,Ve,Yt.data):W.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(De,q,z.x,z.y,z.z,me,be,Ae,Ee,Yt.data)):X.texSubImage3D(De,q,z.x,z.y,z.z,me,be,Ae,Ee,Ve,Yt),X.pixelStorei(3314,Re),X.pixelStorei(32878,Ye),X.pixelStorei(3316,zn),X.pixelStorei(3315,oi),X.pixelStorei(32877,li),q===0&&N.generateMipmaps&&X.generateMipmap(De),ce.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?_e.setTextureCube(b,0):b.isData3DTexture?_e.setTexture3D(b,0):b.isDataArrayTexture?_e.setTexture2DArray(b,0):_e.setTexture2D(b,0),ce.unbindTexture()},this.resetState=function(){_=0,x=0,M=null,ce.reset(),U.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class p0 extends nh{}p0.prototype.isWebGL1Renderer=!0;class uo{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Me(e),this.density=t}clone(){return new uo(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}class fo{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Me(e),this.near=t,this.far=n}clone(){return new fo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class m0 extends Xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}const Kl=new L,$l=new Ue,Jl=new Ue,g0=new L,Ql=new ge;class _0 extends tt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new ge,this.bindMatrixInverse=new ge}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ue,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;$l.fromBufferAttribute(i.attributes.skinIndex,e),Jl.fromBufferAttribute(i.attributes.skinWeight,e),Kl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Jl.getComponent(r);if(a!==0){const o=$l.getComponent(r);Ql.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(g0.copy(Kl).applyMatrix4(Ql),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Xa extends Xe{constructor(){super(),this.isBone=!0,this.type="Bone"}}class v0 extends yt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=dt,h=dt,u,f){super(null,a,o,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ec=new ge,x0=new ge;class po{constructor(e=[],t=[]){this.uuid=Nn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ge)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ge;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:x0;ec.multiplyMatrices(o,t[r]),ec.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new po(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Bc(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new v0(t,e,e,jt,Pn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Xa),this.bones.push(a),this.boneInverses.push(new ge().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Gs extends vn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Me(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const tc=new L,nc=new L,ic=new ge,La=new Xc,ss=new ks;class ws extends Xe{constructor(e=new gt,t=new Gs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)tc.fromBufferAttribute(t,i-1),nc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=tc.distanceTo(nc);e.setAttribute("lineDistance",new Ze(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ss.copy(n.boundingSphere),ss.applyMatrix4(i),ss.radius+=r,e.ray.intersectsSphere(ss)===!1)return;ic.copy(i).invert(),La.copy(e.ray).applyMatrix4(ic);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new L,h=new L,u=new L,f=new L,p=this.isLineSegments?2:1,g=n.index,d=n.attributes.position;if(g!==null){const _=Math.max(0,a.start),x=Math.min(g.count,a.start+a.count);for(let M=_,w=x-1;M<w;M+=p){const y=g.getX(M),T=g.getX(M+1);if(c.fromBufferAttribute(d,y),h.fromBufferAttribute(d,T),La.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const v=e.ray.origin.distanceTo(f);v<e.near||v>e.far||t.push({distance:v,point:u.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,a.start),x=Math.min(d.count,a.start+a.count);for(let M=_,w=x-1;M<w;M+=p){if(c.fromBufferAttribute(d,M),h.fromBufferAttribute(d,M+1),La.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(f);T<e.near||T>e.far||t.push({distance:T,point:u.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const rc=new L,sc=new L;class y0 extends ws{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)rc.fromBufferAttribute(t,i),sc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+rc.distanceTo(sc);e.setAttribute("lineDistance",new Ze(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class M0{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const h=n[i],f=n[i+1]-h,p=(a-h)/f;return(i+p)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new Se:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new L,i=[],r=[],a=[],o=new L,l=new ge;for(let p=0;p<=e;p++){const g=p/e;i[p]=this.getTangentAt(g,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(ht(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(i[p],r[p])}if(t===!0){let p=Math.acos(ht(r[0].dot(r[e]),-1,1));p/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],p*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ri extends gt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new L,f=new L,p=[],g=[],m=[],d=[];for(let _=0;_<=n;_++){const x=[],M=_/n;let w=0;_==0&&a==0?w=.5/t:_==n&&l==Math.PI&&(w=-.5/t);for(let y=0;y<=t;y++){const T=y/t;u.x=-e*Math.cos(i+T*r)*Math.sin(a+M*o),u.y=e*Math.cos(a+M*o),u.z=e*Math.sin(i+T*r)*Math.sin(a+M*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),m.push(f.x,f.y,f.z),d.push(T+w,1-M),x.push(c++)}h.push(x)}for(let _=0;_<n;_++)for(let x=0;x<t;x++){const M=h[_][x+1],w=h[_][x],y=h[_+1][x],T=h[_+1][x+1];(_!==0||a>0)&&p.push(M,w,T),(_!==n-1||l<Math.PI)&&p.push(w,y,T)}this.setIndex(p),this.setAttribute("position",new Ze(g,3)),this.setAttribute("normal",new Ze(m,3)),this.setAttribute("uv",new Ze(d,2))}static fromJSON(e){return new ri(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class qi extends vn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ir,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ds extends vn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Me(16777215),this.specular=new Me(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ir,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Us,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class w0 extends vn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Me(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ir,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class S0 extends vn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ir,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Us,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Cn(s,e,t){return ih(s)?new s.constructor(s.subarray(e,t!==void 0?t:s.length)):s.slice(e,t)}function as(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function ih(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function b0(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function ac(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function rh(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class Ws{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class T0 extends Ws{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ii,endingEnd:Ii}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Di:r=e,o=2*t-n;break;case ys:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Di:a=e,l=2*n-t;break;case ys:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),m=g*g,d=m*g,_=-f*d+2*f*m-f*g,x=(1+f)*d+(-1.5-2*f)*m+(-.5+f)*g+1,M=(-1-p)*d+(1.5+p)*m+.5*g,w=p*d-p*m;for(let y=0;y!==o;++y)r[y]=_*a[h+y]+x*a[c+y]+M*a[l+y]+w*a[u+y];return r}}class sh extends Ws{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}}class E0 extends Ws{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class nn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=as(t,this.TimeBufferType),this.values=as(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:as(e.times,Array),values:as(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new E0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new sh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new T0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case vs:t=this.InterpolantFactoryMethodDiscrete;break;case xs:t=this.InterpolantFactoryMethodLinear;break;case na:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vs;case this.InterpolantFactoryMethodLinear:return xs;case this.InterpolantFactoryMethodSmooth:return na}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=Cn(n,r,a),this.values=Cn(this.values,r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&ih(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=Cn(this.times),t=Cn(this.values),n=this.getValueSize(),i=this.getInterpolation()===na,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const u=o*n,f=u-n,p=u+n;for(let g=0;g!==n;++g){const m=t[u+g];if(m!==t[f+g]||m!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[u+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=Cn(e,0,a),this.values=Cn(t,0,a*n)):(this.times=e,this.values=t),this}clone(){const e=Cn(this.times,0),t=Cn(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}nn.prototype.TimeBufferType=Float32Array;nn.prototype.ValueBufferType=Float32Array;nn.prototype.DefaultInterpolation=xs;class ji extends nn{}ji.prototype.ValueTypeName="bool";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=vs;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;class ah extends nn{}ah.prototype.ValueTypeName="color";class Tr extends nn{}Tr.prototype.ValueTypeName="number";class A0 extends Ws{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)xt.slerpFlat(r,0,a,c-o,a,c,l);return r}}class Yi extends nn{InterpolantFactoryMethodLinear(e){return new A0(this.times,this.values,this.getValueSize(),e)}}Yi.prototype.ValueTypeName="quaternion";Yi.prototype.DefaultInterpolation=xs;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;class Zi extends nn{}Zi.prototype.ValueTypeName="string";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=vs;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;class Er extends nn{}Er.prototype.ValueTypeName="vector";class qa{constructor(e,t=-1,n,i=so){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Nn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(L0(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(nn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=b0(l);l=ac(l,1,h),c=ac(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Tr(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let f=i[u];f||(i[u]=f=[]),f.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,p,g,m){if(p.length!==0){const d=[],_=[];rh(p,d,_,g),d.length!==0&&m.push(new u(f,d,_))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const p={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let m=0;m<f[g].morphTargets.length;m++)p[f[g].morphTargets[m]]=-1;for(const m in p){const d=[],_=[];for(let x=0;x!==f[g].morphTargets.length;++x){const M=f[g];d.push(M.time),_.push(M.morphTarget===m?1:0)}i.push(new Tr(".morphTargetInfluence["+m+"]",d,_))}l=p.length*a}else{const p=".bones["+t[u].name+"]";n(Er,p+".position",f,"pos",i),n(Yi,p+".quaternion",f,"rot",i),n(Er,p+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function C0(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Tr;case"vector":case"vector2":case"vector3":case"vector4":return Er;case"color":return ah;case"quaternion":return Yi;case"bool":case"boolean":return ji;case"string":return Zi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function L0(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=C0(s.type);if(s.times===void 0){const t=[],n=[];rh(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Ss={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class P0{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const I0=new P0;class Hs{constructor(e){this.manager=e!==void 0?e:I0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const hn={};class D0 extends Error{constructor(e,t){super(e),this.response=t}}class R0 extends Hs{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ss.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(hn[e]!==void 0){hn[e].push({onLoad:t,onProgress:n,onError:i});return}hn[e]=[],hn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=hn[e],u=c.body.getReader(),f=c.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0;let m=0;const d=new ReadableStream({start(_){x();function x(){u.read().then(({done:M,value:w})=>{if(M)_.close();else{m+=w.byteLength;const y=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:p});for(let T=0,P=h.length;T<P;T++){const v=h[T];v.onProgress&&v.onProgress(y)}_.enqueue(w),x()}})}}});return new Response(d)}else throw new D0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Ss.add(e,c);const h=hn[e];delete hn[e];for(let u=0,f=h.length;u<f;u++){const p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=hn[e];if(h===void 0)throw this.manager.itemError(e),c;delete hn[e];for(let u=0,f=h.length;u<f;u++){const p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class F0 extends Hs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Ss.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=br("img");function l(){h(),Ss.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class Xs extends Hs{constructor(e){super(e)}load(e,t,n,i){const r=new yt,a=new F0(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class qs extends Xe{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Pa=new ge,oc=new L,lc=new L;class mo{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.map=null,this.mapPass=null,this.matrix=new ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lo,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new Ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;oc.setFromMatrixPosition(e.matrixWorld),t.position.copy(oc),lc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(lc),t.updateMatrixWorld(),Pa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Pa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class O0 extends mo{constructor(){super(new pt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Sr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class N0 extends qs{constructor(e,t,n=0,i=Math.PI/3,r=0,a=1){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Xe.DefaultUp),this.updateMatrix(),this.target=new Xe,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new O0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const cc=new ge,lr=new L,Ia=new L;class U0 extends mo{constructor(){super(new pt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Se(4,2),this._viewportCount=6,this._viewports=[new Ue(2,1,1,1),new Ue(0,1,1,1),new Ue(3,1,1,1),new Ue(1,1,1,1),new Ue(3,0,1,1),new Ue(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),lr.setFromMatrixPosition(e.matrixWorld),n.position.copy(lr),Ia.copy(n.position),Ia.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ia),n.updateMatrixWorld(),i.makeTranslation(-lr.x,-lr.y,-lr.z),cc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cc)}}class bs extends qs{constructor(e,t,n=0,i=1){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new U0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class z0 extends mo{constructor(){super(new co(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class go extends qs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xe.DefaultUp),this.updateMatrix(),this.target=new Xe,this.shadow=new z0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class oh extends qs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class _o{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class ja{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=hc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=hc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function hc(){return(typeof performance>"u"?Date:performance).now()}class B0{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){xt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const a=this._workIndex*r;xt.multiplyQuaternionsFlat(e,a,e,t,e,n),xt.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){const a=1-i;for(let o=0;o!==r;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const vo="\\[\\]\\.:\\/",k0=new RegExp("["+vo+"]","g"),xo="[^"+vo+"]",V0="[^"+vo.replace("\\.","")+"]",G0=/((?:WC+[\/:])*)/.source.replace("WC",xo),W0=/(WCOD+)?/.source.replace("WCOD",V0),H0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xo),X0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xo),q0=new RegExp("^"+G0+W0+H0+X0+"$"),j0=["material","materials","bones","map"];class Y0{constructor(e,t,n){const i=n||Fe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Fe{constructor(e,t,n){this.path=t,this.parsedPath=n||Fe.parseTrackName(t),this.node=Fe.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Fe.Composite(e,t,n):new Fe(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(k0,"")}static parseTrackName(e){const t=q0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);j0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Fe.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Fe.Composite=Y0;Fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Fe.prototype.GetterByBindingType=[Fe.prototype._getValue_direct,Fe.prototype._getValue_array,Fe.prototype._getValue_arrayElement,Fe.prototype._getValue_toArray];Fe.prototype.SetterByBindingTypeAndVersioning=[[Fe.prototype._setValue_direct,Fe.prototype._setValue_direct_setNeedsUpdate,Fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_array,Fe.prototype._setValue_array_setNeedsUpdate,Fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_arrayElement,Fe.prototype._setValue_arrayElement_setNeedsUpdate,Fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_fromArray,Fe.prototype._setValue_fromArray_setNeedsUpdate,Fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Z0{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,a=r.length,o=new Array(a),l={endingStart:Ii,endingEnd:Ii};for(let c=0;c!==a;++c){const h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=$u,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Qu:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case so:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const a=n===Ju;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===Va){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Di,i.endingEnd=Di):(e?i.endingStart=this.zeroSlopeAtStart?Di:Ii:i.endingStart=ys,t?i.endingEnd=this.zeroSlopeAtEnd?Di:Ii:i.endingEnd=ys)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}}const K0=new Float32Array(1);class $0 extends On{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){const f=i[u],p=f.name;let g=h[p];if(g!==void 0)++g.referenceCount,a[u]=g;else{if(g=a[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,p));continue}const m=t&&t._propertyBindings[u].binding.parsedPath;g=new B0(Fe.create(n,p,m),f.ValueTypeName,f.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,p),a[u]=g}o[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=o.actionByRoot,f=(e._localRoot||this._root).uuid;delete u[f],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new sh(new Float32Array(2),new Float32Array(2),1,K0),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let a=typeof e=="string"?qa.findByName(i,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=so),l!==void 0){const u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new Z0(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?qa.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class uc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ht(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const fc=new L,os=new L,dc=new L;class lh extends Xe{constructor(e,t,n){super(),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,t===void 0&&(t=1);let i=new gt;i.setAttribute("position",new Ze([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const r=new Gs({fog:!1,toneMapped:!1});this.lightPlane=new ws(i,r),this.add(this.lightPlane),i=new gt,i.setAttribute("position",new Ze([0,0,0,0,0,1],3)),this.targetLine=new ws(i,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){fc.setFromMatrixPosition(this.light.matrixWorld),os.setFromMatrixPosition(this.light.target.matrixWorld),dc.subVectors(os,fc),this.lightPlane.lookAt(os),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(os),this.targetLine.scale.z=dc.length()}}class J0 extends y0{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new gt;i.setAttribute("position",new Ze(t,3)),i.setAttribute("color",new Ze(n,3));const r=new Gs({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(e,t,n){const i=new Me,r=this.geometry.attributes.color.array;return i.set(e),i.toArray(r,0),i.toArray(r,3),i.set(t),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ro}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ro);const pc={type:"change"},Da={type:"start"},mc={type:"end"};class Q0 extends On{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:hi.ROTATE,MIDDLE:hi.DOLLY,RIGHT:hi.PAN},this.touches={ONE:ui.ROTATE,TWO:ui.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",Ft),this._domElementKeyEvents=C},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(pc),n.update(),r=i.NONE},this.update=function(){const C=new L,U=new xt().setFromUnitVectors(e.up,new L(0,1,0)),le=U.clone().invert(),fe=new L,he=new xt,pe=2*Math.PI;return function(){const Ne=n.object.position;C.copy(Ne).sub(n.target),C.applyQuaternion(U),o.setFromVector3(C),n.autoRotate&&r===i.NONE&&A(P()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let D=n.minAzimuthAngle,oe=n.maxAzimuthAngle;return isFinite(D)&&isFinite(oe)&&(D<-Math.PI?D+=pe:D>Math.PI&&(D-=pe),oe<-Math.PI?oe+=pe:oe>Math.PI&&(oe-=pe),D<=oe?o.theta=Math.max(D,Math.min(oe,o.theta)):o.theta=o.theta>(D+oe)/2?Math.max(D,o.theta):Math.min(oe,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),C.setFromSpherical(o),C.applyQuaternion(le),Ne.copy(n.target).add(C),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),c=1,u||fe.distanceToSquared(n.object.position)>a||8*(1-he.dot(n.object.quaternion))>a?(n.dispatchEvent(pc),fe.copy(n.object.position),he.copy(n.object.quaternion),u=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",G),n.domElement.removeEventListener("pointerdown",qe),n.domElement.removeEventListener("pointercancel",Tt),n.domElement.removeEventListener("wheel",Rt),n.domElement.removeEventListener("pointermove",ct),n.domElement.removeEventListener("pointerup",nt),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",Ft)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const a=1e-6,o=new uc,l=new uc;let c=1;const h=new L;let u=!1;const f=new Se,p=new Se,g=new Se,m=new Se,d=new Se,_=new Se,x=new Se,M=new Se,w=new Se,y=[],T={};function P(){return 2*Math.PI/60/60*n.autoRotateSpeed}function v(){return Math.pow(.95,n.zoomSpeed)}function A(C){l.theta-=C}function I(C){l.phi-=C}const Y=function(){const C=new L;return function(le,fe){C.setFromMatrixColumn(fe,0),C.multiplyScalar(-le),h.add(C)}}(),Q=function(){const C=new L;return function(le,fe){n.screenSpacePanning===!0?C.setFromMatrixColumn(fe,1):(C.setFromMatrixColumn(fe,0),C.crossVectors(n.object.up,C)),C.multiplyScalar(le),h.add(C)}}(),O=function(){const C=new L;return function(le,fe){const he=n.domElement;if(n.object.isPerspectiveCamera){const pe=n.object.position;C.copy(pe).sub(n.target);let we=C.length();we*=Math.tan(n.object.fov/2*Math.PI/180),Y(2*le*we/he.clientHeight,n.object.matrix),Q(2*fe*we/he.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(Y(le*(n.object.right-n.object.left)/n.object.zoom/he.clientWidth,n.object.matrix),Q(fe*(n.object.top-n.object.bottom)/n.object.zoom/he.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function R(C){n.object.isPerspectiveCamera?c/=C:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*C)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function k(C){n.object.isPerspectiveCamera?c*=C:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/C)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function H(C){f.set(C.clientX,C.clientY)}function j(C){x.set(C.clientX,C.clientY)}function V(C){m.set(C.clientX,C.clientY)}function F(C){p.set(C.clientX,C.clientY),g.subVectors(p,f).multiplyScalar(n.rotateSpeed);const U=n.domElement;A(2*Math.PI*g.x/U.clientHeight),I(2*Math.PI*g.y/U.clientHeight),f.copy(p),n.update()}function B(C){M.set(C.clientX,C.clientY),w.subVectors(M,x),w.y>0?R(v()):w.y<0&&k(v()),x.copy(M),n.update()}function K(C){d.set(C.clientX,C.clientY),_.subVectors(d,m).multiplyScalar(n.panSpeed),O(_.x,_.y),m.copy(d),n.update()}function $(C){C.deltaY<0?k(v()):C.deltaY>0&&R(v()),n.update()}function J(C){let U=!1;switch(C.code){case n.keys.UP:O(0,n.keyPanSpeed),U=!0;break;case n.keys.BOTTOM:O(0,-n.keyPanSpeed),U=!0;break;case n.keys.LEFT:O(n.keyPanSpeed,0),U=!0;break;case n.keys.RIGHT:O(-n.keyPanSpeed,0),U=!0;break}U&&(C.preventDefault(),n.update())}function re(){if(y.length===1)f.set(y[0].pageX,y[0].pageY);else{const C=.5*(y[0].pageX+y[1].pageX),U=.5*(y[0].pageY+y[1].pageY);f.set(C,U)}}function ue(){if(y.length===1)m.set(y[0].pageX,y[0].pageY);else{const C=.5*(y[0].pageX+y[1].pageX),U=.5*(y[0].pageY+y[1].pageY);m.set(C,U)}}function X(){const C=y[0].pageX-y[1].pageX,U=y[0].pageY-y[1].pageY,le=Math.sqrt(C*C+U*U);x.set(0,le)}function Pe(){n.enableZoom&&X(),n.enablePan&&ue()}function de(){n.enableZoom&&X(),n.enableRotate&&re()}function ve(C){if(y.length==1)p.set(C.pageX,C.pageY);else{const le=xe(C),fe=.5*(C.pageX+le.x),he=.5*(C.pageY+le.y);p.set(fe,he)}g.subVectors(p,f).multiplyScalar(n.rotateSpeed);const U=n.domElement;A(2*Math.PI*g.x/U.clientHeight),I(2*Math.PI*g.y/U.clientHeight),f.copy(p)}function ce(C){if(y.length===1)d.set(C.pageX,C.pageY);else{const U=xe(C),le=.5*(C.pageX+U.x),fe=.5*(C.pageY+U.y);d.set(le,fe)}_.subVectors(d,m).multiplyScalar(n.panSpeed),O(_.x,_.y),m.copy(d)}function Oe(C){const U=xe(C),le=C.pageX-U.x,fe=C.pageY-U.y,he=Math.sqrt(le*le+fe*fe);M.set(0,he),w.set(0,Math.pow(M.y/x.y,n.zoomSpeed)),R(w.y),x.copy(M)}function Te(C){n.enableZoom&&Oe(C),n.enablePan&&ce(C)}function _e(C){n.enableZoom&&Oe(C),n.enableRotate&&ve(C)}function qe(C){n.enabled!==!1&&(y.length===0&&(n.domElement.setPointerCapture(C.pointerId),n.domElement.addEventListener("pointermove",ct),n.domElement.addEventListener("pointerup",nt)),ee(C),C.pointerType==="touch"?E(C):it(C))}function ct(C){n.enabled!==!1&&(C.pointerType==="touch"?S(C):ke(C))}function nt(C){te(C),y.length===0&&(n.domElement.releasePointerCapture(C.pointerId),n.domElement.removeEventListener("pointermove",ct),n.domElement.removeEventListener("pointerup",nt)),n.dispatchEvent(mc),r=i.NONE}function Tt(C){te(C)}function it(C){let U;switch(C.button){case 0:U=n.mouseButtons.LEFT;break;case 1:U=n.mouseButtons.MIDDLE;break;case 2:U=n.mouseButtons.RIGHT;break;default:U=-1}switch(U){case hi.DOLLY:if(n.enableZoom===!1)return;j(C),r=i.DOLLY;break;case hi.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enablePan===!1)return;V(C),r=i.PAN}else{if(n.enableRotate===!1)return;H(C),r=i.ROTATE}break;case hi.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enableRotate===!1)return;H(C),r=i.ROTATE}else{if(n.enablePan===!1)return;V(C),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Da)}function ke(C){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;F(C);break;case i.DOLLY:if(n.enableZoom===!1)return;B(C);break;case i.PAN:if(n.enablePan===!1)return;K(C);break}}function Rt(C){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(C.preventDefault(),n.dispatchEvent(Da),$(C),n.dispatchEvent(mc))}function Ft(C){n.enabled===!1||n.enablePan===!1||J(C)}function E(C){switch(ae(C),y.length){case 1:switch(n.touches.ONE){case ui.ROTATE:if(n.enableRotate===!1)return;re(),r=i.TOUCH_ROTATE;break;case ui.PAN:if(n.enablePan===!1)return;ue(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case ui.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Pe(),r=i.TOUCH_DOLLY_PAN;break;case ui.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;de(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Da)}function S(C){switch(ae(C),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;ve(C),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ce(C),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Te(C),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;_e(C),n.update();break;default:r=i.NONE}}function G(C){n.enabled!==!1&&C.preventDefault()}function ee(C){y.push(C)}function te(C){delete T[C.pointerId];for(let U=0;U<y.length;U++)if(y[U].pointerId==C.pointerId){y.splice(U,1);return}}function ae(C){let U=T[C.pointerId];U===void 0&&(U=new Se,T[C.pointerId]=U),U.set(C.pageX,C.pageY)}function xe(C){const U=C.pointerId===y[0].pointerId?y[1]:y[0];return T[U.pointerId]}n.domElement.addEventListener("contextmenu",G),n.domElement.addEventListener("pointerdown",qe),n.domElement.addEventListener("pointercancel",Tt),n.domElement.addEventListener("wheel",Rt,{passive:!1}),this.update()}}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/var gc={},Ya=function(s){return URL.createObjectURL(new Blob([s],{type:"text/javascript"}))},ch=function(s){return new Worker(s)};try{URL.revokeObjectURL(Ya(""))}catch{Ya=function(e){return"data:application/javascript;charset=UTF-8,"+encodeURI(e)},ch=function(e){return new Worker(e,{type:"module"})}}var e_=function(s,e,t,n,i){var r=ch(gc[e]||(gc[e]=Ya(s)));return r.onerror=function(a){return i(a.error,null)},r.onmessage=function(a){return i(null,a.data)},r.postMessage(t,n),r},Ie=Uint8Array,lt=Uint16Array,mn=Uint32Array,Ki=new Ie([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),$i=new Ie([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Ar=new Ie([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),hh=function(s,e){for(var t=new lt(31),n=0;n<31;++n)t[n]=e+=1<<s[n-1];for(var i=new mn(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)i[r]=r-t[n]<<5|n;return[t,i]},uh=hh(Ki,2),yo=uh[0],Ts=uh[1];yo[28]=258,Ts[258]=28;var fh=hh($i,0),dh=fh[0],Za=fh[1],Cr=new lt(32768);for(var He=0;He<32768;++He){var Ln=(He&43690)>>>1|(He&21845)<<1;Ln=(Ln&52428)>>>2|(Ln&13107)<<2,Ln=(Ln&61680)>>>4|(Ln&3855)<<4,Cr[He]=((Ln&65280)>>>8|(Ln&255)<<8)>>>1}var kt=function(s,e,t){for(var n=s.length,i=0,r=new lt(e);i<n;++i)++r[s[i]-1];var a=new lt(e);for(i=0;i<e;++i)a[i]=a[i-1]+r[i-1]<<1;var o;if(t){o=new lt(1<<e);var l=15-e;for(i=0;i<n;++i)if(s[i])for(var c=i<<4|s[i],h=e-s[i],u=a[s[i]-1]++<<h,f=u|(1<<h)-1;u<=f;++u)o[Cr[u]>>>l]=c}else for(o=new lt(n),i=0;i<n;++i)s[i]&&(o[i]=Cr[a[s[i]-1]++]>>>15-s[i]);return o},gn=new Ie(288);for(var He=0;He<144;++He)gn[He]=8;for(var He=144;He<256;++He)gn[He]=9;for(var He=256;He<280;++He)gn[He]=7;for(var He=280;He<288;++He)gn[He]=8;var Wi=new Ie(32);for(var He=0;He<32;++He)Wi[He]=5;var ph=kt(gn,9,0),mh=kt(gn,9,1),gh=kt(Wi,5,0),_h=kt(Wi,5,1),ps=function(s){for(var e=s[0],t=1;t<s.length;++t)s[t]>e&&(e=s[t]);return e},zt=function(s,e,t){var n=e/8|0;return(s[n]|s[n+1]<<8)>>(e&7)&t},ms=function(s,e){var t=e/8|0;return(s[t]|s[t+1]<<8|s[t+2]<<16)>>(e&7)},Rr=function(s){return(s/8|0)+(s&7&&1)},Vt=function(s,e,t){(e==null||e<0)&&(e=0),(t==null||t>s.length)&&(t=s.length);var n=new(s instanceof lt?lt:s instanceof mn?mn:Ie)(t-e);return n.set(s.subarray(e,t)),n},Fr=function(s,e,t){var n=s.length;if(!n||t&&!t.l&&n<5)return e||new Ie(0);var i=!e||t,r=!t||t.i;t||(t={}),e||(e=new Ie(n*3));var a=function(X){var Pe=e.length;if(X>Pe){var de=new Ie(Math.max(Pe*2,X));de.set(e),e=de}},o=t.f||0,l=t.p||0,c=t.b||0,h=t.l,u=t.d,f=t.m,p=t.n,g=n*8;do{if(!h){t.f=o=zt(s,l,1);var m=zt(s,l+1,3);if(l+=3,m)if(m==1)h=mh,u=_h,f=9,p=5;else if(m==2){var M=zt(s,l,31)+257,w=zt(s,l+10,15)+4,y=M+zt(s,l+5,31)+1;l+=14;for(var T=new Ie(y),P=new Ie(19),v=0;v<w;++v)P[Ar[v]]=zt(s,l+v*3,7);l+=w*3;for(var A=ps(P),I=(1<<A)-1,Y=kt(P,A,1),v=0;v<y;){var Q=Y[zt(s,l,I)];l+=Q&15;var d=Q>>>4;if(d<16)T[v++]=d;else{var O=0,R=0;for(d==16?(R=3+zt(s,l,3),l+=2,O=T[v-1]):d==17?(R=3+zt(s,l,7),l+=3):d==18&&(R=11+zt(s,l,127),l+=7);R--;)T[v++]=O}}var k=T.subarray(0,M),H=T.subarray(M);f=ps(k),p=ps(H),h=kt(k,f,1),u=kt(H,p,1)}else throw"invalid block type";else{var d=Rr(l)+4,_=s[d-4]|s[d-3]<<8,x=d+_;if(x>n){if(r)throw"unexpected EOF";break}i&&a(c+_),e.set(s.subarray(d,x),c),t.b=c+=_,t.p=l=x*8;continue}if(l>g){if(r)throw"unexpected EOF";break}}i&&a(c+131072);for(var j=(1<<f)-1,V=(1<<p)-1,F=l;;F=l){var O=h[ms(s,l)&j],B=O>>>4;if(l+=O&15,l>g){if(r)throw"unexpected EOF";break}if(!O)throw"invalid length/literal";if(B<256)e[c++]=B;else if(B==256){F=l,h=null;break}else{var K=B-254;if(B>264){var v=B-257,$=Ki[v];K=zt(s,l,(1<<$)-1)+yo[v],l+=$}var J=u[ms(s,l)&V],re=J>>>4;if(!J)throw"invalid distance";l+=J&15;var H=dh[re];if(re>3){var $=$i[re];H+=ms(s,l)&(1<<$)-1,l+=$}if(l>g){if(r)throw"unexpected EOF";break}i&&a(c+131072);for(var ue=c+K;c<ue;c+=4)e[c]=e[c-H],e[c+1]=e[c+1-H],e[c+2]=e[c+2-H],e[c+3]=e[c+3-H];c=ue}}t.l=h,t.p=F,t.b=c,h&&(o=1,t.m=f,t.d=u,t.n=p)}while(!o);return c==e.length?e:Vt(e,0,c)},Zt=function(s,e,t){t<<=e&7;var n=e/8|0;s[n]|=t,s[n+1]|=t>>>8},Li=function(s,e,t){t<<=e&7;var n=e/8|0;s[n]|=t,s[n+1]|=t>>>8,s[n+2]|=t>>>16},gs=function(s,e){for(var t=[],n=0;n<s.length;++n)s[n]&&t.push({s:n,f:s[n]});var i=t.length,r=t.slice();if(!i)return[dn,0];if(i==1){var a=new Ie(t[0].s+1);return a[t[0].s]=1,[a,1]}t.sort(function(y,T){return y.f-T.f}),t.push({s:-1,f:25001});var o=t[0],l=t[1],c=0,h=1,u=2;for(t[0]={s:-1,f:o.f+l.f,l:o,r:l};h!=i-1;)o=t[t[c].f<t[u].f?c++:u++],l=t[c!=h&&t[c].f<t[u].f?c++:u++],t[h++]={s:-1,f:o.f+l.f,l:o,r:l};for(var f=r[0].s,n=1;n<i;++n)r[n].s>f&&(f=r[n].s);var p=new lt(f+1),g=Es(t[h-1],p,0);if(g>e){var n=0,m=0,d=g-e,_=1<<d;for(r.sort(function(T,P){return p[P.s]-p[T.s]||T.f-P.f});n<i;++n){var x=r[n].s;if(p[x]>e)m+=_-(1<<g-p[x]),p[x]=e;else break}for(m>>>=d;m>0;){var M=r[n].s;p[M]<e?m-=1<<e-p[M]++-1:++n}for(;n>=0&&m;--n){var w=r[n].s;p[w]==e&&(--p[w],++m)}g=e}return[new Ie(p),g]},Es=function(s,e,t){return s.s==-1?Math.max(Es(s.l,e,t+1),Es(s.r,e,t+1)):e[s.s]=t},Ka=function(s){for(var e=s.length;e&&!s[--e];);for(var t=new lt(++e),n=0,i=s[0],r=1,a=function(l){t[n++]=l},o=1;o<=e;++o)if(s[o]==i&&o!=e)++r;else{if(!i&&r>2){for(;r>138;r-=138)a(32754);r>2&&(a(r>10?r-11<<5|28690:r-3<<5|12305),r=0)}else if(r>3){for(a(i),--r;r>6;r-=6)a(8304);r>2&&(a(r-3<<5|8208),r=0)}for(;r--;)a(i);r=1,i=s[o]}return[t.subarray(0,n),e]},Pi=function(s,e){for(var t=0,n=0;n<e.length;++n)t+=s[n]*e[n];return t},_r=function(s,e,t){var n=t.length,i=Rr(e+2);s[i]=n&255,s[i+1]=n>>>8,s[i+2]=s[i]^255,s[i+3]=s[i+1]^255;for(var r=0;r<n;++r)s[i+r+4]=t[r];return(i+4+n)*8},$a=function(s,e,t,n,i,r,a,o,l,c,h){Zt(e,h++,t),++i[256];for(var u=gs(i,15),f=u[0],p=u[1],g=gs(r,15),m=g[0],d=g[1],_=Ka(f),x=_[0],M=_[1],w=Ka(m),y=w[0],T=w[1],P=new lt(19),v=0;v<x.length;++v)P[x[v]&31]++;for(var v=0;v<y.length;++v)P[y[v]&31]++;for(var A=gs(P,7),I=A[0],Y=A[1],Q=19;Q>4&&!I[Ar[Q-1]];--Q);var O=c+5<<3,R=Pi(i,gn)+Pi(r,Wi)+a,k=Pi(i,f)+Pi(r,m)+a+14+3*Q+Pi(P,I)+(2*P[16]+3*P[17]+7*P[18]);if(O<=R&&O<=k)return _r(e,h,s.subarray(l,l+c));var H,j,V,F;if(Zt(e,h,1+(k<R)),h+=2,k<R){H=kt(f,p,0),j=f,V=kt(m,d,0),F=m;var B=kt(I,Y,0);Zt(e,h,M-257),Zt(e,h+5,T-1),Zt(e,h+10,Q-4),h+=14;for(var v=0;v<Q;++v)Zt(e,h+3*v,I[Ar[v]]);h+=3*Q;for(var K=[x,y],$=0;$<2;++$)for(var J=K[$],v=0;v<J.length;++v){var re=J[v]&31;Zt(e,h,B[re]),h+=I[re],re>15&&(Zt(e,h,J[v]>>>5&127),h+=J[v]>>>12)}}else H=ph,j=gn,V=gh,F=Wi;for(var v=0;v<o;++v)if(n[v]>255){var re=n[v]>>>18&31;Li(e,h,H[re+257]),h+=j[re+257],re>7&&(Zt(e,h,n[v]>>>23&31),h+=Ki[re]);var ue=n[v]&31;Li(e,h,V[ue]),h+=F[ue],ue>3&&(Li(e,h,n[v]>>>5&8191),h+=$i[ue])}else Li(e,h,H[n[v]]),h+=j[n[v]];return Li(e,h,H[256]),h+j[256]},vh=new mn([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),dn=new Ie(0),xh=function(s,e,t,n,i,r){var a=s.length,o=new Ie(n+a+5*(1+Math.ceil(a/7e3))+i),l=o.subarray(n,o.length-i),c=0;if(!e||a<8)for(var h=0;h<=a;h+=65535){var u=h+65535;u<a?c=_r(l,c,s.subarray(h,u)):(l[h]=r,c=_r(l,c,s.subarray(h,a)))}else{for(var f=vh[e-1],p=f>>>13,g=f&8191,m=(1<<t)-1,d=new lt(32768),_=new lt(m+1),x=Math.ceil(t/3),M=2*x,w=function(qe){return(s[qe]^s[qe+1]<<x^s[qe+2]<<M)&m},y=new mn(25e3),T=new lt(288),P=new lt(32),v=0,A=0,h=0,I=0,Y=0,Q=0;h<a;++h){var O=w(h),R=h&32767,k=_[O];if(d[R]=k,_[O]=R,Y<=h){var H=a-h;if((v>7e3||I>24576)&&H>423){c=$a(s,l,0,y,T,P,A,I,Q,h-Q,c),I=v=A=0,Q=h;for(var j=0;j<286;++j)T[j]=0;for(var j=0;j<30;++j)P[j]=0}var V=2,F=0,B=g,K=R-k&32767;if(H>2&&O==w(h-K))for(var $=Math.min(p,H)-1,J=Math.min(32767,h),re=Math.min(258,H);K<=J&&--B&&R!=k;){if(s[h+V]==s[h+V-K]){for(var ue=0;ue<re&&s[h+ue]==s[h+ue-K];++ue);if(ue>V){if(V=ue,F=K,ue>$)break;for(var X=Math.min(K,ue-2),Pe=0,j=0;j<X;++j){var de=h-K+j+32768&32767,ve=d[de],ce=de-ve+32768&32767;ce>Pe&&(Pe=ce,k=de)}}}R=k,k=d[R],K+=R-k+32768&32767}if(F){y[I++]=268435456|Ts[V]<<18|Za[F];var Oe=Ts[V]&31,Te=Za[F]&31;A+=Ki[Oe]+$i[Te],++T[257+Oe],++P[Te],Y=h+V,++v}else y[I++]=s[h],++T[s[h]]}}c=$a(s,l,r,y,T,P,A,I,Q,h-Q,c),!r&&c&7&&(c=_r(l,c+1,dn))}return Vt(o,0,n+Rr(c)+i)},yh=function(){for(var s=new mn(256),e=0;e<256;++e){for(var t=e,n=9;--n;)t=(t&1&&3988292384)^t>>>1;s[e]=t}return s}(),Ji=function(){var s=-1;return{p:function(e){for(var t=s,n=0;n<e.length;++n)t=yh[t&255^e[n]]^t>>>8;s=t},d:function(){return~s}}},Mo=function(){var s=1,e=0;return{p:function(t){for(var n=s,i=e,r=t.length,a=0;a!=r;){for(var o=Math.min(a+2655,r);a<o;++a)i+=n+=t[a];n=(n&65535)+15*(n>>16),i=(i&65535)+15*(i>>16)}s=n,e=i},d:function(){return s%=65521,e%=65521,(s&255)<<24|s>>>8<<16|(e&255)<<8|e>>>8}}},ai=function(s,e,t,n,i){return xh(s,e.level==null?6:e.level,e.mem==null?Math.ceil(Math.max(8,Math.min(13,Math.log(s.length)))*1.5):12+e.mem,t,n,!i)},Or=function(s,e){var t={};for(var n in s)t[n]=s[n];for(var n in e)t[n]=e[n];return t},_c=function(s,e,t){for(var n=s(),i=s.toString(),r=i.slice(i.indexOf("[")+1,i.lastIndexOf("]")).replace(/ /g,"").split(","),a=0;a<n.length;++a){var o=n[a],l=r[a];if(typeof o=="function"){e+=";"+l+"=";var c=o.toString();if(o.prototype)if(c.indexOf("[native code]")!=-1){var h=c.indexOf(" ",8)+1;e+=c.slice(h,c.indexOf("(",h))}else{e+=c;for(var u in o.prototype)e+=";"+l+".prototype."+u+"="+o.prototype[u].toString()}else e+=c}else t[l]=o}return[e,t]},ls=[],t_=function(s){var e=[];for(var t in s)(s[t]instanceof Ie||s[t]instanceof lt||s[t]instanceof mn)&&e.push((s[t]=new s[t].constructor(s[t])).buffer);return e},Mh=function(s,e,t,n){var i;if(!ls[t]){for(var r="",a={},o=s.length-1,l=0;l<o;++l)i=_c(s[l],r,a),r=i[0],a=i[1];ls[t]=_c(s[o],r,a)}var c=Or({},ls[t][1]);return e_(ls[t][0]+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+e.toString()+"}",t,c,t_(c),n)},Qi=function(){return[Ie,lt,mn,Ki,$i,Ar,yo,dh,mh,_h,Cr,kt,ps,zt,ms,Rr,Vt,Fr,ir,Un,wo]},er=function(){return[Ie,lt,mn,Ki,$i,Ar,Ts,Za,ph,gn,gh,Wi,Cr,vh,dn,kt,Zt,Li,gs,Es,Ka,Pi,_r,$a,Rr,Vt,xh,ai,Nr,Un]},wh=function(){return[So,To,Be,Ji,yh]},Sh=function(){return[bo,Eh]},bh=function(){return[Eo,Be,Mo]},Th=function(){return[Ah]},Un=function(s){return postMessage(s,[s.buffer])},wo=function(s){return s&&s.size&&new Ie(s.size)},tr=function(s,e,t,n,i,r){var a=Mh(t,n,i,function(o,l){a.terminate(),r(o,l)});return a.postMessage([s,e],e.consume?[s.buffer]:[]),function(){a.terminate()}},Gt=function(s){return s.ondata=function(e,t){return postMessage([e,t],[e.buffer])},function(e){return s.push(e.data[0],e.data[1])}},nr=function(s,e,t,n,i){var r,a=Mh(s,n,i,function(o,l){o?(a.terminate(),e.ondata.call(e,o)):(l[1]&&a.terminate(),e.ondata.call(e,o,l[0],l[1]))});a.postMessage(t),e.push=function(o,l){if(r)throw"stream finished";if(!e.ondata)throw"no stream handler";a.postMessage([o,r=l],[o.buffer])},e.terminate=function(){a.terminate()}},vt=function(s,e){return s[e]|s[e+1]<<8},Je=function(s,e){return(s[e]|s[e+1]<<8|s[e+2]<<16|s[e+3]<<24)>>>0},Ra=function(s,e){return Je(s,e)+Je(s,e+4)*4294967296},Be=function(s,e,t){for(;t;++e)s[e]=t,t>>>=8},So=function(s,e){var t=e.filename;if(s[0]=31,s[1]=139,s[2]=8,s[8]=e.level<2?4:e.level==9?2:0,s[9]=3,e.mtime!=0&&Be(s,4,Math.floor(new Date(e.mtime||Date.now())/1e3)),t){s[3]=8;for(var n=0;n<=t.length;++n)s[n+10]=t.charCodeAt(n)}},bo=function(s){if(s[0]!=31||s[1]!=139||s[2]!=8)throw"invalid gzip data";var e=s[3],t=10;e&4&&(t+=s[10]|(s[11]<<8)+2);for(var n=(e>>3&1)+(e>>4&1);n>0;n-=!s[t++]);return t+(e&2)},Eh=function(s){var e=s.length;return(s[e-4]|s[e-3]<<8|s[e-2]<<16|s[e-1]<<24)>>>0},To=function(s){return 10+(s.filename&&s.filename.length+1||0)},Eo=function(s,e){var t=e.level,n=t==0?0:t<6?1:t==9?3:2;s[0]=120,s[1]=n<<6|(n?32-2*n:1)},Ah=function(s){if((s[0]&15)!=8||s[0]>>>4>7||(s[0]<<8|s[1])%31)throw"invalid zlib data";if(s[1]&32)throw"invalid zlib data: preset dictionaries not supported"};function Ao(s,e){return!e&&typeof s=="function"&&(e=s,s={}),this.ondata=e,s}var tn=function(){function s(e,t){!t&&typeof e=="function"&&(t=e,e={}),this.ondata=t,this.o=e||{}}return s.prototype.p=function(e,t){this.ondata(ai(e,this.o,0,0,!t),t)},s.prototype.push=function(e,t){if(this.d)throw"stream finished";if(!this.ondata)throw"no stream handler";this.d=t,this.p(e,t||!1)},s}(),Ch=function(){function s(e,t){nr([er,function(){return[Gt,tn]}],this,Ao.call(this,e,t),function(n){var i=new tn(n.data);onmessage=Gt(i)},6)}return s}();function Lh(s,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return tr(s,e,[er],function(n){return Un(Nr(n.data[0],n.data[1]))},0,t)}function Nr(s,e){return ai(s,e||{},0,0)}var bt=function(){function s(e){this.s={},this.p=new Ie(0),this.ondata=e}return s.prototype.e=function(e){if(this.d)throw"stream finished";if(!this.ondata)throw"no stream handler";var t=this.p.length,n=new Ie(t+e.length);n.set(this.p),n.set(e,t),this.p=n},s.prototype.c=function(e){this.d=this.s.i=e||!1;var t=this.s.b,n=Fr(this.p,this.o,this.s);this.ondata(Vt(n,t,this.s.b),this.d),this.o=Vt(n,this.s.b-32768),this.s.b=this.o.length,this.p=Vt(this.p,this.s.p/8|0),this.s.p&=7},s.prototype.push=function(e,t){this.e(e),this.c(t)},s}(),Co=function(){function s(e){this.ondata=e,nr([Qi,function(){return[Gt,bt]}],this,0,function(){var t=new bt;onmessage=Gt(t)},7)}return s}();function Lo(s,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return tr(s,e,[Qi],function(n){return Un(ir(n.data[0],wo(n.data[1])))},1,t)}function ir(s,e){return Fr(s,e)}var As=function(){function s(e,t){this.c=Ji(),this.l=0,this.v=1,tn.call(this,e,t)}return s.prototype.push=function(e,t){tn.prototype.push.call(this,e,t)},s.prototype.p=function(e,t){this.c.p(e),this.l+=e.length;var n=ai(e,this.o,this.v&&To(this.o),t&&8,!t);this.v&&(So(n,this.o),this.v=0),t&&(Be(n,n.length-8,this.c.d()),Be(n,n.length-4,this.l)),this.ondata(n,t)},s}(),vc=function(){function s(e,t){nr([er,wh,function(){return[Gt,tn,As]}],this,Ao.call(this,e,t),function(n){var i=new As(n.data);onmessage=Gt(i)},8)}return s}();function xc(s,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return tr(s,e,[er,wh,function(){return[Cs]}],function(n){return Un(Cs(n.data[0],n.data[1]))},2,t)}function Cs(s,e){e||(e={});var t=Ji(),n=s.length;t.p(s);var i=ai(s,e,To(e),8),r=i.length;return So(i,e),Be(i,r-8,t.d()),Be(i,r-4,n),i}var Ls=function(){function s(e){this.v=1,bt.call(this,e)}return s.prototype.push=function(e,t){if(bt.prototype.e.call(this,e),this.v){var n=this.p.length>3?bo(this.p):4;if(n>=this.p.length&&!t)return;this.p=this.p.subarray(n),this.v=0}if(t){if(this.p.length<8)throw"invalid gzip stream";this.p=this.p.subarray(0,-8)}bt.prototype.c.call(this,t)},s}(),Ph=function(){function s(e){this.ondata=e,nr([Qi,Sh,function(){return[Gt,bt,Ls]}],this,0,function(){var t=new Ls;onmessage=Gt(t)},9)}return s}();function Ih(s,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return tr(s,e,[Qi,Sh,function(){return[Ps]}],function(n){return Un(Ps(n.data[0]))},3,t)}function Ps(s,e){return Fr(s.subarray(bo(s),-8),e||new Ie(Eh(s)))}var Ja=function(){function s(e,t){this.c=Mo(),this.v=1,tn.call(this,e,t)}return s.prototype.push=function(e,t){tn.prototype.push.call(this,e,t)},s.prototype.p=function(e,t){this.c.p(e);var n=ai(e,this.o,this.v&&2,t&&4,!t);this.v&&(Eo(n,this.o),this.v=0),t&&Be(n,n.length-4,this.c.d()),this.ondata(n,t)},s}(),n_=function(){function s(e,t){nr([er,bh,function(){return[Gt,tn,Ja]}],this,Ao.call(this,e,t),function(n){var i=new Ja(n.data);onmessage=Gt(i)},10)}return s}();function i_(s,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return tr(s,e,[er,bh,function(){return[Qa]}],function(n){return Un(Qa(n.data[0],n.data[1]))},4,t)}function Qa(s,e){e||(e={});var t=Mo();t.p(s);var n=ai(s,e,2,4);return Eo(n,e),Be(n,n.length-4,t.d()),n}var Is=function(){function s(e){this.v=1,bt.call(this,e)}return s.prototype.push=function(e,t){if(bt.prototype.e.call(this,e),this.v){if(this.p.length<2&&!t)return;this.p=this.p.subarray(2),this.v=0}if(t){if(this.p.length<4)throw"invalid zlib stream";this.p=this.p.subarray(0,-4)}bt.prototype.c.call(this,t)},s}(),Dh=function(){function s(e){this.ondata=e,nr([Qi,Th,function(){return[Gt,bt,Is]}],this,0,function(){var t=new Is;onmessage=Gt(t)},11)}return s}();function Rh(s,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return tr(s,e,[Qi,Th,function(){return[Lr]}],function(n){return Un(Lr(n.data[0],wo(n.data[1])))},5,t)}function Lr(s,e){return Fr((Ah(s),s.subarray(2,-4)),e)}var Fh=function(){function s(e){this.G=Ls,this.I=bt,this.Z=Is,this.ondata=e}return s.prototype.push=function(e,t){if(!this.ondata)throw"no stream handler";if(this.s)this.s.push(e,t);else{if(this.p&&this.p.length){var n=new Ie(this.p.length+e.length);n.set(this.p),n.set(e,this.p.length)}else this.p=e;if(this.p.length>2){var i=this,r=function(){i.ondata.apply(i,arguments)};this.s=this.p[0]==31&&this.p[1]==139&&this.p[2]==8?new this.G(r):(this.p[0]&15)!=8||this.p[0]>>4>7||(this.p[0]<<8|this.p[1])%31?new this.I(r):new this.Z(r),this.s.push(this.p,t),this.p=null}}},s}(),r_=function(){function s(e){this.G=Ph,this.I=Co,this.Z=Dh,this.ondata=e}return s.prototype.push=function(e,t){Fh.prototype.push.call(this,e,t)},s}();function s_(s,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return s[0]==31&&s[1]==139&&s[2]==8?Ih(s,e,t):(s[0]&15)!=8||s[0]>>4>7||(s[0]<<8|s[1])%31?Lo(s,e,t):Rh(s,e,t)}function a_(s,e){return s[0]==31&&s[1]==139&&s[2]==8?Ps(s,e):(s[0]&15)!=8||s[0]>>4>7||(s[0]<<8|s[1])%31?ir(s,e):Lr(s,e)}var Po=function(s,e,t,n){for(var i in s){var r=s[i],a=e+i;r instanceof Ie?t[a]=[r,n]:Array.isArray(r)?t[a]=[r[0],Or(n,r[1])]:Po(r,a+"/",t,n)}},yc=typeof TextEncoder<"u"&&new TextEncoder,eo=typeof TextDecoder<"u"&&new TextDecoder,Oh=0;try{eo.decode(dn,{stream:!0}),Oh=1}catch{}var Nh=function(s){for(var e="",t=0;;){var n=s[t++],i=(n>127)+(n>223)+(n>239);if(t+i>s.length)return[e,Vt(s,t-1)];i?i==3?(n=((n&15)<<18|(s[t++]&63)<<12|(s[t++]&63)<<6|s[t++]&63)-65536,e+=String.fromCharCode(55296|n>>10,56320|n&1023)):i&1?e+=String.fromCharCode((n&31)<<6|s[t++]&63):e+=String.fromCharCode((n&15)<<12|(s[t++]&63)<<6|s[t++]&63):e+=String.fromCharCode(n)}},o_=function(){function s(e){this.ondata=e,Oh?this.t=new TextDecoder:this.p=dn}return s.prototype.push=function(e,t){if(!this.ondata)throw"no callback";if(t=!!t,this.t){if(this.ondata(this.t.decode(e,{stream:!0}),t),t){if(this.t.decode().length)throw"invalid utf-8 data";this.t=null}return}if(!this.p)throw"stream finished";var n=new Ie(this.p.length+e.length);n.set(this.p),n.set(e,this.p.length);var i=Nh(n),r=i[0],a=i[1];if(t){if(a.length)throw"invalid utf-8 data";this.p=null}else this.p=a;this.ondata(r,t)},s}(),l_=function(){function s(e){this.ondata=e}return s.prototype.push=function(e,t){if(!this.ondata)throw"no callback";if(this.d)throw"stream finished";this.ondata(Rn(e),this.d=t||!1)},s}();function Rn(s,e){if(e){for(var t=new Ie(s.length),n=0;n<s.length;++n)t[n]=s.charCodeAt(n);return t}if(yc)return yc.encode(s);for(var i=s.length,r=new Ie(s.length+(s.length>>1)),a=0,o=function(h){r[a++]=h},n=0;n<i;++n){if(a+5>r.length){var l=new Ie(a+8+(i-n<<1));l.set(r),r=l}var c=s.charCodeAt(n);c<128||e?o(c):c<2048?(o(192|c>>6),o(128|c&63)):c>55295&&c<57344?(c=65536+(c&1023<<10)|s.charCodeAt(++n)&1023,o(240|c>>18),o(128|c>>12&63),o(128|c>>6&63),o(128|c&63)):(o(224|c>>12),o(128|c>>6&63),o(128|c&63))}return Vt(r,0,a)}function Io(s,e){if(e){for(var t="",n=0;n<s.length;n+=16384)t+=String.fromCharCode.apply(null,s.subarray(n,n+16384));return t}else{if(eo)return eo.decode(s);var i=Nh(s),r=i[0],a=i[1];if(a.length)throw"invalid utf-8 data";return r}}var Uh=function(s){return s==1?3:s<6?2:s==9?1:0},zh=function(s,e){return e+30+vt(s,e+26)+vt(s,e+28)},Bh=function(s,e,t){var n=vt(s,e+28),i=Io(s.subarray(e+46,e+46+n),!(vt(s,e+8)&2048)),r=e+46+n,a=Je(s,e+20),o=t&&a==4294967295?kh(s,r):[a,Je(s,e+24),Je(s,e+42)],l=o[0],c=o[1],h=o[2];return[vt(s,e+10),l,c,i,r+vt(s,e+30)+vt(s,e+32),h]},kh=function(s,e){for(;vt(s,e)!=1;e+=4+vt(s,e+2));return[Ra(s,e+12),Ra(s,e+4),Ra(s,e+20)]},Dn=function(s){var e=0;if(s)for(var t in s){var n=s[t].length;if(n>65535)throw"extra field too long";e+=n+4}return e},Hi=function(s,e,t,n,i,r,a,o){var l=n.length,c=t.extra,h=o&&o.length,u=Dn(c);Be(s,e,a!=null?33639248:67324752),e+=4,a!=null&&(s[e++]=20,s[e++]=t.os),s[e]=20,e+=2,s[e++]=t.flag<<1|(r==null&&8),s[e++]=i&&8,s[e++]=t.compression&255,s[e++]=t.compression>>8;var f=new Date(t.mtime==null?Date.now():t.mtime),p=f.getFullYear()-1980;if(p<0||p>119)throw"date not in range 1980-2099";if(Be(s,e,p<<25|f.getMonth()+1<<21|f.getDate()<<16|f.getHours()<<11|f.getMinutes()<<5|f.getSeconds()>>>1),e+=4,r!=null&&(Be(s,e,t.crc),Be(s,e+4,r),Be(s,e+8,t.size)),Be(s,e+12,l),Be(s,e+14,u),e+=16,a!=null&&(Be(s,e,h),Be(s,e+6,t.attrs),Be(s,e+10,a),e+=14),s.set(n,e),e+=l,u)for(var g in c){var m=c[g],d=m.length;Be(s,e,+g),Be(s,e+2,d),s.set(m,e+4),e+=4+d}return h&&(s.set(o,e),e+=h),e},Do=function(s,e,t,n,i){Be(s,e,101010256),Be(s,e+8,t),Be(s,e+10,t),Be(s,e+12,n),Be(s,e+16,i)},Pr=function(){function s(e){this.filename=e,this.c=Ji(),this.size=0,this.compression=0}return s.prototype.process=function(e,t){this.ondata(null,e,t)},s.prototype.push=function(e,t){if(!this.ondata)throw"no callback - add to ZIP archive before pushing";this.c.p(e),this.size+=e.length,t&&(this.crc=this.c.d()),this.process(e,t||!1)},s}(),c_=function(){function s(e,t){var n=this;t||(t={}),Pr.call(this,e),this.d=new tn(t,function(i,r){n.ondata(null,i,r)}),this.compression=8,this.flag=Uh(t.level)}return s.prototype.process=function(e,t){try{this.d.push(e,t)}catch(n){this.ondata(n,null,t)}},s.prototype.push=function(e,t){Pr.prototype.push.call(this,e,t)},s}(),h_=function(){function s(e,t){var n=this;t||(t={}),Pr.call(this,e),this.d=new Ch(t,function(i,r,a){n.ondata(i,r,a)}),this.compression=8,this.flag=Uh(t.level),this.terminate=this.d.terminate}return s.prototype.process=function(e,t){this.d.push(e,t)},s.prototype.push=function(e,t){Pr.prototype.push.call(this,e,t)},s}(),u_=function(){function s(e){this.ondata=e,this.u=[],this.d=1}return s.prototype.add=function(e){var t=this;if(this.d&2)throw"stream finished";var n=Rn(e.filename),i=n.length,r=e.comment,a=r&&Rn(r),o=i!=e.filename.length||a&&r.length!=a.length,l=i+Dn(e.extra)+30;if(i>65535)throw"filename too long";var c=new Ie(l);Hi(c,0,e,n,o);var h=[c],u=function(){for(var d=0,_=h;d<_.length;d++){var x=_[d];t.ondata(null,x,!1)}h=[]},f=this.d;this.d=0;var p=this.u.length,g=Or(e,{f:n,u:o,o:a,t:function(){e.terminate&&e.terminate()},r:function(){if(u(),f){var d=t.u[p+1];d?d.r():t.d=1}f=1}}),m=0;e.ondata=function(d,_,x){if(d)t.ondata(d,_,x),t.terminate();else if(m+=_.length,h.push(_),x){var M=new Ie(16);Be(M,0,134695760),Be(M,4,e.crc),Be(M,8,m),Be(M,12,e.size),h.push(M),g.c=m,g.b=l+m+16,g.crc=e.crc,g.size=e.size,f&&g.r(),f=1}else f&&u()},this.u.push(g)},s.prototype.end=function(){var e=this;if(this.d&2)throw this.d&1?"stream finishing":"stream finished";this.d?this.e():this.u.push({r:function(){!(e.d&1)||(e.u.splice(-1,1),e.e())},t:function(){}}),this.d=3},s.prototype.e=function(){for(var e=0,t=0,n=0,i=0,r=this.u;i<r.length;i++){var a=r[i];n+=46+a.f.length+Dn(a.extra)+(a.o?a.o.length:0)}for(var o=new Ie(n+22),l=0,c=this.u;l<c.length;l++){var a=c[l];Hi(o,e,a,a.f,a.u,a.c,t,a.o),e+=46+a.f.length+Dn(a.extra)+(a.o?a.o.length:0),t+=a.b}Do(o,e,this.u.length,n,t),this.ondata(null,o,!0),this.d=2},s.prototype.terminate=function(){for(var e=0,t=this.u;e<t.length;e++){var n=t[e];n.t()}this.d=2},s}();function f_(s,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";var n={};Po(s,"",n,e);var i=Object.keys(n),r=i.length,a=0,o=0,l=r,c=new Array(r),h=[],u=function(){for(var m=0;m<h.length;++m)h[m]()},f=function(){var m=new Ie(o+22),d=a,_=o-a;o=0;for(var x=0;x<l;++x){var M=c[x];try{var w=M.c.length;Hi(m,o,M,M.f,M.u,w);var y=30+M.f.length+Dn(M.extra),T=o+y;m.set(M.c,T),Hi(m,a,M,M.f,M.u,w,o,M.m),a+=16+y+(M.m?M.m.length:0),o=T+w}catch(P){return t(P,null)}}Do(m,a,c.length,_,d),t(null,m)};r||f();for(var p=function(m){var d=i[m],_=n[d],x=_[0],M=_[1],w=Ji(),y=x.length;w.p(x);var T=Rn(d),P=T.length,v=M.comment,A=v&&Rn(v),I=A&&A.length,Y=Dn(M.extra),Q=M.level==0?0:8,O=function(R,k){if(R)u(),t(R,null);else{var H=k.length;c[m]=Or(M,{size:y,crc:w.d(),c:k,f:T,m:A,u:P!=d.length||A&&v.length!=I,compression:Q}),a+=30+P+Y+H,o+=76+2*(P+Y)+(I||0)+H,--r||f()}};if(P>65535&&O("filename too long",null),!Q)O(null,x);else if(y<16e4)try{O(null,Nr(x,M))}catch(R){O(R,null)}else h.push(Lh(x,M,O))},g=0;g<l;++g)p(g);return u}function d_(s,e){e||(e={});var t={},n=[];Po(s,"",t,e);var i=0,r=0;for(var a in t){var o=t[a],l=o[0],c=o[1],h=c.level==0?0:8,u=Rn(a),f=u.length,p=c.comment,g=p&&Rn(p),m=g&&g.length,d=Dn(c.extra);if(f>65535)throw"filename too long";var _=h?Nr(l,c):l,x=_.length,M=Ji();M.p(l),n.push(Or(c,{size:l.length,crc:M.d(),c:_,f:u,m:g,u:f!=a.length||g&&p.length!=m,o:i,compression:h})),i+=30+f+d+x,r+=76+2*(f+d)+(m||0)+x}for(var w=new Ie(r+22),y=i,T=r-i,P=0;P<n.length;++P){var u=n[P];Hi(w,u.o,u,u.f,u.u,u.c.length);var v=30+u.f.length+Dn(u.extra);w.set(u.c,u.o+v),Hi(w,i,u,u.f,u.u,u.c.length,u.o,u.m),i+=16+v+(u.m?u.m.length:0)}return Do(w,i,n.length,T,y),w}var Vh=function(){function s(){}return s.prototype.push=function(e,t){this.ondata(null,e,t)},s.compression=0,s}(),p_=function(){function s(){var e=this;this.i=new bt(function(t,n){e.ondata(null,t,n)})}return s.prototype.push=function(e,t){try{this.i.push(e,t)}catch(n){this.ondata(n,e,t)}},s.compression=8,s}(),m_=function(){function s(e,t){var n=this;t<32e4?this.i=new bt(function(i,r){n.ondata(null,i,r)}):(this.i=new Co(function(i,r,a){n.ondata(i,r,a)}),this.terminate=this.i.terminate)}return s.prototype.push=function(e,t){this.i.terminate&&(e=Vt(e,0)),this.i.push(e,t)},s.compression=8,s}(),g_=function(){function s(e){this.onfile=e,this.k=[],this.o={0:Vh},this.p=dn}return s.prototype.push=function(e,t){var n=this;if(!this.onfile)throw"no callback";if(!this.p)throw"stream finished";if(this.c>0){var i=Math.min(this.c,e.length),r=e.subarray(0,i);if(this.c-=i,this.d?this.d.push(r,!this.c):this.k[0].push(r),e=e.subarray(i),e.length)return this.push(e,t)}else{var a=0,o=0,l=void 0,c=void 0;this.p.length?e.length?(c=new Ie(this.p.length+e.length),c.set(this.p),c.set(e,this.p.length)):c=this.p:c=e;for(var h=c.length,u=this.c,f=u&&this.d,p=function(){var _,x=Je(c,o);if(x==67324752){a=1,l=o,g.d=null,g.c=0;var M=vt(c,o+6),w=vt(c,o+8),y=M&2048,T=M&8,P=vt(c,o+26),v=vt(c,o+28);if(h>o+30+P+v){var A=[];g.k.unshift(A),a=2;var I=Je(c,o+18),Y=Je(c,o+22),Q=Io(c.subarray(o+30,o+=30+P),!y);I==4294967295?(_=T?[-2]:kh(c,o),I=_[0],Y=_[1]):T&&(I=-1),o+=v,g.c=I;var O,R={name:Q,compression:w,start:function(){if(!R.ondata)throw"no callback";if(!I)R.ondata(null,dn,!0);else{var k=n.o[w];if(!k)throw"unknown compression type "+w;O=I<0?new k(Q):new k(Q,I,Y),O.ondata=function(F,B,K){R.ondata(F,B,K)};for(var H=0,j=A;H<j.length;H++){var V=j[H];O.push(V,!1)}n.k[0]==A&&n.c?n.d=O:O.push(dn,!0)}},terminate:function(){O&&O.terminate&&O.terminate()}};I>=0&&(R.size=I,R.originalSize=Y),g.onfile(R)}return"break"}else if(u){if(x==134695760)return l=o+=12+(u==-2&&8),a=3,g.c=0,"break";if(x==33639248)return l=o-=4,a=3,g.c=0,"break"}},g=this;o<h-4;++o){var m=p();if(m==="break")break}if(this.p=dn,u<0){var d=a?c.subarray(0,l-12-(u==-2&&8)-(Je(c,l-16)==134695760&&4)):c.subarray(0,o);f?f.push(d,!!a):this.k[+(a==2)].push(d)}if(a&2)return this.push(c.subarray(o),t);this.p=c.subarray(o)}if(t){if(this.c)throw"invalid zip file";this.p=null}},s.prototype.register=function(e){this.o[e.compression]=e},s}();function __(s,e){if(typeof e!="function")throw"no callback";for(var t=[],n=function(){for(var f=0;f<t.length;++f)t[f]()},i={},r=s.length-22;Je(s,r)!=101010256;--r)if(!r||s.length-r>65558){e("invalid zip file",null);return}var a=vt(s,r+8);a||e(null,{});var o=a,l=Je(s,r+16),c=l==4294967295;if(c){if(r=Je(s,r-12),Je(s,r)!=101075792){e("invalid zip file",null);return}o=a=Je(s,r+32),l=Je(s,r+48)}for(var h=function(f){var p=Bh(s,l,c),g=p[0],m=p[1],d=p[2],_=p[3],x=p[4],M=p[5],w=zh(s,M);l=x;var y=function(P,v){P?(n(),e(P,null)):(i[_]=v,--a||e(null,i))};if(!g)y(null,Vt(s,w,w+m));else if(g==8){var T=s.subarray(w,w+m);if(m<32e4)try{y(null,ir(T,new Ie(d)))}catch(P){y(P,null)}else t.push(Lo(T,{size:d},y))}else y("unknown compression type "+g,null)},u=0;u<o;++u)h();return n}function v_(s){for(var e={},t=s.length-22;Je(s,t)!=101010256;--t)if(!t||s.length-t>65558)throw"invalid zip file";var n=vt(s,t+8);if(!n)return{};var i=Je(s,t+16),r=i==4294967295;if(r){if(t=Je(s,t-12),Je(s,t)!=101075792)throw"invalid zip file";n=Je(s,t+32),i=Je(s,t+48)}for(var a=0;a<n;++a){var o=Bh(s,i,r),l=o[0],c=o[1],h=o[2],u=o[3],f=o[4],p=o[5],g=zh(s,p);if(i=f,!l)e[u]=Vt(s,g,g+c);else if(l==8)e[u]=ir(s.subarray(g,g+c),new Ie(h));else throw"unknown compression type "+l}return e}const x_=Object.freeze(Object.defineProperty({__proto__:null,Deflate:tn,AsyncDeflate:Ch,deflate:Lh,deflateSync:Nr,Inflate:bt,AsyncInflate:Co,inflate:Lo,inflateSync:ir,Gzip:As,AsyncGzip:vc,gzip:xc,gzipSync:Cs,Gunzip:Ls,AsyncGunzip:Ph,gunzip:Ih,gunzipSync:Ps,Zlib:Ja,AsyncZlib:n_,zlib:i_,zlibSync:Qa,Unzlib:Is,AsyncUnzlib:Dh,unzlib:Rh,unzlibSync:Lr,compress:xc,AsyncCompress:vc,compressSync:Cs,Compress:As,Decompress:Fh,AsyncDecompress:r_,decompress:s_,decompressSync:a_,DecodeUTF8:o_,EncodeUTF8:l_,strToU8:Rn,strFromU8:Io,ZipPassThrough:Pr,ZipDeflate:c_,AsyncZipDeflate:h_,Zip:u_,zip:f_,zipSync:d_,UnzipPassThrough:Vh,UnzipInflate:p_,AsyncUnzipInflate:m_,Unzip:g_,unzip:__,unzipSync:v_},Symbol.toStringTag,{value:"Module"}));function Gh(s,e,t){const n=t.length-s-1;if(e>=t[n])return n-1;if(e<=t[s])return s;let i=s,r=n,a=Math.floor((i+r)/2);for(;e<t[a]||e>=t[a+1];)e<t[a]?r=a:i=a,a=Math.floor((i+r)/2);return a}function y_(s,e,t,n){const i=[],r=[],a=[];i[0]=1;for(let o=1;o<=t;++o){r[o]=e-n[s+1-o],a[o]=n[s+o]-e;let l=0;for(let c=0;c<o;++c){const h=a[c+1],u=r[o-c],f=i[c]/(h+u);i[c]=l+h*f,l=u*f}i[o]=l}return i}function M_(s,e,t,n){const i=Gh(s,n,e),r=y_(i,n,s,e),a=new Ue(0,0,0,0);for(let o=0;o<=s;++o){const l=t[i-s+o],c=r[o],h=l.w*c;a.x+=l.x*h,a.y+=l.y*h,a.z+=l.z*h,a.w+=l.w*c}return a}function w_(s,e,t,n,i){const r=[];for(let u=0;u<=t;++u)r[u]=0;const a=[];for(let u=0;u<=n;++u)a[u]=r.slice(0);const o=[];for(let u=0;u<=t;++u)o[u]=r.slice(0);o[0][0]=1;const l=r.slice(0),c=r.slice(0);for(let u=1;u<=t;++u){l[u]=e-i[s+1-u],c[u]=i[s+u]-e;let f=0;for(let p=0;p<u;++p){const g=c[p+1],m=l[u-p];o[u][p]=g+m;const d=o[p][u-1]/o[u][p];o[p][u]=f+g*d,f=m*d}o[u][u]=f}for(let u=0;u<=t;++u)a[0][u]=o[u][t];for(let u=0;u<=t;++u){let f=0,p=1;const g=[];for(let m=0;m<=t;++m)g[m]=r.slice(0);g[0][0]=1;for(let m=1;m<=n;++m){let d=0;const _=u-m,x=t-m;u>=m&&(g[p][0]=g[f][0]/o[x+1][_],d=g[p][0]*o[_][x]);const M=_>=-1?1:-_,w=u-1<=x?m-1:t-u;for(let T=M;T<=w;++T)g[p][T]=(g[f][T]-g[f][T-1])/o[x+1][_+T],d+=g[p][T]*o[_+T][x];u<=x&&(g[p][m]=-g[f][m-1]/o[x+1][u],d+=g[p][m]*o[u][x]),a[m][u]=d;const y=f;f=p,p=y}}let h=t;for(let u=1;u<=n;++u){for(let f=0;f<=t;++f)a[u][f]*=h;h*=t-u}return a}function S_(s,e,t,n,i){const r=i<s?i:s,a=[],o=Gh(s,n,e),l=w_(o,n,s,r,e),c=[];for(let h=0;h<t.length;++h){const u=t[h].clone(),f=u.w;u.x*=f,u.y*=f,u.z*=f,c[h]=u}for(let h=0;h<=r;++h){const u=c[o-s].clone().multiplyScalar(l[h][0]);for(let f=1;f<=s;++f)u.add(c[o-s+f].clone().multiplyScalar(l[h][f]));a[h]=u}for(let h=r+1;h<=i+1;++h)a[h]=new Ue(0,0,0);return a}function b_(s,e){let t=1;for(let i=2;i<=s;++i)t*=i;let n=1;for(let i=2;i<=e;++i)n*=i;for(let i=2;i<=s-e;++i)n*=i;return t/n}function T_(s){const e=s.length,t=[],n=[];for(let r=0;r<e;++r){const a=s[r];t[r]=new L(a.x,a.y,a.z),n[r]=a.w}const i=[];for(let r=0;r<e;++r){const a=t[r].clone();for(let o=1;o<=r;++o)a.sub(i[r-o].clone().multiplyScalar(b_(r,o)*n[o]));i[r]=a.divideScalar(n[0])}return i}function E_(s,e,t,n,i){const r=S_(s,e,t,n,i);return T_(r)}class Mc extends M0{constructor(e,t,n,i,r){super(),this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=i||0,this.endKnot=r||this.knots.length-1;for(let a=0;a<n.length;++a){const o=n[a];this.controlPoints[a]=new Ue(o.x,o.y,o.z,o.w)}}getPoint(e,t=new L){const n=t,i=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),r=M_(this.degree,this.knots,this.controlPoints,i);return r.w!==1&&r.divideScalar(r.w),n.set(r.x,r.y,r.z)}getTangent(e,t=new L){const n=t,i=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),r=E_(this.degree,this.knots,this.controlPoints,i,1);return n.copy(r[1]).normalize(),n}}let Le,$e,St;class A_ extends Hs{constructor(e){super(e)}load(e,t,n,i){const r=this,a=r.path===""?_o.extractUrlBase(e):r.path,o=new R0(this.manager);o.setPath(r.path),o.setResponseType("arraybuffer"),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(l){try{t(r.parse(l,a))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e,t){if(R_(e))Le=new D_().parse(e);else{const i=qh(e);if(!F_(i))throw new Error("THREE.FBXLoader: Unknown format.");if(Sc(i)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+Sc(i));Le=new I_().parse(i)}const n=new Xs(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new C_(n,this.manager).parse(Le)}}class C_{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){$e=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),n=this.parseMaterials(t),i=this.parseDeformers(),r=new L_().parse(i);return this.parseScene(i,r,n),St}parseConnections(){const e=new Map;return"Connections"in Le&&Le.Connections.connections.forEach(function(n){const i=n[0],r=n[1],a=n[2];e.has(i)||e.set(i,{parents:[],children:[]});const o={ID:r,relationship:a};e.get(i).parents.push(o),e.has(r)||e.set(r,{parents:[],children:[]});const l={ID:i,relationship:a};e.get(r).children.push(l)}),e}parseImages(){const e={},t={};if("Video"in Le.Objects){const n=Le.Objects.Video;for(const i in n){const r=n[i],a=parseInt(i);if(e[a]=r.RelativeFilename||r.Filename,"Content"in r){const o=r.Content instanceof ArrayBuffer&&r.Content.byteLength>0,l=typeof r.Content=="string"&&r.Content!=="";if(o||l){const c=this.parseImage(n[i]);t[r.RelativeFilename||r.Filename]=c}}}}for(const n in e){const i=e[n];t[i]!==void 0?e[n]=t[i]:e[n]=e[n].split("\\").pop()}return e}parseImage(e){const t=e.Content,n=e.RelativeFilename||e.Filename,i=n.slice(n.lastIndexOf(".")+1).toLowerCase();let r;switch(i){case"bmp":r="image/bmp";break;case"jpg":case"jpeg":r="image/jpeg";break;case"png":r="image/png";break;case"tif":r="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),r="image/tga";break;default:console.warn('FBXLoader: Image type "'+i+'" is not supported.');return}if(typeof t=="string")return"data:"+r+";base64,"+t;{const a=new Uint8Array(t);return window.URL.createObjectURL(new Blob([a],{type:r}))}}parseTextures(e){const t=new Map;if("Texture"in Le.Objects){const n=Le.Objects.Texture;for(const i in n){const r=this.parseTexture(n[i],e);t.set(parseInt(i),r)}}return t}parseTexture(e,t){const n=this.loadTexture(e,t);n.ID=e.id,n.name=e.attrName;const i=e.WrapModeU,r=e.WrapModeV,a=i!==void 0?i.value:0,o=r!==void 0?r.value:0;if(n.wrapS=a===0?Mr:Lt,n.wrapT=o===0?Mr:Lt,"Scaling"in e){const l=e.Scaling.value;n.repeat.x=l[0],n.repeat.y=l[1]}if("Translation"in e){const l=e.Translation.value;n.offset.x=l[0],n.offset.y=l[1]}return n}loadTexture(e,t){let n;const i=this.textureLoader.path,r=$e.get(e.id).children;r!==void 0&&r.length>0&&t[r[0].ID]!==void 0&&(n=t[r[0].ID],(n.indexOf("blob:")===0||n.indexOf("data:")===0)&&this.textureLoader.setPath(void 0));let a;const o=e.FileName.slice(-3).toLowerCase();if(o==="tga"){const l=this.manager.getHandler(".tga");l===null?(console.warn("FBXLoader: TGA loader not found, creating placeholder texture for",e.RelativeFilename),a=new yt):(l.setPath(this.textureLoader.path),a=l.load(n))}else o==="psd"?(console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for",e.RelativeFilename),a=new yt):a=this.textureLoader.load(n);return this.textureLoader.setPath(i),a}parseMaterials(e){const t=new Map;if("Material"in Le.Objects){const n=Le.Objects.Material;for(const i in n){const r=this.parseMaterial(n[i],e);r!==null&&t.set(parseInt(i),r)}}return t}parseMaterial(e,t){const n=e.id,i=e.attrName;let r=e.ShadingModel;if(typeof r=="object"&&(r=r.value),!$e.has(n))return null;const a=this.parseParameters(e,t,n);let o;switch(r.toLowerCase()){case"phong":o=new ds;break;case"lambert":o=new S0;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',r),o=new ds;break}return o.setValues(a),o.name=i,o}parseParameters(e,t,n){const i={};e.BumpFactor&&(i.bumpScale=e.BumpFactor.value),e.Diffuse?i.color=new Me().fromArray(e.Diffuse.value):e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(i.color=new Me().fromArray(e.DiffuseColor.value)),e.DisplacementFactor&&(i.displacementScale=e.DisplacementFactor.value),e.Emissive?i.emissive=new Me().fromArray(e.Emissive.value):e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(i.emissive=new Me().fromArray(e.EmissiveColor.value)),e.EmissiveFactor&&(i.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),e.Opacity&&(i.opacity=parseFloat(e.Opacity.value)),i.opacity<1&&(i.transparent=!0),e.ReflectionFactor&&(i.reflectivity=e.ReflectionFactor.value),e.Shininess&&(i.shininess=e.Shininess.value),e.Specular?i.specular=new Me().fromArray(e.Specular.value):e.SpecularColor&&e.SpecularColor.type==="Color"&&(i.specular=new Me().fromArray(e.SpecularColor.value));const r=this;return $e.get(n).children.forEach(function(a){const o=a.relationship;switch(o){case"Bump":i.bumpMap=r.getTexture(t,a.ID);break;case"Maya|TEX_ao_map":i.aoMap=r.getTexture(t,a.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":i.map=r.getTexture(t,a.ID),i.map!==void 0&&(i.map.encoding=Ge);break;case"DisplacementColor":i.displacementMap=r.getTexture(t,a.ID);break;case"EmissiveColor":i.emissiveMap=r.getTexture(t,a.ID),i.emissiveMap!==void 0&&(i.emissiveMap.encoding=Ge);break;case"NormalMap":case"Maya|TEX_normal_map":i.normalMap=r.getTexture(t,a.ID);break;case"ReflectionColor":i.envMap=r.getTexture(t,a.ID),i.envMap!==void 0&&(i.envMap.mapping=_s,i.envMap.encoding=Ge);break;case"SpecularColor":i.specularMap=r.getTexture(t,a.ID),i.specularMap!==void 0&&(i.specularMap.encoding=Ge);break;case"TransparentColor":case"TransparencyFactor":i.alphaMap=r.getTexture(t,a.ID),i.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",o);break}}),i}getTexture(e,t){return"LayeredTexture"in Le.Objects&&t in Le.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=$e.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in Le.Objects){const n=Le.Objects.Deformer;for(const i in n){const r=n[i],a=$e.get(parseInt(i));if(r.attrType==="Skin"){const o=this.parseSkeleton(a,n);o.ID=i,a.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),o.geometryID=a.parents[0].ID,e[i]=o}else if(r.attrType==="BlendShape"){const o={id:i};o.rawTargets=this.parseMorphTargets(a,n),o.id=i,a.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[i]=o}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const n=[];return e.children.forEach(function(i){const r=t[i.ID];if(r.attrType!=="Cluster")return;const a={ID:i.ID,indices:[],weights:[],transformLink:new ge().fromArray(r.TransformLink.a)};"Indexes"in r&&(a.indices=r.Indexes.a,a.weights=r.Weights.a),n.push(a)}),{rawBones:n,bones:[]}}parseMorphTargets(e,t){const n=[];for(let i=0;i<e.children.length;i++){const r=e.children[i],a=t[r.ID],o={name:a.attrName,initialWeight:a.DeformPercent,id:a.id,fullWeights:a.FullWeights.a};if(a.attrType!=="BlendShapeChannel")return;o.geoID=$e.get(parseInt(r.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,n.push(o)}return n}parseScene(e,t,n){St=new Qt;const i=this.parseModels(e.skeletons,t,n),r=Le.Objects.Model,a=this;i.forEach(function(l){const c=r[l.ID];a.setLookAtProperties(l,c),$e.get(l.ID).parents.forEach(function(u){const f=i.get(u.ID);f!==void 0&&f.add(l)}),l.parent===null&&St.add(l)}),this.bindSkeleton(e.skeletons,t,i),this.createAmbientLight(),St.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const c=Hh(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});const o=new P_().parse();St.children.length===1&&St.children[0].isGroup&&(St.children[0].animations=o,St=St.children[0]),St.animations=o}parseModels(e,t,n){const i=new Map,r=Le.Objects.Model;for(const a in r){const o=parseInt(a),l=r[a],c=$e.get(o);let h=this.buildSkeleton(c,e,o,l.attrName);if(!h){switch(l.attrType){case"Camera":h=this.createCamera(c);break;case"Light":h=this.createLight(c);break;case"Mesh":h=this.createMesh(c,t,n);break;case"NurbsCurve":h=this.createCurve(c,t);break;case"LimbNode":case"Root":h=new Xa;break;case"Null":default:h=new Qt;break}h.name=l.attrName?Fe.sanitizeNodeName(l.attrName):"",h.ID=o}this.getTransformData(h,l),i.set(o,h)}return i}buildSkeleton(e,t,n,i){let r=null;return e.parents.forEach(function(a){for(const o in t){const l=t[o];l.rawBones.forEach(function(c,h){if(c.ID===a.ID){const u=r;r=new Xa,r.matrixWorld.copy(c.transformLink),r.name=i?Fe.sanitizeNodeName(i):"",r.ID=n,l.bones[h]=r,u!==null&&r.add(u)}})}}),r}createCamera(e){let t,n;if(e.children.forEach(function(i){const r=Le.Objects.NodeAttribute[i.ID];r!==void 0&&(n=r)}),n===void 0)t=new Xe;else{let i=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(i=1);let r=1;n.NearPlane!==void 0&&(r=n.NearPlane.value/1e3);let a=1e3;n.FarPlane!==void 0&&(a=n.FarPlane.value/1e3);let o=window.innerWidth,l=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(o=n.AspectWidth.value,l=n.AspectHeight.value);const c=o/l;let h=45;n.FieldOfView!==void 0&&(h=n.FieldOfView.value);const u=n.FocalLength?n.FocalLength.value:null;switch(i){case 0:t=new pt(h,c,r,a),u!==null&&t.setFocalLength(u);break;case 1:t=new co(-o/2,o/2,l/2,-l/2,r,a);break;default:console.warn("THREE.FBXLoader: Unknown camera type "+i+"."),t=new Xe;break}}return t}createLight(e){let t,n;if(e.children.forEach(function(i){const r=Le.Objects.NodeAttribute[i.ID];r!==void 0&&(n=r)}),n===void 0)t=new Xe;else{let i;n.LightType===void 0?i=0:i=n.LightType.value;let r=16777215;n.Color!==void 0&&(r=new Me().fromArray(n.Color.value));let a=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(a=0);let o=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?o=0:o=n.FarAttenuationEnd.value);const l=1;switch(i){case 0:t=new bs(r,a,o,l);break;case 1:t=new go(r,a);break;case 2:let c=Math.PI/3;n.InnerAngle!==void 0&&(c=$t.degToRad(n.InnerAngle.value));let h=0;n.OuterAngle!==void 0&&(h=$t.degToRad(n.OuterAngle.value),h=Math.max(h,1)),t=new N0(r,a,o,c,h,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),t=new bs(r,a);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,n){let i,r=null,a=null;const o=[];return e.children.forEach(function(l){t.has(l.ID)&&(r=t.get(l.ID)),n.has(l.ID)&&o.push(n.get(l.ID))}),o.length>1?a=o:o.length>0?a=o[0]:(a=new ds({color:13421772}),o.push(a)),"color"in r.attributes&&o.forEach(function(l){l.vertexColors=!0}),r.FBX_Deformer?(i=new _0(r,a),i.normalizeSkinWeights()):i=new tt(r,a),i}createCurve(e,t){const n=e.children.reduce(function(r,a){return t.has(a.ID)&&(r=t.get(a.ID)),r},null),i=new Gs({color:3342591,linewidth:1});return new ws(n,i)}getTransformData(e,t){const n={};"InheritType"in t&&(n.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?n.eulerOrder=Xh(t.RotationOrder.value):n.eulerOrder="ZYX","Lcl_Translation"in t&&(n.translation=t.Lcl_Translation.value),"PreRotation"in t&&(n.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(n.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(n.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(n.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(n.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(n.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(n.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(n.rotationPivot=t.RotationPivot.value),e.userData.transformData=n}setLookAtProperties(e,t){"LookAtProperty"in t&&$e.get(e.ID).children.forEach(function(i){if(i.relationship==="LookAtProperty"){const r=Le.Objects.Model[i.ID];if("Lcl_Translation"in r){const a=r.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(a),St.add(e.target)):e.lookAt(new L().fromArray(a))}}})}bindSkeleton(e,t,n){const i=this.parsePoseNodes();for(const r in e){const a=e[r];$e.get(parseInt(a.ID)).parents.forEach(function(l){if(t.has(l.ID)){const c=l.ID;$e.get(c).parents.forEach(function(u){n.has(u.ID)&&n.get(u.ID).bind(new po(a.bones),i[u.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in Le.Objects){const t=Le.Objects.Pose;for(const n in t)if(t[n].attrType==="BindPose"&&t[n].NbPoseNodes>0){const i=t[n].PoseNode;Array.isArray(i)?i.forEach(function(r){e[r.Node]=new ge().fromArray(r.Matrix.a)}):e[i.Node]=new ge().fromArray(i.Matrix.a)}}return e}createAmbientLight(){if("GlobalSettings"in Le&&"AmbientColor"in Le.GlobalSettings){const e=Le.GlobalSettings.AmbientColor.value,t=e[0],n=e[1],i=e[2];if(t!==0||n!==0||i!==0){const r=new Me(t,n,i);St.add(new oh(r,1))}}}}class L_{parse(e){const t=new Map;if("Geometry"in Le.Objects){const n=Le.Objects.Geometry;for(const i in n){const r=$e.get(parseInt(i)),a=this.parseGeometry(r,n[i],e);t.set(parseInt(i),a)}}return t}parseGeometry(e,t,n){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,n);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,n){const i=n.skeletons,r=[],a=e.parents.map(function(u){return Le.Objects.Model[u.ID]});if(a.length===0)return;const o=e.children.reduce(function(u,f){return i[f.ID]!==void 0&&(u=i[f.ID]),u},null);e.children.forEach(function(u){n.morphTargets[u.ID]!==void 0&&r.push(n.morphTargets[u.ID])});const l=a[0],c={};"RotationOrder"in l&&(c.eulerOrder=Xh(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);const h=Hh(c);return this.genGeometry(t,o,r,h)}genGeometry(e,t,n,i){const r=new gt;e.attrName&&(r.name=e.attrName);const a=this.parseGeoNode(e,t),o=this.genBuffers(a),l=new Ze(o.vertex,3);if(l.applyMatrix4(i),r.setAttribute("position",l),o.colors.length>0&&r.setAttribute("color",new Ze(o.colors,3)),t&&(r.setAttribute("skinIndex",new oo(o.weightsIndices,4)),r.setAttribute("skinWeight",new Ze(o.vertexWeights,4)),r.FBX_Deformer=t),o.normal.length>0){const c=new Pt().getNormalMatrix(i),h=new Ze(o.normal,3);h.applyNormalMatrix(c),r.setAttribute("normal",h)}if(o.uvs.forEach(function(c,h){let u="uv"+(h+1).toString();h===0&&(u="uv"),r.setAttribute(u,new Ze(o.uvs[h],2))}),a.material&&a.material.mappingType!=="AllSame"){let c=o.materialIndex[0],h=0;if(o.materialIndex.forEach(function(u,f){u!==c&&(r.addGroup(h,f-h,c),c=u,h=f)}),r.groups.length>0){const u=r.groups[r.groups.length-1],f=u.start+u.count;f!==o.materialIndex.length&&r.addGroup(f,o.materialIndex.length-f,c)}r.groups.length===0&&r.addGroup(0,o.materialIndex.length,o.materialIndex[0])}return this.addMorphTargets(r,e,n,i),r}parseGeoNode(e,t){const n={};if(n.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],n.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&(n.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(n.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(n.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){n.uv=[];let i=0;for(;e.LayerElementUV[i];)e.LayerElementUV[i].UV&&n.uv.push(this.parseUVs(e.LayerElementUV[i])),i++}return n.weightTable={},t!==null&&(n.skeleton=t,t.rawBones.forEach(function(i,r){i.indices.forEach(function(a,o){n.weightTable[a]===void 0&&(n.weightTable[a]=[]),n.weightTable[a].push({id:r,weight:i.weights[o]})})})),n}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let n=0,i=0,r=!1,a=[],o=[],l=[],c=[],h=[],u=[];const f=this;return e.vertexIndices.forEach(function(p,g){let m,d=!1;p<0&&(p=p^-1,d=!0);let _=[],x=[];if(a.push(p*3,p*3+1,p*3+2),e.color){const M=cs(g,n,p,e.color);l.push(M[0],M[1],M[2])}if(e.skeleton){if(e.weightTable[p]!==void 0&&e.weightTable[p].forEach(function(M){x.push(M.weight),_.push(M.id)}),x.length>4){r||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),r=!0);const M=[0,0,0,0],w=[0,0,0,0];x.forEach(function(y,T){let P=y,v=_[T];w.forEach(function(A,I,Y){if(P>A){Y[I]=P,P=A;const Q=M[I];M[I]=v,v=Q}})}),_=M,x=w}for(;x.length<4;)x.push(0),_.push(0);for(let M=0;M<4;++M)h.push(x[M]),u.push(_[M])}if(e.normal){const M=cs(g,n,p,e.normal);o.push(M[0],M[1],M[2])}e.material&&e.material.mappingType!=="AllSame"&&(m=cs(g,n,p,e.material)[0],m<0&&(console.warn("THREE.FBXLoader: Invalid material index:",m),m=0)),e.uv&&e.uv.forEach(function(M,w){const y=cs(g,n,p,M);c[w]===void 0&&(c[w]=[]),c[w].push(y[0]),c[w].push(y[1])}),i++,d&&(f.genFace(t,e,a,m,o,l,c,h,u,i),n++,i=0,a=[],o=[],l=[],c=[],h=[],u=[])}),t}genFace(e,t,n,i,r,a,o,l,c,h){for(let u=2;u<h;u++)e.vertex.push(t.vertexPositions[n[0]]),e.vertex.push(t.vertexPositions[n[1]]),e.vertex.push(t.vertexPositions[n[2]]),e.vertex.push(t.vertexPositions[n[(u-1)*3]]),e.vertex.push(t.vertexPositions[n[(u-1)*3+1]]),e.vertex.push(t.vertexPositions[n[(u-1)*3+2]]),e.vertex.push(t.vertexPositions[n[u*3]]),e.vertex.push(t.vertexPositions[n[u*3+1]]),e.vertex.push(t.vertexPositions[n[u*3+2]]),t.skeleton&&(e.vertexWeights.push(l[0]),e.vertexWeights.push(l[1]),e.vertexWeights.push(l[2]),e.vertexWeights.push(l[3]),e.vertexWeights.push(l[(u-1)*4]),e.vertexWeights.push(l[(u-1)*4+1]),e.vertexWeights.push(l[(u-1)*4+2]),e.vertexWeights.push(l[(u-1)*4+3]),e.vertexWeights.push(l[u*4]),e.vertexWeights.push(l[u*4+1]),e.vertexWeights.push(l[u*4+2]),e.vertexWeights.push(l[u*4+3]),e.weightsIndices.push(c[0]),e.weightsIndices.push(c[1]),e.weightsIndices.push(c[2]),e.weightsIndices.push(c[3]),e.weightsIndices.push(c[(u-1)*4]),e.weightsIndices.push(c[(u-1)*4+1]),e.weightsIndices.push(c[(u-1)*4+2]),e.weightsIndices.push(c[(u-1)*4+3]),e.weightsIndices.push(c[u*4]),e.weightsIndices.push(c[u*4+1]),e.weightsIndices.push(c[u*4+2]),e.weightsIndices.push(c[u*4+3])),t.color&&(e.colors.push(a[0]),e.colors.push(a[1]),e.colors.push(a[2]),e.colors.push(a[(u-1)*3]),e.colors.push(a[(u-1)*3+1]),e.colors.push(a[(u-1)*3+2]),e.colors.push(a[u*3]),e.colors.push(a[u*3+1]),e.colors.push(a[u*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(i),e.materialIndex.push(i),e.materialIndex.push(i)),t.normal&&(e.normal.push(r[0]),e.normal.push(r[1]),e.normal.push(r[2]),e.normal.push(r[(u-1)*3]),e.normal.push(r[(u-1)*3+1]),e.normal.push(r[(u-1)*3+2]),e.normal.push(r[u*3]),e.normal.push(r[u*3+1]),e.normal.push(r[u*3+2])),t.uv&&t.uv.forEach(function(f,p){e.uvs[p]===void 0&&(e.uvs[p]=[]),e.uvs[p].push(o[p][0]),e.uvs[p].push(o[p][1]),e.uvs[p].push(o[p][(u-1)*2]),e.uvs[p].push(o[p][(u-1)*2+1]),e.uvs[p].push(o[p][u*2]),e.uvs[p].push(o[p][u*2+1])})}addMorphTargets(e,t,n,i){if(n.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const r=this;n.forEach(function(a){a.rawTargets.forEach(function(o){const l=Le.Objects.Geometry[o.geoID];l!==void 0&&r.genMorphGeometry(e,t,l,i,o.name)})})}genMorphGeometry(e,t,n,i,r){const a=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],o=n.Vertices!==void 0?n.Vertices.a:[],l=n.Indexes!==void 0?n.Indexes.a:[],c=e.attributes.position.count*3,h=new Float32Array(c);for(let g=0;g<l.length;g++){const m=l[g]*3;h[m]=o[g*3],h[m+1]=o[g*3+1],h[m+2]=o[g*3+2]}const u={vertexIndices:a,vertexPositions:h},f=this.genBuffers(u),p=new Ze(f.vertex,3);p.name=r||n.attrName,p.applyMatrix4(i),e.morphAttributes.position.push(p)}parseNormals(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Normals.a;let r=[];return n==="IndexToDirect"&&("NormalIndex"in e?r=e.NormalIndex.a:"NormalsIndex"in e&&(r=e.NormalsIndex.a)),{dataSize:3,buffer:i,indices:r,mappingType:t,referenceType:n}}parseUVs(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.UV.a;let r=[];return n==="IndexToDirect"&&(r=e.UVIndex.a),{dataSize:2,buffer:i,indices:r,mappingType:t,referenceType:n}}parseVertexColors(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Colors.a;let r=[];return n==="IndexToDirect"&&(r=e.ColorIndex.a),{dataSize:4,buffer:i,indices:r,mappingType:t,referenceType:n}}parseMaterialIndices(e){const t=e.MappingInformationType,n=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};const i=e.Materials.a,r=[];for(let a=0;a<i.length;++a)r.push(a);return{dataSize:1,buffer:i,indices:r,mappingType:t,referenceType:n}}parseNurbsGeometry(e){if(Mc===void 0)return console.error("THREE.FBXLoader: The loader relies on NURBSCurve for any nurbs present in the model. Nurbs will show up as empty geometry."),new gt;const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new gt;const n=t-1,i=e.KnotVector.a,r=[],a=e.Points.a;for(let u=0,f=a.length;u<f;u+=4)r.push(new Ue().fromArray(a,u));let o,l;if(e.Form==="Closed")r.push(r[0]);else if(e.Form==="Periodic"){o=n,l=i.length-1-o;for(let u=0;u<n;++u)r.push(r[u])}const h=new Mc(n,i,r,o,l).getPoints(r.length*12);return new gt().setFromPoints(h)}}class P_{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const n in t){const i=t[n],r=this.addClip(i);e.push(r)}return e}parseClips(){if(Le.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=Le.Objects.AnimationCurveNode,t=new Map;for(const n in e){const i=e[n];if(i.attrName.match(/S|R|T|DeformPercent/)!==null){const r={id:i.id,attr:i.attrName,curves:{}};t.set(r.id,r)}}return t}parseAnimationCurves(e){const t=Le.Objects.AnimationCurve;for(const n in t){const i={id:t[n].id,times:t[n].KeyTime.a.map(O_),values:t[n].KeyValueFloat.a},r=$e.get(i.id);if(r!==void 0){const a=r.parents[0].ID,o=r.parents[0].relationship;o.match(/X/)?e.get(a).curves.x=i:o.match(/Y/)?e.get(a).curves.y=i:o.match(/Z/)?e.get(a).curves.z=i:o.match(/d|DeformPercent/)&&e.has(a)&&(e.get(a).curves.morph=i)}}}parseAnimationLayers(e){const t=Le.Objects.AnimationLayer,n=new Map;for(const i in t){const r=[],a=$e.get(parseInt(i));a!==void 0&&(a.children.forEach(function(l,c){if(e.has(l.ID)){const h=e.get(l.ID);if(h.curves.x!==void 0||h.curves.y!==void 0||h.curves.z!==void 0){if(r[c]===void 0){const u=$e.get(l.ID).parents.filter(function(f){return f.relationship!==void 0})[0].ID;if(u!==void 0){const f=Le.Objects.Model[u.toString()];if(f===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}const p={modelName:f.attrName?Fe.sanitizeNodeName(f.attrName):"",ID:f.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};St.traverse(function(g){g.ID===f.id&&(p.transform=g.matrix,g.userData.transformData&&(p.eulerOrder=g.userData.transformData.eulerOrder))}),p.transform||(p.transform=new ge),"PreRotation"in f&&(p.preRotation=f.PreRotation.value),"PostRotation"in f&&(p.postRotation=f.PostRotation.value),r[c]=p}}r[c]&&(r[c][h.attr]=h)}else if(h.curves.morph!==void 0){if(r[c]===void 0){const u=$e.get(l.ID).parents.filter(function(_){return _.relationship!==void 0})[0].ID,f=$e.get(u).parents[0].ID,p=$e.get(f).parents[0].ID,g=$e.get(p).parents[0].ID,m=Le.Objects.Model[g],d={modelName:m.attrName?Fe.sanitizeNodeName(m.attrName):"",morphName:Le.Objects.Deformer[u].attrName};r[c]=d}r[c][h.attr]=h}}}),n.set(parseInt(i),r))}return n}parseAnimStacks(e){const t=Le.Objects.AnimationStack,n={};for(const i in t){const r=$e.get(parseInt(i)).children;r.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const a=e.get(r[0].ID);n[i]={name:t[i].attrName,layer:a}}return n}addClip(e){let t=[];const n=this;return e.layer.forEach(function(i){t=t.concat(n.generateTracks(i))}),new qa(e.name,-1,t)}generateTracks(e){const t=[];let n=new L,i=new xt,r=new L;if(e.transform&&e.transform.decompose(n,i,r),n=n.toArray(),i=new It().setFromQuaternion(i,e.eulerOrder).toArray(),r=r.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const a=this.generateVectorTrack(e.modelName,e.T.curves,n,"position");a!==void 0&&t.push(a)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const a=this.generateRotationTrack(e.modelName,e.R.curves,i,e.preRotation,e.postRotation,e.eulerOrder);a!==void 0&&t.push(a)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const a=this.generateVectorTrack(e.modelName,e.S.curves,r,"scale");a!==void 0&&t.push(a)}if(e.DeformPercent!==void 0){const a=this.generateMorphTrack(e);a!==void 0&&t.push(a)}return t}generateVectorTrack(e,t,n,i){const r=this.getTimesForAllAxes(t),a=this.getKeyframeTrackValues(r,t,n);return new Er(e+"."+i,r,a)}generateRotationTrack(e,t,n,i,r,a){t.x!==void 0&&(this.interpolateRotations(t.x),t.x.values=t.x.values.map($t.degToRad)),t.y!==void 0&&(this.interpolateRotations(t.y),t.y.values=t.y.values.map($t.degToRad)),t.z!==void 0&&(this.interpolateRotations(t.z),t.z.values=t.z.values.map($t.degToRad));const o=this.getTimesForAllAxes(t),l=this.getKeyframeTrackValues(o,t,n);i!==void 0&&(i=i.map($t.degToRad),i.push(a),i=new It().fromArray(i),i=new xt().setFromEuler(i)),r!==void 0&&(r=r.map($t.degToRad),r.push(a),r=new It().fromArray(r),r=new xt().setFromEuler(r).invert());const c=new xt,h=new It,u=[];for(let f=0;f<l.length;f+=3)h.set(l[f],l[f+1],l[f+2],a),c.setFromEuler(h),i!==void 0&&c.premultiply(i),r!==void 0&&c.multiply(r),c.toArray(u,f/3*4);return new Yi(e+".quaternion",o,u)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,n=t.values.map(function(r){return r/100}),i=St.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new Tr(e.modelName+".morphTargetInfluences["+i+"]",t.times,n)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(n,i){return n-i}),t.length>1){let n=1,i=t[0];for(let r=1;r<t.length;r++){const a=t[r];a!==i&&(t[n]=a,i=a,n++)}t=t.slice(0,n)}return t}getKeyframeTrackValues(e,t,n){const i=n,r=[];let a=-1,o=-1,l=-1;return e.forEach(function(c){if(t.x&&(a=t.x.times.indexOf(c)),t.y&&(o=t.y.times.indexOf(c)),t.z&&(l=t.z.times.indexOf(c)),a!==-1){const h=t.x.values[a];r.push(h),i[0]=h}else r.push(i[0]);if(o!==-1){const h=t.y.values[o];r.push(h),i[1]=h}else r.push(i[1]);if(l!==-1){const h=t.z.values[l];r.push(h),i[2]=h}else r.push(i[2])}),r}interpolateRotations(e){for(let t=1;t<e.values.length;t++){const n=e.values[t-1],i=e.values[t]-n,r=Math.abs(i);if(r>=180){const a=r/180,o=i/a;let l=n+o;const c=e.times[t-1],u=(e.times[t]-c)/a;let f=c+u;const p=[],g=[];for(;f<e.times[t];)p.push(f),f+=u,g.push(l),l+=o;e.times=bc(e.times,t,p),e.values=bc(e.values,t,g)}}}}class I_{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new Wh,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,n=e.split(/[\r\n]+/);return n.forEach(function(i,r){const a=i.match(/^[\s\t]*;/),o=i.match(/^[\s\t]*$/);if(a||o)return;const l=i.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),c=i.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),h=i.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(i,l):c?t.parseNodeProperty(i,c,n[++r]):h?t.popStack():i.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(i)}),this.allNodes}parseNodeBegin(e,t){const n=t[1].trim().replace(/^"/,"").replace(/"$/,""),i=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),r={name:n},a=this.parseNodeAttr(i),o=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,r):n in o?(n==="PoseNode"?o.PoseNode.push(r):o[n].id!==void 0&&(o[n]={},o[n][o[n].id]=o[n]),a.id!==""&&(o[n][a.id]=r)):typeof a.id=="number"?(o[n]={},o[n][a.id]=r):n!=="Properties70"&&(n==="PoseNode"?o[n]=[r]:o[n]=r),typeof a.id=="number"&&(r.id=a.id),a.name!==""&&(r.attrName=a.name),a.type!==""&&(r.attrType=a.type),this.pushStack(r)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let n="",i="";return e.length>1&&(n=e[1].replace(/^(\w+)::/,""),i=e[2]),{id:t,name:n,type:i}}parseNodeProperty(e,t,n){let i=t[1].replace(/^"/,"").replace(/"$/,"").trim(),r=t[2].replace(/^"/,"").replace(/"$/,"").trim();i==="Content"&&r===","&&(r=n.replace(/"/g,"").replace(/,$/,"").trim());const a=this.getCurrentNode();if(a.name==="Properties70"){this.parseNodeSpecialProperty(e,i,r);return}if(i==="C"){const l=r.split(",").slice(1),c=parseInt(l[0]),h=parseInt(l[1]);let u=r.split(",").slice(3);u=u.map(function(f){return f.trim().replace(/^"/,"")}),i="connections",r=[c,h],U_(r,u),a[i]===void 0&&(a[i]=[])}i==="Node"&&(a.id=r),i in a&&Array.isArray(a[i])?a[i].push(r):i!=="a"?a[i]=r:a.a=r,this.setCurrentProp(a,i),i==="a"&&r.slice(-1)!==","&&(a.a=Oa(r))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=Oa(t.a))}parseNodeSpecialProperty(e,t,n){const i=n.split('",').map(function(h){return h.trim().replace(/^\"/,"").replace(/\s/,"_")}),r=i[0],a=i[1],o=i[2],l=i[3];let c=i[4];switch(a){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=Oa(c);break}this.getPrevNode()[r]={type:a,type2:o,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),r)}}class D_{parse(e){const t=new wc(e);t.skip(23);const n=t.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);const i=new Wh;for(;!this.endOfContent(t);){const r=this.parseNode(t,n);r!==null&&i.add(r.name,r)}return i}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const n={},i=t>=7500?e.getUint64():e.getUint32(),r=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const a=e.getUint8(),o=e.getString(a);if(i===0)return null;const l=[];for(let f=0;f<r;f++)l.push(this.parseProperty(e));const c=l.length>0?l[0]:"",h=l.length>1?l[1]:"",u=l.length>2?l[2]:"";for(n.singleProperty=r===1&&e.getOffset()===i;i>e.getOffset();){const f=this.parseNode(e,t);f!==null&&this.parseSubNode(o,n,f)}return n.propertyList=l,typeof c=="number"&&(n.id=c),h!==""&&(n.attrName=h),u!==""&&(n.attrType=u),o!==""&&(n.name=o),n}parseSubNode(e,t,n){if(n.singleProperty===!0){const i=n.propertyList[0];Array.isArray(i)?(t[n.name]=n,n.a=i):t[n.name]=i}else if(e==="Connections"&&n.name==="C"){const i=[];n.propertyList.forEach(function(r,a){a!==0&&i.push(r)}),t.connections===void 0&&(t.connections=[]),t.connections.push(i)}else if(n.name==="Properties70")Object.keys(n).forEach(function(r){t[r]=n[r]});else if(e==="Properties70"&&n.name==="P"){let i=n.propertyList[0],r=n.propertyList[1];const a=n.propertyList[2],o=n.propertyList[3];let l;i.indexOf("Lcl ")===0&&(i=i.replace("Lcl ","Lcl_")),r.indexOf("Lcl ")===0&&(r=r.replace("Lcl ","Lcl_")),r==="Color"||r==="ColorRGB"||r==="Vector"||r==="Vector3D"||r.indexOf("Lcl_")===0?l=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:l=n.propertyList[4],t[i]={type:r,type2:a,flag:o,value:l}}else t[n.name]===void 0?typeof n.id=="number"?(t[n.name]={},t[n.name][n.id]=n):t[n.name]=n:n.name==="PoseNode"?(Array.isArray(t[n.name])||(t[n.name]=[t[n.name]]),t[n.name].push(n)):t[n.name][n.id]===void 0&&(t[n.name][n.id]=n)}parseProperty(e){const t=e.getString(1);let n;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return n=e.getUint32(),e.getArrayBuffer(n);case"S":return n=e.getUint32(),e.getString(n);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const i=e.getUint32(),r=e.getUint32(),a=e.getUint32();if(r===0)switch(t){case"b":case"c":return e.getBooleanArray(i);case"d":return e.getFloat64Array(i);case"f":return e.getFloat32Array(i);case"i":return e.getInt32Array(i);case"l":return e.getInt64Array(i)}typeof x_>"u"&&console.error("THREE.FBXLoader: External library fflate.min.js required.");const o=Lr(new Uint8Array(e.getArrayBuffer(a))),l=new wc(o.buffer);switch(t){case"b":case"c":return l.getBooleanArray(i);case"d":return l.getFloat64Array(i);case"f":return l.getFloat32Array(i);case"i":return l.getInt32Array(i);case"l":return l.getInt64Array(i)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class wc{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let n=0;n<e;n++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){let t=[];for(let i=0;i<e;i++)t[i]=this.getUint8();const n=t.indexOf(0);return n>=0&&(t=t.slice(0,n)),_o.decodeText(new Uint8Array(t))}}class Wh{add(e,t){this[e]=t}}function R_(s){const e="Kaydara FBX Binary  \0";return s.byteLength>=e.length&&e===qh(s,0,e.length)}function F_(s){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function n(i){const r=s[i-1];return s=s.slice(t+i),t++,r}for(let i=0;i<e.length;++i)if(n(1)===e[i])return!1;return!0}function Sc(s){const e=/FBXVersion: (\d+)/,t=s.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function O_(s){return s/46186158e3}const N_=[];function cs(s,e,t,n){let i;switch(n.mappingType){case"ByPolygonVertex":i=s;break;case"ByPolygon":i=e;break;case"ByVertice":i=t;break;case"AllSame":i=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(i=n.indices[i]);const r=i*n.dataSize,a=r+n.dataSize;return z_(N_,n.buffer,r,a)}const Fa=new It,Ei=new L;function Hh(s){const e=new ge,t=new ge,n=new ge,i=new ge,r=new ge,a=new ge,o=new ge,l=new ge,c=new ge,h=new ge,u=new ge,f=new ge,p=s.inheritType?s.inheritType:0;if(s.translation&&e.setPosition(Ei.fromArray(s.translation)),s.preRotation){const I=s.preRotation.map($t.degToRad);I.push(s.eulerOrder||It.DefaultOrder),t.makeRotationFromEuler(Fa.fromArray(I))}if(s.rotation){const I=s.rotation.map($t.degToRad);I.push(s.eulerOrder||It.DefaultOrder),n.makeRotationFromEuler(Fa.fromArray(I))}if(s.postRotation){const I=s.postRotation.map($t.degToRad);I.push(s.eulerOrder||It.DefaultOrder),i.makeRotationFromEuler(Fa.fromArray(I)),i.invert()}s.scale&&r.scale(Ei.fromArray(s.scale)),s.scalingOffset&&o.setPosition(Ei.fromArray(s.scalingOffset)),s.scalingPivot&&a.setPosition(Ei.fromArray(s.scalingPivot)),s.rotationOffset&&l.setPosition(Ei.fromArray(s.rotationOffset)),s.rotationPivot&&c.setPosition(Ei.fromArray(s.rotationPivot)),s.parentMatrixWorld&&(u.copy(s.parentMatrix),h.copy(s.parentMatrixWorld));const g=t.clone().multiply(n).multiply(i),m=new ge;m.extractRotation(h);const d=new ge;d.copyPosition(h);const _=d.clone().invert().multiply(h),x=m.clone().invert().multiply(_),M=r,w=new ge;if(p===0)w.copy(m).multiply(g).multiply(x).multiply(M);else if(p===1)w.copy(m).multiply(x).multiply(g).multiply(M);else{const Y=new ge().scale(new L().setFromMatrixScale(u)).clone().invert(),Q=x.clone().multiply(Y);w.copy(m).multiply(g).multiply(Q).multiply(M)}const y=c.clone().invert(),T=a.clone().invert();let P=e.clone().multiply(l).multiply(c).multiply(t).multiply(n).multiply(i).multiply(y).multiply(o).multiply(a).multiply(r).multiply(T);const v=new ge().copyPosition(P),A=h.clone().multiply(v);return f.copyPosition(A),P=f.clone().multiply(w),P.premultiply(h.invert()),P}function Xh(s){s=s||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return s===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[s]}function Oa(s){return s.split(",").map(function(t){return parseFloat(t)})}function qh(s,e,t){return e===void 0&&(e=0),t===void 0&&(t=s.byteLength),_o.decodeText(new Uint8Array(s,e,t))}function U_(s,e){for(let t=0,n=s.length,i=e.length;t<i;t++,n++)s[n]=e[t]}function z_(s,e,t,n){for(let i=t,r=0;i<n;i++,r++)s[r]=e[i];return s}function bc(s,e,t){return s.slice(0,e).concat(t).concat(s.slice(e))}class B_{constructor(e){this.modelLoader=new A_,this.modelLoader.load("/static/3d/bot.fbx",t=>{this.model=t,this.model.scale.set(.1,.1,.1),this.animationMixer=new $0(t),this.walkingClip=this.animationMixer.clipAction(t.animations[10]),this.jumpingClip=this.animationMixer.clipAction(t.animations[13]),this.standingClip=this.animationMixer.clipAction(t.animations[4]),this.idleClip=this.animationMixer.clipAction(t.animations[5]),this.danceClip=this.animationMixer.clipAction(t.animations[3]),this.deathClip=this.animationMixer.clipAction(t.animations[9]),this.waveClip=this.animationMixer.clipAction(t.animations[8]),this.distanceToWalk=0,this.walkingSpeed=25,this.jumpingBoost=0,this.walkingClip.clampWhenFinished=!0,window.robot=this,window.robotJump=this.jumpingClip,this.waveClip.loop=Va,this.waveClip.clampWhenFinished=!0,this.walkingMultiplier=1,this.isWalking=!1,this.isJumping=!1,this.jumpingClipId=this.jumpingClip.getClip().uuid,this.walkingClipId=this.walkingClip.getClip().uuid,this.deathClipId=this.deathClip.getClip().uuid,this.waveClipId=this.waveClip.getClip().uuid,this.sequencing=!1,this.clock=new ja,this.next=()=>{},this.animationMixer.addEventListener("finished",(n,i)=>this.__animFinishListener(n,i,this)),this.idleClip.timeScale=.1,this.__gameLoop(this),e(this)})}__animFinishListener(e,t,n){window.roboDispatch=e,window.robotEvent=t;let i=e;i==null&&(i=t),i.action.getClip().uuid==n.jumpingClipId&&(n.isJumping=!1,n.jumpingClip.fadeOut(.1)),i.action.getClip().uuid==n.waveClipId&&(n.waveClip.fadeOut(.1),n.idleClip.fadeIn(.1),n.idleClip.play()),n.nextAction&&n.nextAction(n,i)}pass(e,t){this.sequencing||(this.sequencing=!0,this.jump(e),this.nextAction=(n,i)=>{i.action.getClip().uuid==n.jumpingClipId&&(n.walk(t),n.nextAction=void 0)})}fail(){this.animationMixer.stopAllAction(),this.deathClip.enabled=!0,this.deathClip.loop=Va,this.deathClip.clampWhenFinished=!0,this.deathClip.play()}win(){this.animationMixer.stopAllAction(),this.danceClip.play()}wave(){this.waveClip.reset().play()}walk(e=1){this.distanceToWalk=e,this.isWalking||(this.isWalking=!0,this.walkingClip.reset(),this.walkingClip.fadeIn(.1),this.walkingClip.play())}jump(e=84){this.isJumping||(this.isJumping=!0,this.distanceToJump=e,this.jumpingSpeed=e/.25,this.jumpingClip.reset(),this.jumpingClip.repetitions=1,this.jumpingClip.clampWhenFinished=!0,this.jumpingClip.weight=4,this.jumpingClip.play())}rotate(e){this.isWalking?this.angle=e*this.walkingMultiplier:this.angle=e}__gameLoop(e){e.clock==null&&(e.clock=new ja);const t=1,n=e.clock.getDelta(),i=e.model,r=t*n;if(e.angle>0){i.rotation.y+=r;const o=e.angle-r;e.angle=o<0?0:o}if(e.angle<0){i.rotation.y-=r;const o=e.angle+r;e.angle=o>0?0:o}const a=i.rotation.y;if(e.distanceToWalk>0){const o=e.walkingMultiplier*(e.walkingSpeed+e.jumpingBoost)*n,l=Math.sin(a)*o,c=Math.cos(a)*o;e.model.position.add(new L(l,0,c)),e.distanceToWalk=Math.max(e.distanceToWalk-o,0)}else e.isWalking&&(e.walkingClip.fadeOut(.1),e.isWalking=!1,e.sequencing=!1,e.next());if(this.isJumping&&this.jumpingClip.time>.2&&this.jumpingClip.time<.45){let o=n*e.jumpingSpeed;o+=Math.min(0,e.distanceToJump-o);const l=Math.sin(a)*o,c=Math.cos(a)*o;e.model.position.add(new L(l,0,c)),e.distanceToJump=Math.max(e.distanceToJump-o,0)}e.animationMixer.update(n),requestAnimationFrame(()=>e.__gameLoop(e))}}function Ai(s=8){var e=-Math.random()*s+Math.random()*s;return e}function Ro(s=600,e=25,t=1){const n=new Xe,i=new w0({color:16777215,side:Jt,emissive:16777215,emissiveIntensity:e}),r=new ri(t);for(var a=1;a<300;a++){const o=new tt(r,i);o.position.set(Ai(s),Ai(s),Ai(s)),o.rotation.set(Ai(),Ai(),Ai()),n.add(o)}return n}function jh(s=10,e=40,t=e,n=2){const r=8-n,a=new ni(e,8,t),o=new ni(e-n,r,t-n),l=new Qt;let c=0;for(let u=0;u<s;u++){const f=new tt(a,Tc),p=new tt(o,k_),g=(8+r)*u;c=g+r,f.position.y=g,p.position.y=c,l.add(f,p)}const h=new tt(a,Tc);return h.position.y=c+r,l.add(h),l.position.y=8/2,l}const Tc=new qi({color:4287137928,metalness:.6,depthTest:!0,depthWrite:!0,flatShading:!0,roughness:.3}),k_=new qi({color:4278255873,metalness:.5,depthTest:!0,depthWrite:!0,flatShading:!0,roughness:0});class Mt{constructor(e,t,n){this.width=e,this.length=t,this.stories=n}}const Ec=[new Mt(40,130,100),new Mt(50,100,85),new Mt(50,110,95),new Mt(70,115,110),new Mt(20,90,80),new Mt(30,80,96),new Mt(40,85,110),new Mt(40,125,85),new Mt(50,126,100),new Mt(50,123,95),new Mt(70,113,80),new Mt(20,105,117),new Mt(30,95,107),new Mt(40,140,80)];function V_(s=3){const t=new Qt;let n=0;for(;s>0;){s-=3;for(let i=0;i<Ec.length;i++){const r=Ec[i],a=jh(r.stories,r.width,r.length,.8);a.position.z=n+r.length/2,t.add(a),n+=r.length+35}}return t}const Yh=new Xs,G_=Yh.load("/static/3d/cloud.png"),W_=Yh.load("/static/3d/earth_cloud_displacement1.jpg"),Ac=new qi({color:4292072403,side:Jt,transparent:!0,alphaMap:G_,displacementMap:W_});function H_(s=600){const e=new Qt,t=new tt(new ri(s,s/10,s/10),Ac),n=new tt(new ri(s,s/10,s/10),Ac);return t.rotation.z=Math.PI-.5,e.add(t,n),e}const X_=new Xs,Fo=X_.load("/static/3d/cloudp.png");Fo.magFilter=Uc;Fo.minFilter=Uc;function q_(){const s=new Qt,e=new Dr(64,64);new fo(2236962,-100,3e3);const t=new qi({map:Fo,transparent:!0,depthTest:!0,depthWrite:!0});for(var n=0;n<5e3;n++){const i=new tt(e,t);i.position.z=Math.random()*1e3-500,i.position.y=-Math.random()*Math.random()*200-15,i.position.x=n/10,i.rotation.x=Math.random()*Math.PI,i.rotation.y=-Math.PI/2,i.scale.x=i.scale.y=Math.random()*Math.random()*1.5+.5,s.add(i)}return s}class j_{constructor(e,t=()=>{}){this.gameTime=20,this.totalTime=0,this.attempts=3,this.wrongElms=[],this.qContainer=document.getElementById("container"),this.question=document.getElementById("question"),this.choices=Array.from(document.getElementsByClassName("choice-text")),this.progressText=document.getElementById("progressText"),this.scoreText=document.getElementById("score"),this.progressBarFull=document.getElementById("progressBarFull"),this.attemptsElm=document.getElementById("attempts"),this.currentQuestion={},this.acceptingAnswers=!1,this.score=0,this.questionCounter=0,this.availableQuesions=[],this.questions=e,this.time=document.getElementById("timer"),this.startingTime=this.gameTime,this.time.innerHTML="Time Left: "+this.startingTime,this.answerCallBack=t,this.CORRECT_BONUS=10,this.MAX_QUESTIONS=3,this.choices.forEach(n=>{n.addEventListener("click",i=>{if(!this.acceptingAnswers)return;this.acceptingAnswers=!1,this.ticker&&clearInterval(this.ticker),this.ticker=void 0;const r=i.target,o=r.dataset.number==this.currentQuestion.answer,l=o?"correct":"incorrect";localStorage.setItem("mostRecentScore",this.score),r.parentElement.classList.add(l),o?(this.incrementScore(this.CORRECT_BONUS),this.totalTime+=this.gameTime-this.startingTime,setTimeout(()=>{r.parentElement.classList.remove(l),this.hide(),t(!0,this.score,this.totalTime)},1e3)):(this.attempts--,this.attemptsElm.innerText=this.attempts,this.attempts>0?setTimeout(()=>{r.parentElement.classList.remove(l),this.ticker=setInterval(()=>this.updateTimer(this),1e3),this.acceptingAnswers=!0},1e3):setTimeout(()=>{r.parentElement.classList.remove(l),this.hide(),t(o,this.score,this.totalTime)},1e3))})}),this.questionCounter=0,this.score=0,this.availableQuesions=[...e]}show(){this.qContainer.style.zIndex=99}hide(){document.getElementById("postScore").innerText="Score: "+this.score,this.qContainer.style.zIndex=1}next(){this.startingTime=this.gameTime,this.time.innerHTML="Time Left: "+this.startingTime,this.ticker=setInterval(()=>this.updateTimer(this),1e3),this.getNewQuestion(),this.show()}incrementScore(e){this.score+=e,this.scoreText.innerText=this.score}updateTimer(e){e.startingTime--,e.startingTime==-1?(clearInterval(e.ticker),e.hide(),e.answerCallBack(!1)):e.time.innerHTML="Time Left: "+e.startingTime}getNewQuestion(){if(this.availableQuesions.length===0||this.questionCounter>=this.MAX_QUESTIONS){localStorage.setItem("mostRecentScore",this.score),location.reload();return}this.questionCounter++,this.progressText.innerText=`Question ${this.questionCounter}/${this.MAX_QUESTIONS}`,this.progressBarFull.style.width=`${this.questionCounter/this.MAX_QUESTIONS*100}%`;const e=Math.floor(Math.random()*this.availableQuesions.length);this.currentQuestion=this.availableQuesions[e],this.question.innerText=this.currentQuestion.question,this.choices.forEach(t=>{const n=t.dataset.number;t.innerText=this.currentQuestion["choice"+n]}),this.availableQuesions.splice(e,1),this.acceptingAnswers=!0}}const Y_=["/res/ransomewareQuestions.json","/res/sessionHijackingQuestions.json","/res/trojanHorseQuestions.json","/res/bruteForceQuestions.json"],Z_=["/game/ransomeware/end","/game/sessionhijacking/end","/game/trojanhorse/end","/game/bruteforce/end"],Oo=parseInt(document.getElementById("levelNum").textContent),K_=Y_[Oo-1],Cc=Z_[Oo-1],$_=new Xs;function Ui(s){return $_.load("/static/3d/"+s)}class hs{constructor(e=4278190080,t=4279308561,n=.0015,i=!1,r=Ui("moon.jpg"),a=Ui("displacement.jpg"),o=4294967295){this.baseColor=e,this.fogColor=t,this.fogIntensity=n,this.slowStars=i,this.moonTexture=r,this.displacementMap=a,this.moonColor=o}}let mt;switch(Oo){case 1:const s=Ui("sun.jpg");mt=new hs(4278235099,4278235099,.001,!0,s,s,4294935061);break;case 2:const e=Ui("bsun.png");mt=new hs(4278235099,4293435483,.0015,!0,e,e,4292894725);break;case 4:const t=Ui("bmoon.png");mt=new hs(4278190080,4279308561,.0013,!1,t,t,4292560953);break;default:mt=new hs;break}const J_=new ja,Q_=1200,Lc=new _n,Zn=new L,si=150,js=30,ev=4,Xn={},Fn=new m0;Fn.background=new Me(mt.baseColor);Fn.fog=new uo(mt.fogColor,mt.fogIntensity);const tv=new tt(new ri(2e3),new qi({color:mt.fogColor,side:Dt}));Fn.add(tv);const Ds=new pt(75,window.innerWidth/window.innerHeight,.1,5e3);Ds.position.set(-70,50,20);const Jn=new pt(30,window.innerWidth/window.innerHeight,.1,5e3);Jn.position.set(-200,70,20);let vr=Jn,to=0,no=0;function Pc(s=!1){const e=document.getElementById("nextButton"),t=document.getElementById("restartButton"),n=document.getElementById("lostMessage"),i=document.getElementById("message");s&&(i.textContent="You Win",i.style.color="green"),e&&(e.onclick=()=>{location.href=Cc+"?score="+to+"&time="+no}),t&&(t.onclick=()=>{location.reload()}),n?n.style.display="flex":setTimeout(()=>{location.href=Cc+"?score="+to+"&time="+no},2e3)}const Ur=new nh({canvas:document.querySelector("#renderer"),antialias:!0});Ur.setPixelRatio(window.devicePixelRatio);Ur.setSize(window.innerWidth,window.innerHeight);const nv=new J0(600);let Na=0,cr,Ic;const Fi=new B_(async s=>{const e=s.model;Fn.add(e),Lc.setFromObject(e),Lc.getSize(Zn),e.position.z=Zn.z/2;const t=(o,l,c)=>{if(Na++,to=l,no=c,o){let h=si-Zn.z;Na==cr.length&&(h-=30),s.pass(js+Zn.z,h)}else Pc(),s.fail()};cr=await(await fetch(K_)).json(),Ic=new j_(cr,t);const i=()=>{Na<cr.length?Ic.next():(s.win(),Pc(!0))};s.next=i;const r=V_(cr.length);r.position.x=400;const a=new _n;a.setFromObject(r),r.position.add(new L(0,-Q_,-(a.getSize(new L).z/2))),Fn.add(r),requestAnimationFrame(cv)}),iv=new oh(16777215,.4),Rs=new tt(new ri(200,1800,1800),new ds({map:mt.moonTexture,displacementMap:mt.displacementMap,displacementScale:0,bumpMap:mt.moonTexture,bumpScale:.04,reflectivity:0,shininess:0,emissive:mt.moonColor,emissiveMap:mt.moonTexture,emissiveIntensity:12})),Zh=new bs(16777215,1,5e3);Zh.position.set(1200,350,0);Rs.position.set(1200,350,0);const Fs=Ro();Fs.position.set(1300,100,0);const Os=Ro(650,15);Os.position.set(1100,60,-window.innerWidth/2);const Ns=Ro(650,15);Ns.position.set(1100,70,window.innerWidth/2);const xr=new go(4294967295,.4),rv=new lh(xr),yr=new go(4294967295,.4),sv=new lh(yr),Kh=H_(window.innerWidth);Kh.position.set(600,-window.innerWidth,0);const Ys=q_(),$h=new _n;$h.setFromObject(Ys);const Ua=$h.getCenter(new L);Ys.position.y-300;Ys.position.x-100;const av=new bs(4294967295,1,8e3,0);av.position.set(Ua.x,Ua.y,Ua.z);const Dc=new _n,Jh=[];let io=si/2;for(let s=0;s<ev;s++){const e=jh(50,120,si);e.position.z=io,io+=si+js,Dc.setFromObject(e),e.position.y=-(Dc.getSize(new L).y-4),Jh.push(e)}const ov=Ui("finish.png"),No=new tt(new Dr(120,30),new qi({map:ov,metalness:.001,roughness:.1}));No.rotateX(-Math.PI/2);No.position.z=io-(js+si);Fn.add(nv,iv,Zh,Rs,Fs,Os,Ns,Jn,xr,yr,rv,sv,Kh,Ys,No,...Jh);Ur.render(Fn,vr);const lv=new Q0(Ds,Ur.domElement);function cv(){document.getElementById("loading").style.zIndex=0,Fi.wave(),Fi.walk(si-Zn.z),Qh()}let dr=0,pr=0;function Qh(){requestAnimationFrame(Qh);const s=J_.getDelta(),e=50;if(Xn.w?dr+=s*e:Xn.s&&(dr-=s*e),Xn.a?pr-=s*e:Xn.d&&(pr+=s*e),Rs.rotateY(1e-4),Rs.rotateZ(2e-4),Fi.model){const t=Fi.model,n=t.position.clone();xr.position.set(n.x-100,n.y+50,n.z),xr.target.position.set(n.x,n.y,n.z),xr.target.updateWorldMatrix(),yr.position.set(n.x,n.y+100,n.z),yr.target.position.set(n.x,n.y,n.z),yr.target.updateWorldMatrix(),Jn.position.set(n.x,n.y,n.z),Jn.position.add(new L(-400+dr,100,20+pr)),Jn.lookAt(t.position.clone().add(new L(0+dr,70,20+pr)))}Xn.f?Fi.fail():Xn.p&&Fi.pass(js+Zn.z,si-Zn.z),Fs.rotation.y+=1e-4,Fs.rotation.x+=mt.slowStars?2e-4:5e-4,Os.rotation.y+=1e-4,Os.rotation.x+=mt.slowStars?3e-4:5e-4,Ns.rotation.y+=1e-4,Ns.rotation.x+=mt.slowStars?4e-4:5e-4,lv.update(),Ur.render(Fn,vr)}function eu(s){Xn[s.key]=s.type=="keydown",s.key=="c"&&s.type!="keydown"&&(dr=0,pr=0)}function hv(){vr.uuid==Ds.uuid?vr=Jn:vr=Ds}window.onkeyup=eu;window.onkeydown=eu;window.changeCamera=hv;
