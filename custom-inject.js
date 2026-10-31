/*
 * LibreTV-custom 注入脚本（custom-inject.js）
 * 说明：本文件为 LibreTV 二次修改版本全部新增功能的实际运行源码。
 * 新增功能：
 *   1. 页面顶部增加常驻按钮：打赏或算卦和看八字
 *   2. 按钮右侧文案：服务与支持请联系：tspshanyuan
 *   3. 居中放大打赏弹窗，展示微信收款码 + 支付宝收款码 + 自愿声明 + 微信号
 *   4. 关闭弹窗后，可重复点击顶部按钮重新唤起
 * 部署方式：将本脚本内容注入到 LibreTV 页面 </body> 前即可复现该分发版本。
 * 协议：GNU Affero General Public License v3.0
 * 参考图片资源：wechat.png（微信收款码）、alipay.jpg（支付宝收款码），部署到 public/donation/ 目录。
 */

(function(){
(function(){
  function showBox(){ var b=document.getElementById('libretv-donation-box'); if(b){ b.style.display='block'; } }
  function ensureBox(){
    if (document.getElementById('libretv-donation-box')) return;
    var b = document.body;
    if (!b) return;
    var d = document.createElement('div');
    d.id = 'libretv-donation-box';
    d.setAttribute('style','position:fixed;z-index:99999;left:50%;top:50%;transform:translate(-50%,-50%);width:480px;max-width:92vw;max-height:88vh;overflow-y:auto;background:#0b101a;color:#f2f5fa;border:1px solid #2a3547;border-radius:16px;padding:20px;font-family:-apple-system,"Segoe UI","PingFang SC","Microsoft YaHei",sans-serif;box-shadow:0 12px 40px rgba(0,0,0,.5);box-sizing:border-box;');
    d.innerHTML =
      '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;">'+
        '<div style="font-size:20px;font-weight:700;">打赏位置</div>'+
        '<button id="libretv-donation-close" style="border:none;background:none;color:#8b96a8;font-size:22px;cursor:pointer;line-height:1;">×</button>'+
      '</div>'+
      '<div style="display:flex;gap:12px;margin-bottom:14px;">'+
        '<img src="/donation/wechat.png" alt="微信收款码" style="width:50%;height:auto;border-radius:8px;display:block;object-fit:contain;" loading="lazy"/>'+
        '<img src="/donation/alipay.jpg" alt="支付宝收款码" style="width:50%;height:auto;border-radius:8px;display:block;object-fit:contain;" loading="lazy"/>'+
      '</div>'+
      '<div style="font-size:14px;color:#9aa7ba;margin-bottom:12px;text-align:center;">打赏纯属自愿，不影响本软件的正常使用。</div>'+
      '<div style="font-size:15px;color:#f2f5fa;line-height:1.6;text-align:center;">接算卦，看八字等，需要的加微信：<span style="color:#ffd166;font-weight:600;user-select:all;">tspshanyuan</span></div>';
    var c = d.querySelector('#libretv-donation-close');
    if (c) c.addEventListener('click', function(){ d.style.display='none'; });
    b.appendChild(d);
  }
  function ensureBtn(){
    var h1 = document.querySelector('h1');
    var target = (h1 && h1.parentElement) ? h1.parentElement : document.body;
    var wrap = document.getElementById('libretv-donation-wrap');
    if (!wrap) {
      wrap = document.createElement('div');
      wrap.id = 'libretv-donation-wrap';
      wrap.setAttribute('style','display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:14px;margin-top:12px;');
      var btn = document.createElement('button');
      btn.id = 'libretv-donation-btn';
      btn.type = 'button';
      btn.setAttribute('style','display:inline-flex;align-items:center;justify-content:center;padding:9px 24px;font-size:15px;font-weight:700;color:#1a1206;background:linear-gradient(135deg,#ffd166,#ff9f43);border:none;border-radius:999px;cursor:pointer;box-shadow:0 4px 14px rgba(255,159,67,.35);font-family:inherit;line-height:1.4;');
      btn.textContent = '打赏或算卦和看八字';
      btn.addEventListener('click', function(){ showBox(); });
      wrap.appendChild(btn);
      var span = document.createElement('span');
      span.setAttribute('style','display:inline-flex;align-items:center;font-size:15px;font-weight:600;color:#ffd166;line-height:1.4;font-family:inherit;white-space:nowrap;');
      span.textContent = '服务与支持请联系：tspshanyuan';
      wrap.appendChild(span);
      target.appendChild(wrap);
    } else if (wrap.parentElement !== target) {
      target.appendChild(wrap);
    }
  }
  ensureBox();
  ensureBtn();
  if (window.MutationObserver) {
    var mo = new MutationObserver(function(){ ensureBox(); ensureBtn(); });
    mo.observe(document.documentElement, {childList:true, subtree:true});
  } else {
    setInterval(function(){ ensureBox(); ensureBtn(); }, 1500);
  }
})();
})();
