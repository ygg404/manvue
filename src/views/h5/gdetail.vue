<template>
  <div class="mod-index">
    <header-com ref="HeaderCom" @refreshData="gotoHome"></header-com>
    <div class="mod-content">
      <el-row :gutter="10" style="padding: 10px;" >
        <el-col :xs="24" :sm="12">
          <div style="color: #3a8ee6;font-size: 20pt;">演示效果如下：</div>
          <iframe :src="gameSrc" style="width: 100%;min-height:650px;"></iframe>
        </el-col>
        <el-col :xs="24" :sm="12">
          <div class="game_title"><span style="color: black;">标题：</span>{{item.title}}</div>
          <img src="~@/assets/html/zip.jpg" style="width: 100px;"/>
          <div style="font-size: 13pt;">大小： <span style="color: #3a8ee6">{{item.size}}</span>M</div>
          <el-button type="primary" size="large" @click="downLoadCode()">下载源代码</el-button>
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
        cate: this.$route.query.cate,
        gameSrc: '',
        item: '',
        serverUrl: window.SITE_CONFIG.server,
        title: '',
        keywords: ''
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
    computed: {
      argsCate: {
        get () { return this.$store.state.paramsutil.argsCate },
        set (val) { this.$store.commit('paramsutil/updateargsCate', val) }
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
            if (data.htmlPart.cate.indexOf('微信小程序') >= 0) {
              this.gameSrc = this.serverUrl + '/h5not'
            }
            this.title = data.htmlPart.keys
            this.keywords = data.htmlPart.keys + 'web前端素材下载,前端开发,前端源代码免费下载,HTML源代码'
          }
        })
      },
      // 下载源代码
      downLoadCode () {
        console.log( this.serverUrl + this.item.downloadUrl)
        window.location.href = this.serverUrl + this.item.downloadUrl
      },
      gotoHome () {
        this.$router.push({path: '/' })
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
  .game_title {
    padding: 10px;
    font-size: 18pt;
    color: #3a8ee6;
  }
</style>
