const db=wx.cloud.database();
const zibijian=db.collection('zibijian')
Page({
    data: {
    array1: ['昌平店','东直门店','西二旗店'],
    index1: 0,
    objectArray1: [
      {
        id: 0,
        name: '昌平店'
      },
      {
        id: 1,
        name: '东直门店'
      },
      {
        id: 2,
        name: '西二旗店'
      },
    ],
    array2: ['不需要','面条','馒头','米饭'],
    index2: 0,
    objectArray2: [
      {
        id: 0,
        name: '不需要'
      },
      {
        id: 1,
        name: '面条'
      },
      {
        id: 2,
        name: '馒头'
      },
      {
        id: 3,
        name: '米饭'
      },
    ],
    array3: ['不需要','提拉米苏','巧克力蛋糕','水果挞'],
    index3: 0,
    objectArray3: [
      {
        id: 0,
        name: '不需要'
      },
      {
        id: 1,
        name: '提拉米苏'
      },
      {
        id: 2,
        name: '巧克力蛋糕'
      },
      {
        id: 3,
        name: '水果挞'
      },
    ],
    array4: ['不需要','雪碧','橙汁','可乐'],
    index4: 0,
    objectArray4: [
      {
        id: 0,
        name: '不需要'
      },
      {
        id: 1,
        name: '雪碧'
      },
      {
        id: 2,
        name: '橙汁'
      },
      {
        id: 3,
        name: '可乐'
      },
    ],
    date: '2020-09-20',
    time1: '12:01',
    time2: '12:01'
    },
    bindPickerChange: function(e) {
    this.setData({
     index1: e.detail.value
    })
    },
    Change1: function(e) {
      this.setData({
       index2: e.detail.value
      })
      },
      Change2: function(e) {
        this.setData({
         index3: e.detail.value
        })
        },
        Change3: function(e) {
          this.setData({
           index4: e.detail.value
          })
          },
    bindDateChange: function(e) {
    this.setData({
     date: e.detail.value
    })
    },
    bindTimeChange1: function(e) {
    this.setData({
     time1: e.detail.value
    })
  },
  bindTimeChange2: function(e) {
    this.setData({
     time2: e.detail.value
    })
  },
onSubmit:function(e){
    var index1=e.detail.value.index1;
    var index2=e.detail.value.index2;
    var index3=e.detail.value.index3;
    var index4=e.detail.value.index4;
    var date=e.detail.value.date;
    var time1=e.detail.value.time1;
    var time2=e.detail.value.time2
    zibijian.add({
  data:{
  name:e.detail.value.title1,
  phone:e.detail.value.title3,
  place:this.data.array1[index1],
  zhushi:this.data.array2[index2],
  cake:this.data.array3[index3],
  drink:this.data.array4[index4],
  date:this.data.date,
  starttime:this.data.time1,
  overtime:this.data.time2,
  }
    }).then(res=>{wx.showToast({
      title:'订单提交成功',
      icon:'success'
    })
  })
  
} 
})