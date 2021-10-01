// pages/sankong/sankong.js
Page({
    data: {
      //死三部分数据
      HotImgUrls: [
        {
          //头像地址,文字标题,文字内容,图片地址
          title:'沂蒙山',
          content: '蒙山，古称“东蒙”、“东山”。位于山东省南部蒙阴县境内，东西雄列，绵延百余里。主峰海拔1156米，为山东省第二高峰，淮河流域最高峰。生态蒙山，秀美奇特。',
          url: '/images/l5.jpg'
        },
        {
          title: '孔庙',
          content: '始建于公元前478年，是一座规模庞大的祭祀孔子的庙宇，它是在孔子的故居上改建而成的。是中国现存规模仅次于故宫的古建筑群，堪称中国古代大型祠庙建筑的典范，是中国三大古建筑群之一。',
          url: '/images/l6.jpg'
        },
        {
          title: '孔林',
          content: '孔林，又称至圣林，位于山东省曲阜市城北1.5千米处，是孔子及其后裔的家族墓地，与孔府、孔庙统称“三孔”。',
          url: '/images/l7.jpg'
        },
        {
          title: '孔府',
          content: '曲阜孔庙（Temple of Confucius， Qufu），又称“阙里至圣庙”，位于曲阜市中心鼓楼西侧300米处。',
          url: '/images/l8.jpg'
        }
      ],
      indicatorDots: true, //显示面板显示点
      autoplay: false,  //自动切换
      interval: 5000,  //切换时间
      duration: 1000  //动画时长
    },
})