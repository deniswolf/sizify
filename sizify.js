(function($) {
	$(document).ready(function() {

		window.Sizify = function(form) {
			var _sizify = {};

			var fontFamily = _sizify.fontFamily = $(form).find('[data-sizify=font-family]'),
				fontSize = _sizify.fontSize = $(form).find('[data-sizify=font-size]'),
				maxWidth = _sizify.maxWidth = $(form).find('[data-sizify=max-width]'),
				textInput = _sizify.textInput = $(form).find('[data-sizify=text-input]'),
				textWrapper = _sizify.textWrapper = $(form).find('[data-sizify=text-wrapper]'),
				textContainer = _sizify.textContainer = $(form).find('[data-sizify=text-container]'),
				changeEvent = _sizify.changeEvent = 'input propertychange',
				widthResult = _sizify.widthResult = $(form).find('[data-sizify=width-result]'),
				linesResult = _sizify.linesResult = $(form).find('[data-sizify=lines-result]');

			var style = {
				'font-family': '',
				'font-size': '',
				'max-width': '',
				'text-input': ''
			};

			function updater(el, attr, event) {
				var data = $(this).val();

				if (attr === 'text-input') {
					el.find('[data-sizify=text-container]').text(data);
				} else {
					style[attr] = data;
					el.css(style);
				}
				widthResult.text(calculateWidth(textContainer));
			}

			function calculateWidth(el) {
				return $(el).outerWidth();
			}

			fontFamily.on(changeEvent, updater.bind(fontFamily, textWrapper, 'font-family'));
			fontSize.on(changeEvent, updater.bind(fontSize, textWrapper, 'font-size'));
			maxWidth.on(changeEvent, updater.bind(maxWidth, textWrapper, 'max-width'));
			textInput.on(changeEvent, updater.bind(textInput, textWrapper, 'text-input'));

			return _sizify;
		};

	});

})($);
