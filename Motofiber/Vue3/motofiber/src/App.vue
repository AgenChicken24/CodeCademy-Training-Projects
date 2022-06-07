<template>
  <div id="app">
      <nav>
        <div>
          <router-link :to="`/${$i18n.locale}`"><img class="HomeLogo" src="./assets/Logos/logo.only.letters.png" alt="Failed to load" /></router-link>
          <langSwitcher id="lang" />
        </div>
       <div class='nav'>
         <div class="li"><router-link :to="`/${$i18n.locale}`">{{ $t('home') }}</router-link></div>
         <div class="li"><motorDropDown /></div>
         <div class="li"><router-link :to="`/${$i18n.locale}/about`">{{ $t('about') }}</router-link></div>
         <div class="li"><router-link :to="`/${$i18n.locale}/contacts`">{{ $t('contacts') }}</router-link></div>
         <div class="li"><router-link :to="`/${$i18n.locale}/FAQ`">FAQ</router-link></div>
        </div>
      </nav>
    <router-view/>
    <footerP />
  </div>
</template>

<script>
  import langSwitcher from './components/lang.vue'
  import motorDropDown from './components/motorDropDown.vue'
  import footerP from './components/footer.vue'
  export default {
    name: 'app',
    components: {
      langSwitcher,
      motorDropDown,
      footerP
    }
  }
</script>

<style>
#lang {
  position: absolute;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
<style src="@/assets/css/tailwind.css" />
