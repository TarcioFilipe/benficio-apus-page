<template>
  <div class="flex flex-col">
    <v-container class="py-0">
      <p class="text-2xl font-bold mt-4">{{ title }}</p>
    </v-container>

    <div class="flex overflow-x-auto scroll-smooth" style="scrollbar-width: none;" ref="scrollContainer"
      @mousedown="startDrag" @mousemove="onDrag" @mouseup="stopDrag" @mouseleave="stopDrag"
      :style="{ cursor: isDragging ? 'grabbing' : 'grab' }">
      <v-container class="flex flex-row gap-4 lg:gap-4 pb-8">
        <div v-for="(item, index) in items" :key="item.name"
          class="flex flex-col min-w-[288px] lg:min-w-[388px] p-4 rounded-2xl group relative"
          @click="toggleMobileHover(index)">
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
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HorizontalCardSlider',
  props: {
    title: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      isDragging: false,
      startX: 0,
      scrollLeft: 0,
      isMobile: false,
      isHoveredItem: null
    }
  },
  mounted() {
    this.isMobile = window.innerWidth <= 768
  },
  methods: {
    handleClick(item) {
      this.$emit('view-benefit', item)
    },
    toggleMobileHover(index) {
      if (!this.isMobile) return
      this.isHoveredItem = this.isHoveredItem === index ? null : index
    },
    startDrag(e) {
      this.isDragging = true
      this.startX = e.pageX - this.$refs.scrollContainer.offsetLeft
      this.scrollLeft = this.$refs.scrollContainer.scrollLeft
    },
    onDrag(e) {
      if (!this.isDragging) return
      const x = e.pageX - this.$refs.scrollContainer.offsetLeft
      const walk = x - this.startX
      this.$refs.scrollContainer.scrollLeft = this.scrollLeft - walk
    },
    stopDrag() {
      this.isDragging = false
    }
  }
}
</script>

<style>
.card-hover {
  transition: all 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}
</style>