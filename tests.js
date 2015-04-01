	var expect = chai.expect;

	describe("Sizify", function() {
		before(function() {
			this.form = $('form');
			var _sizify = this._sizify = Sizify(this.form);
			this.setAllParams = function(font, size, width, text) {
				var changeEvent = _sizify.changeEvent.split(' ')[0];
				_sizify.fontFamily.val(font);
				_sizify.fontFamily.trigger(changeEvent);
				_sizify.fontSize.val(size);
				_sizify.fontFamily.trigger(changeEvent);
				_sizify.maxWidth.val(width);
				_sizify.maxWidth.trigger(changeEvent);
				_sizify.textInput.val(text);
				_sizify.textInput.trigger(changeEvent);
			};

		});
		describe("plugin", function() {
			it("is defined", function() {
				expect(typeof Sizify).to.equal("function");
			});
		});

		describe("helpers", function() {
			describe('setAllParams', function() {
				it('does not throw', function() {
					this.setAllParams('serif', 10, 150, '');
				});
				it('sets text', function() {
					var testText = 'test text';
					this.setAllParams('serif', 10, 150, testText);
					expect(this._sizify.textContainer.text()).to.equal(testText);
				});
			});
		});

		describe('width calculation', function() {
			it('works with the empty text', function() {
				this.setAllParams('serif', 10, 150, '');
				expect(this._sizify.widthResult.val()).to.equal('0');
			});
		});

	});
