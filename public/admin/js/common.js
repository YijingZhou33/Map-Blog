function serializeToJson(form) {
    // 将数组转换为对象 --> 自己创建一个对象
    // {email: 'zhou1439@umn.edu', password: '123456'}
    var result = {};
    // 获取表单中用户输入的内容
    // 返回值为数组
    // [{name:'email', value:'用户输入的内容'}, {name:'password', value:'用户输入的内容'}]
    var form = form.serializeArray();
    form.forEach(function(item) {
        // result.email = 
        result[item.name] = item.value;
    });
    // 返回对象
    return result;
};