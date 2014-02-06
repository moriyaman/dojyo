var timerCtrl = function($scope,$timeout){
      $scope.min_time = 0;
      $scope.sec_time = 0;
      $scope.str="美味しいラーメンが食べたいか！？";

      $scope.startTimer = function(){
        timer = $timeout(function(){
          $scope.sec_time++;
          $scope.startTimer();
        },1000);
      }

      $scope.$watch('sec_time', function(){
        if($scope.sec_time >= 3){
          $scope.sec_time = 0;
          $scope.min_time ++;
        }
      });

      $scope.$watch('min_time', function(){
        if($scope.min_time >= 3){
          alert('ラーメンできたわよ。');
          $timeout.cancel(timer);
          $scope.str = "ラーメン食べたらでぶになる"
        }
      });

      $scope.stopTimer = function(){
        $timeout.cancel(timer);
      }
}
