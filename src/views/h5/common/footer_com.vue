<template>
    <div class="mod-footer">
      <div class="footer_line">Copyright © 2020 yggnb.cn All rights reserved.</div>
      <div class="footer_line"><a href="http://www.beian.miit.gov.cn">粤ICP备19096985号</a></div>
    </div>
</template>

<script>
    export default {
        name: "footer_com"
    }
</script>

<style scoped>
  .mod-index .mod-footer {
    width: 100%;
    max-width: 1140px;
    margin: 0 auto;
    background-color: #2e3033;
    color: #f7f8fa;
    border: 1px solid #E5E8ED;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.05);
  }

  .footer_line {
    padding: 5px;
    font-size: 10pt;
  }
  .footer_line a{
    color: white;
  }
</style>
