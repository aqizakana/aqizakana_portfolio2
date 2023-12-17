import { defineNuxtPlugin } from "#app"
import VueSmoothScroll from "vue3-smooth-scroll"

export default defineNuxtPlugin((nuxtApp) => {
    const config = {
        duration: 1000, // アニメーションにかかる時間(ms)
        offset: 0, // スクロールするオフセット(マイナスも可)
        container: "", // スクロール先のセレクタとか要素、デフォルトはwindow
        updateHistory: true, // ハッシュを履歴に残すかどうか(よくわからん)
        easeInQuint: t => t*t*t*t*t,
        // イージングのカスタマイズ`t => ...`
        // (https://gist.github.com/gre/1650294 に例がある)
        // 何も指定しなければ `easeInOutCubic` となる
       
    }
    // 使う
    nuxtApp.vueApp.use(VueSmoothScroll, config)
})