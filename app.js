// bussinese

var q1_items = ["电商搜索","电商达人","微博达人","医院","个人护理","电视节目","公交站台"]
var q3_values = ["用于接受和查找","用于研究比较价格功能等","用于最终购买"]

function a2(q_items,a_items){
   var s = _.difference(q_items,a_items)
   if (s.length > 0){
     alert(JSON.stringify(s)+"还没有排序")
     return []
   }else{
     return  a_items
   }
}


// views

var app = new Vue({
  el: '#app',
  data: {
    ways: _.map(q1_items,function(i){
      return {"name":i,value:false}
    }),
    q3_values:q3_values,
    show:"q1",
    a1:[],
    a1_name:[],
    a2:[],
    a3:{}
  },
  methods:{
    sub_a1:function(){
      this.a1 = this.ways.filter(function(o){
        return o.value
      })
      console.log(this.a1)
      this.show = "q2"
    },
    choose_q2:function(way){
      this.a2.push(way.name)
    },
    sub_a2:function(){
      var a1_name = _.map(this.a1,function(o){return o.name})
      this.a1_name = a1_name
      var x = a2(a1_name,this.a2)
      if (x.length>0){
        this.q3 = _.zipObject(a1_name,_.map(a1_name,function(){
          return _.map(q3_values,function(){
            return false
          })
        }))
        this.show = "q3"
      }
    },
    sub_a3:function(){
      var a3 = {}
      for (var name in this.q3){
        var value =  this.q3[name]
        a3[name] = ""
        for (var i=0;i<value.length;i++){
          if (value[i]){
            a3[name] += q3_values[i]+","
          }
        }
      }
      this.a3 = a3
      console.log(this.q3)
      this.show = "q4"
    }
  }
})
