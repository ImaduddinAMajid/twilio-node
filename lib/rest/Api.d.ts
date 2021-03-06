/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Domain = require('../base/Domain');
import Twilio = require('./Twilio');
import V2010 = require('./api/V2010');
import { AccountContext } from './api/v2010/account';
import { AccountListInstance } from './api/v2010/account';
import { AddressListInstance } from './api/v2010/account/address';
import { ApplicationListInstance } from './api/v2010/account/application';
import { AuthorizedConnectAppListInstance } from './api/v2010/account/authorizedConnectApp';
import { AvailablePhoneNumberCountryListInstance } from './api/v2010/account/availablePhoneNumber';
import { BalanceListInstance } from './api/v2010/account/balance';
import { CallListInstance } from './api/v2010/account/call';
import { ConferenceListInstance } from './api/v2010/account/conference';
import { ConnectAppListInstance } from './api/v2010/account/connectApp';
import { IncomingPhoneNumberListInstance } from './api/v2010/account/incomingPhoneNumber';
import { KeyListInstance } from './api/v2010/account/key';
import { MessageListInstance } from './api/v2010/account/message';
import { NewKeyListInstance } from './api/v2010/account/newKey';
import { NewSigningKeyListInstance } from './api/v2010/account/newSigningKey';
import { NotificationListInstance } from './api/v2010/account/notification';
import { OutgoingCallerIdListInstance } from './api/v2010/account/outgoingCallerId';
import { QueueListInstance } from './api/v2010/account/queue';
import { RecordingListInstance } from './api/v2010/account/recording';
import { ShortCodeListInstance } from './api/v2010/account/shortCode';
import { SigningKeyListInstance } from './api/v2010/account/signingKey';
import { SipListInstance } from './api/v2010/account/sip';
import { TokenListInstance } from './api/v2010/account/token';
import { TranscriptionListInstance } from './api/v2010/account/transcription';
import { UsageListInstance } from './api/v2010/account/usage';
import { ValidationRequestListInstance } from './api/v2010/account/validationRequest';


declare class Api extends Domain {
  /**
   * Initialize api domain
   *
   * @param twilio - The twilio client
   */
  constructor(twilio: Twilio);

  readonly account: AccountContext;
  readonly accounts: AccountListInstance;
  readonly addresses: AddressListInstance;
  readonly applications: ApplicationListInstance;
  readonly authorizedConnectApps: AuthorizedConnectAppListInstance;
  readonly availablePhoneNumbers: AvailablePhoneNumberCountryListInstance;
  readonly balance: BalanceListInstance;
  readonly calls: CallListInstance;
  readonly conferences: ConferenceListInstance;
  readonly connectApps: ConnectAppListInstance;
  readonly incomingPhoneNumbers: IncomingPhoneNumberListInstance;
  readonly keys: KeyListInstance;
  readonly messages: MessageListInstance;
  readonly newKeys: NewKeyListInstance;
  readonly newSigningKeys: NewSigningKeyListInstance;
  readonly notifications: NotificationListInstance;
  readonly outgoingCallerIds: OutgoingCallerIdListInstance;
  readonly queues: QueueListInstance;
  readonly recordings: RecordingListInstance;
  readonly shortCodes: ShortCodeListInstance;
  readonly signingKeys: SigningKeyListInstance;
  readonly sip: SipListInstance;
  readonly tokens: TokenListInstance;
  readonly transcriptions: TranscriptionListInstance;
  readonly usage: UsageListInstance;
  readonly v2010: V2010;
  readonly validationRequests: ValidationRequestListInstance;
}

export = Api;
