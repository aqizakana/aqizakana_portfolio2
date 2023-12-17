<template>
    <div class="">
      <div class="title 
      
      flex 
      justify-center
      w-6/6 
      xl:flex-row md:flex-row sm:flex-col xs:flex-col
      mx-auto Hello" 
      id="Hello">
        <h1 class="xl:text-3xl md:text-2xl sm:text-2xl" id="Hello" >
        Aqizakana
      </h1>
      <nuxt-img preload  
      src="/logo.png"
      alt="face-photo"
      class="img xl:w-3/6 md:w-5/6 sm:w-3/6 w-4/6"

      />
    </div>
  </div>
  
  </template>
<script>
export default {
  data(){
    return{
      isShow: true,
    }
  },
  
   mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.isShow = false
      }, 1500)
    })
  },
}
</script>

<style lang="scss" scoped>
  $Size:450px;
  $mobileSizeS:900px;
  $baseTextColor: rgb(255, 255, 91); // main color

  .title{
    //display:flex;
    align-items: center;
    justify-content: center;
    //background-color:rgba(antiquewhite,0.2);
    padding:0px,0px,0px,0px;
    @media (min-width:1000px) { // Adjust the max-width as needed for your sm breakpoint
    margin-left:10%;

    }
    
    
  }
  

h1{
    color:antiquewhite;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    //background-color: antiquewhite; 
    border-radius:1rem;
    transition: 0.6 ease-in-out;
    transform:scale(1)

    }
.black-bg {
 //color: antiquewhite !important;
  background-color:rgba(black,0.0); 
  transition-duration: 1s;
}
  </style>
  
