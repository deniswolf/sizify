(function($) {
	$(document).ready(function() {
		var style = {
			'font-family': '',
			'font-size': '',
			'max-width': '',
			'text-input': ''
		};

		function updater(el, attr, event) {
			var data = $(this).val();

			if (attr === 'text-input') return el.find('[data-sizify=text-container]').text(data);
			style[attr] = data;
			el.css(style);
		};

		window.Sizify = function(form) {

			var fontFamily = $(form).find('[data-sizify=font-family]'),
				fontSize = $(form).find('[data-sizify=font-size]'),
				maxWidth = $(form).find('[data-sizify=max-width]'),
				textInput = $(form).find('[data-sizify=text-input]'),
				textWrapper = $(form).find('[data-sizify=text-wrapper]'),
				textContainer = $(form).find('[data-sizify=text-container]'),
				changeEvent = 'input propertychange';

			fontFamily.on(changeEvent, updater.bind(fontFamily, textWrapper, 'font-family'));
			fontSize.on(changeEvent, updater.bind(fontSize, textWrapper, 'font-size'));
			maxWidth.on(changeEvent, updater.bind(maxWidth, textWrapper, 'max-width'));
			textInput.on(changeEvent, updater.bind(textInput, textWrapper, 'text-input'));

		};

		window.Sizify($('form'));
	});

})($);
