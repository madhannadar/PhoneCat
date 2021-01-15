angular.module('phoneList').component('phoneList',{
    templateUrl:'phone-list/phone-list.template.html',
    controller:['Phone',function PhoneListController(Phone){
     this.phones = Phone.query() 
    }]
  //   [ '$http',function PhoneListController($http){
  //       var self  = this;
  //       $http.get('phones/phones.json').then(function(resp){
  //         console.log(resp.data)
  //         self.phones = resp.data
  //         // query
  //       })

  //       // this.phones = [
  //       //     {
  //       //       name: 'Nexus S',
  //       //       snippet: 'Fast just got faster with Nexus S.'
  //       //     }, {
  //       //       name: 'Motorola XOOM™ with Wi-Fi',
  //       //       snippet: 'The Next, Next Generation tablet.'
  //       //     }, {
  //       //       name: 'MOTOROLA XOOM™',
  //       //       snippet: 'The Next, Next Generation tablet.'
  //       //     }
  //       //   ];
  //   }       
  // ]
})