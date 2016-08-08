(function() {

	// Works as expected
	describe('chai as promised', function() {

		it('should resolve a promise', function() {
			var promise = new Promise(function( resolve ) {
				setTimeout( resolve, 1000 );
			});
			return expect( promise ).to.have.been.fulfilled;
		});

	});

	// Fails
	describe('sinon.useFakeTimers()', function() {

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

	// Workaround - restore the timer before completion of the test
	describe('sinon.useFakeTimers()', function() {

		before(function() {
			this.clock = sinon.useFakeTimers();
		});

		it('should resolve a promise after ticking', function() {

			var promise = new Promise(function( resolve ) {
				setTimeout( resolve, 1000 );
			});

			this.clock.tick( 1001 );
			this.clock.restore();

			return expect( promise ).to.have.been.fulfilled;
		});

	});

    describe( 'fatso83 test', function() {
        before(function() {
            this.clock = sinon.useFakeTimers();
        });

        it('should resolve a promise after ticking', function(done) {

            var promise = new Promise(function( resolve ) {
                setTimeout( resolve, 10000 );
            });

            this.clock.tick( 10001 );

            promise
                .then(done) // call done when the promise completes
                .catch(done); // catch any accidental errors
        });

        it('should resolve a promise after ticking', function() {
            var promise = new Promise(function( resolve ) {
                setTimeout( resolve, 10000 );
            });

            this.clock.tick( 10001 );

            return promise;
        });
    });

})();
