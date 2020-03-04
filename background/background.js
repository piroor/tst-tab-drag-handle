/*
# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/
'use strict';

import {
  configs
} from '/common/common.js';

const TST_ID = 'treestyletab@piro.sakura.ne.jp';

async function registerToTST() {
  try {
    const base = `moz-extension://${location.host}`;
    await browser.runtime.sendMessage(TST_ID, {
      type: 'register-self',
      name: browser.i18n.getMessage('extensionName'),
      //icons: browser.runtime.getManifest().icons,
      listeningTypes: [
        'sidebar-show'
      ],
      style: `
      `
    });
  }
  catch(_error) {
    // TST is not available
  }
}
registerToTST();

browser.runtime.onMessageExternal.addListener((message, sender) => {
  switch (sender.id) {
    case TST_ID:
      switch (message.type) {
        case 'ready':
          registerToTST();
          break;

        case 'sidebar-show':
          break;
      }
      break;
  }
});

browser.tabs.onCreated.addListener(tab => {
});

browser.tabs.query({}).then(tabs => {
  for (const tab of tabs) {
  }
});
