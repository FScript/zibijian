Page({
  tomine:function(e){
    console.log(e);
    var id=e.target.id;
    console.log(id);
    wx.navigateTo({
      url: '../mine/mine?id='+id,
    })
    }
})
