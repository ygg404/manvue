<template>
  <div class="mod-index" >
    <header-com ref="HeaderCom"  @refreshData="getDateList"></header-com>
    <div class="mod-content" >
      <el-row :gutter="5">
        <el-col :sm="6" class="hidden-xs-only">
          <nav-com ref="NavCom" @refreshData="getDateList"></nav-com>
        </el-col>
        <el-col :xs="24" :sm="18" v-loading="dataListLoading" >
          <el-row :gutter="6" style="min-height: 850px;">
            <el-col :xs="12" :sm="6" v-for="item in dataList" :key="item.id" style="padding: 5px;">
              <el-card class="mod_card" >
                <div class="title">
                  {{item.title}}
                </div>
                <img :src="serverUrl + (item.imgUrl == null ? (  item.title + '/icon.png'): item.imgUrl)"
                     onerror="javascript:this.src='http://img4.jiwu.com/buildpic/52/2796/2796996_m.jpg'"
                />
                <div class="btn_line">
                  <el-button type="primary"  @click="openDetailHandle(item)">查看演示</el-button>
<!--                  <el-button type="success" size="small">下载</el-button>-->
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
                     :total="totalCount">
      </el-pagination>
      <div class="hidden-sm-and-up" style="padding: 5px;">
        <el-button type="primary" :disabled="this.pageIndex <= 1" @click="--pageIndex,getHtmlList()">上一页</el-button>
        <el-select v-model="pageIndex" style="width: 100px;" @change="getHtmlList(argsCate)">
          <el-option v-for="item in pageList" :label="item.name" :key="item.id" :value="item.id"  ></el-option>
        </el-select>
        <el-button type="primary" :disabled="this.pageIndex >= this.totalPage" @click="++pageIndex,getHtmlList()">下一页</el-button>
      </div>
    </div>

    <footer-com ref="FooterCom" ></footer-com>
  </div>

</template>

<script>
  import HeaderCom from './common/header_com'
  import NavCom from './common/nav_com'
  import FooterCom from './common/footer_com'
  import {stringIsNull} from "../../utils";

  export default {
    data() {
      return {
        title: '',
        description: '',
        keywords: '',
        dataList: [],
        pageIndex: 1,
        pageSize: 20,
        totalPage: 0,
        totalCount: 0,
        pageList: '',
        dataListLoading: false,
        serverUrl: window.SITE_CONFIG.server
      }
    },
    components: {
      HeaderCom,
      NavCom,
      FooterCom
    },
    computed: {
      argsCate: {
        get () { return this.$store.state.paramsutil.argsCate },
        set (val) { this.$store.commit('paramsutil/updateargsCate', val) }
      }
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
        this.argsCate = stringIsNull(this.$route.query.cate) ? '游戏' : this.$route.query.cate
        this.getHtmlList(this.argsCate)
      },
      // 当前页
      currentChangeHandle (val) {
        this.pageIndex = val
        this.getHtmlList(this.argsCate)
      },
      getDateList (cate) {
        this.pageIndex = 1
        this.argsCate = cate
        this.$router.push({path: '/h5index', query: {'cate': cate}})
        this.getHtmlList(cate)
      },
      getHtmlList (cate) {
        if (stringIsNull(cate)) {
          cate = stringIsNull(this.$route.query.cate) ? '游戏' : this.$route.query.cate
        }
        this.dataListLoading = true
        this.$http({
          url: this.$http.adornUrl('/html/h5page'),
          method: 'get',
          params: this.$http.adornParams({
            'page': this.pageIndex,
            'limit': this.pageSize,
            'cate': cate
          })
        }).then(({data}) => {
          this.dataListLoading = false
          if (data && data.code === 0) {
            this.dataList = data.page.list
            this.totalCount = data.page.totalCount
            this.totalPage = data.page.totalPage
            let pageList = []
            for (let i = 1; i <= data.page.totalPage; i++) {
              pageList.push({
                id: i,
                name: '第' + i + '页'
              })
            }
            this.pageList = pageList
          }
        })
      },
      openDetailHandle (item) {
        const { href } = this.$router.resolve({
          name: 'gdetail',
          query: {
            id: item.id,
            cate: item.cate
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
  .mod_card .title {
    font-size: 13pt;
    color: #3a8ee6;
    padding-bottom: 3px;
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
