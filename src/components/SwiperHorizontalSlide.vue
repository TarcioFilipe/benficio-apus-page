<template>
  <v-container>
    <p class="text-2xl font-bold mt-4">{{ title }}</p>
  </v-container>

  <swiper :slides-per-view="'auto'" :space-between="24" :grab-cursor="true" :free-mode="true" class="py-8 px-4">
    <swiper-slide v-for="(item, index) in items" :key="item.name" :style="{ width: isMobile ? '288px' : '388px' }">
      <div class="flex flex-col bg-card rounded-3xl card-hover border-2 border-border hover:border-primary/80">
        <div class="px-6 py-8 sm:p-10 sm:pb-6">
          <div class="grid items-center justify-center w-full grid-cols-1 text-left">
            <div>
              <div class="flex flex-row w-full items-center justify-between">
                <h2 class="text-lg font-medium tracking-tighter text-card-foreground lg:text-3xl">
                  {{ item.name }}
                </h2>
                <img :src="item.image" alt=""
                  class="p-2 inline-block size-14 lg:size-18 rounded-full ring-2 ring-white/60 outline -outline-offset-1 outline-black/5 object-contain" />
              </div>
              <p class="mt-1 text-sm text-card-muted-foreground">{{ item.description }}</p>
            </div>
          </div>
        </div>
        <div class="flex px-6 pb-8 sm:px-8">
          <button aria-describedby="tier-company" class="flex items-center justify-center w-full px-6 py-2.5 text-center 
                text-card-foreground duration-200 bg-muted border-2 border-muted rounded-full nline-flex 
                hover:bg-transparent! hover:border-foreground hover:text-card-muted-foreground! focus:outline-none"
            @click="handleClick('')">
            Ver benefício
          </button>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/free-mode";

export default {
  name: "SwiperHorizontalSlide",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isMobile: false,
      isHoveredItem: null,
    };
  },
  mounted() {
    this.isMobile = window.innerWidth <= 768;
  },
  methods: {
    handleClick(item) {
      this.$emit("view-benefit", item);
    },
    toggleMobileHover(index) {
      if (!this.isMobile) return;
      this.isHoveredItem = this.isHoveredItem === index ? null : index;
    },
  },
};
</script>

<style></style>
