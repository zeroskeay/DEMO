var TOOLS = {};

// 对于jq ajax的基本封装，调用方式跟jq ajax相同，只是作用域不同
// 增加succ_callBack、error_callBack 回调
// 目的对于jq ajax方法信息做统一处理
TOOLS.ajax = function(opts){
	var defaultOpts = {
		url:'',
		param:{},
		type:'GET',
		timeout:10000,
		dataType:'json',
	}

	opts = Object.assign({},defaultOpts,opts);

	$.ajax({
		url: opts.url,
		data: opts.param,
		type: opts.type,
		dataType: opts.dataType,
		timeout: opts.timeout,
		beforeSend:function(XMLHttpRequest){
			// 请求之前操作
		},
		success:function(data, textStatus){
			// 成功处理
			opts.success && opts.success(data);
		},
		error:function(XMLHttpRequest, textStatus, errorThrown){
			opts.error && opts.error();
		},
		complete:function(XMLHttpRequest, textStatus){
			if(textStatus === 'timeout'){
				throw new Error('网络超时！');
			}else if(textStatus === 'success'){
				opts.succ_callBack && opts.succ_callBack();
			}else if(textStatus === 'error'){
				opts.error_callBack && opts.error_callBack();
			}else{
				throw new Error('请求异常,异常信息为：' + textStatus);
			}
		}
	});
}