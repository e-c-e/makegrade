// pages/quancheng/quancheng.js
Page({
    data: {
      //死三部分数据
      HotImgUrls: [
        {
          //头像地址,文字标题,文字内容,图片地址
          title:'大明湖',
          content: '景点： 历下亭 北极阁 铁公祠 明湖碑 百花桥 天下第一泉风景区 超然楼 大明湖海底世界等。',
          url: '/images/j8.jpg'
        },
        {
          title: '芙蓉街',
          content: '芙蓉街汇聚了众多当地美食，没去过芙蓉街就没来过济南哦',
          url: '/images/j7.jpg'
        },
        {
          title: '山东博物馆',
          content: '塞综合博物馆，可全面了解山东历史文化',
          url: '/images/j5.jpg'
        },
        {
          title: '泉城广场',
          content: '济南市中心地标，来济南必去之地，这里还包含景点： 山东省科技馆 济南恒隆广场 银座购物广场(泺源大街店)',
          url: '/images/j6.jpg'
        }
      ],
      indicatorDots: true, //显示面板显示点
      autoplay: false,  //自动切换
      interval: 5000,  //切换时间
      duration: 1000  //动画时长
    },
})