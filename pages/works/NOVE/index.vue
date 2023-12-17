<template>
    <div class="">
      <div class="main2 w-4/6 sm:w-3/6 md:w-1/3 xl:w-1/3 mx-auto">
            <h1 class="text-xl pt-20 text-center">NOVE
            </h1>
            <h3 class="text-1xl mt-4 text-center"></h3>
            <div class="img-container">
                <img src="/works/NOVE/NOVE1.jpg" alt="work1" >
                <img src="/works/NOVE/NOVE2.jpg" alt="work1" >
                <div class="flex justify-center mt-5 mb-10">
            <iframe class="mx-auto h-auto " src="/works/NOVE/NOVE3.mp4" title="video player" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen></iframe>
                </div>

            </div>
            
            <p class="my-5">
            </p>
            <p class="my-5 text-xs">
              <span class="red-text underline" style="color: antiquewhite;">Outline</span><br>
                大学祭で行った有志のインスタレーション作品です。<br>
                テーマは「有機的:無機的」です。<br>
                色がにじんだような表現の有機的なスクリーンと、<br>
                モノクロでソリッドな表現の無機的なスクリーンを表裏一体として、<br>
                教室の中央に配置しました。<br>
                スクリーンを介したコミュニケーションの空間化を試みました。<br>
                </p>
                <p class="my-5 text-xs">
                <span class="red-text underline" style="color: antiquewhite;">Detail</span><br>
                有機的な自然と無機的な情報を、淡いCGと電子音によって表現しています。<br>
                私はインタラクションシステムの構築と、電子音の制作を担当しました。<br>
                この作品では、人の動きを滑らかに検知するために、<br>
                KincetのDepth検知を用いています。<br>
                反対側のスクリーンの人の動きをもう一方のスクリーンに反映することで、<br>
                ただ、スクリーンの前を動くだけに留まらないインタラクションを実現できました。<br>
                加えて、電子音は環境音に機械音声を重ねたものを制作しました。<br>
                2日間に350人以上の方にご来場頂けました。<br>
                


              </p>
        </div>
       
    </div>
    </template>
    <script setup>
    useHead({
      title: 'NOVE',
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
    margin-bottom: 20px; /* お好みの間隔を指定 */
    border-radius: 0.5rem;
}
$mobileSize: 890px; 
$mobileSizeS: 480px;


    </style>