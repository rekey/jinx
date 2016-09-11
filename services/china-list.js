/**
 * Created by Rekey on 2016/9/11.
 */
'use strict';
const request = require('request');

module.exports = {
  get: (dns) => {
    const replaceDns = dns || '223.5.5.5';
    const defer = Promise.defer();
    request({
      uri: 'https://github.com/felixonmars/dnsmasq-china-list/blob/master/accelerated-domains.china.conf?raw=true'
    }, (err, resp, body) => {
      if (err) {
        return defer.reject(err);
      }
      const content = body.replace(/114.114.114.114/g, replaceDns);
      defer.resolve(content);
    });
    return defer.promise;
  }
};