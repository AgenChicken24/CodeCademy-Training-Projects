<template>
  <div id="app">
    <hello-world name="2277" />
    <splide>
      <splide-slide>
        <img src="image01.jpg">
      </splide-slide>
      <splide-slide>
        <img src="https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg">
      </splide-slide>
      <splide-slide>
        <img src="https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg">
      </splide-slide>
    </splide>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import { Splide, SplideSlide } from '@splidejs/splide/vue-splide';

export default {
  name: 'app',
  components: {
    HelloWorld,
    Splide,
    SplideSlide,
  },
  data() {
    return {
      coverList: [
      {
        cover: 'https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg',
        title: 'React'
      }, {
        cover: 'https://cdn.pixabay.com/photo/2016/02/17/23/03/usa-1206240_1280.jpg',
        title: 'Angular'
      }, {
        cover: 'https://cdn.pixabay.com/photo/2015/05/15/14/27/eiffel-tower-768501_1280.jpg',
        title: 'Vue'
      }, {
        cover: 'https://cdn.pixabay.com/photo/2015/05/15/14/27/eiffel-tower-768501_1280.jpg',
        title: 'Webpack'
      }
    ]
    };
  },
  mounted() {
    this.listener = window.addEventListener(
      'message',
      event => {
        const item = event.data || event.detail;
        if (this[item.type]) {
          this[item.type](item);
        }
      },
      false,
    );
  },
  methods: {},
};
</script>

<style lang="scss">
/* Want nice animations? Check out https://github.com/asika32764/vue2-animate */
/* @import 'https://unpkg.com/vue2-animate/dist/vue2-animate.min.css'; */
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  body {
    margin: 0px;
  }
</style>
