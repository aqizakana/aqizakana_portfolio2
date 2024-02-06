<template>
    <div class="">
      <div class="main2 w-4/6 sm:w-3/6 md:w-1/3 xl:w-1/3 mx-auto">
        <h1 class="text-xl  text-center pt-20">2023年のYouTubeの広告塔キャラ</h1>
        <div class="img-container mt-5 mb-5">
          <img src="/works/Youtube-DataViz/idol.png" />
  
        </div>
  
        <p class="my-5 my-link text-xs">
          <NuxtLink class="my-link" to="https://observablehq.com/@2023-tmu-dataviz/who-is-the-top-commercial-idol-of-2023-on-youtube?collection=@2023-tmu-dataviz/final-project" target="blank"><strong> Page Link</strong></NuxtLink><br>
        </p>
        
        <p class="my-5 text-xs">
          <span class="red-text underline">Outline</span><br>
          ネットワーク演習・実習で制作したObserVable上での記事。<br>
          課題のテーマは「ソーシャルな可視化」。<br>
          個人的なテーマを「CMの広告塔キャラクター」として<br>
          アニメ・特撮その他キャラクター作品のCM起用数を集計しました。<br>
          このテーマはアニメ・特撮大国日本において、度々企業がアニメや特撮とコラボし、CMを放映していることと、<br>
          また、 これらのメインカルチャー化に伴い、企業のCMにキャラクターが起用される例も増えていることから、 <br>
          YouTube上でアニメ・特撮・その他キャラクターが登場するCMを調査し、<br>
          作品の人気、作風とサブカルチャー以外の企業、商品の関係について考察したものになります。<br>

        </p>
        <p class="my-5 text-xs">
          <span class="red-text underline ">Detail</span><br>
          記事上では様々可視化方法を利用しました。<br>
          例えば、作品ごとの起用数の大小関係がわかりやすいように以下のようなグラフを用いたり、<br>
          <img src="/works/YouTube-DataViz/img1.png" alt="work1-2" />
            また、各CMの再生回数を比較するために以下のようなツリーマップを用いたりしました。<br>
            <img src="/works/YouTube-DataViz/img2png" alt="work1-3" />
          </p>
        
         
        
      </div>
    </div>
  </template>
  <script setup>
  useHead({
    title: 'YouTube-DataViz',
    meta: [
      {
        name: 'description',
        content: 'Work by Uota',
      },
    ],
  });
  </script>
  <style coped lang="scss">
  $mobileSize: 890px;
  $mobileSizeS: 450px;
#topic{
color:rgb(255, 255, 100);
font-size: 1.2rem;
}

.img-container img{
    margin:10px;
  }
  .my-link{
    font-weight: 700;
    &:hover{
      color: rgba(#D76F30,1.0);
      transition: .3s ease-out;
    }
  }
.underline{
    color:antiquewhite;
}
  </style>
  