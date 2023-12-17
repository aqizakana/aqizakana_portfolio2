<template>
    <div class="">
      <div class="main2 w-4/6 sm:w-3/6 md:w-1/3 xl:w-1/3 mx-auto">
            <h1 class="text-xl pt-20 text-center">数字の中の挨拶
            </h1>
            <h3 class="text-1xl mt-4 text-center"></h3>
            <div class="img-container">               
                <nuxt-img src="/works/NOVE1.jpg" alt="work1" class="w-5/6 mx-auto"></nuxt-img>
                <nuxt-img src="/works/NOVE2.jpg" alt="work1" class="w-5/6 mx-auto"></nuxt-img>
                <div class="flex justify-center mt-5 mb-5">
            <iframe class="rounded-lg w-full h-full" src="/works/23244001作品映像.mp4" title="YouTube video player" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen></iframe>
                </div>

            </div>
            
            
            <p class="my-5 text-xs">
              <span class="red-text underline ">Outline</span><br>
                インタラクティブアート講義で制作した作品。<br>
                コンセプトは「言語的意味の持たない数字を用いて意味のある言葉を象る」。<br>
                日常の中のとりとめのない思考として、次々と切り替わる数字と、
                その思考の中から<br>
                話し言葉を形成する様子を表現しようとしたものです。<br>
                </p>
                <p class="my-5 text-xs">
                <span class="red-text underline ">Detail</span><br>
                映像はprocessingによって生成しました。<br>
                操作にはblynk IoTを用いてArduino Unoを中継し、<br>
                端末の操作によって、processingによる映像をリアルタイムに変化させる<br>
                インタラクションを提案しました。<br>

            </p>
            <p class="my-5">
              
            </p>
            
            <p class="m-5">
                <ul class="list-disc">
                                  
                </ul>
            </p>
        </div>
       
    </div>
    </template>
    <script setup>
    useHead({
      title: 'greeting',
      meta: [
        {
          name: 'description',
          content: 'Work by Uota',
        },
      ],
    });
    </script>
    <style scoped lang="scss">
    .img-container img {
    margin-bottom: 0px; /* お好みの間隔を指定 */
    border-radius: 0.5rem;
}
.underline{
  color:antiquewhite
}


    </style>