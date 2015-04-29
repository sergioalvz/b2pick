/*global beforeEach, describe, it, assert, expect  */
'use strict';

describe('LatLng Model', function () {
    beforeEach(function () {
        this.LatLngModel = new B2pick.Models.LatLng({
            lat: 3,
            lng: 5
        });
    });

    describe('#initialize', function() {
        it('builds the object correctly', function() {
            var expectedLat = 3;
            var expectedLng = 5;
            var lat = this.LatLngModel.get('lat');
            var lng = this.LatLngModel.get('lng');

            lat.should.equal(expectedLat);
            lng.should.equal(expectedLng);
        });
    });

    describe('.parseFromGoogleLatLng', function() {
      it('creates a new LatLng model by using the Google\'s LatLong object API', function() {
        var mock = {
          lat: function() {
            return 10;
          },
          lng: function() {
            return -4;
          }
        }

        var latLng = B2pick.Models.LatLng.parseFromGoogleLatLng(mock);

        var expectedLat = 10;
        var expectedLng = -4;
        var lat = latLng.get('lat');
        var lng = latLng.get('lng');

        lat.should.equal(expectedLat);
        lng.should.equal(expectedLng);
      })
    });
});
