// var Nightmare = require('nightmare');
// var nightmare = Nightmare({ show: true });
//
// nightmare
//   .goto('http://yahoo.com')
//   .type('form[action*="/search"] [name=p]', 'github nightmare')
//   .click('form[action*="/search"] [type=submit]')
//   .wait('#main')
//   .evaluate(function () {
//     return document.querySelector('#main .searchCenterMiddle li a').href
//   })
//   .end()
//   .then(function (result) {
//     console.log(result)
//   })
//   .catch(function (error) {
//     console.error('Search failed:', error);
//   });


var Nightmare = require('nightmare');
var url = 'http://www.gotooptician.com';
var nightmare = Nightmare({
    show: true
});

nightmare
    .goto(url)
    //.type('form[action*="/search"] [name=p]', 'github nightmare')
    //.click('form[action*="/search"] [type=submit]')
    //.click('a.active[title*="Men Collections"]')
    //.click('a.active')
    .click('a[title="Optical collection"]')
    .wait(5000)
    .evaluate(function() {
        document.querySelector('a.active[title="Men Collections"]').innerText
    })
    .end()
    .then(function(result) {
        console.log(result)
    })
    .catch(function(error) {
        console.error('Search failed:', error);
    });
