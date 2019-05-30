/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as sinon from 'sinon'
import { rule } from '../../../../brave_extension/extension/brave_extension/background/events/cosmeticFilterEvents'
import cosmeticFilterActions from '../../../../brave_extension/extension/brave_extension/background/actions/cosmeticFilterActions'

import { ChromeEvent } from '../../../testData'

// interface ContextMenuClickedEvent extends chrome.events.Event<(activeInfo: chrome.contextMenus.MenuClickedEvent) => void> {
//   emit: (detail: chrome.contextMenus.MenuClickedEvent) => void
// }
// let msg = { baseURI: 'brave.com' }

interface ContextMenuOpenedEvent extends chrome.events.Event<(msg, sender, sendResponse) => void> {
  // emit:
}

interface ContextMenuClickedEvent extends chrome.events.Event<(info: chrome.contextMenus.OnClickData, tab: chrome.tabs.Tab) => void> {
  // emit: (detail: chrome.contextMenus.MenuClickedEvent) => void
}

describe('cosmeticFilterEvents events', () => {
  describe('chrome.contextMenus.MenuClickedEvent', () => {
    let spy: jest.SpyInstance
    // stub chrome.runtime.onMessage

    
    beforeEach(() => {
      spy = jest.spyOn(cosmeticFilterActions, 'siteCosmeticFilterAdded')
    })
    // afterEach(() => {
    //   spy.mockRestore()
    // })
    it('assigns the base URI', (cb) => {
      const menuItemId = 'addBlockElement'
      const id = 1
      const onClicked = chrome.contextMenus.onClicked as ContextMenuClickedEvent
      chrome.tabs.sendMessage(1, { type: 'contextMenuOpened' }, function (response: any) {
        console.log('abc')
      })
      // onClicked.addListener(({ menuItemId }, { id }) => {
        // expect(rule.host).toBe('brave.com')
      // })
      // onClicked.emit()

      // onActivated.addListener((activeInfo) => {
      //   expect(activeInfo.windowId).toBe(inputWindowId)
      //   expect(activeInfo.tabId).toBe(inputTabId)
      //   expect(spy).toBeCalledWith(inputWindowId, inputTabId)
      //   cb()
      // })
      // onActivated.emit({ windowId: inputWindowId, tabId: inputTabId })
        // function (info: chrome.contextMenus.OnClickData, tab: chrome.tabs.Tab) {
          // return Promise.resolve()
        // }
    })
  })
})
  // describe('cosmetic filter events', () => {
  //   let spy: jest.SpyInstance
  //   //   describe('when context menu is opened', () => {
  //   describe('when context menu is clicked', () => {
  //     let chromeContextMenusCreateStub: any
  //     let chromeContextMenusonClickedListenerStub: any
  //     beforeAll(() => {
  //       // let spy: jest.SpyInstance
  //       chromeContextMenusCreateStub = sinon.stub(chrome.contextMenus, 'create')
  //       chromeContextMenusonClickedListenerStub = sinon.stub(chrome.contextMenus.onClicked, 'addListener')
  //     })
  //     it('assigns the base URI', () => {
  //       // chromeContextMenusCreateStub.yields({})
  //       // chromeContextMenusonClickedListenerStub.yields({})
  //       let contextMenuOpenedEvent = new ChromeEvent()
  //       const onContextMenuOpened = chrome.contextMenus.onClicked as ContextMenuClickedEvent

  //       // onActivated.addListener((activeInfo) => {
  //       //   expect(activeInfo.windowId).toBe(inputWindowId)
  //       //   expect(activeInfo.tabId).toBe(inputTabId)
  //       //   expect(spy).toBeCalledWith(inputWindowId, inputTabId)
  //       //   cb()
  //       // })
  //       // onActivated.emit({ windowId: inputWindowId, tabId: inputTabId })

  //       // contextMenuOpenedEvent.emit({ type: 'contextMenuOpenedEvent' })
  //       contextMenuOpenedEvent.emit()
  //       expect(rule.host).toBe('brave.com')
  //       // TODO:
  //       // - fire `contextMenuOpened` event
  //       // - verify `rule.host` gets assigned
  //       console.log(rule.host)
  //       // chrome.runtime.onMessage
  //     })
      // it('does not call unique selector library', () => {
      //   // chrome.tabs.sendMessage should not be called
      // })

      // describe('when `Block element via the selector` is chosen', () => {
      //   it('sends a message to get the target selector', () => {
      //   })

      //   describe('when the response has a selector', () => {
      //     it('calls window.prompt with selector', () => {

      //     })
      //   })

      //   describe('when the response DOES NOT have a selector', () => {
      //     it('calls window.prompt with `unable to populate` message', () => {

      //     })
      //   })

      //   it('creates a `siteCosmeticFilterAdded` action', () => {

      //   })
      // })
  //   })
  // })
