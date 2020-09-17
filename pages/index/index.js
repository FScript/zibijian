const db=wx.cloud.database();
const yonghuxinxi=db.collection('yonghuxinxi')
Page({
  data: {
      //判断小程序的API，回调，参数，组件等是否在当前版本可用。
      canIUse: wx.canIUse('button.open-type.getUserInfo'),
      isHide: false
  },
  onLoad: function() {
      var that = this;
      // 查看是否授权
      wx.getSetting({
          success: function(res) {
              if (res.authSetting['scope.userInfo']) {
                  wx.getUserInfo({
                      success: function(res) {
                          wx.login({
                            success: res => {
                              // 获取到用户的 code 之后：res.code
                              wx.setStorageSync('用户的code', res.code)
                              },
                        });
                      }
                  });
              } else {
                  // 用户没有授权
                  // 改变 isHide 的值，显示授权页面
                  that.setData({
                      isHide: true
                  });
              }
          }
      });
  },
  bindGetUserInfo: function(e) {
      if (e.detail.userInfo) {
          //用户按了允许授权按钮
          var that = this;
          wx.setStorageSync('用户信息', e.detail.userInfo)
  yonghuxinxi.add({
data:{
xinxi:e.detail.userInfo
}
  }).then(res=>{wx.showToast({
    title:'已授权，请预约',
    icon:'success'
  })
}
  )
          //授权成功后,通过改变 isHide 的值，让实现页面显示出来，把授权页面隐藏起来
          that.setData({
              isHide: false
          });
      } else {
          //用户按了拒绝按钮
          wx.showModal({
              title: '警告',
              content: '您点击了拒绝授权，将无法使用预约功能，请授权之后再预约!!!',
              showCancel: false,
              confirmText: '返回授权',
              success: function(res) {
                  // 用户没有授权成功，不需要改变 isHide 的值
                  if (res.confirm) {
                      console.log('用户点击了“返回授权”');
                  }
              }
          });
      }
  },
  toyuding:function(e){
    var id=e.target.id;
    var that = this;
    wx.getSetting({
        success: function(res){
    if (res.authSetting['scope.userInfo']) {
        var id=e.target.id;
        console.log(id);
        wx.switchTab({
          url: '../yuding/yuding?id='+id,
        })
 }
 else{
    wx.showToast({
        title:'请先授权登录',
        icon:'none'
      })
}
}
    })
}
})
