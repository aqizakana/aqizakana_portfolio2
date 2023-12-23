<template>
    <div class="">
      <div class="main2 w-4/6 sm:w-3/6 md:w-1/3 xl:w-1/3 mx-auto">
        <h1 class="text-xl  text-center pt-20">私のデザイン哲学-影とデザイン</h1>
        
        <div class="img-container mt-5 mb-5">
          <img src="/works/design_concept/影.png" alt="work1" >
          <span class="my-5 text-xs" style="color: antiquewhite;" ><strong>影はモノ、ヒト問わずに存在する。陰は存在している証明である。</strong></span>
          <img src="/works/design_concept/影2.png" alt="work1-2">
          <span class="my-5 text-xs" style="color: antiquewhite;" ><strong>影は人種、言葉、階級などの要素が削ぎ落さている。<br>
            自身の個性は形や動きなどによって投影される。</strong></span>
          <img src="/works/design_concept/影3.png" alt="work1-3" >
          <span class="my-5 text-xs" style="color: antiquewhite;"><strong>地面に映った影では私と誰か、私と何かとの境目は曖昧になる。</strong></span>
          <img src="/works/design_concept/影4.png" alt="work1-3" >
          <span class="my-5 text-xs" style="color: antiquewhite;"><strong>影を集め,重ねていく事、シンプルな私として誰かと触れ合うことが大切ではないか。</strong></span>
        </div>    
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
      color: rgba(#D76F30,1.0);
      transition: .3s ease-out;
    }
  }
.underline{
    color:antiquewhite;
}
  </style>
  