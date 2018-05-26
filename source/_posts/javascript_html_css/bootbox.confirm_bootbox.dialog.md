---
title: bootbox   
date: 2018-05-1 17:21:51
tags: [bootbox, frontent, confirm dialog ]
---

```
var confirmBox = function() {
    bootbox.confirm({
        buttons: {
            confirm: {
                label: '确认按钮',
                className: 'btn-sm btn-primary'
            },
            cancel: {
                label: '取消按钮',
                className: 'btn-sm btn-default'
            }
        },
        message: '提示信息',
        callback: function(result) {
            if (result) {
                console.log('点击确认按钮了');
            } else {
                //return false
            }
        },
        //title: "bootbox confirm也可以添加标题哦",  
    });

    return
}
```

```
bootbox.dialog({
    title : "修改密码",
    message : "<div class='well ' style='margin-top:25px;'><form class='form-horizontal' role='form'><div class='form-group'><label class='col-sm-3 control-label no-padding-right' for='txtOldPwd'>旧密码</label><div class='col-sm-9'><input type='text' id='txtOldPwd' placeholder='请输入旧密码' class='col-xs-10 col-sm-5' /></div></div><div class='space-4'></div><div class='form-group'><label class='col-sm-3 control-label no-padding-right' for='txtNewPwd1'>新密码</label><div class='col-sm-9'><input type='text' id='txtNewPwd1' placeholder='请输入新密码' class='col-xs-10 col-sm-5' /></div></div><div class='space-4'></div><div class='form-group'><label class='col-sm-3 control-label no-padding-right' for='txtNewPwd2'>确认新密码</label><div class='col-sm-9'><input type='text' id='txtNewPwd2' placeholder='再次输入新密码' class='col-xs-10 col-sm-5' /></div></div></form></div>",
    buttons : {
        "success" : {
            "label" : "<i class='icon-ok'></i> 保存",
            "className" : "btn-sm btn-success",
            "callback" : function() {
                var txt1 = $("#txtOldPwd").val();
                var txt2 = $("#txtNewPwd1").val();
                var txt3 = $("#txtNewPwd2").val();
 
                if(txt1 == "" || txt2 == "" || txt3 == ""){
                    bootbox.alert("密码不能为空");
                    return false;
                }
                if(txt2 != txt3 ){
                    bootbox.alert("两次输入新密码不一致，请重新输入!");
                    return false;
                }
                var info = {"opt":"changepassword","oldpwd":txt1,"newpwd1":txt2,"newpwd2":txt3};
                //$.post("../CommonServlet",info,function(data){
                    bootbox.alert("密码更新成功");
                //},'json');
            }
        },
        "cancel" : {
            "label" : "<i class='icon-info'></i> 取消",
            "className" : "btn-sm btn-danger",
            "callback" : function() { }
        }
    }
});
```