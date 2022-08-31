// 配置文件
export default {
  npmClient: 'pnpm',
  plugins: ['@umijs/plugins/dist/locale'],  // 单独安装@umijs/plugins后，启用 i18n 插件
  locale: {
    antd: true, // 如果项目依赖中包含 `antd`，则默认为 true
    baseNavigator: true,
    baseSeparator: '-',
    default: 'zh-TW', // 默认使用 src/locales/zh-CN.ts 作为多语言文件
    title: false,
    useLocalStorage: true,
  },
  history: {
    type: 'hash'
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      redirect: '/index',
    },
    { path: '/index', component: 'index' },
    { path: '/docs', component: 'docs' },
  ],
};
