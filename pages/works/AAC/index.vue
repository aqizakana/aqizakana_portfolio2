<template>
    <div class="">
      <div class="main2 w-5/6  mx-auto">
            <h1 class="text-1xl pt-5 text-center">Akashi Art Center</h1>
            
            <div class="img-container">
                <img src="/works/卒研/パース.png" alt="work7" >
                
                <img src="/works/卒研/パース2.png" alt="work7" >
                <img src="/works/卒研/パース4.png" alt="work7" >
                
            </div>
            <p class="my-5 text-xs">
              <span class="red-text underline ">Outline</span><br>
              高専の卒業研究として、提案したものです。<br>
              兵庫県明石市の庁舎建て替えに合わせ、市庁舎の敷地の側にある美術館を設計しました。<br>
              コンセプトは「海とマチと芸術をつなぐ美術館」です。<br>
              明石市は県内唯一の美術科のある公立高校を持ち、市民の中でも盛んな芸術活動の場として計画しています。<br>
              また、市庁舎建て替えをはじめとする再開発が進行しています。<br>
              そこで新たな、マチのアイデンティティーを形成するための場所として、美術館を設計しました。<br>
              この美術館では、市民の制作、交流、展示会の場を主なスペースとして設計しています。<br>
              
              </p>
              <div class="img-container2">
                <img src="/works/卒研/2F平面図動線.png" alt="work7" >
            </div>
              <p class="my-5 text-xs">
                <span class="red-text underline ">Detail</span><br>
                この美術館では、作品の収蔵よりも市民の制作、交流、展示会の場を主なスペースとして設計しています。<br>
                西館を収蔵している作品を展示するスペース、東館を市民の制作の場とし、その中間のエリアを交流の場としました。<br>
            </p>
            </div>
            <p class="my-5">
               
            </p>
            
           
        </div>
       

    </template>
    <script setup>
    useHead({
      title: 'AAC',
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
    position: center;
}
.img-container2 img {
    margin-bottom: 20px; /* お好みの間隔を指定 */
    border-radius: 0.5rem;
    background-color: aliceblue;
}
.underline{
  color:antiquewhite
}

 
    </style>