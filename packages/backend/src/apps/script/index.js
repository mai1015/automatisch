import defineApp from '../../helpers/define-app.js';
import actions from './actions/index.js';

export default defineApp({
  name: 'Script',
  key: 'script',
  iconUrl: '{BASE_URL}/apps/script/assets/favicon.svg',
  authDocUrl: '{DOCS_URL}/apps/script/connection',
  supportsConnections: false,
  baseUrl: '',
  apiBaseUrl: '',
  primaryColor: '#001F52',
  actions,
});
