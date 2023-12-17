<template>
    <div class="">
      <div class="main2 w-4/6 sm:w-3/6 md:w-1/3 xl:w-1/3 mx-auto">
        <h1 class="text-xl  text-center pt-20">文字としての月</h1>
        <div class="img-container">
          <img src="/works/img1.png" alt="work1" >
          <img src="/works/img2-1.png" alt="work1-2" style="margin-right: 20px;">
          <img src="/works/img2-2.png" alt="work1-3" style="margin-right: 20px;">
        </div>
  
        <p class="my-5 my-link text-xs">
          <NuxtLink class="my-link" to="https://tmu-2023-net-1.github.io/aqizakana/" target="blank"><strong> Page Link</strong></NuxtLink><br>
        </p>
        
        <p class="my-5 text-xs">
          <span class="red-text underline">Outline</span><br>
          ネットワーク演習・実習で制作したWebサイト。<br>
          課題のテーマは「タイポグラフィー」。<br>
          個人的なコンセプトを「文字を形として捉える。」として
          月をモチーフにした球体のオブジェクトと文字のweb作品を制作しました。
        </p>
        <p class="my-5 text-xs">
          <span class="red-text underline ">Detail</span><br>
          3Dオブジェクトを取り扱いやすくしたライブラリ、
          Three.jsを用いて文字を立体的に表現した作品を制作しました。ページは2種類あり、
          1つは月の地名を主題にしたもの、もう1つが「五月二日月を見ていた」という
          短文を取り扱ったものです。<br>
          工夫した点は球体表面に配置された文字のオブジェクトがはがれて見えないようにベクトル
          に基づいた配置と、微調整を行った点です。
          </p>
          <p class="my-5 text-xs">
            <span class="red-text underline">Other</span><br>
          受講者の最終課題をまとめたブックレットを制作し、技術書展やboothで販売中。
          是非、ご覧ください。<br>
        </p>         
            <p class=" my-5 text-xs"><NuxtLink class=" my-link" to="https://www.tmu.ac.jp" target="_blank">University Page</NuxtLink></p>
         
        
      </div>
    </div>
  </template>
  <script setup>
  useHead({
    title: 'moon',
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
      color: rgba(61,214,143,1.0);
      transition: .3s ease-out;
    }
  }
.underline{
    color:antiquewhite;
}
  </style>
  