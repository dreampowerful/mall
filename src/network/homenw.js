import {requestd} from '@/network/requestd'
//
export function homenw() {
  return requestd({
    url: '/home/multidata'
  })
}

export function gethomeGoods(type, page) {
  return requestd({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
