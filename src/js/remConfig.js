export default function(pwidth,prem) {
    var devicePixelRatio = 1;
    var scale = 1 / devicePixelRatio;
    var meta = document.createElement('meta');
    var head = document.getElementsByTagName('head')[0];
    var firstChild = head.firstChild;
    meta.setAttribute('name','viewport');
    head.insertBefore(meta,firstChild);
    document.querySelector('meta[name="viewport"]').setAttribute('content','width=device-width,initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
    
    //根据样稿设置浏览器默认字体大小
    var html = document.getElementsByTagName("html")[0];
    var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
    html.style.fontSize = oWidth/pwidth*prem + "px";

    // 禁止双击放大
    // document.documentElement.addEventListener('touchstart', function (event) {
    //     if (event.touches.length > 1) {
    //         event.preventDefault();
    //     }
    // }, false);
    // var lastTouchEnd = 0;
    // document.documentElement.addEventListener('touchend', function (event) {
    //     var now = Date.now();
    //     if (now - lastTouchEnd <= 300) {
    //         event.preventDefault();
    //     }
    //     lastTouchEnd = now; 
    // }, false);
}