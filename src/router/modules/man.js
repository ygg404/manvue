import index from '@/views/Index'
import comic from '@/views/comic'
import section from '@/views/section'

export function getRouterList () {
  return  [{
    path: '/',
    name: 'index',
    component: index
  }, {
    path: '/comic',
    name: 'comic',
    component: comic
  }, {
    path: '/section',
    name: 'section',
    component: section
  }]
}
