<template>
  <div class="mod-index">
    <header-com ref="HeaderCom"></header-com>
    <div class="mod-content">
      <el-row :gutter="5">
        <el-col :sm="6" class="hidden-xs-only">
          <nav-com ref="NavCom"></nav-com>
        </el-col>
        <el-col :xs="24" :sm="18">
          <el-row :gutter="6">
            <el-col :xs="12" :sm="6" v-for="item in dataList" :key="item.id" style="padding: 5px;">
              <el-card class="mod_card" >
                <div class="title">
                  {{item.title}}
                </div>
                <img :src="serverUrl + (item.imgUrl == null ? (  item.title + '/icon.png'): item.imgUrl)" />
                <div class="btn_line">
                  <el-button type="primary" size="small" @click="openDetailHandle(item.id)">查看</el-button>
                  <el-button type="success" size="small">下载</el-button>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <!--      分页控件-->
      <el-pagination class="hidden-xs-only"
        background
        @current-change="currentChangeHandle"
        layout="total,prev, pager, next"
                     :current-page="pageIndex"
                     :page-size="pageSize"
                     :total="totalPage">
      </el-pagination>
      <el-pagination class="hidden-sm-and-up"
                     background
                     layout="prev, pager, next"
                     :current-page.sync="pageIndex"
                     :page-size="totalPage"
                     :total="totalPage">
      </el-pagination>
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
        keywords: '',
        dataList: [],
        pageIndex: 1,
        pageSize: 25,
        totalPage: 0,
        totalCount: 0,
        dataListLoading: false,
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
    mounted() {
      this.init()
    },
    methods: {
      init() {
        this.title = "web前端开发 前端源代码免费下载"
        this.keywords = 'web前端素材下载,前端开发,前端源代码免费下载,HTML源代码'
        this.getHtmlList()
      },
      // 当前页
      currentChangeHandle (val) {
        this.pageIndex = val
        this.getHtmlList()
      },
      getHtmlList () {
        this.dataListLoading = true
        this.$http({
          url: this.$http.adornUrl('/html/h5page'),
          method: 'get',
          params: this.$http.adornParams({
            'page': this.pageIndex,
            'limit': this.pageSize,
            'cate': '游戏'
          })
        }).then(({data}) => {
          this.dataListLoading = false
          if (data && data.code === 0) {
            this.dataList = data.page.list
            this.totalPage = data.page.totalCount
          }
        })
      },
      openDetailHandle (id) {
        console.log(id)
        const { href } = this.$router.resolve({
          name: 'gdetail',
          query: {
            id: id
          }
        });
        window.open(href, '_blank');
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
  .mod_card {
    cursor: pointer;
  }
  .mod_card img{
    width: 100%;
    height: auto;
  }
  .mod_card .btn_line {
    display: flex;
    text-align: center;
    justify-content: space-around;
    margin-top: 4px;
  }
</style>
