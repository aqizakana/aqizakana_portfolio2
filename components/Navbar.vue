<template>
    <header class="header" id="head_wrap" ref="headwrap">
      <div class="inner">
        <NuxtLink to="/">
          <h3 class="logo text-sm">
            UoTA
          </h3>
        </NuxtLink>
        <div id="nav-toggle">
          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <nav id="global-nav">
        <ul class="logo text-xs">
          <li>
            <NuxtLink to="#GridLayout">WORKS</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#About">ABOUT/SKILLS</NuxtLink>
          </li>
          
        </ul>
      </nav>
    </header>
  </template>
  
  <style lang="scss">
  #head_wrap {
    box-shadow: 0px 2px 2px 1px rgba(#FF6864, 0.2);
    background-color: rgba(15,30,20, 1);
    height: 6%;
    position: fixed;
    line-height: 0;
    padding: 0.5rem;
    line-height: 1;
    z-index: 999;
  }
  .inner {
    z-index: 100;
    position: relative;
    text-align: right;
  }
  .logo{
    font-family: Ubuntu;

    position: absolute;
}
h3.logo {
    margin-top: 0.25rem; /* Adjust as needed */
    margin-left: 1.5rem;
  }
  
  #global-nav {
    position: absolute;
    ul {
      list-style: none;
      position: static;
      display: inline-flex;
      list-style: none;
      li {
        float: center;
        position: static;
      }
    }
  }
  </style>
  