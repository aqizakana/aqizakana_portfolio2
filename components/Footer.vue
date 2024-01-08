<template>
    <div class="my-footer" v-if=isShow> 
    <p class="text-center text-xs">ShinnosukeUota</p>
    </div>
  
  </template>
  
  <style lang="scss" scoped>
  $mobileSize:450px;
  $mobileSizeX:890px;
  .my-footer{
    
    background-color: rgba(#FAF0DC,1);
    position:absolute;
    box-shadow: 0px -2px 2px 2px rgba(100, 100, 100, 0.05);
    bottom:0;
    padding: 8px 5px;
    display: table;
    width:100%;
    z-index: 2000;
    
  }
  .my-footer p{
 
    margin: 0;
    padding: 0;
    text-align: center;
    color: rgba(10, 5, 5, 1);
  }
  </style>
  
  <script>
  export default {
    components: {},
    props: [],
    data () {
      return {
        isShow: false,
      }
    },
    methods:{
      goTop(){
        console.log("goTop");
        window.scrollTo(
          {
            top: 0,
            behavior: "smooth"
          }
        );
      }
    },
    computed: {
    },
    mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.isShow = true
      }, 3000)
    })
  },
  }
  </script>
  
