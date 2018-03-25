
---
title: ping++
date: 2017-09-11 17:21:51
tags: pingpp pingpp 支付
---


# ping++ pc端支付宝支付流程

Ping++ 是为移动端应用以及 PC 网页量身打造的下一代支付系统，通过一个 SDK 便可以同时支持移动端以及 PC 端网页的多种主流支付渠道。Ping++ SDK 包括 Client SDK 和 Server SDK 两部分，支持主流的七种后端开发语言，适配了 Android，iOS 和 HTML5 三种移动端平台以及 PC 端网页。使用 SDK 发起交易的基本流程参见 SDK 交易流程 https://www.pingxx.com/guidance/products/sdk

## 配置 

SDK接入,在https://github.com/PingPlusPlus/pingpp-html5/tree/master/src
 下载pingpp-pc.js,并在页面中引入：
```
<script src="/path/to/pingpp-pc.js"></script>
```

## 获取支付凭证"charge"

创建"charge"对象，可以参考官方文档 https://www.pingxx.com/document/api#api-c-new

```
//向服务器发送请求获取订单的支付凭证，参数为[订单编号 ,支付完成后返回的地址,支付方式名称]
$.jsonrpc("chuanghe.requestPay", [orderNumber,url,channel], function(e1, r1) {
    if(r1){
        //在返回的数据中取出"charge",如r1.charge
        //发送支付请求
    }
});
```

## 发送支付请求
```
pingppPc.createPayment(charge, function(result, err){
// 处理错误信息
});
```

``` 
//b2b-store 一个支付流程的代码
$.jsonrpc("chuanghe.requestPay", [this.order.orderNumber,"http://1jia2supply.coolcto.com/#!/activity/main/store-order-edit?id="+this.id,"alipay_pc_direct"], function(e1, r1) {
    if (r1) {
        console.log(r1.depositTicket);
        pingppPc.createPayment(r1.depositTicket, function(result, err) {
        console.log(result);
        console.log(err);
        });
    }
});
return;
```

### 错误
"invalid_charge_no_such_channel"   没有这种支付方式

检查"channel"是否是"alipay_pc_direct"，检查pingpp-pc.js是pc端使用的SDK，查看代码中的对象 "channel"是否含有"alipay_pc_direct"。
SDK的脚本有两个文件，一个是手机端一个是pc端，官方API文档默认是指引到手机端的SDK，下载正确的文件就可以了

### 成功

成功后会跳转到支付宝的支付页面，在页面上可以看到支付信息



