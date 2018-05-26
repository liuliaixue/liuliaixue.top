---
title: stripe 接入支付宝  
date: 2018-05-1 17:21:51
tags: [ stripe, alipay, ]
---




```sequence
Note left of alipay : ...
frontend -> backend : request source
backend -> billing : request
billing -> stripe : request
stripe --> frontend : sourceObj
Note left of frontend : frontend user authentication
frontend -> alipay : open alipay QR code page
Note right of alipay : PAY STRIPE the money
alipay -> stripe : money
alipay -> frontend : redirect to redirect.[return_url]
frontend -> backend : request charge
backend -> billing : request
billing -> stripe : request
stripe --> backend : charge finished
Note right of stripe : money to MODLEO
Note left of backend : create company
backend -> frontend : finished
Note left of frontend : redirect to plan page
```
