<template>
  <div class="instal">
    <div class="container">
      <h2 style="float:left">账单设置:</h2>
      <br>
    <form action="" style="float:left">
        <div>
            <span>交易名称：</span><input type="text" v-model="msg.name">
        </div>
        <br>
        <div class="b">
            <span style="float:left">金额：</span><input style="float:right" type="text" v-model="msg.number" onkeyup="value=value.replace(/[^\-?\d.]/g,'')">
        </div>
        <br>
        <div class="c">
            <el-button type="success" style="float:left" @click="saveOrEdit">提交</el-button>
            <el-button type="danger" style="float:right" @click="returns">返回</el-button>
        </div> 
    </form>

  
    </div>
  </div>
</template>

<script>
 import axios from 'axios'
 import bus from "../api/bus.js"
 export default {
  name:'instal',
  data() {
    return {
      msg:{},
      getid:0,
    }
  },
  methods: {
    saveOrEdit() {
    if(!this.msg.name) {
        alert("请输入交易名称")
        return false;
    };
    if(!this.msg.number) {
        alert("请输入金额")
        return false;
    };
    if(this.getid==0) {
    axios.post('/qds/account/addDeal?name='+this.msg.name+'&number='+this.msg.number).then(
        function(res) {
            //alert('保存成功')
        }
        )
        .catch(function (error) {
        });
    } else {
    axios.post('/qds/account/change?id='+this.getid+'&name='+this.msg.name+'&number='+this.msg.number).then(
        function(res) {
            //alert('保存成功')
        }
        )
        .catch(function (error) {
        });
        }

    this.$router.push({path:"/bill"})
    },
    returns() {
        this.$router.push({path:"/bill"})
    }
  },
  mounted() {
    bus.$off().$on('id',data => {
      console.log(data);
      this.getid = data;
      console.log(this.getid);
    })

  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.instal {
    display: flex;
}
.container {
    margin: auto;
}
h1 {
  text-align: left;
}
input {
    outline: none;
}
form {
    font-size: 15px;
}
.b {
    margin-bottom: 20px;
}

</style>
