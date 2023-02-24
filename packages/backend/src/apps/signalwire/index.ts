import defineApp from '../../helpers/define-app';
import addAuthHeader from './common/add-auth-header';
import auth from './auth';
import triggers from './triggers';
import actions from './actions';

export default defineApp({
  name: 'Signalwire',
  key: 'signalwire',
  iconUrl: 'https://signalwire.com/favicon.svg',
  authDocUrl: 'https://automatisch.io/docs/apps/signalwire/connection',
  supportsConnections: true,
  baseUrl: 'https://signalwire.com',
  apiBaseUrl: '',
  primaryColor: '044cf6',
  beforeRequest: [addAuthHeader],
  auth,
  triggers,
  actions,
});
