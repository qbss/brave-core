/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import { rule } from '../../../../brave_extension/extension/brave_extension/background/events/cosmeticFilterEvents'
import cosmeticFilterActions from '../../../../brave_extension/extension/brave_extension/background/actions/cosmeticFilterActions'
import { ChromeEvent } from '../../../testData'

let msg = { baseURI: 'brave.com' }

describe('cosmetic filter events', () => {
  describe('when context menu is opened', () => {
    it('assigns the base URI', () => {
      let contextMenuOpenedEvent = new Event('contextMenuOpened')
      document.dispatchEvent(contextMenuOpenedEvent)

      // TODO:
        // - fire `contextMenuOpened` event
        // - verify `rule.host` gets assigned
      console.log(rule.host)
      // chrome.runtime.onMessage
    })

    it('does not call unique selector library', () => {
      // chrome.tabs.sendMessage should not be called
    })

    describe('when `Block element via the selector` is chosen', () => {
      it('sends a message to get the target selector', () => {

      })

      describe('when the response has a selector', () => {
        it('calls window.prompt with selector', () => {

        })
      })

      describe('when the response DOES NOT have a selector', () => {
        it('calls window.prompt with `unable to populate` message', () => {

        })
      })

      it('creates a `siteCosmeticFilterAdded` action', () => {

      })
    })

  })
})
