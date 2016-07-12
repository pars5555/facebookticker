angular.module('starter.controllers', [])

        .controller('DashCtrl', function ($scope, $ionicPush, $ionicPlatform) {
            $ionicPush.init({
                "debug": true,
                "onNotification": function (notification) {
                    var payload = notification.payload;
                    console.log(notification, payload);
                },
                "onRegister": function (data) {
                    console.log(data.token);
                }
            });

           // $ionicPush.register();

        })
        .controller('SignInCtrl', function ($scope, $state, $http) {

            $scope.signIn = function (user) {

                //$state.go('tab.dash');
                var loginUrl = conf.server.apiHost + conf.server.actionsPath.login;
                $http.post(loginUrl, {vcard: '32599356', pswd: 'sookiasian1985', func:'login'})
                 .success(function (data, status, header) {
                     console.log(111, data, status, header);
                 })
                 .error(function (error) {
                     console.log(error);
                 
                 });
            };
        })
        .controller('ChatsCtrl', function ($scope, Chats) {
            // With the new view caching in Ionic, Controllers are only called
            // when they are recreated or on app start, instead of every page change.
            // To listen for when this page is active (for example, to refresh data),
            // listen for the $ionicView.enter event:
            //
            //$scope.$on('$ionicView.enter', function(e) {
            //});

            $scope.chats = Chats.all();
            $scope.remove = function (chat) {
                Chats.remove(chat);
            };
        })

        .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
            $scope.chat = Chats.get($stateParams.chatId);
        })

        .controller('TabCtrl', function ($scope) {
            $scope.onTabSelected=function(){
                console.log("you call me");
                return true;
            };
            
        })
        .controller('AccountCtrl', function ($scope) {
                    $scope.newValue = function(value){
                      
                    };
                    $scope.settings = {
                enableFriends: true
            };
        });
