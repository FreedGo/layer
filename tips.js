/**
 * Created by Freed on 2017/8/24.
 * E-mail:flyxz@126.com.
 * GitHub:FreedGo@github.com.
 */

!function(window) {
	function tips(data,el) {
		var _this = this;
		// 默认配置
		var config = {
			type:'info',             //弹窗类型 info，log，error,warn
			text:'我是随便什么内容',   //显示内容
			title:'提示',            //info的标题
			size:[300,200],          //info的宽，高
			timeout:false,           //是否关闭，如果是要自动关闭，输入毫秒时间
			zIndex:1000,             //z-index值
			btns:[
				{title:'确定关闭',btnid:'tipsBtn1',Clickhandle:function () {
					tip.close();
					console.log('确定关闭')
				}}
			],//最多三个按钮     //按钮
			elid:'tips' + parseInt(Math.random()*100000000), //窗口的id
			endHandle:function () {                          //窗口关闭后执行的事件
				console.log('tips消失了')
			}
		};
		// 混入传入的配置
		for( i in config){
			this[i] = data[i]? data[i]:config[i];
		}
		// 提示窗口打开
		this.open = function () {
			var el;
			el = document.createElement('div');   //创建tips的div
			el.id = _this.id;                     //设置id，用来标记
			el.style.zIndex = _this.zIndex;       //设置层叠权重
			el.className = 'tips';                //设置class，以便样式

			//根据不同的类型生成不同的窗口

			switch (_this.type){
				case 'info':
					el.innerHTML = '<div class="tip-head"><h2>' + this.title+
						'</h2><span id="tipClose" class="tip-close">×</span></div><div class="tip-content"><p id="tipText">' + this.text +
						'</p></div><div id="tipFoot" class="tip-foot"></div>';
					document.body.appendChild(el);
					_this.addBtns();
					// 设置style
					el.style.width = this.size[0] + 'px';
					el.style.height = this.size[1] + 'px';
					// 关闭按钮
					document.getElementById('tipClose').onclick = function () {
						_this.close();
					};
					// 是否定时器关闭
					if(_this.timeout&&_this.timeout>0){
						setTimeout(_this.close,_this.timeout);
					}
					break;
				case 'log':
					el.innerHTML = '<div class="tip-content"><p>' + this.text +
						'</p></div>';
					document.body.appendChild(el);
					// 设置style
					el.style.color = '#fff';
					el.style.backgroundColor = 'rgba(0,0,0,0.5)';

					// 是否定时器关闭
					if(_this.timeout&&_this.timeout>0){
						setTimeout(_this.close,_this.timeout);
					}else{
						setTimeout(_this.close,3000);
					}
					break;
				case 'error':
					el.innerHTML = '<div class="tip-content"><p class="tipsIcon"><img src="./icon/error.jpg" alt=""></p>' +
						'<p id="tipsText">' + this.text +
						'</p></div><div id="tipFoot" class="tip-foot"></div>';
					document.body.appendChild(el);
					// 生成按钮并加载按钮事件
					_this.addBtns();
					// 设置style
					el.style.width = this.size[0] + 'px';
					document.getElementById('tipsText').style.textAlign = 'center';
					// 是否定时器关闭
					if(_this.timeout&&_this.timeout>0){
						setTimeout(_this.close,_this.timeout);
					}else{
						setTimeout(_this.close,3000);
					}
					break;
				case 'warn':
					el.innerHTML = '<div class="tip-content"><p class="tipsIcon"><img src="./icon/warn.jpg" alt=""></p>' +
						'<p id="tipsText">' + this.text +
						'</p></div><div id="tipFoot" class="tip-foot"></div>';
					document.body.appendChild(el);
					// 生成按钮并加载按钮事件
					_this.addBtns();
					// 设置style
					el.style.width = this.size[0] + 'px';
					document.getElementById('tipsText').style.textAlign = 'center';
					// 是否定时器关闭
					if(_this.timeout&&_this.timeout>0){
						setTimeout(_this.close,_this.timeout);
					}else{
						setTimeout(_this.close,3000);
					}
					break;
				default:
					console.log('类型错误');
					el.innerHTML = '<div class="tip-content"><p class="tipsIcon"><img src="./icon/error.jpg" alt=""></p>' +
						'<p id="tipsText">' + this.text +
						'</p></div><div id="tipFoot" class="tip-foot"></div>';
					document.body.appendChild(el);
					// 生成按钮并加载按钮事件
					_this.addBtns();
					// 设置style
					el.style.width = this.size[0] + 'px';
					document.getElementById('tipsText').style.textAlign = 'center';
					// 是否定时器关闭
					if(_this.timeout&&_this.timeout>0){
						setTimeout(_this.close,_this.timeout);
					}else{
						setTimeout(_this.close,3000);
					}
					break;
			}
		};
		// 提示窗口关闭
		this.close = function () {
			var el;
			try {
				el = document.getElementById(this.id);
				el.style.display = 'none';
				_this.endHandle();
			}catch (e){
				throw e;
			}
		};
		// 增肌btn并绑定事件
		this.addBtns = function () {
			var btnWarp = document.getElementById('tipFoot');
			if (_this.btns.length>0){
				var btnLength = _this.btns.length>3?3:_this.btns.length;
				for(var i = 0; i < btnLength; i++){
					var btn = document.createElement('button');
					btn.innerText = _this.btns[i].title;
					btn.onclick = _this.btns[i].Clickhandle;
					btnWarp.appendChild(btn);
				}
			}
		}
	}


	// 挂载到window对象上
	return window.tips = tips;

}(window);


