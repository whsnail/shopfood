<!--  -->
<template>
  <div :class="'star star-'+size">
    <span class="star-item" v-for="(star,index) in stars" :key="index" :class="star"></span>
  </div>
</template>

<script>
export default {
  props:{
      score:Number,
      size:Number
  },
  data() {
    return {};
  },

  components: {
    
  },

  computed: {
      stars(){
          const {score} =this
          let stars=[]
          const numberInter=Math.floor(score)
          for(let i=0;i<numberInter;i++){
              stars.push("on")
          }
          if(score*10-numberInter*10>=5){
              stars.push("half")
          }
          while(stars.length<5){
              stars.push("off")
          }
          return stars
      }
  },

  methods: {}
};
</script>
<style lang="stylus">
@import '../../common/stylus/mixins.styl';

.star { // 2x图 3x图
  float: left;
  font-size: 0;

  .star-item {
    display: inline-block;
    background-repeat: no-repeat;
  }

  &.star-48 {
    .star-item {
      width: 20px;
      height: 20px;
      margin-right: 22px;
      background-size: 20px 20px;

      &:last-child {
        margin-right: 0;
      }

      &.on {
        bg-image('./images/stars/star48_on');
      }

      &.half {
        bg-image('./images/stars/star48_half');
      }

      &.off {
        bg-image('./images/stars/star48_off');
      }
    }
  }

  &.star-36 {
    .star-item {
      width: 15px;
      height: 15px;
      margin-right: 6px;
      background-size: 15px 15px;

      &:last-child {
        margin-right: 0;
      }

      &.on {
        bg-image('./images/stars/star36_on');
      }

      &.half {
        bg-image('./images/stars/star36_half');
      }

      &.off {
        bg-image('./images/stars/star36_off');
      }
    }
  }

  &.star-24 {
    .star-item {
      width: 10px;
      height: 10px;
      margin-right: 3px;
      background-size: 10px 10px;

      &:last-child {
        margin-right: 0;
      }

      &.on {
        bg-image('./images/stars/star24_on');
      }

      &.half {
        bg-image('./images/stars/star24_half');
      }

      &.off {
        bg-image('./images/stars/star24_off');
      }
    }
  }
}
</style>