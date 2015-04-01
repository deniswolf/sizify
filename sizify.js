(function($) {
	$(document).ready(function() {

		window.Sizify = function(form) {
			var _sizify = {};

			var fontFamily = _sizify.fontFamily = $(form).find('[data-sizify=font-family]'),
				fontSize = _sizify.fontSize = $(form).find('[data-sizify=font-size]'),
				maxWidth = _sizify.maxWidth = $(form).find('[data-sizify=max-width]'),
				textInput = _sizify.textInput = $(form).find('[data-sizify=text-input]'),
				escapeSpaces = _sizify.escapeSpaces = $(form).find('[data-sizify=escape-spaces]'),
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

			var escapeSpacesEnabled = false;

			function updater(el, attr, event) {
				var data = $(this).val();
				var text = '';

				if (attr === 'text-input') {
					text = escapeSpaces.prop('checked') ? data.replace(new RegExp(' ', 'g'), '&nbsp;') : data;
					el.find('[data-sizify=text-container]').html(text);
				} else {
					style[attr] = data;
					el.css(style);
				}
				widthResult.text(calculateWidth(textContainer));
				linesResult.text(calculateLines(textContainer));
			}

			function calculateWidth(el) {
				return $(el).outerWidth();
			}

			function calculateLines(el) {
				// based on the snippet from http://jsfiddle.net/vWhd5/14/
				var $el = $(el),
					lh = $el.css('line-height'),
					ws = $el.css('white-space');
				if (lh === 'normal') {
					$el.css('white-space', 'nowrap');
					lh = $el.height();
					$el.css('white-space', ws);
				}

				return Math.ceil($el.height() / parseInt(lh, 10));
			}

			fontFamily.on(changeEvent, updater.bind(fontFamily, textWrapper, 'font-family'));
			fontSize.on(changeEvent, updater.bind(fontSize, textWrapper, 'font-size'));
			maxWidth.on(changeEvent, updater.bind(maxWidth, textWrapper, 'max-width'));
			textInput.on(changeEvent, updater.bind(textInput, textWrapper, 'text-input'));
			return _sizify;
		};

	});

})($);
