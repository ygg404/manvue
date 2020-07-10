/**
 * 开发环境
 */
;(function () {
  window.SITE_CONFIG = {};

  // api接口请求地址
  window.SITE_CONFIG['baseUrl'] = 'http://localhost:19003/mansys/webapi';
  // 文件地址
  window.SITE_CONFIG['uploadUrl'] = 'http://localhost:19003/uploadFile/';
  // 后台ip
  window.SITE_CONFIG['server'] = 'http://game.yggnb.cn/';

  // cdn地址 = 域名 + 版本号
  window.SITE_CONFIG['domain']  = './'; // 域名
  window.SITE_CONFIG['version'] = '';   // 版本号(年月日时分)
  window.SITE_CONFIG['cdnUrl']  = window.SITE_CONFIG.domain + window.SITE_CONFIG.version;
})();
