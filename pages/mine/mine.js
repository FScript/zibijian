Page({
   data:{
        ne:[],  
    },
  onLoad: function (options) {
    var _this = this;
    const db = wx.cloud.database({   
      env: 'text-cv85o'
    })
    db.collection('zibijian').get({
      success: res => {
        console.log(res.data)   
        this.setData({
          ne: res.data
        })
      }
    })
  },    
  click1: function (e) {
    wx.openLocation({
      latitude: 40.22066,
      longitude:116.231204,
      scale: 18,
      name: '昌平店',
    })
  },
  click2: function (e) {
    wx.openLocation({
      latitude: 39.941823,
      longitude:116.426319,
      scale: 18,
      name: '东直门店',
    })
  },
  click3: function (e) {
    wx.openLocation({
      latitude: 40.053034,
      longitude:116.306295,
      scale: 18,
      name: '西二旗店',
    })
  },
})