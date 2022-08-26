// 该文件为项目级插件
// 如：能够通过提供的大量的 html 快捷操作 api 来拼成最终 html
// https://github.com/umijs/umi-next/issues/868#issuecomment-1151088426
import { IApi } from 'umi';

export default (api: IApi) => {
  // 添加iconfont在线地址
  api.modifyHTML(($) => {
    $('head').append([
      `<link rel="stylesheet" href="//at.alicdn.com/t/c/font_3591347_7kfg12q5abm.css" />`,
    ])
    return $;
  });
};