// index.js
var rand,sum;
function createRand(){
  rand=[]
  sum=0;
  for(var i=0;i<7;i++){
    var r=(Math.random()*30+1).toFixed(0)*1;
    rand.push(r);
    console.log(rand[i]);
  }
  console.log(sum);
};
Page({
  onLoad:function(){
    createdRand();
    this.setData({
      rand:rand,
    })
  },
  newRand:function(){
    createRand();
    this.setData({
      rand:rand,
    })
  }
})