<template>
    <q-layout >
    <q-header class="q-pa-md transparent">
      <!-- Navbar content goes here -->
        <q-toolbar class="mobile-hide">
          <q-toolbar-title class="text-h5" style="font-family:Nunito">
            Quincy Worx
          </q-toolbar-title>
          <q-btn flat @click="goTo('about')">
            About
          </q-btn>
          <q-btn flat @click="goTo('gallery')">
            Gallery
          </q-btn>
          <q-btn flat @click="goTo('memberships')">
            Memberships
          </q-btn>
          <q-btn flat  @click="goTo('contact')">
            Contact
          </q-btn>
          <q-separator vertical />
          <q-btn flat href="https://www.coworkify.com/quincyworx">
            Member Login
          </q-btn>
        </q-toolbar>
        <br />
        <div class="text-center text-h3 q-ma-lg">
          <b>Quincy's Premiere Coworking Space</b>
        </div>
        <br />
        <div class="text-center q-ma-lg ">
          <q-btn class="q-px-xl q-my-md" size="lg" style="background: #FBA504" rounded @click="joinNow">
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

    <div class="row q-pa-lg justify-center" ref="about"  style="background: #FFFFFF">
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
          <p class="text-h5" >
            About Quincy Worx
          </p>
          <p>
            Quincy Worx provides a flexible solution for professionals looking for a better alternative work environment, collaboration, networking, increased creativity, and amenities to promote high productivity for success. TODO: update.
          </p>
          <p>
            Amenities include:
          </p>
        </div>
        <div class="row">
            <q-space />
            <div class="col-md-8">
              <ul class="q-ml-md">
                <li>Super-Fast Internet Access</li>
                <li>Open seating with meeting/work tables, comfortable booths, and relaxing chairs.</li>
                <li>Printer, Copier, Scanner</li>
                <li>Electric Fountain Brewery Coffee, Tea, Water</li>
                <li>Fridge</li>
                <li>Kitchen</li>
                <li>Microwave</li>
              </ul>
            </div>
            <q-space />
        </div>
        <!-- <div class="row">
            <div class="col-md-6">
              <ul class="q-ml-md">
                <li>Internet Access</li>
                <li>Printer, Copier, Scanner</li>
              </ul>
            </div>
            <div class="col-md-6">
              <ul class="q-ml-md">
                <li>Conference Room</li>
                <li> Electric Fountain Brewery Coffee</li>
              </ul>
            </div>
        </div> -->
      </div>
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
    </div>        
    
    <hr class="hr" />

    <div style="background: #FFFFFF">
      <div class="row text-center q-pt-lg" ref="memberships">
          <q-space />
          <div class="col-md-6">
              <span class="text-h6" >Options For Growing Teams</span> <br />
              At Quincy Worx, we believe that choosing the right Cowork Space should be stress-free. We’ve built our memberships to be as flexible and responsive as possible, with options for individuals and entrepreneurs, from private offices to shared workspace. All members have access to extensive amenities and services, specifically created with entrepreneurs in mind, so you can focus on the important things. TODO: update.
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
                </q-card-section>
              </q-card>
            </div>
            <div class="col-md-3 col-sm-12 q-my-sm">
              <q-card class="q-ma-md membership-card">
                <q-card-section class="membership-card-header">
                  <div class="text-h6">Flex Worx</div>
                </q-card-section>
                <q-separator />
                <q-card-section class="text-center text-h6">
                  $150 / Month
                </q-card-section>
                <q-separator />
                <q-card-section class="membership-card-details">
                  8 AM - 5 PM Weekday Access <br />
                  Open Seating in the Business Lounge <br />
                  High Speed Wifi  <br />
                  <br />
                  4 Conference Room Hours / Month <br />
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
                  24/7 Building Access<br />
                  Open Seating in the Business Lounge <br />
                  High Speed Wifi  <br />  
                  <br />
                  10 Conference Room Hours / Month <br />
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
                  <span style="color:#5B6770;">Small Office</span> <br />
                  <span class="text-h6">$400 / Month</span> <br />
                  <span style="color:#5B6770;">Lakeview Office</span> <br />
                  <span class="text-h6">$600 / Month</span> <br />
                </q-card-section>
                <q-separator />
                <q-card-section class="membership-card-details">
                  24/7 Building Access<br />
                  Access to Kitchen and Business Lounge <br />
                  High Speed Wifi  <br />    
                  <br />
                  4 Conference Room Hours / Month <br />
                </q-card-section>
              </q-card>
            </div>
        </div>
    </div>
    <br />
    <hr class="hr" />
    <!-- <div class="row text-h4" id="schedule-tour-row">
      <span id=""><b>Schedule a tour</b> to explore our facility.</span>
    </div> -->
    <div class="row q-ma-xl" ref="contact">
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
            <q-icon name="phone" /> 217-123-4567  
            <br />
            <q-icon name="email" /> info@quincyworx.com
          </p>
        </div>
        <div class="text-center">
          <q-btn class="q-px-xl q-my-md" size="lg" style="background: #FBA504; color: white" rounded @click="joinNow">
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
      slideImages:[
        // {
        //   name: "building_1",
        //   src: new URL("assets/building-images/building_1.jpg", import.meta.url)
        // },
        {
          name: "building_2",
          src: new URL("assets/building-images/building_2.jpg", import.meta.url)
        },
        {
          name: "building_3",
          src: new URL("assets/building-images/building_3.jpg", import.meta.url)
        },
        {
          name: "building_4",
          src: new URL("assets/building-images/building_4.jpg", import.meta.url)
        },
        {
          name: "building_5",
          src: new URL("assets/building-images/building_5.jpg", import.meta.url)
        },
        {
          name: "building_6",
          src: new URL("assets/building-images/building_6.jpg", import.meta.url)
        },
        {
          name: "building_7",
          src: new URL("assets/building-images/building_7.jpg", import.meta.url)
        },
        {
          name: "building_8",
          src: new URL("assets/building-images/building_8.jpg", import.meta.url)
        },
        {
          name: "building_9",
          src: new URL("assets/building-images/building_9.jpg", import.meta.url)
        },
        {
          name: "building_10",
          src: new URL("assets/building-images/building_10.jpg", import.meta.url)
        }
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
      alert("TODO: Join now.") 
    }
  }
})
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

  .hr {
    border-top: 1px solid #E5E5E5;
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