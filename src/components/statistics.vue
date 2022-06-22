<template>
  <div class="statistics">
    
支出：{{datas.expend}}
收入：{{datas.earning}}
总额：{{datas.balance}}
<div id="myChart" :style="{width: '500px', height: '600px'}"></div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'statistics',
  data() {
    return {
      datas:{},
      cc:[],
    }
  },

  created() {
    var _this = this;
    axios.get('http://localhost:3000/api/getFocus').then(
      function(res) {
        console.log(res.data);
        _this.datas = res.data;
      }
    )
  .catch();
  },
  
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
            title: { },
            tooltip: {},
            xAxis: {
                data: ["支出","收入"]
            },
            yAxis: {},
            series: [{
                name: '金额',
                type: 'bar',
                data: []
            }]
        });
        var _this = this;
    axios.get('http://localhost:3000/api/getFocus').then(
    function(res) {
      _this.cc =[res.data.expend,res.data.earning];
      //console.log(_this.cc);
      myChart.setOption({
                series: [{
                    data: _this.cc
                }]
      })
    }
    )
  .catch();
    }
  }


}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#myChart {
  margin: 0 auto;
}
</style>