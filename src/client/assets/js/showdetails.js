
var app = angular.module('showdetails', []);
app.controller('Cartform', function($scope) {
 

    $scope.invoice = {
       items:[{
            qty: 1,
            name: 'item',
            cost: 1}]
    };

    $scope.addItem = function() {
        $scope.invoice.items.push({
            qty: 1,
            name: '',
            cost: 0
        });
    },

    $scope.removeItem = function(index) {
        $scope.invoice.items.splice(index, 1);
    },

    $scope.total = function() {
       var total = 0;
        angular.forEach($scope.invoice.items, function(item) {
            total += item.qty * item.cost;
        })

 
        return total;
    }



});