import{M as w,n as E,j as I,I as y,k,af as x,f as M,cu as D,i as A}from"./index-r2gGMmA-.js";import{i as R,f as O}from"./page-De0hPReT.js";class P{constructor(){this.promises={},this.raf=E.bind(null),this.scheduled=!1}do(e,t){let r=this.promises[e];return r||(this.scheduleFlush(),r=this.promises[e]=I()),t!==void 0&&r.then(()=>t()),r}measure(e){return this.do("read",e)}mutate(e){return this.do("write",e)}mutateElement(e,t){const r=R(e),n=r?this.mutate():Promise.resolve();return t!==void 0&&(r?n.then(()=>t()):t()),n}scheduleFlush(){this.scheduled||(this.scheduled=!0,this.raf(()=>{this.promises.read&&this.promises.read.resolve(),this.promises.write&&this.promises.write.resolve(),this.scheduled=!1,this.promises={}}))}}const L=new P;w&&(w.sequentialDom=L);let U=0;function z(s,e=()=>Promise.resolve(),t=null,r=!1,n=s){if(s.querySelector(".c-ripple"))return;s.classList.add("rp");const o=document.createElement("div");o.classList.add("c-ripple"),s.classList.contains("rp-square")&&o.classList.add("is-square"),s[r?"prepend":"append"](o);let d;const g=(a,c)=>{const p=Date.now(),i=document.createElement("div"),_=U++,u=+window.getComputedStyle(o).getPropertyValue("--ripple-duration").replace("s","")*1e3,S=d=()=>{const l=Date.now()-p,f=()=>{L.mutate(()=>{i.remove()}),t?.(_)};if(l<u){const h=Math.max(u-l,u/2);setTimeout(()=>i.classList.add("hiding"),Math.max(h-u/2,0)),setTimeout(f,h)}else i.classList.add("hiding"),setTimeout(f,u/2);y||(window.removeEventListener("contextmenu",d),window.removeEventListener("mousemove",d)),d=null,m=!1};e?.(_),E(()=>{if(S!==d)return;const l=o.getBoundingClientRect();i.classList.add("c-ripple__circle");const f=a-l.left,h=c-l.top,b=Math.sqrt((Math.abs(h-l.height/2)+l.height/2)**2+(Math.abs(f-l.width/2)+l.width/2)**2),q=f-b/2,C=h-b/2;i.style.width=i.style.height=b+"px",i.style.left=q+"px",i.style.top=C+"px",i.style.opacity="0",o.append(i),i.offsetWidth,i.style.opacity=""})},v=a=>a.target!==s&&(["BUTTON","A"].includes(a.target.tagName)||x(a.target,"c-ripple")!==o)&&(n===s||!O(a.target,n))&&!x(a.target,"checkbox-field");let m=!1;if(y){const a=()=>{d?.()},c=p=>{if(!k.isAvailable("animations")||p.touches.length>1||m||v(p))return;m=!0;const{clientX:i,clientY:_}=p.touches[0];g(i,_),n.addEventListener("touchend",a,{once:!0}),window.addEventListener("touchmove",u=>{u.cancelBubble=!0,u.stopPropagation(),a(),n.removeEventListener("touchend",a)},{once:!0})};return n.addEventListener("touchstart",c,{passive:!0}),{dispose:()=>n.removeEventListener("touchstart",c),element:o}}else{const a=c=>{if(![0,2].includes(c.button)||!k.isAvailable("animations")||n.dataset.ripple==="0"||v(c))return;if(m){m=!1;return}const{clientX:p,clientY:i}=c;g(p,i),window.addEventListener("mouseup",d,{once:!0,passive:!0}),window.addEventListener("contextmenu",d,{once:!0,passive:!0})};return n.addEventListener("mousedown",a,{passive:!0}),{dispose:()=>n.removeEventListener("mousedown",a),element:o}}}const B={check:"e900",checks:"e901",activesessions:"e902",add:"e903",add_reaction:"e904",addboost:"e905",addmember_filled:"e906",adduser:"e907",admin:"e908",animals:"e909",animations:"e90a",archive:"e90b",arrow_down:"e90c",arrow_next:"e90d",arrow_prev:"e90e",arrowcircle:"e90f",attach:"e910",audio_repeat:"e911",audio_repeat_single:"e912",author_hidden:"e913",avatarnext:"e914",avatarprevious:"e915",binfilled:"e916",bold:"e917",bomb:"e918",boost:"e919",boostcircle:"e91a",botcom:"e91b",bots:"e91c",bug:"e91d",calendar:"e91e",calendarfilter:"e91f",camera:"e920",cameraadd:"e921",car:"e922",card:"e923",card_outline:"e924",channel:"e925",channelviews:"e926",chatspinned:"e927",chatsplaceholder:"e928",check1:"e929",checkbox:"e92a",checkboxblock:"e92b",checkboxempty:"e92c",checkboxon:"e92d",checkretract:"e92e",checkround:"e92f",checkround_filled:"e930",clock:"e931",close:"e932",clouddownload:"e933",colorize:"e934",comments:"e935",commentssticker:"e936",copy:"e937",crossround:"e938",darkmode:"e939",data:"e93a",delete:"e93b",delete_filled:"e93c",deletedaccount:"e93d",deleteleft:"e93e",deleteuser:"e93f",devices:"e940",document:"e941",down:"e942",download:"e943",dragfiles:"e944",dragmedia:"e945",eats:"e946",edit:"e947",email:"e948",endcall_filled:"e949",enter:"e94a",eye:"e94b",eye1:"e94c",eye2:"e94d",eyecross_outline:"e94e",fast_forward:"e94f",fast_rewind:"e950",favourites:"e951",flag:"e952",flip:"e953",folder:"e954",fontsize:"e955",forward:"e956",forward_filled:"e957",fullscreen:"e958",gc_microphone:"e959",gc_microphoneoff:"e95a",gifs:"e95b",gift:"e95c",gift_premium:"e95d",group:"e95e",group_filled:"e95f",groupmedia:"e960",groupmediaoff:"e961",hand:"e962",help:"e963",hide:"e964",image:"e965",info:"e966",info2:"e967",italic:"e968",keyboard:"e969",lamp:"e96a",language:"e96b",largepause:"e96c",largeplay:"e96d",left:"e96e",limit_chat:"e96f",limit_chats:"e970",limit_file:"e971",limit_folders:"e972",limit_link:"e973",limit_pin:"e974",link:"e975",list:"e976",listscreenshare:"e977",livelocation:"e978",location:"e979",lock:"e97a",lockoff:"e97b",loginlogodesktop:"e97c",loginlogomobile:"e97d",logout:"e97e",mediaspoiler:"e97f",mediaspoileroff:"e980",mention:"e981",menu:"e982",message:"e983",message_jump:"e984",message_quote:"e985",messageunread:"e986",microphone:"e987",microphone_crossed:"e988",microphone_crossed_filled:"e989",microphone_filled:"e98a",minus:"e98b",monospace:"e98c",more:"e98d",multistories:"e98e",mute:"e98f",muted:"e990",mynotes:"e991",newchannel:"e992",newchannel_filled:"e993",newchat_filled:"e994",newgroup:"e995",newgroup_filled:"e996",newprivate:"e997",newprivate_filled:"e998",newtab:"e999",next:"e99a",nochannel:"e99b",noncontacts:"e99c",nosound:"e99d",online:"e99e",passwordoff:"e99f",pause:"e9a0",permissions:"e9a1",phone:"e9a2",phone_filled:"e9a3",pin:"e9a4",pinlist:"e9a5",pinned_filled:"e9a6",pinnedchat:"e9a7",pip:"e9a8",play:"e9a9",playback_05:"e9aa",playback_15:"e9ab",playback_1x:"e9ac",playback_2x:"e9ad",plus:"e9ae",plusround:"e9af",poll:"e9b0",premium_addone:"e9b1",premium_avatars:"e9b2",premium_badge:"e9b3",premium_colors:"e9b4",premium_double:"e9b5",premium_emoji:"e9b6",premium_filesize:"e9b7",premium_lastseen:"e9b8",premium_limits:"e9b9",premium_lock:"e9ba",premium_management:"e9bb",premium_noads:"e9bc",premium_privacy:"e9bd",premium_reactions:"e9be",premium_restrict:"e9bf",premium_speed:"e9c0",premium_status:"e9c1",premium_stickers:"e9c2",premium_tags:"e9c3",premium_transcription:"e9c4",premium_translate:"e9c5",premium_unlock:"e9c6",premium_wallpaper:"e9c7",previous:"e9c8",promote:"e9c9",quote:"e9ca",quote_outline:"e9cb",radiooff:"e9cc",radioon:"e9cd",reactions:"e9ce",reactions_filled:"e9cf",readchats:"e9d0",recent:"e9d1",replace:"e9d2",reply:"e9d3",reply_filled:"e9d4",restrict:"e9d5",revenue:"e9d6",rightpanel:"e9d7",rotate_left:"e9d8",rotate_right:"e9d9",saved:"e9da",savedmessages:"e9db",schedule:"e9dc",scheduled:"e9dd",search:"e9de",select:"e9df",send:"e9e0",send2:"e9e1",sending:"e9e2",sendingerror:"e9e3",settings:"e9e4",settings_filled:"e9e5",sharescreen_filled:"e9e6",shipping:"e9e7",shuffle:"e9e8",smallscreen:"e9e9",smile:"e9ea",speaker:"e9eb",speakerfilled:"e9ec",speakeroff:"e9ed",speakerofffilled:"e9ee",spoiler:"e9ef",sport:"e9f0",star:"e9f1",star_filled:"e9f2",statistics:"e9f3",stickers:"e9f4",stickers_face:"e9f5",stop:"e9f6",stories:"e9f7",storyreply:"e9f8",storyrepost:"e9f9",strikethrough:"e9fa",tag:"e9fb",tag_add:"e9fc",tag_crossed:"e9fd",tag_filter:"e9fe",tag_name:"e9ff",textedit:"ea00",timer:"ea01",tip:"ea02",tools:"ea03",topics:"ea04",transcribe:"ea05",unarchive:"ea06",unclaimed:"ea07",underline:"ea08",unmute:"ea09",unpin:"ea0a",unread:"ea0b",up:"ea0c",user:"ea0d",username:"ea0e",videocamera:"ea0f",videocamera_crossed_filled:"ea10",videocamera_filled:"ea11",videochat:"ea12",volume_down:"ea13",volume_mute:"ea14",volume_off:"ea15",volume_up:"ea16",webview:"ea17",zoomin:"ea18",zoomout:"ea19"},T=new Set(["avatarnext","avatarprevious","arrow_next","channel","chatspinned","fast_forward","fast_rewind","forward","forward_filled","group","group_filled","left","listscreenshare","logout","muted","newchannel_filled","newchannel","newgroup","newgroup_filled","next","nosound","previous","send","send2","reply","reply_filled","sharescreen_filled","transcribe","storyreply","premium_noads","topics","pinlist","deleteleft"]);function N(s){return String.fromCharCode(parseInt(B[s],16))}function j(s,...e){const t=document.createElement("span");return M.isRTL&&T.has(s)&&e.push("icon-reflect"),t.classList.add(D,...e),t.textContent=N(s),t}function H(s,e={}){const t=document.createElement(e.asLink?"a":e.asDiv?"div":"button");return t.className=s,e.noRipple||(e.rippleSquare&&t.classList.add("rp-square"),z(t)),e.icon&&F(t,e.icon,!1),e.onlyMobile&&t.classList.add("only-handhelds"),e.disabled&&t.setAttribute("disabled","true"),e.text&&t.append(A(e.text,e.textArgs)),t}function F(s,e,t=s.querySelector(".button-icon")){const r=j(e,"button-icon");return t?t.replaceWith(r):s.append(r),r}export{H as B,j as I,F as a,N as g,z as r,L as s};
//# sourceMappingURL=button-DQpxWumM.js.map
