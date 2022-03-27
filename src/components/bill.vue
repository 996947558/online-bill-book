<template>
  <div class="bill">
    <div class="container">

  <h1 class="a">账单列表:</h1>
      
  <el-button type="primary" class="b"><router-link :to="{ path: '/instal' }" class="d">添加</router-link></el-button>


  <div style="margin-top: 15px;">
    <el-input placeholder="请输入交易名称" v-model="input1" class="input-with-select">
      <el-button slot="append" icon="el-icon-search" @click="search(input1)"></el-button>
    </el-input>
  </div>


 <el-table :data="iae.data" stripe style="width: 100%">
    <el-table-column prop="name" label="交易名称" min-width="25%"/>
    <el-table-column prop="number" label="金额" min-width="25%"/>
    <el-table-column prop="date" label="日期" min-width="25%"/>
    <el-table-column label="操作" min-width="25%"  style="display: flex;
    justify-content:center;
    align-items:Center;">
　　　　<template slot-scope="scope">
　　　　　　<el-button type="success" @click="busFun(scope.row.id)" style="float: right;margin-right: 5px;">修改</el-button>
　　　　　　<el-button type="danger" @click="delRow(scope.row.id)" style="float: right;margin-right: 5px;">删除</el-button>
　　　　</template>
    </el-table-column>
  </el-table>

    </div>

 


  </div>
  
</template>

<script>
 import axios from 'axios'
 import bus from "../api/bus.js"

 export default {
  name:'bill',
  data() {
    return {
      iae:[],
      input1: '',
    }
  },
  methods: {
    delRow(id) {
    //console.log(id);
      var _this=this;
      axios.post('/qds/account/remove?id='+id).then(
        function(res) {
          _this.findAll();
        }
      )
      .catch(function (error) {
        alert("删除失败")
      });
    },

    findAll(){
    var _this=this;
    axios.post('/qds/account/getHistory').then(
      function(res) {
        _this.iae=res.data;
      }
    )
    .catch(function (error) {
      alert('载入失败')
    });
    },

    busFun(data) {
        // console.log(data);
        // bus.$emit('id',data);
        // this.$router.push({path:"/instal"})
    this.$router.push({path:"/instal"})
    this.$nextTick(function () { //解决第一次监听不到数据
       bus.$emit('id', data);
     })
    },

    search() {
    var _this=this;
    axios.post('/qds/account/search?name='+this.input1).then(
        function(res) {
            _this.iae=res.data;
        }
        )
        .catch(function (error) {
        });
    },
  },
  created() {
    this.findAll();
  },
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bill {
  height: 100%;
  width: 100%;

}
.container {
    margin: 0 auto;
    width: 100%;
    height: 100%;
    max-width: 780px;
}
h1 {
  text-align: left;
}
.a {
  display: inline;
  float: left;
  
}
.b {
  float: right;
}
.d {
    color: #fff;
}
.backtop {
    overflow: scroll;
    height: 100%;
} 
</style>
