import cosmeticFilterActions from '../actions/cosmeticFilterActions'

let rule = {
  host: '',
  selector: ''
}

// parent menu
chrome.contextMenus.create({
  title: 'Brave',
  id: 'brave',
  contexts: ['all']
})
// block ad child menu
chrome.contextMenus.create({
  title: 'Block element via selector',
  id: 'addBlockElement',
  parentId: 'brave',
  contexts: ['all']
})
chrome.contextMenus.create({
  title: 'Clear CSS rules for this site',
  id: 'resetSiteFilterSettings',
  parentId: 'brave',
  contexts: ['all']
})
chrome.contextMenus.create({
  title: 'Clear CSS rules for all sites',
  id: 'resetAllFilterSettings',
  parentId: 'brave',
  contexts: ['all']
})

// contextMenu listener - when triggered, grab latest selector
chrome.contextMenus.onClicked.addListener(function (info: chrome.contextMenus.OnClickData, tab: chrome.tabs.Tab) {
  switch (info.menuItemId) {
    case 'addBlockElement': {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs: any) {
        chrome.tabs.sendMessage(tabs[0].id, { type: 'getTargetSelector' }, function (response: any) {
          if (!response) {
            rule.selector = window.prompt('We were unable to automatically populate a correct CSS selector for you. Please manually enter a CSS selector to block:') || ''
          } else {
            rule.selector = window.prompt('CSS selector:', `${response}`) || ''
          }
          chrome.tabs.insertCSS({
            code: `${rule.selector} {display: none;}`
          })
          cosmeticFilterActions.siteCosmeticFilterAdded(rule.host, rule.selector)
        })
      })
      break
    }
    case 'resetSiteFilterSettings': {
      cosmeticFilterActions.siteCosmeticFilterRemoved(rule.host)
      break
    }
    case 'resetAllFilterSettings': {
      cosmeticFilterActions.allCosmeticFiltersRemoved()
      break
    }
    default: {
      console.warn('[cosmeticFilterEvents] invalid context menu option: ${info.menuItemId}')
    }
  }
})

// content script listener for right click DOM selection event
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  console.log('BSC]] in code: onMessage handler: ' + JSON.stringify(msg))
  const action = typeof msg === 'string' ? msg : msg.type
  switch (action) {
    case 'contextMenuOpened': {
      console.log('BSC]] in code: onMessage handler: specifically got `contextMenuOpened` event type')
      rule.host = msg.baseURI
      break
    }
  }
})
export { rule }

// export rule
// module.exports = {
//   rule: rule
// }
