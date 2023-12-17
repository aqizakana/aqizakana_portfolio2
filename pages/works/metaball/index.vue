<template>
  <div class="">
    <div class="main2 w-4/6 sm:w-3/6 md:w-1/3 xl:w-1/3 mx-auto">
          <h1 class="text-xl text-center pt-20">悪の科学者になりたい。
          </h1>
          <h3 class="text-1xl mt-4 text-center"></h3>
          <div class="img-container">
              
          
              <img src="/works/madscientist.jpg" alt="work1" >
              <div class="flex justify-center">
          <iframe class=" mx-auto w-full h-auto" src="/works/mad.mp4" title="video player" 
          frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen></iframe>
              </div>

          </div>
          
          <p class="my-5">
          </p>
          <p class="my-5 text-xs">
            <span class="red-text underline ">Outline</span><br>
              インタラクティブアート講義で制作した作品。<br>
              コンセプトは「デバイスの非接触操作を活かしたSF的感覚を味わう」。<br>
              手をカメラにかざすと、背景のメタボールが増殖し、エコーのきいたノイズが鳴り、<br>
              細胞に何か悪いことをしているような体験ができます。<br>
            この作品はkinectの非接触操作にSF的な感覚を感じたことから始まります。<br>
            このSF感を活かすために、マッドサイエンティストというキャラクターを考え、<br>
            そこから実験や細胞のイメージを膨らませ、それとマッチするような音もデザインしました。<br>
             <img src="/works/noise.png" class="mt-5" alt="work1" >
              </p>
              <p class="my-5  text-xs">
              <span class="red-text underline ">Detail</span><br>
               手の認識にkinectを用いて、
               processingによってメタボールを生成しています。<br>
               メタボールの結合したり、分散したりするのは手の座標によって<br>
               操作することが可能です。<br>
               音はprocessingからOSC通信でPuredataへと手の座標を送り
               生成しています。<br>
               Puredataの構造は以下のようになっています。<br>
                freeverbというアドオンを使って、モーターの駆動音のような音が<br>
                反響するように設定しています。
                <img src="/works/puredata.png" class="mt-5" alt="work1" >


            </p>
      </div>
     
  </div>
  </template>
  <script setup>
  useHead({
    title: 'metaball',
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
.underline{
color:antiquewhite
}
h2{
font-family: 'ヒラギノ角ゴ ProN';
}
p{
font-family: 'ヒラギノ角ゴ ProN';
}


  </style>