<template>
  <div>
    <div class="header_title">
      <span class="header_span">yggmanhua</span>
      <div style="height: 100%;margin-top: 10px;">
        <el-input v-model="search" size="large" style="width: 600px;vertical-align: middle;" placeholder="请输入搜索内容"></el-input>
        <el-button type="primary" size="large" style="height: 40px;margin-left: -5px;vertical-align: middle;" >搜索</el-button>
      </div>
    </div>
    <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect"
             background-color="#545c64" text-color="#fff" active-text-color="#81C7FF">
      <el-menu-item index="1"><span class="menu_span">首页</span></el-menu-item>
      <el-menu-item index="2"><span class="menu_span">少年热血</span></el-menu-item>
      <el-menu-item index="3"><span class="menu_span">少女爱情</span></el-menu-item>
      <el-menu-item index="4"><span class="menu_span">武侠格斗</span></el-menu-item>
      <el-menu-item index="5"><span class="menu_span">科幻魔幻</span></el-menu-item>
    </el-menu>
    <el-card class="content_img">
      <div slot="header" class="clearfix" style="padding: 0">
        <span class="span_title"><i class="el-icon-location-outline"></i>您当前的位置</span>
      </div>
      <div class="page_header">
        <el-button icon="el-icon-document" size="small" type="success">漫画列表</el-button>
        <el-button size="small" type="warning">上一章</el-button>
        <el-button size="small" type="primary">上一页</el-button>
        <el-select v-model="page" class="page_section"></el-select>
        <el-button size="small" type="primary">下一页</el-button>
        <el-button size="small" type="warning">下一章</el-button>
      </div>
      <div class="view_image" ref="manId">
        <img src="../assets/pic_loading.gif" v-if="loading"/>
        <img :src="curImg" @load="loadingImgFun" @click="nextPageFun"/>
        <img :src="nextImg" style="display: none;" />
      </div>
      <div class="page_header">
        <el-button icon="el-icon-document" size="small" type="success">漫画列表</el-button>
        <el-button size="small" type="warning">上一章</el-button>
        <el-button size="small" type="primary">上一页</el-button>
        <el-select v-model="page" class="page_section"></el-select>
        <el-button size="small" type="primary">下一页</el-button>
        <el-button size="small" type="warning">下一章</el-button>
      </div>
    </el-card>

  </div>
</template>

<script>
    export default {
      name: "section",
      data(){
          return{
            search:'',
            loading: true,
            page: '第1页',
            curImg: 'http://p2.manhuapan.com/2018/07/09020129539527.jpg',
            nextImg:''

          }
      },
      created() {
      },
      methods:{
        loadingImgFun(){
          this.loading = false
          // 加载完成之后 继续加载下一页面
          this.nextImg ="http://res.img.fffimage.com/images/2020/04/27/00/0576206192.jpg/0"
        },
        nextPageFun(){
          this.curImg = this.nextImg
        }
      }
    }
</script>

<style scoped>
  .header_title {
    display: flex;
    padding: 5px;
    text-align: center;
    vertical-align: middle;
    justify-content: space-between;
    background:url("../assets/titleimg.png");
    background-size: contain;
    max-height: 75px;
  }
  .header_title :after {
    opacity: 0.5;
  }
  .header_title .header_span {
    font-size: 20pt;
    color: white;
    font-weight: 700;
    background-color: #3a8ee6;
    padding: 15px;
    border-radius: 10px;
    transform: scaleX(0.5);
  }
  .menu_span {
    font-size: 13pt;
  }
  .content_img {
    margin-top: 20px;
    text-align: left;
    box-shadow: 5px 5px 5px #81c7ff88;
  }
  .content_img .span_title {
    font-size: 10pt;
    font-weight: 500;
  }
  .content_img .pre{
    display: flex;
    float: left;
    padding: 15px;
  }
  .content_img .pre .detail{
    position: relative;
    margin-left: 20px;
  }
  .content_img .pre .pre_img{
    background: url('../assets/sbookbg.jpg') no-repeat;
    width: 214px;
    height: 284px;
    background-size:100% 100%;
  }
  .content_img .pre .in_image{
    width: 202px;
    height: 272px;
    border-radius: 5px;
  }
  .content_img .pre .detail ul{
    float: left;
    overflow: hidden;
    padding: 3px;
    margin: 0;
    display: block;
    width: 100%;
  }
  .content_img .pre .detail ul li{
    min-width: 200px;
    float: left;
    overflow: hidden;
  }
  .content_img .pre .detail .btn_line{
    min-width:  300px;
    position:absolute;
    bottom:0px;
  }

  .title_info {
    color: yellowgreen;
    font-size: 12pt;
    display: flex;
    justify-content: space-between;
  }
  .title_info .right{
    float: right;
  }
  .title_info .btnopen {
    font-size: 12pt;
    color: red;
  }
  .title_info .tspan {
    color: #3a8ee6;
    font-size: 11pt;
  }
  .title_info .cspan {
    color: #e67526;
    font-size: 11pt;
    cursor: pointer;
  }

  .content_img_list ul{
    display: flex;
    float: left;
  }

  .page_header {
    display: flex;
    text-align: center;
    justify-content: center;
    width: 100%;
  }
  .page_section{
    width: 100px;
    margin-left: 4px;
    margin-right: 4px;
  }
  .view_image{
    margin-top: 5px;
    margin-bottom: 5px;
    text-align: center;
  }
  .view_image img{
    max-width: 900px;
    cursor: pointer;
  }
</style>
