<template>
    <q-layout >
    <q-header class="q-pa-md transparent">
      <!-- Navbar content goes here -->
        <q-toolbar class="mobile-hide">
          <q-toolbar-title class="text-h5" style="font-family:Nunito">
            Quincy Worx
          </q-toolbar-title>
          <q-btn flat @click="goTo('amenities')">
            Amenities
          </q-btn>
          <q-btn flat @click="goTo('gallery')">
            Gallery
          </q-btn>
          <q-btn flat @click="goTo('memberships')">
            Pricing
          </q-btn>
          <q-btn flat  @click="goTo('contact')">
            Contact
          </q-btn>
          <q-separator vertical />
          <q-btn flat href="https://quincyworx.skedda.com/">
            Member Login
          </q-btn>
        </q-toolbar>
        <br />
        <div class="text-center text-h3 q-ma-lg">
          <b>Quincy's Premiere Coworking Space</b>
        </div>
        <br />
        <div class="text-center q-ma-lg ">
          <q-btn 
          class="q-px-xl q-my-md" 
          size="lg"
          style="background: #FBA504" 
          rounded 
          @click="joinNow"
          href="javascript:void( window.open( 'https://form.jotform.com/230655747373059', 'blank', 'scrollbars=yes, toolbar=no, width=700, height=500' ) )"
          >
              <span class="text-subtitle1" style="text-transform: none">Join Now</span>
          </q-btn>
        </div>
    </q-header>
    <q-page-container class="relative-position" style="height: 70vh;">
              <!-- src="~assets/building-images/building_10.jpg"  -->
