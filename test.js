(function() {
	
	describe('sinon.useFakeTimers()', function() {

		var page;

		before(function() {
			this.clock = sinon.useFakeTimers();
		});

		after(function() {
			this.clock.restore();
		});

		it('should resolve a promise after ticking', function() {

			var promise = new Promise(function( resolve ) {
				setTimeout( resolve, 1000 );
			});

			this.clock.tick( 1001 );

			return expect( promise ).to.have.been.fulfilled;
		});

	});

})();