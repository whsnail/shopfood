<!--  -->
<template>
  <div class="app"> 
    <router-view></router-view>
    <footer-guider v-show="$route.meta.showFooter"></footer-guider>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
import FooterGuider from './components/FooterGuider/FooterGuider.vue'

export default {
  mounted(){
    this.getOldUser,
    this.getAddress
    
    
  },
  data () {
    return {
    };
  },

  components: {
    FooterGuider
  },

  computed: {
    ...mapActions(['getOldUser','getAddress']),
    ...mapState(['userInfo'])
  },


  methods: {}
}

</script>
<style lang="stylus">
  .app
    width 100%
    height 100%
    background #f5f5f5
    
</style>