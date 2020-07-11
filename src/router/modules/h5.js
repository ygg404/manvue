import gdetail from '@/views/h5/gdetail'
import h5index from '@/views/h5/index'
import search from '@/views/h5/search'

export function getRouterList () {
  return [
    {
      path: '/',
      name: 'h5index',
      component: h5index
    },
    {
      path: '/h5index',
      name: 'h5index',
      component: h5index
    },
    {
      path: '/gdetail',
      name: 'gdetail',
      component: gdetail
    },
    {
      path: '/search',
      name: 'search',
      component: search
    }
  ]
}