<!-- 
      <img 
        id="hero"
        class="absolute-position darken" 
        style="width: 100%; height: 100%;" 
        /> -->

      <img 
        id="hero"
      />
    </q-page-container>

    <hr class="hr" />

    <div class="row q-pa-lg justify-center"  style="background: #FAFAFA">
      <div class="col-md-4 col-sm-12 q-mt-lg mobile-hide">
        <div class="justify-center">
        <q-img 
          src="~assets/building-images/building_11.jpg"
          style="border-radius: 50%; width:22vw; height:22vw;"
          />
        </div>
      </div>
      <div class="col-md-6 q-mt-lg">
        <div class="text-center">
          <p class="text-h4" >
            We are a Coworking and shared office space with incredible amenities, flexible plans, and an unmatched experience.          </p>
          <p>
            At Quincy Worx we offer varied and affordable Meeting Spaces to support our community. Including Day Passes (desk/office), conference & boardrooms, event/training space,  and Private Offices with flexible solutions for professionals looking for an alternative work environment. Quincy Worx is collaborative and encourages networking, increased creativity, and amenities to promote high productivity for success.
          </p>
        </div>
      </div>
    </div>

    <hr class="hr" />

    <div ref="amenities" class="justify-center  amenity-icon q-pa-md" style="background: #F1F2F2; ">
      <div class="row justify-center text-h5  q-pa-lg">
          Amenities
      </div>
  
  <div class="row text-center q-pa-lg justify-center" >
      <div class="col-md-2 col-sm-12 q-my-sm text-h6">
        <q-icon name="wifi" size="lg" class="amenity-icon"/> <br />
        Super-Fast Internet
      </div>
      <div class="col-md-2 col-sm-12 q-my-sm text-h6">
        <q-icon name="chair" size="lg"/> <br />
        Open Seating
      </div>
      <div class="col-md-2 col-sm-12 q-my-sm text-h6">
        <q-icon name="coffee" size="lg"/> <br />
        Free Coffee, Snacks, and Beverages
      </div>
      <div class="col-md-2 col-sm-12 q-my-sm text-h6">
        <q-icon name="restaurant" size="lg"/> <br />
       Shared Kitchen
      </div>
      <div class="col-md-2 col-sm-12 q-my-sm text-h6">
        <q-icon name="print" size="lg"/> <br />
        Printer, Copier, Scanner
      </div>
    </div>

    </div>

  
    <hr class="hr" />

    <div style="background: #FFFFFF" class="q-ma-lg">
      <div class="row text-center" ref="memberships">
          <q-space />
          <div class="col-md-6">
              <span class="text-h6" >Options For Growing Teams</span> <br />
              At Quincy Worx, we believe that choosing the right Cowork Space should be stress-free. We’ve built our memberships to be as flexible and responsive as possible, with options for individuals and entrepreneurs, from private offices to shared workspace. All members have access to extensive amenities and services, specifically created with entrepreneurs in mind, so you can focus on the important things.
          </div>
          <q-space />
        </div>
        <div class="text-center q-mt-lg text-h5">
          Memberships
        </div>
        <div class="row q-pa-md">
            <div class="col-md-3 col-sm-12 q-my-sm">
              <q-card class="q-ma-md membership-card">
                <q-card-section class="membership-card-header">
                  <div class="text-h6">Day Pass</div>
                </q-card-section>
                <q-separator />
                <q-card-section class="text-center text-h6">
                  $15 / Day
                </q-card-section>
                <q-separator />
                <q-card-section class="membership-card-details">
                  8 AM - 5 PM weekday access <br />
                  Open Seating in the Business Lounge <br />
                  High Speed Wifi  <br />    
                  Unlimited Coffee, Beverages, and Snacks  <br /> 
                </q-card-section>
              </q-card>
            </div>
            <div class="col-md-3 col-sm-12 q-my-sm">
              <q-card class="q-ma-md membership-card">
                <q-card-section class="membership-card-header">
                  <div class="text-h6">The Worx</div>
                </q-card-section>
                <q-separator />
                <q-card-section class="text-center text-h6">
                  $100 / Month
                </q-card-section>
                <q-separator />
                <q-card-section class="membership-card-details">
                  8 AM - 5 PM Weekday Access <br />
                  Open Seating in the Business Lounge <br />
                  High Speed Wifi  <br />
                  Unlimited Coffee, Beverages, and Snacks  <br /> 
                </q-card-section>
              </q-card>
            </div>
            <div class="col-md-3 col-sm-12 q-my-sm">
              <q-card class="q-ma-md membership-card">
                <q-card-section class="membership-card-header">
                  <div class="text-h6">Pro Worx</div>
                </q-card-section>
                <q-separator />
                <q-card-section class="text-center text-h6">
                  $200 / Month
                </q-card-section>
                <q-separator />
                <q-card-section class="membership-card-details">
                  All Amenitites<br />
                  24/7 Building Access<br />
                  Conference Room Availability <br />
                </q-card-section>
                <!-- <q-card-actions align="center">
                  <q-btn>
                    Learn More
                  </q-btn>
                </q-card-actions> -->
              </q-card>
            </div>
            <div class="col-md-3 col-sm-12 q-my-sm">
              <q-card class="q-ma-md membership-card">
                <q-card-section class="membership-card-header">
                  <div class="text-h6">Private Office</div>
                </q-card-section>
                <q-separator />
                <q-card-section class="text-center">
                  <span style="color:#5B6770;">Starting At</span> <br />
                  <span class="text-h6">$400 / Month</span> <br />
                </q-card-section>
                <q-separator />
                <q-card-section class="membership-card-details">
                  All Amenitites<br />
                  24/7 Building Access<br />
                  Conference Room Availability <br />
                </q-card-section>
              </q-card>
            </div>
        </div>
        <!-- <div class="text-center q-mt-lg text-h5">
          Room Rentals
        </div>
        <div class="row q-pa-md">
            <div class="col-md-3 col-sm-12 q-my-sm">
              <q-card class="q-ma-md membership-card">
                <q-card-section class="membership-card-header">
                  <div class="text-h6">Day Pass</div>
                </q-card-section>
                <q-separator />
                <q-card-section class="text-center text-h6">
                  $15 / Day
                </q-card-section>
                <q-separator />
                <q-card-section class="membership-card-details">
                  8 AM - 5 PM weekday access <br />
                  Open Seating in the Business Lounge <br />
                  High Speed Wifi  <br />    
                  Unlimited Coffee, Beverages, and Snacks  <br /> 
                </q-card-section>
              </q-card>
            </div>
            <div class="col-md-3 col-sm-12 q-my-sm">
              <q-card class="q-ma-md membership-card">
                <q-card-section class="membership-card-header">
                  <div class="text-h6">The Worx</div>
                </q-card-section>
                <q-separator />
                <q-card-section class="text-center text-h6">
                  $100 / Month
                </q-card-section>
                <q-separator />
                <q-card-section class="membership-card-details">
                  8 AM - 5 PM Weekday Access <br />
                  Open Seating in the Business Lounge <br />
                  High Speed Wifi  <br />
                  Unlimited Coffee, Beverages, and Snacks  <br /> 
                </q-card-section>
              </q-card>
            </div>
            <div class="col-md-3 col-sm-12 q-my-sm">
              <q-card class="q-ma-md membership-card">
                <q-card-section class="membership-card-header">
                  <div class="text-h6">Pro Worx</div>
                </q-card-section>
                <q-separator />
                <q-card-section class="text-center text-h6">
                  $200 / Month
                </q-card-section>
                <q-separator />
                <q-card-section class="membership-card-details">
                  All Amenitites<br />
                  24/7 Building Access<br />
                  Conference Room Availability <br />
                </q-card-section>
              </q-card>
            </div>
            <div class="col-md-3 col-sm-12 q-my-sm">
              <q-card class="q-ma-md membership-card">
                <q-card-section class="membership-card-header">
                  <div class="text-h6">Private Office</div>
                </q-card-section>
                <q-separator />
                <q-card-section class="text-center">
                  <span style="color:#5B6770;">Starting At</span> <br />
                  <span class="text-h6">$400 / Month</span> <br />
                </q-card-section>
                <q-separator />
                <q-card-section class="membership-card-details">
                  All Amenitites<br />
                  24/7 Building Access<br />
                  Conference Room Availability <br />
                </q-card-section>
              </q-card>
            </div>
        </div> -->
    </div>

    <hr class="hr" />

    <div style="background: #FAFAFA" ref="gallery" class="mobile-hide">
      <div class="text-center q-pa-lg text-h5">
        Gallery
      </div>
        <div class="row justify-center">
          <div class="col-md-8">
            <q-carousel
              v-model="slide"
              transition-prev="slide-right"
              transition-next="slide-left"
              animated
              navigation
              padding
              arrows
              control-type="flat"
              control-color="grey"
              class="rounded-borders q-mx-lg"
                style="background: #FAFAFA"
            >
              <q-carousel-slide
                v-for="slideImage in slideImages"
                :key="slideImage.name"
                :name="slideImage.name"
                class="column no-wrap flex-center q-pt-none"
              >
                <!-- <q-img :src="getImageUrl(slideImage.src)" spinner-color="white" /> -->
                <q-img :src="slideImage.src" spinner-color="white" />
              </q-carousel-slide>
            </q-carousel> 

            <!-- <div class="row justify-center">
              <q-btn-toggle glossy v-model="slide" :options="toggleOptions" />
            </div> -->
          </div>
        </div>
        <div class="row justify-center q-pa-lg">
          <div class="col-md-8 text-center">
            <q-btn label="Watch Video Walk Through" color="primary" @click="showVideo = true" />
          </div>
        </div>
    </div>    

    <q-dialog v-model="showVideo">
      <q-card style="width:700px; max-width:80vw;" class="">
        <q-card-section class="">
          <q-video 
            :src="videoSrc"
            :ratio="16/9"
              />        
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Close" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
     

    <hr class="hr" />
    <!-- <div class="row text-h4" id="schedule-tour-row">
      <span id=""><b>Schedule a tour</b> to explore our facility.</span>
    </div> -->
    <div style="">
      <div class="row q-pa-xl" ref="contact" >
        <div class="col-md-6">
          <div class="">
            <p class="text-h5 text-center" >
              Contact 
            </p>
            <p class="text-subtitle1">
              3701 East Lake Center, Suite 1 <br />
              Quincy, Illinois <br /> 
              62305 <br />
              <br />
              <q-icon name="phone" /> 217-919-0029  
              <br />
              <q-icon name="email" /> info@quincyworx.com
            </p>
          </div>
          <div class="text-center">
            <q-btn class="q-px-xl q-my-md" size="lg" style="background: #FBA504; color: white" rounded @click="joinNow" href="javascript:void( window.open( 'https://form.jotform.com/230655747373059', 'blank', 'scrollbars=yes, toolbar=no, width=700, height=500' ) )">
                <span class="text-subtitle1" style="text-transform: none">Join Now</span>
            </q-btn>

          </div>
        </div>
        <div class="col-md-6 text-center">
          <q-img 
            src="~assets/building-images/building_1.jpg" 
            />
        </div>
      </div>
    </div>
    <div class="row">
      <q-toolbar style="background-color:#222222; color: white;">
        <q-space />
        <span class="text-caption">
          Copyright © {{currYear}} - Quincy Worx
        </span>
        <q-space />

          <!-- <q-btn flat size="sm">
            Member Login
          </q-btn> -->
          <!-- <q-icon name="cancel" color="white" /> -->
      </q-toolbar>
    </div>

    <!-- <q-dialog v-model="joinDialog">
      <div class="row q-ma-lg">
        <iframe id="JotFormIFrame-230655747373059" title="Join Quincy Worx" onload="window.parent.scrollTo(0,0)" allowtransparency="true" allowfullscreen="true" allow="geolocation; microphone; camera" src="https://form.jotform.com/230655747373059" frameborder="0" style=" min-width: 100%; height:539px; border:none;" scrolling="no" > </iframe>
      </div>
    </q-dialog> -->

  </q-layout>
