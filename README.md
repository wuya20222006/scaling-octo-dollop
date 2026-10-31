# LibreTV-custom

基于 LibreTV 开源项目的注入定制版本，协议：**GNU Affero General Public License v3.0（AGPL-3.0）**

## 改动说明

本项目**不直接修改 LibreTV 原始源码**，通过前端注入脚本（`custom-inject.js`）实现附加功能：

1. 页面顶部增加常驻按钮：**打赏或算卦和看八字**
2. 按钮右侧文案：**服务与支持请联系：tspshanyuan**
3. 新增居中放大打赏弹窗，展示微信收款码 + 支付宝收款码 + 自愿声明 + 微信号
4. 关闭弹窗后，可重复点击顶部按钮重新唤起

## 源码仓库地址
本定制版本源码仓库：https://github.com/wuya20222006/scaling-octo-dollop

## 上游原版项目

【https://github.com/LibreSpark/LibreTV】

## 本仓库包含内容

- `custom-inject.js` —— 全部新增逻辑的实际运行源码
- `LICENSE` —— AGPL-3.0 许可证
- `README.md` —— 本说明
- `wechat.png` / `alipay.jpg` —— 打赏弹窗用收款码图片资源

## 如何复现

将本仓库内的 `custom-inject.js` 注入到原版 LibreTV 页面 `</body>` 标签之前，并把收款码图片部署到 `public/donation/` 目录，即可复现本分发版本。

## 许可证

本衍生作品遵循 GNU Affero General Public License v3.0。任何人可自由获取、修改、分发本作品；所有衍生作品同样必须遵守 AGPL-3.0。

完整许可证文本见本仓库 `LICENSE` 文件。
