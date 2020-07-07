<template>
  <div class="mod-index">
    <header-com ref="HeaderCom"></header-com>
    <div class="mod-content">
      <el-row :gutter="5">
        <el-col :sm="6" class="hidden-xs-only">
          <nav-com ref="NavCom"></nav-com>
        </el-col>
        <el-col :xs="24" :sm="18">

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
    data() {
      return {
        title: '',
        description: '',
        keywords:'',
        dataList: [],
        pageIndex: 1,
        pageSize: 25,
        totalPage: 0,
        dataListLoading: false,
      }
    },
    components:{
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
    mounted() {
      this.init()
    },
    methods: {
      init() {
        this.title = "web前端开发 前端源代码免费下载"
        this.keywords = 'web前端素材下载,前端开发,前端源代码免费下载,HTML源代码'
        this.getHtmlList()
      },
      getHtmlList (){
        this.dataListLoading = true
        this.$http({
          url: this.$http.adornUrl('/webapi/html/h5page'),
          method: 'get',
          params: this.$http.adornParams({
            'page': this.pageIndex,
            'limit': this.pageSize,
            'cate': '游戏'
          })
        }).then(({data}) => {
          this.dataListLoading = false
          if (data && data.code === 0) {

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
  .header{
    margin: 0;
    text-align: left;
    box-shadow: 0 4px 8px 0 rgba(7,17,27,.1)
    /*display: flex;*/
  }
  .header_img {
    width: 80px;
    height: 58px;
    margin-left: 5px;
  }
  .header_title {
    vertical-align: center;
    line-height:58px;
    font-weight: 700;
    color: #0cd3d3;
    font-style:italic;
    font-size: 20pt;
  }
  .content_icon{
    font-size: 28pt;
    font-weight: 700;
    padding-top: 10px;
    padding-left:5px;
    color: #3a8ee6;
    cursor: pointer;
  }
  .mobile_search {
    padding:5px;
    display: none;
    -webkit-animation-name: fadeIn; /*动画名称*/
    -webkit-animation-duration: 1s; /*动画持续时间*/
    -webkit-animation-iteration-count: 1; /*动画次数*/
    -webkit-animation-delay: 0s; /*延迟时间*/
  }
  /*动画效果*/
  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0; /*初始状态 透明度为0*/
    }
    50% {
      opacity: 50%; /*中间状态 透明度为0.5*/
    }
    100% {
      opacity: 100%; /*结尾状态 透明度为1*/
    }
  }
</style>
