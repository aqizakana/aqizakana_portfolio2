<template>
  <div class="">
    <div class="main2 w-4/6 sm:w-3/6 md:w-1/3 xl:w-1/3 mx-auto">
          <h1 class="text-xl pt-5 text-center">ちょっと!?GPT</h1>
          <h3 class="text-1xl mt-4 text-center"></h3>
          <div class="img-container">   
          <img src="/works/画像1.png" alt="work4" >
              
          
          </div>
          
          <p class="my-5 text-xs">
              <NuxtLink class="my-link" to="https://group03.vercel.app" target="blank"><strong> Page Link</strong></NuxtLink><br>
             
          </p>
          <p class="my-5 text-xs">
              <span class="red-text underline">Outline</span><br>
              ネットワーク演習・実習で制作したWebサイト。<br>
              課題「2023年時点でのChat-GPTなどのAIの現状を記録するwebサイト」でグループで制作したwebサイトです。<br>
              私は企画を担当しました。コンセプトは「AIの突飛のない回答」を友達との会話のように
              ツッコミをいれるサイトです。<br>
              </p>
              <p class="my-5 text-xs">
              <span class="red-text underline">Detail</span><br>
              <span class="img-container">  
              <img src="/works/tukkomi.png" alt="work4" >
              </span>
              サイトのデザインは以下のようなもので、受講者が各自で作成した記事をまとめ、
              ジャンル別にまとめています。各記事はタイトルと本文、Chat-GPTの<br>
              スクリーンショット
              とともに紹介しています。班員の記事は企画を担当した私が
              実際に感じたツッコミを挿入しています。
              
          </p>
          <p class="my-5">
             
          </p>
          
          <p class="m-5">
              <ul class="list-disc">
                  <li><NuxtLink class="my-link" to="https://www.tmu.ac.jp" target="_blank">University Page</NuxtLink></li>
                 
              </ul>
          </p>
      </div>
     
  </div>
  </template>
  <script setup>
  useHead({
    title: 'Share',
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


  </style>