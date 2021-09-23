// index.js
var benjin,lilv,sum;
Page({
  benjinNum:function(e){
    benjin=parseInt(e.detail.value);
  },
  lilvNum:function(e){
    lilv=parseFloat(e.detail.value);
  },
  calc:function(){
    sum=benjin;
    for(var i=1;i<=5;i++){
      sum=sum*(1+lilv);
    }
    this.setData({
      S:sum
    })
  }
});