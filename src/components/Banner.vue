<template>
  <v-container>
    <div class="flex flex-col mt-6 mb-6">
      <v-carousel
        :show-arrows="isMobile ? 'visible' : 'hover'"
        height
        cycle
        hide-delimiter-background
        :hide-delimiters="isMobile"
        class="text-white text-sm sm:text-lg"
        reverse-transition="cross-scale"
        transition="cross-scale"
      >
        <template v-slot:prev="{ props }">
          <v-btn
            icon="mdi-chevron-left"
            :size="isMobile ? 'x-small' : 'large'"
            @click="props.onClick"
          >
          </v-btn>
        </template>
        <template v-slot:next="{ props }">
          <v-btn
            icon="mdi-chevron-right"
            :size="isMobile ? 'x-small' : 'large'"
            @click="props.onClick"
          >
          </v-btn>
        </template>
        <v-carousel-item
          v-for="(slide, i) in slides"
          :key="i"
          draggable
        >
          <v-sheet height="100%" color="transparent">
            <div class="flex max-h-[390px] lg:h-full justify-center items-cente ">
              <v-img
                :lazy-src="slide.image"
                :src="slide.image"
                cover
                class="rounded-xl"
              />
            </div>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>
  </v-container>
</template>

<script>
  export default {
    name: 'Banner',
    data() {
      return {
        isMobile: false,
      }
    },
    props: {
      slides: { 
       type: Array,
       required: true
      }
    },
    mounted() {
      this.isMobile = window.innerWidth <= 768
    },
  }
</script>