</template>


<script>
import { defineComponent, ref } from 'vue'
// import { useQuasar } from 'quasar'

// const getImageUrl = (url) => {
//       return new URL(url, import.meta.url).href
//   }

// const $q = useQuasar()

export default defineComponent({
  name: 'App',
  setup(){
    return {
      // getImageUrl,
      showVideo: ref(false),
      joinDialog: ref(false),
      videoSrc:  new URL("assets/video/qw_walk_thru.mp4", import.meta.url),
      slideImages:[
        // {
        //   name: "building_1",
        //   src: new URL("assets/building-images/building_1.jpg", import.meta.url)
        // },
        {
          name: "building_2",
          src: new URL("assets/building-images-2024-07/Koontz.jpg", import.meta.url)
        },
        {
          name: "building_3",
          src: new URL("assets/building-images-2024-07/R5_A9283.jpg", import.meta.url)
        },
        {
          name: "building_4",
          src: new URL("assets/building-images-2024-07/R5_A9299.jpg", import.meta.url)
        },
        {
          name: "building_5",
          src: new URL("assets/building-images-2024-07/R5_A9303.jpg", import.meta.url)
        },
        {
          name: "building_6",
          src: new URL("assets/building-images-2024-07/R5_A9307.jpg", import.meta.url)
        },
        {
          name: "building_7",
          src: new URL("assets/building-images-2024-07/R5_A9319.jpg", import.meta.url)
        },
        // {
        //   name: "building_8",
        //   src: new URL("assets/building-images-2024-07/R5_A9327.jpg", import.meta.url)
        // },
        {
          name: "building_9",
          src: new URL("assets/building-images-2024-07/R5_A9355.jpg", import.meta.url)
        },
        {
          name: "building_10",
          src: new URL("assets/building-images-2024-07/R5_A9375.jpg", import.meta.url)
        },
        {
          name: "building_11",
          src: new URL("assets/building-images-2024-07/R5_A9447.jpg", import.meta.url)
        },
      ],
      slide: ref('building_2'),
    }
  },
  computed: {
    toggleOptions() {
      return this.slideImages.map((slideImage, idx)=>{
        return {
          label: idx+1,
          value: slideImage.name
        }
      })
    },
    currYear(){
      const d = new Date();
      return d.getFullYear().toString();
    }
  },
  methods: {
    goTo(ref){
        this.$refs[ref].scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'start'
        })
    },
    joinNow(){
      // this.joinDialog = true;
      // window.open( 'https://form.jotform.com/230655747373059', 'scrollbars=yes, toolbar=no, width=700, height=500' )
    }
  }
})


