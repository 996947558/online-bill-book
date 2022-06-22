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


 <el-table :data="iae" stripe style="width: 100%">
    <el-table-column prop="name" label="交易名称" min-width="25%"/>
    <el-table-column prop="number" label="金额" min-width="25%"/>
    <el-table-column prop="updatedAt" label="日期" min-width="25%"/>
    <el-table-column label="操作" min-width="25%"  style="display: flex;
    justify-content:center;
    align-items:Center;">
　　　　<template slot-scope="scope">
　　　　　　<el-button type="success" @click="busFun(scope.row._id)" style="float: right;margin-right: 5px;">修改</el-button>
　　　　　　<el-button type="danger" @click="delRow(scope.row._id)" style="float: right;margin-right: 5px;">删除</el-button>
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
      // axios.post('/qds/account/remove?id='+id).then(
      //   function(res) {
      //     _this.findAll();
      //   }
      // )
      // .catch(function (error) {
      //   alert("删除失败")
      // });
      axios.get('http://localhost:3000/api/remove/'+id).then(
        res => {
          _this.findAll();
        },
        err => {
          alert("删除失败")
        }
      )
    },

    findAll(){
    var _this=this;
    // axios.post('/qds/account/getHistory').then(
    //   function(res) {
    //     _this.iae=res.data;
    //   }
    // )
    axios.get('http://localhost:3000/api/getHistory').then(
      res => {
        //console.log(res);
        res.data.map(item => {
          item.updatedAt=item.updatedAt.slice(0,10)
        })
        _this.iae=res.data;
        // console.log(_this.iae);
      }
    )
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
    // axios.get('http://localhost:3000/api/search/'+this.input1).then(
    //     function(res) {
    //         _this.iae=res.data;
    //     }
    //     )
    //     .catch(function (error) {
    //     });
    // },
    axios.post('http://localhost:3000/api/search/',{
      name:this.input1
    }).then(
      res => _this.iae=res.data
        )
    },
  },
  mounted() {
    this.findAll();
  },
  //监听函数
watch: {
    '$route' () {
      this.findAll();//我的初始化方法
    }
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
