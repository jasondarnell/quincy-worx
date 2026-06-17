<template>
  <q-layout>
    <div class="floating-toolbar">
      <q-toolbar v-if="isMobile" style="position: sticky; top: 0" color="">
        <q-space />
        <q-btn flat @click="toggleDrawer" round size="lg" icon="menu" />
      </q-toolbar>

    </div>
    <q-header v-if="!isMobile" class="q-pa-md transparent" style="z-index:10;">
      <!-- Navbar content goes here -->
      <q-toolbar>
        <q-toolbar-title class="text-h5" style="font-family:Nunito">
          <q-img height="80px" width="80px" src="~assets/logo.png" />
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
        <q-btn flat @click="goTo('testimonialsSection')">
          Reviews
        </q-btn>
        <q-btn flat @click="goTo('faq')">
          FAQ
        </q-btn>
        <q-btn flat @click="goTo('contact')">
          Contact
        </q-btn>
        <q-separator vertical />
        <q-btn flat href="https://quincyworx.skedda.com/">
          Member Login
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-drawer v-if="isMobile" v-model="drawer" bordered class="mobile-only bg-grey-1">
      <!-- 
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
          </q-btn> -->

      <q-list padding class="text-center">

        <q-item>
          <div class="text-h5" style="font-family:Nunito">
            <q-img height="80px" width="80px" src="~assets/logo.png" />
            Quincy Worx
          </div>
        </q-item>
        <q-separator />

        <q-item clickable @click="goTo('amenities')">
          <q-item-section>
            Amenities
          </q-item-section>
        </q-item>

        <q-item clickable @click="goTo('gallery')">
          <q-item-section>
            Gallery
          </q-item-section>
        </q-item>

        <q-item clickable @click="goTo('memberships')">
          <q-item-section>
            Pricing
          </q-item-section>
        </q-item>
        <q-item clickable @click="goTo('testimonialsSection')">
          <q-item-section>
            Reviews
          </q-item-section>
        </q-item>
        <q-item clickable @click="goTo('faq')">
          <q-item-section>
            FAQ
          </q-item-section>
        </q-item>
        <q-item clickable @click="goTo('contact')">
          <q-item-section>
            Contact
          </q-item-section>
        </q-item>

        <q-separator />
        <q-item clickable tag="a" href="https://quincyworx.skedda.com/" target="_blank">
          <q-item-section>
            Member Login
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container class="relative-position" style="height: 70vh;">
      <!-- src="~assets/building-images/building_10.jpg"  -->
      <!-- 
      <img 
        id="hero"
        class="absolute-position darken" 
        style="width: 100%; height: 100%;" 
        /> -->

      <img id="hero" />
      <div class="hero-content">
        <div class="text-center hero-title q-ma-lg">
          Quincy's Premiere Coworking Space
        </div>
        <q-btn class="q-px-xl q-my-md" size="lg" style="background: #FFD700" rounded @click="joinNow"
          href="javascript:void( window.open( 'https://form.jotform.com/230655747373059', 'blank', 'scrollbars=yes, toolbar=no, width=700, height=500' ) )">
          <span class="text-subtitle1" style="text-transform: none;color:black;font-weight:bold;">Join Now</span>
        </q-btn>
      </div>
    </q-page-container>

    <hr class="hr" />

    <div class="row q-pa-lg justify-center" style="background: #FAFAFA">
      <div class="col-md-4 col-12 q-mt-lg mobile-hide">
        <div class="justify-center">
          <q-img src="~assets/building-images/building_11.jpg" style="border-radius: 50%; width:22vw; height:22vw;" />
        </div>
      </div>
      <div class="col-md-6 q-mt-lg">
        <div class="text-center">
          <p class="about-lead">
            We are a Coworking and shared office space with incredible amenities, flexible plans, and an unmatched
            experience. </p>
          <p class="text-body1 body-copy">
            At Quincy Worx we offer varied and affordable Meeting Spaces to support our community. Including Day Passes
            (desk/office), conference & boardrooms, event/training space, and Private Offices with flexible solutions
            for professionals looking for an alternative work environment. Quincy Worx is collaborative and encourages
            networking, increased creativity, and amenities to promote high productivity for success.
          </p>
        </div>
      </div>
    </div>

    <hr class="hr" />

    <div ref="amenities" class="justify-center  amenity-icon q-py-lg q-px-md" style="background: #F1F2F2; ">
      <div class="row justify-center text-h5  q-pa-lg">
        Amenities
      </div>

      <div class="row text-center q-pa-lg justify-center">
        <div class="col-md-2 col-6 q-my-sm amenity-item">
          <q-icon name="wifi" size="lg" />
          <div class="text-subtitle1">Professional Wifi</div>
        </div>
        <div class="col-md-2 col-6 q-my-sm amenity-item">
          <q-icon name="chair" size="lg" />
          <div class="text-subtitle1">Open Seating</div>
        </div>
        <div class="col-md-2 col-6 q-my-sm amenity-item">
          <q-icon name="coffee" size="lg" />
          <div class="text-subtitle1">Free Coffee, Snacks, and Beverages</div>
        </div>
        <div class="col-md-2 col-6 q-my-sm amenity-item">
          <q-icon name="restaurant" size="lg" />
          <div class="text-subtitle1">Shared Kitchen</div>
        </div>
        <div class="col-md-2 col-6 q-my-sm amenity-item">
          <q-icon name="print" size="lg" />
          <div class="text-subtitle1">Printer, Copier, Scanner</div>
        </div>
        <div class="col-md-2 col-6 q-my-sm amenity-item">
          <q-icon name="support_agent" size="lg" />
          <div class="text-subtitle1">Receptionist</div>
        </div>
      </div>

    </div>


    <hr class="hr" />

    <div style="background: #FFFFFF" class="q-pa-lg">
      <div class="row text-center" ref="memberships">
        <q-space />
        <div class="col-md-6">
          <div class="text-h5">Options For Growing Teams</div>
          <p class="text-body1 body-copy q-mt-sm">
            At Quincy Worx, we believe that choosing the right Cowork Space should be stress-free. We’ve built our
            memberships to be as flexible and responsive as possible, with options for individuals and entrepreneurs, from
            private offices to shared workspace. All members have access to extensive amenities and services, specifically
            created with entrepreneurs in mind, so you can focus on the important things.
          </p>
        </div>
        <q-space />
      </div>
      <div class="text-center q-mt-lg text-h5">
        Memberships
      </div>
      <div class="row q-pa-md">
        <div class="col-md-3 col-12 q-my-sm">
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
              High Speed Wifi <br />
              Unlimited Coffee, Beverages, and Snacks <br />
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-3 col-12 q-my-sm">
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
              High Speed Wifi <br />
              Unlimited Coffee, Beverages, and Snacks <br />
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-3 col-12 q-my-sm">
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
              All Amenities<br />
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
        <div class="col-md-3 col-12 q-my-sm">
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
              All Amenities<br />
              24/7 Building Access<br />
              Conference Room Availability <br />
            </q-card-section>
          </q-card>
        </div>
      </div>
      <hr class="hr q-my-xl" />
      <div class="text-center q-mt-lg text-h5">
        Room Rentals
      </div>
      <div class="row q-pa-md">
        <div class="col-md-3 col-12 q-my-sm">
          <q-card class="q-ma-md membership-card">
            <q-card-section class="room-card-header">
              <div class="text-h6">Day Office</div>
            </q-card-section>
            <q-separator />
            <q-card-section class="text-center">
              <span class="text-h6">$20 / Hour </span><br />
              <span style="color:#5B6770;">Half and full day rates available</span>
            </q-card-section>
            <q-separator />
            <q-card-section class="membership-card-details">
              Offering a private, more intimate space to meet with a client or work productively.
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-3 col-12 q-my-sm">
          <q-card class="q-ma-md membership-card">
            <q-card-section class="room-card-header">
              <div class="text-h6">Conference Room</div>
            </q-card-section>
            <q-separator />
            <q-card-section class="text-center">
              <span class="text-h6">$30 / Hour </span><br />
              <span style="color:#5B6770;">Half and full day rates available</span>
            </q-card-section>
            <q-separator />
            <q-card-section class="membership-card-details">
              This space offers the perfect environment for standard or virtual meetings. Seats up to 6 people.
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-3 col-12 q-my-sm">
          <q-card class="q-ma-md membership-card">
            <q-card-section class="room-card-header">
              <div class="text-h6">Executive Board Room</div>
            </q-card-section>
            <q-separator />
            <q-card-section class="text-center">
              <span class="text-h6">$30 / Hour </span><br />
              <span style="color:#5B6770;">Half and full day rates available</span>
            </q-card-section>
            <q-separator />
            <q-card-section class="membership-card-details">
              We offer a
              professional space to
              seat up to 8 people
              for meetings with
              clients or teams.
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-3 col-12 q-my-sm">
          <q-card class="q-ma-md membership-card">
            <q-card-section class="room-card-header">
              <div class="text-h6">Event Room</div>
            </q-card-section>
            <q-separator />
            <q-card-section class="text-center">
              <span class="text-h6">$60 / Hour </span><br />
              <span style="color:#5B6770;">Half and full day rates available</span>
            </q-card-section>
            <q-separator />
            <q-card-section class="membership-card-details">
              We have
              flexible seating styles, with
              a large monitor. This
              space is perfect for your
              next training day,
              luncheon or anything in
              between.
            </q-card-section>
          </q-card>
        </div>

      </div>
      <!-- <div class="text-center q-mt-lg text-h5">
          Room Rentals
        </div>
        <div class="row q-pa-md">
            <div class="col-md-3 col-12 q-my-sm">
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
            <div class="col-md-3 col-12 q-my-sm">
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
            <div class="col-md-3 col-12 q-my-sm">
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
                  All Amenities<br />
                  24/7 Building Access<br />
                  Conference Room Availability <br />
                </q-card-section>
              </q-card>
            </div>
            <div class="col-md-3 col-12 q-my-sm">
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
                  All Amenities<br />
                  24/7 Building Access<br />
                  Conference Room Availability <br />
                </q-card-section>
              </q-card>
            </div>
        </div> -->
    </div>

    <hr class="hr " />

    <div style="background: #FAFAFA" ref="gallery" class="">
      <div class="text-center q-pa-lg text-h5">
        Gallery
      </div>
      <div class="row justify-center">
        <div class="col-12 col-md-8">
          <q-carousel v-model="slide" transition-prev="slide-right" transition-next="slide-left" animated navigation
            padding arrows control-type="flat" control-color="grey" class="rounded-borders" style="background: #FAFAFA">
            <q-carousel-slide v-for="slideImage in slideImages" :key="slideImage.name" :name="slideImage.name"
              class="column no-wrap flex-center q-pt-none">
              <!-- <q-img :src="getImageUrl(slideImage.src)" spinner-color="white" /> -->
              <q-img :src="slideImage.src" spinner-color="white" fit="contain" style="max-height: 600px; width: 100%;" />
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
          <q-video :src="videoSrc" :ratio="16 / 9" />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Close" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>


    <hr class="hr" />

    <div ref="testimonialsSection" style="background: #F1F2F2">
      <div class="text-center q-pa-lg text-h5">
        What Our Members Are Saying
      </div>
      <div class="row justify-center q-pb-xl">
        <div class="col-12 col-md-10 q-px-md">
          <div class="testimonial-columns">
            <q-card v-for="testimonial in testimonials" :key="testimonial.name" class="testimonial-card">
              <q-card-section class="testimonial-body">
                <q-rating :model-value="5" readonly size="1.4em" color="amber" icon="star" />
                <p v-for="(paragraph, idx) in testimonial.paragraphs" :key="idx"
                  class="testimonial-text q-mt-md q-mb-none">
                  {{ paragraph }}
                </p>
              </q-card-section>
              <q-separator />
              <q-card-section class="testimonial-author">
                — {{ testimonial.name }}
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </div>

    <hr class="hr" />

    <div ref="faq" style="background: #FFFFFF">
      <div class="text-center q-pa-lg text-h5">
        Frequently Asked Questions
      </div>
      <div class="row justify-center q-pb-xl">
        <div class="col-12 col-md-8 q-px-md">
          <q-list class="faq-list">
            <template v-for="(faq, idx) in faqs" :key="faq.question">
              <q-separator v-if="idx > 0" />
              <q-expansion-item :label="faq.question"
                header-class="faq-question text-subtitle1 text-weight-medium">
                <q-card>
                  <q-card-section class="faq-answer">
                    {{ faq.answer }}
                  </q-card-section>
                </q-card>
              </q-expansion-item>
            </template>
          </q-list>
        </div>
      </div>
    </div>

    <hr class="hr" />
    <!-- <div class="row text-h4" id="schedule-tour-row">
      <span id=""><b>Schedule a tour</b> to explore our facility.</span>
    </div> -->
    <div style="">
      <div class="row q-pa-xl" ref="contact">
        <div class="col-md-6 text-center">
          <div class="">
            <p class="text-h5 text-center">
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
            <p class="text-subtitle1">
              <q-btn flat round icon="fab fa-facebook" style="color: #1877F2" type="a"
                href="https://www.facebook.com/QuincyWorx" target="_blank" aria-label="Quincy Worx on Facebook" />
              <q-btn flat round icon="fab fa-linkedin" style="color: #0A66C2" type="a"
                href="https://www.linkedin.com/in/quincy-worx-premiere-coworking-space-and-meeting-rooms-62a174227"
                target="_blank" aria-label="Quincy Worx on LinkedIn" />
            </p>
          </div>
          <div class="text-center">
            <q-btn class="q-px-xl q-my-md" size="lg" style="background: #FFD700; color: white" rounded @click="joinNow"
              href="javascript:void( window.open( 'https://form.jotform.com/230655747373059', 'blank', 'scrollbars=yes, toolbar=no, width=700, height=500' ) )">
              <span class="text-subtitle1" style="text-transform: none;color:black;font-weight:bold;">Join Now</span>
            </q-btn>

          </div>
        </div>
        <div class="col-md-6 text-center">
          <q-img src="~assets/building-images/building_1.jpg" />
        </div>
        <div class="col-12 q-mt-lg text-center">
          <iframe
            src="https://maps.google.com/maps?q=3701+E+Lake+Center,+Quincy,+IL+62305&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="300"
            style="border:0; max-width: 600px;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </div>

    <div class="row">
      <q-toolbar style="background-color:#222222; color: white;">
        <q-space />
        <span class="text-caption">
          Copyright © {{ currYear }} - Quincy Worx
        </span>
        <q-btn flat round size="sm" icon="fab fa-facebook" type="a" href="https://www.facebook.com/QuincyWorx"
          target="_blank" aria-label="Quincy Worx on Facebook" />
        <q-btn flat round size="sm" icon="fab fa-linkedin" type="a"
          href="https://www.linkedin.com/in/quincy-worx-premiere-coworking-space-and-meeting-rooms-62a174227"
          target="_blank" aria-label="Quincy Worx on LinkedIn" />
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
    setup() {
      return {
        // getImageUrl,
        isMobile: ref(false),
        drawer: ref(false),
        showVideo: ref(false),
        joinDialog: ref(false),
        videoSrc: new URL("assets/video/qw_walk_thru.mp4", import.meta.url),
        slideImages: [
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
            name: "day_office",
            src: new URL("assets/day_office.jpg", import.meta.url)
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
        faqs: [
          {
            question: "What is a coworking space and who uses it?",
            answer: "A shared office environment where business professionals and/or companies can rent desks or offices with free access to amenities. Ideal members include freelancers, remote workers, startups, small businesses, consultants, digital nomads, and even larger companies."
          },
          {
            question: "What types of memberships are available and what's included?",
            answer: "Private office, day pass, and flexible use package. All amenities are included: professional Wi-Fi, utilities, meeting rooms, coffee/tea, snacks, community events, kitchen, receptionist, and access Monday - Friday 8 AM - 5 PM. Some memberships include 24/7 access, especially private offices or dedicated desk plans."
          },
          {
            question: "How can a coworking space help my business grow?",
            answer: "Networking, professional setting, flat rate/budgeted costs, access to resources, and business exposure. Quincy Worx provides structure, reduces isolation, and increases productivity. Quincy Worx hosts many social events, workshops, and collaboration opportunities."
          },
          {
            question: "Is there a long-term lease or commitment?",
            answer: "Quincy Worx offers flexible month-to-month memberships, though discounts may apply for longer terms."
          },
          {
            question: "Do I have to pay a deposit?",
            answer: "No – Quincy Worx does not require a security deposit."
          },
          {
            question: "Are meeting rooms available?",
            answer: "Yes — usually available for booking, often included with membership (depending on the plan)."
          },
          {
            question: "Is it quiet enough to focus, work, and take calls?",
            answer: "Quincy Worx has quiet zones and meeting rooms for focused work and privacy."
          },
          {
            question: "Will I get my own desk or is it first-come, first-served?",
            answer: "Depends on your membership — hot desks in the Lounge/Cafe are shared; bookable meeting rooms and private offices are reserved."
          }
        ],
        testimonials: [
          {
            name: "Erica Wagner",
            paragraphs: [
              "I can’t say enough great things about this co-working space in Quincy. I found it unexpectedly while in town for a family emergency, and it truly became a lifeline during a very stressful time. I initially reserved one month but found it so comfortable I was able to extend my reservation for another, and having a reliable, welcoming place to work remotely has made all the difference.",
              "The space is clean, quiet, and well-equipped, with everything I needed to stay productive. The atmosphere is professional but still warm and inviting, which helped me stay focused while also feeling supported during a difficult period.",
              "What stood out most was how accommodating and kind everyone was. It didn’t feel like just a workspace — it felt like a community.",
              "If you’re ever in Quincy and need a place to work, whether short-term or longer, I highly recommend this spot. It exceeded my expectations and gave me one less thing to worry about when I needed it most."
            ]
          },
          {
            name: "Sara Fischer",
            paragraphs: [
              "I needed a space to work for a few days and they were able to accommodate! They were very responsive during the reservation process and were very helpful when I arrived to ensure I had everything I needed. The space was comfortable and had plenty of amenities available. I will be utilizing them again for future needs!"
            ]
          },
          {
            name: "Heather Hoffman",
            paragraphs: [
              "I absolutely love this office space. The environment is clean, modern, quiet, and welcoming — exactly what I want for my patients. The layout is thoughtful and professional, creating a calm and comfortable setting that puts people at ease the moment they walk in.",
              "As a provider, I appreciate how seamless the experience has been. It’s clear that a lot of care goes into maintaining a space that supports both professionals and the clients they serve. I’m very happy to be seeing my patients here and would highly recommend this office to anyone looking for a professional, welcoming space."
            ]
          },
          {
            name: "Jennifer Ringwelski",
            paragraphs: [
              "I needed a transitional, co-working space for a change in environment for work and Quincy Worx has been a great fit for that need. They provide a nice, quiet and comfortable working space with nice amenities. There are optional conference spaces available for rent as well so it's flexible for single or groups of workers. They also provide networking opportunities for small businesses and professionals."
            ]
          }
        ],
      }
    },
    mounted() {
      console.log("this.$q.platform", this.$q.platform)
      this.isMobile = this.$q.platform.is.mobile;
    },
    computed: {
      toggleOptions() {
        return this.slideImages.map((slideImage, idx) => {
          return {
            label: idx + 1,
            value: slideImage.name
          }
        })
      },
      currYear() {
        const d = new Date();
        return d.getFullYear().toString();
      }
    },
    methods: {
      goTo(ref) {
        this.drawer = false;
        setTimeout(() => {
          this.$refs[ref].scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'start'
          }, 100)
        })
      },
      joinNow() {
        // this.joinDialog = true;
        // window.open( 'https://form.jotform.com/230655747373059', 'scrollbars=yes, toolbar=no, width=700, height=500' )
      },
      toggleDrawer() {
        this.drawer = !this.drawer
      }
    }
  })


  let iframe;
  let handleIFrameMessage;
  let ifr = document.getElementById("JotFormIFrame-230655747373059"); if (ifr) { var src = ifr.src; var iframeParams = []; if (window.location.href && window.location.href.indexOf("?") > -1) { iframeParams = iframeParams.concat(window.location.href.substr(window.location.href.indexOf("?") + 1).split('&')); } if (src && src.indexOf("?") > -1) { iframeParams = iframeParams.concat(src.substr(src.indexOf("?") + 1).split("&")); src = src.substr(0, src.indexOf("?")) } iframeParams.push("isIframeEmbed=1"); ifr.src = src + "?" + iframeParams.join('&'); } window.handleIFrameMessage = function (e) { if (typeof e.data === 'object') { return; } var args = e.data.split(":"); if (args.length > 2) { iframe = document.getElementById("JotFormIFrame-" + args[(args.length - 1)]); } else { iframe = document.getElementById("JotFormIFrame"); } if (!iframe) { return; } switch (args[0]) { case "scrollIntoView": iframe.scrollIntoView(); break; case "setHeight": iframe.style.height = args[1] + "px"; if (!isNaN(args[1]) && parseInt(iframe.style.minHeight) > parseInt(args[1])) { iframe.style.minHeight = args[1] + "px"; } break; case "collapseErrorPage": if (iframe.clientHeight > window.innerHeight) { iframe.style.height = window.innerHeight + "px"; } break; case "reloadPage": window.location.reload(); break; case "loadScript": if (!window.isPermitted(e.origin, ['jotform.com', 'jotform.pro'])) { break; } var src = args[1]; if (args.length > 3) { src = args[1] + ':' + args[2]; } var script = document.createElement('script'); script.src = src; script.type = 'text/javascript'; document.body.appendChild(script); break; case "exitFullscreen": if (window.document.exitFullscreen) window.document.exitFullscreen(); else if (window.document.mozCancelFullScreen) window.document.mozCancelFullScreen(); else if (window.document.mozCancelFullscreen) window.document.mozCancelFullScreen(); else if (window.document.webkitExitFullscreen) window.document.webkitExitFullscreen(); else if (window.document.msExitFullscreen) window.document.msExitFullscreen(); break; } var isJotForm = (e.origin.indexOf("jotform") > -1) ? true : false; if (isJotForm && "contentWindow" in iframe && "postMessage" in iframe.contentWindow) { var urls = { "docurl": encodeURIComponent(document.URL), "referrer": encodeURIComponent(document.referrer) }; iframe.contentWindow.postMessage(JSON.stringify({ "type": "urls", "value": urls }), "*"); } }; window.isPermitted = function (originUrl, whitelisted_domains) { var url = document.createElement('a'); url.href = originUrl; var hostname = url.hostname; var result = false; if (typeof hostname !== 'undefined') { whitelisted_domains.forEach(function (element) { if (hostname.slice((-1 * element.length - 1)) === '.'.concat(element) || hostname === element) { result = true; } }); return result; } }; if (window.addEventListener) { window.addEventListener("message", handleIFrameMessage, false); } else if (window.attachEvent) { window.attachEvent("onmessage", handleIFrameMessage); } 
