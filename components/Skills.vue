<template>
  <div class="">
    <div class="w-6/6">
      <h1 class="text-lg text-center mt-0 mx-auto">SKILLS</h1>
      <div class="main ">
      <div class="flex 
      flex-nowrap
        justify-center ">
        <!--横並び-->
        <div class="flex flex-row items-normal">
          <!--Webと建築-->
        <div class="flex flex-col items-start">
          <!--Web-->
        <div class=" text-container flex flex-row ">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="48" viewBox="0 0 48 48"><g fill="none"><rect width="40" height="32" x="4" y="8" stroke="#FAEBD7" stroke-linejoin="round" stroke-width="4" rx="3"/><path stroke="#FAEBD7" stroke-width="4" d="M4 11a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v9H4v-9Z"/><circle r="2" fill="#FAEBD7" transform="matrix(0 -1 -1 0 10 14)"/><circle r="2" fill="#FAEBD7" transform="matrix(0 -1 -1 0 16 14)"/></g></svg>
          <div class="text-container flex flex-col" >
          <h3 class="underline ">Web</h3>
          <p class=" text-xs w-full whitespace-normal overflow-hidden" >
            Nuxt.jsでのポートフォリオ、
            Three.jsでのアート制作。<br>
            D3.jsやp5.jsに興味あり。
            <span></span><br>
            My portfolio site With Nuxt.js.
            HTML,JavaScript,CSS<br>
            I'm interested in D3.js and p5.js.<br>
          </p>
        </div>
        </div> 
          <!--建築-->
        <div class="text-container flex flex-row">
          <svg xmlns="http://www.w3.org/2000/svg" style="margin-left:0%;" width="64" height="48" viewBox="0 0 24 24"><path fill="#FAEBD7" d="M12.5 15q1.05 0 1.775-.725T15 12.5V7h3V5h-4v5.5q-.325-.25-.7-.375T12.5 10q-1.05 0-1.775.725T10 12.5q0 1.05.725 1.775T12.5 15ZM8 18q-.825 0-1.413-.588T6 16V4q0-.825.588-1.413T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.588 1.413T20 18H8Zm-4 4q-.825 0-1.413-.588T2 20V6h2v14h14v2H4Z"/></svg>
          <div class="text-container flex flex-col ">
            <h3 class="w-full underline ">Music</h3>
            <p class=" text-xs w-full">
            DTMソフトを用いた作編曲。
            <a class=" hover:text-[#D76F30]
            transition duration-150 ease-in-out" href="https://swater.bandcamp.com" target="blank">Bandcamp</a>で販売中。
            <span></span><br>
            Composing by Studio One.<br>
            Selling some songs on  <a class=" hover:text-[#D76F30]
            transition duration-150 ease-in-out" href="https://swater.bandcamp.com" target="blank">Bandcamp</a>.<br>
          </p>
        </div>
        </div>
        </div>

        <!--MusicとAdobe-->
        <div class="flex flex-col items-start">
          <!--Music-->
        <div class="text-container flex flex-row ">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="48" viewBox="0 0 24 24"><path fill="#FAEBD7" d="M18 18h-6v-5.79c-.66.61-1.53.99-2.5.99c-2.04 0-3.7-1.66-3.7-3.7a3.7 3.7 0 0 1 3.7-3.7c2.04 0 3.7 1.66 3.7 3.7c0 .97-.38 1.84-.99 2.5H18m1-9H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z"/></svg>
          <div class="text-container flex flex-col" style="padding-left:0% ;" >
            <h3 class="w-full underline text ">Architecture</h3>
          <p class=" text-xs w-full" >
            高専時代、建築を専攻。<br>
            メタボリズムや
            建築史の研究を趣味で継続中。
            <span></span><br>
            I majored in architecture in college.<br>
            Studying architectural history and
            Modeling with ARCHICAD.<br>
          </p>
            
        </div>
        </div>
          <!--Adobe-->
        <div class="text-container flex flex-row ">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="48" viewBox="0 0 24 24"><path d="M14.58 3H22v16.67L14.58 3M9.42 3H2v16.67L9.42 3M12 9.17l4.67 10.5H13.5l-1.33-3.34H8.75L12 9.17z" fill="#FAEBD7"/></svg>
          <div class="text-container flex flex-col">
          <h3 class="w-full underline ">Adobe</h3>
          <p class="text-xs">
            IllustratorIndesignを用いた
            ポスター/ブックレット制作。
            <span></span><br>
            Making posters and booklets<br>
            by Illustrator and Indesign.<br>
            
          </p>
        </div>
        </div>
        </div>
        </div> 
        </div>
        </div>
     </div>
    </div>
</template>

<script>
export default {
 mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.isShow =false
      }, 3000)
    })
  },
}
</script>

<style lang="scss" scoped>
h1{
  transition: ease-in-out;
  text-align: center;
  position:center;
}
.flex {
  //display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s ease-out;
  border-radius: 0.5rem; 
}
.text-container{
  align-items:flex-start;
  text-align: left;
}
svg{
  @media(max-width:440px){
    width: 30px;
    height: 30px;
  }
}

</style>        