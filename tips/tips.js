/**
 * Created by Freed on 2017/8/24.
 * E-mail:flyxz@126.com.
 * GitHub:FreedGo@github.com.
 */
!function(window) {
	function tips(data,el) {
		// 默认配置
		var config = {
			type:'info',
			text:'我是随便什么内容',
			title:'提示',
			size:[300,200],
			shade:true,
			shadeColor:'rgba(0,0,0,1)',
			shadeClose:true,
			btns:[
				{title:'确定',Clickhandle:function () {
					console.log('点击确定')
				}}
			],
			endHandle:function () {
				console.log('tips消失了')
			}
		};
		// 混入配置
		for( i in config){
			this[i] = data[i]? data[i]:config[i];
		}
		this.open = function (config) {
			var elid = 'tips' + parseInt(Math.random()*100000000),
			    el = document.createElement('div');
				el.innerHTML = '<div class="tip-head"><h2>' + this.title+
					'</h2><span class="tip-close">×</span></div><div class="tip-content"><p>' + this.text +
					'</p></div><div class="tip-foot"><button>' + '确定'+
					'</button><button>' + '确定'+
					'</button><button>' + '确定'+
					'</button></div>';
				el.id = elid;
				el.className = 'tips';
				// 设置style
				el.style.width = this.size[0] + 'px';
				el.style.height = this.size[1] + 'px';
				document.body.appendChild(el);
		};
	}


	// 挂载到window对象上
	return window.tips = tips;

}(window);

var tip = new tips({
	title:'新提示',
});
tip.open();