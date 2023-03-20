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
    let obj ={key:""}
    console.log(Object.keys(obj).length,999999999)
  },
  methods: {
    btnClick() {
      let _this = this;

    var time=  setTimeout(() => {
        console.log("111111")
      }, 1000);
      setTimeout(() => {
        console.log(time,"222222")
        console.log("333333")
      }, 3000);


      _this.$http.request({
        url: 'http:127.0.0.1:8999/geturl'
      }).then(res => {
        const a = [{ a: 1 }, { b: 1 }]
        const b = [{ a: 1 }, { b: 1 }]
        const c = a.concat(b)

        // 无法去重
        const e = [...new Set(c)]


        // 开始去重
        const d = [...new Set(c.map(t => JSON.stringify(t)))].map(s => JSON.parse(s))
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
