<template>
  <div class="">
    <div class="title 
      flex 
      justify-center
      w-6/6 
      flex-col xl:flex-row md:flex-row sm:flex-col xs:flex-col
      mx-auto Hello" 
      id="Hello"
    >
      <nuxt-link to="/works/design_concept" class="mx-auto">
      <h1 class="xl:text-3xl md:text-2xl sm:text-2xl mx-auto hover:text-[#D76F30]" id="Hello">
        Aqizakana
      </h1>
    </nuxt-link>
        <nuxt-img
          
          key="logo"
          preload
          src ='/logo.png' 
          alt="face-photo"
          class="img xl:w-3/6 sm:w-4/6 mx-auto"
        />

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showContent:false,
    };
  },

  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.showContent = true;
      }, 1500);
    });
  },
};
</script>

<style lang="scss" scoped>
$Size: 450px;
$mobileSizeS: 900px;
$baseTextColor: rgb(255, 255, 91); // main color

.title {
  align-items: center;
  justify-content: center;
  padding: 0px, 0px, 0px, 0px;
  @media (min-width: 1000px) {
    margin-left: 10%;
  }
}

h1 {
  color: antiquewhite;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 1rem;
  transition: 0.6s ease-in-out;
  transform: scale(1);
}

.black-bg {
  background-color: rgba(black, 0.0);
  transition-duration: 1s;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.img{
  transition: 2.0s ease-in-out;
}
</style>