let iframe;
let handleIFrameMessage;
let ifr = document.getElementById("JotFormIFrame-230655747373059"); if (ifr) { var src = ifr.src; var iframeParams = []; if (window.location.href && window.location.href.indexOf("?") > -1) { iframeParams = iframeParams.concat(window.location.href.substr(window.location.href.indexOf("?") + 1).split('&')); } if (src && src.indexOf("?") > -1) { iframeParams = iframeParams.concat(src.substr(src.indexOf("?") + 1).split("&")); src = src.substr(0, src.indexOf("?")) } iframeParams.push("isIframeEmbed=1"); ifr.src = src + "?" + iframeParams.join('&'); } window.handleIFrameMessage = function(e) { if (typeof e.data === 'object') { return; } var args = e.data.split(":"); if (args.length > 2) { iframe = document.getElementById("JotFormIFrame-" + args[(args.length - 1)]); } else { iframe = document.getElementById("JotFormIFrame"); } if (!iframe) { return; } switch (args[0]) { case "scrollIntoView": iframe.scrollIntoView(); break; case "setHeight": iframe.style.height = args[1] + "px"; if (!isNaN(args[1]) && parseInt(iframe.style.minHeight) > parseInt(args[1])) { iframe.style.minHeight = args[1] + "px"; } break; case "collapseErrorPage": if (iframe.clientHeight > window.innerHeight) { iframe.style.height = window.innerHeight + "px"; } break; case "reloadPage": window.location.reload(); break; case "loadScript": if( !window.isPermitted(e.origin, ['jotform.com', 'jotform.pro']) ) { break; } var src = args[1]; if (args.length > 3) { src = args[1] + ':' + args[2]; } var script = document.createElement('script'); script.src = src; script.type = 'text/javascript'; document.body.appendChild(script); break; case "exitFullscreen": if (window.document.exitFullscreen) window.document.exitFullscreen(); else if (window.document.mozCancelFullScreen) window.document.mozCancelFullScreen(); else if (window.document.mozCancelFullscreen) window.document.mozCancelFullScreen(); else if (window.document.webkitExitFullscreen) window.document.webkitExitFullscreen(); else if (window.document.msExitFullscreen) window.document.msExitFullscreen(); break; } var isJotForm = (e.origin.indexOf("jotform") > -1) ? true : false; if(isJotForm && "contentWindow" in iframe && "postMessage" in iframe.contentWindow) { var urls = {"docurl":encodeURIComponent(document.URL),"referrer":encodeURIComponent(document.referrer)}; iframe.contentWindow.postMessage(JSON.stringify({"type":"urls","value":urls}), "*"); } }; window.isPermitted = function(originUrl, whitelisted_domains) { var url = document.createElement('a'); url.href = originUrl; var hostname = url.hostname; var result = false; if( typeof hostname !== 'undefined' ) { whitelisted_domains.forEach(function(element) { if( hostname.slice((-1 * element.length - 1)) === '.'.concat(element) || hostname === element ) { result = true; } }); return result; } }; if (window.addEventListener) { window.addEventListener("message", handleIFrameMessage, false); } else if (window.attachEvent) { window.attachEvent("onmessage", handleIFrameMessage); } 
</script>

<style scoped>
  .bg-image {
    background-image: url("assets/building-images/building_10.jpg");
    background-repeat: no-repeat;
    background-size: cover;

    min-height: 90vh;  
  }

  /* .darken {
    filter: brightness(40%);
  } */

  .relative-position {
    position: relative;
  }
  /* .absolute-position {
    position: absolute;
    top: 0;
    left: 0;
  } */

  .membership-card {
    height: 100%;
  }

  .membership-card-header {
    color: white;
    text-align: center;
    background: #FBA504;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .membership-card-details {
    color:#5B6770;
    text-align: center;
  }

  .amenity-icon {
    color: #5B6770;
  }

  .hr {
    border-top: 1px solid #D5D5D5;
    margin-top:0px;
    margin-bottom:0px;
  }


  #hero {
    background-image: url("assets/building-images/building_10.jpg");
    width: 100%; 
    height: 100%;
    filter: brightness(40%);
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
  }

  @media 
  only screen and (max-width: 767px)  {
    #hero{
          filter: brightness(40%);
          width: 100%; 
          height: 100% !important;
          content: url("assets/building-images/building_5_cropped.jpg") !important;

     }
  }

</style>

