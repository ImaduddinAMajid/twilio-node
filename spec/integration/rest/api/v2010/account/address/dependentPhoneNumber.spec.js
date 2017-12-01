'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var _ = require('lodash');  /* jshint ignore:line */
var Holodeck = require('../../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('DependentPhoneNumber', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid list request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .addresses('ADaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .dependentPhoneNumbers.list();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        accountSid: 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        addressSid: 'ADaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://api.twilio.com/2010-04-01/Accounts/<%= accountSid %>/Addresses/<%= addressSid %>/DependentPhoneNumbers.json')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_full response',
    function() {
      var body = JSON.stringify({
          'dependent_phone_numbers': [
              {
                  'sid': 'PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'friendly_name': '3197004499318',
                  'phone_number': '+3197004499318',
                  'voice_url': null,
                  'voice_method': 'POST',
                  'voice_fallback_url': null,
                  'voice_fallback_method': 'POST',
                  'voice_caller_id_lookup': false,
                  'date_created': 'Thu, 23 Feb 2017 10:26:31 -0800',
                  'date_updated': 'Thu, 23 Feb 2017 10:26:31 -0800',
                  'sms_url': '',
                  'sms_method': 'POST',
                  'sms_fallback_url': '',
                  'sms_fallback_method': 'POST',
                  'address_requirements': 'any',
                  'capabilities': {
                      'Voice': false,
                      'SMS': true,
                      'MMS': false
                  },
                  'status_callback': '',
                  'status_callback_method': 'POST',
                  'api_version': '2010-04-01',
                  'voice_application_sid': null,
                  'sms_application_sid': '',
                  'trunk_sid': null,
                  'emergency_status': 'Inactive',
                  'emergency_address_sid': null,
                  'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers/PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json'
              }
          ],
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Addresses/ADaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/DependentPhoneNumbers.json?Page=0&PageSize=50',
          'next_page_uri': null,
          'page': 0,
          'page_size': 50,
          'previous_page_uri': null,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Addresses/ADaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/DependentPhoneNumbers.json'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .addresses('ADaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .dependentPhoneNumbers.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid read_empty response',
    function() {
      var body = JSON.stringify({
          'dependent_phone_numbers': [],
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Addresses/ADaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/DependentPhoneNumbers.json?Page=0&PageSize=50',
          'next_page_uri': null,
          'page': 0,
          'page_size': 50,
          'previous_page_uri': null,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Addresses/ADaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/DependentPhoneNumbers.json'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .addresses('ADaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .dependentPhoneNumbers.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});

