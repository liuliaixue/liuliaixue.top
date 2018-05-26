---
title: 前端表单 
date: 2018-05-1 17:21:51
tags: [jQuery, frontend ]
---

表单

#jquery select input:radio input:checkbox

1 取得下拉选单select的选取值

$('#testSelect option:selected').text();

或$("#testSelect").find('option:selected').text();

或$("#testSelect").val();

2 取得input type="radio"值 （一类radio的名字必须是相同的）

<input type="radio" name="sex" value="1" /> 男

<input type="radio" name="sex" value="2" /> 女

$('input[name="testradio"]:checked').val(); 

或$('input:radio:checked').val();
