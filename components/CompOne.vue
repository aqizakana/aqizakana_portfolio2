<template>
    <div class="">
    <div class="w-1/2 grid grid-cols-1 md:w-1/3 xl:w-1/3 sm:w-1/2 mx-auto">
      <div class="main">
        <h1>ここでは私の考えを示したりする。</h1>
       <li><strong>無の伝達</strong></li>
        <p class="fade-in">
          コミュニケーションの場では、
          言葉が有意味であるという前提が共有されていることが一般的だと思う。
          それ故、双方が相手の言葉を解釈、理解しようとする。
          しかし、言葉の持つ意味の性質上、解釈の幅がある場合が殆どであり、
          伝えたかった意味とは乖離した解釈をする可能性がついてまわる。
          この可能性故に、私たちは大小様々な誤解をすることがときどきある。
          この誤解はときとして重大な問題に発展する。その誤解を発生させないために
          前提そのものを覆し、「無の伝達」によってこの課題を解消する。</p>
          <span></span>
          <li><strong>メタボリズムについて</strong></li>
          <p class="fade-in">
            メタボリズムの思想は現代の我々に浸透しているのではないかと考える。
            建築の分野ではそれが顕著であると考える。設計する際には、将来の変化を考慮して有機的なプランを提案する。これは、合理的な空間は竣工後、続くとするモダニズム建築とは異なる。
            加えて、私たちが目の当たりにしているメタボリズムがある。それは渋谷駅で行われている再開発である。あの一般に利用がなされながら、永遠に改修され続ける施設とは、菊竹清訓の「海上都市」などで提案された、
            巨大居住施設で生活とその内部リサーチ、そして、施設の改修、改善を同時進行で進めるという計画と重ねられる。つまり、今日、家や施設ではなく、都市を1つの代謝する対象として、メタボリズムが実現されている。
            建築単体ではなく、都市がメタボリズムを反映するようになったのは、社会の変化のスピードが昭和後期に比べて速くなったことで、建築単体よりも、都市の方が変化するスピードが速くなったからであると考える。
            メタボリズムの関係者が都市計画を提案することが多かったことは建築と都市の関係を本質的に捉えていたと評価できる。
          </p>
    </div>
    </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      isShow: true,
    }
  },
  
   mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.isShow = false
      }, 2000)
    })
  },
}
</script>

<style scoped>
h1 {
  font-weight: bold;
  padding-bottom: 10px;
}
@keyframes example {
  from {opacity:0;}
  to {opacity:1;}
  from {transform:traslateY(0px);}
  to {transform:traslateY(60px);}
}
h1{
  animation-name: example;
  animation-duration: 1s;
}
li{
  padding: 20px 0px 5px 0px;
  animation-name: example;
  animation-duration: 4s;
}
p{
  animation-name: example;
  animation-duration: 4s;
}

</style>        