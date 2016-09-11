/**
 * Created by Rekey on 2016/9/11.
 */
'use strict';

if (!Promise.defer) {
  Promise.defer = function () {
    const defer = {};
    const promise = new Promise(function (resolve, reject) {
      defer.resolve = resolve;
      defer.reject = reject;
    });
    defer.promise = promise;
    return defer;
  };
}