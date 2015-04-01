	var expect = chai.expect;

	describe("Sizify", function() {
		before(function() {
			this.form = $('form');
			var _sizify = this._sizify = Sizify(this.form);
			this.setAllParams = function(font, size, width, text) {
				_sizify.fontFamily.val(font);
				_sizify.fontFamily.trigger(_sizify.changeEvent);
				_sizify.fontSize.val(size);
				_sizify.fontFamily.trigger(_sizify.changeEvent);
				_sizify.maxWidth.val(width);
				_sizify.maxWidth.trigger(_sizify.changeEvent);
				_sizify.textInput.val(text);
				_sizify.maxWidth.trigger(_sizify.changeEvent);
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
			});
		});


	});
