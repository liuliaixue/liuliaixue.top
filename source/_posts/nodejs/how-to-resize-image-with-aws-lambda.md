---
title: how-to-resize-image-with-aws-lambda
date: 2018-06-05 17:21:51
tags: [nodejs, AWS-lambda, image-resize]

---

## 如何用AWS lambda改变图片尺寸
[Resize Images on the Fly with Amazon S3, AWS Lambda, and Amazon API Gateway](https://aws.amazon.com/cn/blogs/compute/resize-images-on-the-fly-with-amazon-s3-aws-lambda-and-amazon-api-gateway/)

### 创建并配置桶
- 创建一个桶 ${your_bucket_name}
- 配置 权限/存储桶策略
```
{
    "Version": "2012-10-17",
    "Id": "${your_policy_Id}",
    "Statement": [
        {
            "Sid": "${your_policy_statement_sid}",
            "Effect": "Allow",
            "Principal": "*",//${your_statement_principal},if you don't konw that,use '*' as default, delete this comments when you use it
            "Action": [
                "s3:DeleteObject",
                "s3:GetObject",
                "s3:PutObject"
            ],
            "Resource": "arn:aws:s3:::${your_bucket_name}/*"
        }
    ]
}
```
- 启用 属性/静态网站托管, 索引文档填入index.html,将会用到静态网址 ${your_s3_static_hostname}

### 创建lamdba函数
- 如果你想用lambda,应该先开通这个应用
- 创建lamdba function,选择空白函数，下一步
- 配置触发器，选择 API Gateway,安全性，选择打开，下一步
- 名称 resize,运行语言 Node.js 6.10.0,代码输入种类  ![上传.zip](https://github.com/awslabs/serverless-image-resizing/raw/master/dist/function.zip)
- 环境变量 BUCKET is ${your_bucket_name},URL is ${your_s3_static_hostname}
- 创建一个普通角色，下面是创建信息
```
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "logs:CreateLogGroup",
        "logs:CreateLogStream",
        "logs:PutLogEvents"
      ],
      "Resource": "arn:aws:logs:*:*:*"
    },
    {
      "Effect": "Allow",
      "Action": "s3:PutObject",
      "Resource": "arn:aws:s3:::${your_bucket_name}/*"    
    }
  ]
}
```
  - 内存选择 1536，超时选择 10s,下一步，创建

  ## 设置s3重定向
  - lambda.resize/触发器，复制这个触发器的主网址${your_trigger_hostname}
  //such as your_trigger_host = 'xxxxxxxxx.execute-api.us-west-2.amazonaws.com';
  - s3/${your_bucket_name}/属性/静态网站托管/重定向规则
  ```
  <RoutingRules>
    <RoutingRule>
        <Condition>
            <KeyPrefixEquals/>
            <HttpErrorCodeReturnedEquals>404</HttpErrorCodeReturnedEquals>
        </Condition>
        <Redirect>
            <Protocol>https</Protocol>
            <HostName>${your_trigger_hostname}</HostName>
            <ReplaceKeyPrefixWith>prod/${your_lambda_resize_name}?key=</ReplaceKeyPrefixWith>
            <HttpRedirectCode>307</HttpRedirectCode>
        </Redirect>
    </RoutingRule>
</RoutingRules>
  ```

### 测试

上传一张图片 test.jpg
```
http://${your_s3_static_hostname}/300×300/test.jpg
http://${your_s3_static_hostname}/25×25/test.jpg
http://${your_s3_static_hostname}/500×500/test.jpg
```

### 完