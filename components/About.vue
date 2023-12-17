<template>
  <div class="">
    <div class="w-5/6 " >
      <div class="main mt-0">
        <h1 class="text-lg text-center pt-12 sm:pt-6">ABOUT</h1>
        <div class="flex 
        flex-col md:flex-row lg:flex-row xl:flex-row
        justify-center">
          <nuxt-img src="/portrate2.jpg" 
           alt="portrate"
           style=""
           class="img w-3/5 invert-0 drop-shadow-md 
           snap-center rounded-2xl"
          />
          <div class="text-container">
          <h2 class="text-sm antialiased hover:subpixel-antialiased"><strong>魚田真之介</strong></h2>
          <p class="text-sm tracking-tighter 
          leading-normal">
            2002年生まれ。兵庫県出身。<br>
            2023年国立明石工業高等専門学校建築学科卒業。<br>
            現在、都立大学システムデザイン学部<br>インダストリアルアート学科在学中。<br>
            <a class="after:content-['_↗'] hover:text-[#D76F30]
            transition duration-150 ease-in-out" href="https://blog.lab.sugimototatsuo.com/about" target="blank">ネットワークデザインスタジオ所属。</a><br>
            <span></span><br>
            Born in 2002 in Hyogo Prefecture.<br>
            Completed National Institute of Technology,<br>Akashi College in 2023.<br>
            Entered the Tokyo Metropolitan University,SD,IA<br>
            Belong to <a class="after:content-['_↗'] hover:text-[#D76F30]
            transition duration-150 ease-in-out" href="https://blog.lab.sugimototatsuo.com/about" target="blank">Network Design Studio.</a>
          </p>
          </div>  
        </div>
        </div>
     </div>
    </div>
</template>

<!-- <script>
export default {
 mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.isShow =false
      }, 3000)
    })
  },
}
</script> -->

<style lang="scss" scoped>
h1{
  //font-weight: bold;
  transition: ease-in-out;
  text-align: center;
  position:center;
}

.flex {
  //display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s ease-out;
}

img{
  padding:8% ;
}

</style>        