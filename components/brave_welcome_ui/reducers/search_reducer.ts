/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */
/* global window */

import { Reducer } from 'redux'

// Constants
import { types } from '../constants/welcome_types'

const SearchReducer: Reducer<Welcome.State | undefined> = (state: Welcome.State | undefined, action: any) => {
  if (state === undefined) {
    // Set defaults here
    state = {}
  }

  const payload = action.payload
  const startingState = state
  switch (action.type) {
    case types.IMPORT_DEFAULT_SEARCH_PROVIDERS:
      // CODE TO IMPORT SEARCH DATA HERE
      console.log('IMPORT SEARCH DATA')
      break
    case types.CHANGE_DEFAULT_SEARCH_PROVIDER:
      // CODE TO CHANGE DEFAULT DATA WITH PAYLOAD
      console.log('CHANGE DEFAULT SEARCH PROVIDER')
      break
  }

  return state
}

export default SearchReducer
