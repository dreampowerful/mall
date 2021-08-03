import {requestd} from '@/network/requestd'

export function homenw() {
  return requestd({
    url: '/home/multidata'
  })
}
