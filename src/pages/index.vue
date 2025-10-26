<template>
  <div class="w-full h-full mt-4">
    <Banner :slides="slides" />

    <HorizontalSlider :title="'Benefícios mais acessados'" :items="mostAcess" @view-benefit="handleLink" />

    <div class="flex overflow-x-auto mt-6" style="scrollbar-width: none;">
      <v-container class="flex flex-row gap-6 sm:gap-4 md:justify-between lg:max-w-[1440px]">
        <BenefitItem v-for="item in benefits" :icon="item.icon" :link="item.link" :text="item.label"
          :category="item.category" :objectPosition="item.position" />
      </v-container>
    </div>

    <div class="flex flex-col mt-6 lg:mt-8">
      <v-container>
        <v-sheet class="mx-auto mb-6 lg:mt-10 lg:mb-12 overflow-x-auto" max-width="1440" color="transparent">
          <v-slide-group v-model="carrouselSquareModel" show-arrows>
            <v-slide-group-item v-for="item in squareCarrousel" :key="item.image" v-slot="{ }">
              <v-card class="m-4 mx-4 lg:mx-8 rounded-2xl" color="grey-lighten-1" height="250" width="250"
                @click="() => handleLink()">
                <v-img :lazy-src="item.image" :src="item.image" width="100%" height="100%" cover />
              </v-card>
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </v-container>

      <HorizontalSlider :title="'Benefícios mais recentes'" :items="mostRecents" @view-benefit="handleLink" />
    </div>
  </div>
</template>

<script>
import BenefitItem from '@/components/BenefitItem.vue'
import HorizontalSlider from '@/components/HorizontalSlider.vue';

export default {
  components: {
    BenefitItem
  },
  name: 'Home',
  data() {
    return {
      benefits: [
        {
          label: 'Para se divertir',
          icon: 'mdi mdi-emoticon-excited-outline',
          category: 'Lazer',
          link: '',
          position: 'center',
        },
        {
          label: 'Para comer',
          icon: 'mdi mdi-food-outline',
          category: 'Alimentação',
          link: '',
          position: 'center'
        },
        {
          label: 'Lar doce lar',
          icon: 'mdi mdi-home-outline',
          category: 'Para sua casa',
          link: '',
          position: 'center'
        },
        {
          label: 'Cuidados com pet',
          icon: 'mdi mdi-paw-outline',
          category: 'Animais',
          link: '',
          position: 'center',
        },
        {
          label: 'Viagens',
          icon: 'mdi mdi-airplane',
          category: 'Autos',
          link: '',
          position: 'center'
        },
        {
          label: 'Autocuidado',
          icon: 'mdi mdi-medication-outline',
          category: 'Saúde',
          link: '',
          position: 'center'
        },
        {
          label: 'Foco na carreira',
          icon: 'mdi mdi-briefcase-outline',
          category: 'Educação',
          link: '',
          position: '50% 12px'
        },
      ],
      slides: [
        { image: '/images/slides/subWay.png' },
        { image: '/images/slides/casa-do-pao.png' },
        { image: '/images/slides/pizzahut.png' },
        { image: '/images/slides/moovida.png' },
        { image: '/images/slides/drogaria-sao-paulo-slide.png' },
        { image: '/images/slides/nike.png' },
        { image: '/images/slides/petz-slide.jpg' },
        { image: '/images/slides/petz2-slide.jpg' },
      ],
      mostAcess: [
        { image: '/images/mostAcess/Ticket360.png', name: 'Ticket 360', description: 'Para se Divertir' },
        { image: '/images/mostAcess/ClickBus.png', name: 'Click Bus', description: 'Viagens' },
        { image: '/images/mostAcess/Maze.png', name: 'Maze', description: 'Para se Divertir' },
        { image: '/images/mostRecent/Drogasil.png', name: 'Drogasil', description: 'Autocuidado' },
        { image: '/images/mostRecent/centauro.png', name: 'Centauro', description: 'Em qualquer produto da loja' }
      ],
      mostRecents: [
        { image: '/images/mostRecent/Drogasil.png', name: 'Drogasil', description: 'Autocuidado' },
        { image: '/images/mostRecent/Nike.png', name: 'Nike', description: 'Lar doce Lar' },
        { image: '/images/mostRecent/Shopee.png', name: 'Shoope', description: 'Lar doce Lar' },
        { image: '/images/mostRecent/cinemark.png', name: 'Cinemark', description: 'Cinemas e lanches' },
        { image: '/images/mostRecent/petz.png', name: 'Petz', description: 'Benefício na area de pets' },
        { image: '/images/mostRecent/centauro.png', name: 'Centauro', description: 'Em qualquer produto da loja' },
        { image: '/images/mostRecent/carrefour.png', name: 'Carrefour', description: 'Produtos de vestáurio' },
        { image: '/images/mostRecent/drogaria-sao-paulo.png', name: 'Drogaria São Paulo', description: 'Produtos de beleza' },
      ],
      squareCarrousel: [
        { image: '/images/square/cinemark.jpg' },
        { image: '/images/square/nike.png' },
        { image: '/images/square/hering.png' },
        { image: '/images/square/maze.jpg' },
        { image: '/images/square/shopee.png' },
        { image: '/images/square/ze.png' },
        { image: '/images/square/pizza_blackfriday.png' },
        { image: '/images/square/vivara.png' },
        { image: '/images/square/riachuelo.png' },
        { image: '/images/square/sams.png' },
      ],
      carrouselSquareModel: null,
      isDragging: false,
      isHovering: false,
      startX: 0,
      scrollLeft: 0,
    }
  },
  methods: {
    handleLink() {
      window.open("https://cartaomasterclin.com.br/usuarios/cadastro", "_blank")
    }
  }
}
</script>