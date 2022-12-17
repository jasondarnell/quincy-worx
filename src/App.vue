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
        <div class="text-center text-h3 q-ma-lg ">
          <q-btn class="q-px-lg" size="xl" color="orange" rounded>
              Join
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
      <div class="col-1" />
      <div class="col-4 q-mt-lg">
        <q-img 
          :src="getImageUrl('assets/building-images/building_11.jpg')" 
          style="border-radius: 50%; width:22vw; height:22vw;"
          />
      </div>
      <div class="col-6 text-center q-mt-lg">
          <p class="text-h5">
            About Quincy Worx - Co-Working and Meeting Space
          </p>
          <p>
            The Foundry on Main is a Dynamic Cowork Space on North Main Street in Evansville, IN offering an office environment for individuals that work remotely and for small companies in need of office space. Inspiring creativity, collaboration, and providing a positive environment for small, growing businesses to thrive.
          </p>
      </div>
      <div class="col-1" />
    </div>
    <div class="row">
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