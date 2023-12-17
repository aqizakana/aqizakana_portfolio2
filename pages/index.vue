<template>
  <div class="">
    <div class="main  mx-auto">
        <Hello class="pt-24 shadow-sm w-5/6 mx-auto" id="Hello"/>
        <div class="vertical mx-auto" v-if="isShow">
          <p class="pt-36 pb-0 underline text-xs tracking-widest" v-if="isShow" :style="{ 'opacity': scrollOpacity}">
            <strong>scroll</strong>
          </p>
        </div>
        <GridLayout v-if="isShow" class="" id="GridLayout" />
        <div class="flex flex-col spacer">
        <About v-if="isShow" class="flex mx-auto" 
          id="About" 
          :style="{ 'padding-top': 0 }"
        />
        <Skills v-if="isShow" id="Skills"  class="flex mx-auto " />
        </div>
      </div>
    </div>

  
  </template>
  
  <script>
  export default{
    data() {
      return {
      isShow:false,
      isHeaderHidden:ref(false),
      mainPaddingTop: '0%', // 初期値を設定
      scrollOpacity:0.8
      };
    },
    methods: {
    toggleButton(buttonName) {
      // 指定されたボタン以外をすべてfalseに設定
      Object.keys(this.$data).forEach(key => {
        if (key !== buttonName) {
          this[key] = false;
        }
      });
      
    },
    
  },
    computed: {
      activeComp() {
        
        },
      },
      mounted() {
         // 仮の読み込みのパーセントを示す処理
      let percent = 0;
      const interval = setInterval(() => {
        percent += 5;
        this.loadingPercent = percent;
        if (percent >= 100) {
          clearInterval(interval);
        }
      }, 1000);
      this.$nextTick(() => {
        setTimeout(() => {
          this.isShow = true;
          // 1秒後に mainPaddingTop を変更
          setTimeout(() => {
            this.mainPaddingTop = '0%';
          
          }, 1000);
        }, 1000);
      });
      //スクロールを検知し、scrollOpacityを変更
      window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const windowH = window.innerHeight;
        const bodyH = document.body.clientHeight;
        const scrollPercent = scrollY / (bodyH - windowH);
        this.scrollOpacity = 0.8 - scrollPercent;
      });

     
    },
  };
  
  </script>  
  <style lang="scss">
  #head_wrap{
      position: fixed;
      width: 100%;
  }
  .inner{
          //transition: .3s ease-out;
          padding-left:0%;
          z-index: 100;
          position: relative;
          text-align: right;
      }

  #global-nav {
          position:absolute;
          padding-top: 1rem;
          top:0px;
          right:3%;
          text-align: right;
          width: 100%;
          transition: 0.6s ease-in-out; 
          

          
  ul{
              list-style: none;
              position:static;
              right: 0;
              bottom: 0;
              line-height: 0;
              font-size: 10px;
              display: inline-flex;
              list-style: none;
              font-weight: normal;
              li{
                  float: center;
                  position:static;
                  padding: 5px;
              }
              a{
                  bottom:-10;
              }
          }
      }

  
  #Hello{
    padding-bottom:0%;
    transform:translateX(0%);
  }
  #GridLayout{
    transition: 0.5s ease-out;
  }
  .spacer {
  height: 0%; /* Adjust the height based on your design */
}
  #About{
    transition: 0.5s ease-out;
    
  }
  @keyframes example {
    from {opacity:0;}
    to {opacity:1;}
    from {transform:traslateY(0px);}
    to {transform:traslateY(20%);}
  
  }
  .flex {
  padding-top: 0%;
  display: flex;
  align-items: flex-start; /* Align items at the start of the flex container */
}
  .vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          font-size: 1rem;
          position: fixed;
          right: 2%;
          top:70%;
          z-index:10;
          animation-name: example;
          animation-duration: 2s ;
          transition: 0.5s ease-in-out;
          animation-delay: 0s;
          
          &::after {
          
      }
    }
    .underline{
      color:rgba(antiquewhite,0.7);
      transform: scale(1,1);
      transition: 0.5s ease-in-out;
    }
  
  </style>