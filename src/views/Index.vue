<template>
  <div>
    <div class="header_title">
      <span class="header_span">yggmanhua</span>
      <div style="height: 100%;margin-top: 10px;">
        <el-input v-model="search" size="large" style="width: 600px;vertical-align: middle;" placeholder="请输入搜索内容"></el-input>
        <el-button type="primary" size="large" style="height: 40px;margin-left: -5px;vertical-align: middle;" >搜索</el-button>
      </div>
    </div>
    <el-menu default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect"
             background-color="#545c64" text-color="#fff" active-text-color="#81C7FF">
      <el-menu-item index="1"><span class="menu_span">首页</span></el-menu-item>
      <el-menu-item index="2"><span class="menu_span">少年热血</span></el-menu-item>
      <el-menu-item index="3"><span class="menu_span">少女爱情</span></el-menu-item>
      <el-menu-item index="4"><span class="menu_span">武侠格斗</span></el-menu-item>
      <el-menu-item index="5"><span class="menu_span">科幻魔幻</span></el-menu-item>
    </el-menu>
    <el-tabs v-model="manName" @tab-click="handleClick" class="el_tabs_div" >
      <el-tab-pane label="热门连载漫画" name="first">
        <div class="coverMhList">
          <ul >
            <li v-for="item in [1,2,3,4,6]">
              <v-card>
                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
              </v-card>
            </li>
            <li>
              <v-card>
                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
              </v-card>
            </li>
            <li>
              <div style="float: left;width: 100%;display: flex;cursor: pointer;" @click="gotoComicHandle">
                <div class="imgcontent">
                  <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                </div>
                <div style="width: 130px;text-align: left;padding: 5px;">
                  <p>dd</p>
                  <p>ddd</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </el-tab-pane>
      <el-tab-pane label="最新更新漫画" name="second">最新更新漫画</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
    export default {
      name: "index",
      data() {
          return {
            search: '',
            manName: 'first'
          }
      },
      methods:{
        gotoComicHandle () {
          this.$router.push({ path: "/comic" });
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
    max-height: 60px;
  }
  .menu_span {
    font-size: 13pt;
  }
  .el_tabs_div {
    margin-top: 10px;
    box-shadow: 10px 10px 5px #81c7ff88;
    border: 1px solid #3a8ee688;
    padding: 5px;
  }

  .coverMhList {
    display: block;
    overflow: hidden;
    padding: 25px 10px 10px;
  }
  .coverMhList ul li {
    width: 310px;
    float: left;
    margin-bottom: 15px;
    text-align: center;
    overflow: hidden;
  }
  .coverMhList .imgcontent {
    background: url('../assets/sbookbg.jpg') no-repeat;
    width: 145px;
    height: 180px;
  }

  .coverMhList .image {
    display: block;
    width: 128px;
    height: 171px;
    border-radius: 4px;
  }
</style>
