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
        <span class="span_title">您当前的位置</span>
      </div>
      <div class="pre">
        <div class="pre_img">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="in_image">
        </div>
        <div class="detail">
          <h1>标题</h1>
          <ul><li>作者：</li><li>最新一集：</li></ul>
          <ul><li>作者：</li><li>最新一集：</li></ul>
          <ul>简　　介：</ul>
          <div class="btn_line">
            <el-button size="large" type="warning" style="font-size: 16pt">开始阅读</el-button>
            <el-button size="large" type="primary" style="font-size: 16pt">最新章节</el-button>
          </div>
        </div>
      </div>
    </el-card>
    <el-card>
      <div slot="header" class="clearfix" style="padding: 0">
        <div class="title_info">
          <span class="span_title">漫画列表</span>
          <div class="right">
            <span class="cspan">折叠漫画</span>
            <span class="tspan" style="margin-left: 20px;">排序：</span>
            <span class="cspan">倒序</span>|
            <span class="cspan">正序</span>
          </div>
        </div>
      </div>
      <div class="content_img_list">
        <ul></ul>
      </div>
    </el-card>
  </div>
</template>

<script>
    export default {
      name: "comic",
      data() {
        return {
          search : ''
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
</style>
