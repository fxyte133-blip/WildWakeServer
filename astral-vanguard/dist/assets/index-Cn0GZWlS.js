(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $c="177",kf=0,Pl=1,Vf=2,hu=1,uu=2,Zn=3,mi=0,Ye=1,Ge=2,ui=0,Ui=1,Pn=2,Dl=3,Ll=4,Hf=5,Pi=100,Gf=101,Wf=102,Xf=103,qf=104,Yf=200,Kf=201,$f=202,Zf=203,qa=204,Ya=205,Jf=206,jf=207,Qf=208,td=209,ed=210,nd=211,id=212,rd=213,sd=214,Ka=0,$a=1,Za=2,dr=3,Ja=4,ja=5,Qa=6,tc=7,fu=0,od=1,ad=2,fi=0,cd=1,ld=2,hd=3,du=4,ud=5,fd=6,dd=7,pu=300,pr=301,mr=302,ec=303,nc=304,Bo=306,ic=1e3,Li=1001,rc=1002,ln=1003,pd=1004,Ms=1005,Un=1006,jo=1007,Ii=1008,kn=1009,mu=1010,gu=1011,jr=1012,Zc=1013,Fi=1014,Nn=1015,ls=1016,Jc=1017,jc=1018,Qr=1020,_u=35902,vu=1021,xu=1022,Cn=1023,ts=1026,es=1027,Qc=1028,tl=1029,yu=1030,el=1031,nl=1033,lo=33776,ho=33777,uo=33778,fo=33779,sc=35840,oc=35841,ac=35842,cc=35843,lc=36196,hc=37492,uc=37496,fc=37808,dc=37809,pc=37810,mc=37811,gc=37812,_c=37813,vc=37814,xc=37815,yc=37816,Mc=37817,Sc=37818,wc=37819,Ec=37820,bc=37821,po=36492,Tc=36494,Ac=36495,Mu=36283,Rc=36284,Cc=36285,Pc=36286,md=3200,gd=3201,Su=0,_d=1,li="",en="srgb",gr="srgb-linear",So="linear",_e="srgb",Gi=7680,Il=519,vd=512,xd=513,yd=514,wu=515,Md=516,Sd=517,wd=518,Ed=519,Dc=35044,Ul="300 es",jn=2e3,wo=2001;class yr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const r=i[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const We=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Nl=1234567;const Yr=Math.PI/180,ns=180/Math.PI;function Bn(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(We[n&255]+We[n>>8&255]+We[n>>16&255]+We[n>>24&255]+"-"+We[t&255]+We[t>>8&255]+"-"+We[t>>16&15|64]+We[t>>24&255]+"-"+We[e&63|128]+We[e>>8&255]+"-"+We[e>>16&255]+We[e>>24&255]+We[i&255]+We[i>>8&255]+We[i>>16&255]+We[i>>24&255]).toLowerCase()}function ne(n,t,e){return Math.max(t,Math.min(e,n))}function il(n,t){return(n%t+t)%t}function bd(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function Td(n,t,e){return n!==t?(e-n)/(t-n):0}function Kr(n,t,e){return(1-e)*n+e*t}function Ad(n,t,e,i){return Kr(n,t,1-Math.exp(-e*i))}function Rd(n,t=1){return t-Math.abs(il(n,t*2)-t)}function Cd(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Pd(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Dd(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Ld(n,t){return n+Math.random()*(t-n)}function Id(n){return n*(.5-Math.random())}function Ud(n){n!==void 0&&(Nl=n);let t=Nl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Nd(n){return n*Yr}function Fd(n){return n*ns}function Od(n){return(n&n-1)===0&&n!==0}function Bd(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function zd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function kd(n,t,e,i,r){const s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+i)/2),h=o((t+i)/2),u=s((t-i)/2),d=o((t-i)/2),p=s((i-t)/2),g=o((i-t)/2);switch(r){case"XYX":n.set(a*h,c*u,c*d,a*l);break;case"YZY":n.set(c*d,a*h,c*u,a*l);break;case"ZXZ":n.set(c*u,c*d,a*h,a*l);break;case"XZX":n.set(a*h,c*g,c*p,a*l);break;case"YXY":n.set(c*p,a*h,c*g,a*l);break;case"ZYZ":n.set(c*g,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Rn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ge(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const He={DEG2RAD:Yr,RAD2DEG:ns,generateUUID:Bn,clamp:ne,euclideanModulo:il,mapLinear:bd,inverseLerp:Td,lerp:Kr,damp:Ad,pingpong:Rd,smoothstep:Cd,smootherstep:Pd,randInt:Dd,randFloat:Ld,randFloatSpread:Id,seededRandom:Ud,degToRad:Nd,radToDeg:Fd,isPowerOfTwo:Od,ceilPowerOfTwo:Bd,floorPowerOfTwo:zd,setQuaternionFromProperEuler:kd,normalize:ge,denormalize:Rn};class at{constructor(t=0,e=0){at.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ne(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ne(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class hs{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let c=i[r+0],l=i[r+1],h=i[r+2],u=i[r+3];const d=s[o+0],p=s[o+1],g=s[o+2],x=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(u!==x||c!==d||l!==p||h!==g){let m=1-a;const f=c*d+l*p+h*g+u*x,b=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){const L=Math.sqrt(M),C=Math.atan2(L,f*b);m=Math.sin(m*C)/L,a=Math.sin(a*C)/L}const _=a*b;if(c=c*m+d*_,l=l*m+p*_,h=h*m+g*_,u=u*m+x*_,m===1-a){const L=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=L,l*=L,h*=L,u*=L}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],h=i[r+3],u=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return t[e]=a*g+h*u+c*p-l*d,t[e+1]=c*g+h*d+l*u-a*p,t[e+2]=l*g+h*p+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(r/2),u=a(s/2),d=c(i/2),p=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"YZX":this._x=d*h*u+l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u-d*p*g;break;case"XZY":this._x=d*h*u-l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(i>a&&i>u){const p=2*Math.sqrt(1+i-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>u){const p=2*Math.sqrt(1+a-i-u);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-i-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ne(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-i*l,this._z=s*h+o*l+i*c-r*a,this._w=o*h-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(t=0,e=0,i=0){A.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*i),h=2*(a*e-s*r),u=2*(s*i-o*e);return this.x=e+c*l+o*u-a*h,this.y=i+c*h+a*l-s*u,this.z=r+c*u+s*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ne(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Qo.copy(this).projectOnVector(t),this.sub(Qo)}reflect(t){return this.sub(Qo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ne(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qo=new A,Fl=new hs;class jt{constructor(t,e,i,r,s,o,a,c,l){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l)}set(t,e,i,r,s,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],p=i[5],g=i[8],x=r[0],m=r[3],f=r[6],b=r[1],M=r[4],_=r[7],L=r[2],C=r[5],P=r[8];return s[0]=o*x+a*b+c*L,s[3]=o*m+a*M+c*C,s[6]=o*f+a*_+c*P,s[1]=l*x+h*b+u*L,s[4]=l*m+h*M+u*C,s[7]=l*f+h*_+u*P,s[2]=d*x+p*b+g*L,s[5]=d*m+p*M+g*C,s[8]=d*f+p*_+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-i*s*h+i*a*c+r*s*l-r*o*c}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*s,p=l*s-o*c,g=e*u+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=u*x,t[1]=(r*l-h*i)*x,t[2]=(a*i-r*o)*x,t[3]=d*x,t[4]=(h*e-r*c)*x,t[5]=(r*s-a*e)*x,t[6]=p*x,t[7]=(i*c-l*e)*x,t[8]=(o*e-i*s)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ta.makeScale(t,e)),this}rotate(t){return this.premultiply(ta.makeRotation(-t)),this}translate(t,e){return this.premultiply(ta.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ta=new jt;function Eu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Eo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Vd(){const n=Eo("canvas");return n.style.display="block",n}const Ol={};function hr(n){n in Ol||(Ol[n]=!0,console.warn(n))}function Hd(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function Gd(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Wd(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Bl=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zl=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Xd(){const n={enabled:!0,workingColorSpace:gr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===_e&&(r.r=Qn(r.r),r.g=Qn(r.g),r.b=Qn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_e&&(r.r=ur(r.r),r.g=ur(r.g),r.b=ur(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===li?So:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return hr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return hr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[gr]:{primaries:t,whitePoint:i,transfer:So,toXYZ:Bl,fromXYZ:zl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:en},outputColorSpaceConfig:{drawingBufferColorSpace:en}},[en]:{primaries:t,whitePoint:i,transfer:_e,toXYZ:Bl,fromXYZ:zl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:en}}}),n}const ue=Xd();function Qn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ur(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Wi;class qd{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Wi===void 0&&(Wi=Eo("canvas")),Wi.width=t.width,Wi.height=t.height;const r=Wi.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=Wi}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Eo("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Qn(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Qn(e[i]/255)*255):e[i]=Qn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Yd=0;class rl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=Bn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ea(r[o].image)):s.push(ea(r[o]))}else s=ea(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function ea(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?qd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kd=0;const na=new A;class Ke extends yr{constructor(t=Ke.DEFAULT_IMAGE,e=Ke.DEFAULT_MAPPING,i=Li,r=Li,s=Un,o=Ii,a=Cn,c=kn,l=Ke.DEFAULT_ANISOTROPY,h=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=Bn(),this.name="",this.source=new rl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(na).x}get height(){return this.source.getSize(na).y}get depth(){return this.source.getSize(na).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==pu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ic:t.x=t.x-Math.floor(t.x);break;case Li:t.x=t.x<0?0:1;break;case rc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ic:t.y=t.y-Math.floor(t.y);break;case Li:t.y=t.y<0?0:1;break;case rc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=pu;Ke.DEFAULT_ANISOTROPY=1;class Pe{constructor(t=0,e=0,i=0,r=1){Pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],g=c[9],x=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,_=(p+1)/2,L=(f+1)/2,C=(h+d)/4,P=(u+x)/4,D=(g+m)/4;return M>_&&M>L?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=C/i,s=P/i):_>L?_<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),i=C/r,s=D/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=P/s,r=D/s),this.set(i,r,s,e),this}let b=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-x)/b,this.z=(d-h)/b,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this.w=ne(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this.w=ne(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ne(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $d extends yr{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Pe(0,0,t,e),this.scissorTest=!1,this.viewport=new Pe(0,0,t,e);const r={width:t,height:e,depth:i.depth},s=new Ke(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:Un,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new rl(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Oi extends $d{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class bu extends Ke{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Zd extends Ke{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zi{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(En.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(En.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=En.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,En):En.fromBufferAttribute(s,o),En.applyMatrix4(t.matrixWorld),this.expandByPoint(En);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ss.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ss.copy(i.boundingBox)),Ss.applyMatrix4(t.matrixWorld),this.union(Ss)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,En),En.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Tr),ws.subVectors(this.max,Tr),Xi.subVectors(t.a,Tr),qi.subVectors(t.b,Tr),Yi.subVectors(t.c,Tr),ni.subVectors(qi,Xi),ii.subVectors(Yi,qi),xi.subVectors(Xi,Yi);let e=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-xi.z,xi.y,ni.z,0,-ni.x,ii.z,0,-ii.x,xi.z,0,-xi.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-xi.y,xi.x,0];return!ia(e,Xi,qi,Yi,ws)||(e=[1,0,0,0,1,0,0,0,1],!ia(e,Xi,qi,Yi,ws))?!1:(Es.crossVectors(ni,ii),e=[Es.x,Es.y,Es.z],ia(e,Xi,qi,Yi,ws))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,En).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(En).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Xn=[new A,new A,new A,new A,new A,new A,new A,new A],En=new A,Ss=new zi,Xi=new A,qi=new A,Yi=new A,ni=new A,ii=new A,xi=new A,Tr=new A,ws=new A,Es=new A,yi=new A;function ia(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){yi.fromArray(n,s);const a=r.x*Math.abs(yi.x)+r.y*Math.abs(yi.y)+r.z*Math.abs(yi.z),c=t.dot(yi),l=e.dot(yi),h=i.dot(yi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Jd=new zi,Ar=new A,ra=new A;class ki{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Jd.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ar.subVectors(t,this.center);const e=Ar.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Ar,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ra.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ar.copy(t.center).add(ra)),this.expandByPoint(Ar.copy(t.center).sub(ra))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const qn=new A,sa=new A,bs=new A,ri=new A,oa=new A,Ts=new A,aa=new A;class zo{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(qn.copy(this.origin).addScaledVector(this.direction,e),qn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){sa.copy(t).add(e).multiplyScalar(.5),bs.copy(e).sub(t).normalize(),ri.copy(this.origin).sub(sa);const s=t.distanceTo(e)*.5,o=-this.direction.dot(bs),a=ri.dot(this.direction),c=-ri.dot(bs),l=ri.lengthSq(),h=Math.abs(1-o*o);let u,d,p,g;if(h>0)if(u=o*c-a,d=o*a-c,g=s*h,u>=0)if(d>=-g)if(d<=g){const x=1/h;u*=x,d*=x,p=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-c),s),p=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+l):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-c),s),p=-u*u+d*(d+2*c)+l);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(sa).addScaledVector(bs,d),p}intersectSphere(t,e){qn.subVectors(t.center,this.origin);const i=qn.dot(this.direction),r=qn.dot(qn)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,r=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,r=(t.min.x-d.x)*l),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,qn)!==null}intersectTriangle(t,e,i,r,s){oa.subVectors(e,t),Ts.subVectors(i,t),aa.crossVectors(oa,Ts);let o=this.direction.dot(aa),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ri.subVectors(this.origin,t);const c=a*this.direction.dot(Ts.crossVectors(ri,Ts));if(c<0)return null;const l=a*this.direction.dot(oa.cross(ri));if(l<0||c+l>o)return null;const h=-a*ri.dot(aa);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class de{constructor(t,e,i,r,s,o,a,c,l,h,u,d,p,g,x,m){de.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l,h,u,d,p,g,x,m)}set(t,e,i,r,s,o,a,c,l,h,u,d,p,g,x,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new de().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Ki.setFromMatrixColumn(t,0).length(),s=1/Ki.setFromMatrixColumn(t,1).length(),o=1/Ki.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=o*h,p=o*u,g=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+g*l,e[5]=d-x*l,e[9]=-a*c,e[2]=x-d*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,p=c*u,g=l*h,x=l*u;e[0]=d+x*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=x+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,p=c*u,g=l*h,x=l*u;e[0]=d-x*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,p=o*u,g=a*h,x=a*u;e[0]=c*h,e[4]=g*l-p,e[8]=d*l+x,e[1]=c*u,e[5]=x*l+d,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,p=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=x-d*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*u+g,e[10]=d-x*u}else if(t.order==="XZY"){const d=o*c,p=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+x,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jd,t,Qd)}lookAt(t,e,i){const r=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),si.crossVectors(i,on),si.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),si.crossVectors(i,on)),si.normalize(),As.crossVectors(on,si),r[0]=si.x,r[4]=As.x,r[8]=on.x,r[1]=si.y,r[5]=As.y,r[9]=on.y,r[2]=si.z,r[6]=As.z,r[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],p=i[13],g=i[2],x=i[6],m=i[10],f=i[14],b=i[3],M=i[7],_=i[11],L=i[15],C=r[0],P=r[4],D=r[8],S=r[12],y=r[1],I=r[5],k=r[9],F=r[13],q=r[2],K=r[6],V=r[10],B=r[14],H=r[3],ct=r[7],tt=r[11],_t=r[15];return s[0]=o*C+a*y+c*q+l*H,s[4]=o*P+a*I+c*K+l*ct,s[8]=o*D+a*k+c*V+l*tt,s[12]=o*S+a*F+c*B+l*_t,s[1]=h*C+u*y+d*q+p*H,s[5]=h*P+u*I+d*K+p*ct,s[9]=h*D+u*k+d*V+p*tt,s[13]=h*S+u*F+d*B+p*_t,s[2]=g*C+x*y+m*q+f*H,s[6]=g*P+x*I+m*K+f*ct,s[10]=g*D+x*k+m*V+f*tt,s[14]=g*S+x*F+m*B+f*_t,s[3]=b*C+M*y+_*q+L*H,s[7]=b*P+M*I+_*K+L*ct,s[11]=b*D+M*k+_*V+L*tt,s[15]=b*S+M*F+_*B+L*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],x=t[7],m=t[11],f=t[15];return g*(+s*c*u-r*l*u-s*a*d+i*l*d+r*a*p-i*c*p)+x*(+e*c*p-e*l*d+s*o*d-r*o*p+r*l*h-s*c*h)+m*(+e*l*u-e*a*p-s*o*u+i*o*p+s*a*h-i*l*h)+f*(-r*a*h-e*c*u+e*a*d+r*o*u-i*o*d+i*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],x=t[13],m=t[14],f=t[15],b=u*m*l-x*d*l+x*c*p-a*m*p-u*c*f+a*d*f,M=g*d*l-h*m*l-g*c*p+o*m*p+h*c*f-o*d*f,_=h*x*l-g*u*l+g*a*p-o*x*p-h*a*f+o*u*f,L=g*u*c-h*x*c-g*a*d+o*x*d+h*a*m-o*u*m,C=e*b+i*M+r*_+s*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return t[0]=b*P,t[1]=(x*d*s-u*m*s-x*r*p+i*m*p+u*r*f-i*d*f)*P,t[2]=(a*m*s-x*c*s+x*r*l-i*m*l-a*r*f+i*c*f)*P,t[3]=(u*c*s-a*d*s-u*r*l+i*d*l+a*r*p-i*c*p)*P,t[4]=M*P,t[5]=(h*m*s-g*d*s+g*r*p-e*m*p-h*r*f+e*d*f)*P,t[6]=(g*c*s-o*m*s-g*r*l+e*m*l+o*r*f-e*c*f)*P,t[7]=(o*d*s-h*c*s+h*r*l-e*d*l-o*r*p+e*c*p)*P,t[8]=_*P,t[9]=(g*u*s-h*x*s-g*i*p+e*x*p+h*i*f-e*u*f)*P,t[10]=(o*x*s-g*a*s+g*i*l-e*x*l-o*i*f+e*a*f)*P,t[11]=(h*a*s-o*u*s-h*i*l+e*u*l+o*i*p-e*a*p)*P,t[12]=L*P,t[13]=(h*x*r-g*u*r+g*i*d-e*x*d-h*i*m+e*u*m)*P,t[14]=(g*a*r-o*x*r-g*i*c+e*x*c+o*i*m-e*a*m)*P,t[15]=(o*u*r-h*a*r+h*i*c-e*u*c-o*i*d+e*a*d)*P,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,c=t.z,l=s*o,h=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+i,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,h=o+o,u=a+a,d=s*l,p=s*h,g=s*u,x=o*h,m=o*u,f=a*u,b=c*l,M=c*h,_=c*u,L=i.x,C=i.y,P=i.z;return r[0]=(1-(x+f))*L,r[1]=(p+_)*L,r[2]=(g-M)*L,r[3]=0,r[4]=(p-_)*C,r[5]=(1-(d+f))*C,r[6]=(m+b)*C,r[7]=0,r[8]=(g+M)*P,r[9]=(m-b)*P,r[10]=(1-(d+x))*P,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=Ki.set(r[0],r[1],r[2]).length();const o=Ki.set(r[4],r[5],r[6]).length(),a=Ki.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],bn.copy(this);const l=1/s,h=1/o,u=1/a;return bn.elements[0]*=l,bn.elements[1]*=l,bn.elements[2]*=l,bn.elements[4]*=h,bn.elements[5]*=h,bn.elements[6]*=h,bn.elements[8]*=u,bn.elements[9]*=u,bn.elements[10]*=u,e.setFromRotationMatrix(bn),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=jn){const c=this.elements,l=2*s/(e-t),h=2*s/(i-r),u=(e+t)/(e-t),d=(i+r)/(i-r);let p,g;if(a===jn)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===wo)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=jn){const c=this.elements,l=1/(e-t),h=1/(i-r),u=1/(o-s),d=(e+t)*l,p=(i+r)*h;let g,x;if(a===jn)g=(o+s)*u,x=-2*u;else if(a===wo)g=s*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ki=new A,bn=new de,jd=new A(0,0,0),Qd=new A(1,1,1),si=new A,As=new A,on=new A,kl=new de,Vl=new hs;class Vn{constructor(t=0,e=0,i=0,r=Vn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],h=r[9],u=r[2],d=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(ne(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ne(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ne(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return kl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(kl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Vl.setFromEuler(this),this.setFromQuaternion(Vl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vn.DEFAULT_ORDER="XYZ";class sl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let tp=0;const Hl=new A,$i=new hs,Yn=new de,Rs=new A,Rr=new A,ep=new A,np=new hs,Gl=new A(1,0,0),Wl=new A(0,1,0),Xl=new A(0,0,1),ql={type:"added"},ip={type:"removed"},Zi={type:"childadded",child:null},ca={type:"childremoved",child:null};class Re extends yr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=Bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Re.DEFAULT_UP.clone();const t=new A,e=new Vn,i=new hs,r=new A(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new de},normalMatrix:{value:new jt}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=Re.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.multiply($i),this}rotateOnWorldAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.premultiply($i),this}rotateX(t){return this.rotateOnAxis(Gl,t)}rotateY(t){return this.rotateOnAxis(Wl,t)}rotateZ(t){return this.rotateOnAxis(Xl,t)}translateOnAxis(t,e){return Hl.copy(t).applyQuaternion(this.quaternion),this.position.add(Hl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Gl,t)}translateY(t){return this.translateOnAxis(Wl,t)}translateZ(t){return this.translateOnAxis(Xl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Rs.copy(t):Rs.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Rr,Rs,this.up):Yn.lookAt(Rs,Rr,this.up),this.quaternion.setFromRotationMatrix(Yn),r&&(Yn.extractRotation(r.matrixWorld),$i.setFromRotationMatrix(Yn),this.quaternion.premultiply($i.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ql),Zi.child=t,this.dispatchEvent(Zi),Zi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ip),ca.child=t,this.dispatchEvent(ca),ca.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Yn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ql),Zi.child=t,this.dispatchEvent(Zi),Zi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,t,ep),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,np,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Re.DEFAULT_UP=new A(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new A,Kn=new A,la=new A,$n=new A,Ji=new A,ji=new A,Yl=new A,ha=new A,ua=new A,fa=new A,da=new Pe,pa=new Pe,ma=new Pe;class xn{constructor(t=new A,e=new A,i=new A){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),Tn.subVectors(t,e),r.cross(Tn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){Tn.subVectors(r,e),Kn.subVectors(i,e),la.subVectors(t,e);const o=Tn.dot(Tn),a=Tn.dot(Kn),c=Tn.dot(la),l=Kn.dot(Kn),h=Kn.dot(la),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,p=(l*c-a*h)*d,g=(o*h-a*c)*d;return s.set(1-p-g,g,p)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(t,e,i,r,s,o,a,c){return this.getBarycoord(t,e,i,r,$n)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,$n.x),c.addScaledVector(o,$n.y),c.addScaledVector(a,$n.z),c)}static getInterpolatedAttribute(t,e,i,r,s,o){return da.setScalar(0),pa.setScalar(0),ma.setScalar(0),da.fromBufferAttribute(t,e),pa.fromBufferAttribute(t,i),ma.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(da,s.x),o.addScaledVector(pa,s.y),o.addScaledVector(ma,s.z),o}static isFrontFacing(t,e,i,r){return Tn.subVectors(i,e),Kn.subVectors(t,e),Tn.cross(Kn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Tn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),Tn.cross(Kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return xn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return xn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return xn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return xn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return xn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;Ji.subVectors(r,i),ji.subVectors(s,i),ha.subVectors(t,i);const c=Ji.dot(ha),l=ji.dot(ha);if(c<=0&&l<=0)return e.copy(i);ua.subVectors(t,r);const h=Ji.dot(ua),u=ji.dot(ua);if(h>=0&&u<=h)return e.copy(r);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(i).addScaledVector(Ji,o);fa.subVectors(t,s);const p=Ji.dot(fa),g=ji.dot(fa);if(g>=0&&p<=g)return e.copy(s);const x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(ji,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Yl.subVectors(s,r),a=(u-h)/(u-h+(p-g)),e.copy(r).addScaledVector(Yl,a);const f=1/(m+x+d);return o=x*f,a=d*f,e.copy(i).addScaledVector(Ji,o).addScaledVector(ji,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Tu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},Cs={h:0,s:0,l:0};function ga(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Qt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=en){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=ue.workingColorSpace){return this.r=t,this.g=e,this.b=i,ue.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=ue.workingColorSpace){if(t=il(t,1),e=ne(e,0,1),i=ne(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=ga(o,s,t+1/3),this.g=ga(o,s,t),this.b=ga(o,s,t-1/3)}return ue.colorSpaceToWorking(this,r),this}setStyle(t,e=en){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=en){const i=Tu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qn(t.r),this.g=Qn(t.g),this.b=Qn(t.b),this}copyLinearToSRGB(t){return this.r=ur(t.r),this.g=ur(t.g),this.b=ur(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=en){return ue.workingToColorSpace(Xe.copy(this),t),Math.round(ne(Xe.r*255,0,255))*65536+Math.round(ne(Xe.g*255,0,255))*256+Math.round(ne(Xe.b*255,0,255))}getHexString(t=en){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.workingToColorSpace(Xe.copy(this),e);const i=Xe.r,r=Xe.g,s=Xe.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-i)/u+2;break;case s:c=(i-r)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ue.workingColorSpace){return ue.workingToColorSpace(Xe.copy(this),e),t.r=Xe.r,t.g=Xe.g,t.b=Xe.b,t}getStyle(t=en){ue.workingToColorSpace(Xe.copy(this),t);const e=Xe.r,i=Xe.g,r=Xe.b;return t!==en?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(oi),this.setHSL(oi.h+t,oi.s+e,oi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(oi),t.getHSL(Cs);const i=Kr(oi.h,Cs.h,e),r=Kr(oi.s,Cs.s,e),s=Kr(oi.l,Cs.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xe=new Qt;Qt.NAMES=Tu;let rp=0;class gi extends yr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=Bn(),this.name="",this.type="Material",this.blending=Ui,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qa,this.blendDst=Ya,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Il,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gi,this.stencilZFail=Gi,this.stencilZPass=Gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ui&&(i.blending=this.blending),this.side!==mi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==qa&&(i.blendSrc=this.blendSrc),this.blendDst!==Ya&&(i.blendDst=this.blendDst),this.blendEquation!==Pi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==dr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Il&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class rn extends gi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=fu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ie=new A,Ps=new at;let sp=0;class yn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Dc,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ps.fromBufferAttribute(this,e),Ps.applyMatrix3(t),this.setXY(e,Ps.x,Ps.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Rn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ge(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Rn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Rn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Rn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Rn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),i=ge(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),i=ge(i,this.array),r=ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),i=ge(i,this.array),r=ge(r,this.array),s=ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Dc&&(t.usage=this.usage),t}}class Au extends yn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Ru extends yn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class re extends yn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let op=0;const dn=new de,_a=new Re,Qi=new A,an=new zi,Cr=new zi,ke=new A;class we extends yr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=Bn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Eu(t)?Ru:Au)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new jt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return dn.makeRotationFromQuaternion(t),this.applyMatrix4(dn),this}rotateX(t){return dn.makeRotationX(t),this.applyMatrix4(dn),this}rotateY(t){return dn.makeRotationY(t),this.applyMatrix4(dn),this}rotateZ(t){return dn.makeRotationZ(t),this.applyMatrix4(dn),this}translate(t,e,i){return dn.makeTranslation(t,e,i),this.applyMatrix4(dn),this}scale(t,e,i){return dn.makeScale(t,e,i),this.applyMatrix4(dn),this}lookAt(t){return _a.lookAt(t),_a.updateMatrix(),this.applyMatrix4(_a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new re(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];an.setFromBufferAttribute(s),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ki);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){const i=this.boundingSphere.center;if(an.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Cr.setFromBufferAttribute(a),this.morphTargetsRelative?(ke.addVectors(an.min,Cr.min),an.expandByPoint(ke),ke.addVectors(an.max,Cr.max),an.expandByPoint(ke)):(an.expandByPoint(Cr.min),an.expandByPoint(Cr.max))}an.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)ke.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(ke));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)ke.fromBufferAttribute(a,l),c&&(Qi.fromBufferAttribute(t,l),ke.add(Qi)),r=Math.max(r,i.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<i.count;D++)a[D]=new A,c[D]=new A;const l=new A,h=new A,u=new A,d=new at,p=new at,g=new at,x=new A,m=new A;function f(D,S,y){l.fromBufferAttribute(i,D),h.fromBufferAttribute(i,S),u.fromBufferAttribute(i,y),d.fromBufferAttribute(s,D),p.fromBufferAttribute(s,S),g.fromBufferAttribute(s,y),h.sub(l),u.sub(l),p.sub(d),g.sub(d);const I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(I),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(I),a[D].add(x),a[S].add(x),a[y].add(x),c[D].add(m),c[S].add(m),c[y].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let D=0,S=b.length;D<S;++D){const y=b[D],I=y.start,k=y.count;for(let F=I,q=I+k;F<q;F+=3)f(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const M=new A,_=new A,L=new A,C=new A;function P(D){L.fromBufferAttribute(r,D),C.copy(L);const S=a[D];M.copy(S),M.sub(L.multiplyScalar(L.dot(S))).normalize(),_.crossVectors(C,S);const I=_.dot(c[D])<0?-1:1;o.setXYZW(D,M.x,M.y,M.z,I)}for(let D=0,S=b.length;D<S;++D){const y=b[D],I=y.start,k=y.count;for(let F=I,q=I+k;F<q;F+=3)P(t.getX(F+0)),P(t.getX(F+1)),P(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new yn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new A,s=new A,o=new A,a=new A,c=new A,l=new A,h=new A,u=new A;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let p=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*h;for(let f=0;f<h;f++)d[g++]=l[p++]}return new yn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new we,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=t(c,i);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],p=t(d,i);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(r[c]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const r=t.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],u=s[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kl=new de,Mi=new zo,Ds=new ki,$l=new A,Ls=new A,Is=new A,Us=new A,va=new A,Ns=new A,Zl=new A,Fs=new A;class It extends Re{constructor(t=new we,e=new rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Ns.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],u=s[c];h!==0&&(va.fromBufferAttribute(u,t),o?Ns.addScaledVector(va,h):Ns.addScaledVector(va.sub(e),h))}e.add(Ns)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ds.copy(i.boundingSphere),Ds.applyMatrix4(s),Mi.copy(t.ray).recast(t.near),!(Ds.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(Ds,$l)===null||Mi.origin.distanceToSquared($l)>(t.far-t.near)**2))&&(Kl.copy(s).invert(),Mi.copy(t.ray).applyMatrix4(Kl),!(i.boundingBox!==null&&Mi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Mi)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],f=o[m.materialIndex],b=Math.max(m.start,p.start),M=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let _=b,L=M;_<L;_+=3){const C=a.getX(_),P=a.getX(_+1),D=a.getX(_+2);r=Os(this,f,t,i,l,h,u,C,P,D),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const b=a.getX(m),M=a.getX(m+1),_=a.getX(m+2);r=Os(this,o,t,i,l,h,u,b,M,_),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],f=o[m.materialIndex],b=Math.max(m.start,p.start),M=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let _=b,L=M;_<L;_+=3){const C=_,P=_+1,D=_+2;r=Os(this,f,t,i,l,h,u,C,P,D),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const b=m,M=m+1,_=m+2;r=Os(this,o,t,i,l,h,u,b,M,_),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function ap(n,t,e,i,r,s,o,a){let c;if(t.side===Ye?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,t.side===mi,a),c===null)return null;Fs.copy(a),Fs.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Fs);return l<e.near||l>e.far?null:{distance:l,point:Fs.clone(),object:n}}function Os(n,t,e,i,r,s,o,a,c,l){n.getVertexPosition(a,Ls),n.getVertexPosition(c,Is),n.getVertexPosition(l,Us);const h=ap(n,t,e,i,Ls,Is,Us,Zl);if(h){const u=new A;xn.getBarycoord(Zl,Ls,Is,Us,u),r&&(h.uv=xn.getInterpolatedAttribute(r,a,c,l,u,new at)),s&&(h.uv1=xn.getInterpolatedAttribute(s,a,c,l,u,new at)),o&&(h.normal=xn.getInterpolatedAttribute(o,a,c,l,u,new A),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new A,materialIndex:0};xn.getNormal(Ls,Is,Us,d.normal),h.face=d,h.barycoord=u}return h}class Mr extends we{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,i,e,t,o,s,0),g("z","y","x",1,-1,i,e,-t,o,s,1),g("x","z","y",1,1,t,i,e,r,o,2),g("x","z","y",1,-1,t,i,-e,r,o,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new re(l,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(u,2));function g(x,m,f,b,M,_,L,C,P,D,S){const y=_/P,I=L/D,k=_/2,F=L/2,q=C/2,K=P+1,V=D+1;let B=0,H=0;const ct=new A;for(let tt=0;tt<V;tt++){const _t=tt*I-F;for(let Bt=0;Bt<K;Bt++){const At=Bt*y-k;ct[x]=At*b,ct[m]=_t*M,ct[f]=q,l.push(ct.x,ct.y,ct.z),ct[x]=0,ct[m]=0,ct[f]=C>0?1:-1,h.push(ct.x,ct.y,ct.z),u.push(Bt/P),u.push(1-tt/D),B+=1}}for(let tt=0;tt<D;tt++)for(let _t=0;_t<P;_t++){const Bt=d+_t+K*tt,At=d+_t+K*(tt+1),G=d+(_t+1)+K*(tt+1),nt=d+(_t+1)+K*tt;c.push(Bt,At,nt),c.push(At,G,nt),H+=6}a.addGroup(p,H,S),p+=H,d+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function _r(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Je(n){const t={};for(let e=0;e<n.length;e++){const i=_r(n[e]);for(const r in i)t[r]=i[r]}return t}function cp(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Cu(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}const lp={clone:_r,merge:Je};var hp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,up=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ei extends gi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hp,this.fragmentShader=up,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_r(t.uniforms),this.uniformsGroups=cp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Pu extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=jn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ai=new A,Jl=new at,jl=new at;class gn extends Pu{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ns*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Yr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ns*2*Math.atan(Math.tan(Yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ai.x,ai.y).multiplyScalar(-t/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ai.x,ai.y).multiplyScalar(-t/ai.z)}getViewSize(t,e){return this.getViewBounds(t,Jl,jl),e.subVectors(jl,Jl)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Yr*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const tr=-90,er=1;class fp extends Re{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new gn(tr,er,t,e);r.layers=this.layers,this.add(r);const s=new gn(tr,er,t,e);s.layers=this.layers,this.add(s);const o=new gn(tr,er,t,e);o.layers=this.layers,this.add(o);const a=new gn(tr,er,t,e);a.layers=this.layers,this.add(a);const c=new gn(tr,er,t,e);c.layers=this.layers,this.add(c);const l=new gn(tr,er,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===jn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===wo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,c),t.setRenderTarget(i,4,r),t.render(e,l),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,r),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Du extends Ke{constructor(t=[],e=pr,i,r,s,o,a,c,l,h){super(t,e,i,r,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class dp extends Oi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Du(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Mr(5,5,5),s=new ei({name:"CubemapFromEquirect",uniforms:_r(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ye,blending:ui});s.uniforms.tEquirect.value=e;const o=new It(r,s),a=e.minFilter;return e.minFilter===Ii&&(e.minFilter=Un),new fp(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}class ie extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pp={type:"move"};class xa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ie,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ie,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ie,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,i),f=this._getHandJoint(l,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(pp)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new ie;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class ol{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Qt(t),this.density=e}clone(){return new ol(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class mp extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class gp{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Dc,this.updateRanges=[],this.version=0,this.uuid=Bn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[i+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ze=new A;class bo{constructor(t,e,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix4(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ze.fromBufferAttribute(this,e),Ze.applyNormalMatrix(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ze.fromBufferAttribute(this,e),Ze.transformDirection(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Rn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ge(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Rn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Rn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Rn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Rn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),i=ge(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),i=ge(i,this.array),r=ge(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),i=ge(i,this.array),r=ge(r,this.array),s=ge(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new yn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new bo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Lu extends gi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let nr;const Pr=new A,ir=new A,rr=new A,sr=new at,Dr=new at,Iu=new de,Bs=new A,Lr=new A,zs=new A,Ql=new at,ya=new at,th=new at;class _p extends Re{constructor(t=new Lu){if(super(),this.isSprite=!0,this.type="Sprite",nr===void 0){nr=new we;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new gp(e,5);nr.setIndex([0,1,2,0,2,3]),nr.setAttribute("position",new bo(i,3,0,!1)),nr.setAttribute("uv",new bo(i,2,3,!1))}this.geometry=nr,this.material=t,this.center=new at(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ir.setFromMatrixScale(this.matrixWorld),Iu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),rr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ir.multiplyScalar(-rr.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;ks(Bs.set(-.5,-.5,0),rr,o,ir,r,s),ks(Lr.set(.5,-.5,0),rr,o,ir,r,s),ks(zs.set(.5,.5,0),rr,o,ir,r,s),Ql.set(0,0),ya.set(1,0),th.set(1,1);let a=t.ray.intersectTriangle(Bs,Lr,zs,!1,Pr);if(a===null&&(ks(Lr.set(-.5,.5,0),rr,o,ir,r,s),ya.set(0,1),a=t.ray.intersectTriangle(Bs,zs,Lr,!1,Pr),a===null))return;const c=t.ray.origin.distanceTo(Pr);c<t.near||c>t.far||e.push({distance:c,point:Pr.clone(),uv:xn.getInterpolation(Pr,Bs,Lr,zs,Ql,ya,th,new at),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ks(n,t,e,i,r,s){sr.subVectors(n,e).addScalar(.5).multiply(i),r!==void 0?(Dr.x=s*sr.x-r*sr.y,Dr.y=r*sr.x+s*sr.y):Dr.copy(sr),n.copy(t),n.x+=Dr.x,n.y+=Dr.y,n.applyMatrix4(Iu)}class vp extends Ke{constructor(t=null,e=1,i=1,r,s,o,a,c,l=ln,h=ln,u,d){super(null,o,a,c,l,h,r,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class eh extends yn{constructor(t,e,i,r=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const or=new de,nh=new de,Vs=[],ih=new zi,xp=new de,Ir=new It,Ur=new ki;class yp extends It{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new eh(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,xp)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new zi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,or),ih.copy(t.boundingBox).applyMatrix4(or),this.boundingBox.union(ih)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ki),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,or),Ur.copy(t.boundingSphere).applyMatrix4(or),this.boundingSphere.union(Ur)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=t*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(t,e){const i=this.matrixWorld,r=this.count;if(Ir.geometry=this.geometry,Ir.material=this.material,Ir.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ur.copy(this.boundingSphere),Ur.applyMatrix4(i),t.ray.intersectsSphere(Ur)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,or),nh.multiplyMatrices(i,or),Ir.matrixWorld=nh,Ir.raycast(t,Vs);for(let o=0,a=Vs.length;o<a;o++){const c=Vs[o];c.instanceId=s,c.object=this,e.push(c)}Vs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new eh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new vp(new Float32Array(r*this.count),r,this.count,Qc,Nn));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=r*t;s[c]=a,s.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ma=new A,Mp=new A,Sp=new jt;class Ri{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=Ma.subVectors(i,e).cross(Mp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Ma),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Sp.getNormalMatrix(t),r=this.coplanarPoint(Ma).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Si=new ki,Hs=new A;class al{constructor(t=new Ri,e=new Ri,i=new Ri,r=new Ri,s=new Ri,o=new Ri){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=jn){const i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],h=r[5],u=r[6],d=r[7],p=r[8],g=r[9],x=r[10],m=r[11],f=r[12],b=r[13],M=r[14],_=r[15];if(i[0].setComponents(c-s,d-l,m-p,_-f).normalize(),i[1].setComponents(c+s,d+l,m+p,_+f).normalize(),i[2].setComponents(c+o,d+h,m+g,_+b).normalize(),i[3].setComponents(c-o,d-h,m-g,_-b).normalize(),i[4].setComponents(c-a,d-u,m-x,_-M).normalize(),e===jn)i[5].setComponents(c+a,d+u,m+x,_+M).normalize();else if(e===wo)i[5].setComponents(a,u,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(t){return Si.center.set(0,0,0),Si.radius=.7071067811865476,Si.applyMatrix4(t.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Hs.x=r.normal.x>0?t.max.x:t.min.x,Hs.y=r.normal.y>0?t.max.y:t.min.y,Hs.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Hs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ko extends gi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const To=new A,Ao=new A,rh=new de,Nr=new zo,Gs=new ki,Sa=new A,sh=new A;class cl extends Re{constructor(t=new we,e=new ko){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)To.fromBufferAttribute(e,r-1),Ao.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=To.distanceTo(Ao);t.setAttribute("lineDistance",new re(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Gs.copy(i.boundingSphere),Gs.applyMatrix4(r),Gs.radius+=s,t.ray.intersectsSphere(Gs)===!1)return;rh.copy(r).invert(),Nr.copy(t.ray).applyMatrix4(rh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=l){const f=h.getX(x),b=h.getX(x+1),M=Ws(this,t,Nr,c,f,b,x);M&&e.push(M)}if(this.isLineLoop){const x=h.getX(g-1),m=h.getX(p),f=Ws(this,t,Nr,c,x,m,g-1);f&&e.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=l){const f=Ws(this,t,Nr,c,x,x+1,x);f&&e.push(f)}if(this.isLineLoop){const x=Ws(this,t,Nr,c,g-1,p,g-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ws(n,t,e,i,r,s,o){const a=n.geometry.attributes.position;if(To.fromBufferAttribute(a,r),Ao.fromBufferAttribute(a,s),e.distanceSqToSegment(To,Ao,Sa,sh)>i)return;Sa.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Sa);if(!(l<t.near||l>t.far))return{distance:l,point:sh.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}class Uu extends gi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const oh=new de,Lc=new zo,Xs=new ki,qs=new A;class wp extends Re{constructor(t=new we,e=new Uu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xs.copy(i.boundingSphere),Xs.applyMatrix4(r),Xs.radius+=s,t.ray.intersectsSphere(Xs)===!1)return;oh.copy(r).invert(),Lc.copy(t.ray).applyMatrix4(oh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,u=i.attributes.position;if(l!==null){const d=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=d,x=p;g<x;g++){const m=l.getX(g);qs.fromBufferAttribute(u,m),ah(qs,m,c,r,t,e,this)}}else{const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,x=p;g<x;g++)qs.fromBufferAttribute(u,g),ah(qs,g,c,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ah(n,t,e,i,r,s,o){const a=Lc.distanceSqToPoint(n);if(a<e){const c=new A;Lc.closestPointToPoint(n,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Ep extends Ke{constructor(t,e,i,r,s,o,a,c,l){super(t,e,i,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Nu extends Ke{constructor(t,e,i=Fi,r,s,o,a=ln,c=ln,l,h=ts,u=1){if(h!==ts&&h!==es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,r,s,o,a,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new rl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class ll extends we{constructor(t=1,e=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:r},e=Math.max(3,e);const s=[],o=[],a=[],c=[],l=new A,h=new at;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const p=i+u/e*r;l.x=t*Math.cos(p),l.y=t*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new re(o,3)),this.setAttribute("normal",new re(a,3)),this.setAttribute("uv",new re(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ll(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class us extends we{constructor(t=1,e=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const h=[],u=[],d=[],p=[];let g=0;const x=[],m=i/2;let f=0;b(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new re(u,3)),this.setAttribute("normal",new re(d,3)),this.setAttribute("uv",new re(p,2));function b(){const _=new A,L=new A;let C=0;const P=(e-t)/i;for(let D=0;D<=s;D++){const S=[],y=D/s,I=y*(e-t)+t;for(let k=0;k<=r;k++){const F=k/r,q=F*c+a,K=Math.sin(q),V=Math.cos(q);L.x=I*K,L.y=-y*i+m,L.z=I*V,u.push(L.x,L.y,L.z),_.set(K,P,V).normalize(),d.push(_.x,_.y,_.z),p.push(F,1-y),S.push(g++)}x.push(S)}for(let D=0;D<r;D++)for(let S=0;S<s;S++){const y=x[S][D],I=x[S+1][D],k=x[S+1][D+1],F=x[S][D+1];(t>0||S!==0)&&(h.push(y,I,F),C+=3),(e>0||S!==s-1)&&(h.push(I,k,F),C+=3)}l.addGroup(f,C,0),f+=C}function M(_){const L=g,C=new at,P=new A;let D=0;const S=_===!0?t:e,y=_===!0?1:-1;for(let k=1;k<=r;k++)u.push(0,m*y,0),d.push(0,y,0),p.push(.5,.5),g++;const I=g;for(let k=0;k<=r;k++){const q=k/r*c+a,K=Math.cos(q),V=Math.sin(q);P.x=S*V,P.y=m*y,P.z=S*K,u.push(P.x,P.y,P.z),d.push(0,y,0),C.x=K*.5+.5,C.y=V*.5*y+.5,p.push(C.x,C.y),g++}for(let k=0;k<r;k++){const F=L+k,q=I+k;_===!0?h.push(q,q+1,F):h.push(q+1,q,F),D+=3}l.addGroup(f,D,_===!0?1:2),f+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new us(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Dn extends us{constructor(t=1,e=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Dn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class fs extends we{constructor(t=[],e=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:r};const s=[],o=[];a(r),l(i),h(),this.setAttribute("position",new re(s,3)),this.setAttribute("normal",new re(s.slice(),3)),this.setAttribute("uv",new re(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(b){const M=new A,_=new A,L=new A;for(let C=0;C<e.length;C+=3)p(e[C+0],M),p(e[C+1],_),p(e[C+2],L),c(M,_,L,b)}function c(b,M,_,L){const C=L+1,P=[];for(let D=0;D<=C;D++){P[D]=[];const S=b.clone().lerp(_,D/C),y=M.clone().lerp(_,D/C),I=C-D;for(let k=0;k<=I;k++)k===0&&D===C?P[D][k]=S:P[D][k]=S.clone().lerp(y,k/I)}for(let D=0;D<C;D++)for(let S=0;S<2*(C-D)-1;S++){const y=Math.floor(S/2);S%2===0?(d(P[D][y+1]),d(P[D+1][y]),d(P[D][y])):(d(P[D][y+1]),d(P[D+1][y+1]),d(P[D+1][y]))}}function l(b){const M=new A;for(let _=0;_<s.length;_+=3)M.x=s[_+0],M.y=s[_+1],M.z=s[_+2],M.normalize().multiplyScalar(b),s[_+0]=M.x,s[_+1]=M.y,s[_+2]=M.z}function h(){const b=new A;for(let M=0;M<s.length;M+=3){b.x=s[M+0],b.y=s[M+1],b.z=s[M+2];const _=m(b)/2/Math.PI+.5,L=f(b)/Math.PI+.5;o.push(_,1-L)}g(),u()}function u(){for(let b=0;b<o.length;b+=6){const M=o[b+0],_=o[b+2],L=o[b+4],C=Math.max(M,_,L),P=Math.min(M,_,L);C>.9&&P<.1&&(M<.2&&(o[b+0]+=1),_<.2&&(o[b+2]+=1),L<.2&&(o[b+4]+=1))}}function d(b){s.push(b.x,b.y,b.z)}function p(b,M){const _=b*3;M.x=t[_+0],M.y=t[_+1],M.z=t[_+2]}function g(){const b=new A,M=new A,_=new A,L=new A,C=new at,P=new at,D=new at;for(let S=0,y=0;S<s.length;S+=9,y+=6){b.set(s[S+0],s[S+1],s[S+2]),M.set(s[S+3],s[S+4],s[S+5]),_.set(s[S+6],s[S+7],s[S+8]),C.set(o[y+0],o[y+1]),P.set(o[y+2],o[y+3]),D.set(o[y+4],o[y+5]),L.copy(b).add(M).add(_).divideScalar(3);const I=m(L);x(C,y+0,b,I),x(P,y+2,M,I),x(D,y+4,_,I)}}function x(b,M,_,L){L<0&&b.x===1&&(o[M]=b.x-1),_.x===0&&_.z===0&&(o[M]=L/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function f(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fs(t.vertices,t.indices,t.radius,t.details)}}class Vo extends fs{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Vo(t.radius,t.detail)}}class Gn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),s+=i.distanceTo(r),e.push(s),r=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let r=0;const s=i.length;let o;e?o=e:o=t*i[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=i[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,i[r]===o)return r/(s-1);const h=i[r],d=i[r+1]-h,p=(o-h)/d;return(r+p)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),c=e||(o.isVector2?new at:new A);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new A,r=[],s=[],o=[],a=new A,c=new de;for(let p=0;p<=t;p++){const g=p/t;r[p]=this.getTangentAt(g,new A)}s[0]=new A,o[0]=new A;let l=Number.MAX_VALUE;const h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=t;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ne(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(e===!0){let p=Math.acos(ne(s[0].dot(s[t]),-1,1));p/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(p=-p);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class hl extends Gn{constructor(t=0,e=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new at){const i=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class bp extends hl{constructor(t,e,i,r,s,o){super(t,e,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ul(){let n=0,t=0,e=0,i=0;function r(s,o,a,c){n=s,t=a,e=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,h,u){let d=(o-s)/l-(a-s)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,p*=h,r(o,a,d,p)},calc:function(s){const o=s*s,a=o*s;return n+t*s+e*o+i*a}}}const Ys=new A,wa=new ul,Ea=new ul,ba=new ul;class Tp extends Gn{constructor(t=[],e=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=r}getPoint(t,e=new A){const i=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,h;this.closed||a>0?l=r[(a-1)%s]:(Ys.subVectors(r[0],r[1]).add(r[0]),l=Ys);const u=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(Ys.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=Ys),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),wa.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,x,m),Ea.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,x,m),ba.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(wa.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Ea.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),ba.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return i.set(wa.calc(c),Ea.calc(c),ba.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new A().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ch(n,t,e,i,r){const s=(i-t)*.5,o=(r-e)*.5,a=n*n,c=n*a;return(2*e-2*i+s+o)*c+(-3*e+3*i-2*s-o)*a+s*n+e}function Ap(n,t){const e=1-n;return e*e*t}function Rp(n,t){return 2*(1-n)*n*t}function Cp(n,t){return n*n*t}function $r(n,t,e,i){return Ap(n,t)+Rp(n,e)+Cp(n,i)}function Pp(n,t){const e=1-n;return e*e*e*t}function Dp(n,t){const e=1-n;return 3*e*e*n*t}function Lp(n,t){return 3*(1-n)*n*n*t}function Ip(n,t){return n*n*n*t}function Zr(n,t,e,i,r){return Pp(n,t)+Dp(n,e)+Lp(n,i)+Ip(n,r)}class Fu extends Gn{constructor(t=new at,e=new at,i=new at,r=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new at){const i=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Zr(t,r.x,s.x,o.x,a.x),Zr(t,r.y,s.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Up extends Gn{constructor(t=new A,e=new A,i=new A,r=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new A){const i=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Zr(t,r.x,s.x,o.x,a.x),Zr(t,r.y,s.y,o.y,a.y),Zr(t,r.z,s.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ou extends Gn{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Np extends Gn{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bu extends Gn{constructor(t=new at,e=new at,i=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new at){const i=e,r=this.v0,s=this.v1,o=this.v2;return i.set($r(t,r.x,s.x,o.x),$r(t,r.y,s.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ro extends Gn{constructor(t=new A,e=new A,i=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new A){const i=e,r=this.v0,s=this.v1,o=this.v2;return i.set($r(t,r.x,s.x,o.x),$r(t,r.y,s.y,o.y),$r(t,r.z,s.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zu extends Gn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){const i=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],h=r[o>r.length-2?r.length-1:o+1],u=r[o>r.length-3?r.length-1:o+2];return i.set(ch(a,c.x,l.x,h.x,u.x),ch(a,c.y,l.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new at().fromArray(r))}return this}}var Co=Object.freeze({__proto__:null,ArcCurve:bp,CatmullRomCurve3:Tp,CubicBezierCurve:Fu,CubicBezierCurve3:Up,EllipseCurve:hl,LineCurve:Ou,LineCurve3:Np,QuadraticBezierCurve:Bu,QuadraticBezierCurve3:Ro,SplineCurve:zu});class Fp extends Gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Co[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,r=this.curves.length;i<r;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const r=t.curves[e];this.curves.push(new Co[r.type]().fromJSON(r))}return this}}class lh extends Fp{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Ou(this.currentPoint.clone(),new at(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,r){const s=new Bu(this.currentPoint.clone(),new at(t,e),new at(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(t,e,i,r,s,o){const a=new Fu(this.currentPoint.clone(),new at(t,e),new at(i,r),new at(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new zu(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,r,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,i,r,s,o),this}absarc(t,e,i,r,s,o){return this.absellipse(t,e,i,i,r,s,o),this}ellipse(t,e,i,r,s,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,i,r,s,o,a,c),this}absellipse(t,e,i,r,s,o,a,c){const l=new hl(t,e,i,r,s,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ku extends lh{constructor(t){super(t),this.uuid=Bn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,r=this.holes.length;i<r;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const r=t.holes[e];this.holes.push(new lh().fromJSON(r))}return this}}function Op(n,t,e=2){const i=t&&t.length,r=i?t[0]*e:n.length;let s=Vu(n,0,r,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l;if(i&&(s=Hp(n,t,s,e)),n.length>80*e){a=1/0,c=1/0;let h=-1/0,u=-1/0;for(let d=e;d<r;d+=e){const p=n[d],g=n[d+1];p<a&&(a=p),g<c&&(c=g),p>h&&(h=p),g>u&&(u=g)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return is(s,o,e,a,c,l,0),o}function Vu(n,t,e,i,r){let s;if(r===Qp(n,t,e,i)>0)for(let o=t;o<e;o+=i)s=hh(o/i|0,n[o],n[o+1],s);else for(let o=e-i;o>=t;o-=i)s=hh(o/i|0,n[o],n[o+1],s);return s&&vr(s,s.next)&&(ss(s),s=s.next),s}function Bi(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(vr(e,e.next)||Ae(e.prev,e,e.next)===0)){if(ss(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function is(n,t,e,i,r,s,o){if(!n)return;!o&&s&&Yp(n,i,r,s);let a=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(s?zp(n,i,r,s):Bp(n)){t.push(c.i,n.i,l.i),ss(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=kp(Bi(n),t),is(n,t,e,i,r,s,2)):o===2&&Vp(n,t,e,i,r,s):is(Bi(n),t,e,i,r,s,1);break}}}function Bp(n){const t=n.prev,e=n,i=n.next;if(Ae(t,e,i)>=0)return!1;const r=t.x,s=e.x,o=i.x,a=t.y,c=e.y,l=i.y,h=Math.min(r,s,o),u=Math.min(a,c,l),d=Math.max(r,s,o),p=Math.max(a,c,l);let g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&Vr(r,a,s,c,o,l,g.x,g.y)&&Ae(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function zp(n,t,e,i){const r=n.prev,s=n,o=n.next;if(Ae(r,s,o)>=0)return!1;const a=r.x,c=s.x,l=o.x,h=r.y,u=s.y,d=o.y,p=Math.min(a,c,l),g=Math.min(h,u,d),x=Math.max(a,c,l),m=Math.max(h,u,d),f=Ic(p,g,t,e,i),b=Ic(x,m,t,e,i);let M=n.prevZ,_=n.nextZ;for(;M&&M.z>=f&&_&&_.z<=b;){if(M.x>=p&&M.x<=x&&M.y>=g&&M.y<=m&&M!==r&&M!==o&&Vr(a,h,c,u,l,d,M.x,M.y)&&Ae(M.prev,M,M.next)>=0||(M=M.prevZ,_.x>=p&&_.x<=x&&_.y>=g&&_.y<=m&&_!==r&&_!==o&&Vr(a,h,c,u,l,d,_.x,_.y)&&Ae(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;M&&M.z>=f;){if(M.x>=p&&M.x<=x&&M.y>=g&&M.y<=m&&M!==r&&M!==o&&Vr(a,h,c,u,l,d,M.x,M.y)&&Ae(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;_&&_.z<=b;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=m&&_!==r&&_!==o&&Vr(a,h,c,u,l,d,_.x,_.y)&&Ae(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function kp(n,t){let e=n;do{const i=e.prev,r=e.next.next;!vr(i,r)&&Gu(i,e,e.next,r)&&rs(i,r)&&rs(r,i)&&(t.push(i.i,e.i,r.i),ss(e),ss(e.next),e=n=r),e=e.next}while(e!==n);return Bi(e)}function Vp(n,t,e,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Zp(o,a)){let c=Wu(o,a);o=Bi(o,o.next),c=Bi(c,c.next),is(o,t,e,i,r,s,0),is(c,t,e,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function Hp(n,t,e,i){const r=[];for(let s=0,o=t.length;s<o;s++){const a=t[s]*i,c=s<o-1?t[s+1]*i:n.length,l=Vu(n,a,c,i,!1);l===l.next&&(l.steiner=!0),r.push($p(l))}r.sort(Gp);for(let s=0;s<r.length;s++)e=Wp(r[s],e);return e}function Gp(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=i-r}return e}function Wp(n,t){const e=Xp(n,t);if(!e)return t;const i=Wu(e,n);return Bi(i,i.next),Bi(e,e.next)}function Xp(n,t){let e=t;const i=n.x,r=n.y;let s=-1/0,o;if(vr(n,e))return e;do{if(vr(n,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const u=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=i&&u>s&&(s=u,o=e.x<e.next.x?e:e.next,u===i))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,c=o.x,l=o.y;let h=1/0;e=o;do{if(i>=e.x&&e.x>=c&&i!==e.x&&Hu(r<l?i:s,r,c,l,r<l?s:i,r,e.x,e.y)){const u=Math.abs(r-e.y)/(i-e.x);rs(e,n)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&qp(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function qp(n,t){return Ae(n.prev,n,t.prev)<0&&Ae(t.next,n,n.next)<0}function Yp(n,t,e,i){let r=n;do r.z===0&&(r.z=Ic(r.x,r.y,t,e,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,Kp(r)}function Kp(n){let t,e=1;do{let i=n,r;n=null;let s=null;for(t=0;i;){t++;let o=i,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,c--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=o}s.nextZ=null,e*=2}while(t>1);return n}function Ic(n,t,e,i,r){return n=(n-e)*r|0,t=(t-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function $p(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Hu(n,t,e,i,r,s,o,a){return(r-o)*(t-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(i-a)}function Vr(n,t,e,i,r,s,o,a){return!(n===o&&t===a)&&Hu(n,t,e,i,r,s,o,a)}function Zp(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Jp(n,t)&&(rs(n,t)&&rs(t,n)&&jp(n,t)&&(Ae(n.prev,n,t.prev)||Ae(n,t.prev,t))||vr(n,t)&&Ae(n.prev,n,n.next)>0&&Ae(t.prev,t,t.next)>0)}function Ae(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function vr(n,t){return n.x===t.x&&n.y===t.y}function Gu(n,t,e,i){const r=$s(Ae(n,t,e)),s=$s(Ae(n,t,i)),o=$s(Ae(e,i,n)),a=$s(Ae(e,i,t));return!!(r!==s&&o!==a||r===0&&Ks(n,e,t)||s===0&&Ks(n,i,t)||o===0&&Ks(e,n,i)||a===0&&Ks(e,t,i))}function Ks(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function $s(n){return n>0?1:n<0?-1:0}function Jp(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Gu(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function rs(n,t){return Ae(n.prev,n,n.next)<0?Ae(n,t,n.next)>=0&&Ae(n,n.prev,t)>=0:Ae(n,t,n.prev)<0||Ae(n,n.next,t)<0}function jp(n,t){let e=n,i=!1;const r=(n.x+t.x)/2,s=(n.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Wu(n,t){const e=Uc(n.i,n.x,n.y),i=Uc(t.i,t.x,t.y),r=n.next,s=t.prev;return n.next=t,t.prev=n,e.next=r,r.prev=e,i.next=e,e.prev=i,s.next=i,i.prev=s,i}function hh(n,t,e,i){const r=Uc(n,t,e);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function ss(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Uc(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Qp(n,t,e,i){let r=0;for(let s=t,o=e-i;s<e;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class tm{static triangulate(t,e,i=2){return Op(t,e,i)}}class cr{static area(t){const e=t.length;let i=0;for(let r=e-1,s=0;s<e;r=s++)i+=t[r].x*t[s].y-t[s].x*t[r].y;return i*.5}static isClockWise(t){return cr.area(t)<0}static triangulateShape(t,e){const i=[],r=[],s=[];uh(t),fh(i,t);let o=t.length;e.forEach(uh);for(let c=0;c<e.length;c++)r.push(o),o+=e[c].length,fh(i,e[c]);const a=tm.triangulate(i,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function uh(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function fh(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class fl extends we{constructor(t=new ku([new at(.5,.5),new at(-.5,.5),new at(-.5,-.5),new at(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,r=[],s=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new re(r,3)),this.setAttribute("uv",new re(s,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const f=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:em;let M,_=!1,L,C,P,D;f&&(M=f.getSpacedPoints(h),_=!0,d=!1,L=f.computeFrenetFrames(h,!1),C=new A,P=new A,D=new A),d||(m=0,p=0,g=0,x=0);const S=a.extractPoints(l);let y=S.shape;const I=S.holes;if(!cr.isClockWise(y)){y=y.reverse();for(let T=0,lt=I.length;T<lt;T++){const et=I[T];cr.isClockWise(et)&&(I[T]=et.reverse())}}function F(T){const et=10000000000000001e-36;let ht=T[0];for(let Z=1;Z<=T.length;Z++){const wt=Z%T.length,rt=T[wt],Et=rt.x-ht.x,$t=rt.y-ht.y,R=Et*Et+$t*$t,v=Math.max(Math.abs(rt.x),Math.abs(rt.y),Math.abs(ht.x),Math.abs(ht.y)),z=et*v*v;if(R<=z){T.splice(wt,1),Z--;continue}ht=rt}}F(y),I.forEach(F);const q=I.length,K=y;for(let T=0;T<q;T++){const lt=I[T];y=y.concat(lt)}function V(T,lt,et){return lt||console.error("THREE.ExtrudeGeometry: vec does not exist"),T.clone().addScaledVector(lt,et)}const B=y.length;function H(T,lt,et){let ht,Z,wt;const rt=T.x-lt.x,Et=T.y-lt.y,$t=et.x-T.x,R=et.y-T.y,v=rt*rt+Et*Et,z=rt*R-Et*$t;if(Math.abs(z)>Number.EPSILON){const Y=Math.sqrt(v),j=Math.sqrt($t*$t+R*R),$=lt.x-Et/Y,Nt=lt.y+rt/Y,dt=et.x-R/j,Ct=et.y+$t/j,Ft=((dt-$)*R-(Ct-Nt)*$t)/(rt*R-Et*$t);ht=$+rt*Ft-T.x,Z=Nt+Et*Ft-T.y;const Q=ht*ht+Z*Z;if(Q<=2)return new at(ht,Z);wt=Math.sqrt(Q/2)}else{let Y=!1;rt>Number.EPSILON?$t>Number.EPSILON&&(Y=!0):rt<-Number.EPSILON?$t<-Number.EPSILON&&(Y=!0):Math.sign(Et)===Math.sign(R)&&(Y=!0),Y?(ht=-Et,Z=rt,wt=Math.sqrt(v)):(ht=rt,Z=Et,wt=Math.sqrt(v/2))}return new at(ht/wt,Z/wt)}const ct=[];for(let T=0,lt=K.length,et=lt-1,ht=T+1;T<lt;T++,et++,ht++)et===lt&&(et=0),ht===lt&&(ht=0),ct[T]=H(K[T],K[et],K[ht]);const tt=[];let _t,Bt=ct.concat();for(let T=0,lt=q;T<lt;T++){const et=I[T];_t=[];for(let ht=0,Z=et.length,wt=Z-1,rt=ht+1;ht<Z;ht++,wt++,rt++)wt===Z&&(wt=0),rt===Z&&(rt=0),_t[ht]=H(et[ht],et[wt],et[rt]);tt.push(_t),Bt=Bt.concat(_t)}let At;if(m===0)At=cr.triangulateShape(K,I);else{const T=[],lt=[];for(let et=0;et<m;et++){const ht=et/m,Z=p*Math.cos(ht*Math.PI/2),wt=g*Math.sin(ht*Math.PI/2)+x;for(let rt=0,Et=K.length;rt<Et;rt++){const $t=V(K[rt],ct[rt],wt);qt($t.x,$t.y,-Z),ht===0&&T.push($t)}for(let rt=0,Et=q;rt<Et;rt++){const $t=I[rt];_t=tt[rt];const R=[];for(let v=0,z=$t.length;v<z;v++){const Y=V($t[v],_t[v],wt);qt(Y.x,Y.y,-Z),ht===0&&R.push(Y)}ht===0&&lt.push(R)}}At=cr.triangulateShape(T,lt)}const G=At.length,nt=g+x;for(let T=0;T<B;T++){const lt=d?V(y[T],Bt[T],nt):y[T];_?(P.copy(L.normals[0]).multiplyScalar(lt.x),C.copy(L.binormals[0]).multiplyScalar(lt.y),D.copy(M[0]).add(P).add(C),qt(D.x,D.y,D.z)):qt(lt.x,lt.y,0)}for(let T=1;T<=h;T++)for(let lt=0;lt<B;lt++){const et=d?V(y[lt],Bt[lt],nt):y[lt];_?(P.copy(L.normals[T]).multiplyScalar(et.x),C.copy(L.binormals[T]).multiplyScalar(et.y),D.copy(M[T]).add(P).add(C),qt(D.x,D.y,D.z)):qt(et.x,et.y,u/h*T)}for(let T=m-1;T>=0;T--){const lt=T/m,et=p*Math.cos(lt*Math.PI/2),ht=g*Math.sin(lt*Math.PI/2)+x;for(let Z=0,wt=K.length;Z<wt;Z++){const rt=V(K[Z],ct[Z],ht);qt(rt.x,rt.y,u+et)}for(let Z=0,wt=I.length;Z<wt;Z++){const rt=I[Z];_t=tt[Z];for(let Et=0,$t=rt.length;Et<$t;Et++){const R=V(rt[Et],_t[Et],ht);_?qt(R.x,R.y+M[h-1].y,M[h-1].x+et):qt(R.x,R.y,u+et)}}}ft(),ut();function ft(){const T=r.length/3;if(d){let lt=0,et=B*lt;for(let ht=0;ht<G;ht++){const Z=At[ht];Ot(Z[2]+et,Z[1]+et,Z[0]+et)}lt=h+m*2,et=B*lt;for(let ht=0;ht<G;ht++){const Z=At[ht];Ot(Z[0]+et,Z[1]+et,Z[2]+et)}}else{for(let lt=0;lt<G;lt++){const et=At[lt];Ot(et[2],et[1],et[0])}for(let lt=0;lt<G;lt++){const et=At[lt];Ot(et[0]+B*h,et[1]+B*h,et[2]+B*h)}}i.addGroup(T,r.length/3-T,0)}function ut(){const T=r.length/3;let lt=0;Mt(K,lt),lt+=K.length;for(let et=0,ht=I.length;et<ht;et++){const Z=I[et];Mt(Z,lt),lt+=Z.length}i.addGroup(T,r.length/3-T,1)}function Mt(T,lt){let et=T.length;for(;--et>=0;){const ht=et;let Z=et-1;Z<0&&(Z=T.length-1);for(let wt=0,rt=h+m*2;wt<rt;wt++){const Et=B*wt,$t=B*(wt+1),R=lt+ht+Et,v=lt+Z+Et,z=lt+Z+$t,Y=lt+ht+$t;xe(R,v,z,Y)}}}function qt(T,lt,et){c.push(T),c.push(lt),c.push(et)}function Ot(T,lt,et){le(T),le(lt),le(et);const ht=r.length/3,Z=b.generateTopUV(i,r,ht-3,ht-2,ht-1);Jt(Z[0]),Jt(Z[1]),Jt(Z[2])}function xe(T,lt,et,ht){le(T),le(lt),le(ht),le(lt),le(et),le(ht);const Z=r.length/3,wt=b.generateSideWallUV(i,r,Z-6,Z-3,Z-2,Z-1);Jt(wt[0]),Jt(wt[1]),Jt(wt[3]),Jt(wt[1]),Jt(wt[2]),Jt(wt[3])}function le(T){r.push(c[T*3+0]),r.push(c[T*3+1]),r.push(c[T*3+2])}function Jt(T){s.push(T.x),s.push(T.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return nm(e,i,t)}static fromJSON(t,e){const i=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];i.push(a)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new Co[r.type]().fromJSON(r)),new fl(i,t.options)}}const em={generateTopUV:function(n,t,e,i,r){const s=t[e*3],o=t[e*3+1],a=t[i*3],c=t[i*3+1],l=t[r*3],h=t[r*3+1];return[new at(s,o),new at(a,c),new at(l,h)]},generateSideWallUV:function(n,t,e,i,r,s){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[i*3],h=t[i*3+1],u=t[i*3+2],d=t[r*3],p=t[r*3+1],g=t[r*3+2],x=t[s*3],m=t[s*3+1],f=t[s*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new at(o,1-c),new at(l,1-u),new at(d,1-g),new at(x,1-f)]:[new at(a,1-c),new at(h,1-u),new at(p,1-g),new at(m,1-f)]}};function nm(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class hn extends fs{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new hn(t.radius,t.detail)}}class di extends fs{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new di(t.radius,t.detail)}}class ds extends we{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),c=Math.floor(r),l=a+1,h=c+1,u=t/a,d=e/c,p=[],g=[],x=[],m=[];for(let f=0;f<h;f++){const b=f*d-o;for(let M=0;M<l;M++){const _=M*u-s;g.push(_,-b,0),x.push(0,0,1),m.push(M/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let b=0;b<a;b++){const M=b+l*f,_=b+l*(f+1),L=b+1+l*(f+1),C=b+1+l*f;p.push(M,_,C),p.push(_,L,C)}this.setIndex(p),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(x,3)),this.setAttribute("uv",new re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ds(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ho extends we{constructor(t=.5,e=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],c=[],l=[],h=[];let u=t;const d=(e-t)/r,p=new A,g=new at;for(let x=0;x<=r;x++){for(let m=0;m<=i;m++){const f=s+m/i*o;p.x=u*Math.cos(f),p.y=u*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<r;x++){const m=x*(i+1);for(let f=0;f<i;f++){const b=f+m,M=b,_=b+i+1,L=b+i+2,C=b+1;a.push(M,_,C),a.push(_,L,C)}}this.setIndex(a),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(l,3)),this.setAttribute("uv",new re(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ho(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class _n extends we{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new A,d=new A,p=[],g=[],x=[],m=[];for(let f=0;f<=i;f++){const b=[],M=f/i;let _=0;f===0&&o===0?_=.5/e:f===i&&c===Math.PI&&(_=-.5/e);for(let L=0;L<=e;L++){const C=L/e;u.x=-t*Math.cos(r+C*s)*Math.sin(o+M*a),u.y=t*Math.cos(o+M*a),u.z=t*Math.sin(r+C*s)*Math.sin(o+M*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(C+_,1-M),b.push(l++)}h.push(b)}for(let f=0;f<i;f++)for(let b=0;b<e;b++){const M=h[f][b+1],_=h[f][b],L=h[f+1][b],C=h[f+1][b+1];(f!==0||o>0)&&p.push(M,_,C),(f!==i-1||c<Math.PI)&&p.push(_,L,C)}this.setIndex(p),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(x,3)),this.setAttribute("uv",new re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class dl extends we{constructor(t=1,e=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],c=[],l=[],h=new A,u=new A,d=new A;for(let p=0;p<=i;p++)for(let g=0;g<=r;g++){const x=g/r*s,m=p/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/r),l.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=r;g++){const x=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,f=(r+1)*(p-1)+g,b=(r+1)*p+g;o.push(x,m,b),o.push(m,f,b)}this.setIndex(o),this.setAttribute("position",new re(a,3)),this.setAttribute("normal",new re(c,3)),this.setAttribute("uv",new re(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dl(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Po extends we{constructor(t=new Ro(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),e=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:r,closed:s};const o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new A,c=new A,l=new at;let h=new A;const u=[],d=[],p=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new re(u,3)),this.setAttribute("normal",new re(d,3)),this.setAttribute("uv",new re(p,2));function x(){for(let M=0;M<e;M++)m(M);m(s===!1?e:0),b(),f()}function m(M){h=t.getPointAt(M/e,h);const _=o.normals[M],L=o.binormals[M];for(let C=0;C<=r;C++){const P=C/r*Math.PI*2,D=Math.sin(P),S=-Math.cos(P);c.x=S*_.x+D*L.x,c.y=S*_.y+D*L.y,c.z=S*_.z+D*L.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+i*c.x,a.y=h.y+i*c.y,a.z=h.z+i*c.z,u.push(a.x,a.y,a.z)}}function f(){for(let M=1;M<=e;M++)for(let _=1;_<=r;_++){const L=(r+1)*(M-1)+(_-1),C=(r+1)*M+(_-1),P=(r+1)*M+_,D=(r+1)*(M-1)+_;g.push(L,C,D),g.push(C,P,D)}}function b(){for(let M=0;M<=e;M++)for(let _=0;_<=r;_++)l.x=M/e,l.y=_/r,p.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Po(new Co[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class ce extends gi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Su,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class im extends gi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=md,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class rm extends gi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Xu extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class sm extends Xu{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ta=new de,dh=new A,ph=new A;class om{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.mapType=kn,this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new al,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new Pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;dh.setFromMatrixPosition(t.matrixWorld),e.position.copy(dh),ph.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ph),e.updateMatrixWorld(),Ta.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ta),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ta)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class qu extends Pu{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class am extends om{constructor(){super(new qu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Yu extends Xu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.shadow=new am}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class cm extends gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class lm{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=mh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=mh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function mh(){return performance.now()}const gh=new de;class Ku{constructor(t,e,i=0,r=1/0){this.ray=new zo(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new sl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return gh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gh),this}intersectObject(t,e=!0,i=[]){return Nc(t,this,i,e),i.sort(_h),i}intersectObjects(t,e=!0,i=[]){for(let r=0,s=t.length;r<s;r++)Nc(t[r],this,i,e);return i.sort(_h),i}}function _h(n,t){return n.distance-t.distance}function Nc(n,t,e,i){let r=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)Nc(s[o],t,e,!0)}}function vh(n,t,e,i){const r=hm(i);switch(e){case vu:return n*t;case Qc:return n*t/r.components*r.byteLength;case tl:return n*t/r.components*r.byteLength;case yu:return n*t*2/r.components*r.byteLength;case el:return n*t*2/r.components*r.byteLength;case xu:return n*t*3/r.components*r.byteLength;case Cn:return n*t*4/r.components*r.byteLength;case nl:return n*t*4/r.components*r.byteLength;case lo:case ho:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case uo:case fo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case oc:case cc:return Math.max(n,16)*Math.max(t,8)/4;case sc:case ac:return Math.max(n,8)*Math.max(t,8)/2;case lc:case hc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case uc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case fc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case dc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case pc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case mc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case gc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case _c:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case vc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case xc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case yc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Mc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Sc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case wc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Ec:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case bc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case po:case Tc:case Ac:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Mu:case Rc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Cc:case Pc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function hm(n){switch(n){case kn:case mu:return{byteLength:1,components:1};case jr:case gu:case ls:return{byteLength:2,components:1};case Jc:case jc:return{byteLength:2,components:4};case Fi:case Zc:case Nn:return{byteLength:4,components:1};case _u:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$c}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$c);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function $u(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function um(n){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){const h=c.array,u=c.updateRanges;if(n.bindBuffer(l,a),u.length===0)n.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],x=u[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const x=u[p];n.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var fm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,pm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_m=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ym=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Mm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Em=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bm=`#ifdef USE_IRIDESCENCE
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
#endif`,Tm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Am=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Rm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Im=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Um=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Nm=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Fm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,Om=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Bm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,km=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wm=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Xm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qm=`#ifdef USE_ENVMAP
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
#endif`,Ym=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Km=`#ifdef USE_ENVMAP
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
#endif`,$m=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qm=`#ifdef USE_GRADIENTMAP
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
}`,t0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,e0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,n0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,i0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,r0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,s0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,o0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,a0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,c0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,l0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,h0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,u0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,f0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,d0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,p0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,m0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,v0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,x0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,y0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,M0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,S0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,w0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,E0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,b0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,T0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,R0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,P0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,D0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,U0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,N0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,F0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,O0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,B0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,z0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,k0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,V0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,H0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,G0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,W0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,X0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,q0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Y0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,K0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,Z0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,J0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,j0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Q0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tg=`#ifdef USE_SKINNING
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
#endif`,eg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ng=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ig=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,og=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,hg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ug=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_g=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,vg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,xg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,yg=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Eg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Tg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ag=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Rg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Pg=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Lg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ig=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Ug=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ng=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Fg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Og=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Bg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,kg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Wg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,te={alphahash_fragment:fm,alphahash_pars_fragment:dm,alphamap_fragment:pm,alphamap_pars_fragment:mm,alphatest_fragment:gm,alphatest_pars_fragment:_m,aomap_fragment:vm,aomap_pars_fragment:xm,batching_pars_vertex:ym,batching_vertex:Mm,begin_vertex:Sm,beginnormal_vertex:wm,bsdfs:Em,iridescence_fragment:bm,bumpmap_pars_fragment:Tm,clipping_planes_fragment:Am,clipping_planes_pars_fragment:Rm,clipping_planes_pars_vertex:Cm,clipping_planes_vertex:Pm,color_fragment:Dm,color_pars_fragment:Lm,color_pars_vertex:Im,color_vertex:Um,common:Nm,cube_uv_reflection_fragment:Fm,defaultnormal_vertex:Om,displacementmap_pars_vertex:Bm,displacementmap_vertex:zm,emissivemap_fragment:km,emissivemap_pars_fragment:Vm,colorspace_fragment:Hm,colorspace_pars_fragment:Gm,envmap_fragment:Wm,envmap_common_pars_fragment:Xm,envmap_pars_fragment:qm,envmap_pars_vertex:Ym,envmap_physical_pars_fragment:r0,envmap_vertex:Km,fog_vertex:$m,fog_pars_vertex:Zm,fog_fragment:Jm,fog_pars_fragment:jm,gradientmap_pars_fragment:Qm,lightmap_pars_fragment:t0,lights_lambert_fragment:e0,lights_lambert_pars_fragment:n0,lights_pars_begin:i0,lights_toon_fragment:s0,lights_toon_pars_fragment:o0,lights_phong_fragment:a0,lights_phong_pars_fragment:c0,lights_physical_fragment:l0,lights_physical_pars_fragment:h0,lights_fragment_begin:u0,lights_fragment_maps:f0,lights_fragment_end:d0,logdepthbuf_fragment:p0,logdepthbuf_pars_fragment:m0,logdepthbuf_pars_vertex:g0,logdepthbuf_vertex:_0,map_fragment:v0,map_pars_fragment:x0,map_particle_fragment:y0,map_particle_pars_fragment:M0,metalnessmap_fragment:S0,metalnessmap_pars_fragment:w0,morphinstance_vertex:E0,morphcolor_vertex:b0,morphnormal_vertex:T0,morphtarget_pars_vertex:A0,morphtarget_vertex:R0,normal_fragment_begin:C0,normal_fragment_maps:P0,normal_pars_fragment:D0,normal_pars_vertex:L0,normal_vertex:I0,normalmap_pars_fragment:U0,clearcoat_normal_fragment_begin:N0,clearcoat_normal_fragment_maps:F0,clearcoat_pars_fragment:O0,iridescence_pars_fragment:B0,opaque_fragment:z0,packing:k0,premultiplied_alpha_fragment:V0,project_vertex:H0,dithering_fragment:G0,dithering_pars_fragment:W0,roughnessmap_fragment:X0,roughnessmap_pars_fragment:q0,shadowmap_pars_fragment:Y0,shadowmap_pars_vertex:K0,shadowmap_vertex:$0,shadowmask_pars_fragment:Z0,skinbase_vertex:J0,skinning_pars_vertex:j0,skinning_vertex:Q0,skinnormal_vertex:tg,specularmap_fragment:eg,specularmap_pars_fragment:ng,tonemapping_fragment:ig,tonemapping_pars_fragment:rg,transmission_fragment:sg,transmission_pars_fragment:og,uv_pars_fragment:ag,uv_pars_vertex:cg,uv_vertex:lg,worldpos_vertex:hg,background_vert:ug,background_frag:fg,backgroundCube_vert:dg,backgroundCube_frag:pg,cube_vert:mg,cube_frag:gg,depth_vert:_g,depth_frag:vg,distanceRGBA_vert:xg,distanceRGBA_frag:yg,equirect_vert:Mg,equirect_frag:Sg,linedashed_vert:wg,linedashed_frag:Eg,meshbasic_vert:bg,meshbasic_frag:Tg,meshlambert_vert:Ag,meshlambert_frag:Rg,meshmatcap_vert:Cg,meshmatcap_frag:Pg,meshnormal_vert:Dg,meshnormal_frag:Lg,meshphong_vert:Ig,meshphong_frag:Ug,meshphysical_vert:Ng,meshphysical_frag:Fg,meshtoon_vert:Og,meshtoon_frag:Bg,points_vert:zg,points_frag:kg,shadow_vert:Vg,shadow_frag:Hg,sprite_vert:Gg,sprite_frag:Wg},mt={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},In={basic:{uniforms:Je([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:Je([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:Je([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:Je([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:Je([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:Je([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:Je([mt.points,mt.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:Je([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:Je([mt.common,mt.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:Je([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:Je([mt.sprite,mt.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distanceRGBA:{uniforms:Je([mt.common,mt.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distanceRGBA_vert,fragmentShader:te.distanceRGBA_frag},shadow:{uniforms:Je([mt.lights,mt.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};In.physical={uniforms:Je([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};const Zs={r:0,b:0,g:0},wi=new Vn,Xg=new de;function qg(n,t,e,i,r,s,o){const a=new Qt(0);let c=s===!0?0:1,l,h,u=null,d=0,p=null;function g(M){let _=M.isScene===!0?M.background:null;return _&&_.isTexture&&(_=(M.backgroundBlurriness>0?e:t).get(_)),_}function x(M){let _=!1;const L=g(M);L===null?f(a,c):L&&L.isColor&&(f(L,1),_=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(M,_){const L=g(_);L&&(L.isCubeTexture||L.mapping===Bo)?(h===void 0&&(h=new It(new Mr(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:_r(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,P,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),wi.copy(_.backgroundRotation),wi.x*=-1,wi.y*=-1,wi.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),h.material.uniforms.envMap.value=L,h.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Xg.makeRotationFromEuler(wi)),h.material.toneMapped=ue.getTransfer(L.colorSpace)!==_e,(u!==L||d!==L.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=L,d=L.version,p=n.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):L&&L.isTexture&&(l===void 0&&(l=new It(new ds(2,2),new ei({name:"BackgroundMaterial",uniforms:_r(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=L,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=ue.getTransfer(L.colorSpace)!==_e,L.matrixAutoUpdate===!0&&L.updateMatrix(),l.material.uniforms.uvTransform.value.copy(L.matrix),(u!==L||d!==L.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,u=L,d=L.version,p=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function f(M,_){M.getRGB(Zs,Cu(n)),i.buffers.color.setClear(Zs.r,Zs.g,Zs.b,_,o)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,_=1){a.set(M),c=_,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,f(a,c)},render:x,addToRenderList:m,dispose:b}}function Yg(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(y,I,k,F,q){let K=!1;const V=u(F,k,I);s!==V&&(s=V,l(s.object)),K=p(y,F,k,q),K&&g(y,F,k,q),q!==null&&t.update(q,n.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,_(y,I,k,F),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function c(){return n.createVertexArray()}function l(y){return n.bindVertexArray(y)}function h(y){return n.deleteVertexArray(y)}function u(y,I,k){const F=k.wireframe===!0;let q=i[y.id];q===void 0&&(q={},i[y.id]=q);let K=q[I.id];K===void 0&&(K={},q[I.id]=K);let V=K[F];return V===void 0&&(V=d(c()),K[F]=V),V}function d(y){const I=[],k=[],F=[];for(let q=0;q<e;q++)I[q]=0,k[q]=0,F[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:k,attributeDivisors:F,object:y,attributes:{},index:null}}function p(y,I,k,F){const q=s.attributes,K=I.attributes;let V=0;const B=k.getAttributes();for(const H in B)if(B[H].location>=0){const tt=q[H];let _t=K[H];if(_t===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(_t=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(_t=y.instanceColor)),tt===void 0||tt.attribute!==_t||_t&&tt.data!==_t.data)return!0;V++}return s.attributesNum!==V||s.index!==F}function g(y,I,k,F){const q={},K=I.attributes;let V=0;const B=k.getAttributes();for(const H in B)if(B[H].location>=0){let tt=K[H];tt===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(tt=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(tt=y.instanceColor));const _t={};_t.attribute=tt,tt&&tt.data&&(_t.data=tt.data),q[H]=_t,V++}s.attributes=q,s.attributesNum=V,s.index=F}function x(){const y=s.newAttributes;for(let I=0,k=y.length;I<k;I++)y[I]=0}function m(y){f(y,0)}function f(y,I){const k=s.newAttributes,F=s.enabledAttributes,q=s.attributeDivisors;k[y]=1,F[y]===0&&(n.enableVertexAttribArray(y),F[y]=1),q[y]!==I&&(n.vertexAttribDivisor(y,I),q[y]=I)}function b(){const y=s.newAttributes,I=s.enabledAttributes;for(let k=0,F=I.length;k<F;k++)I[k]!==y[k]&&(n.disableVertexAttribArray(k),I[k]=0)}function M(y,I,k,F,q,K,V){V===!0?n.vertexAttribIPointer(y,I,k,q,K):n.vertexAttribPointer(y,I,k,F,q,K)}function _(y,I,k,F){x();const q=F.attributes,K=k.getAttributes(),V=I.defaultAttributeValues;for(const B in K){const H=K[B];if(H.location>=0){let ct=q[B];if(ct===void 0&&(B==="instanceMatrix"&&y.instanceMatrix&&(ct=y.instanceMatrix),B==="instanceColor"&&y.instanceColor&&(ct=y.instanceColor)),ct!==void 0){const tt=ct.normalized,_t=ct.itemSize,Bt=t.get(ct);if(Bt===void 0)continue;const At=Bt.buffer,G=Bt.type,nt=Bt.bytesPerElement,ft=G===n.INT||G===n.UNSIGNED_INT||ct.gpuType===Zc;if(ct.isInterleavedBufferAttribute){const ut=ct.data,Mt=ut.stride,qt=ct.offset;if(ut.isInstancedInterleavedBuffer){for(let Ot=0;Ot<H.locationSize;Ot++)f(H.location+Ot,ut.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Ot=0;Ot<H.locationSize;Ot++)m(H.location+Ot);n.bindBuffer(n.ARRAY_BUFFER,At);for(let Ot=0;Ot<H.locationSize;Ot++)M(H.location+Ot,_t/H.locationSize,G,tt,Mt*nt,(qt+_t/H.locationSize*Ot)*nt,ft)}else{if(ct.isInstancedBufferAttribute){for(let ut=0;ut<H.locationSize;ut++)f(H.location+ut,ct.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let ut=0;ut<H.locationSize;ut++)m(H.location+ut);n.bindBuffer(n.ARRAY_BUFFER,At);for(let ut=0;ut<H.locationSize;ut++)M(H.location+ut,_t/H.locationSize,G,tt,_t*nt,_t/H.locationSize*ut*nt,ft)}}else if(V!==void 0){const tt=V[B];if(tt!==void 0)switch(tt.length){case 2:n.vertexAttrib2fv(H.location,tt);break;case 3:n.vertexAttrib3fv(H.location,tt);break;case 4:n.vertexAttrib4fv(H.location,tt);break;default:n.vertexAttrib1fv(H.location,tt)}}}}b()}function L(){D();for(const y in i){const I=i[y];for(const k in I){const F=I[k];for(const q in F)h(F[q].object),delete F[q];delete I[k]}delete i[y]}}function C(y){if(i[y.id]===void 0)return;const I=i[y.id];for(const k in I){const F=I[k];for(const q in F)h(F[q].object),delete F[q];delete I[k]}delete i[y.id]}function P(y){for(const I in i){const k=i[I];if(k[y.id]===void 0)continue;const F=k[y.id];for(const q in F)h(F[q].object),delete F[q];delete k[y.id]}}function D(){S(),o=!0,s!==r&&(s=r,l(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:S,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function Kg(n,t,e){let i;function r(l){i=l}function s(l,h){n.drawArrays(i,l,h),e.update(h,i,1)}function o(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),e.update(h,i,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,i,1)}function c(l,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];e.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function $g(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==Cn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const D=P===ls&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==kn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Nn&&!D)}function c(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:_,vertexTextures:L,maxSamples:C}}function Zg(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new Ri,a=new jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||i!==0||r;return r=d,i=u.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,f=n.get(u);if(!r||g===null||g.length===0||s&&!m)s?h(null):l();else{const b=s?0:i,M=b*4;let _=f.clippingState||null;c.value=_,_=h(g,d,M,p);for(let L=0;L!==M;++L)_[L]=e[L];f.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,p,g){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const f=p+x*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<f)&&(m=new Float32Array(f));for(let M=0,_=p;M!==x;++M,_+=4)o.copy(u[M]).applyMatrix4(b,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Jg(n){let t=new WeakMap;function e(o,a){return a===ec?o.mapping=pr:a===nc&&(o.mapping=mr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ec||a===nc)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new dp(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}const lr=4,xh=[.125,.215,.35,.446,.526,.582],Di=20,Aa=new qu,yh=new Qt;let Ra=null,Ca=0,Pa=0,Da=!1;const Ci=(1+Math.sqrt(5))/2,ar=1/Ci,Mh=[new A(-Ci,ar,0),new A(Ci,ar,0),new A(-ar,0,Ci),new A(ar,0,Ci),new A(0,Ci,-ar),new A(0,Ci,ar),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)],jg=new A;class Sh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100,s={}){const{size:o=256,position:a=jg}=s;Ra=this._renderer.getRenderTarget(),Ca=this._renderer.getActiveCubeFace(),Pa=this._renderer.getActiveMipmapLevel(),Da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,r,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ra,Ca,Pa),this._renderer.xr.enabled=Da,t.scissorTest=!1,Js(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===pr||t.mapping===mr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ra=this._renderer.getRenderTarget(),Ca=this._renderer.getActiveCubeFace(),Pa=this._renderer.getActiveMipmapLevel(),Da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:ls,format:Cn,colorSpace:gr,depthBuffer:!1},r=wh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wh(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qg(s)),this._blurMaterial=t_(s,t,e)}return r}_compileMaterial(t){const e=new It(this._lodPlanes[0],t);this._renderer.compile(e,Aa)}_sceneToCubeUV(t,e,i,r,s){const c=new gn(90,1,e,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(yh),u.toneMapping=fi,u.autoClear=!1;const g=new rn({name:"PMREM.Background",side:Ye,depthWrite:!1,depthTest:!1}),x=new It(new Mr,g);let m=!1;const f=t.background;f?f.isColor&&(g.color.copy(f),t.background=null,m=!0):(g.color.copy(yh),m=!0);for(let b=0;b<6;b++){const M=b%3;M===0?(c.up.set(0,l[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[b],s.y,s.z)):M===1?(c.up.set(0,0,l[b]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[b],s.z)):(c.up.set(0,l[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[b]));const _=this._cubeSize;Js(r,M*_,b>2?_:0,_,_),u.setRenderTarget(r),m&&u.render(x,c),u.render(t,c)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=p,u.autoClear=d,t.background=f}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===pr||t.mapping===mr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=bh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new It(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;Js(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,Aa)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Mh[(r-s-1)%Mh.length];this._blur(t,s-1,s,o,a)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new It(this._lodPlanes[r],l),d=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Di-1),x=s/g,m=isFinite(s)?1+Math.floor(h*x):Di;m>Di&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Di}`);const f=[];let b=0;for(let P=0;P<Di;++P){const D=P/x,S=Math.exp(-D*D/2);f.push(S),P===0?b+=S:P<m&&(b+=2*S)}for(let P=0;P<f.length;P++)f[P]=f[P]/b;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-i;const _=this._sizeLods[r],L=3*_*(r>M-lr?r-M+lr:0),C=4*(this._cubeSize-_);Js(e,L,C,3*_,2*_),c.setRenderTarget(e),c.render(u,Aa)}}function Qg(n){const t=[],e=[],i=[];let r=n;const s=n-lr+1+xh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let c=1/a;o>n-lr?c=xh[o-n+lr-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,x=3,m=2,f=1,b=new Float32Array(x*g*p),M=new Float32Array(m*g*p),_=new Float32Array(f*g*p);for(let C=0;C<p;C++){const P=C%3*2/3-1,D=C>2?0:-1,S=[P,D,0,P+2/3,D,0,P+2/3,D+1,0,P,D,0,P+2/3,D+1,0,P,D+1,0];b.set(S,x*g*C),M.set(d,m*g*C);const y=[C,C,C,C,C,C];_.set(y,f*g*C)}const L=new we;L.setAttribute("position",new yn(b,x)),L.setAttribute("uv",new yn(M,m)),L.setAttribute("faceIndex",new yn(_,f)),t.push(L),r>lr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function wh(n,t,e){const i=new Oi(n,t,e);return i.texture.mapping=Bo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Js(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function t_(n,t,e){const i=new Float32Array(Di),r=new A(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:Di,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:pl(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Eh(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pl(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function bh(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function pl(){return`

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
	`}function e_(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===ec||c===nc,h=c===pr||c===mr;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Sh(n)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return l&&p&&p.height>0||h&&p&&r(p)?(e===null&&(e=new Sh(n)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function n_(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&hr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function i_(n,t,e,i){const r={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(t.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const p in d)t.update(d[p],n.ARRAY_BUFFER)}function l(u){const d=[],p=u.index,g=u.attributes.position;let x=0;if(p!==null){const b=p.array;x=p.version;for(let M=0,_=b.length;M<_;M+=3){const L=b[M+0],C=b[M+1],P=b[M+2];d.push(L,C,C,P,P,L)}}else if(g!==void 0){const b=g.array;x=g.version;for(let M=0,_=b.length/3-1;M<_;M+=3){const L=M+0,C=M+1,P=M+2;d.push(L,C,C,P,P,L)}}else return;const m=new(Eu(d)?Ru:Au)(d,1);m.version=x;const f=s.get(u);f&&t.remove(f),s.set(u,m)}function h(u){const d=s.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function r_(n,t,e){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,p){n.drawElements(i,p,s,d*o),e.update(p,i,1)}function l(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,d*o,g),e.update(p,i,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,i,1)}function u(d,p,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/o,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,x,0,g);let f=0;for(let b=0;b<g;b++)f+=p[b]*x[b];e.update(f,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function s_(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function o_(n,t,e){const i=new WeakMap,r=new Pe;function s(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==u){let y=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var p=y;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),x===!0&&(_=2),m===!0&&(_=3);let L=a.attributes.position.count*_,C=1;L>t.maxTextureSize&&(C=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const P=new Float32Array(L*C*4*u),D=new bu(P,L,C,u);D.type=Nn,D.needsUpdate=!0;const S=_*4;for(let I=0;I<u;I++){const k=f[I],F=b[I],q=M[I],K=L*C*4*I;for(let V=0;V<k.count;V++){const B=V*S;g===!0&&(r.fromBufferAttribute(k,V),P[K+B+0]=r.x,P[K+B+1]=r.y,P[K+B+2]=r.z,P[K+B+3]=0),x===!0&&(r.fromBufferAttribute(F,V),P[K+B+4]=r.x,P[K+B+5]=r.y,P[K+B+6]=r.z,P[K+B+7]=0),m===!0&&(r.fromBufferAttribute(q,V),P[K+B+8]=r.x,P[K+B+9]=r.y,P[K+B+10]=r.z,P[K+B+11]=q.itemSize===4?r.w:1)}}d={count:u,texture:D,size:new at(L,C)},i.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const x=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",x),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function a_(n,t,e,i){let r=new WeakMap;function s(c){const l=i.render.frame,h=c.geometry,u=t.get(c,h);if(r.get(u)!==l&&(t.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return u}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}const Zu=new Ke,Th=new Nu(1,1),Ju=new bu,ju=new Zd,Qu=new Du,Ah=[],Rh=[],Ch=new Float32Array(16),Ph=new Float32Array(9),Dh=new Float32Array(4);function Sr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=Ah[r];if(s===void 0&&(s=new Float32Array(r),Ah[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function Be(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ze(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Go(n,t){let e=Rh[t];e===void 0&&(e=new Int32Array(t),Rh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function c_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function l_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;n.uniform2fv(this.addr,t),ze(e,t)}}function h_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Be(e,t))return;n.uniform3fv(this.addr,t),ze(e,t)}}function u_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;n.uniform4fv(this.addr,t),ze(e,t)}}function f_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Be(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,i))return;Dh.set(i),n.uniformMatrix2fv(this.addr,!1,Dh),ze(e,i)}}function d_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Be(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,i))return;Ph.set(i),n.uniformMatrix3fv(this.addr,!1,Ph),ze(e,i)}}function p_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Be(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,i))return;Ch.set(i),n.uniformMatrix4fv(this.addr,!1,Ch),ze(e,i)}}function m_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function g_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;n.uniform2iv(this.addr,t),ze(e,t)}}function __(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;n.uniform3iv(this.addr,t),ze(e,t)}}function v_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;n.uniform4iv(this.addr,t),ze(e,t)}}function x_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function y_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;n.uniform2uiv(this.addr,t),ze(e,t)}}function M_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;n.uniform3uiv(this.addr,t),ze(e,t)}}function S_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;n.uniform4uiv(this.addr,t),ze(e,t)}}function w_(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Th.compareFunction=wu,s=Th):s=Zu,e.setTexture2D(t||s,r)}function E_(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||ju,r)}function b_(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Qu,r)}function T_(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Ju,r)}function A_(n){switch(n){case 5126:return c_;case 35664:return l_;case 35665:return h_;case 35666:return u_;case 35674:return f_;case 35675:return d_;case 35676:return p_;case 5124:case 35670:return m_;case 35667:case 35671:return g_;case 35668:case 35672:return __;case 35669:case 35673:return v_;case 5125:return x_;case 36294:return y_;case 36295:return M_;case 36296:return S_;case 35678:case 36198:case 36298:case 36306:case 35682:return w_;case 35679:case 36299:case 36307:return E_;case 35680:case 36300:case 36308:case 36293:return b_;case 36289:case 36303:case 36311:case 36292:return T_}}function R_(n,t){n.uniform1fv(this.addr,t)}function C_(n,t){const e=Sr(t,this.size,2);n.uniform2fv(this.addr,e)}function P_(n,t){const e=Sr(t,this.size,3);n.uniform3fv(this.addr,e)}function D_(n,t){const e=Sr(t,this.size,4);n.uniform4fv(this.addr,e)}function L_(n,t){const e=Sr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function I_(n,t){const e=Sr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function U_(n,t){const e=Sr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function N_(n,t){n.uniform1iv(this.addr,t)}function F_(n,t){n.uniform2iv(this.addr,t)}function O_(n,t){n.uniform3iv(this.addr,t)}function B_(n,t){n.uniform4iv(this.addr,t)}function z_(n,t){n.uniform1uiv(this.addr,t)}function k_(n,t){n.uniform2uiv(this.addr,t)}function V_(n,t){n.uniform3uiv(this.addr,t)}function H_(n,t){n.uniform4uiv(this.addr,t)}function G_(n,t,e){const i=this.cache,r=t.length,s=Go(e,r);Be(i,s)||(n.uniform1iv(this.addr,s),ze(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Zu,s[o])}function W_(n,t,e){const i=this.cache,r=t.length,s=Go(e,r);Be(i,s)||(n.uniform1iv(this.addr,s),ze(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||ju,s[o])}function X_(n,t,e){const i=this.cache,r=t.length,s=Go(e,r);Be(i,s)||(n.uniform1iv(this.addr,s),ze(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Qu,s[o])}function q_(n,t,e){const i=this.cache,r=t.length,s=Go(e,r);Be(i,s)||(n.uniform1iv(this.addr,s),ze(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Ju,s[o])}function Y_(n){switch(n){case 5126:return R_;case 35664:return C_;case 35665:return P_;case 35666:return D_;case 35674:return L_;case 35675:return I_;case 35676:return U_;case 5124:case 35670:return N_;case 35667:case 35671:return F_;case 35668:case 35672:return O_;case 35669:case 35673:return B_;case 5125:return z_;case 36294:return k_;case 36295:return V_;case 36296:return H_;case 35678:case 36198:case 36298:case 36306:case 35682:return G_;case 35679:case 36299:case 36307:return W_;case 35680:case 36300:case 36308:case 36293:return X_;case 36289:case 36303:case 36311:case 36292:return q_}}class K_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=A_(e.type)}}class $_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Y_(e.type)}}class Z_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const La=/(\w+)(\])?(\[|\.)?/g;function Lh(n,t){n.seq.push(t),n.map[t.id]=t}function J_(n,t,e){const i=n.name,r=i.length;for(La.lastIndex=0;;){const s=La.exec(i),o=La.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Lh(e,l===void 0?new K_(a,n,t):new $_(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new Z_(a),Lh(e,u)),e=u}}}class mo{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);J_(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function Ih(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const j_=37297;let Q_=0;function tv(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const Uh=new jt;function ev(n){ue._getMatrix(Uh,ue.workingColorSpace,n);const t=`mat3( ${Uh.elements.map(e=>e.toFixed(4))} )`;switch(ue.getTransfer(n)){case So:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Nh(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+tv(n.getShaderSource(t),o)}else return r}function nv(n,t){const e=ev(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function iv(n,t){let e;switch(t){case cd:e="Linear";break;case ld:e="Reinhard";break;case hd:e="Cineon";break;case du:e="ACESFilmic";break;case fd:e="AgX";break;case dd:e="Neutral";break;case ud:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const js=new A;function rv(){ue.getLuminanceCoefficients(js);const n=js.x.toFixed(4),t=js.y.toFixed(4),e=js.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hr).join(`
`)}function ov(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function av(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Hr(n){return n!==""}function Fh(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Oh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const cv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fc(n){return n.replace(cv,hv)}const lv=new Map;function hv(n,t){let e=te[t];if(e===void 0){const i=lv.get(t);if(i!==void 0)e=te[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Fc(e)}const uv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bh(n){return n.replace(uv,fv)}function fv(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function zh(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function dv(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===hu?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===uu?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Zn&&(t="SHADOWMAP_TYPE_VSM"),t}function pv(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case pr:case mr:t="ENVMAP_TYPE_CUBE";break;case Bo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function mv(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case mr:t="ENVMAP_MODE_REFRACTION";break}return t}function gv(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case fu:t="ENVMAP_BLENDING_MULTIPLY";break;case od:t="ENVMAP_BLENDING_MIX";break;case ad:t="ENVMAP_BLENDING_ADD";break}return t}function _v(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function vv(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=dv(e),l=pv(e),h=mv(e),u=gv(e),d=_v(e),p=sv(e),g=ov(s),x=r.createProgram();let m,f,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Hr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Hr).join(`
`),f.length>0&&(f+=`
`)):(m=[zh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hr).join(`
`),f=[zh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fi?"#define TONE_MAPPING":"",e.toneMapping!==fi?te.tonemapping_pars_fragment:"",e.toneMapping!==fi?iv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,nv("linearToOutputTexel",e.outputColorSpace),rv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Hr).join(`
`)),o=Fc(o),o=Fh(o,e),o=Oh(o,e),a=Fc(a),a=Fh(a,e),a=Oh(a,e),o=Bh(o),a=Bh(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Ul?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ul?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=b+m+o,_=b+f+a,L=Ih(r,r.VERTEX_SHADER,M),C=Ih(r,r.FRAGMENT_SHADER,_);r.attachShader(x,L),r.attachShader(x,C),e.index0AttributeName!==void 0?r.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function P(I){if(n.debug.checkShaderErrors){const k=r.getProgramInfoLog(x).trim(),F=r.getShaderInfoLog(L).trim(),q=r.getShaderInfoLog(C).trim();let K=!0,V=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(K=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,L,C);else{const B=Nh(r,L,"vertex"),H=Nh(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+k+`
`+B+`
`+H)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(F===""||q==="")&&(V=!1);V&&(I.diagnostics={runnable:K,programLog:k,vertexShader:{log:F,prefix:m},fragmentShader:{log:q,prefix:f}})}r.deleteShader(L),r.deleteShader(C),D=new mo(r,x),S=av(r,x)}let D;this.getUniforms=function(){return D===void 0&&P(this),D};let S;this.getAttributes=function(){return S===void 0&&P(this),S};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(x,j_)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Q_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=L,this.fragmentShader=C,this}let xv=0;class yv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Mv(t),e.set(t,i)),i}}class Mv{constructor(t){this.id=xv++,this.code=t,this.usedTimes=0}}function Sv(n,t,e,i,r,s,o){const a=new sl,c=new yv,l=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,y,I,k,F){const q=k.fog,K=F.geometry,V=S.isMeshStandardMaterial?k.environment:null,B=(S.isMeshStandardMaterial?e:t).get(S.envMap||V),H=B&&B.mapping===Bo?B.image.height:null,ct=g[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const tt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,_t=tt!==void 0?tt.length:0;let Bt=0;K.morphAttributes.position!==void 0&&(Bt=1),K.morphAttributes.normal!==void 0&&(Bt=2),K.morphAttributes.color!==void 0&&(Bt=3);let At,G,nt,ft;if(ct){const pe=In[ct];At=pe.vertexShader,G=pe.fragmentShader}else At=S.vertexShader,G=S.fragmentShader,c.update(S),nt=c.getVertexShaderID(S),ft=c.getFragmentShaderID(S);const ut=n.getRenderTarget(),Mt=n.state.buffers.depth.getReversed(),qt=F.isInstancedMesh===!0,Ot=F.isBatchedMesh===!0,xe=!!S.map,le=!!S.matcap,Jt=!!B,T=!!S.aoMap,lt=!!S.lightMap,et=!!S.bumpMap,ht=!!S.normalMap,Z=!!S.displacementMap,wt=!!S.emissiveMap,rt=!!S.metalnessMap,Et=!!S.roughnessMap,$t=S.anisotropy>0,R=S.clearcoat>0,v=S.dispersion>0,z=S.iridescence>0,Y=S.sheen>0,j=S.transmission>0,$=$t&&!!S.anisotropyMap,Nt=R&&!!S.clearcoatMap,dt=R&&!!S.clearcoatNormalMap,Ct=R&&!!S.clearcoatRoughnessMap,Ft=z&&!!S.iridescenceMap,Q=z&&!!S.iridescenceThicknessMap,bt=Y&&!!S.sheenColorMap,Gt=Y&&!!S.sheenRoughnessMap,Vt=!!S.specularMap,pt=!!S.specularColorMap,Yt=!!S.specularIntensityMap,U=j&&!!S.transmissionMap,vt=j&&!!S.thicknessMap,it=!!S.gradientMap,Rt=!!S.alphaMap,st=S.alphaTest>0,J=!!S.alphaHash,Pt=!!S.extensions;let Zt=fi;S.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(Zt=n.toneMapping);const ye={shaderID:ct,shaderType:S.type,shaderName:S.name,vertexShader:At,fragmentShader:G,defines:S.defines,customVertexShaderID:nt,customFragmentShaderID:ft,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Ot,batchingColor:Ot&&F._colorsTexture!==null,instancing:qt,instancingColor:qt&&F.instanceColor!==null,instancingMorph:qt&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ut===null?n.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:gr,alphaToCoverage:!!S.alphaToCoverage,map:xe,matcap:le,envMap:Jt,envMapMode:Jt&&B.mapping,envMapCubeUVHeight:H,aoMap:T,lightMap:lt,bumpMap:et,normalMap:ht,displacementMap:d&&Z,emissiveMap:wt,normalMapObjectSpace:ht&&S.normalMapType===_d,normalMapTangentSpace:ht&&S.normalMapType===Su,metalnessMap:rt,roughnessMap:Et,anisotropy:$t,anisotropyMap:$,clearcoat:R,clearcoatMap:Nt,clearcoatNormalMap:dt,clearcoatRoughnessMap:Ct,dispersion:v,iridescence:z,iridescenceMap:Ft,iridescenceThicknessMap:Q,sheen:Y,sheenColorMap:bt,sheenRoughnessMap:Gt,specularMap:Vt,specularColorMap:pt,specularIntensityMap:Yt,transmission:j,transmissionMap:U,thicknessMap:vt,gradientMap:it,opaque:S.transparent===!1&&S.blending===Ui&&S.alphaToCoverage===!1,alphaMap:Rt,alphaTest:st,alphaHash:J,combine:S.combine,mapUv:xe&&x(S.map.channel),aoMapUv:T&&x(S.aoMap.channel),lightMapUv:lt&&x(S.lightMap.channel),bumpMapUv:et&&x(S.bumpMap.channel),normalMapUv:ht&&x(S.normalMap.channel),displacementMapUv:Z&&x(S.displacementMap.channel),emissiveMapUv:wt&&x(S.emissiveMap.channel),metalnessMapUv:rt&&x(S.metalnessMap.channel),roughnessMapUv:Et&&x(S.roughnessMap.channel),anisotropyMapUv:$&&x(S.anisotropyMap.channel),clearcoatMapUv:Nt&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:dt&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ct&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&x(S.sheenRoughnessMap.channel),specularMapUv:Vt&&x(S.specularMap.channel),specularColorMapUv:pt&&x(S.specularColorMap.channel),specularIntensityMapUv:Yt&&x(S.specularIntensityMap.channel),transmissionMapUv:U&&x(S.transmissionMap.channel),thicknessMapUv:vt&&x(S.thicknessMap.channel),alphaMapUv:Rt&&x(S.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(ht||$t),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!K.attributes.uv&&(xe||Rt),fog:!!q,useFog:S.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Mt,skinning:F.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Bt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Zt,decodeVideoTexture:xe&&S.map.isVideoTexture===!0&&ue.getTransfer(S.map.colorSpace)===_e,decodeVideoTextureEmissive:wt&&S.emissiveMap.isVideoTexture===!0&&ue.getTransfer(S.emissiveMap.colorSpace)===_e,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ge,flipSided:S.side===Ye,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Pt&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pt&&S.extensions.multiDraw===!0||Ot)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ye.vertexUv1s=l.has(1),ye.vertexUv2s=l.has(2),ye.vertexUv3s=l.has(3),l.clear(),ye}function f(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const I in S.defines)y.push(I),y.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(b(y,S),M(y,S),y.push(n.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function b(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function M(S,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),S.push(a.mask)}function _(S){const y=g[S.type];let I;if(y){const k=In[y];I=lp.clone(k.uniforms)}else I=S.uniforms;return I}function L(S,y){let I;for(let k=0,F=h.length;k<F;k++){const q=h[k];if(q.cacheKey===y){I=q,++I.usedTimes;break}}return I===void 0&&(I=new vv(n,y,S,s),h.push(I)),I}function C(S){if(--S.usedTimes===0){const y=h.indexOf(S);h[y]=h[h.length-1],h.pop(),S.destroy()}}function P(S){c.remove(S)}function D(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:_,acquireProgram:L,releaseProgram:C,releaseShaderCache:P,programs:h,dispose:D}}function wv(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function Ev(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function kh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Vh(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(u,d,p,g,x,m){let f=n[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},n[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=x,f.group=m),t++,f}function a(u,d,p,g,x,m){const f=o(u,d,p,g,x,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):e.push(f)}function c(u,d,p,g,x,m){const f=o(u,d,p,g,x,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):e.unshift(f)}function l(u,d){e.length>1&&e.sort(u||Ev),i.length>1&&i.sort(d||kh),r.length>1&&r.sort(d||kh)}function h(){for(let u=t,d=n.length;u<d;u++){const p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:h,sort:l}}function bv(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new Vh,n.set(i,[o])):r>=s.length?(o=new Vh,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Tv(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new Qt};break;case"SpotLight":e={position:new A,direction:new A,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new A,halfWidth:new A,halfHeight:new A};break}return n[t.id]=e,e}}}function Av(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Rv=0;function Cv(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Pv(n){const t=new Tv,e=Av(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new A);const r=new A,s=new de,o=new de;function a(l){let h=0,u=0,d=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,g=0,x=0,m=0,f=0,b=0,M=0,_=0,L=0,C=0,P=0;l.sort(Cv);for(let S=0,y=l.length;S<y;S++){const I=l[S],k=I.color,F=I.intensity,q=I.distance,K=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=k.r*F,u+=k.g*F,d+=k.b*F;else if(I.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(I.sh.coefficients[V],F);P++}else if(I.isDirectionalLight){const V=t.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const B=I.shadow,H=e.get(I);H.shadowIntensity=B.intensity,H.shadowBias=B.bias,H.shadowNormalBias=B.normalBias,H.shadowRadius=B.radius,H.shadowMapSize=B.mapSize,i.directionalShadow[p]=H,i.directionalShadowMap[p]=K,i.directionalShadowMatrix[p]=I.shadow.matrix,b++}i.directional[p]=V,p++}else if(I.isSpotLight){const V=t.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(k).multiplyScalar(F),V.distance=q,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,i.spot[x]=V;const B=I.shadow;if(I.map&&(i.spotLightMap[L]=I.map,L++,B.updateMatrices(I),I.castShadow&&C++),i.spotLightMatrix[x]=B.matrix,I.castShadow){const H=e.get(I);H.shadowIntensity=B.intensity,H.shadowBias=B.bias,H.shadowNormalBias=B.normalBias,H.shadowRadius=B.radius,H.shadowMapSize=B.mapSize,i.spotShadow[x]=H,i.spotShadowMap[x]=K,_++}x++}else if(I.isRectAreaLight){const V=t.get(I);V.color.copy(k).multiplyScalar(F),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=V,m++}else if(I.isPointLight){const V=t.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),V.distance=I.distance,V.decay=I.decay,I.castShadow){const B=I.shadow,H=e.get(I);H.shadowIntensity=B.intensity,H.shadowBias=B.bias,H.shadowNormalBias=B.normalBias,H.shadowRadius=B.radius,H.shadowMapSize=B.mapSize,H.shadowCameraNear=B.camera.near,H.shadowCameraFar=B.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=K,i.pointShadowMatrix[g]=I.shadow.matrix,M++}i.point[g]=V,g++}else if(I.isHemisphereLight){const V=t.get(I);V.skyColor.copy(I.color).multiplyScalar(F),V.groundColor.copy(I.groundColor).multiplyScalar(F),i.hemi[f]=V,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const D=i.hash;(D.directionalLength!==p||D.pointLength!==g||D.spotLength!==x||D.rectAreaLength!==m||D.hemiLength!==f||D.numDirectionalShadows!==b||D.numPointShadows!==M||D.numSpotShadows!==_||D.numSpotMaps!==L||D.numLightProbes!==P)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=_+L-C,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=P,D.directionalLength=p,D.pointLength=g,D.spotLength=x,D.rectAreaLength=m,D.hemiLength=f,D.numDirectionalShadows=b,D.numPointShadows=M,D.numSpotShadows=_,D.numSpotMaps=L,D.numLightProbes=P,i.version=Rv++)}function c(l,h){let u=0,d=0,p=0,g=0,x=0;const m=h.matrixWorldInverse;for(let f=0,b=l.length;f<b;f++){const M=l[f];if(M.isDirectionalLight){const _=i.directional[u];_.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),u++}else if(M.isSpotLight){const _=i.spot[p];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),p++}else if(M.isRectAreaLight){const _=i.rectArea[g];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),o.identity(),s.copy(M.matrixWorld),s.premultiply(m),o.extractRotation(s),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const _=i.point[d];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const _=i.hemi[x];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:i}}function Hh(n){const t=new Pv(n),e=[],i=[];function r(h){l.camera=h,e.length=0,i.length=0}function s(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function Dv(n){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new Hh(n),t.set(r,[a])):s>=o.length?(a=new Hh(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const Lv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Iv=`uniform sampler2D shadow_pass;
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
}`;function Uv(n,t,e){let i=new al;const r=new at,s=new at,o=new Pe,a=new im({depthPacking:gd}),c=new rm,l={},h=e.maxTextureSize,u={[mi]:Ye,[Ye]:mi,[Ge]:Ge},d=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:Lv,fragmentShader:Iv}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new we;g.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new It(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hu;let f=this.type;this.render=function(C,P,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const S=n.getRenderTarget(),y=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),k=n.state;k.setBlending(ui),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const F=f!==Zn&&this.type===Zn,q=f===Zn&&this.type!==Zn;for(let K=0,V=C.length;K<V;K++){const B=C[K],H=B.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const ct=H.getFrameExtents();if(r.multiply(ct),s.copy(H.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ct.x),r.x=s.x*ct.x,H.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ct.y),r.y=s.y*ct.y,H.mapSize.y=s.y)),H.map===null||F===!0||q===!0){const _t=this.type!==Zn?{minFilter:ln,magFilter:ln}:{};H.map!==null&&H.map.dispose(),H.map=new Oi(r.x,r.y,_t),H.map.texture.name=B.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const tt=H.getViewportCount();for(let _t=0;_t<tt;_t++){const Bt=H.getViewport(_t);o.set(s.x*Bt.x,s.y*Bt.y,s.x*Bt.z,s.y*Bt.w),k.viewport(o),H.updateMatrices(B,_t),i=H.getFrustum(),_(P,D,H.camera,B,this.type)}H.isPointLightShadow!==!0&&this.type===Zn&&b(H,D),H.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(S,y,I)};function b(C,P){const D=t.update(x);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Oi(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(P,null,D,d,x,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(P,null,D,p,x,null)}function M(C,P,D,S){let y=null;const I=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(I!==void 0)y=I;else if(y=D.isPointLight===!0?c:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const k=y.uuid,F=P.uuid;let q=l[k];q===void 0&&(q={},l[k]=q);let K=q[F];K===void 0&&(K=y.clone(),q[F]=K,P.addEventListener("dispose",L)),y=K}if(y.visible=P.visible,y.wireframe=P.wireframe,S===Zn?y.side=P.shadowSide!==null?P.shadowSide:P.side:y.side=P.shadowSide!==null?P.shadowSide:u[P.side],y.alphaMap=P.alphaMap,y.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,y.map=P.map,y.clipShadows=P.clipShadows,y.clippingPlanes=P.clippingPlanes,y.clipIntersection=P.clipIntersection,y.displacementMap=P.displacementMap,y.displacementScale=P.displacementScale,y.displacementBias=P.displacementBias,y.wireframeLinewidth=P.wireframeLinewidth,y.linewidth=P.linewidth,D.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const k=n.properties.get(y);k.light=D}return y}function _(C,P,D,S,y){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===Zn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);const F=t.update(C),q=C.material;if(Array.isArray(q)){const K=F.groups;for(let V=0,B=K.length;V<B;V++){const H=K[V],ct=q[H.materialIndex];if(ct&&ct.visible){const tt=M(C,ct,S,y);C.onBeforeShadow(n,C,P,D,F,tt,H),n.renderBufferDirect(D,null,F,tt,C,H),C.onAfterShadow(n,C,P,D,F,tt,H)}}}else if(q.visible){const K=M(C,q,S,y);C.onBeforeShadow(n,C,P,D,F,K,null),n.renderBufferDirect(D,null,F,K,C,null),C.onAfterShadow(n,C,P,D,F,K,null)}}const k=C.children;for(let F=0,q=k.length;F<q;F++)_(k[F],P,D,S,y)}function L(C){C.target.removeEventListener("dispose",L);for(const D in l){const S=l[D],y=C.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const Nv={[Ka]:$a,[Za]:Qa,[Ja]:tc,[dr]:ja,[$a]:Ka,[Qa]:Za,[tc]:Ja,[ja]:dr};function Fv(n,t){function e(){let U=!1;const vt=new Pe;let it=null;const Rt=new Pe(0,0,0,0);return{setMask:function(st){it!==st&&!U&&(n.colorMask(st,st,st,st),it=st)},setLocked:function(st){U=st},setClear:function(st,J,Pt,Zt,ye){ye===!0&&(st*=Zt,J*=Zt,Pt*=Zt),vt.set(st,J,Pt,Zt),Rt.equals(vt)===!1&&(n.clearColor(st,J,Pt,Zt),Rt.copy(vt))},reset:function(){U=!1,it=null,Rt.set(-1,0,0,0)}}}function i(){let U=!1,vt=!1,it=null,Rt=null,st=null;return{setReversed:function(J){if(vt!==J){const Pt=t.get("EXT_clip_control");J?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT),vt=J;const Zt=st;st=null,this.setClear(Zt)}},getReversed:function(){return vt},setTest:function(J){J?ut(n.DEPTH_TEST):Mt(n.DEPTH_TEST)},setMask:function(J){it!==J&&!U&&(n.depthMask(J),it=J)},setFunc:function(J){if(vt&&(J=Nv[J]),Rt!==J){switch(J){case Ka:n.depthFunc(n.NEVER);break;case $a:n.depthFunc(n.ALWAYS);break;case Za:n.depthFunc(n.LESS);break;case dr:n.depthFunc(n.LEQUAL);break;case Ja:n.depthFunc(n.EQUAL);break;case ja:n.depthFunc(n.GEQUAL);break;case Qa:n.depthFunc(n.GREATER);break;case tc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Rt=J}},setLocked:function(J){U=J},setClear:function(J){st!==J&&(vt&&(J=1-J),n.clearDepth(J),st=J)},reset:function(){U=!1,it=null,Rt=null,st=null,vt=!1}}}function r(){let U=!1,vt=null,it=null,Rt=null,st=null,J=null,Pt=null,Zt=null,ye=null;return{setTest:function(pe){U||(pe?ut(n.STENCIL_TEST):Mt(n.STENCIL_TEST))},setMask:function(pe){vt!==pe&&!U&&(n.stencilMask(pe),vt=pe)},setFunc:function(pe,Sn,Wn){(it!==pe||Rt!==Sn||st!==Wn)&&(n.stencilFunc(pe,Sn,Wn),it=pe,Rt=Sn,st=Wn)},setOp:function(pe,Sn,Wn){(J!==pe||Pt!==Sn||Zt!==Wn)&&(n.stencilOp(pe,Sn,Wn),J=pe,Pt=Sn,Zt=Wn)},setLocked:function(pe){U=pe},setClear:function(pe){ye!==pe&&(n.clearStencil(pe),ye=pe)},reset:function(){U=!1,vt=null,it=null,Rt=null,st=null,J=null,Pt=null,Zt=null,ye=null}}}const s=new e,o=new i,a=new r,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,x=!1,m=null,f=null,b=null,M=null,_=null,L=null,C=null,P=new Qt(0,0,0),D=0,S=!1,y=null,I=null,k=null,F=null,q=null;const K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,B=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(H)[1]),V=B>=1):H.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),V=B>=2);let ct=null,tt={};const _t=n.getParameter(n.SCISSOR_BOX),Bt=n.getParameter(n.VIEWPORT),At=new Pe().fromArray(_t),G=new Pe().fromArray(Bt);function nt(U,vt,it,Rt){const st=new Uint8Array(4),J=n.createTexture();n.bindTexture(U,J),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Pt=0;Pt<it;Pt++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(vt,0,n.RGBA,1,1,Rt,0,n.RGBA,n.UNSIGNED_BYTE,st):n.texImage2D(vt+Pt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,st);return J}const ft={};ft[n.TEXTURE_2D]=nt(n.TEXTURE_2D,n.TEXTURE_2D,1),ft[n.TEXTURE_CUBE_MAP]=nt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ft[n.TEXTURE_2D_ARRAY]=nt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ft[n.TEXTURE_3D]=nt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ut(n.DEPTH_TEST),o.setFunc(dr),et(!1),ht(Pl),ut(n.CULL_FACE),T(ui);function ut(U){h[U]!==!0&&(n.enable(U),h[U]=!0)}function Mt(U){h[U]!==!1&&(n.disable(U),h[U]=!1)}function qt(U,vt){return u[U]!==vt?(n.bindFramebuffer(U,vt),u[U]=vt,U===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=vt),U===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=vt),!0):!1}function Ot(U,vt){let it=p,Rt=!1;if(U){it=d.get(vt),it===void 0&&(it=[],d.set(vt,it));const st=U.textures;if(it.length!==st.length||it[0]!==n.COLOR_ATTACHMENT0){for(let J=0,Pt=st.length;J<Pt;J++)it[J]=n.COLOR_ATTACHMENT0+J;it.length=st.length,Rt=!0}}else it[0]!==n.BACK&&(it[0]=n.BACK,Rt=!0);Rt&&n.drawBuffers(it)}function xe(U){return g!==U?(n.useProgram(U),g=U,!0):!1}const le={[Pi]:n.FUNC_ADD,[Gf]:n.FUNC_SUBTRACT,[Wf]:n.FUNC_REVERSE_SUBTRACT};le[Xf]=n.MIN,le[qf]=n.MAX;const Jt={[Yf]:n.ZERO,[Kf]:n.ONE,[$f]:n.SRC_COLOR,[qa]:n.SRC_ALPHA,[ed]:n.SRC_ALPHA_SATURATE,[Qf]:n.DST_COLOR,[Jf]:n.DST_ALPHA,[Zf]:n.ONE_MINUS_SRC_COLOR,[Ya]:n.ONE_MINUS_SRC_ALPHA,[td]:n.ONE_MINUS_DST_COLOR,[jf]:n.ONE_MINUS_DST_ALPHA,[nd]:n.CONSTANT_COLOR,[id]:n.ONE_MINUS_CONSTANT_COLOR,[rd]:n.CONSTANT_ALPHA,[sd]:n.ONE_MINUS_CONSTANT_ALPHA};function T(U,vt,it,Rt,st,J,Pt,Zt,ye,pe){if(U===ui){x===!0&&(Mt(n.BLEND),x=!1);return}if(x===!1&&(ut(n.BLEND),x=!0),U!==Hf){if(U!==m||pe!==S){if((f!==Pi||_!==Pi)&&(n.blendEquation(n.FUNC_ADD),f=Pi,_=Pi),pe)switch(U){case Ui:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Pn:n.blendFunc(n.ONE,n.ONE);break;case Dl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ll:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ui:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Pn:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Dl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ll:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}b=null,M=null,L=null,C=null,P.set(0,0,0),D=0,m=U,S=pe}return}st=st||vt,J=J||it,Pt=Pt||Rt,(vt!==f||st!==_)&&(n.blendEquationSeparate(le[vt],le[st]),f=vt,_=st),(it!==b||Rt!==M||J!==L||Pt!==C)&&(n.blendFuncSeparate(Jt[it],Jt[Rt],Jt[J],Jt[Pt]),b=it,M=Rt,L=J,C=Pt),(Zt.equals(P)===!1||ye!==D)&&(n.blendColor(Zt.r,Zt.g,Zt.b,ye),P.copy(Zt),D=ye),m=U,S=!1}function lt(U,vt){U.side===Ge?Mt(n.CULL_FACE):ut(n.CULL_FACE);let it=U.side===Ye;vt&&(it=!it),et(it),U.blending===Ui&&U.transparent===!1?T(ui):T(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const Rt=U.stencilWrite;a.setTest(Rt),Rt&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),wt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ut(n.SAMPLE_ALPHA_TO_COVERAGE):Mt(n.SAMPLE_ALPHA_TO_COVERAGE)}function et(U){y!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),y=U)}function ht(U){U!==kf?(ut(n.CULL_FACE),U!==I&&(U===Pl?n.cullFace(n.BACK):U===Vf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Mt(n.CULL_FACE),I=U}function Z(U){U!==k&&(V&&n.lineWidth(U),k=U)}function wt(U,vt,it){U?(ut(n.POLYGON_OFFSET_FILL),(F!==vt||q!==it)&&(n.polygonOffset(vt,it),F=vt,q=it)):Mt(n.POLYGON_OFFSET_FILL)}function rt(U){U?ut(n.SCISSOR_TEST):Mt(n.SCISSOR_TEST)}function Et(U){U===void 0&&(U=n.TEXTURE0+K-1),ct!==U&&(n.activeTexture(U),ct=U)}function $t(U,vt,it){it===void 0&&(ct===null?it=n.TEXTURE0+K-1:it=ct);let Rt=tt[it];Rt===void 0&&(Rt={type:void 0,texture:void 0},tt[it]=Rt),(Rt.type!==U||Rt.texture!==vt)&&(ct!==it&&(n.activeTexture(it),ct=it),n.bindTexture(U,vt||ft[U]),Rt.type=U,Rt.texture=vt)}function R(){const U=tt[ct];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function z(){try{n.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Y(){try{n.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{n.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{n.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Nt(){try{n.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function dt(){try{n.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ct(){try{n.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ft(){try{n.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{n.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function bt(U){At.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),At.copy(U))}function Gt(U){G.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),G.copy(U))}function Vt(U,vt){let it=l.get(vt);it===void 0&&(it=new WeakMap,l.set(vt,it));let Rt=it.get(U);Rt===void 0&&(Rt=n.getUniformBlockIndex(vt,U.name),it.set(U,Rt))}function pt(U,vt){const Rt=l.get(vt).get(U);c.get(vt)!==Rt&&(n.uniformBlockBinding(vt,Rt,U.__bindingPointIndex),c.set(vt,Rt))}function Yt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ct=null,tt={},u={},d=new WeakMap,p=[],g=null,x=!1,m=null,f=null,b=null,M=null,_=null,L=null,C=null,P=new Qt(0,0,0),D=0,S=!1,y=null,I=null,k=null,F=null,q=null,At.set(0,0,n.canvas.width,n.canvas.height),G.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ut,disable:Mt,bindFramebuffer:qt,drawBuffers:Ot,useProgram:xe,setBlending:T,setMaterial:lt,setFlipSided:et,setCullFace:ht,setLineWidth:Z,setPolygonOffset:wt,setScissorTest:rt,activeTexture:Et,bindTexture:$t,unbindTexture:R,compressedTexImage2D:v,compressedTexImage3D:z,texImage2D:Ft,texImage3D:Q,updateUBOMapping:Vt,uniformBlockBinding:pt,texStorage2D:dt,texStorage3D:Ct,texSubImage2D:Y,texSubImage3D:j,compressedTexSubImage2D:$,compressedTexSubImage3D:Nt,scissor:bt,viewport:Gt,reset:Yt}}function Ov(n,t,e,i,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new at,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,v){return p?new OffscreenCanvas(R,v):Eo("canvas")}function x(R,v,z){let Y=1;const j=$t(R);if((j.width>z||j.height>z)&&(Y=z/Math.max(j.width,j.height)),Y<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const $=Math.floor(Y*j.width),Nt=Math.floor(Y*j.height);u===void 0&&(u=g($,Nt));const dt=v?g($,Nt):u;return dt.width=$,dt.height=Nt,dt.getContext("2d").drawImage(R,0,0,$,Nt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+$+"x"+Nt+")."),dt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),R;return R}function m(R){return R.generateMipmaps}function f(R){n.generateMipmap(R)}function b(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(R,v,z,Y,j=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let $=v;if(v===n.RED&&(z===n.FLOAT&&($=n.R32F),z===n.HALF_FLOAT&&($=n.R16F),z===n.UNSIGNED_BYTE&&($=n.R8)),v===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&($=n.R8UI),z===n.UNSIGNED_SHORT&&($=n.R16UI),z===n.UNSIGNED_INT&&($=n.R32UI),z===n.BYTE&&($=n.R8I),z===n.SHORT&&($=n.R16I),z===n.INT&&($=n.R32I)),v===n.RG&&(z===n.FLOAT&&($=n.RG32F),z===n.HALF_FLOAT&&($=n.RG16F),z===n.UNSIGNED_BYTE&&($=n.RG8)),v===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&($=n.RG8UI),z===n.UNSIGNED_SHORT&&($=n.RG16UI),z===n.UNSIGNED_INT&&($=n.RG32UI),z===n.BYTE&&($=n.RG8I),z===n.SHORT&&($=n.RG16I),z===n.INT&&($=n.RG32I)),v===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&($=n.RGB8UI),z===n.UNSIGNED_SHORT&&($=n.RGB16UI),z===n.UNSIGNED_INT&&($=n.RGB32UI),z===n.BYTE&&($=n.RGB8I),z===n.SHORT&&($=n.RGB16I),z===n.INT&&($=n.RGB32I)),v===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&($=n.RGBA8UI),z===n.UNSIGNED_SHORT&&($=n.RGBA16UI),z===n.UNSIGNED_INT&&($=n.RGBA32UI),z===n.BYTE&&($=n.RGBA8I),z===n.SHORT&&($=n.RGBA16I),z===n.INT&&($=n.RGBA32I)),v===n.RGB&&z===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),v===n.RGBA){const Nt=j?So:ue.getTransfer(Y);z===n.FLOAT&&($=n.RGBA32F),z===n.HALF_FLOAT&&($=n.RGBA16F),z===n.UNSIGNED_BYTE&&($=Nt===_e?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function _(R,v){let z;return R?v===null||v===Fi||v===Qr?z=n.DEPTH24_STENCIL8:v===Nn?z=n.DEPTH32F_STENCIL8:v===jr&&(z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Fi||v===Qr?z=n.DEPTH_COMPONENT24:v===Nn?z=n.DEPTH_COMPONENT32F:v===jr&&(z=n.DEPTH_COMPONENT16),z}function L(R,v){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==ln&&R.minFilter!==Un?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function C(R){const v=R.target;v.removeEventListener("dispose",C),D(v),v.isVideoTexture&&h.delete(v)}function P(R){const v=R.target;v.removeEventListener("dispose",P),y(v)}function D(R){const v=i.get(R);if(v.__webglInit===void 0)return;const z=R.source,Y=d.get(z);if(Y){const j=Y[v.__cacheKey];j.usedTimes--,j.usedTimes===0&&S(R),Object.keys(Y).length===0&&d.delete(z)}i.remove(R)}function S(R){const v=i.get(R);n.deleteTexture(v.__webglTexture);const z=R.source,Y=d.get(z);delete Y[v.__cacheKey],o.memory.textures--}function y(R){const v=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(v.__webglFramebuffer[Y]))for(let j=0;j<v.__webglFramebuffer[Y].length;j++)n.deleteFramebuffer(v.__webglFramebuffer[Y][j]);else n.deleteFramebuffer(v.__webglFramebuffer[Y]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[Y])}else{if(Array.isArray(v.__webglFramebuffer))for(let Y=0;Y<v.__webglFramebuffer.length;Y++)n.deleteFramebuffer(v.__webglFramebuffer[Y]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Y=0;Y<v.__webglColorRenderbuffer.length;Y++)v.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[Y]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const z=R.textures;for(let Y=0,j=z.length;Y<j;Y++){const $=i.get(z[Y]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(z[Y])}i.remove(R)}let I=0;function k(){I=0}function F(){const R=I;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),I+=1,R}function q(R){const v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function K(R,v){const z=i.get(R);if(R.isVideoTexture&&rt(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){const Y=R.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ft(z,R,v);return}}e.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+v)}function V(R,v){const z=i.get(R);if(R.version>0&&z.__version!==R.version){ft(z,R,v);return}e.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+v)}function B(R,v){const z=i.get(R);if(R.version>0&&z.__version!==R.version){ft(z,R,v);return}e.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+v)}function H(R,v){const z=i.get(R);if(R.version>0&&z.__version!==R.version){ut(z,R,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+v)}const ct={[ic]:n.REPEAT,[Li]:n.CLAMP_TO_EDGE,[rc]:n.MIRRORED_REPEAT},tt={[ln]:n.NEAREST,[pd]:n.NEAREST_MIPMAP_NEAREST,[Ms]:n.NEAREST_MIPMAP_LINEAR,[Un]:n.LINEAR,[jo]:n.LINEAR_MIPMAP_NEAREST,[Ii]:n.LINEAR_MIPMAP_LINEAR},_t={[vd]:n.NEVER,[Ed]:n.ALWAYS,[xd]:n.LESS,[wu]:n.LEQUAL,[yd]:n.EQUAL,[wd]:n.GEQUAL,[Md]:n.GREATER,[Sd]:n.NOTEQUAL};function Bt(R,v){if(v.type===Nn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Un||v.magFilter===jo||v.magFilter===Ms||v.magFilter===Ii||v.minFilter===Un||v.minFilter===jo||v.minFilter===Ms||v.minFilter===Ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,ct[v.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,ct[v.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,ct[v.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,tt[v.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,tt[v.minFilter]),v.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,_t[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===ln||v.minFilter!==Ms&&v.minFilter!==Ii||v.type===Nn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");n.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function At(R,v){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",C));const Y=v.source;let j=d.get(Y);j===void 0&&(j={},d.set(Y,j));const $=q(v);if($!==R.__cacheKey){j[$]===void 0&&(j[$]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),j[$].usedTimes++;const Nt=j[R.__cacheKey];Nt!==void 0&&(j[R.__cacheKey].usedTimes--,Nt.usedTimes===0&&S(v)),R.__cacheKey=$,R.__webglTexture=j[$].texture}return z}function G(R,v,z){return Math.floor(Math.floor(R/z)/v)}function nt(R,v,z,Y){const $=R.updateRanges;if($.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,z,Y,v.data);else{$.sort((Q,bt)=>Q.start-bt.start);let Nt=0;for(let Q=1;Q<$.length;Q++){const bt=$[Nt],Gt=$[Q],Vt=bt.start+bt.count,pt=G(Gt.start,v.width,4),Yt=G(bt.start,v.width,4);Gt.start<=Vt+1&&pt===Yt&&G(Gt.start+Gt.count-1,v.width,4)===pt?bt.count=Math.max(bt.count,Gt.start+Gt.count-bt.start):(++Nt,$[Nt]=Gt)}$.length=Nt+1;const dt=n.getParameter(n.UNPACK_ROW_LENGTH),Ct=n.getParameter(n.UNPACK_SKIP_PIXELS),Ft=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let Q=0,bt=$.length;Q<bt;Q++){const Gt=$[Q],Vt=Math.floor(Gt.start/4),pt=Math.ceil(Gt.count/4),Yt=Vt%v.width,U=Math.floor(Vt/v.width),vt=pt,it=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Yt),n.pixelStorei(n.UNPACK_SKIP_ROWS,U),e.texSubImage2D(n.TEXTURE_2D,0,Yt,U,vt,it,z,Y,v.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,dt),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ct),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ft)}}function ft(R,v,z){let Y=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Y=n.TEXTURE_3D);const j=At(R,v),$=v.source;e.bindTexture(Y,R.__webglTexture,n.TEXTURE0+z);const Nt=i.get($);if($.version!==Nt.__version||j===!0){e.activeTexture(n.TEXTURE0+z);const dt=ue.getPrimaries(ue.workingColorSpace),Ct=v.colorSpace===li?null:ue.getPrimaries(v.colorSpace),Ft=v.colorSpace===li||dt===Ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);let Q=x(v.image,!1,r.maxTextureSize);Q=Et(v,Q);const bt=s.convert(v.format,v.colorSpace),Gt=s.convert(v.type);let Vt=M(v.internalFormat,bt,Gt,v.colorSpace,v.isVideoTexture);Bt(Y,v);let pt;const Yt=v.mipmaps,U=v.isVideoTexture!==!0,vt=Nt.__version===void 0||j===!0,it=$.dataReady,Rt=L(v,Q);if(v.isDepthTexture)Vt=_(v.format===es,v.type),vt&&(U?e.texStorage2D(n.TEXTURE_2D,1,Vt,Q.width,Q.height):e.texImage2D(n.TEXTURE_2D,0,Vt,Q.width,Q.height,0,bt,Gt,null));else if(v.isDataTexture)if(Yt.length>0){U&&vt&&e.texStorage2D(n.TEXTURE_2D,Rt,Vt,Yt[0].width,Yt[0].height);for(let st=0,J=Yt.length;st<J;st++)pt=Yt[st],U?it&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,pt.width,pt.height,bt,Gt,pt.data):e.texImage2D(n.TEXTURE_2D,st,Vt,pt.width,pt.height,0,bt,Gt,pt.data);v.generateMipmaps=!1}else U?(vt&&e.texStorage2D(n.TEXTURE_2D,Rt,Vt,Q.width,Q.height),it&&nt(v,Q,bt,Gt)):e.texImage2D(n.TEXTURE_2D,0,Vt,Q.width,Q.height,0,bt,Gt,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){U&&vt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Rt,Vt,Yt[0].width,Yt[0].height,Q.depth);for(let st=0,J=Yt.length;st<J;st++)if(pt=Yt[st],v.format!==Cn)if(bt!==null)if(U){if(it)if(v.layerUpdates.size>0){const Pt=vh(pt.width,pt.height,v.format,v.type);for(const Zt of v.layerUpdates){const ye=pt.data.subarray(Zt*Pt/pt.data.BYTES_PER_ELEMENT,(Zt+1)*Pt/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,Zt,pt.width,pt.height,1,bt,ye)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,0,pt.width,pt.height,Q.depth,bt,pt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,st,Vt,pt.width,pt.height,Q.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?it&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,0,pt.width,pt.height,Q.depth,bt,Gt,pt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,st,Vt,pt.width,pt.height,Q.depth,0,bt,Gt,pt.data)}else{U&&vt&&e.texStorage2D(n.TEXTURE_2D,Rt,Vt,Yt[0].width,Yt[0].height);for(let st=0,J=Yt.length;st<J;st++)pt=Yt[st],v.format!==Cn?bt!==null?U?it&&e.compressedTexSubImage2D(n.TEXTURE_2D,st,0,0,pt.width,pt.height,bt,pt.data):e.compressedTexImage2D(n.TEXTURE_2D,st,Vt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?it&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,pt.width,pt.height,bt,Gt,pt.data):e.texImage2D(n.TEXTURE_2D,st,Vt,pt.width,pt.height,0,bt,Gt,pt.data)}else if(v.isDataArrayTexture)if(U){if(vt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Rt,Vt,Q.width,Q.height,Q.depth),it)if(v.layerUpdates.size>0){const st=vh(Q.width,Q.height,v.format,v.type);for(const J of v.layerUpdates){const Pt=Q.data.subarray(J*st/Q.data.BYTES_PER_ELEMENT,(J+1)*st/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,Q.width,Q.height,1,bt,Gt,Pt)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,bt,Gt,Q.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Vt,Q.width,Q.height,Q.depth,0,bt,Gt,Q.data);else if(v.isData3DTexture)U?(vt&&e.texStorage3D(n.TEXTURE_3D,Rt,Vt,Q.width,Q.height,Q.depth),it&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,bt,Gt,Q.data)):e.texImage3D(n.TEXTURE_3D,0,Vt,Q.width,Q.height,Q.depth,0,bt,Gt,Q.data);else if(v.isFramebufferTexture){if(vt)if(U)e.texStorage2D(n.TEXTURE_2D,Rt,Vt,Q.width,Q.height);else{let st=Q.width,J=Q.height;for(let Pt=0;Pt<Rt;Pt++)e.texImage2D(n.TEXTURE_2D,Pt,Vt,st,J,0,bt,Gt,null),st>>=1,J>>=1}}else if(Yt.length>0){if(U&&vt){const st=$t(Yt[0]);e.texStorage2D(n.TEXTURE_2D,Rt,Vt,st.width,st.height)}for(let st=0,J=Yt.length;st<J;st++)pt=Yt[st],U?it&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,bt,Gt,pt):e.texImage2D(n.TEXTURE_2D,st,Vt,bt,Gt,pt);v.generateMipmaps=!1}else if(U){if(vt){const st=$t(Q);e.texStorage2D(n.TEXTURE_2D,Rt,Vt,st.width,st.height)}it&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,bt,Gt,Q)}else e.texImage2D(n.TEXTURE_2D,0,Vt,bt,Gt,Q);m(v)&&f(Y),Nt.__version=$.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function ut(R,v,z){if(v.image.length!==6)return;const Y=At(R,v),j=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+z);const $=i.get(j);if(j.version!==$.__version||Y===!0){e.activeTexture(n.TEXTURE0+z);const Nt=ue.getPrimaries(ue.workingColorSpace),dt=v.colorSpace===li?null:ue.getPrimaries(v.colorSpace),Ct=v.colorSpace===li||Nt===dt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);const Ft=v.isCompressedTexture||v.image[0].isCompressedTexture,Q=v.image[0]&&v.image[0].isDataTexture,bt=[];for(let J=0;J<6;J++)!Ft&&!Q?bt[J]=x(v.image[J],!0,r.maxCubemapSize):bt[J]=Q?v.image[J].image:v.image[J],bt[J]=Et(v,bt[J]);const Gt=bt[0],Vt=s.convert(v.format,v.colorSpace),pt=s.convert(v.type),Yt=M(v.internalFormat,Vt,pt,v.colorSpace),U=v.isVideoTexture!==!0,vt=$.__version===void 0||Y===!0,it=j.dataReady;let Rt=L(v,Gt);Bt(n.TEXTURE_CUBE_MAP,v);let st;if(Ft){U&&vt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Rt,Yt,Gt.width,Gt.height);for(let J=0;J<6;J++){st=bt[J].mipmaps;for(let Pt=0;Pt<st.length;Pt++){const Zt=st[Pt];v.format!==Cn?Vt!==null?U?it&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Pt,0,0,Zt.width,Zt.height,Vt,Zt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Pt,Yt,Zt.width,Zt.height,0,Zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Pt,0,0,Zt.width,Zt.height,Vt,pt,Zt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Pt,Yt,Zt.width,Zt.height,0,Vt,pt,Zt.data)}}}else{if(st=v.mipmaps,U&&vt){st.length>0&&Rt++;const J=$t(bt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Rt,Yt,J.width,J.height)}for(let J=0;J<6;J++)if(Q){U?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,bt[J].width,bt[J].height,Vt,pt,bt[J].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Yt,bt[J].width,bt[J].height,0,Vt,pt,bt[J].data);for(let Pt=0;Pt<st.length;Pt++){const ye=st[Pt].image[J].image;U?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Pt+1,0,0,ye.width,ye.height,Vt,pt,ye.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Pt+1,Yt,ye.width,ye.height,0,Vt,pt,ye.data)}}else{U?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Vt,pt,bt[J]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Yt,Vt,pt,bt[J]);for(let Pt=0;Pt<st.length;Pt++){const Zt=st[Pt];U?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Pt+1,0,0,Vt,pt,Zt.image[J]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Pt+1,Yt,Vt,pt,Zt.image[J])}}}m(v)&&f(n.TEXTURE_CUBE_MAP),$.__version=j.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function Mt(R,v,z,Y,j,$){const Nt=s.convert(z.format,z.colorSpace),dt=s.convert(z.type),Ct=M(z.internalFormat,Nt,dt,z.colorSpace),Ft=i.get(v),Q=i.get(z);if(Q.__renderTarget=v,!Ft.__hasExternalTextures){const bt=Math.max(1,v.width>>$),Gt=Math.max(1,v.height>>$);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?e.texImage3D(j,$,Ct,bt,Gt,v.depth,0,Nt,dt,null):e.texImage2D(j,$,Ct,bt,Gt,0,Nt,dt,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),wt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,j,Q.__webglTexture,0,Z(v)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,j,Q.__webglTexture,$),e.bindFramebuffer(n.FRAMEBUFFER,null)}function qt(R,v,z){if(n.bindRenderbuffer(n.RENDERBUFFER,R),v.depthBuffer){const Y=v.depthTexture,j=Y&&Y.isDepthTexture?Y.type:null,$=_(v.stencilBuffer,j),Nt=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=Z(v);wt(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,dt,$,v.width,v.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,dt,$,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,$,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Nt,n.RENDERBUFFER,R)}else{const Y=v.textures;for(let j=0;j<Y.length;j++){const $=Y[j],Nt=s.convert($.format,$.colorSpace),dt=s.convert($.type),Ct=M($.internalFormat,Nt,dt,$.colorSpace),Ft=Z(v);z&&wt(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ft,Ct,v.width,v.height):wt(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ft,Ct,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Ct,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ot(R,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=i.get(v.depthTexture);Y.__renderTarget=v,(!Y.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),K(v.depthTexture,0);const j=Y.__webglTexture,$=Z(v);if(v.depthTexture.format===ts)wt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(v.depthTexture.format===es)wt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function xe(R){const v=i.get(R),z=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){const Y=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Y){const j=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Y.removeEventListener("dispose",j)};Y.addEventListener("dispose",j),v.__depthDisposeCallback=j}v.__boundDepthTexture=Y}if(R.depthTexture&&!v.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const Y=R.texture.mipmaps;Y&&Y.length>0?Ot(v.__webglFramebuffer[0],R):Ot(v.__webglFramebuffer,R)}else if(z){v.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[Y]),v.__webglDepthbuffer[Y]===void 0)v.__webglDepthbuffer[Y]=n.createRenderbuffer(),qt(v.__webglDepthbuffer[Y],R,!1);else{const j=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=v.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,$)}}else{const Y=R.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),qt(v.__webglDepthbuffer,R,!1);else{const j=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,$)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function le(R,v,z){const Y=i.get(R);v!==void 0&&Mt(Y.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&xe(R)}function Jt(R){const v=R.texture,z=i.get(R),Y=i.get(v);R.addEventListener("dispose",P);const j=R.textures,$=R.isWebGLCubeRenderTarget===!0,Nt=j.length>1;if(Nt||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=v.version,o.memory.textures++),$){z.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer[dt]=[];for(let Ct=0;Ct<v.mipmaps.length;Ct++)z.__webglFramebuffer[dt][Ct]=n.createFramebuffer()}else z.__webglFramebuffer[dt]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer=[];for(let dt=0;dt<v.mipmaps.length;dt++)z.__webglFramebuffer[dt]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(Nt)for(let dt=0,Ct=j.length;dt<Ct;dt++){const Ft=i.get(j[dt]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&wt(R)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let dt=0;dt<j.length;dt++){const Ct=j[dt];z.__webglColorRenderbuffer[dt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[dt]);const Ft=s.convert(Ct.format,Ct.colorSpace),Q=s.convert(Ct.type),bt=M(Ct.internalFormat,Ft,Q,Ct.colorSpace,R.isXRRenderTarget===!0),Gt=Z(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Gt,bt,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,z.__webglColorRenderbuffer[dt])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),qt(z.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){e.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),Bt(n.TEXTURE_CUBE_MAP,v);for(let dt=0;dt<6;dt++)if(v.mipmaps&&v.mipmaps.length>0)for(let Ct=0;Ct<v.mipmaps.length;Ct++)Mt(z.__webglFramebuffer[dt][Ct],R,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ct);else Mt(z.__webglFramebuffer[dt],R,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);m(v)&&f(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Nt){for(let dt=0,Ct=j.length;dt<Ct;dt++){const Ft=j[dt],Q=i.get(Ft);e.bindTexture(n.TEXTURE_2D,Q.__webglTexture),Bt(n.TEXTURE_2D,Ft),Mt(z.__webglFramebuffer,R,Ft,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,0),m(Ft)&&f(n.TEXTURE_2D)}e.unbindTexture()}else{let dt=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(dt=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(dt,Y.__webglTexture),Bt(dt,v),v.mipmaps&&v.mipmaps.length>0)for(let Ct=0;Ct<v.mipmaps.length;Ct++)Mt(z.__webglFramebuffer[Ct],R,v,n.COLOR_ATTACHMENT0,dt,Ct);else Mt(z.__webglFramebuffer,R,v,n.COLOR_ATTACHMENT0,dt,0);m(v)&&f(dt),e.unbindTexture()}R.depthBuffer&&xe(R)}function T(R){const v=R.textures;for(let z=0,Y=v.length;z<Y;z++){const j=v[z];if(m(j)){const $=b(R),Nt=i.get(j).__webglTexture;e.bindTexture($,Nt),f($),e.unbindTexture()}}}const lt=[],et=[];function ht(R){if(R.samples>0){if(wt(R)===!1){const v=R.textures,z=R.width,Y=R.height;let j=n.COLOR_BUFFER_BIT;const $=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Nt=i.get(R),dt=v.length>1;if(dt)for(let Ft=0;Ft<v.length;Ft++)e.bindFramebuffer(n.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ft,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Nt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ft,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer);const Ct=R.texture.mipmaps;Ct&&Ct.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let Ft=0;Ft<v.length;Ft++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),dt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Nt.__webglColorRenderbuffer[Ft]);const Q=i.get(v[Ft]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Q,0)}n.blitFramebuffer(0,0,z,Y,0,0,z,Y,j,n.NEAREST),c===!0&&(lt.length=0,et.length=0,lt.push(n.COLOR_ATTACHMENT0+Ft),R.depthBuffer&&R.resolveDepthBuffer===!1&&(lt.push($),et.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,et)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,lt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),dt)for(let Ft=0;Ft<v.length;Ft++){e.bindFramebuffer(n.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ft,n.RENDERBUFFER,Nt.__webglColorRenderbuffer[Ft]);const Q=i.get(v[Ft]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Nt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ft,n.TEXTURE_2D,Q,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const v=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function Z(R){return Math.min(r.maxSamples,R.samples)}function wt(R){const v=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function rt(R){const v=o.render.frame;h.get(R)!==v&&(h.set(R,v),R.update())}function Et(R,v){const z=R.colorSpace,Y=R.format,j=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==gr&&z!==li&&(ue.getTransfer(z)===_e?(Y!==Cn||j!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),v}function $t(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=k,this.setTexture2D=K,this.setTexture2DArray=V,this.setTexture3D=B,this.setTextureCube=H,this.rebindTextures=le,this.setupRenderTarget=Jt,this.updateRenderTargetMipmap=T,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=wt}function Bv(n,t){function e(i,r=li){let s;const o=ue.getTransfer(r);if(i===kn)return n.UNSIGNED_BYTE;if(i===Jc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===jc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===_u)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===mu)return n.BYTE;if(i===gu)return n.SHORT;if(i===jr)return n.UNSIGNED_SHORT;if(i===Zc)return n.INT;if(i===Fi)return n.UNSIGNED_INT;if(i===Nn)return n.FLOAT;if(i===ls)return n.HALF_FLOAT;if(i===vu)return n.ALPHA;if(i===xu)return n.RGB;if(i===Cn)return n.RGBA;if(i===ts)return n.DEPTH_COMPONENT;if(i===es)return n.DEPTH_STENCIL;if(i===Qc)return n.RED;if(i===tl)return n.RED_INTEGER;if(i===yu)return n.RG;if(i===el)return n.RG_INTEGER;if(i===nl)return n.RGBA_INTEGER;if(i===lo||i===ho||i===uo||i===fo)if(o===_e)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===lo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ho)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===uo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===fo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===lo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ho)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===uo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===fo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===sc||i===oc||i===ac||i===cc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===sc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===oc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ac)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===cc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===lc||i===hc||i===uc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===lc||i===hc)return o===_e?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===uc)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===fc||i===dc||i===pc||i===mc||i===gc||i===_c||i===vc||i===xc||i===yc||i===Mc||i===Sc||i===wc||i===Ec||i===bc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===fc)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===dc)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===pc)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===mc)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===gc)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===_c)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===vc)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===xc)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===yc)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Mc)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Sc)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===wc)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ec)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===bc)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===po||i===Tc||i===Ac)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===po)return o===_e?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Tc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ac)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Mu||i===Rc||i===Cc||i===Pc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===po)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Rc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Cc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Pc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Qr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const zv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Vv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new Ke,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ei({vertexShader:zv,fragmentShader:kv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new It(new ds(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Hv extends yr{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,g=null;const x=new Vv,m=e.getContextAttributes();let f=null,b=null;const M=[],_=[],L=new at;let C=null;const P=new gn;P.viewport=new Pe;const D=new gn;D.viewport=new Pe;const S=[P,D],y=new cm;let I=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let nt=M[G];return nt===void 0&&(nt=new xa,M[G]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(G){let nt=M[G];return nt===void 0&&(nt=new xa,M[G]=nt),nt.getGripSpace()},this.getHand=function(G){let nt=M[G];return nt===void 0&&(nt=new xa,M[G]=nt),nt.getHandSpace()};function F(G){const nt=_.indexOf(G.inputSource);if(nt===-1)return;const ft=M[nt];ft!==void 0&&(ft.update(G.inputSource,G.frame,l||o),ft.dispatchEvent({type:G.type,data:G.inputSource}))}function q(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",K);for(let G=0;G<M.length;G++){const nt=_[G];nt!==null&&(_[G]=null,M[G].disconnect(nt))}I=null,k=null,x.reset(),t.setRenderTarget(f),p=null,d=null,u=null,r=null,b=null,At.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(f=t.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",q),r.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(L),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ft=null,ut=null,Mt=null;m.depth&&(Mt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ft=m.stencil?es:ts,ut=m.stencil?Qr:Fi);const qt={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:s};u=new XRWebGLBinding(r,e),d=u.createProjectionLayer(qt),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new Oi(d.textureWidth,d.textureHeight,{format:Cn,type:kn,depthTexture:new Nu(d.textureWidth,d.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ft={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,ft),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new Oi(p.framebufferWidth,p.framebufferHeight,{format:Cn,type:kn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),At.setContext(r),At.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function K(G){for(let nt=0;nt<G.removed.length;nt++){const ft=G.removed[nt],ut=_.indexOf(ft);ut>=0&&(_[ut]=null,M[ut].disconnect(ft))}for(let nt=0;nt<G.added.length;nt++){const ft=G.added[nt];let ut=_.indexOf(ft);if(ut===-1){for(let qt=0;qt<M.length;qt++)if(qt>=_.length){_.push(ft),ut=qt;break}else if(_[qt]===null){_[qt]=ft,ut=qt;break}if(ut===-1)break}const Mt=M[ut];Mt&&Mt.connect(ft)}}const V=new A,B=new A;function H(G,nt,ft){V.setFromMatrixPosition(nt.matrixWorld),B.setFromMatrixPosition(ft.matrixWorld);const ut=V.distanceTo(B),Mt=nt.projectionMatrix.elements,qt=ft.projectionMatrix.elements,Ot=Mt[14]/(Mt[10]-1),xe=Mt[14]/(Mt[10]+1),le=(Mt[9]+1)/Mt[5],Jt=(Mt[9]-1)/Mt[5],T=(Mt[8]-1)/Mt[0],lt=(qt[8]+1)/qt[0],et=Ot*T,ht=Ot*lt,Z=ut/(-T+lt),wt=Z*-T;if(nt.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(wt),G.translateZ(Z),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Mt[10]===-1)G.projectionMatrix.copy(nt.projectionMatrix),G.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const rt=Ot+Z,Et=xe+Z,$t=et-wt,R=ht+(ut-wt),v=le*xe/Et*rt,z=Jt*xe/Et*rt;G.projectionMatrix.makePerspective($t,R,v,z,rt,Et),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function ct(G,nt){nt===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(nt.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;let nt=G.near,ft=G.far;x.texture!==null&&(x.depthNear>0&&(nt=x.depthNear),x.depthFar>0&&(ft=x.depthFar)),y.near=D.near=P.near=nt,y.far=D.far=P.far=ft,(I!==y.near||k!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),I=y.near,k=y.far),P.layers.mask=G.layers.mask|2,D.layers.mask=G.layers.mask|4,y.layers.mask=P.layers.mask|D.layers.mask;const ut=G.parent,Mt=y.cameras;ct(y,ut);for(let qt=0;qt<Mt.length;qt++)ct(Mt[qt],ut);Mt.length===2?H(y,P,D):y.projectionMatrix.copy(P.projectionMatrix),tt(G,y,ut)};function tt(G,nt,ft){ft===null?G.matrix.copy(nt.matrixWorld):(G.matrix.copy(ft.matrixWorld),G.matrix.invert(),G.matrix.multiply(nt.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(nt.projectionMatrix),G.projectionMatrixInverse.copy(nt.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=ns*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(G){c=G,d!==null&&(d.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let _t=null;function Bt(G,nt){if(h=nt.getViewerPose(l||o),g=nt,h!==null){const ft=h.views;p!==null&&(t.setRenderTargetFramebuffer(b,p.framebuffer),t.setRenderTarget(b));let ut=!1;ft.length!==y.cameras.length&&(y.cameras.length=0,ut=!0);for(let Ot=0;Ot<ft.length;Ot++){const xe=ft[Ot];let le=null;if(p!==null)le=p.getViewport(xe);else{const T=u.getViewSubImage(d,xe);le=T.viewport,Ot===0&&(t.setRenderTargetTextures(b,T.colorTexture,T.depthStencilTexture),t.setRenderTarget(b))}let Jt=S[Ot];Jt===void 0&&(Jt=new gn,Jt.layers.enable(Ot),Jt.viewport=new Pe,S[Ot]=Jt),Jt.matrix.fromArray(xe.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(xe.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(le.x,le.y,le.width,le.height),Ot===0&&(y.matrix.copy(Jt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ut===!0&&y.cameras.push(Jt)}const Mt=r.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&u){const Ot=u.getDepthInformation(ft[0]);Ot&&Ot.isValid&&Ot.texture&&x.init(t,Ot,r.renderState)}}for(let ft=0;ft<M.length;ft++){const ut=_[ft],Mt=M[ft];ut!==null&&Mt!==void 0&&Mt.update(ut,nt,l||o)}_t&&_t(G,nt),nt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:nt}),g=null}const At=new $u;At.setAnimationLoop(Bt),this.setAnimationLoop=function(G){_t=G},this.dispose=function(){}}}const Ei=new Vn,Gv=new de;function Wv(n,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Cu(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,b,M,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),u(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,_)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),x(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,b,M):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ye&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ye&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const b=t.get(f),M=b.envMap,_=b.envMapRotation;M&&(m.envMap.value=M,Ei.copy(_),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),m.envMapRotation.value.setFromMatrix4(Gv.makeRotationFromEuler(Ei)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,b,M){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*b,m.scale.value=M*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,b){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ye&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const b=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Xv(n,t,e,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,M){const _=M.program;i.uniformBlockBinding(b,_)}function l(b,M){let _=r[b.id];_===void 0&&(g(b),_=h(b),r[b.id]=_,b.addEventListener("dispose",m));const L=M.program;i.updateUBOMapping(b,L);const C=t.render.frame;s[b.id]!==C&&(d(b),s[b.id]=C)}function h(b){const M=u();b.__bindingPointIndex=M;const _=n.createBuffer(),L=b.__size,C=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,L,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,_),_}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const M=r[b.id],_=b.uniforms,L=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let C=0,P=_.length;C<P;C++){const D=Array.isArray(_[C])?_[C]:[_[C]];for(let S=0,y=D.length;S<y;S++){const I=D[S];if(p(I,C,S,L)===!0){const k=I.__offset,F=Array.isArray(I.value)?I.value:[I.value];let q=0;for(let K=0;K<F.length;K++){const V=F[K],B=x(V);typeof V=="number"||typeof V=="boolean"?(I.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,k+q,I.__data)):V.isMatrix3?(I.__data[0]=V.elements[0],I.__data[1]=V.elements[1],I.__data[2]=V.elements[2],I.__data[3]=0,I.__data[4]=V.elements[3],I.__data[5]=V.elements[4],I.__data[6]=V.elements[5],I.__data[7]=0,I.__data[8]=V.elements[6],I.__data[9]=V.elements[7],I.__data[10]=V.elements[8],I.__data[11]=0):(V.toArray(I.__data,q),q+=B.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(b,M,_,L){const C=b.value,P=M+"_"+_;if(L[P]===void 0)return typeof C=="number"||typeof C=="boolean"?L[P]=C:L[P]=C.clone(),!0;{const D=L[P];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return L[P]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function g(b){const M=b.uniforms;let _=0;const L=16;for(let P=0,D=M.length;P<D;P++){const S=Array.isArray(M[P])?M[P]:[M[P]];for(let y=0,I=S.length;y<I;y++){const k=S[y],F=Array.isArray(k.value)?k.value:[k.value];for(let q=0,K=F.length;q<K;q++){const V=F[q],B=x(V),H=_%L,ct=H%B.boundary,tt=H+ct;_+=ct,tt!==0&&L-tt<B.storage&&(_+=L-tt),k.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=_,_+=B.storage}}}const C=_%L;return C>0&&(_+=L-C),b.__size=_,b.__cache={},this}function x(b){const M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function m(b){const M=b.target;M.removeEventListener("dispose",m);const _=o.indexOf(M.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function f(){for(const b in r)n.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:c,update:l,dispose:f}}class qv{constructor(t={}){const{canvas:e=Vd(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,f=null;const b=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let L=!1;this._outputColorSpace=en;let C=0,P=0,D=null,S=-1,y=null;const I=new Pe,k=new Pe;let F=null;const q=new Qt(0);let K=0,V=e.width,B=e.height,H=1,ct=null,tt=null;const _t=new Pe(0,0,V,B),Bt=new Pe(0,0,V,B);let At=!1;const G=new al;let nt=!1,ft=!1;const ut=new de,Mt=new de,qt=new A,Ot=new Pe,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let le=!1;function Jt(){return D===null?H:1}let T=i;function lt(w,N){return e.getContext(w,N)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${$c}`),e.addEventListener("webglcontextlost",Rt,!1),e.addEventListener("webglcontextrestored",st,!1),e.addEventListener("webglcontextcreationerror",J,!1),T===null){const N="webgl2";if(T=lt(N,w),T===null)throw lt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let et,ht,Z,wt,rt,Et,$t,R,v,z,Y,j,$,Nt,dt,Ct,Ft,Q,bt,Gt,Vt,pt,Yt,U;function vt(){et=new n_(T),et.init(),pt=new Bv(T,et),ht=new $g(T,et,t,pt),Z=new Fv(T,et),ht.reverseDepthBuffer&&d&&Z.buffers.depth.setReversed(!0),wt=new s_(T),rt=new wv,Et=new Ov(T,et,Z,rt,ht,pt,wt),$t=new Jg(_),R=new e_(_),v=new um(T),Yt=new Yg(T,v),z=new i_(T,v,wt,Yt),Y=new a_(T,z,v,wt),bt=new o_(T,ht,Et),Ct=new Zg(rt),j=new Sv(_,$t,R,et,ht,Yt,Ct),$=new Wv(_,rt),Nt=new bv,dt=new Dv(et),Q=new qg(_,$t,R,Z,Y,p,c),Ft=new Uv(_,Y,ht),U=new Xv(T,wt,ht,Z),Gt=new Kg(T,et,wt),Vt=new r_(T,et,wt),wt.programs=j.programs,_.capabilities=ht,_.extensions=et,_.properties=rt,_.renderLists=Nt,_.shadowMap=Ft,_.state=Z,_.info=wt}vt();const it=new Hv(_,T);this.xr=it,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const w=et.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=et.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(w){w!==void 0&&(H=w,this.setSize(V,B,!1))},this.getSize=function(w){return w.set(V,B)},this.setSize=function(w,N,W=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=w,B=N,e.width=Math.floor(w*H),e.height=Math.floor(N*H),W===!0&&(e.style.width=w+"px",e.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(V*H,B*H).floor()},this.setDrawingBufferSize=function(w,N,W){V=w,B=N,H=W,e.width=Math.floor(w*W),e.height=Math.floor(N*W),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(I)},this.getViewport=function(w){return w.copy(_t)},this.setViewport=function(w,N,W,X){w.isVector4?_t.set(w.x,w.y,w.z,w.w):_t.set(w,N,W,X),Z.viewport(I.copy(_t).multiplyScalar(H).round())},this.getScissor=function(w){return w.copy(Bt)},this.setScissor=function(w,N,W,X){w.isVector4?Bt.set(w.x,w.y,w.z,w.w):Bt.set(w,N,W,X),Z.scissor(k.copy(Bt).multiplyScalar(H).round())},this.getScissorTest=function(){return At},this.setScissorTest=function(w){Z.setScissorTest(At=w)},this.setOpaqueSort=function(w){ct=w},this.setTransparentSort=function(w){tt=w},this.getClearColor=function(w){return w.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor(...arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha(...arguments)},this.clear=function(w=!0,N=!0,W=!0){let X=0;if(w){let O=!1;if(D!==null){const ot=D.texture.format;O=ot===nl||ot===el||ot===tl}if(O){const ot=D.texture.type,xt=ot===kn||ot===Fi||ot===jr||ot===Qr||ot===Jc||ot===jc,Dt=Q.getClearColor(),Tt=Q.getClearAlpha(),Wt=Dt.r,Xt=Dt.g,zt=Dt.b;xt?(g[0]=Wt,g[1]=Xt,g[2]=zt,g[3]=Tt,T.clearBufferuiv(T.COLOR,0,g)):(x[0]=Wt,x[1]=Xt,x[2]=zt,x[3]=Tt,T.clearBufferiv(T.COLOR,0,x))}else X|=T.COLOR_BUFFER_BIT}N&&(X|=T.DEPTH_BUFFER_BIT),W&&(X|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Rt,!1),e.removeEventListener("webglcontextrestored",st,!1),e.removeEventListener("webglcontextcreationerror",J,!1),Q.dispose(),Nt.dispose(),dt.dispose(),rt.dispose(),$t.dispose(),R.dispose(),Y.dispose(),Yt.dispose(),U.dispose(),j.dispose(),it.dispose(),it.removeEventListener("sessionstart",wl),it.removeEventListener("sessionend",El),_i.stop()};function Rt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function st(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const w=wt.autoReset,N=Ft.enabled,W=Ft.autoUpdate,X=Ft.needsUpdate,O=Ft.type;vt(),wt.autoReset=w,Ft.enabled=N,Ft.autoUpdate=W,Ft.needsUpdate=X,Ft.type=O}function J(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Pt(w){const N=w.target;N.removeEventListener("dispose",Pt),Zt(N)}function Zt(w){ye(w),rt.remove(w)}function ye(w){const N=rt.get(w).programs;N!==void 0&&(N.forEach(function(W){j.releaseProgram(W)}),w.isShaderMaterial&&j.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,W,X,O,ot){N===null&&(N=xe);const xt=O.isMesh&&O.matrixWorld.determinant()<0,Dt=Uf(w,N,W,X,O);Z.setMaterial(X,xt);let Tt=W.index,Wt=1;if(X.wireframe===!0){if(Tt=z.getWireframeAttribute(W),Tt===void 0)return;Wt=2}const Xt=W.drawRange,zt=W.attributes.position;let se=Xt.start*Wt,me=(Xt.start+Xt.count)*Wt;ot!==null&&(se=Math.max(se,ot.start*Wt),me=Math.min(me,(ot.start+ot.count)*Wt)),Tt!==null?(se=Math.max(se,0),me=Math.min(me,Tt.count)):zt!=null&&(se=Math.max(se,0),me=Math.min(me,zt.count));const Ee=me-se;if(Ee<0||Ee===1/0)return;Yt.setup(O,X,Dt,W,Tt);let Ce,he=Gt;if(Tt!==null&&(Ce=v.get(Tt),he=Vt,he.setIndex(Ce)),O.isMesh)X.wireframe===!0?(Z.setLineWidth(X.wireframeLinewidth*Jt()),he.setMode(T.LINES)):he.setMode(T.TRIANGLES);else if(O.isLine){let kt=X.linewidth;kt===void 0&&(kt=1),Z.setLineWidth(kt*Jt()),O.isLineSegments?he.setMode(T.LINES):O.isLineLoop?he.setMode(T.LINE_LOOP):he.setMode(T.LINE_STRIP)}else O.isPoints?he.setMode(T.POINTS):O.isSprite&&he.setMode(T.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)hr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),he.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))he.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const kt=O._multiDrawStarts,Ve=O._multiDrawCounts,fe=O._multiDrawCount,wn=Tt?v.get(Tt).bytesPerElement:1,Hi=rt.get(X).currentProgram.getUniforms();for(let sn=0;sn<fe;sn++)Hi.setValue(T,"_gl_DrawID",sn),he.render(kt[sn]/wn,Ve[sn])}else if(O.isInstancedMesh)he.renderInstances(se,Ee,O.count);else if(W.isInstancedBufferGeometry){const kt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ve=Math.min(W.instanceCount,kt);he.renderInstances(se,Ee,Ve)}else he.render(se,Ee)};function pe(w,N,W){w.transparent===!0&&w.side===Ge&&w.forceSinglePass===!1?(w.side=Ye,w.needsUpdate=!0,ys(w,N,W),w.side=mi,w.needsUpdate=!0,ys(w,N,W),w.side=Ge):ys(w,N,W)}this.compile=function(w,N,W=null){W===null&&(W=w),f=dt.get(W),f.init(N),M.push(f),W.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),w!==W&&w.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),f.setupLights();const X=new Set;return w.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ot=O.material;if(ot)if(Array.isArray(ot))for(let xt=0;xt<ot.length;xt++){const Dt=ot[xt];pe(Dt,W,O),X.add(Dt)}else pe(ot,W,O),X.add(ot)}),f=M.pop(),X},this.compileAsync=function(w,N,W=null){const X=this.compile(w,N,W);return new Promise(O=>{function ot(){if(X.forEach(function(xt){rt.get(xt).currentProgram.isReady()&&X.delete(xt)}),X.size===0){O(w);return}setTimeout(ot,10)}et.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let Sn=null;function Wn(w){Sn&&Sn(w)}function wl(){_i.stop()}function El(){_i.start()}const _i=new $u;_i.setAnimationLoop(Wn),typeof self<"u"&&_i.setContext(self),this.setAnimationLoop=function(w){Sn=w,it.setAnimationLoop(w),w===null?_i.stop():_i.start()},it.addEventListener("sessionstart",wl),it.addEventListener("sessionend",El),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(N),N=it.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,N,D),f=dt.get(w,M.length),f.init(N),M.push(f),Mt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),G.setFromProjectionMatrix(Mt),ft=this.localClippingEnabled,nt=Ct.init(this.clippingPlanes,ft),m=Nt.get(w,b.length),m.init(),b.push(m),it.enabled===!0&&it.isPresenting===!0){const ot=_.xr.getDepthSensingMesh();ot!==null&&Zo(ot,N,-1/0,_.sortObjects)}Zo(w,N,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(ct,tt),le=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,le&&Q.addToRenderList(m,w),this.info.render.frame++,nt===!0&&Ct.beginShadows();const W=f.state.shadowsArray;Ft.render(W,w,N),nt===!0&&Ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,O=m.transmissive;if(f.setupLights(),N.isArrayCamera){const ot=N.cameras;if(O.length>0)for(let xt=0,Dt=ot.length;xt<Dt;xt++){const Tt=ot[xt];Tl(X,O,w,Tt)}le&&Q.render(w);for(let xt=0,Dt=ot.length;xt<Dt;xt++){const Tt=ot[xt];bl(m,w,Tt,Tt.viewport)}}else O.length>0&&Tl(X,O,w,N),le&&Q.render(w),bl(m,w,N);D!==null&&P===0&&(Et.updateMultisampleRenderTarget(D),Et.updateRenderTargetMipmap(D)),w.isScene===!0&&w.onAfterRender(_,w,N),Yt.resetDefaultState(),S=-1,y=null,M.pop(),M.length>0?(f=M[M.length-1],nt===!0&&Ct.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Zo(w,N,W,X){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||G.intersectsSprite(w)){X&&Ot.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Mt);const xt=Y.update(w),Dt=w.material;Dt.visible&&m.push(w,xt,Dt,W,Ot.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||G.intersectsObject(w))){const xt=Y.update(w),Dt=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ot.copy(w.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Ot.copy(xt.boundingSphere.center)),Ot.applyMatrix4(w.matrixWorld).applyMatrix4(Mt)),Array.isArray(Dt)){const Tt=xt.groups;for(let Wt=0,Xt=Tt.length;Wt<Xt;Wt++){const zt=Tt[Wt],se=Dt[zt.materialIndex];se&&se.visible&&m.push(w,xt,se,W,Ot.z,zt)}}else Dt.visible&&m.push(w,xt,Dt,W,Ot.z,null)}}const ot=w.children;for(let xt=0,Dt=ot.length;xt<Dt;xt++)Zo(ot[xt],N,W,X)}function bl(w,N,W,X){const O=w.opaque,ot=w.transmissive,xt=w.transparent;f.setupLightsView(W),nt===!0&&Ct.setGlobalState(_.clippingPlanes,W),X&&Z.viewport(I.copy(X)),O.length>0&&xs(O,N,W),ot.length>0&&xs(ot,N,W),xt.length>0&&xs(xt,N,W),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function Tl(w,N,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[X.id]===void 0&&(f.state.transmissionRenderTarget[X.id]=new Oi(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?ls:kn,minFilter:Ii,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ue.workingColorSpace}));const ot=f.state.transmissionRenderTarget[X.id],xt=X.viewport||I;ot.setSize(xt.z*_.transmissionResolutionScale,xt.w*_.transmissionResolutionScale);const Dt=_.getRenderTarget();_.setRenderTarget(ot),_.getClearColor(q),K=_.getClearAlpha(),K<1&&_.setClearColor(16777215,.5),_.clear(),le&&Q.render(W);const Tt=_.toneMapping;_.toneMapping=fi;const Wt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),f.setupLightsView(X),nt===!0&&Ct.setGlobalState(_.clippingPlanes,X),xs(w,W,X),Et.updateMultisampleRenderTarget(ot),Et.updateRenderTargetMipmap(ot),et.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let zt=0,se=N.length;zt<se;zt++){const me=N[zt],Ee=me.object,Ce=me.geometry,he=me.material,kt=me.group;if(he.side===Ge&&Ee.layers.test(X.layers)){const Ve=he.side;he.side=Ye,he.needsUpdate=!0,Al(Ee,W,X,Ce,he,kt),he.side=Ve,he.needsUpdate=!0,Xt=!0}}Xt===!0&&(Et.updateMultisampleRenderTarget(ot),Et.updateRenderTargetMipmap(ot))}_.setRenderTarget(Dt),_.setClearColor(q,K),Wt!==void 0&&(X.viewport=Wt),_.toneMapping=Tt}function xs(w,N,W){const X=N.isScene===!0?N.overrideMaterial:null;for(let O=0,ot=w.length;O<ot;O++){const xt=w[O],Dt=xt.object,Tt=xt.geometry,Wt=xt.group;let Xt=xt.material;Xt.allowOverride===!0&&X!==null&&(Xt=X),Dt.layers.test(W.layers)&&Al(Dt,N,W,Tt,Xt,Wt)}}function Al(w,N,W,X,O,ot){w.onBeforeRender(_,N,W,X,O,ot),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),O.onBeforeRender(_,N,W,X,w,ot),O.transparent===!0&&O.side===Ge&&O.forceSinglePass===!1?(O.side=Ye,O.needsUpdate=!0,_.renderBufferDirect(W,N,X,O,w,ot),O.side=mi,O.needsUpdate=!0,_.renderBufferDirect(W,N,X,O,w,ot),O.side=Ge):_.renderBufferDirect(W,N,X,O,w,ot),w.onAfterRender(_,N,W,X,O,ot)}function ys(w,N,W){N.isScene!==!0&&(N=xe);const X=rt.get(w),O=f.state.lights,ot=f.state.shadowsArray,xt=O.state.version,Dt=j.getParameters(w,O.state,ot,N,W),Tt=j.getProgramCacheKey(Dt);let Wt=X.programs;X.environment=w.isMeshStandardMaterial?N.environment:null,X.fog=N.fog,X.envMap=(w.isMeshStandardMaterial?R:$t).get(w.envMap||X.environment),X.envMapRotation=X.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,Wt===void 0&&(w.addEventListener("dispose",Pt),Wt=new Map,X.programs=Wt);let Xt=Wt.get(Tt);if(Xt!==void 0){if(X.currentProgram===Xt&&X.lightsStateVersion===xt)return Cl(w,Dt),Xt}else Dt.uniforms=j.getUniforms(w),w.onBeforeCompile(Dt,_),Xt=j.acquireProgram(Dt,Tt),Wt.set(Tt,Xt),X.uniforms=Dt.uniforms;const zt=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(zt.clippingPlanes=Ct.uniform),Cl(w,Dt),X.needsLights=Ff(w),X.lightsStateVersion=xt,X.needsLights&&(zt.ambientLightColor.value=O.state.ambient,zt.lightProbe.value=O.state.probe,zt.directionalLights.value=O.state.directional,zt.directionalLightShadows.value=O.state.directionalShadow,zt.spotLights.value=O.state.spot,zt.spotLightShadows.value=O.state.spotShadow,zt.rectAreaLights.value=O.state.rectArea,zt.ltc_1.value=O.state.rectAreaLTC1,zt.ltc_2.value=O.state.rectAreaLTC2,zt.pointLights.value=O.state.point,zt.pointLightShadows.value=O.state.pointShadow,zt.hemisphereLights.value=O.state.hemi,zt.directionalShadowMap.value=O.state.directionalShadowMap,zt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,zt.spotShadowMap.value=O.state.spotShadowMap,zt.spotLightMatrix.value=O.state.spotLightMatrix,zt.spotLightMap.value=O.state.spotLightMap,zt.pointShadowMap.value=O.state.pointShadowMap,zt.pointShadowMatrix.value=O.state.pointShadowMatrix),X.currentProgram=Xt,X.uniformsList=null,Xt}function Rl(w){if(w.uniformsList===null){const N=w.currentProgram.getUniforms();w.uniformsList=mo.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function Cl(w,N){const W=rt.get(w);W.outputColorSpace=N.outputColorSpace,W.batching=N.batching,W.batchingColor=N.batchingColor,W.instancing=N.instancing,W.instancingColor=N.instancingColor,W.instancingMorph=N.instancingMorph,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function Uf(w,N,W,X,O){N.isScene!==!0&&(N=xe),Et.resetTextureUnits();const ot=N.fog,xt=X.isMeshStandardMaterial?N.environment:null,Dt=D===null?_.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:gr,Tt=(X.isMeshStandardMaterial?R:$t).get(X.envMap||xt),Wt=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Xt=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),zt=!!W.morphAttributes.position,se=!!W.morphAttributes.normal,me=!!W.morphAttributes.color;let Ee=fi;X.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Ee=_.toneMapping);const Ce=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,he=Ce!==void 0?Ce.length:0,kt=rt.get(X),Ve=f.state.lights;if(nt===!0&&(ft===!0||w!==y)){const $e=w===y&&X.id===S;Ct.setState(X,w,$e)}let fe=!1;X.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Ve.state.version||kt.outputColorSpace!==Dt||O.isBatchedMesh&&kt.batching===!1||!O.isBatchedMesh&&kt.batching===!0||O.isBatchedMesh&&kt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&kt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&kt.instancing===!1||!O.isInstancedMesh&&kt.instancing===!0||O.isSkinnedMesh&&kt.skinning===!1||!O.isSkinnedMesh&&kt.skinning===!0||O.isInstancedMesh&&kt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&kt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&kt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&kt.instancingMorph===!1&&O.morphTexture!==null||kt.envMap!==Tt||X.fog===!0&&kt.fog!==ot||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==Ct.numPlanes||kt.numIntersection!==Ct.numIntersection)||kt.vertexAlphas!==Wt||kt.vertexTangents!==Xt||kt.morphTargets!==zt||kt.morphNormals!==se||kt.morphColors!==me||kt.toneMapping!==Ee||kt.morphTargetsCount!==he)&&(fe=!0):(fe=!0,kt.__version=X.version);let wn=kt.currentProgram;fe===!0&&(wn=ys(X,N,O));let Hi=!1,sn=!1,br=!1;const Se=wn.getUniforms(),un=kt.uniforms;if(Z.useProgram(wn.program)&&(Hi=!0,sn=!0,br=!0),X.id!==S&&(S=X.id,sn=!0),Hi||y!==w){Z.buffers.depth.getReversed()?(ut.copy(w.projectionMatrix),Gd(ut),Wd(ut),Se.setValue(T,"projectionMatrix",ut)):Se.setValue(T,"projectionMatrix",w.projectionMatrix),Se.setValue(T,"viewMatrix",w.matrixWorldInverse);const tn=Se.map.cameraPosition;tn!==void 0&&tn.setValue(T,qt.setFromMatrixPosition(w.matrixWorld)),ht.logarithmicDepthBuffer&&Se.setValue(T,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Se.setValue(T,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,sn=!0,br=!0)}if(O.isSkinnedMesh){Se.setOptional(T,O,"bindMatrix"),Se.setOptional(T,O,"bindMatrixInverse");const $e=O.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),Se.setValue(T,"boneTexture",$e.boneTexture,Et))}O.isBatchedMesh&&(Se.setOptional(T,O,"batchingTexture"),Se.setValue(T,"batchingTexture",O._matricesTexture,Et),Se.setOptional(T,O,"batchingIdTexture"),Se.setValue(T,"batchingIdTexture",O._indirectTexture,Et),Se.setOptional(T,O,"batchingColorTexture"),O._colorsTexture!==null&&Se.setValue(T,"batchingColorTexture",O._colorsTexture,Et));const fn=W.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&bt.update(O,W,wn),(sn||kt.receiveShadow!==O.receiveShadow)&&(kt.receiveShadow=O.receiveShadow,Se.setValue(T,"receiveShadow",O.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(un.envMap.value=Tt,un.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&N.environment!==null&&(un.envMapIntensity.value=N.environmentIntensity),sn&&(Se.setValue(T,"toneMappingExposure",_.toneMappingExposure),kt.needsLights&&Nf(un,br),ot&&X.fog===!0&&$.refreshFogUniforms(un,ot),$.refreshMaterialUniforms(un,X,H,B,f.state.transmissionRenderTarget[w.id]),mo.upload(T,Rl(kt),un,Et)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(mo.upload(T,Rl(kt),un,Et),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Se.setValue(T,"center",O.center),Se.setValue(T,"modelViewMatrix",O.modelViewMatrix),Se.setValue(T,"normalMatrix",O.normalMatrix),Se.setValue(T,"modelMatrix",O.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const $e=X.uniformsGroups;for(let tn=0,Jo=$e.length;tn<Jo;tn++){const vi=$e[tn];U.update(vi,wn),U.bind(vi,wn)}}return wn}function Nf(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function Ff(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(w,N,W){const X=rt.get(w);X.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),rt.get(w.texture).__webglTexture=N,rt.get(w.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:W,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,N){const W=rt.get(w);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0};const Of=T.createFramebuffer();this.setRenderTarget=function(w,N=0,W=0){D=w,C=N,P=W;let X=!0,O=null,ot=!1,xt=!1;if(w){const Tt=rt.get(w);if(Tt.__useDefaultFramebuffer!==void 0)Z.bindFramebuffer(T.FRAMEBUFFER,null),X=!1;else if(Tt.__webglFramebuffer===void 0)Et.setupRenderTarget(w);else if(Tt.__hasExternalTextures)Et.rebindTextures(w,rt.get(w.texture).__webglTexture,rt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const zt=w.depthTexture;if(Tt.__boundDepthTexture!==zt){if(zt!==null&&rt.has(zt)&&(w.width!==zt.image.width||w.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Et.setupDepthRenderbuffer(w)}}const Wt=w.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(xt=!0);const Xt=rt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Xt[N])?O=Xt[N][W]:O=Xt[N],ot=!0):w.samples>0&&Et.useMultisampledRTT(w)===!1?O=rt.get(w).__webglMultisampledFramebuffer:Array.isArray(Xt)?O=Xt[W]:O=Xt,I.copy(w.viewport),k.copy(w.scissor),F=w.scissorTest}else I.copy(_t).multiplyScalar(H).floor(),k.copy(Bt).multiplyScalar(H).floor(),F=At;if(W!==0&&(O=Of),Z.bindFramebuffer(T.FRAMEBUFFER,O)&&X&&Z.drawBuffers(w,O),Z.viewport(I),Z.scissor(k),Z.setScissorTest(F),ot){const Tt=rt.get(w.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+N,Tt.__webglTexture,W)}else if(xt){const Tt=rt.get(w.texture),Wt=N;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,Tt.__webglTexture,W,Wt)}else if(w!==null&&W!==0){const Tt=rt.get(w.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Tt.__webglTexture,W)}S=-1},this.readRenderTargetPixels=function(w,N,W,X,O,ot,xt,Dt=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=rt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&xt!==void 0&&(Tt=Tt[xt]),Tt){Z.bindFramebuffer(T.FRAMEBUFFER,Tt);try{const Wt=w.textures[Dt],Xt=Wt.format,zt=Wt.type;if(!ht.textureFormatReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-X&&W>=0&&W<=w.height-O&&(w.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Dt),T.readPixels(N,W,X,O,pt.convert(Xt),pt.convert(zt),ot))}finally{const Wt=D!==null?rt.get(D).__webglFramebuffer:null;Z.bindFramebuffer(T.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(w,N,W,X,O,ot,xt,Dt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=rt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&xt!==void 0&&(Tt=Tt[xt]),Tt)if(N>=0&&N<=w.width-X&&W>=0&&W<=w.height-O){Z.bindFramebuffer(T.FRAMEBUFFER,Tt);const Wt=w.textures[Dt],Xt=Wt.format,zt=Wt.type;if(!ht.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const se=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,se),T.bufferData(T.PIXEL_PACK_BUFFER,ot.byteLength,T.STREAM_READ),w.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Dt),T.readPixels(N,W,X,O,pt.convert(Xt),pt.convert(zt),0);const me=D!==null?rt.get(D).__webglFramebuffer:null;Z.bindFramebuffer(T.FRAMEBUFFER,me);const Ee=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await Hd(T,Ee,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,se),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,ot),T.deleteBuffer(se),T.deleteSync(Ee),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,N=null,W=0){const X=Math.pow(2,-W),O=Math.floor(w.image.width*X),ot=Math.floor(w.image.height*X),xt=N!==null?N.x:0,Dt=N!==null?N.y:0;Et.setTexture2D(w,0),T.copyTexSubImage2D(T.TEXTURE_2D,W,0,0,xt,Dt,O,ot),Z.unbindTexture()};const Bf=T.createFramebuffer(),zf=T.createFramebuffer();this.copyTextureToTexture=function(w,N,W=null,X=null,O=0,ot=null){ot===null&&(O!==0?(hr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ot=O,O=0):ot=0);let xt,Dt,Tt,Wt,Xt,zt,se,me,Ee;const Ce=w.isCompressedTexture?w.mipmaps[ot]:w.image;if(W!==null)xt=W.max.x-W.min.x,Dt=W.max.y-W.min.y,Tt=W.isBox3?W.max.z-W.min.z:1,Wt=W.min.x,Xt=W.min.y,zt=W.isBox3?W.min.z:0;else{const fn=Math.pow(2,-O);xt=Math.floor(Ce.width*fn),Dt=Math.floor(Ce.height*fn),w.isDataArrayTexture?Tt=Ce.depth:w.isData3DTexture?Tt=Math.floor(Ce.depth*fn):Tt=1,Wt=0,Xt=0,zt=0}X!==null?(se=X.x,me=X.y,Ee=X.z):(se=0,me=0,Ee=0);const he=pt.convert(N.format),kt=pt.convert(N.type);let Ve;N.isData3DTexture?(Et.setTexture3D(N,0),Ve=T.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Et.setTexture2DArray(N,0),Ve=T.TEXTURE_2D_ARRAY):(Et.setTexture2D(N,0),Ve=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,N.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,N.unpackAlignment);const fe=T.getParameter(T.UNPACK_ROW_LENGTH),wn=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Hi=T.getParameter(T.UNPACK_SKIP_PIXELS),sn=T.getParameter(T.UNPACK_SKIP_ROWS),br=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,Ce.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Ce.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Wt),T.pixelStorei(T.UNPACK_SKIP_ROWS,Xt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,zt);const Se=w.isDataArrayTexture||w.isData3DTexture,un=N.isDataArrayTexture||N.isData3DTexture;if(w.isDepthTexture){const fn=rt.get(w),$e=rt.get(N),tn=rt.get(fn.__renderTarget),Jo=rt.get($e.__renderTarget);Z.bindFramebuffer(T.READ_FRAMEBUFFER,tn.__webglFramebuffer),Z.bindFramebuffer(T.DRAW_FRAMEBUFFER,Jo.__webglFramebuffer);for(let vi=0;vi<Tt;vi++)Se&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,rt.get(w).__webglTexture,O,zt+vi),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,rt.get(N).__webglTexture,ot,Ee+vi)),T.blitFramebuffer(Wt,Xt,xt,Dt,se,me,xt,Dt,T.DEPTH_BUFFER_BIT,T.NEAREST);Z.bindFramebuffer(T.READ_FRAMEBUFFER,null),Z.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(O!==0||w.isRenderTargetTexture||rt.has(w)){const fn=rt.get(w),$e=rt.get(N);Z.bindFramebuffer(T.READ_FRAMEBUFFER,Bf),Z.bindFramebuffer(T.DRAW_FRAMEBUFFER,zf);for(let tn=0;tn<Tt;tn++)Se?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,fn.__webglTexture,O,zt+tn):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,fn.__webglTexture,O),un?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,$e.__webglTexture,ot,Ee+tn):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,$e.__webglTexture,ot),O!==0?T.blitFramebuffer(Wt,Xt,xt,Dt,se,me,xt,Dt,T.COLOR_BUFFER_BIT,T.NEAREST):un?T.copyTexSubImage3D(Ve,ot,se,me,Ee+tn,Wt,Xt,xt,Dt):T.copyTexSubImage2D(Ve,ot,se,me,Wt,Xt,xt,Dt);Z.bindFramebuffer(T.READ_FRAMEBUFFER,null),Z.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else un?w.isDataTexture||w.isData3DTexture?T.texSubImage3D(Ve,ot,se,me,Ee,xt,Dt,Tt,he,kt,Ce.data):N.isCompressedArrayTexture?T.compressedTexSubImage3D(Ve,ot,se,me,Ee,xt,Dt,Tt,he,Ce.data):T.texSubImage3D(Ve,ot,se,me,Ee,xt,Dt,Tt,he,kt,Ce):w.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,ot,se,me,xt,Dt,he,kt,Ce.data):w.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,ot,se,me,Ce.width,Ce.height,he,Ce.data):T.texSubImage2D(T.TEXTURE_2D,ot,se,me,xt,Dt,he,kt,Ce);T.pixelStorei(T.UNPACK_ROW_LENGTH,fe),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,wn),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Hi),T.pixelStorei(T.UNPACK_SKIP_ROWS,sn),T.pixelStorei(T.UNPACK_SKIP_IMAGES,br),ot===0&&N.generateMipmaps&&T.generateMipmap(Ve),Z.unbindTexture()},this.copyTextureToTexture3D=function(w,N,W=null,X=null,O=0){return hr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,N,W,X,O)},this.initRenderTarget=function(w){rt.get(w).__webglFramebuffer===void 0&&Et.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Et.setTextureCube(w,0):w.isData3DTexture?Et.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Et.setTexture2DArray(w,0):Et.setTexture2D(w,0),Z.unbindTexture()},this.resetState=function(){C=0,P=0,D=null,Z.reset(),Yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=ue._getUnpackColorSpace()}}const Fr=new A;function pn(n,t,e,i,r,s){const o=2*Math.PI*r/4,a=Math.max(s-2*r,0),c=Math.PI/4;Fr.copy(t),Fr[i]=0,Fr.normalize();const l=.5*o/(o+a),h=1-Fr.angleTo(n)/c;return Math.sign(Fr[e])===1?h*l:a/(o+a)+l+l*(1-h)}class Yv extends Mr{constructor(t=1,e=1,i=1,r=2,s=.1){if(r=r*2+1,s=Math.min(t/2,e/2,i/2,s),super(1,1,1,r,r,r),r===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new A,c=new A,l=new A(t,e,i).divideScalar(2).subScalar(s),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,p=h.length/6,g=new A,x=.5/r;for(let m=0,f=0;m<h.length;m+=3,f+=2)switch(a.fromArray(h,m),c.copy(a),c.x-=Math.sign(c.x)*x,c.y-=Math.sign(c.y)*x,c.z-=Math.sign(c.z)*x,c.normalize(),h[m+0]=l.x*Math.sign(a.x)+c.x*s,h[m+1]=l.y*Math.sign(a.y)+c.y*s,h[m+2]=l.z*Math.sign(a.z)+c.z*s,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/p)){case 0:g.set(1,0,0),d[f+0]=pn(g,c,"z","y",s,i),d[f+1]=1-pn(g,c,"y","z",s,e);break;case 1:g.set(-1,0,0),d[f+0]=1-pn(g,c,"z","y",s,i),d[f+1]=1-pn(g,c,"y","z",s,e);break;case 2:g.set(0,1,0),d[f+0]=1-pn(g,c,"x","z",s,t),d[f+1]=pn(g,c,"z","x",s,i);break;case 3:g.set(0,-1,0),d[f+0]=1-pn(g,c,"x","z",s,t),d[f+1]=1-pn(g,c,"z","x",s,i);break;case 4:g.set(0,0,1),d[f+0]=1-pn(g,c,"x","y",s,t),d[f+1]=1-pn(g,c,"y","x",s,e);break;case 5:g.set(0,0,-1),d[f+0]=pn(g,c,"x","y",s,t),d[f+1]=1-pn(g,c,"y","x",s,e);break}}}const Hn=Object.create(null);Hn.open="0";Hn.close="1";Hn.ping="2";Hn.pong="3";Hn.message="4";Hn.upgrade="5";Hn.noop="6";const go=Object.create(null);Object.keys(Hn).forEach(n=>{go[Hn[n]]=n});const Oc={type:"error",data:"parser error"},tf=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",ef=typeof ArrayBuffer=="function",nf=n=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(n):n&&n.buffer instanceof ArrayBuffer,ml=({type:n,data:t},e,i)=>tf&&t instanceof Blob?e?i(t):Gh(t,i):ef&&(t instanceof ArrayBuffer||nf(t))?e?i(t):Gh(new Blob([t]),i):i(Hn[n]+(t||"")),Gh=(n,t)=>{const e=new FileReader;return e.onload=function(){const i=e.result.split(",")[1];t("b"+(i||""))},e.readAsDataURL(n)};function Wh(n){return n instanceof Uint8Array?n:n instanceof ArrayBuffer?new Uint8Array(n):new Uint8Array(n.buffer,n.byteOffset,n.byteLength)}let Ia;function Kv(n,t){if(tf&&n.data instanceof Blob)return n.data.arrayBuffer().then(Wh).then(t);if(ef&&(n.data instanceof ArrayBuffer||nf(n.data)))return t(Wh(n.data));ml(n,!1,e=>{Ia||(Ia=new TextEncoder),t(Ia.encode(e))})}const Xh="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Gr=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let n=0;n<Xh.length;n++)Gr[Xh.charCodeAt(n)]=n;const $v=n=>{let t=n.length*.75,e=n.length,i,r=0,s,o,a,c;n[n.length-1]==="="&&(t--,n[n.length-2]==="="&&t--);const l=new ArrayBuffer(t),h=new Uint8Array(l);for(i=0;i<e;i+=4)s=Gr[n.charCodeAt(i)],o=Gr[n.charCodeAt(i+1)],a=Gr[n.charCodeAt(i+2)],c=Gr[n.charCodeAt(i+3)],h[r++]=s<<2|o>>4,h[r++]=(o&15)<<4|a>>2,h[r++]=(a&3)<<6|c&63;return l},Zv=typeof ArrayBuffer=="function",gl=(n,t)=>{if(typeof n!="string")return{type:"message",data:rf(n,t)};const e=n.charAt(0);return e==="b"?{type:"message",data:Jv(n.substring(1),t)}:go[e]?n.length>1?{type:go[e],data:n.substring(1)}:{type:go[e]}:Oc},Jv=(n,t)=>{if(Zv){const e=$v(n);return rf(e,t)}else return{base64:!0,data:n}},rf=(n,t)=>{switch(t){case"blob":return n instanceof Blob?n:new Blob([n]);case"arraybuffer":default:return n instanceof ArrayBuffer?n:n.buffer}},sf="",jv=(n,t)=>{const e=n.length,i=new Array(e);let r=0;n.forEach((s,o)=>{ml(s,!1,a=>{i[o]=a,++r===e&&t(i.join(sf))})})},Qv=(n,t)=>{const e=n.split(sf),i=[];for(let r=0;r<e.length;r++){const s=gl(e[r],t);if(i.push(s),s.type==="error")break}return i};function tx(){return new TransformStream({transform(n,t){Kv(n,e=>{const i=e.length;let r;if(i<126)r=new Uint8Array(1),new DataView(r.buffer).setUint8(0,i);else if(i<65536){r=new Uint8Array(3);const s=new DataView(r.buffer);s.setUint8(0,126),s.setUint16(1,i)}else{r=new Uint8Array(9);const s=new DataView(r.buffer);s.setUint8(0,127),s.setBigUint64(1,BigInt(i))}n.data&&typeof n.data!="string"&&(r[0]|=128),t.enqueue(r),t.enqueue(e)})}})}let Ua;function Qs(n){return n.reduce((t,e)=>t+e.length,0)}function to(n,t){if(n[0].length===t)return n.shift();const e=new Uint8Array(t);let i=0;for(let r=0;r<t;r++)e[r]=n[0][i++],i===n[0].length&&(n.shift(),i=0);return n.length&&i<n[0].length&&(n[0]=n[0].slice(i)),e}function ex(n,t){Ua||(Ua=new TextDecoder);const e=[];let i=0,r=-1,s=!1;return new TransformStream({transform(o,a){for(e.push(o);;){if(i===0){if(Qs(e)<1)break;const c=to(e,1);s=(c[0]&128)===128,r=c[0]&127,r<126?i=3:r===126?i=1:i=2}else if(i===1){if(Qs(e)<2)break;const c=to(e,2);r=new DataView(c.buffer,c.byteOffset,c.length).getUint16(0),i=3}else if(i===2){if(Qs(e)<8)break;const c=to(e,8),l=new DataView(c.buffer,c.byteOffset,c.length),h=l.getUint32(0);if(h>Math.pow(2,21)-1){a.enqueue(Oc);break}r=h*Math.pow(2,32)+l.getUint32(4),i=3}else{if(Qs(e)<r)break;const c=to(e,r);a.enqueue(gl(s?c:Ua.decode(c),t)),i=0}if(r===0||r>n){a.enqueue(Oc);break}}}})}const of=4;function Ue(n){if(n)return nx(n)}function nx(n){for(var t in Ue.prototype)n[t]=Ue.prototype[t];return n}Ue.prototype.on=Ue.prototype.addEventListener=function(n,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+n]=this._callbacks["$"+n]||[]).push(t),this};Ue.prototype.once=function(n,t){function e(){this.off(n,e),t.apply(this,arguments)}return e.fn=t,this.on(n,e),this};Ue.prototype.off=Ue.prototype.removeListener=Ue.prototype.removeAllListeners=Ue.prototype.removeEventListener=function(n,t){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var e=this._callbacks["$"+n];if(!e)return this;if(arguments.length==1)return delete this._callbacks["$"+n],this;for(var i,r=0;r<e.length;r++)if(i=e[r],i===t||i.fn===t){e.splice(r,1);break}return e.length===0&&delete this._callbacks["$"+n],this};Ue.prototype.emit=function(n){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),e=this._callbacks["$"+n],i=1;i<arguments.length;i++)t[i-1]=arguments[i];if(e){e=e.slice(0);for(var i=0,r=e.length;i<r;++i)e[i].apply(this,t)}return this};Ue.prototype.emitReserved=Ue.prototype.emit;Ue.prototype.listeners=function(n){return this._callbacks=this._callbacks||{},this._callbacks["$"+n]||[]};Ue.prototype.hasListeners=function(n){return!!this.listeners(n).length};const Wo=typeof Promise=="function"&&typeof Promise.resolve=="function"?t=>Promise.resolve().then(t):(t,e)=>e(t,0),vn=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),ix="arraybuffer";function af(n,...t){return t.reduce((e,i)=>(n.hasOwnProperty(i)&&(e[i]=n[i]),e),{})}const rx=vn.setTimeout,sx=vn.clearTimeout;function Xo(n,t){t.useNativeTimers?(n.setTimeoutFn=rx.bind(vn),n.clearTimeoutFn=sx.bind(vn)):(n.setTimeoutFn=vn.setTimeout.bind(vn),n.clearTimeoutFn=vn.clearTimeout.bind(vn))}const ox=1.33;function ax(n){return typeof n=="string"?cx(n):Math.ceil((n.byteLength||n.size)*ox)}function cx(n){let t=0,e=0;for(let i=0,r=n.length;i<r;i++)t=n.charCodeAt(i),t<128?e+=1:t<2048?e+=2:t<55296||t>=57344?e+=3:(i++,e+=4);return e}function cf(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function lx(n){let t="";for(let e in n)n.hasOwnProperty(e)&&(t.length&&(t+="&"),t+=encodeURIComponent(e)+"="+encodeURIComponent(n[e]));return t}function hx(n){let t={},e=n.split("&");for(let i=0,r=e.length;i<r;i++){let s=e[i].split("=");t[decodeURIComponent(s[0])]=decodeURIComponent(s[1])}return t}class ux extends Error{constructor(t,e,i){super(t),this.description=e,this.context=i,this.type="TransportError"}}class _l extends Ue{constructor(t){super(),this.writable=!1,Xo(this,t),this.opts=t,this.query=t.query,this.socket=t.socket,this.supportsBinary=!t.forceBase64}onError(t,e,i){return super.emitReserved("error",new ux(t,e,i)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(t){this.readyState==="open"&&this.write(t)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(t){const e=gl(t,this.socket.binaryType);this.onPacket(e)}onPacket(t){super.emitReserved("packet",t)}onClose(t){this.readyState="closed",super.emitReserved("close",t)}pause(t){}createUri(t,e={}){return t+"://"+this._hostname()+this._port()+this.opts.path+this._query(e)}_hostname(){const t=this.opts.hostname;return t.indexOf(":")===-1?t:"["+t+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(t){const e=lx(t);return e.length?"?"+e:""}}class fx extends _l{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(t){this.readyState="pausing";const e=()=>{this.readyState="paused",t()};if(this._polling||!this.writable){let i=0;this._polling&&(i++,this.once("pollComplete",function(){--i||e()})),this.writable||(i++,this.once("drain",function(){--i||e()}))}else e()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(t){const e=i=>{if(this.readyState==="opening"&&i.type==="open"&&this.onOpen(),i.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(i)};Qv(t,this.socket.binaryType).forEach(e),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const t=()=>{this.write([{type:"close"}])};this.readyState==="open"?t():this.once("open",t)}write(t){this.writable=!1,jv(t,e=>{this.doWrite(e,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const t=this.opts.secure?"https":"http",e=this.query||{};return this.opts.timestampRequests!==!1&&(e[this.opts.timestampParam]=cf()),!this.supportsBinary&&!e.sid&&(e.b64=1),this.createUri(t,e)}}let lf=!1;try{lf=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const dx=lf;function px(){}class mx extends fx{constructor(t){if(super(t),typeof location<"u"){const e=location.protocol==="https:";let i=location.port;i||(i=e?"443":"80"),this.xd=typeof location<"u"&&t.hostname!==location.hostname||i!==t.port}}doWrite(t,e){const i=this.request({method:"POST",data:t});i.on("success",e),i.on("error",(r,s)=>{this.onError("xhr post error",r,s)})}doPoll(){const t=this.request();t.on("data",this.onData.bind(this)),t.on("error",(e,i)=>{this.onError("xhr poll error",e,i)}),this.pollXhr=t}}class zn extends Ue{constructor(t,e,i){super(),this.createRequest=t,Xo(this,i),this._opts=i,this._method=i.method||"GET",this._uri=e,this._data=i.data!==void 0?i.data:null,this._create()}_create(){var t;const e=af(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");e.xdomain=!!this._opts.xd;const i=this._xhr=this.createRequest(e);try{i.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){i.setDisableHeaderCheck&&i.setDisableHeaderCheck(!0);for(let r in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(r)&&i.setRequestHeader(r,this._opts.extraHeaders[r])}}catch{}if(this._method==="POST")try{i.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{i.setRequestHeader("Accept","*/*")}catch{}(t=this._opts.cookieJar)===null||t===void 0||t.addCookies(i),"withCredentials"in i&&(i.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(i.timeout=this._opts.requestTimeout),i.onreadystatechange=()=>{var r;i.readyState===3&&((r=this._opts.cookieJar)===null||r===void 0||r.parseCookies(i.getResponseHeader("set-cookie"))),i.readyState===4&&(i.status===200||i.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof i.status=="number"?i.status:0)},0))},i.send(this._data)}catch(r){this.setTimeoutFn(()=>{this._onError(r)},0);return}typeof document<"u"&&(this._index=zn.requestsCount++,zn.requests[this._index]=this)}_onError(t){this.emitReserved("error",t,this._xhr),this._cleanup(!0)}_cleanup(t){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=px,t)try{this._xhr.abort()}catch{}typeof document<"u"&&delete zn.requests[this._index],this._xhr=null}}_onLoad(){const t=this._xhr.responseText;t!==null&&(this.emitReserved("data",t),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}zn.requestsCount=0;zn.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",qh);else if(typeof addEventListener=="function"){const n="onpagehide"in vn?"pagehide":"unload";addEventListener(n,qh,!1)}}function qh(){for(let n in zn.requests)zn.requests.hasOwnProperty(n)&&zn.requests[n].abort()}const gx=(function(){const n=hf({xdomain:!1});return n&&n.responseType!==null})();class _x extends mx{constructor(t){super(t);const e=t&&t.forceBase64;this.supportsBinary=gx&&!e}request(t={}){return Object.assign(t,{xd:this.xd},this.opts),new zn(hf,this.uri(),t)}}function hf(n){const t=n.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!t||dx))return new XMLHttpRequest}catch{}if(!t)try{return new vn[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const uf=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class vx extends _l{get name(){return"websocket"}doOpen(){const t=this.uri(),e=this.opts.protocols,i=uf?{}:af(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(i.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(t,e,i)}catch(r){return this.emitReserved("error",r)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=t=>this.onClose({description:"websocket connection closed",context:t}),this.ws.onmessage=t=>this.onData(t.data),this.ws.onerror=t=>this.onError("websocket error",t)}write(t){this.writable=!1;for(let e=0;e<t.length;e++){const i=t[e],r=e===t.length-1;ml(i,this.supportsBinary,s=>{try{this.doWrite(i,s)}catch{}r&&Wo(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const t=this.opts.secure?"wss":"ws",e=this.query||{};return this.opts.timestampRequests&&(e[this.opts.timestampParam]=cf()),this.supportsBinary||(e.b64=1),this.createUri(t,e)}}const Na=vn.WebSocket||vn.MozWebSocket;class xx extends vx{createSocket(t,e,i){return uf?new Na(t,e,i):e?new Na(t,e):new Na(t)}doWrite(t,e){this.ws.send(e)}}class yx extends _l{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(t){return this.emitReserved("error",t)}this._transport.closed.then(()=>{this.onClose()}).catch(t=>{this.onError("webtransport error",t)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(t=>{const e=ex(Number.MAX_SAFE_INTEGER,this.socket.binaryType),i=t.readable.pipeThrough(e).getReader(),r=tx();r.readable.pipeTo(t.writable),this._writer=r.writable.getWriter();const s=()=>{i.read().then(({done:a,value:c})=>{a||(this.onPacket(c),s())}).catch(a=>{})};s();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(t){this.writable=!1;for(let e=0;e<t.length;e++){const i=t[e],r=e===t.length-1;this._writer.write(i).then(()=>{r&&Wo(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var t;(t=this._transport)===null||t===void 0||t.close()}}const Mx={websocket:xx,webtransport:yx,polling:_x},Sx=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,wx=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Bc(n){if(n.length>8e3)throw"URI too long";const t=n,e=n.indexOf("["),i=n.indexOf("]");e!=-1&&i!=-1&&(n=n.substring(0,e)+n.substring(e,i).replace(/:/g,";")+n.substring(i,n.length));let r=Sx.exec(n||""),s={},o=14;for(;o--;)s[wx[o]]=r[o]||"";return e!=-1&&i!=-1&&(s.source=t,s.host=s.host.substring(1,s.host.length-1).replace(/;/g,":"),s.authority=s.authority.replace("[","").replace("]","").replace(/;/g,":"),s.ipv6uri=!0),s.pathNames=Ex(s,s.path),s.queryKey=bx(s,s.query),s}function Ex(n,t){const e=/\/{2,9}/g,i=t.replace(e,"/").split("/");return(t.slice(0,1)=="/"||t.length===0)&&i.splice(0,1),t.slice(-1)=="/"&&i.splice(i.length-1,1),i}function bx(n,t){const e={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(i,r,s){r&&(e[r]=s)}),e}const zc=typeof addEventListener=="function"&&typeof removeEventListener=="function",_o=[];zc&&addEventListener("offline",()=>{_o.forEach(n=>n())},!1);class pi extends Ue{constructor(t,e){if(super(),this.binaryType=ix,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,t&&typeof t=="object"&&(e=t,t=null),t){const i=Bc(t);e.hostname=i.host,e.secure=i.protocol==="https"||i.protocol==="wss",e.port=i.port,i.query&&(e.query=i.query)}else e.host&&(e.hostname=Bc(e.host).host);Xo(this,e),this.secure=e.secure!=null?e.secure:typeof location<"u"&&location.protocol==="https:",e.hostname&&!e.port&&(e.port=this.secure?"443":"80"),this.hostname=e.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=e.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},e.transports.forEach(i=>{const r=i.prototype.name;this.transports.push(r),this._transportsByName[r]=i}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},e),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=hx(this.opts.query)),zc&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},_o.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(t){const e=Object.assign({},this.opts.query);e.EIO=of,e.transport=t,this.id&&(e.sid=this.id);const i=Object.assign({},this.opts,{query:e,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[t]);return new this._transportsByName[t](i)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const t=this.opts.rememberUpgrade&&pi.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const e=this.createTransport(t);e.open(),this.setTransport(e)}setTransport(t){this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",e=>this._onClose("transport close",e))}onOpen(){this.readyState="open",pi.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const e=new Error("server error");e.code=t.data,this._onError(e);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data);break}}onHandshake(t){this.emitReserved("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this._pingInterval=t.pingInterval,this._pingTimeout=t.pingTimeout,this._maxPayload=t.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const t=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+t,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},t),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const t=this._getWritablePackets();this.transport.send(t),this._prevBufferLen=t.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let e=1;for(let i=0;i<this.writeBuffer.length;i++){const r=this.writeBuffer[i].data;if(r&&(e+=ax(r)),i>0&&e>this._maxPayload)return this.writeBuffer.slice(0,i);e+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const t=Date.now()>this._pingTimeoutTime;return t&&(this._pingTimeoutTime=0,Wo(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),t}write(t,e,i){return this._sendPacket("message",t,e,i),this}send(t,e,i){return this._sendPacket("message",t,e,i),this}_sendPacket(t,e,i,r){if(typeof e=="function"&&(r=e,e=void 0),typeof i=="function"&&(r=i,i=null),this.readyState==="closing"||this.readyState==="closed")return;i=i||{},i.compress=i.compress!==!1;const s={type:t,data:e,options:i};this.emitReserved("packetCreate",s),this.writeBuffer.push(s),r&&this.once("flush",r),this.flush()}close(){const t=()=>{this._onClose("forced close"),this.transport.close()},e=()=>{this.off("upgrade",e),this.off("upgradeError",e),t()},i=()=>{this.once("upgrade",e),this.once("upgradeError",e)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?i():t()}):this.upgrading?i():t()),this}_onError(t){if(pi.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",t),this._onClose("transport error",t)}_onClose(t,e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),zc&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const i=_o.indexOf(this._offlineEventListener);i!==-1&&_o.splice(i,1)}this.readyState="closed",this.id=null,this.emitReserved("close",t,e),this.writeBuffer=[],this._prevBufferLen=0}}}pi.protocol=of;class Tx extends pi{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let t=0;t<this._upgrades.length;t++)this._probe(this._upgrades[t])}_probe(t){let e=this.createTransport(t),i=!1;pi.priorWebsocketSuccess=!1;const r=()=>{i||(e.send([{type:"ping",data:"probe"}]),e.once("packet",u=>{if(!i)if(u.type==="pong"&&u.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",e),!e)return;pi.priorWebsocketSuccess=e.name==="websocket",this.transport.pause(()=>{i||this.readyState!=="closed"&&(h(),this.setTransport(e),e.send([{type:"upgrade"}]),this.emitReserved("upgrade",e),e=null,this.upgrading=!1,this.flush())})}else{const d=new Error("probe error");d.transport=e.name,this.emitReserved("upgradeError",d)}}))};function s(){i||(i=!0,h(),e.close(),e=null)}const o=u=>{const d=new Error("probe error: "+u);d.transport=e.name,s(),this.emitReserved("upgradeError",d)};function a(){o("transport closed")}function c(){o("socket closed")}function l(u){e&&u.name!==e.name&&s()}const h=()=>{e.removeListener("open",r),e.removeListener("error",o),e.removeListener("close",a),this.off("close",c),this.off("upgrading",l)};e.once("open",r),e.once("error",o),e.once("close",a),this.once("close",c),this.once("upgrading",l),this._upgrades.indexOf("webtransport")!==-1&&t!=="webtransport"?this.setTimeoutFn(()=>{i||e.open()},200):e.open()}onHandshake(t){this._upgrades=this._filterUpgrades(t.upgrades),super.onHandshake(t)}_filterUpgrades(t){const e=[];for(let i=0;i<t.length;i++)~this.transports.indexOf(t[i])&&e.push(t[i]);return e}}let Ax=class extends Tx{constructor(t,e={}){const i=typeof t=="object",r=i?{...t}:{...e};(!r.transports||r.transports&&typeof r.transports[0]=="string")&&(r.transports=(r.transports||["polling","websocket","webtransport"]).map(s=>Mx[s]).filter(s=>!!s)),super(i?r:t,r)}};function Rx(n,t="",e){let i=n;e=e||typeof location<"u"&&location,n==null&&(n=e.protocol+"//"+e.host),typeof n=="string"&&(n.charAt(0)==="/"&&(n.charAt(1)==="/"?n=e.protocol+n:n=e.host+n),/^(https?|wss?):\/\//.test(n)||(typeof e<"u"?n=e.protocol+"//"+n:n="https://"+n),i=Bc(n)),i.port||(/^(http|ws)$/.test(i.protocol)?i.port="80":/^(http|ws)s$/.test(i.protocol)&&(i.port="443")),i.path=i.path||"/";const s=i.host.indexOf(":")!==-1?"["+i.host+"]":i.host;return i.id=i.protocol+"://"+s+":"+i.port+t,i.href=i.protocol+"://"+s+(e&&e.port===i.port?"":":"+i.port),i}const Cx=typeof ArrayBuffer=="function",Px=n=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(n):n.buffer instanceof ArrayBuffer,ff=Object.prototype.toString,Dx=typeof Blob=="function"||typeof Blob<"u"&&ff.call(Blob)==="[object BlobConstructor]",Lx=typeof File=="function"||typeof File<"u"&&ff.call(File)==="[object FileConstructor]";function vl(n){return Cx&&(n instanceof ArrayBuffer||Px(n))||Dx&&n instanceof Blob||Lx&&n instanceof File}function vo(n,t){if(!n||typeof n!="object")return!1;if(Array.isArray(n)){for(let e=0,i=n.length;e<i;e++)if(vo(n[e]))return!0;return!1}if(vl(n))return!0;if(n.toJSON&&typeof n.toJSON=="function"&&arguments.length===1)return vo(n.toJSON(),!0);for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e)&&vo(n[e]))return!0;return!1}function Ix(n){const t=[],e=n.data,i=n;return i.data=kc(e,t),i.attachments=t.length,{packet:i,buffers:t}}function kc(n,t){if(!n)return n;if(vl(n)){const e={_placeholder:!0,num:t.length};return t.push(n),e}else if(Array.isArray(n)){const e=new Array(n.length);for(let i=0;i<n.length;i++)e[i]=kc(n[i],t);return e}else if(typeof n=="object"&&!(n instanceof Date)){const e={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=kc(n[i],t));return e}return n}function Ux(n,t){return n.data=Vc(n.data,t),delete n.attachments,n}function Vc(n,t){if(!n)return n;if(n&&n._placeholder===!0){if(typeof n.num=="number"&&n.num>=0&&n.num<t.length)return t[n.num];throw new Error("illegal attachments")}else if(Array.isArray(n))for(let e=0;e<n.length;e++)n[e]=Vc(n[e],t);else if(typeof n=="object")for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&(n[e]=Vc(n[e],t));return n}const Nx=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"];var ae;(function(n){n[n.CONNECT=0]="CONNECT",n[n.DISCONNECT=1]="DISCONNECT",n[n.EVENT=2]="EVENT",n[n.ACK=3]="ACK",n[n.CONNECT_ERROR=4]="CONNECT_ERROR",n[n.BINARY_EVENT=5]="BINARY_EVENT",n[n.BINARY_ACK=6]="BINARY_ACK"})(ae||(ae={}));class Fx{constructor(t){this.replacer=t}encode(t){return(t.type===ae.EVENT||t.type===ae.ACK)&&vo(t)?this.encodeAsBinary({type:t.type===ae.EVENT?ae.BINARY_EVENT:ae.BINARY_ACK,nsp:t.nsp,data:t.data,id:t.id}):[this.encodeAsString(t)]}encodeAsString(t){let e=""+t.type;return(t.type===ae.BINARY_EVENT||t.type===ae.BINARY_ACK)&&(e+=t.attachments+"-"),t.nsp&&t.nsp!=="/"&&(e+=t.nsp+","),t.id!=null&&(e+=t.id),t.data!=null&&(e+=JSON.stringify(t.data,this.replacer)),e}encodeAsBinary(t){const e=Ix(t),i=this.encodeAsString(e.packet),r=e.buffers;return r.unshift(i),r}}class xl extends Ue{constructor(t){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof t=="function"?{reviver:t}:t)}add(t){let e;if(typeof t=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");e=this.decodeString(t);const i=e.type===ae.BINARY_EVENT;i||e.type===ae.BINARY_ACK?(e.type=i?ae.EVENT:ae.ACK,this.reconstructor=new Ox(e),e.attachments===0&&super.emitReserved("decoded",e)):super.emitReserved("decoded",e)}else if(vl(t)||t.base64)if(this.reconstructor)e=this.reconstructor.takeBinaryData(t),e&&(this.reconstructor=null,super.emitReserved("decoded",e));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+t)}decodeString(t){let e=0;const i={type:Number(t.charAt(0))};if(ae[i.type]===void 0)throw new Error("unknown packet type "+i.type);if(i.type===ae.BINARY_EVENT||i.type===ae.BINARY_ACK){const s=e+1;for(;t.charAt(++e)!=="-"&&e!=t.length;);const o=t.substring(s,e);if(o!=Number(o)||t.charAt(e)!=="-")throw new Error("Illegal attachments");const a=Number(o);if(!Bx(a)||a<0)throw new Error("Illegal attachments");if(a>this.opts.maxAttachments)throw new Error("too many attachments");i.attachments=a}if(t.charAt(e+1)==="/"){const s=e+1;for(;++e&&!(t.charAt(e)===","||e===t.length););i.nsp=t.substring(s,e)}else i.nsp="/";const r=t.charAt(e+1);if(r!==""&&Number(r)==r){const s=e+1;for(;++e;){const o=t.charAt(e);if(o==null||Number(o)!=o){--e;break}if(e===t.length)break}i.id=Number(t.substring(s,e+1))}if(t.charAt(++e)){const s=this.tryParse(t.substr(e));if(xl.isPayloadValid(i.type,s))i.data=s;else throw new Error("invalid payload")}return i}tryParse(t){try{return JSON.parse(t,this.opts.reviver)}catch{return!1}}static isPayloadValid(t,e){switch(t){case ae.CONNECT:return Yh(e);case ae.DISCONNECT:return e===void 0;case ae.CONNECT_ERROR:return typeof e=="string"||Yh(e);case ae.EVENT:case ae.BINARY_EVENT:return Array.isArray(e)&&(typeof e[0]=="number"||typeof e[0]=="string"&&Nx.indexOf(e[0])===-1);case ae.ACK:case ae.BINARY_ACK:return Array.isArray(e)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class Ox{constructor(t){this.packet=t,this.buffers=[],this.reconPack=t}takeBinaryData(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){const e=Ux(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const Bx=Number.isInteger||function(n){return typeof n=="number"&&isFinite(n)&&Math.floor(n)===n};function Yh(n){return Object.prototype.toString.call(n)==="[object Object]"}const zx=Object.freeze(Object.defineProperty({__proto__:null,Decoder:xl,Encoder:Fx,get PacketType(){return ae}},Symbol.toStringTag,{value:"Module"}));function An(n,t,e){return n.on(t,e),function(){n.off(t,e)}}const kx=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class df extends Ue{constructor(t,e,i){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=t,this.nsp=e,i&&i.auth&&(this.auth=i.auth),this._opts=Object.assign({},i),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const t=this.io;this.subs=[An(t,"open",this.onopen.bind(this)),An(t,"packet",this.onpacket.bind(this)),An(t,"error",this.onerror.bind(this)),An(t,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...t){return t.unshift("message"),this.emit.apply(this,t),this}emit(t,...e){var i,r,s;if(kx.hasOwnProperty(t))throw new Error('"'+t.toString()+'" is a reserved event name');if(e.unshift(t),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(e),this;const o={type:ae.EVENT,data:e};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof e[e.length-1]=="function"){const h=this.ids++,u=e.pop();this._registerAckCallback(h,u),o.id=h}const a=(r=(i=this.io.engine)===null||i===void 0?void 0:i.transport)===null||r===void 0?void 0:r.writable,c=this.connected&&!(!((s=this.io.engine)===null||s===void 0)&&s._hasPingExpired());return this.flags.volatile&&!a||(c?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(t,e){var i;const r=(i=this.flags.timeout)!==null&&i!==void 0?i:this._opts.ackTimeout;if(r===void 0){this.acks[t]=e;return}const s=this.io.setTimeoutFn(()=>{delete this.acks[t];for(let a=0;a<this.sendBuffer.length;a++)this.sendBuffer[a].id===t&&this.sendBuffer.splice(a,1);e.call(this,new Error("operation has timed out"))},r),o=(...a)=>{this.io.clearTimeoutFn(s),e.apply(this,a)};o.withError=!0,this.acks[t]=o}emitWithAck(t,...e){return new Promise((i,r)=>{const s=(o,a)=>o?r(o):i(a);s.withError=!0,e.push(s),this.emit(t,...e)})}_addToQueue(t){let e;typeof t[t.length-1]=="function"&&(e=t.pop());const i={id:this._queueSeq++,tryCount:0,pending:!1,args:t,flags:Object.assign({fromQueue:!0},this.flags)};t.push((r,...s)=>(this._queue[0],r!==null?i.tryCount>this._opts.retries&&(this._queue.shift(),e&&e(r)):(this._queue.shift(),e&&e(null,...s)),i.pending=!1,this._drainQueue())),this._queue.push(i),this._drainQueue()}_drainQueue(t=!1){if(!this.connected||this._queue.length===0)return;const e=this._queue[0];e.pending&&!t||(e.pending=!0,e.tryCount++,this.flags=e.flags,this.emit.apply(this,e.args))}packet(t){t.nsp=this.nsp,this.io._packet(t)}onopen(){typeof this.auth=="function"?this.auth(t=>{this._sendConnectPacket(t)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(t){this.packet({type:ae.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},t):t})}onerror(t){this.connected||this.emitReserved("connect_error",t)}onclose(t,e){this.connected=!1,delete this.id,this.emitReserved("disconnect",t,e),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(t=>{if(!this.sendBuffer.some(i=>String(i.id)===t)){const i=this.acks[t];delete this.acks[t],i.withError&&i.call(this,new Error("socket has been disconnected"))}})}onpacket(t){if(t.nsp===this.nsp)switch(t.type){case ae.CONNECT:t.data&&t.data.sid?this.onconnect(t.data.sid,t.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case ae.EVENT:case ae.BINARY_EVENT:this.onevent(t);break;case ae.ACK:case ae.BINARY_ACK:this.onack(t);break;case ae.DISCONNECT:this.ondisconnect();break;case ae.CONNECT_ERROR:this.destroy();const i=new Error(t.data.message);i.data=t.data.data,this.emitReserved("connect_error",i);break}}onevent(t){const e=t.data||[];t.id!=null&&e.push(this.ack(t.id)),this.connected?this.emitEvent(e):this.receiveBuffer.push(Object.freeze(e))}emitEvent(t){if(this._anyListeners&&this._anyListeners.length){const e=this._anyListeners.slice();for(const i of e)i.apply(this,t)}super.emit.apply(this,t),this._pid&&t.length&&typeof t[t.length-1]=="string"&&(this._lastOffset=t[t.length-1])}ack(t){const e=this;let i=!1;return function(...r){i||(i=!0,e.packet({type:ae.ACK,id:t,data:r}))}}onack(t){const e=this.acks[t.id];typeof e=="function"&&(delete this.acks[t.id],e.withError&&t.data.unshift(null),e.apply(this,t.data))}onconnect(t,e){this.id=t,this.recovered=e&&this._pid===e,this._pid=e,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(t=>this.emitEvent(t)),this.receiveBuffer=[],this.sendBuffer.forEach(t=>{this.notifyOutgoingListeners(t),this.packet(t)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(t=>t()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:ae.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(t){return this.flags.compress=t,this}get volatile(){return this.flags.volatile=!0,this}timeout(t){return this.flags.timeout=t,this}onAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(t),this}prependAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(t),this}offAny(t){if(!this._anyListeners)return this;if(t){const e=this._anyListeners;for(let i=0;i<e.length;i++)if(t===e[i])return e.splice(i,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(t),this}prependAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(t),this}offAnyOutgoing(t){if(!this._anyOutgoingListeners)return this;if(t){const e=this._anyOutgoingListeners;for(let i=0;i<e.length;i++)if(t===e[i])return e.splice(i,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(t){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const e=this._anyOutgoingListeners.slice();for(const i of e)i.apply(this,t.data)}}}function wr(n){n=n||{},this.ms=n.min||100,this.max=n.max||1e4,this.factor=n.factor||2,this.jitter=n.jitter>0&&n.jitter<=1?n.jitter:0,this.attempts=0}wr.prototype.duration=function(){var n=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),e=Math.floor(t*this.jitter*n);n=(Math.floor(t*10)&1)==0?n-e:n+e}return Math.min(n,this.max)|0};wr.prototype.reset=function(){this.attempts=0};wr.prototype.setMin=function(n){this.ms=n};wr.prototype.setMax=function(n){this.max=n};wr.prototype.setJitter=function(n){this.jitter=n};class Hc extends Ue{constructor(t,e){var i;super(),this.nsps={},this.subs=[],t&&typeof t=="object"&&(e=t,t=void 0),e=e||{},e.path=e.path||"/socket.io",this.opts=e,Xo(this,e),this.reconnection(e.reconnection!==!1),this.reconnectionAttempts(e.reconnectionAttempts||1/0),this.reconnectionDelay(e.reconnectionDelay||1e3),this.reconnectionDelayMax(e.reconnectionDelayMax||5e3),this.randomizationFactor((i=e.randomizationFactor)!==null&&i!==void 0?i:.5),this.backoff=new wr({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(e.timeout==null?2e4:e.timeout),this._readyState="closed",this.uri=t;const r=e.parser||zx;this.encoder=new r.Encoder,this.decoder=new r.Decoder,this._autoConnect=e.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(t){return arguments.length?(this._reconnection=!!t,t||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(t){return t===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=t,this)}reconnectionDelay(t){var e;return t===void 0?this._reconnectionDelay:(this._reconnectionDelay=t,(e=this.backoff)===null||e===void 0||e.setMin(t),this)}randomizationFactor(t){var e;return t===void 0?this._randomizationFactor:(this._randomizationFactor=t,(e=this.backoff)===null||e===void 0||e.setJitter(t),this)}reconnectionDelayMax(t){var e;return t===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=t,(e=this.backoff)===null||e===void 0||e.setMax(t),this)}timeout(t){return arguments.length?(this._timeout=t,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(t){if(~this._readyState.indexOf("open"))return this;this.engine=new Ax(this.uri,this.opts);const e=this.engine,i=this;this._readyState="opening",this.skipReconnect=!1;const r=An(e,"open",function(){i.onopen(),t&&t()}),s=a=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",a),t?t(a):this.maybeReconnectOnOpen()},o=An(e,"error",s);if(this._timeout!==!1){const a=this._timeout,c=this.setTimeoutFn(()=>{r(),s(new Error("timeout")),e.close()},a);this.opts.autoUnref&&c.unref(),this.subs.push(()=>{this.clearTimeoutFn(c)})}return this.subs.push(r),this.subs.push(o),this}connect(t){return this.open(t)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const t=this.engine;this.subs.push(An(t,"ping",this.onping.bind(this)),An(t,"data",this.ondata.bind(this)),An(t,"error",this.onerror.bind(this)),An(t,"close",this.onclose.bind(this)),An(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(t){try{this.decoder.add(t)}catch(e){this.onclose("parse error",e)}}ondecoded(t){Wo(()=>{this.emitReserved("packet",t)},this.setTimeoutFn)}onerror(t){this.emitReserved("error",t)}socket(t,e){let i=this.nsps[t];return i?this._autoConnect&&!i.active&&i.connect():(i=new df(this,t,e),this.nsps[t]=i),i}_destroy(t){const e=Object.keys(this.nsps);for(const i of e)if(this.nsps[i].active)return;this._close()}_packet(t){const e=this.encoder.encode(t);for(let i=0;i<e.length;i++)this.engine.write(e[i],t.options)}cleanup(){this.subs.forEach(t=>t()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(t,e){var i;this.cleanup(),(i=this.engine)===null||i===void 0||i.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",t,e),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const e=this.backoff.duration();this._reconnecting=!0;const i=this.setTimeoutFn(()=>{t.skipReconnect||(this.emitReserved("reconnect_attempt",t.backoff.attempts),!t.skipReconnect&&t.open(r=>{r?(t._reconnecting=!1,t.reconnect(),this.emitReserved("reconnect_error",r)):t.onreconnect()}))},e);this.opts.autoUnref&&i.unref(),this.subs.push(()=>{this.clearTimeoutFn(i)})}}onreconnect(){const t=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",t)}}const Or={};function xo(n,t){typeof n=="object"&&(t=n,n=void 0),t=t||{};const e=Rx(n,t.path||"/socket.io"),i=e.source,r=e.id,s=e.path,o=Or[r]&&s in Or[r].nsps,a=t.forceNew||t["force new connection"]||t.multiplex===!1||o;let c;return a?c=new Hc(i,t):(Or[r]||(Or[r]=new Hc(i,t)),c=Or[r]),e.query&&!t.query&&(t.query=e.queryKey),c.socket(e.path,t)}Object.assign(xo,{Manager:Hc,Socket:df,io:xo,connect:xo});const Ne=Math.PI*2,be=He.clamp,St=He.lerp,Te=document.querySelector("#game"),Le=new qv({antialias:!0,powerPreference:"high-performance"});Le.setPixelRatio(Math.min(window.devicePixelRatio,2));Le.setSize(window.innerWidth,window.innerHeight);Le.shadowMap.enabled=!0;Le.shadowMap.type=uu;Le.outputColorSpace=en;Le.toneMapping=du;Le.toneMappingExposure=1.08;Te.appendChild(Le.domElement);let Ln=null,Mn=null,Br=.08;function Vi(){const n=window.AudioContext||window.webkitAudioContext;return n?(Ln||(Ln=new n,Mn=Ln.createGain(),Mn.gain.value=.58,Mn.connect(Ln.destination)),Ln.state==="suspended"&&Ln.resume().catch(()=>{}),Te.dataset.audio="ready",Ln):null}function ps(n){const t=Math.ceil(Ln.sampleRate*n),e=Ln.createBuffer(1,t,Ln.sampleRate),i=e.getChannelData(0);for(let r=0;r<t;r++){const s=1-r/t;i[r]=(Math.random()*2-1)*(.35+s*.65)}return e}function Vx(n){const t=Vi();if(!t)return;const e=t.currentTime,i=t.createOscillator(),r=t.createGain();i.type="sine",i.frequency.setValueAtTime(n?112:88,e),i.frequency.exponentialRampToValueAtTime(42,e+.105),r.gain.setValueAtTime(1e-4,e),r.gain.exponentialRampToValueAtTime(n?.115:.082,e+.008),r.gain.exponentialRampToValueAtTime(1e-4,e+.12),i.connect(r).connect(Mn),i.start(e),i.stop(e+.13);const s=t.createBufferSource(),o=t.createBiquadFilter(),a=t.createGain();s.buffer=ps(.075),o.type="lowpass",o.frequency.value=n?760:520,a.gain.setValueAtTime(n?.075:.048,e),a.gain.exponentialRampToValueAtTime(1e-4,e+.075),s.connect(o).connect(a).connect(Mn),s.start(e),Te.dataset.lastSound=n?"footstep-sprint":"footstep-walk"}function Hx(){const n=Vi();if(!n)return;const t=n.currentTime,e=n.createBufferSource(),i=n.createBiquadFilter(),r=n.createGain();e.buffer=ps(.25),i.type="bandpass",i.Q.value=.65,i.frequency.setValueAtTime(2450,t),i.frequency.exponentialRampToValueAtTime(620,t+.22),r.gain.setValueAtTime(1e-4,t),r.gain.exponentialRampToValueAtTime(.16,t+.025),r.gain.exponentialRampToValueAtTime(1e-4,t+.24),e.connect(i).connect(r).connect(Mn),e.start(t);const s=n.createOscillator(),o=n.createGain();s.type="triangle",s.frequency.setValueAtTime(510,t),s.frequency.exponentialRampToValueAtTime(185,t+.14),o.gain.setValueAtTime(.045,t),o.gain.exponentialRampToValueAtTime(1e-4,t+.15),s.connect(o).connect(Mn),s.start(t),s.stop(t+.16),Te.dataset.lastSound="slash"}function Gx(){const n=Vi();if(!n)return;const t=n.currentTime,e=n.createOscillator(),i=n.createGain();e.type="sine",e.frequency.setValueAtTime(105,t),e.frequency.exponentialRampToValueAtTime(28,t+.28),i.gain.setValueAtTime(.24,t),i.gain.exponentialRampToValueAtTime(1e-4,t+.3),e.connect(i).connect(Mn),e.start(t),e.stop(t+.31);const r=n.createBufferSource(),s=n.createBiquadFilter(),o=n.createGain();r.buffer=ps(.3),s.type="lowpass",s.frequency.setValueAtTime(820,t),s.frequency.exponentialRampToValueAtTime(150,t+.27),o.gain.setValueAtTime(.18,t),o.gain.exponentialRampToValueAtTime(1e-4,t+.3),r.connect(s).connect(o).connect(Mn),r.start(t),Te.dataset.lastSound="stomp"}function Wx(n){const t=Vi();if(!t)return;const e=t.currentTime,i=t.createBufferSource(),r=t.createBiquadFilter(),s=t.createGain();i.buffer=ps(n==="rpg"?.38:.12),r.type="lowpass",r.frequency.setValueAtTime(n==="rpg"?520:1900,e),r.frequency.exponentialRampToValueAtTime(n==="rpg"?90:420,e+(n==="rpg"?.36:.1)),s.gain.setValueAtTime(n==="rpg"?.34:.16,e),s.gain.exponentialRampToValueAtTime(1e-4,e+(n==="rpg"?.38:.12)),i.connect(r).connect(s).connect(Mn),i.start(e),Te.dataset.lastSound=n}function Xx(){const n=Vi();if(!n)return;const t=n.currentTime,e=n.createOscillator(),i=n.createGain();e.type="sine",e.frequency.setValueAtTime(86,t),e.frequency.exponentialRampToValueAtTime(22,t+.55),i.gain.setValueAtTime(.42,t),i.gain.exponentialRampToValueAtTime(1e-4,t+.58),e.connect(i).connect(Mn),e.start(t),e.stop(t+.6);const r=n.createBufferSource(),s=n.createGain();r.buffer=ps(.68),s.gain.setValueAtTime(.3,t),s.gain.exponentialRampToValueAtTime(1e-4,t+.68),r.connect(s).connect(Mn),r.start(t),Te.dataset.lastSound="rpg-explosion"}function qx(n){if(E.dead||!E.grounded||!E.moving||E.attack){Br=Math.min(Br,.08);return}Br-=n,Br<=0&&(Vx(E.sprinting),Br=E.sprinting?.285:.46)}const ee=new mp;ee.fog=new ol(11060154,.0072);const je=new gn(48,window.innerWidth/window.innerHeight,.08,520);je.position.set(6.5,5.1,-8.7);const cn={skyTop:3105928,skyHorizon:12046801,grassDark:3296056,grassLight:7835997,leather:5057827,leatherLight:7753795,steel:7635339,steelDark:3819088,gold:12159551,cloth:8333108,clothDark:4397349,skin:14000758,hair:2826269},Lt={armor:new ce({color:cn.steelDark,roughness:.38,metalness:.52}),armorEdge:new ce({color:cn.steel,roughness:.3,metalness:.58}),silver:new ce({color:13818069,roughness:.24,metalness:.62}),gold:new ce({color:cn.gold,roughness:.33,metalness:.56}),leather:new ce({color:cn.leather,roughness:.8,metalness:.02}),leatherLight:new ce({color:cn.leatherLight,roughness:.74,metalness:.04}),cloth:new ce({color:cn.cloth,roughness:.82,metalness:0,side:Ge}),clothDark:new ce({color:cn.clothDark,roughness:.88,metalness:0,side:Ge}),skin:new ce({color:cn.skin,roughness:.72}),hair:new ce({color:cn.hair,roughness:.9}),eye:new ce({color:2824207,emissive:8142354,emissiveIntensity:.24,roughness:.34})};function nn(n,t=!0,e=!0){return n.castShadow=t,n.receiveShadow=e,n}function oe(n,t,e,i,r,s=3){return nn(new It(new Yv(n,t,e,s,i),r))}function Me(n,t,e,i,r){return nn(new It(new us(n,t,e,i),r))}function Yx(){const n={top:{value:new Qt(cn.skyTop)},horizon:{value:new Qt(cn.skyHorizon)},sunDir:{value:new A(-.45,.64,-.45).normalize()}},t=new ei({uniforms:n,side:Ye,depthWrite:!1,vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform vec3 top; uniform vec3 horizon; uniform vec3 sunDir; varying vec3 vDir;
      void main(){
        float h = smoothstep(-0.08, .82, vDir.y);
        vec3 col = mix(horizon, top, h);
        float sun = pow(max(dot(normalize(vDir), sunDir), 0.0), 480.0);
        float glow = pow(max(dot(normalize(vDir), sunDir), 0.0), 16.0);
        col += vec3(1.0, .72, .38) * sun * 3.2 + vec3(1.0, .55, .24) * glow * .12;
        gl_FragColor = vec4(col, 1.0);
      }`});ee.add(new It(new _n(420,32,18),t))}Yx();const Kx=new sm(13163999,2503463,1.7);ee.add(Kx);const Qe=new Yu(16769724,4.4);Qe.position.set(-34,46,-28);Qe.castShadow=!0;Qe.shadow.mapSize.set(2048,2048);Qe.shadow.camera.left=-82;Qe.shadow.camera.right=82;Qe.shadow.camera.top=82;Qe.shadow.camera.bottom=-82;Qe.shadow.camera.near=1;Qe.shadow.camera.far=220;Qe.shadow.bias=-45e-5;Qe.shadow.normalBias=.035;ee.add(Qe);ee.add(Qe.target);const pf=new Yu(9421525,1.35);pf.position.set(18,18,22);ee.add(pf);function Fe(n,t){const e=Math.sin(n*.055)*.11+Math.cos(t*.048)*.09+Math.sin((n+t)*.032)*.07,i=(r,s,o,a)=>o*Math.exp(-((n-r)**2+(t-s)**2)/(a*a));return e+i(-30,24,4.3,22)+i(34,36,5.4,28)+i(-38,-34,3.5,20)+i(41,-25,3,19)+i(-92,74,7.2,42)+i(104,88,8.5,48)+i(-108,-82,6.6,39)+i(96,-105,7.4,44)-i(0,0,.25,18)}function $x(n=9127){return()=>(n=n*1664525+1013904223>>>0,n/4294967296)}const ve=$x(),Kh=320,ms=new ds(Kh,Kh,160,160);ms.rotateX(-Math.PI/2);const eo=ms.attributes.position,mf=[],Zx=new Qt(cn.grassDark),Jx=new Qt(cn.grassLight);for(let n=0;n<eo.count;n++){const t=eo.getX(n),e=eo.getZ(n),i=Fe(t,e);eo.setY(n,i);const r=be(.47+i*.026+Math.sin(t*.19+e*.11)*.09+ve()*.06,.1,.92),s=Zx.clone().lerp(Jx,r);mf.push(s.r,s.g,s.b)}ms.setAttribute("color",new re(mf,3));ms.computeVertexNormals();const jx=new ce({vertexColors:!0,roughness:.96,metalness:0}),gf=nn(new It(ms,jx),!1,!0);ee.add(gf);const gs=[gf],_s=[],Qx=.46;function ty(n,t){for(let e=0;e<3;e++)_s.forEach(i=>{const r=n.x-i.x,s=n.z-i.z,o=Qx+i.radius,a=r*r+s*s;if(a>=o*o)return;const c=Math.sqrt(a),l=c>1e-4?r/c:Math.sin(Ut.rotation.y+Math.PI),h=c>1e-4?s/c:Math.cos(Ut.rotation.y+Math.PI);n.x=i.x+l*o,n.z=i.z+h*o;const u=t.x*l+t.z*h;u<0&&(t.x-=u*l,t.z-=u*h)})}function $h(n,t,e){const i=Math.hypot(n,t),r=Math.max(1,Math.ceil(i/.16)),s=n/r,o=t/r;for(let a=0;a<r;a++)Ut.position.x+=s,Ut.position.z+=o,ty(Ut.position,e)}function ey(){const n=new Dn(.045,.38,3,1);n.translate(0,.19,0);const t=new ce({color:7310164,roughness:1,side:Ge});t.onBeforeCompile=s=>{t.userData.shader=s,s.uniforms.uTime={value:0},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        #ifdef USE_INSTANCING
          vec4 ip = instanceMatrix * vec4(position, 1.0);
          float bend = sin(uTime * 1.35 + ip.x * .19 + ip.z * .16) * .045;
          transformed.x += bend * uv.y;
          transformed.z += bend * .45 * uv.y;
        #endif`)};const e=2300,i=new yp(n,t,e);i.receiveShadow=!0,i.castShadow=!0;const r=new Re;for(let s=0;s<e;s++){const o=ve()*Ne,a=5+Math.sqrt(ve())*140,c=Math.cos(o)*a,l=Math.sin(o)*a;r.position.set(c,Fe(c,l),l),r.rotation.set((ve()-.5)*.12,ve()*Ne,(ve()-.5)*.1);const h=.65+ve()*.9;r.scale.set(h,h*(.75+ve()*.55),h),r.updateMatrix(),i.setMatrixAt(s,r.matrix)}return i.instanceMatrix.needsUpdate=!0,ee.add(i),t}const Zh=ey();function _f(n,t,e=1){const i=new Vo(e,0),r=i.attributes.position;for(let a=0;a<r.count;a++){const c=r.getY(a);r.setXYZ(a,r.getX(a)*(1+c*.06),c*.62,r.getZ(a)*.82)}i.computeVertexNormals();const s=new ce({color:6844522,roughness:.91,metalness:.02,flatShading:!0}),o=nn(new It(i,s));o.position.set(n,Fe(n,t)+e*.25,t),o.rotation.set(ve()*.4,ve()*Ne,ve()*.22),ee.add(o),gs.push(o),_s.push({x:n,z:t,radius:.78*e,type:"rock"})}function vf(n,t,e=1){const i=new ie;i.position.set(n,Fe(n,t),t),i.scale.setScalar(e);const r=new ce({color:5126955,roughness:.94,flatShading:!0}),s=[new ce({color:3693890,roughness:.92,flatShading:!0}),new ce({color:4746313,roughness:.9,flatShading:!0})],o=Me(.2,.35,3.25,7,r);o.position.y=1.55,o.rotation.z=(ve()-.5)*.06,i.add(o),[[0,3.4,1.25],[-.62,3.25,.9],[.66,3.34,.95],[.08,4.12,1.04]].forEach(([c,l,h],u)=>{const d=nn(new It(new hn(h,1),s[u%2]));d.position.set(c,l,(ve()-.5)*.38),d.scale.y=.9+ve()*.2,i.add(d)}),ee.add(i),gs.push(o),_s.push({x:n,z:t,radius:.55*e,type:"tree"})}[[-13,11,.9],[-21,17,1.12],[18,20,1.08],[28,13,.95],[-30,-13,1.15],[31,-22,1.04],[-15,-30,.94],[8,35,1.12]].forEach(n=>vf(...n));[[-7,8,.65],[10,12,1],[-14,-7,.85],[18,-11,.72],[25,28,1.2],[-25,26,.95],[5,-26,.6],[37,2,1.1],[-34,-26,1.25],[14,5,.38]].forEach(n=>_f(...n));for(let n=0;n<22;n++){const t=ve()*Ne,e=72+ve()*68;vf(Math.cos(t)*e,Math.sin(t)*e,.82+ve()*.42)}for(let n=0;n<30;n++){const t=ve()*Ne,e=65+ve()*78;_f(Math.cos(t)*e,Math.sin(t)*e,.45+ve()*.9)}const yl=new Vo(1,0),zr=yl.attributes.position;for(let n=0;n<zr.count;n++){const t=zr.getY(n);zr.setXYZ(n,zr.getX(n)*(1+t*.05),t*.48,zr.getZ(n)*.78)}yl.computeVertexNormals();const Jh=[new ce({color:7436656,roughness:.96,flatShading:!0}),new ce({color:5858141,roughness:.97,flatShading:!0}),new ce({color:8222828,roughness:.95,flatShading:!0})];function ny(n,t,e,i){const r=nn(new It(yl,Jh[i%Jh.length]));r.position.set(n,Fe(n,t)+e*.17,t),r.rotation.set((ve()-.5)*.42,ve()*Ne,(ve()-.5)*.34);const s=e*(1+ve()*.3);r.scale.set(s,e*(.7+ve()*.25),e),ee.add(r),gs.push(r),_s.push({x:n,z:t,radius:.72*s,type:"small-rock"})}for(let n=0;n<48;n++){const t=ve()*Ne,e=14+Math.sqrt(ve())*125;ny(Math.cos(t)*e,Math.sin(t)*e,.16+ve()*.28,n)}Te.dataset.worldObstacleCount=String(_s.length);function jh(n,t,e,i,r){const o=new ie;o.position.set(t,Fe(t,0)+9.5,0),o.userData.baseY=o.position.y;const a=document.createElement("canvas");a.width=1024,a.height=256;const c=a.getContext("2d");c.clearRect(0,0,a.width,a.height),c.beginPath(),c.roundRect(28,30,968,196,34),c.fillStyle=r,c.fill(),c.lineWidth=9,c.strokeStyle=e,c.stroke(),c.font="900 134px system-ui, sans-serif",c.textAlign="center",c.textBaseline="middle",c.lineWidth=18,c.strokeStyle="rgba(8, 12, 22, .96)",c.strokeText(n,512,130),c.fillStyle=e,c.shadowColor=i,c.shadowBlur=34,c.fillText(n,512,130);const l=new Ep(a);l.colorSpace=en;const h=new _p(new Lu({map:l,transparent:!0,depthWrite:!1,depthTest:!1}));return h.scale.set(12.8,3.2,1),h.renderOrder=60,o.add(h),ee.add(o),o}const iy=[jh("BLOODS",-58,"#ff6a74","#ff334d","rgba(48, 8, 16, .8)"),jh("CRIPS",58,"#78a9ff","#2f79ff","rgba(7, 18, 48, .8)")];function ry(n){iy.forEach((t,e)=>{t.position.y=t.userData.baseY+Math.sin(n*1.15+e*Math.PI)*.12})}function Fa(n,t,e,i){const r=new ie,s=new rn({color:15265511,transparent:!0,opacity:.36,depthWrite:!1});return[[0,0,0,1.4],[1.2,.15,.05,1],[-1.1,.05,.15,.9],[.2,.35,.1,1.05]].forEach(([o,a,c,l])=>{const h=new It(new hn(l,1),s);h.position.set(o,a,c),h.scale.y=.46,r.add(h)}),r.position.set(n,t,e),r.scale.setScalar(i),ee.add(r),r}const sy=[Fa(-40,28,26,3.6),Fa(38,23,6,2.8),Fa(8,32,58,4.3)],Do=[],Lo=[],oy=new hn(.12,0),Io=[7163956,8610109,5195309].map(n=>new ce({color:n,roughness:1,metalness:0}));for(let n=0;n<38;n++){const t=new It(oy,Io[n%Io.length]);t.visible=!1,t.castShadow=!0,ee.add(t),Do.push(t)}for(let n=0;n<15;n++){const t=new It(new hn(.22,1),new rn({color:n%2?10189392:7691069,transparent:!0,opacity:0,depthWrite:!1}));t.visible=!1,ee.add(t),Lo.push(t)}const Fn=new It(new Ho(.38,.58,36),new rn({color:11635287,transparent:!0,opacity:0,depthWrite:!1,side:Ge}));Fn.rotation.x=-Math.PI/2;Fn.visible=!1;ee.add(Fn);let ci=10;function ay(){const n=new A(Math.sin(Ut.rotation.y),0,Math.cos(Ut.rotation.y)),t=Ut.position.clone().addScaledVector(n,2.05);t.y=Fe(t.x,t.z)+.06,ci=0,Do.forEach((e,i)=>{const r=i/Do.length*Ne+(Math.random()-.5)*.36,s=2.5+Math.random()*4.8;e.position.copy(t),e.position.x+=Math.cos(r)*Math.random()*.24,e.position.z+=Math.sin(r)*Math.random()*.24,e.scale.setScalar(.5+Math.random()*1.2),e.rotation.set(Math.random()*Ne,Math.random()*Ne,Math.random()*Ne),e.userData.velocity=new A(Math.cos(r)*s,3.2+Math.random()*5.4,Math.sin(r)*s),e.userData.spin=new A(Math.random()-.5,Math.random()-.5,Math.random()-.5).multiplyScalar(12),e.visible=!0}),Lo.forEach((e,i)=>{const r=i/Lo.length*Ne+Math.random()*.4,s=.16+Math.random()*.45;e.position.copy(t).add(new A(Math.cos(r)*s,.08+Math.random()*.18,Math.sin(r)*s)),e.scale.setScalar(.45+Math.random()*.55),e.material.opacity=.38+Math.random()*.2,e.userData.velocity=new A(Math.cos(r)*(1.4+Math.random()*2.7),.65+Math.random()*1.8,Math.sin(r)*(1.4+Math.random()*2.7)),e.visible=!0}),Fn.position.copy(t),Fn.scale.setScalar(.5),Fn.material.opacity=.62,Fn.visible=!0,Er(.34),Gx()}function cy(n){ci>1.05||(ci+=n,Do.forEach(t=>{if(!t.visible)return;const e=t.userData.velocity;e.y-=13.5*n,t.position.addScaledVector(e,n),t.rotation.x+=t.userData.spin.x*n,t.rotation.y+=t.userData.spin.y*n,t.rotation.z+=t.userData.spin.z*n;const i=Fe(t.position.x,t.position.z)+.035;t.position.y<=i&&(t.position.y=i,e.x*=.78,e.z*=.78,e.y=Math.abs(e.y)*.22),ci>.88&&(t.visible=!1)}),Lo.forEach(t=>{t.visible&&(t.position.addScaledVector(t.userData.velocity,n),t.userData.velocity.multiplyScalar(Math.exp(-2.8*n)),t.scale.addScalar(n*1.65),t.material.opacity=Math.max(0,t.material.opacity-n*.58),ci>.95&&(t.visible=!1))}),Fn.scale.setScalar(.5+ci*5.2),Fn.material.opacity=Math.max(0,.62-ci*1.05),ci>.62&&(Fn.visible=!1))}function Kt(n,t,e,i=[0,0,0],r=[1,1,1]){return t.position.set(...e),t.rotation.set(...i),t.scale.set(...r),n.add(t),t}function xf(){const n=new ie;n.name="Vanguard greatsword";const t=Me(.075,.085,.58,10,Lt.leather);t.position.y=0,n.add(t);for(let l=0;l<6;l++){const h=new It(new dl(.087,.013,5,10),Lt.leatherLight);h.rotation.x=Math.PI/2,h.position.y=-.25+l*.1,n.add(h)}const e=nn(new It(new di(.13,0),Lt.gold));e.position.y=-.38,e.scale.y=1.25,n.add(e);const i=new ie;i.position.y=.36;const r=oe(.5,.12,.16,.035,Lt.gold,2);i.add(r),[-1,1].forEach(l=>{const h=oe(.28,.09,.13,.025,Lt.gold,2);h.position.x=l*.3,h.rotation.z=l*.18,i.add(h);const u=new It(new di(.09,0),Lt.gold);u.position.set(l*.47,l*.045,0),i.add(u)}),n.add(i);const s=new ku;s.moveTo(-.13,0),s.lineTo(-.16,1.18),s.lineTo(-.1,1.48),s.lineTo(0,1.68),s.lineTo(.1,1.48),s.lineTo(.16,1.18),s.lineTo(.13,0),s.closePath();const o=new fl(s,{depth:.075,bevelEnabled:!0,bevelSegments:1,bevelSize:.028,bevelThickness:.025,curveSegments:1});o.center(),o.translate(0,1.23,-.0375);const a=nn(new It(o,Lt.silver));n.add(a);const c=oe(.035,1.45,.09,.012,Lt.armorEdge,1);return c.position.set(0,1.18,-.002),n.add(c),n}function yf(){const n=new ie;n.name="Vanguard longbow";const t=new ce({color:9264178,roughness:.72,metalness:.04}),e=new Ro(new A(0,.78,0),new A(.3,.42,.035),new A(.08,.08,0)),i=new Ro(new A(.08,-.08,0),new A(.3,-.42,.035),new A(0,-.78,0));n.add(nn(new It(new Po(e,10,.035,6,!1),t))),n.add(nn(new It(new Po(i,10,.035,6,!1),t))),Kt(n,Me(.055,.055,.25,7,Lt.leather),[.08,0,0]);const r=new we().setFromPoints([new A(0,.78,0),new A(.08,0,-.02),new A(0,-.78,0)]),s=new cl(r,new ko({color:15196106,transparent:!0,opacity:.8}));return n.add(s),n.userData.string=s,n}function Mf(){const n=new ie,t=Me(.15,.18,.82,9,Lt.leather);t.position.y=-.1,n.add(t);for(let e=0;e<5;e++){const i=new ie;Kt(i,Me(.012,.012,.82,5,Lt.leatherLight),[0,.34,0]),Kt(i,new It(new Dn(.045,.12,5),Lt.silver),[0,-.12,0],[Math.PI,0,0]),i.position.set((e-2)*.045,.25+Math.abs(e-2)*.025,e%2*.035),n.add(i)}return n}function Sf(){const n=new ie;n.name="Supply AK-47";const t=new ce({color:2435885,roughness:.34,metalness:.72}),e=new ce({color:7356711,roughness:.76,metalness:.02});Kt(n,oe(.24,.72,.18,.035,t,2),[0,.25,0]),Kt(n,Me(.045,.055,.85,8,t),[0,.98,0]),Kt(n,Me(.065,.065,.18,8,t),[0,1.48,0]),Kt(n,oe(.21,.55,.2,.04,e,2),[0,-.38,.01],[0,0,-.08]),Kt(n,oe(.18,.48,.17,.035,e,2),[.02,.66,.03],[.1,0,0]),Kt(n,oe(.145,.44,.115,.035,e,2),[.02,.01,-.16],[-.34,0,0]),Kt(n,oe(.23,.08,.2,.025,t,1),[0,.58,0]);const i=Kt(n,oe(.1,.26,.055,.018,Lt.silver,1),[-.13,.39,0]);n.userData.bolt=i,n.userData.boltRestY=i.position.y;const r=oe(.16,.48,.12,.04,t,2);r.position.set(0,.2,-.16),r.rotation.x=-.32,r.scale.y=.82,n.add(r);const s=new Re;s.name="AK-47 muzzle",s.position.set(0,1.61,0),n.add(s),n.userData.muzzle=s;const o=new ie,a=new rn({color:16765802,transparent:!0,opacity:.9,depthWrite:!1,blending:Pn}),c=new It(new Dn(.12,.34,7),a);c.position.y=.17,o.add(c);const l=new It(new di(.13,0),a.clone());return l.scale.set(1.65,1.1,1.65),l.position.y=.08,o.add(l),o.visible=!1,s.add(o),n.userData.muzzleFlash=o,n}function wf(){const n=new ie;n.name="Supply RPG";const t=new ce({color:4215619,roughness:.67,metalness:.26}),e=new ce({color:2370345,roughness:.45,metalness:.6});Kt(n,Me(.12,.12,1.68,12,t),[0,.45,0]),Kt(n,Me(.18,.13,.3,10,e),[0,1.42,0]),Kt(n,Me(.17,.14,.24,10,e),[0,-.53,0]),Kt(n,oe(.18,.46,.15,.035,e,2),[0,.12,-.2],[-.42,0,0]),Kt(n,new It(new Dn(.14,.38,10),new ce({color:6253905,roughness:.7,metalness:.14})),[0,1.73,0]);const i=new Re;return i.name="RPG muzzle",i.position.set(0,1.94,0),n.add(i),n.userData.muzzle=i,n}function Ef(n){n.userData.restPosition=n.position.clone(),n.userData.restRotation=n.rotation.clone()}function bf(n,t,e){if(!(n!=null&&n.userData.restPosition))return;n.position.copy(n.userData.restPosition),n.position.y-=t*.13,n.position.z+=t*.025,n.rotation.copy(n.userData.restRotation),n.rotation.z-=t*.055;const i=n.userData.bolt;i&&(i.position.y=n.userData.boltRestY-t*.16);const r=n.userData.muzzleFlash;if(r&&(r.visible=n.visible&&t>.18,r.visible)){const s=.82+Math.sin(e*95)*.18;r.scale.set(s,.8+t*.75,s),r.rotation.y=e*38}}const On=new Map,Wr=[],Uo=new Map,yo=[],ly=new ce({color:6123595,roughness:.78,metalness:.08}),Qh=new ce({color:13212488,roughness:.46,metalness:.42});function tu(n){Gc(n.id);const t=new ie;t.name=`Supply drop ${n.id}`;const e=oe(1.55,1.05,1.35,.1,ly,2);e.position.y=.55,t.add(e),Kt(t,oe(1.7,.16,1.47,.04,Qh,1),[0,.55,0]),Kt(t,oe(.18,1.18,1.47,.04,Qh,1),[0,.55,0]);const i=new It(new us(.12,.36,2.4,10,1,!0),new rn({color:n.weapon==="rpg"?16742973:16766045,transparent:!0,opacity:.22,depthWrite:!1,side:Ge,blending:Pn}));i.position.y=1.7,t.add(i);const r=new It(new _n(2.35,18,10,0,Ne,0,Math.PI/2),new ce({color:n.weapon==="rpg"?9127476:7560498,roughness:.9,side:Ge}));r.scale.y=.42,r.position.y=5.2,t.add(r);const s=new ko({color:13943966,transparent:!0,opacity:.7});[-1,1].forEach(o=>[-1,1].forEach(a=>{const c=new cl(new we().setFromPoints([new A(o*.58,1.05,a*.52),new A(o*1.45,4.95,a*1.3)]),s);t.add(c)})),t.position.set(n.position.x,n.position.y||48,n.position.z),ee.add(t),On.set(n.id,{...n,group:t,chute:r,groundY:Fe(n.position.x,n.position.z)})}function Gc(n){const t=On.get(n);t&&(ee.remove(t.group),On.delete(n))}function hy(){const n=Date.now();On.forEach(t=>{const e=Math.max(1,t.landedAt-t.spawnedAt),i=be((n-t.spawnedAt)/e,0,1),r=He.smootherstep(i,0,1);t.group.position.y=St(48,t.groundY,r),t.group.rotation.y+=.0025*(1-i),t.chute.visible=i<.98,t.group.children.forEach(s=>{s.isLine&&(s.visible=i<.98)}),i>=1&&(t.group.position.y=t.groundY+Math.sin(performance.now()*.003)*.025)})}function uy(n){const t=new A(n.origin.x,n.origin.y,n.origin.z),e=new A(n.target.x,n.target.y,n.target.z),i=e.clone().sub(t).normalize(),r=[t.clone(),t.clone().addScaledVector(i,.18)],s=new cl(new we().setFromPoints(r),new ko({color:16770460,transparent:!0,opacity:.94,depthWrite:!1,blending:Pn})),o=new It(new _n(.055,6,4),new rn({color:16773550,transparent:!0,opacity:.96,depthWrite:!1,blending:Pn}));o.position.copy(t),ee.add(s),ee.add(o),Wr.push({line:s,bullet:o,origin:t,target:e,direction:i,distance:t.distanceTo(e),age:0,speed:520})}function fy(n){const t=new ie,e=new ce({color:5859147,roughness:.55,metalness:.24});Kt(t,Me(.08,.1,.62,8,e),[0,0,0]),Kt(t,new It(new Dn(.1,.24,8),e),[0,.43,0]);const i=new It(new Dn(.09,.38,8),new rn({color:16747317,transparent:!0,opacity:.82,blending:Pn}));i.position.y=-.48,i.rotation.x=Math.PI,t.add(i);const r=new A(n.origin.x,n.origin.y,n.origin.z),s=new A(n.target.x,n.target.y,n.target.z);t.position.copy(r),t.quaternion.setFromUnitVectors(new A(0,1,0),s.clone().sub(r).normalize()),ee.add(t),Uo.set(`${n.id}-${n.serial}`,{group:t,origin:r,target:s,startedAt:performance.now(),speed:n.speed||65})}function dy(n){const t=new A(n.position.x,Fe(n.position.x,n.position.z)+.08,n.position.z),e={age:0,pieces:[],puffs:[],ring:null,flash:null};for(let r=0;r<84;r++){const s=new It(new hn(.11+Math.random()*.08,0),Io[r%Io.length]),o=Math.random()*Ne,a=6+Math.random()*18;s.position.copy(t).add(new A((Math.random()-.5)*.7,Math.random()*.25,(Math.random()-.5)*.7)),s.userData.velocity=new A(Math.cos(o)*a,7+Math.random()*14,Math.sin(o)*a),s.userData.spin=new A(Math.random(),Math.random(),Math.random()).multiplyScalar(15),s.castShadow=!0,ee.add(s),e.pieces.push(s)}for(let r=0;r<32;r++){const s=new It(new hn(.35+Math.random()*.3,1),new rn({color:r<7?16747330:6707270,transparent:!0,opacity:r<7?.72:.48,depthWrite:!1,blending:r<7?Pn:Ui})),o=Math.random()*Ne;s.position.copy(t).add(new A(Math.cos(o)*Math.random()*1.2,.2+Math.random()*1.1,Math.sin(o)*Math.random()*1.2)),s.userData.velocity=new A(Math.cos(o)*(3+Math.random()*10),3+Math.random()*10,Math.sin(o)*(3+Math.random()*10)),ee.add(s),e.puffs.push(s)}e.ring=new It(new Ho(.6,1.05,42),new rn({color:16756827,transparent:!0,opacity:.82,side:Ge,depthWrite:!1,blending:Pn})),e.ring.rotation.x=-Math.PI/2,e.ring.position.copy(t),ee.add(e.ring),yo.push(e);const i=Ut.position.distanceTo(t);i<56&&Er(.68*(1-i/64)),Xx(),[...Uo.entries()].forEach(([r,s])=>{s.target.distanceTo(new A(n.position.x,n.position.y,n.position.z))<2.5&&(ee.remove(s.group),Uo.delete(r))})}function py(n){Wr.forEach(t=>{t.age+=n;const e=Math.min(t.distance,t.age*t.speed),i=Math.max(0,e-4.2),r=t.origin.clone().addScaledVector(t.direction,i),s=t.origin.clone().addScaledVector(t.direction,e);t.line.geometry.setFromPoints([r,s]),t.bullet.position.copy(s);const o=t.distance-e<.01;t.line.material.opacity=o?Math.max(0,1-(t.age-t.distance/t.speed)*18):.94,t.bullet.material.opacity=t.line.material.opacity});for(let t=Wr.length-1;t>=0;t--){const e=Wr[t];e.age>e.distance/e.speed+.07&&(ee.remove(e.line),ee.remove(e.bullet),e.line.geometry.dispose(),e.line.material.dispose(),e.bullet.geometry.dispose(),e.bullet.material.dispose(),Wr.splice(t,1))}Uo.forEach(t=>{const e=t.origin.distanceTo(t.target),i=be((performance.now()-t.startedAt)/Math.max(1,e/t.speed*1e3),0,1);t.group.position.lerpVectors(t.origin,t.target,i)});for(let t=yo.length-1;t>=0;t--){const e=yo[t];e.age+=n,e.pieces.forEach(i=>{i.userData.velocity.y-=18*n,i.position.addScaledVector(i.userData.velocity,n),i.rotation.x+=i.userData.spin.x*n,i.rotation.y+=i.userData.spin.y*n;const r=Fe(i.position.x,i.position.z)+.03;i.position.y<r&&(i.position.y=r,i.userData.velocity.y*=-.2,i.userData.velocity.x*=.72,i.userData.velocity.z*=.72),i.scale.multiplyScalar(Math.exp(-.7*n))}),e.puffs.forEach(i=>{i.position.addScaledVector(i.userData.velocity,n),i.userData.velocity.multiplyScalar(Math.exp(-2.2*n)),i.scale.addScalar(n*2.4),i.material.opacity=Math.max(0,i.material.opacity-n*.48)}),e.ring.scale.setScalar(1+e.age*18.5),e.ring.material.opacity=Math.max(0,.88-e.age*1.45),e.age>1.25&&(e.pieces.forEach(i=>ee.remove(i)),e.puffs.forEach(i=>ee.remove(i)),ee.remove(e.ring),yo.splice(t,1))}}function my(){const e=[],i=[],r=[];for(let o=0;o<=11;o++){const a=o/11,c=St(.48,.68,a)*(1-Math.max(0,a-.82)*.18);for(let l=0;l<=8;l++){const h=l/8,u=a>.92?Math.cos((h-.5)*Math.PI*4)*.055:0;e.push((h-.5)*c*2,-a*2.02+u,-.05-a*.18),i.push(h,a)}}for(let o=0;o<11;o++)for(let a=0;a<8;a++){const c=o*9+a,l=c+1,h=c+8+1,u=h+1;r.push(c,h,l,l,h,u)}const s=new we;return s.setAttribute("position",new re(e,3)),s.setAttribute("uv",new re(i,2)),s.setIndex(r),s.computeVertexNormals(),s.userData.base=Float32Array.from(e),s.userData.cols=8,s}function gy(){const t=[],e=[],i=[];for(let a=0;a<=30;a++){const c=a/30,l=.48+c*3.05,h=Math.sin(c*Math.PI),u=.72+c*.04,d=u+.12+h*.43;if(t.push(Math.cos(l)*u,Math.sin(l)*u,0),t.push(Math.cos(l)*d,Math.sin(l)*d,0),e.push(c,0,c,1),a<30){const p=a*2;i.push(p,p+1,p+2,p+1,p+3,p+2)}}const r=new we;r.setAttribute("position",new re(t,3)),r.setAttribute("uv",new re(e,2)),r.setIndex(i);const s=new rn({color:15980419,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,side:Ge,blending:Pn}),o=new It(r,s);return o.position.set(0,1.72,.86),o.rotation.z=-.06,o.renderOrder=30,o.visible=!1,o.frustumCulled=!1,o}function _y(){const n=new ie,t={},e=new It(new ll(.72,32),new rn({color:1318936,transparent:!0,opacity:.18,depthWrite:!1}));e.rotation.x=-Math.PI/2,e.position.y=.018,n.add(e),t.shadowDisc=e;const i=gy();n.add(i),t.slashTrail=i;const r=new ie;r.position.y=1.44,n.add(r),t.hips=r,Kt(r,oe(.9,.42,.54,.11,Lt.leather,3),[0,0,0]);const s=Kt(r,oe(1.02,.19,.6,.05,Lt.leatherLight,2),[0,.18,0]),o=Kt(s,oe(.24,.24,.08,.035,Lt.gold,2),[0,0,.33]);Kt(o,new It(new di(.07,0),Lt.armor),[0,0,.05],[0,0,Math.PI/4]),[-1,1].forEach(V=>{Kt(r,oe(.24,.72,.12,.055,Lt.clothDark,2),[V*.33,-.47,.29],[0,0,V*.06])});const a=new ie;a.position.y=.28,r.add(a),t.torso=a;const c=Me(.52,.43,1.2,8,Lt.clothDark);c.position.y=.64,c.scale.z=.62,a.add(c);const l=oe(1.18,.88,.62,.16,Lt.armor,4);l.position.y=.77,l.scale.set(1.02,1,.92),a.add(l);const h=oe(.84,.58,.13,.1,Lt.armorEdge,3);h.position.set(0,.02,.36),l.add(h);const u=new It(new di(.15,0),Lt.gold);u.position.set(0,.88,.47),u.scale.set(.7,1.32,.3),a.add(u);const d=Me(.36,.48,.22,8,Lt.armorEdge);d.position.y=1.25,d.scale.z=.85,a.add(d);const p=new ie;p.position.y=1.42,a.add(p),t.head=p;const g=Me(.18,.21,.28,8,Lt.skin);g.position.y=-.08,p.add(g);const x=new It(new hn(.38,2),Lt.skin);x.scale.set(.88,1.12,.92),x.position.y=.29,nn(x),p.add(x);const m=new It(new hn(.39,1),Lt.hair);m.position.set(0,.53,-.025),m.scale.set(.94,.72,.93),nn(m),p.add(m),[-1,1].forEach(V=>{const B=new It(new _n(.025,8,6),Lt.eye);B.position.set(V*.108,.325,.405),B.scale.set(1.22,.55,.38),p.add(B);const H=oe(.11,.022,.022,.007,Lt.hair,1);H.position.set(V*.108,.395,.41),H.rotation.z=-V*.08,p.add(H)});const f=new It(new Dn(.025,.085,5),Lt.skin);f.position.set(0,.245,.41),f.rotation.x=Math.PI/2,p.add(f);const b=oe(.095,.014,.018,.005,Lt.hair,1);b.position.set(0,.145,.412),p.add(b);const M=my(),_=nn(new It(M,Lt.cloth),!0,!0);_.position.set(0,1.23,-.35),a.add(_),t.cape=_,[-1,1].forEach(V=>{const B=new It(new _n(.09,8,6),Lt.gold);B.position.set(V*.42,1.23,-.38),a.add(B)});function L(V){const B=new ie;B.position.set(V*.67,1.08,0),a.add(B);const H=new It(new _n(.38,12,8,0,Ne,0,Math.PI*.68),Lt.armorEdge);H.position.set(V*.13,-.03,0),H.scale.set(1.1,.66,1.04),H.rotation.z=V*-.08,nn(H),B.add(H);const ct=oe(.62,.09,.58,.035,Lt.gold,2);ct.position.set(V*.1,-.19,0),B.add(ct);const tt=Me(.19,.22,.68,8,Lt.clothDark);tt.position.y=-.37,B.add(tt);const _t=oe(.38,.42,.34,.08,Lt.armor,3);_t.position.y=-.28,B.add(_t);const Bt=new ie;Bt.position.y=-.69,B.add(Bt);const At=new It(new _n(.18,8,6),Lt.leather);Bt.add(At);const G=Me(.16,.2,.64,8,Lt.armorEdge);G.position.y=-.35,Bt.add(G);const nt=oe(.36,.38,.32,.06,Lt.armor,2);nt.position.y=-.28,Bt.add(nt);const ft=new ie;ft.position.y=-.69,Bt.add(ft),Kt(ft,oe(.27,.28,.25,.07,Lt.leather,3),[0,0,0]);const ut=[];for(let qt=0;qt<4;qt++){const Ot=Me(.035,.04,.2,6,Lt.leather);Ot.position.set((qt-1.5)*.055,-.19,.035),Ot.rotation.x=-.2,ft.add(Ot),ut.push(Ot)}const Mt=Me(.045,.05,.18,6,Lt.leather);return Mt.position.set(V*.13,-.03,.06),Mt.rotation.z=V*-.75,ft.add(Mt),{shoulder:B,elbow:Bt,hand:ft,fingers:ut,thumb:Mt}}t.rightArm=L(-1),t.leftArm=L(1),t.leftArm.shoulder.rotation.z=.09,t.rightArm.shoulder.rotation.z=-.1,t.leftArm.elbow.rotation.x=-.1,t.rightArm.shoulder.rotation.x=-.42,t.rightArm.elbow.rotation.x=-.52;const C=new ie;C.name="Right hand sword grip anchor",t.rightArm.hand.add(C),C.position.set(0,.015,.07);const P=xf();P.name="Right hand greatsword",P.position.set(0,0,0),P.rotation.set(0,0,0),P.scale.setScalar(.92),C.add(P),t.swordGripAnchor=C,t.sword=P;const D=Sf();D.scale.setScalar(.86),D.position.set(0,-.015,.055),D.rotation.set(0,0,-.015),D.visible=!1,C.add(D),Ef(D),t.ak47=D;const S=wf();S.scale.setScalar(.76),S.position.set(0,-.05,.02),S.visible=!1,C.add(S),t.rpg=S;const y=new ie;y.position.set(0,.02,.08),t.leftArm.hand.add(y);const I=yf();I.rotation.set(0,.18,-.08),I.scale.setScalar(1.12),I.visible=!1,y.add(I),t.bowGripAnchor=y,t.bow=I;const k=new ie;Kt(k,Me(.014,.014,1.08,5,Lt.leatherLight),[0,0,.08],[Math.PI/2,0,0]),Kt(k,new It(new Dn(.05,.14,5),Lt.silver),[0,0,.67],[Math.PI/2,0,0]),k.visible=!1,I.add(k),t.nockedArrow=k;const F=Mf();F.position.set(.42,.78,-.5),F.rotation.set(-.18,0,-.2),F.visible=!1,a.add(F),t.quiver=F;const q=new It(new _n(.47,12,8,0,Ne,0,Math.PI*.68),Lt.cloth);q.position.set(0,.38,-.04),q.scale.set(.98,1.12,1.03),q.visible=!1,p.add(q),t.hood=q,t.rightArm.fingers.forEach((V,B)=>{V.position.set(0,.135-B*.085,.115),V.rotation.set(0,0,Math.PI/2),V.scale.set(1,1.08,1)}),t.rightArm.thumb.position.set(-.13,.02,.095),t.rightArm.thumb.rotation.set(.18,0,.82),t.rightArm.hand.rotation.set(3.3,0,.3);function K(V){const B=new ie;B.position.set(V*.31,1.35,0),n.add(B);const H=Me(.25,.3,.76,8,Lt.clothDark);H.position.y=-.39,B.add(H);const ct=oe(.43,.54,.43,.09,Lt.armor,3);ct.position.set(0,-.31,.08),B.add(ct);const tt=new ie;tt.position.y=-.78,B.add(tt),Kt(tt,new It(new _n(.22,8,6),Lt.leather),[0,0,0]);const _t=new It(new di(.2,0),Lt.armorEdge);_t.position.set(0,0,.2),_t.scale.set(1,1.05,.55),tt.add(_t);const Bt=Me(.18,.235,.68,8,Lt.armorEdge);Bt.position.y=-.36,tt.add(Bt);const At=oe(.38,.52,.38,.07,Lt.armor,3);At.position.set(0,-.32,.08),tt.add(At);const G=new ie;return G.position.y=-.73,tt.add(G),Kt(G,oe(.43,.34,.58,.09,Lt.leather,3),[0,0,.1]),Kt(G,oe(.38,.13,.64,.05,Lt.armorEdge,2),[0,-.18,.13]),Kt(G,oe(.34,.16,.28,.05,Lt.gold,2),[0,.12,.02]),{leg:B,knee:tt,boot:G}}return t.leftLeg=K(-1),t.rightLeg=K(1),n.userData.refs=t,n.traverse(V=>{V.isMesh&&V!==e&&(V.castShadow=!0,V.receiveShadow=!0)}),n}const Ut=_y();Ut.position.set(0,Fe(0,0),0);Ut.visible=!1;ee.add(Ut);const yt=Ut.userData.refs,vy=new we,qo=new wp(vy,new Uu({color:16765555,size:.09,transparent:!0,opacity:.72,depthWrite:!1}));qo.visible=!1;qo.frustumCulled=!1;ee.add(qo);const E={joined:!1,name:"",team:null,kit:null,weapon:null,weaponAmmo:0,weaponKick:0,health:100,maxHealth:100,arrows:0,dead:!1,deathTime:0,velocity:new A,verticalVelocity:0,grounded:!0,moving:!1,sprinting:!1,stamina:100,maxStamina:100,gait:0,landing:0,attack:null,attackTime:0,attackImpact:!1,attackSerial:0,bowDrawing:!1,bowDrawStart:0,dashing:!1,dashTime:0,dashDirection:new A,respawnAt:0,cooldowns:{slash:0,heavy:0,dash:0}},os={bloods:{name:"Bloods",accent:12136259,dark:5380135},crips:{name:"Crips",accent:3500999,dark:1519203}},xy=document.querySelector("#lobby"),eu=document.querySelector("#lobby-form"),mn=document.querySelector("#lobby-status"),Xr=document.querySelector("#join-game"),yy=document.querySelector("#scoreboard"),My=document.querySelector("#player-board"),Sy=document.querySelector("#player-board-list"),wy=document.querySelector("#player-count"),Tf=document.querySelector("#roster-panel"),Ey=document.querySelector("#roster-list"),Af=document.querySelector("#winner-screen"),nu=document.querySelector("#winner-title"),by=document.querySelector("#winner-score"),Ty=document.querySelector("#rematch-button"),Rf=document.querySelector("#quick-name"),Yo=document.querySelector("#special-name"),Ay=document.querySelector("#ammo-counter"),Ry=document.querySelector("#ammo-weapon"),Cy=document.querySelector("#ammo-value"),Py=document.querySelector("#ammo-unit"),fr=document.querySelector("#bow-crosshair"),Dy=fr.querySelector(".aim-hint"),Ly=document.querySelector("#respawn-hint"),iu=document.querySelector("#supply-status"),Wc=document.querySelector("#supply-label"),Xc=document.querySelector("#supply-timer"),qc=document.querySelector("#supply-message");let Oe=null,No=Date.now()+2e4;document.body.classList.add("in-lobby");function Ko(){document.querySelector("#stamina-fill").style.width=`${E.maxStamina?E.stamina/E.maxStamina*100:0}%`,document.querySelector("#stamina-value").textContent=Math.round(E.stamina)}function Iy(n){E.name=n.name,E.team=n.team,E.kit=n.kit,E.weapon=n.weapon==="ak47"||n.weapon==="rpg"?n.weapon:null,E.weaponAmmo=Number.isFinite(Number(n.weaponAmmo))?Number(n.weaponAmmo):0,E.maxHealth=n.maxHealth||(n.kit==="sword"?120:85),E.maxStamina=n.kit==="sword"?150:100,E.stamina=E.maxStamina,Ko(),E.arrows=n.arrows||0;const t=os[E.team]||os.bloods;Lt.cloth.color.setHex(t.accent),Lt.clothDark.color.setHex(t.dark),yt.sword.visible=E.kit==="sword",yt.bow.visible=E.kit==="bow",yt.quiver.visible=E.kit==="bow",yt.hood.visible=E.kit==="bow",Rf.textContent=E.kit==="bow"?"DRAW / FIRE":"QUICK SLASH",Yo.textContent=E.kit==="bow"?"ARROWS ∞":"GROUND STRIKE",ti.slash.duration=E.kit==="bow"?1:.5,ti.heavy.slot.classList.toggle("ammo-slot",E.kit==="bow"),ti.dash.slot.hidden=E.kit!=="sword",fr.hidden=E.kit!=="bow",xr(E.weapon,E.weaponAmmo)}function qr(n){var i,r;if(!n)return;Oe=n,Number.isFinite(Number(n.nextSupplyDropAt))&&(No=Number(n.nextSupplyDropAt)),document.querySelector("#bloods-score").textContent=((i=n.scores)==null?void 0:i.bloods)??0,document.querySelector("#crips-score").textContent=((r=n.scores)==null?void 0:r.crips)??0;const t=Math.max(0,Math.ceil((n.remaining??n.duration??0)/1e3));document.querySelector("#match-timer").textContent=`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`;const e=[...n.roster||[]].sort((s,o)=>o.kills-s.kills||s.deaths-o.deaths);Ey.replaceChildren(...e.map(s=>{const o=document.createElement("div");o.className=`roster-row ${s.team}`;const a=document.createElement("span");a.textContent=`${s.name} · ${s.weapon||s.kit}`;const c=document.createElement("span");c.textContent=String(s.kills);const l=document.createElement("span");return l.textContent=String(s.deaths),o.append(a,c,l),o})),wy.textContent=String(e.length),Sy.replaceChildren(...e.map(s=>{const o=document.createElement("div");o.className=`player-board-row ${s.team}`;const a=document.createElement("span");a.className="player-board-dot";const c=document.createElement("span");c.className="player-board-name",c.textContent=s.name;const l=document.createElement("span");return l.className="player-board-kit",l.textContent=s.weapon||s.kit,o.append(a,c,l),o}))}function Uy(){if(!E.joined)return;iu.hidden=!1;const n=On.size>0;if(iu.classList.toggle("active",n),n){const e=[...On.values()].some(i=>Date.now()>=i.landedAt);Wc.textContent=e?"SUPPLY DROP LANDED":"SUPPLY DROP INBOUND",Xc.textContent=e?"PICK IT UP":"DESCENDING",qc.textContent="Move onto the glowing crate";return}const t=Math.max(0,Math.ceil((No-Date.now())/1e3));Wc.textContent="NEXT SUPPLY DROP",Xc.textContent=`0:${String(t).padStart(2,"0")}`,qc.textContent="60% AK-47 · 40% RPG"}eu.addEventListener("submit",n=>{if(n.preventDefault(),!(gt!=null&&gt.connected))return;const t=new FormData(eu),e=String(t.get("displayName")||"").trim(),i=t.get("team"),r=t.get("kit");if(!e||!i||!r){mn.textContent="Enter a name, then choose a team and kit.",mn.classList.add("error");return}Xr.disabled=!0,mn.classList.remove("error"),mn.textContent="Joining the shared match…",localStorage.setItem("astralDisplayName",e),gt.emit("joinGame",{name:e,team:i,kit:r})});document.querySelector("#display-name").value=localStorage.getItem("astralDisplayName")||"";Ty.addEventListener("click",()=>gt==null?void 0:gt.emit("restartMatch"));const Ny=document.querySelector("#health-fill"),Fy=document.querySelector(".health .meter-value"),Cf=document.querySelector("#death-screen"),as=document.querySelector("#respawn-button");function Ml(n){E.health=be(Number(n)||0,0,E.maxHealth),Ny.style.width=`${E.maxHealth?E.health/E.maxHealth*100:0}%`,Fy.textContent=Number.isInteger(E.health)?String(E.health):E.health.toFixed(1)}function Pf(){var n;E.dead||(E.dead=!0,E.deathTime=0,E.velocity.set(0,0,0),E.verticalVelocity=0,E.moving=!1,E.sprinting=!1,E.bowDrawing=!1,E.dashing=!1,De.clear(),Cf.hidden=!1,as.disabled=!0,(n=document.exitPointerLock)==null||n.call(document))}function Df(n={}){if(Ml(n.health??100),E.dead=!1,E.deathTime=0,E.velocity.set(0,0,0),E.verticalVelocity=0,E.grounded=!0,E.stamina=E.maxStamina,Ko(),E.attack=null,E.bowDrawing=!1,E.dashing=!1,E.respawnAt=0,E.cooldowns.slash=0,E.cooldowns.heavy=0,E.cooldowns.dash=0,Ut.rotation.x=0,n.position){const t=n.position.x||0,e=n.position.z||0;Ut.position.set(t,Fe(t,e),e)}Number.isFinite(Number(n.arrows))&&(E.arrows=Number(n.arrows)),xr(n.weapon||null,n.weaponAmmo??0),E.kit==="bow"&&(Yo.textContent="ARROWS ∞"),Cf.hidden=!0,as.disabled=!0}function Oy(){!E.dead||as.disabled||(as.disabled=!0,gt!=null&&gt.connected?gt.emit("respawn"):Df({health:100,position:{x:0,y:Fe(0,0),z:0}}))}as.addEventListener("click",Oy);const ti={slash:{slot:document.querySelector("#slot-quick"),time:document.querySelector("#quick-cooldown"),fill:document.querySelector("#quick-cooldown-fill"),duration:.5},heavy:{slot:document.querySelector("#slot-special"),time:document.querySelector("#special-cooldown"),fill:document.querySelector("#special-cooldown-fill"),duration:7},dash:{slot:document.querySelector("#slot-dash"),time:document.querySelector("#dash-cooldown"),fill:document.querySelector("#dash-cooldown-fill"),duration:2}};function xr(n,t=0){const e=n==="ak47"||n==="rpg"?n:null,i=E.weapon!==e;E.weapon=e,E.weaponAmmo=E.weapon==="rpg"?be(Math.floor(Number(t)||0),0,8):E.weapon==="ak47"?be(Math.floor(Number(t)||0),0,80):0,E.weapon!=="ak47"&&(vs=!1),E.bowDrawing=!1,i&&(E.cooldowns.slash=0);const r=!!E.weapon;yt.sword.visible=!r&&E.kit==="sword",yt.bow.visible=!r&&E.kit==="bow",yt.quiver.visible=!r&&E.kit==="bow",yt.hood.visible=E.kit==="bow",yt.ak47.visible=E.weapon==="ak47",yt.rpg.visible=E.weapon==="rpg",Rf.textContent=E.weapon==="ak47"?`AK-47 · ${E.weaponAmmo}`:E.weapon==="rpg"?`RPG · ${E.weaponAmmo}`:E.kit==="bow"?"DRAW / FIRE":"QUICK SLASH",Ay.hidden=!r,r&&(Ry.textContent=E.weapon==="ak47"?"AK-47":"RPG",Cy.textContent=String(E.weaponAmmo),Py.textContent=E.weapon==="ak47"?"ROUNDS":"ROCKETS"),Yo.textContent=r?"SUPPLY WEAPON":E.kit==="bow"?"ARROWS ∞":"GROUND STRIKE",ti.slash.duration=E.weapon==="ak47"?.11:E.weapon==="rpg"?2.5:E.kit==="bow"?1:.5,ti.heavy.slot.hidden=r,ti.dash.slot.hidden=E.kit!=="sword",fr.hidden=!(E.kit==="bow"||r),Dy.textContent=E.weapon==="ak47"?"LMB · FIRE AK-47":E.weapon==="rpg"?"LMB · FIRE RPG":"HOLD LMB · RELEASE TO FIRE",Te.dataset.weapon=E.weapon||"starter",Te.dataset.weaponAmmo=String(E.weaponAmmo)}const De=new Set;let Yc=!1;window.addEventListener("keydown",n=>{if(Vi(),n.code==="Tab"&&E.joined){n.preventDefault(),Tf.hidden=!1;return}if(E.joined){if(E.dead){n.preventDefault();return}De.add(n.code),["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(n.code)&&n.preventDefault(),n.code==="KeyY"&&!n.repeat&&(Yc=!Yc),E.weapon&&n.code==="Digit1"&&!n.repeat?Sl():E.kit==="sword"&&n.code==="Digit1"&&!n.repeat&&cs("slash"),!E.weapon&&E.kit==="sword"&&n.code==="Digit2"&&!n.repeat&&cs("heavy"),E.kit==="sword"&&n.code==="KeyQ"&&!n.repeat&&By(),n.code==="Space"&&E.grounded&&(E.verticalVelocity=7.4,E.grounded=!1)}});window.addEventListener("keyup",n=>{De.delete(n.code),n.code==="Tab"&&(Tf.hidden=!0)});let Ni=.28,Jn=.18,Fo=8.55,hi=null,vs=!1;function Kc(){var n;if(!(document.pointerLockElement===Le.domElement||!Le.domElement.requestPointerLock))try{const t=Le.domElement.requestPointerLock();(n=t==null?void 0:t.catch)==null||n.call(t,()=>{})}catch{}}Le.domElement.addEventListener("pointerdown",n=>{Vi(),!(!E.joined||E.dead||Oe!=null&&Oe.ended)&&(hi={x:n.clientX,y:n.clientY},n.button===0?(Kc(),E.weapon?(vs=E.weapon==="ak47",Sl()):E.kit==="bow"?!E.bowDrawing&&E.cooldowns.slash<=0&&(E.bowDrawing=!0,E.bowDrawStart=performance.now()):cs("slash")):n.button===2&&(n.preventDefault(),n.stopPropagation(),Kc(),!E.weapon&&E.kit==="sword"&&cs("heavy")))});window.addEventListener("pointerup",n=>{n.button===0&&(vs=!1),n.button===0&&E.bowDrawing&&zy()});Le.domElement.addEventListener("pointermove",n=>{const t=document.pointerLockElement===Le.domElement;if(!t&&!hi){hi={x:n.clientX,y:n.clientY};return}const e=t?n.movementX:n.clientX-hi.x,i=t?n.movementY:n.clientY-hi.y;Ni-=be(e,-80,80)*.0034,Jn=be(Jn+be(i,-80,80)*.0028,-1.48,1.48),hi={x:n.clientX,y:n.clientY}});Le.domElement.addEventListener("pointerleave",()=>{hi=null});window.addEventListener("blur",()=>{vs=!1});document.addEventListener("pointerlockchange",()=>{hi=null});Le.domElement.addEventListener("contextmenu",n=>{n.preventDefault(),n.stopPropagation(),Kc(),!E.weapon&&E.kit==="sword"&&cs("heavy")});Le.domElement.addEventListener("auxclick",n=>n.preventDefault());Le.domElement.addEventListener("wheel",n=>{Fo=be(Fo+Math.sign(n.deltaY)*.65,4.8,12.5)},{passive:!0});let Jr=0;function Er(n){Jr=Math.max(Jr,n)}function cs(n){return!E.joined||E.weapon||E.kit!=="sword"||E.dead||E.attack||!E.grounded||E.cooldowns[n]>0||Oe!=null&&Oe.ended?!1:(E.attack=n,E.attackTime=0,E.attackImpact=!1,E.attackSerial+=1,E.cooldowns[n]=ti[n].duration,gt==null||gt.emit("playerAttack",{type:n,serial:E.attackSerial}),n==="slash"&&setTimeout(()=>{Er(.11),Hx()},55),!0)}function By(){if(!E.joined||E.kit!=="sword"||E.dead||E.attack||E.dashing||!E.grounded||E.cooldowns.dash>0||E.stamina<5||Oe!=null&&Oe.ended)return!1;const n=(De.has("KeyD")||De.has("ArrowRight")?1:0)-(De.has("KeyA")||De.has("ArrowLeft")?1:0),t=(De.has("KeyW")||De.has("ArrowUp")?1:0)-(De.has("KeyS")||De.has("ArrowDown")?1:0),e=new A(Math.sin(Ni),0,Math.cos(Ni)),i=new A(-e.z,0,e.x);return E.dashDirection.copy(e).multiplyScalar(t||(n?0:1)).addScaledVector(i,n).normalize(),E.dashing=!0,E.dashTime=.27,E.cooldowns.dash=ti.dash.duration,E.stamina=Math.max(0,E.stamina-5),Ko(),Te.dataset.staminaAfterDash=E.stamina.toFixed(1),Er(.13),Te.dataset.lastAction="dash",!0}function zy(){if(!E.bowDrawing||E.kit!=="bow"||E.dead||E.cooldowns.slash>0)return;const n=be((performance.now()-E.bowDrawStart)/1150,.15,1);E.bowDrawing=!1,E.cooldowns.slash=1,E.attack="bow",E.attackTime=0,E.attackSerial+=1;const t=ky(n);gt==null||gt.emit("playerShoot",{strength:n,serial:E.attackSerial,origin:{x:t.origin.x,y:t.origin.y,z:t.origin.z},direction:{x:t.direction.x,y:t.direction.y,z:t.direction.z}})}const Oa=new A;function ky(n){const t=70+n*35,e=220;return je.getWorldDirection(Oa).normalize(),{origin:je.position.clone().addScaledVector(Oa,1.15),direction:Oa.clone(),speed:t,maxRange:e}}const Ba=new Ku,no=[],io=new A,Vy=new A,ro=new A;function Sl(){var c;if(!E.weapon||E.dead||E.cooldowns.slash>0||Oe!=null&&Oe.ended)return!1;if(E.weaponAmmo<=0)return xr(null,0),!1;const n=E.weapon,t=n==="rpg"?240:260;je.getWorldDirection(io).normalize();const e=je.position.clone().addScaledVector(io,1.15);no.length=0,no.push(...gs),qe.forEach(l=>{!l.dead&&l.team!==E.team&&no.push(l.group)}),Ba.set(e,io),Ba.far=t;const i=Ba.intersectObjects(no,!0)[0],r=((c=i==null?void 0:i.point)==null?void 0:c.clone())||e.clone().addScaledVector(io,t);Ut.updateMatrixWorld(!0);const s=n==="ak47"?yt.ak47.userData.muzzle:yt.rpg.userData.muzzle,o=(s==null?void 0:s.getWorldPosition(Vy))||e;ro.copy(r).sub(o).normalize(),E.cooldowns.slash=n==="rpg"?2.5:.11,E.attackSerial+=1,E.weaponKick=1,gt==null||gt.emit("weaponFire",{weapon:n,serial:E.attackSerial,origin:{x:o.x,y:o.y,z:o.z},direction:{x:ro.x,y:ro.y,z:ro.z},target:{x:r.x,y:r.y,z:r.z}}),Er(n==="rpg"?.23:.055),Wx(n);const a=Math.max(0,E.weaponAmmo-1);return xr(a>0?n:null,a),!0}function Hy(){const n=E.joined&&(E.kit==="bow"||E.weapon)&&!E.dead&&!(Oe!=null&&Oe.ended);fr.hidden=!n;const t=E.bowDrawing?be((performance.now()-E.bowDrawStart)/1150,0,1):0;fr.classList.toggle("drawing",E.bowDrawing),fr.style.setProperty("--draw",t.toFixed(3)),Te.dataset.aimStrength=t.toFixed(2),yt.nockedArrow.visible=n&&!E.weapon&&E.bowDrawing,yt.nockedArrow.position.z=-.34*t,yt.bow.userData.string.geometry.setFromPoints([new A(0,.78,0),new A(.08,0,-.42*t-.02),new A(0,-.78,0)]),qo.visible=!1}function Gy(n){Object.entries(ti).forEach(([t,e])=>{E.cooldowns[t]=Math.max(0,E.cooldowns[t]-n);const i=E.cooldowns[t],r=i>.01;e.slot.classList.toggle("cooling",r),e.slot.classList.toggle("ready",!r),e.fill.style.transform=`scaleY(${i/e.duration})`,e.time.textContent=r?i>=1?Math.ceil(i):i.toFixed(1):""})}function Ht(n,t,e,i){return St(n,t,1-Math.exp(-e*i))}function Wy(n,t,e,i){let r=(t-n+Math.PI)%Ne-Math.PI;return r<-Math.PI&&(r+=Ne),n+r*(1-Math.exp(-14*i))}const qe=new Map;let gt=null,za=0;function Xy(n,t,e){const i=document.createElement("div");i.className="remote-health-tag",i.dataset.playerId=n;const r=document.createElement("span");r.className=`remote-player-name ${e}`,r.textContent=t;const s=document.createElement("span");s.className="remote-health-value",s.textContent="100 HP";const o=document.createElement("span");o.className="remote-health-track";const a=document.createElement("span");return a.className="remote-health-fill",o.append(a),i.append(r,s,o),document.body.appendChild(i),{element:i,value:s,fill:a}}function $o(n,t){n.health=be(Number(t)||0,0,n.maxHealth||100),n.dead=n.health<=0;const e=n.health/(n.maxHealth||100);n.healthDisplay.fill.style.width=`${e*100}%`,n.healthDisplay.value.textContent=`${Number.isInteger(n.health)?n.health:n.health.toFixed(1)} HP`}function qy(n){var I;const{id:t,name:e="Vanguard",team:i="bloods",kit:r="sword"}=n,s=new ie;s.name=`Remote player ${t}`;const o=new Qt(((I=os[i])==null?void 0:I.accent)||os.bloods.accent),a=new ce({color:o,roughness:.78}),c=new ce({color:o.clone().multiplyScalar(.42),roughness:.86}),l=new ce({color:6320506,roughness:.38,metalness:.5}),h=new ce({color:13803640,roughness:.74}),u=new ie;s.add(u),Kt(u,Me(.43,.36,1.12,8,a),[0,2.22,0],[0,0,0],[1,1,.72]),Kt(u,oe(.9,.55,.52,.11,l,3),[0,2.42,.02]),Kt(u,oe(.86,.16,.5,.04,Lt.leather,2),[0,1.7,0]),Kt(u,new It(new hn(.36,2),h),[0,3.24,.02]).scale.set(.9,1.08,.9),Kt(u,new It(new hn(.36,1),Lt.hair),[0,3.46,-.01],[0,0,0],[.92,.45,.9]);function p(k){const F=new ie;F.position.set(k*.58,2.68,0),s.add(F),Kt(F,Me(.15,.13,.88,7,c),[0,-.4,0]),Kt(F,new It(new _n(.24,8,6),l),[0,-.02,0],[0,0,0],[1.15,.72,1]);const q=new ie;return q.position.y=-.9,F.add(q),Kt(q,oe(.22,.24,.22,.055,Lt.leather,2),[0,0,0]),{pivot:F,hand:q}}const g=p(-1),x=p(1);g.pivot.rotation.x=-.42,g.pivot.rotation.z=-.16,x.pivot.rotation.x=-.08,x.pivot.rotation.z=.1,g.hand.rotation.set(3.3,0,.3);const m=xf();m.scale.setScalar(.76),m.position.set(0,.01,.055),m.visible=r==="sword"&&!n.weapon,g.hand.add(m);const f=yf();f.scale.setScalar(.9),f.rotation.z=-.08,f.visible=r==="bow"&&!n.weapon,x.hand.add(f);const b=Mf();b.position.set(.38,2.35,-.35),b.rotation.z=-.18,b.visible=r==="bow"&&!n.weapon,s.add(b);const M=Sf();M.scale.setScalar(.76),M.position.set(0,-.015,.05),M.rotation.set(0,0,-.015),M.visible=n.weapon==="ak47",g.hand.add(M),Ef(M);const _=wf();_.scale.setScalar(.68),_.visible=n.weapon==="rpg",g.hand.add(_);function L(k){const F=new ie;return F.position.set(k*.23,1.42,0),s.add(F),Kt(F,Me(.2,.17,.96,7,c),[0,-.44,0]),Kt(F,oe(.34,.34,.46,.07,l,2),[0,-.92,.08]),F}const C=L(-1),P=L(1),D=Xy(t,e,i),S=new It(new hn(.92,1),new rn({color:16722731,transparent:!0,opacity:0,depthWrite:!1,side:Ye,blending:Pn}));S.position.y=2.05,S.scale.set(1,1.85,.78),S.visible=!1,s.add(S),s.traverse(k=>{k.isMesh&&(k.castShadow=!0,k.receiveShadow=!0)});const y={id:t,name:e,team:i,kit:r,weapon:n.weapon||null,weaponAmmo:Number(n.weaponAmmo)||0,group:s,torso:u,rightArm:g,remoteSword:m,remoteBow:f,remoteQuiver:b,remoteAK47:M,remoteRPG:_,leftArm:x,leftLeg:C,rightLeg:P,targetPosition:new A,targetRotation:0,moving:!1,sprinting:!1,dashing:!1,grounded:!0,verticalVelocity:0,gait:0,attack:null,attackTime:0,attackSerial:0,health:n.health??n.maxHealth??100,maxHealth:n.maxHealth??(r==="sword"?120:85),healthDisplay:D,damageAura:S,damageFlash:0,weaponKick:0,dead:!1};return $o(y,n.health??y.maxHealth),y}function Oo(n,t,e=0){n&&(n.weapon=t==="ak47"||t==="rpg"?t:null,n.weaponAmmo=n.weapon&&Number(e)||0,n.remoteSword.visible=!n.weapon&&n.kit==="sword",n.remoteBow.visible=!n.weapon&&n.kit==="bow",n.remoteQuiver.visible=!n.weapon&&n.kit==="bow",n.remoteAK47.visible=n.weapon==="ak47",n.remoteRPG.visible=n.weapon==="rpg")}function ru(n){const t=qe.get(n);t&&(ee.remove(t.group),t.healthDisplay.element.remove(),qe.delete(n),Te.dataset.remotePlayers=String(qe.size))}function ka(n){var e,i,r,s,o,a;if(!(n!=null&&n.id)||n.id===(gt==null?void 0:gt.id))return;let t=qe.get(n.id);t||(t=qy(n),qe.set(n.id,t),ee.add(t.group),t.group.position.set(((e=n.position)==null?void 0:e.x)||0,((i=n.position)==null?void 0:i.y)||0,((r=n.position)==null?void 0:r.z)||0)),t.targetPosition.set(((s=n.position)==null?void 0:s.x)||0,((o=n.position)==null?void 0:o.y)||0,((a=n.position)==null?void 0:a.z)||0),t.targetRotation=n.rotation||0,t.moving=!!n.moving,t.sprinting=!!n.sprinting,t.dashing=!!n.dashing,t.grounded=n.grounded!==!1,t.verticalVelocity=Number(n.verticalVelocity)||0,Object.prototype.hasOwnProperty.call(n,"weapon")&&Oo(t,n.weapon,n.weaponAmmo),Number.isFinite(Number(n.maxHealth))&&(t.maxHealth=Number(n.maxHealth)),Number.isFinite(Number(n.health))&&$o(t,n.health),n.attack&&n.attackSerial>t.attackSerial&&(t.attackSerial=n.attackSerial,t.attack=n.attack,t.attackTime=0),Te.dataset.remotePlayers=String(qe.size)}function Yy(n){if(!(n!=null&&n.targetId))return;n.targetId===(gt==null?void 0:gt.id)&&(Number.isFinite(Number(n.maxHealth))&&(E.maxHealth=Number(n.maxHealth)),Ml(n.health),E.health<=0&&Pf());const t=qe.get(n.targetId);t&&($o(t,n.health),t.damageFlash=.2)}function Ky(n){var e,i,r;if(!(n!=null&&n.id))return;if(n.id===(gt==null?void 0:gt.id)){Df(n);return}const t=qe.get(n.id);t&&(Number.isFinite(Number(n.maxHealth))&&(t.maxHealth=Number(n.maxHealth)),t.targetPosition.set(((e=n.position)==null?void 0:e.x)||0,((i=n.position)==null?void 0:i.y)||0,((r=n.position)==null?void 0:r.z)||0),t.group.position.copy(t.targetPosition),t.group.rotation.x=0,t.damageFlash=0,$o(t,n.health??100),Oo(t,n.weapon||null))}function Lf(n){const t=qe.get(n==null?void 0:n.id);!t||!(n!=null&&n.type)||n.serial<=t.attackSerial||(t.attackSerial=n.serial,t.attack=n.type,t.attackTime=0)}const Mo=[],$y=new A(0,1,0);function Zy(n){if(!(n!=null&&n.origin)||!(n!=null&&n.direction))return;const t=new ie;Kt(t,Me(.018,.018,.78,5,Lt.leatherLight),[0,0,0]),Kt(t,new It(new Dn(.055,.15,5),Lt.silver),[0,.46,0]),t.position.set(n.origin.x||0,n.origin.y||0,n.origin.z||0);const i=new A(n.direction.x||0,n.direction.y||0,n.direction.z||1).normalize().multiplyScalar(n.speed||25);ee.add(t),Mo.push({group:t,velocity:i,age:0}),n.id===(gt==null?void 0:gt.id)?(E.arrows=Number(n.arrows)||0,Yo.textContent="ARROWS ∞"):Lf({id:n.id,type:"bow",serial:n.serial})}function Jy(n){for(let t=Mo.length-1;t>=0;t--){const e=Mo[t];e.age+=n,e.group.position.addScaledVector(e.velocity,n),e.group.quaternion.setFromUnitVectors($y,e.velocity.clone().normalize());const i=Fe(e.group.position.x,e.group.position.z)+.08;(e.age>3.2||e.group.position.y<=i)&&(ee.remove(e.group),Mo.splice(t,1))}}function jy(n){if(!(n!=null&&n.id))return;n.id===(gt==null?void 0:gt.id)&&(E.respawnAt=Number(n.respawnAt)||Date.now()+3e3,Pf());const t=qe.get(n.id);t&&(t.dead=!0)}function Va(n){var e,i,r,s,o;qr(n);const t=n.winner;nu.textContent=t==="draw"?"DRAW":`${((i=(e=os[t])==null?void 0:e.name)==null?void 0:i.toUpperCase())||"MATCH"} WIN`,nu.style.color=t==="bloods"?"#ff6a74":t==="crips"?"#6f9dff":"#f3e6c9",by.textContent=`${((r=n.scores)==null?void 0:r.bloods)??0} — ${((s=n.scores)==null?void 0:s.crips)??0}`,Af.hidden=!1,(o=document.exitPointerLock)==null||o.call(document)}const bi=new A,Qy=new A(0,4.18,0);function tM(n){qe.forEach(t=>{t.group.position.lerp(t.targetPosition,1-Math.exp(-12*n)),t.group.rotation.y=Wy(t.group.rotation.y,t.targetRotation,14,n),t.group.rotation.x=Ht(t.group.rotation.x,t.dead?1.48:0,t.dead?5.8:13,n),bi.copy(t.group.position).add(Qy).project(je);const e=!t.dead&&bi.z>-1&&bi.z<1&&Math.abs(bi.x)<1.08&&Math.abs(bi.y)<1.08;if(t.healthDisplay.element.hidden=!e,e){const g=(bi.x*.5+.5)*window.innerWidth,x=(-bi.y*.5+.5)*window.innerHeight;t.healthDisplay.element.style.transform=`translate(${g}px, ${x}px) translate(-50%, -100%)`}t.damageFlash=Math.max(0,t.damageFlash-n),t.damageAura.visible=t.damageFlash>0,t.damageAura.material.opacity=t.damageFlash>0?.3*(t.damageFlash/.2):0;const i=t.sprinting?12:8;t.moving&&(t.gait+=n*i);const r=t.moving?Math.sin(t.gait):0;let s=r*(t.sprinting?.68:.55),o=-r*(t.sprinting?.68:.55),a=0;if(!t.grounded){const g=t.verticalVelocity>0;s=g?-.42:.2,o=g?.2:-.18,a=g?-.07:.06}t.dashing&&(s=-.3,o=.42,a=-.38);let c=r*.16-.42,l=-.16,h=3.3,u=.3,d=0;const p=t.dashing?.48:-r*.34-.08;if(t.leftArm.pivot.rotation.x=Ht(t.leftArm.pivot.rotation.x,p,13,n),t.dashing&&(c=.28,l=-.42,h=3.08,u=.7),t.weaponKick=Ht(t.weaponKick,0,16,n),t.weapon){const g=t.moving?Math.sin(t.gait*2)*.025:0;c=-1.14+g-t.weaponKick*.07,l=-.22,h=3.57-t.weaponKick*.1,u=.06-t.weaponKick*.035,d=-.08,t.leftArm.pivot.rotation.x=Ht(t.leftArm.pivot.rotation.x,-1.18+g,18,n)}if(t.attack){t.attackTime+=n;const g=t.attack==="heavy",x=t.attack==="bow",m=g?.96:x?.34:.46,f=be(t.attackTime/m,0,1);if(x){const b=Math.sin(f*Math.PI);c=-1.12+b*.5,l=-.52+b*.4,t.leftArm.pivot.rotation.x=Ht(t.leftArm.pivot.rotation.x,-1.28+b*.12,25,n),d=-.08+b*.12}else if(g){const b=He.smootherstep(f,0,.36),M=He.smootherstep(f,.36,.58),_=He.smootherstep(f,.78,1),L=b*(1-M),C=M*(1-_);o=-.66*L+.2*C,s=-.04*C,a=M*(1-_)*.42-b*(1-M)*.12,c=St(St(-.42,-1.42,b),-1.02,M),c=St(c,-.42,_),l=St(St(-.16,.22,b),.04,M),l=St(l,-.16,_),h=St(St(3.3,2.25,b),4.25,M),h=St(h,3.3,_),u=St(St(.3,-.12,b),-.06,M),u=St(u,.3,_)}else{const b=He.smootherstep(f,0,.23),M=He.smootherstep(f,.23,.57),_=He.smootherstep(f,.18,.49),L=He.smootherstep(f,.6,1);c=St(St(-.42,-.72,b),-1.08,M),c=St(c,-.42,L),l=St(St(-.16,-.78,b),.98,M),l=St(l,-.16,L),h=St(St(3.3,2.1,b),1.35,_),h=St(h,3.3,L),u=St(St(.3,.72,b),-.55,_),u=St(u,.3,L),d=St(St(0,.22,b),-.34,M)*(1-L)}f>=1&&(t.attack=null)}t.leftLeg.rotation.x=Ht(t.leftLeg.rotation.x,s,18,n),t.rightLeg.rotation.x=Ht(t.rightLeg.rotation.x,o,18,n),t.rightArm.pivot.rotation.x=Ht(t.rightArm.pivot.rotation.x,c,25,n),t.rightArm.pivot.rotation.z=Ht(t.rightArm.pivot.rotation.z,l,25,n),t.rightArm.hand.rotation.x=Ht(t.rightArm.hand.rotation.x,h,34,n),t.rightArm.hand.rotation.z=Ht(t.rightArm.hand.rotation.z,u,34,n),t.torso.rotation.y=Ht(t.torso.rotation.y,d,20,n),t.torso.rotation.x=Ht(t.torso.rotation.x,a,20,n),bf(t.remoteAK47,t.weapon==="ak47"?t.weaponKick:0,performance.now()*.001)})}function eM(){return window.location.port&&window.location.port!=="3000"?`${window.location.protocol}//${window.location.hostname}:3000`:window.location.origin}function nM(){var t,e;(t=window.__astralSocket)==null||t.disconnect();const n=sessionStorage.getItem("astralClientKey")||((e=crypto.randomUUID)==null?void 0:e.call(crypto))||`${Date.now()}-${Math.random()}`;sessionStorage.setItem("astralClientKey",n),gt=xo(eM(),{auth:{clientKey:n},transports:["websocket","polling"],timeout:2500,closeOnBeforeunload:!0,reconnectionDelay:1e3,reconnectionDelayMax:5e3}),window.__astralSocket=gt,Te.dataset.connection="connecting",Te.dataset.remotePlayers="0",gt.on("connect",()=>{Te.dataset.connection="online",Te.dataset.playerId=gt.id,Xr.disabled=!1,mn.textContent="Connected. Choose your side and kit.",mn.classList.remove("error"),E.joined&&gt.emit("joinGame",{name:E.name,team:E.team,kit:E.kit})}),gt.on("welcome",({id:i,match:r})=>{Te.dataset.playerId=i,r!=null&&r.ended?Va(r):qr(r)}),gt.on("joinAccepted",({player:i,match:r})=>{var a,c;Iy(i),E.joined=!0,E.dead=!1;const s=Number((a=i.position)==null?void 0:a.x)||0,o=Number((c=i.position)==null?void 0:c.z)||0;Ut.position.set(s,Fe(s,o),o),Ut.visible=!0,Ml(i.health),r!=null&&r.ended?Va(r):qr(r),xy.hidden=!0,yy.hidden=!1,My.hidden=!1,document.body.classList.remove("in-lobby"),Te.dataset.joined="true"}),gt.on("joinRejected",({message:i})=>{Xr.disabled=!1,mn.textContent=i||"Unable to join.",mn.classList.add("error")}),gt.on("worldSnapshot",i=>i.forEach(ka)),gt.on("supplyDropSnapshot",i=>{On.forEach(r=>ee.remove(r.group)),On.clear(),(i||[]).forEach(tu)}),gt.on("supplyDropSpawned",i=>{tu(i),No=Number(i.spawnedAt)+2e4,qc.textContent=`${i.weapon==="rpg"?"RPG":"AK-47"} inbound`}),gt.on("supplyDropPicked",i=>{Gc(i.dropId),i.playerId===gt.id?xr(i.weapon,i.ammo):Oo(qe.get(i.playerId),i.weapon,i.ammo),Wc.textContent=i.playerId===gt.id?"SUPPLY WEAPON EQUIPPED":"SUPPLY DROP CLAIMED",Xc.textContent=i.weapon==="rpg"?"RPG":"AK-47"}),gt.on("supplyDropExpired",({dropId:i})=>Gc(i)),gt.on("supplyDropReset",i=>{On.forEach(r=>ee.remove(r.group)),On.clear(),No=Number(i==null?void 0:i.nextSupplyDropAt)||Date.now()+2e4}),gt.on("playerWeaponChanged",i=>{i.id===gt.id?xr(i.weapon,i.ammo):Oo(qe.get(i.id),i.weapon,i.ammo)}),gt.on("playerJoined",ka),gt.on("playerState",ka),gt.on("playerAttack",Lf),gt.on("playerShoot",Zy),gt.on("weaponFired",i=>{const r=qe.get(i.id);r&&i.weapon==="ak47"&&(r.weaponKick=1),i.weapon==="rpg"?fy(i):uy(i)}),gt.on("rpgExploded",dy),gt.on("playerDamaged",Yy),gt.on("playerDied",jy),gt.on("playerRespawned",Ky),gt.on("matchState",qr),gt.on("matchEnded",Va),gt.on("matchRestarted",i=>{qr(i),Af.hidden=!0}),gt.on("playerLeft",ru),gt.on("disconnect",()=>{Te.dataset.connection="offline",Xr.disabled=!0,mn.textContent=E.joined?"Connection lost. Reconnecting…":"Unable to reach the shared server.",mn.classList.add("error"),[...qe.keys()].forEach(ru)}),gt.on("connect_error",()=>{Te.dataset.connection="offline",Xr.disabled=!0,mn.textContent="Unable to reach the shared server.",mn.classList.add("error")}),window.addEventListener("beforeunload",()=>gt==null?void 0:gt.disconnect(),{once:!0})}function iM(n){!E.joined||!(gt!=null&&gt.connected)||(za+=n,!(za<.05)&&(za=0,gt.volatile.emit("playerState",{position:{x:Ut.position.x,y:Ut.position.y,z:Ut.position.z},rotation:Ut.rotation.y,moving:E.moving,sprinting:E.sprinting,dashing:E.dashing,grounded:E.grounded,verticalVelocity:E.verticalVelocity,attack:E.attack,attackSerial:E.attackSerial})))}nM();const so=new A(0,2.1,0),Ha=je.position.clone(),Ga=new Ku,Ti=new A,su=new A,Ai=new A,oo=new A,ou=new A,au=new A,kr=new A,Wa=new A,cu=new A,lu=new A;function rM(n){if(!E.joined||E.dead||Oe!=null&&Oe.ended)return E.moving=!1,E.sprinting=!1,E.velocity.x=Ht(E.velocity.x,0,18,n),E.velocity.z=Ht(E.velocity.z,0,18,n),Ut.position.y=Ht(Ut.position.y,Fe(Ut.position.x,Ut.position.z),18,n),0;if(E.dashing){E.dashTime=Math.max(0,E.dashTime-n);const l=15+be(E.dashTime/.27,0,1)*9;E.velocity.copy(E.dashDirection).multiplyScalar(l),$h(E.velocity.x*n,E.velocity.z*n,E.velocity);const h=Math.hypot(Ut.position.x,Ut.position.z);return h>145&&(Ut.position.x*=145/h,Ut.position.z*=145/h),Ut.position.y=Fe(Ut.position.x,Ut.position.z),Ut.rotation.y=Math.atan2(E.dashDirection.x,E.dashDirection.z),E.moving=!0,E.sprinting=!1,E.dashTime<=0&&(E.dashing=!1),l}Ai.set(0,0,0),(De.has("KeyW")||De.has("ArrowUp"))&&(Ai.z+=1),(De.has("KeyS")||De.has("ArrowDown"))&&(Ai.z-=1),(De.has("KeyA")||De.has("ArrowLeft"))&&(Ai.x-=1),(De.has("KeyD")||De.has("ArrowRight"))&&(Ai.x+=1),oo.set(Math.sin(Ni),0,Math.cos(Ni)),ou.set(-oo.z,0,oo.x);const t=new A().addScaledVector(oo,Ai.z).addScaledVector(ou,Ai.x);t.lengthSq()>0&&t.normalize(),E.moving=t.lengthSq()>.1;const e=E.moving&&(De.has("ShiftLeft")||De.has("ShiftRight"))&&E.stamina>1;E.sprinting=e,e?E.stamina=Math.max(0,E.stamina-23/3*n):E.stamina=Math.min(E.maxStamina,E.stamina+(E.moving?10:17)*n);const i=e?7.2:3.65,r=E.grounded?e?8:11:2.2;E.velocity.x=Ht(E.velocity.x,t.x*i,r,n),E.velocity.z=Ht(E.velocity.z,t.z*i,r,n),!E.moving&&E.grounded&&(E.velocity.x=Ht(E.velocity.x,0,12,n),E.velocity.z=Ht(E.velocity.z,0,12,n));const s=Math.hypot(E.velocity.x,E.velocity.z);Ut.rotation.y=Ni,$h(E.velocity.x*n,E.velocity.z*n,E.velocity);const o=Math.hypot(Ut.position.x,Ut.position.z);o>145&&(Ut.position.x*=145/o,Ut.position.z*=145/o);const a=Fe(Ut.position.x,Ut.position.z);return E.grounded?Ut.position.y=Ht(Ut.position.y,a,18,n):(E.verticalVelocity-=18.5*n,Ut.position.y+=E.verticalVelocity*n,Ut.position.y<=a&&E.verticalVelocity<0&&(Ut.position.y=a,E.verticalVelocity=0,E.grounded=!0,E.landing=1,Er(.19+Math.min(s/35,.12)))),Ko(),s}function sM(n,t){const e=yt.cape.geometry,i=e.attributes.position,r=e.userData.base,s=e.userData.cols;for(let o=0;o<i.count;o++){const a=Math.floor(o/(s+1))/11,c=r[o*3],l=Math.sin(n*(2.3+t*.12)+c*4.8+a*3.2)*(.025+t*.007)*a,h=Math.sin(n*1.5+a*2.6)*.035*a+t*.028*a;i.setXYZ(o,c+l*.24,r[o*3+1],r[o*3+2]-h-l)}i.needsUpdate=!0,e.computeVertexNormals()}function oM(n,t,e){E.dead&&(E.deathTime+=n);const i=be(e/7.2,0,1);E.gait+=n*(E.sprinting?12.2:8.3)*be(e/3.2,.25,1.25);const r=Math.sin(E.gait),s=Math.sin(E.gait*2),o=be(e/2.8,0,1),a=E.sprinting?o:0,c=Math.sin(t*1.65);let l=c*.012,h=c*.012+Math.abs(s)*.026*o,u=0,d=-r*.035*o,p=1.44-Math.abs(s)*.035*o,g=r*.63*o,x=-r*.63*o,m=Math.max(0,-r)*.58*o,f=Math.max(0,r)*.58*o,b=-r*.38*o-.08,M=r*.18*o-.42,_=.09,L=-.16,C=-.12-Math.max(0,r)*.28*o,P=-.52-Math.max(0,-r)*.18*o,D=3.3,S=0,y=.3,I=0,k=be((Jn-.18)*.32,-.1,.15);if(yt.slashTrail.visible=!1,!E.moving&&E.grounded&&!E.attack&&(b+=c*.018,M-=c*.016),a>0&&(l-=.17*a,g*=1.2,x*=1.2,b=-r*.72-.18,M=r*.34-.56,C=-.58,P=-.64,D=3.2,S=0,y=.46),E.dashing){const B=be(E.dashTime/.27,0,1);l=-.38,h=-.04,g=-.42+B*.18,x=.5-B*.16,m=.72,f=.18,b=.48,M=.28,_=.32,L=-.42,D=3.08,y=.7}if(!E.grounded){const B=E.verticalVelocity>0;l=B?-.07:.06,g=B?-.42:.2,x=B?.2:-.18,m=B?.65:.28,f=B?.42:.5,b=B?.3:-.18,M=B?-.55:-.2,_=.28,L=-.3,D=3.15,y=.44}if(E.landing>0){E.landing=Math.max(0,E.landing-n*3.7);const B=Math.sin(E.landing*Math.PI)*.27;p-=B,l+=B*.45,g=-.18,x=.16,m=B*1.8,f=B*1.55}if(E.weaponKick=Ht(E.weaponKick,0,16,n),E.weapon){const B=o*Math.sin(E.gait*2)*.025;l=-.045,u=-.08,I=.06,b=-1.18+B,_=.25,C=-.62,M=-1.14+B-E.weaponKick*.07,L=-.22,P=-.88,D=3.57-E.weaponKick*.1,S=0,y=.06-E.weaponKick*.035,l-=E.weaponKick*.025}if(E.bowDrawing){const B=be((performance.now()-E.bowDrawStart)/1150,0,1);u=St(-.04,-.18,B),l=-.035,I=.08+B*.08,b=-1.34,_=.18,C=-.18,M=St(-1.02,-1.24,B),L=St(-.3,-.78,B),P=St(-.78,-1.38,B)}if(E.attack){E.attackTime+=n;const B=E.attack==="heavy",H=E.attack==="bow",ct=B?.96:H?.34:.46,tt=be(E.attackTime/ct,0,1),_t=B?.3:.12,Bt=B?.64:.72;if(!H&&tt>=_t&&tt<=Bt){const At=be((tt-_t)/(Bt-_t),0,1);yt.slashTrail.visible=!0,yt.slashTrail.material.opacity=Math.sin(At*Math.PI)*(B?.62:.5),yt.slashTrail.material.color.setHex(B?16751453:16177019);const G=(B?1.34:1.16)*(.92+At*.12);yt.slashTrail.scale.set(G*.78,G,G),yt.slashTrail.rotation.z=B?.18:-.62+At*1.18}if(H){const At=Math.sin(tt*Math.PI);u=-.08+At*.12,b=-1.28+At*.12,_=.1,C=-.22,M=-1.12+At*.5,L=-.52+At*.4,P=-1.18+At*.48}else if(B){const At=He.smootherstep(tt,0,.36),G=He.smootherstep(tt,.36,.58),nt=He.smootherstep(tt,.78,1),ft=Math.sin(tt*Math.PI),ut=At*(1-G),Mt=G*(1-nt);u+=St(-.12,.08,G)*ft,l+=G*(1-nt)*.42-At*(1-G)*.12,p-=Mt*.18,h-=Mt*.08,x=-.66*ut+.2*Mt,f=1.02*ut+.18*Mt,g=-.04*Mt,m=.16*Mt,M=St(St(-.42,-1.42,At),-1.02,G),M=St(M,-.42,nt),L=St(St(-.16,.22,At),.04,G),L=St(L,-.16,nt),P=St(-.52,-.9,ft),D=St(St(3.3,2.25,At),4.25,G),D=St(D,3.3,nt),S=0,y=St(St(.3,-.12,At),-.06,G),y=St(y,.3,nt),b=St(-.12,-1.02,ft),_=St(.09,-.62,ft),C=St(-.12,-.86,ft),tt>=.58&&!E.attackImpact&&(E.attackImpact=!0,ay())}else{const At=He.smootherstep(tt,0,.23),G=He.smootherstep(tt,.23,.57),nt=He.smootherstep(tt,.18,.49),ft=He.smootherstep(tt,.6,1);u+=St(St(0,.22,At),-.34,G)*(1-ft),l+=Math.sin(tt*Math.PI)*.08,M=St(St(-.42,-.72,At),-1.08,G),M=St(M,-.42,ft),L=St(St(-.16,-.78,At),.98,G),L=St(L,-.16,ft),P=St(-.52,-.72,Math.sin(tt*Math.PI)),D=St(St(3.3,2.1,At),1.35,nt),D=St(D,3.3,ft),S=0,y=St(St(.3,.72,At),-.55,nt),y=St(y,.3,ft),b=St(-.08,-.38,Math.sin(tt*Math.PI)),_=St(.09,-.16,Math.sin(tt*Math.PI))}B||(g=0,x=0,m=0,f=0),tt>=1&&(E.attack=null)}const F=14,q=E.attack?30:F,K=E.attack?38:22;yt.hips.position.y=Ht(yt.hips.position.y,p,F,n),yt.hips.rotation.y=Ht(yt.hips.rotation.y,-d*.9,F,n),yt.torso.position.y=Ht(yt.torso.position.y,.28+h,F,n),yt.torso.rotation.x=Ht(yt.torso.rotation.x,l,F,n),yt.torso.rotation.y=Ht(yt.torso.rotation.y,u,18,n),yt.torso.rotation.z=Ht(yt.torso.rotation.z,d,F,n),yt.head.rotation.x=Ht(yt.head.rotation.x,k-l*.25,7,n),yt.head.rotation.y=Ht(yt.head.rotation.y,I-u*.18,7,n),yt.head.rotation.z=Ht(yt.head.rotation.z,-d*.55,9,n),yt.leftLeg.leg.rotation.x=Ht(yt.leftLeg.leg.rotation.x,g,F,n),yt.rightLeg.leg.rotation.x=Ht(yt.rightLeg.leg.rotation.x,x,F,n),yt.leftLeg.knee.rotation.x=Ht(yt.leftLeg.knee.rotation.x,m,F,n),yt.rightLeg.knee.rotation.x=Ht(yt.rightLeg.knee.rotation.x,f,F,n),yt.leftArm.shoulder.rotation.x=Ht(yt.leftArm.shoulder.rotation.x,b,q,n),yt.rightArm.shoulder.rotation.x=Ht(yt.rightArm.shoulder.rotation.x,M,q,n),yt.leftArm.shoulder.rotation.z=Ht(yt.leftArm.shoulder.rotation.z,_,q,n),yt.rightArm.shoulder.rotation.z=Ht(yt.rightArm.shoulder.rotation.z,L,q,n),yt.leftArm.elbow.rotation.x=Ht(yt.leftArm.elbow.rotation.x,C,q,n),yt.rightArm.elbow.rotation.x=Ht(yt.rightArm.elbow.rotation.x,P,q,n),yt.rightArm.hand.rotation.x=Ht(yt.rightArm.hand.rotation.x,D,K,n),yt.rightArm.hand.rotation.y=Ht(yt.rightArm.hand.rotation.y,S,K,n),yt.rightArm.hand.rotation.z=Ht(yt.rightArm.hand.rotation.z,y,K,n),bf(yt.ak47,E.weapon==="ak47"?E.weaponKick:0,t),yt.shadowDisc.material.opacity=Ht(yt.shadowDisc.material.opacity,E.grounded?.17:.07,8,n),yt.shadowDisc.scale.setScalar(Ht(yt.shadowDisc.scale.x,E.grounded?1:.75,8,n));const V=E.dead?1.48:0;Ut.rotation.x=Ht(Ut.rotation.x,V,E.dead?5.8:13,n),sM(t,i*7.2)}function aM(n){const t=E.kit==="bow"||!!E.weapon,e=Ni+(Yc?Math.PI:0);if(je.fov=Ht(je.fov,t?48:E.sprinting?53:48,4.5,n),je.updateProjectionMatrix(),t)kr.set(Ut.position.x,Ut.position.y+2.45,Ut.position.z),Wa.set(Math.sin(e)*Math.cos(Jn),-Math.sin(Jn),Math.cos(e)*Math.cos(Jn)).normalize(),cu.set(-Math.cos(e),0,Math.sin(e)),Ti.copy(kr).addScaledVector(Wa,-Fo).addScaledVector(cu,1.68),Ti.y=Math.max(Ti.y+.78,kr.y+.65);else{const h=E.sprinting?1.88:1.98;au.set(Math.cos(e),0,-Math.sin(e));const u=E.sprinting?.08:.14,d=kr.set(Ut.position.x,Ut.position.y+h,Ut.position.z).addScaledVector(au,u);so.lerp(d,1-Math.exp(-7.5*n)),su.set(-Math.sin(e)*Math.cos(Jn),Math.sin(Jn),-Math.cos(e)*Math.cos(Jn)).multiplyScalar(Fo),Ti.copy(so).add(su)}const i=t?kr:so,r=Ti.clone().sub(i),s=r.length();r.normalize(),Ga.set(i,r),Ga.far=s;const o=Ga.intersectObjects(gs,!0);o.length&&o[0].distance>.45&&Ti.copy(i).addScaledVector(r,Math.max(1.25,o[0].distance-.42));const a=t?10:E.sprinting?5.6:7.2;Ha.lerp(Ti,1-Math.exp(-a*n)),t&&lu.copy(Ha).addScaledVector(Wa,40),Jr=Ht(Jr,0,7.5,n);const c=new A(Math.random()-.5,Math.random()-.5,Math.random()-.5).multiplyScalar(Jr);je.position.copy(Ha).add(c);const l=t?lu:so;je.lookAt(l.clone().add(c.multiplyScalar(.25)))}const cM=new lm;let ao=0,Xa=0,co=0;function If(){requestAnimationFrame(If);const n=Math.min(cM.getDelta(),.04);ao+=n,Gy(n),vs&&E.weapon==="ak47"&&Sl();const t=rM(n);if(qx(n),oM(n,ao,t),cy(n),Jy(n),hy(),ry(ao),py(n),tM(n),iM(n),aM(n),Hy(),Uy(),E.joined&&(Qe.position.set(Ut.position.x-34,Ut.position.y+46,Ut.position.z-28),Qe.target.position.set(Ut.position.x,Ut.position.y+1.2,Ut.position.z)),E.dead&&E.respawnAt){const e=Math.max(0,Math.ceil((E.respawnAt-Date.now())/1e3));Ly.textContent=e>0?`${e} SECOND${e===1?"":"S"}`:"RETURNING…"}Zh.userData.shader&&(Zh.userData.shader.uniforms.uTime.value=ao),sy.forEach((e,i)=>{e.position.x+=n*(.28+i*.07),e.position.x>145&&(e.position.x=-145)}),Xa++,co+=n,co>.5&&(document.querySelector("#fps").textContent=`${Math.round(Xa/co)} FPS`,Xa=0,co=0),Le.render(ee,je)}If();window.addEventListener("resize",()=>{je.aspect=window.innerWidth/window.innerHeight,je.updateProjectionMatrix(),Le.setSize(window.innerWidth,window.innerHeight),Le.setPixelRatio(Math.min(window.devicePixelRatio,2))});
