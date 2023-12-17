<template>
    <div class="">
      <div class="main2 w-4/6 sm:w-3/6 md:w-1/3 xl:w-1/3 mx-auto">
            <h1 class="text-xl pt-20 text-center">数字の中の挨拶
            </h1>
            <h3 class="text-1xl mt-4 text-center"></h3>
            <div class="img-container">               
                
                <div class="flex justify-center mt-5 mb-5">
            <iframe class="mx-auto w-full h-auto" src="/works/23244001作品映像.mp4" title="YouTube video player" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen></iframe>
                </div>

            </div>
            
            
            <p class="my-5 text-xs">
              <span class="red-text underline ">Outline</span><br>
                インタラクティブアート講義で制作した作品。<br>
                コンセプトは「言語的意味の持たない数字を用いて意味のある言葉を象る」<br>
                <NuxtLink class="after:content-['_↗'] hover:text-[#D76F30]
                  transition duration-150 ease-in-out" to="/works/moon">
            「文字としての月」</NuxtLink>では、本来意味がくっついている文字から意味を漂白することを<br>
            目的としていましたが、この作品では、意味の比重が小さい数字を用いて、<br>
            意味のある言葉を象ること、身近な言葉である挨拶を生み出すことを目的としています。<br>
                </p>
                <p class="my-5 text-xs">
                <span class="red-text underline mb-10">Detail</span><br>
                映像はprocessingによって生成しました。<br>
                操作にはblynk IoTを用いてArduino Unoを中継し、<br>
                端末の操作によって、processingによる映像をリアルタイムに変化させる<br>
                インタラクションを提案しました。<br>
                操作すると機械音声の発話と共に、該当の位置の数字が1に固定されてます。<br>
                これによって、無意識のカオスな思考から文字が浮かび上がるような表現を目指しました。<br>

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