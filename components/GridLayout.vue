<template>
    <div class="" id="GridLayout">
        <div class="w-3/6 sm:w-4/6 mx-auto" >
        <div class="pt-36 xs:pt-10 pb-5 mx-auto">
            <h1 class="text-center text-base ">WORKS</h1>
            <div class="main delay-75 mx-auto gap-3
             grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 place-content-center  sepia hover:sepia-0" v-if=!isShow id="grid-layout">
        <NuxtLink class="work-focus border-none   rounded-2xl" id="work1" to="/works/moon">
           <nuxt-img preload src="/works/moon/img1.png" alt="work1" />
        </NuxtLink>
      
        <NuxtLink class="work-focus border-none   rounded-2xl" id="work2" to="/works/metaball">
            <nuxt-img preload src="/works/metaball/madscientist.jpg" alt="work2"  />
        </NuxtLink>
        
        <NuxtLink class="work-focus border-none   rounded-2xl" id="work4" to="/works/greeting">
            <nuxt-img preload src="/works/greeting/LOVE.png" alt="work3" />  
        </NuxtLink>
        <NuxtLink class="work-focus border-none  hover:border-dotted border-5 border-[#D76F30] rounded-2xl" id="work5" to="/works/YouTube-DataViz">
            <nuxt-img preload src="/works/YouTube-DataViz/ido.png" alt="work4" />  
        </NuxtLink>
        <NuxtLink class="work-focus border-none  hover:border-dotted border-5 border-[#D76F30] rounded-2xl" id="work5" to="/works/Share">
            <nuxt-img preload src="/works/Share/最終確認2.jpg" alt="work5" />  
        </NuxtLink>
        <NuxtLink class="work-focus border-none   rounded-2xl" id="work3" to="/works/NOVE">
            <nuxt-img preload src="/works/NOVE/NOVE2.jpg" alt="work6" />  
        </NuxtLink>
        <NuxtLink class="work-focus border-none  hover:border-dotted border-5 border-[#D76F30] rounded-2xl" id="work8" to="/works/AAC">
            <nuxt-img preload src="/works/AAC/パース6.png" alt="work7" />  
        </NuxtLink>
        <NuxtLink class="work-focus border-none  hover:border-dotted border-5 border-[#D76F30] rounded-2xl" id="work8" to="/works/tyashitsu1">
            <nuxt-img preload src="/works/tyashitsu1/正面.png" alt="work8" />  
        </NuxtLink>
        <NuxtLink class="work-focus border-none  hover:border-dotted border-5 border-[#D76F30] rounded-2xl" id="work8" to="/works/tyashitsu2">
            <nuxt-img preload src="/works/tyashitsu2/構内茶室.png" alt="work9" />  
        </NuxtLink>
        
        
    </div>   
    </div> 
    </div>
</div>
    
</template>


<style lang="scss" scoped>

#grid-layout{
    opacity: 1.0;
    filter:contrast(0.9);   
    
}
.work-focus {
    //background-color: rgba(240, 0, 0, 0.5)
    position: relative;
	  cursor: pointer;
    -webkit-touch-callout: none;
    -moz-touch-callout: none;
    -webkit-user-select: none;
    user-select: none;
    transition: .3s ease-in-out;
    img{
        //border: 1px dashed rgb(255, 255, 20); 
        //box-shadow:0px 0px 10px 0px rgba(0, 0, 0, 0.5); 
        opacity: 1.0;
        padding: 0%;
        width:100%;
        height:100%;
        object-fit: cover; /* Scale the image while maintaining its aspect ratio */
        position: center;
        filter:contrast(0.9); 
       
    } 
}
</style>

<script>
    export default {
  name: "GridLayout",
  data() {
    return {
    
    };
  },
  methods: {
    
  },
 mounted() {
    
  },
};
</script>
