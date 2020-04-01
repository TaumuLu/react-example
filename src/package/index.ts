import { IRouters } from '../types/navigation'
import Home, { register } from './Home'
import ReactScrollPagedView from './react-scroll-paged-view'

export default [
  {
    name: 'react-scroll-paged-view',
    component: ReactScrollPagedView,
  },
  // {
  //   name: 'react-underline-tabbar',
  // },
].reduce<IRouters>(
  (p, c) => {
    register(c)
    p.push(c)
    return p
  },
  [
    {
      name: 'Home',
      component: Home,
    },
  ]
)
