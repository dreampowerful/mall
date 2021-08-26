//详情页面的网络请求
import {requestd} from '@/network/requestd'

//获取点击指定的详情页
export function detailNetwork(iid) {
  return requestd({
    url: '/detail/',
    params: {
      iid
    }
  })
}

//获取详情页的推荐信息
export function recommended() {
  return requestd({
    url: '/recommend/'
  })
}

//这里用构造函数把介绍的相关数据整合在一起
//滚动图下面商品价格标题等简介
export class goodInfo {
  constructor(itemInfo, columns, services) {
    // this.title = itemInfo.title这是js的构造函数定义属性的写法
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}

//商店简介
export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
  }
}

export class GoodsParam {
  constructor(info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}
