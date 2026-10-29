import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 1492305876,
  name: 'code-zheng-cs 的订阅',
  version: 0,
  author: 'code-zheng-cs',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/code-zheng-cs/gkd_define/issues',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
