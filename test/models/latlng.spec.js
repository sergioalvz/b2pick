/*global beforeEach, describe, it, assert, expect  */
'use strict';

describe('LatLng Model', function () {
    beforeEach(function () {
        this.LatLngModel = new B2pick.Models.LatLng({
            lat: 3,
            lng: 5
        });
    });

    describe("#initialize", function() {
        it("builds the object correctly", function() {
            var expectedLat = 3;
            var expectedLng = 5;
            var lat = this.LatLngModel.get("lat");
            var lng = this.LatLngModel.get("lng");

            lat.should.equal(expectedLat);
            lng.should.equal(expectedLng);
        });
    });
});
