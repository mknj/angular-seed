'use strict';

describe('my app', function() {

  describe('view2', function() {

    beforeEach(function() {
      browser.get('index.html#!/view2');
    });

    it('should render view2 when user navigates to /view2', function() {
       var T=element(by.css('.TEXT'));
       var L=element.all(by.css('.TIERE')).last();

//       expect(T.getText()).toMatch(/demo0/);
//       expect(L.getText()).toMatch(/katze 0/);

       expect(T.getText()).toMatch(/demo1/);
       expect(L.getText()).toMatch(/maus/);

        T.click();
       browser.wait(function() { console.log("A");return T.getText().then(
           function(t) {return t === "demo2" })} );

       expect(T.getText()).toMatch(/demo2/);
       expect(L.getText()).toMatch(/nilpferd 2/);


        //expect(T.getText()).toMatch(/demo3/);


        // Weil die Variable über setTimeout geändert wird
        browser.wait(function() { return T.getText().then(
            function(t) {console.log("C");return t === "2.5*a" })} );

       expect(T.getText()).toMatch(/demo4/);

        browser.wait(function() { return T.getText().then(
            function(t) {console.log("D");return t === "demo5" })} );

        expect(T.getText()).toMatch(/demo5/);

        // demo6 funktioniert nur unter google chrome, anscheinend hat die direkte DOM Manipulation bei demo5 angular zerschossen
        //browser.wait(function() { console.log("D");return T.getText().then(function(t) {return t === "demo6" })} );
        //expect(T.getText()).toMatch(/demo6/);
        console.log("B");
    });

  });
});
