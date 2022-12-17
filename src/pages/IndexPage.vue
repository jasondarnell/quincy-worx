<template>
  <q-page style="background-color: #D5D1D2">
    <br />
    <div class="row text-center q-pa-lg">
      <div class="col-3"></div>
      <div class="col-6 text-h4 text-weight-bold">Quincy Worx - Co-Working and Meeting Space</div>
      <div class="col-3"></div>
    </div>
    <div class="row text-center q-ma-sm">
      <div class="col-3"></div>
      <div
        class="col-6 text-subtitle1"
      >3701 East Lake Center | Suite 1 | Quincy Il 62305 United States</div>
      <div class="col-3"></div>
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
        </q-carousel>

        <!-- <div class="row justify-center">
          <q-btn-toggle glossy v-model="slide" :options="toggleOptions" />
        </div>-->
      </div>
      <div class="col-3"></div>
    </div>

    <br />
    <div class="row text-center" style="background-color: #F5F2F0">
      <div class="col-3"></div>
      <div class="col-6">
        Quincy Worx is a NEW WORKING EXPERIENCE! QW is a welcoming, professionally designed Co-Working & Shared Office Space.
        Email: Info@QuincyWorx.com
        Quincy Worx Space provides a Flexible Solution for professionals looking for a Better Alternative Work Environment, Collaboration, Networking, Increased Creativity, and Amenities to promote High Productivity for success.
        Built for Work From Home & Mobile Professionals | New Business - Start-up | Corporate Staff with needs of a Team Meeting Location | Needing a Conference Meeting Space or Hosting an Event | Quincy Worx is your Best Option.
        Amenities
        Internet Access, Printer, Copier, Scanner, Conference Room, Coffee/Tea, Fridge, Microwave, Parking, Kitchen
        Open Hours
        Monday - Friday 8am-5pm | 24/7 Access to Worx Pro or Private Office Plans | Bookings for Meeting, Conference, or Event Rooms as Scheduled
        Location
        3701 East Lake Center | Suite 1 | Quincy Il 62305 United States
      </div>
      <div class="col-3"></div>
    </div>
    <br />
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'

const getImageUrl = (url) => {
      return new URL(url, import.meta.url).href
  }

export default defineComponent({
  name: 'IndexPage',
  setup(){
    return {
      getImageUrl,
      slideImages:[
        {
          name: "building_1",
          src: "../assets/building-images/building_1.jpg"
        },
        {
          name: "building_2",
          src: "../assets/building-images/building_2.jpg"
        },
        {
          name: "building_3",
          src: "../assets/building-images/building_3.jpg"
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
