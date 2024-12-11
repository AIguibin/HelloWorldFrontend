<template>
  <div class="hello">
    <el-button @click="btnClick">按钮</el-button>
    <echarts-test></echarts-test>
  </div>
</template>

<script>
import echartsTest from '@/components/echarts/echartsTest.vue'
export default {
  name: 'IndexPage',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
    console.log("----------------页面进来进行H5方法注册，以备Android端随时调用-----------------");
    this.$bridge.registerHandler("Android2H5",this.H5JSHandle)
    console.log("----------------注册一个名字为Android2H5对应的H5JSHandle，等待Android调用-----------------");
  },
  methods: {
    H5JSHandle(handleName,data,callback){
      console.log("Android使用callHandler('Android2H5',data,H5处理完逻辑回调Android的回调方法)调H5")
      console.log("因为我们注册过，所以就会找到名字对应的方法，并且执行")
      console.log("执行完成后，如果给了回调方法，就执行回调")
      if(callback){
        callback("回调给Android的参数，我是从H5回调回来的数据");
      }
    }
    btnClick() {
      let _this = this;
      const data = JSON.stringify({
        action: 'LOGIN',
        username: "H5页面上送的用户名",
        password: "H5页面上送的用户密码"
      });
      debugger
      console.log("---------------------------------H5调用Android方法开始---------------------------------------")
      _this.$bridge.callHandler('login', data, function (responseData) {
        console.log("---------------------------------回调进来---------------------------------------")
        console.log("Android回调H5页面数据",JSON.parse(responseData))
      })
    }
  },
  components: {
    echartsTest
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.prosson {
  height: 20px;
  width: 200px;
  border-radius: 20%;
}

.babackgroundddd {
  height: 20px;
  width: 100px;
  border: 1px solid #42b983;
  border-radius: 20%;
  background-color: #42b983;
}
</style>
