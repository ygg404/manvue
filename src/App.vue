<template>
  <transition name="fade">
    <router-view></router-view>
  </transition>
</template>

<script>
  export default {
    name: 'App',
    metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: '前端开发素材下载',
      // all titles will be injected into this template
      titleTemplate: '%s'
    }
  }
</script>
