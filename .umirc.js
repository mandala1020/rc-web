
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: false,
      dynamicImport: { webpackChunkName: true },
      title: 'rc-web',
      dll: true,
      
      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
}
