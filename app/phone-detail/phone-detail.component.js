angular.module('phoneDetail').component('phoneDetail',{
    templateUrl: 'phone-detail/phone-detail.template.html',
    // template:'TBD: Detail view for <span>{{$ctrl.phoneId}}</span>',
    controller:['$http','$routeParams',function PhoneDetailController($http,$routeParams){
            var self = this;
            this.phoneID = $routeParams.phoneID
            $http.get('phones/'+$routeParams.phoneID+'.json').then(  function(resp){
                self.phone = resp.data
                console.log(phone)
            })
        }
    ]
})