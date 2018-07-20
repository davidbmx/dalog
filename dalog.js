(function(){

	var style = {
		"backgroundColor": "rgba(29,29,29,.4)",
		"color": "#fff",
		"position": "absolute",
		"top": "10px",
		"right": "0",
		"border": "1px solid red",
		"width": "250px",
		"maxHeight": "400px",
		"padding": "20px",
		"wordWrap": "break-word",
		"overflowY": "scroll"
	};
	
	function createElement(el, styles){
		var _el = document.createElement(el);
		if(style)
			Object.assign(_el.style, styles);
		return _el;
	}
	
	function log(msg){
		if(!parentElement){
			parentElement = createElement('div', style);
			parentElement.id = 'dalog';
			document.body.append(parentElement);
		}
		var newElement = createElement('div');
		if(typeof msg === 'object')
			msg = JSON.stringify(msg);
		newElement.innerText = msg;
		parentElement.append(newElement);
	}
	
	window.dalog = {
		log:log
	};
})();

dalog.log('sdsd');