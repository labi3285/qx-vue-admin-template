import Vue from 'vue'
import SvgIcon from '@/components/qx-svg-icon'// svg组件

// register globally 注册到全局
Vue.component('svg-icon', SvgIcon)

const req = require.context('./icons', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)