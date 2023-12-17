<template>
    <div class="">
    <Navbar class="" />
      <slot class=""/>
      
      <Footer />
    </div>
  </template>
  
  <style>
.page-enter-active,
.page-leave-active,
.layout-enter-active,
.layout-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.page-enter-from,
.page-leave-to,
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
}

.layout-enter-active,
.layout-leave-active {
  transition: opacity 0.5s;
}
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  /* filter: blur(1rem); */
}
  </style>
 <script>
 export default {
     methods: {
     }
 }
 </script>
  
