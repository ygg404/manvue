<template>
    <div style="background-color: #19678e;height: 100%;text-align: left">
      <el-menu
        :default-active="argsCate"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item v-for="item in menuList" :index="item.index" :key="item.index" @click="menuHandle(item)"
                      v-if="item.children.length == 0">
          <i class="el-icon-menu"></i>
          <span slot="title">{{item.name}}</span>
        </el-menu-item>
        <el-submenu v-for="item in menuList" :index="item.index" :key="item.index" v-if="item.children.length > 0">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>{{item.name}}</span>
          </template>
          <el-menu-item v-for="group in item.children" :index="group.index" :key="group.index" @click="menuHandle(group)">
            <i class="el-icon-menu"></i>
            <span>{{group.name}}</span>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
</template>

<script>
  import * as tab from './tab'
  import {stringIsNull} from "../../../utils";

  export default {
    data () {
      return {
        menuList: tab.menuList
      }
    },
    computed: {
      argsCate: {
        get () { return this.$store.state.paramsutil.argsCate },
        set (val) { this.$store.commit('paramsutil/updateargsCate', val) }
      }
    },
    mounted () {
      if (!stringIsNull(this.$route.query.cate)) this.argsCate = this.$route.query.cate
    },
    methods: {
      menuHandle (item) {
        this.argsCate = item.index
        this.$emit('refreshData',item.index)
      }
    }
  }
</script>

<style scoped>

</style>