</script>

<style scoped>

  body {
    position: relative;
    z-index: 0;
  }

  .floating-toolbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1200;
    /* Ensure it sits above the header and other content */
    background-color: transparent;
    /* Ensure toolbar background is visible */
  }

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
    z-index: 0;
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
    color: black;
    text-align: center;
    background: #CBDDEC;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .room-card-header {
    color: white;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
    background: #001F3D
  }

  .membership-card-details {
    color: #5B6770;
    text-align: center;
    font-size: 0.9375rem;
  }

  .amenity-icon {
    color: #5B6770;
  }

  .amenity-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  .hero-title {
    font-size: 3rem;
    line-height: 1.15;
    font-weight: 700;
  }

  .hero-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
  }

  .about-lead {
    font-size: 2.125rem;
    line-height: 1.3;
  }

  .testimonial-columns {
    column-count: 2;
    column-gap: 16px;
  }

  .testimonial-card {
    break-inside: avoid;
    margin-bottom: 16px;
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 31, 61, 0.10);
  }

  .testimonial-text {
    color: #5B6770;
    font-style: italic;
    font-size: 0.9375rem;
    line-height: 1.5;
  }

  .testimonial-author {
    color: #001F3D;
    font-weight: 600;
  }

  .faq-list {
    background: #FFFFFF;
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 31, 61, 0.10);
    overflow: hidden;
  }

  .faq-list :deep(.faq-question) {
    color: #001F3D;
    padding-top: 16px;
    padding-bottom: 16px;
  }

  .faq-list :deep(.q-expansion-item--expanded) .faq-question {
    background: #F1F5F9;
  }

  .faq-answer {
    color: #5B6770;
    border-left: 3px solid #FFD700;
    background: #FAFAFA;
    margin: 12px 16px 16px;
    padding: 12px 16px;
  }

  .hr {
    border-top: 1px solid #D5D5D5;
    margin-top: 0px;
    margin-bottom: 0px;
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

  @media only screen and (max-width: 767px) {
    .hero-title {
      font-size: 1.9rem;
    }

    .testimonial-columns {
      column-count: 1;
    }

    .about-lead {
      font-size: 1.4rem;
    }

    .body-copy {
      text-align: left;
    }

    #hero {
      filter: brightness(70%);
      width: 100%;
      height: 100% !important;
      content: url("assets/building-images/building_5_cropped.jpg") !important;

    }
  }

</style>
