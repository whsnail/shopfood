<!--  -->
<template>
  <div class="app"> 
    <router-view></router-view>
    <footer-guider></footer-guider>
  </div>
</template>

<script>
import FooterGuider from './components/FooterGuider/FooterGuider.vue'
export default {
  data () {
    return {
    };
  },

  components: {
    FooterGuider
  },

  computed: {},


  methods: {}
}

</script>
<style lang="stylus">
  .app
    width 100%
    height 100%
    background #f5f5f5
</style>