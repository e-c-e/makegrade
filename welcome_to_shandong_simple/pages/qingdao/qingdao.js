// pages/qingdao/qingdao.js
Page({
    data: {
      //死三部分数据
      HotImgUrls: [
        {
          //头像地址,文字标题,文字内容,图片地址
          title:'五月的风',
          content: '五月的风是坐落在青岛“五四广场”的标志性雕塑，作者是黄震，高达30米，直径27米，重达500余吨，为我国最大的钢质城市雕塑。',
          url: '/images/q5.jpg'
        },
        {
          title: '石老人海水浴场',
          content: '石老人海水浴场位于崂山区海尔路南端，是青岛市区最大的海水浴场之一。',
          url: '/images/q6.jpg'
        },
        {
          title: '崂山',
          content: '崂山，位于山东省青岛市崂山区，古代又曾称牢山、劳山、鳌山等。',
          url: '/images/q7.jpg'
        },
        {
          title: '中山公园',
          content: '与青岛天泰体育场一路之隔的是青岛的综合性公园——中山公园。公园三面环山，南向大海。',
          url: '/images/q8.jpg'
        }
      ],
      indicatorDots: true, //显示面板显示点
      autoplay: false,  //自动切换
      interval: 5000,  //切换时间
      duration: 1000  //动画时长
    },
})