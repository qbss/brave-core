/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as sinon from 'sinon'
import cosmeticFilterActions from '../../../../brave_extension/extension/brave_extension/background/actions/cosmeticFilterActions'
import { ChromeEvent } from '../../../testData'
// import '../../../../brave_extension/extension/brave_extension/background/events/cosmeticFilterEvents'
import { rule } from '../../../../brave_extension/extension/brave_extension/background/events/cosmeticFilterEvents'

// interface ContextMenuClickedEvent extends chrome.events.Event<(activeInfo: chrome.contextMenus.MenuClickedEvent) => void> {
//   emit: (detail: chrome.contextMenus.MenuClickedEvent) => void
// }
// let msg = { baseURI: 'brave.com' }

// interface ContextMenuClickedEvent extends chrome.events.Event<(info: chrome.contextMenus.OnClickData, tab: chrome.tabs.Tab) => void> {
  // emit: (detail: chrome.contextMenus.MenuClickedEvent) => void
// }

describe('cosmeticFilterEvents events', () => {
  describe('when runtime.onMessage is received', () => {
    describe('contextMenuOpened', () => {
      it('assigns the base URI', () => {
        chrome.runtime.sendMessage({ type: 'contextMenuOpened', baseURI: 'brave.com' },
           () => {
             expect(rule.host).toBe('brave.com')
           })
      })
    })
  })

  describe('when context menu is clicked', () => {
    describe('addBlockElement', () => {
      let spy: jest.SpyInstance
      it('sends a message to get selector', () => {
        chrome.runtime.sendMessage({ type: 'contextMenuOpened', baseURI: 'brave.com' },
          () => {
            expect(rule.host).toBe('brave.com')
          })
      })

      describe('when selector returned is empty/null', () => {
        it('calls window.prompt with `cant find`', () => {
          expect(window.prompt()).toBeCalled()
        })
      })

      describe('when selector IS returned', () => {
        // TODO: should selector be validated?
        // should it call window.prompt?
        // etc
      })

      it('calls siteCosmeticFilterAdded', () => {

      })
    })

    describe('resetSiteFilterSettings', () => {
      it('calls `siteCosmeticFilterRemoved`', () => {

      })
    })

    describe('resetAllFilterSettings', () => {
      it('calls `allCosmeticFiltersRemoved`', () => {
        // TODO: ...
      })
    })
  })
})
