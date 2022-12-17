<template>
    <q-layout >
    <q-header class="q-pa-md transparent">
      <!-- Navbar content goes here -->
        <q-toolbar>
          <q-toolbar-title class="text-h5" style="font-family:Nunito">
            Quincy Worx
          </q-toolbar-title>
          <q-btn flat>
            Amentities
          </q-btn>
          <q-btn flat>
            Gallery
          </q-btn>
          <q-btn flat>
            Memberships
          </q-btn>
          <q-btn flat>
            Contact
          </q-btn>
          <q-separator vertical />
          <q-btn flat>
            Member Login
          </q-btn>
        </q-toolbar>
        <br />
        <div class="text-center text-h3 q-ma-lg">
          Quincy's Premiere Coworking Space
        </div>
        <br />
        <div class="text-center q-ma-lg ">
          <q-btn class="q-px-xl" size="lg" color="orange" rounded>
              <span class="text-subtitle1" style="text-transform: none">Join Now</span>
          </q-btn>
        </div>
    </q-header>
    <q-page-container class="relative-position" style="height: 500px;">
      <img 
        :src="getImageUrl('assets/building-images/building_10.jpg')" 
        class="absolute-position darken" 
        style="width: 100%; height: 100%;" 
        />
    </q-page-container>

    <div class="row q-ma-lg">
      <div class="col-md-1" />
      <div class="col-md-4 q-mt-lg text-center">
        <q-img 
          :src="getImageUrl('assets/building-images/building_11.jpg')" 
          style="border-radius: 50%; width:22vw; height:22vw;"
          />
      </div>
      <div class="col-md-6 q-mt-lg">
        <div class="text-center">
          <p class="text-h5 " >
            Quincy Worx Amenities
          </p>
          <p>
            Quincy Worx Space provides a Flexible Solution for professionals looking for a Better Alternative Work Environment, Collaboration, Networking, Increased Creativity, and Amenities to promote High Productivity for success. 
          </p>
        </div>
          <div class="row">
              <div class="col-md-6">
                <ul>
                  <li>Internet Access</li>
                  <li>Printer, Copier, Scanner</li>
                  <li>Conference Room</li>
                  <li>Coffee/Tea</li>
                  <li></li>
                </ul>
              </div>
              <div class="col-md-6">
                <ul>
                  <li>Internet Access</li>
                  <li>Printer, Copier, Scanner</li>
                  <li>Conference Room</li>
                  <li>Coffee/Tea</li>
                  <li></li>
                </ul>
              </div>
          </div>
      </div>
      <div class="col-md-1" />
    </div>
    <div class="row" >
      <div class="col-3"></div>
      <div class="col-6">
        <q-carousel
          v-model="slide"
          transition-prev="slide-right"
          transition-next="slide-left"
          animated
          navigation
          control-type="flat"
          control-color="grey"
          class="rounded-borders q-mx-lg"
        >
          <q-carousel-slide
            v-for="slideImage in slideImages"
            :key="slideImage.name"
            :name="slideImage.name"
            class="column no-wrap flex-center q-pt-none"
          >
            <q-img :src="getImageUrl(slideImage.src)" spinner-color="white" />
          </q-carousel-slide>
        </q-carousel> -->

        <div class="row justify-center">
          <q-btn-toggle glossy v-model="slide" :options="toggleOptions" />
        </div>
      </div>
      <div class="col-3"></div>
    </div>
    <div class="row q-ma-lg">
      <div class="col-md-6 q-mt-lg">
        <div class="q-ma-lg">
          <p class="text-h5 text-center" >
            Quincy Worx
          </p>
          <p class="text-subtitle1">
            3701 East Lake Center <br />
            Suite 1 <br />
            Quincy, Illinois <br /> 
            62305 <br />
            <br />
            Phone: 217-123-4567      
          </p>
        </div>
      </div>
      <div class="col-md-6 q-mt-lg text-center">
        <q-img 
          :src="getImageUrl('assets/building-images/building_1.jpg')" 
          style="border-radius: 50%; width:25vw; height:25vw;"
          />
      </div>
    </div>
    <v-row>
      <q-toolbar style="background-color:#222222; color: white;">
        <q-space />
        <span class="text-caption">
          Copyright © 2022 - Quincy Worx
        </span>
        <q-space />

          <q-btn flat size="sm">
            Member Login
          </q-btn>
          <!-- <q-icon name="cancel" color="white" /> -->
      </q-toolbar>
    </v-row>
  </q-layout>
</template>


<script>
import { defineComponent, ref } from 'vue'


const getImageUrl = (url) => {
      return new URL(url, import.meta.url).href
  }

export default defineComponent({
  name: 'App',
  setup(){
    return {
      getImageUrl,
      slideImages:[
        {
          name: "building_1",
          src: "assets/building-images/building_1.jpg"
        },
        {
          name: "building_2",
          src: "assets/building-images/building_2.jpg"
        },
        {
          name: "building_3",
          src: "assets/building-images/building_3.jpg"
        }
      ],
      slide: ref('building_1'),
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo provident incidunt ducimus iusto perferendis porro earum. Totam, numquam?'
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

  .darken {
    filter: brightness(40%);
  }

    .relative-position {
    position: relative;
  }
  .absolute-position {
    position: absolute;
    top: 0;
    left: 0;
  }
</style>