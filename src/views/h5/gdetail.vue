<template>
  <div class="mod-index">
    <header-com ref="HeaderCom"></header-com>
    <div class="mod-content">
      <el-row :gutter="10" style="padding: 10px;">
        <el-col :xs="24" :sm="12">
          <div></div>
          <iframe :src="gameSrc" style="width: 100%;min-height:550px;"></iframe>
        </el-col>
        <el-col :xs="24" :sm="12">
          <div style="color: #3a8ee6">{{item.size}}M</div>
          <el-button type="primary" size="large"></el-button>
        </el-col>
      </el-row>

    </div>
    <footer-com ref="FooterCom"></footer-com>
  </div>
</template>

<script>
  import HeaderCom from './common/header_com'
  import NavCom from './common/nav_com'
  import FooterCom from './common/footer_com'

  export default {
    data () {
      return {
        id: this.$route.query.id,
        gameSrc: '',
        item: '',
        serverUrl: window.SITE_CONFIG.server
      }
    },
    components: {
      HeaderCom,
      NavCom,
      FooterCom
    },
    metaInfo () {
      return {
        title: this.title,
        meta: [
          { vmid: 'description', name: 'description', content: this.description },
          { vmid: 'keywords', name: 'keywords', content: this.keywords }
        ]
      }
    },
    created () {
      this.init()
    },
    methods: {
      init() {
        this.title = "web前端开发 前端源代码免费下载"
        this.keywords = 'web前端素材下载,前端开发,前端源代码免费下载,HTML源代码'
        this.getHtmlInfo()
      },
      getHtmlInfo () {
        this.$http({
          url: this.$http.adornUrl(`/html/info/${this.id}`),
          method: 'get',
          params: this.$http.adornParams({})
        }).then(({data}) => {
          if (data && data.code === 0) {
            this.item = data.htmlPart
            this.gameSrc = this.serverUrl + '/' + data.htmlPart.title
          }
        })
      }
    }
  }
</script>

<style scoped>
  .mod-index {
    width: 100%;
    text-align: center;
    background-color: #7aaff6;
  }
  .mod-index .mod-content {
    width: 100%;
    max-width: 1140px;
    margin: 0 auto;
    background-color: #f7f8fa;
  }
</style>
