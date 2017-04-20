module.exports = function(Vuex) {
  return {
    install() {
      var dispatchCalls = [];
      var temp = Vuex.Store.prototype.dispatch;

      Vuex.Store.prototype.dispatch = function actionWatcher() {
        dispatchCalls.push(arguments);
        return temp.apply(this, arguments);
      };

      // Log on an interval to avoid blocking
      setInterval(function() {
        while(dispatchCalls.length) {
          console.log(dispatchCalls.shift());
        }
      }, 1000);
    }
  }
};
