'use strict';

describe('my app', function() {

  describe('view2', function() {

    beforeEach(function() {
      browser.get('index.html#!/view2');
    });

    it('should render view2 when user navigates to /view2', function() {
       var T=element(by.css('.TEXT'));
       var L=element.all(by.css('.TIERE')).last();

       expect(T.getText()).toMatch(/demo0/);
       expect(L.getText()).toMatch(/katze 0/);

       expect(T.getText()).toMatch(/demo1/);
       expect(L.getText()).toMatch(/maus/);

       expect(T.getText()).toMatch(/demo2/);
       expect(L.getText()).toMatch(/nilpferd 2/);

       expect(T.getText()).toMatch(/demo3/);

       expect(T.getText()).toMatch(/demo4/);

       browser.wait(function() { return T.getText() === "demo4" } );
    });

  });
});
