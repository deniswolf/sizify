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
				_sizify.fontSize.trigger(changeEvent);
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
				var calculatedWidth = this._sizify.widthResult.text();
				expect(calculatedWidth).to.equal('0');
			});
			it('works with non-empty text', function() {
				var example =
					'At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies.';
				this.setAllParams('serif', 10, 150, example);
				var calculatedWidth = parseInt(this._sizify.widthResult.text(), 10);
				expect(calculatedWidth).to.be.within(145, 150);
			});
			describe('with enabled escaped white spaces', function() {
				before(function() {
					this._sizify.escapeSpaces.prop('checked', true);
				});
				after(function() {
					this._sizify.escapeSpaces.prop('checked', false);
				});
				it('turn the long text into single line', function() {
					var example = ' In all web development                                         technologies.';
					this.setAllParams('serif', 10, 150, example);
					var calculatedWidth = parseInt(this._sizify.widthResult.text(), 10);
					expect(calculatedWidth).to.be.above(200);
				});
			});

		});

		describe('number of lines calculation', function() {
			it('works with the empty text', function() {
				this.setAllParams('serif', 10, 150, '');
				var calculatedLines = this._sizify.linesResult.text();
				expect(calculatedLines).to.equal('0');
			});
			it('works with non-empty text', function() {
				var example =
					'At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies.';
				this.setAllParams('serif', 10, 150, example);
				var calculatedLines = parseInt(this._sizify.linesResult.text(), 10);
				expect(calculatedLines).to.equal(4);
			});
			describe('with enabled escaped white spaces', function() {
				before(function() {
					this._sizify.escapeSpaces.prop('checked', true);
				});
				after(function() {
					this._sizify.escapeSpaces.prop('checked', false);
				});
				it('turn the long text into single line', function() {
					var example = ' In all web development                                         technologies.';
					this.setAllParams('serif', 10, 150, example);
					var calculatedLines = parseInt(this._sizify.linesResult.text(), 10);
					expect(calculatedLines).to.equal(1);
				});
			});
		});

	});
