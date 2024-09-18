import{f as y,i as c,g as i,h as g,j as b,k as C,l as x,p as h,m as k,_ as Q,d as S,r as w,o as l,c as m,w as u,n,b as p,q as I,s as P,F,t as W,u as E,v as q}from"./index.18ca4f1b.js";const O={};var B=y({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(t,{slots:e}){const{proxy:{$q:a}}=k(),o=c(x,i);if(o===i)return console.error("QPage needs to be a deep child of QLayout"),i;if(c(h,i)===i)return console.error("QPage needs to be child of QPageContainer"),i;const d=g(()=>{const r=(o.header.space===!0?o.header.size:0)+(o.footer.space===!0?o.footer.size:0);if(typeof t.styleFn=="function"){const v=o.isContainer.value===!0?o.containerHeight.value:a.screen.height;return t.styleFn(r,v)}return{minHeight:o.isContainer.value===!0?o.containerHeight.value-r+"px":a.screen.height===0?r!==0?`calc(100vh - ${r}px)`:"100vh":a.screen.height-r+"px"}}),s=g(()=>`q-page${t.padding===!0?" q-layout-padding":""}`);return()=>b("main",{class:s.value,style:d.value},C(e.default))}});const $=t=>new URL(t,O.url).href,L=S({name:"IndexPage",setup(){return{getImageUrl:$,slideImages:[{name:"building_1",src:"../assets/building-images/building_1.jpg"},{name:"building_2",src:"../assets/building-images/building_2.jpg"},{name:"building_3",src:"../assets/building-images/building_3.jpg"}],slide:w("building_1"),lorem:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo provident incidunt ducimus iusto perferendis porro earum. Totam, numquam?"}},computed:{toggleOptions(){return this.slideImages.map((t,e)=>({label:e+1,value:t.name}))}}}),N={class:"row"},H={class:"col-6"};function M(t,e,a,o,f,d){return l(),m(B,{style:{"background-color":"#D5D1D2"}},{default:u(()=>[e[3]||(e[3]=n("br",null,null,-1)),e[4]||(e[4]=n("div",{class:"row text-center q-pa-lg"},[n("div",{class:"col-3"}),n("div",{class:"col-6 text-h4 text-weight-bold"},"Quincy Worx - Co-Working and Meeting Space"),n("div",{class:"col-3"})],-1)),e[5]||(e[5]=n("div",{class:"row text-center q-ma-sm"},[n("div",{class:"col-3"}),n("div",{class:"col-6 text-subtitle1"},"3701 East Lake Center | Suite 1 | Quincy Il 62305 United States"),n("div",{class:"col-3"})],-1)),n("div",N,[e[1]||(e[1]=n("div",{class:"col-3"},null,-1)),n("div",H,[p(W,{modelValue:t.slide,"onUpdate:modelValue":e[0]||(e[0]=s=>t.slide=s),"transition-prev":"slide-right","transition-next":"slide-left",animated:"",navigation:"","control-type":"flat","control-color":"grey",class:"rounded-borders q-mx-lg"},{default:u(()=>[(l(!0),I(F,null,P(t.slideImages,s=>(l(),m(E,{key:s.name,name:s.name,class:"column no-wrap flex-center q-pt-none"},{default:u(()=>[p(q,{src:t.getImageUrl(s.src),"spinner-color":"white"},null,8,["src"])]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"])]),e[2]||(e[2]=n("div",{class:"col-3"},null,-1))]),e[6]||(e[6]=n("br",null,null,-1)),e[7]||(e[7]=n("div",{class:"row text-center",style:{"background-color":"#F5F2F0"}},[n("div",{class:"col-3"}),n("div",{class:"col-6"}," Quincy Worx is a NEW WORKING EXPERIENCE! QW is a welcoming, professionally designed Co-Working & Shared Office Space. Email: Info@QuincyWorx.com Quincy Worx Space provides a Flexible Solution for professionals looking for a Better Alternative Work Environment, Collaboration, Networking, Increased Creativity, and Amenities to promote High Productivity for success. Built for Work From Home & Mobile Professionals | New Business - Start-up | Corporate Staff with needs of a Team Meeting Location | Needing a Conference Meeting Space or Hosting an Event | Quincy Worx is your Best Option. Amenities Internet Access, Printer, Copier, Scanner, Conference Room, Coffee/Tea, Fridge, Microwave, Parking, Kitchen Open Hours Monday - Friday 8am-5pm | 24/7 Access to Worx Pro or Private Office Plans | Bookings for Meeting, Conference, or Event Rooms as Scheduled Location 3701 East Lake Center | Suite 1 | Quincy Il 62305 United States "),n("div",{class:"col-3"})],-1)),e[8]||(e[8]=n("br",null,null,-1))]),_:1})}var U=Q(L,[["render",M]]);export{U as default};
