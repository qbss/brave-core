
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

// Feature-specific components
import { Content, Title, Paragraph, SelectGrid } from 'brave-ui/features/welcome'
import { SelectBox } from 'brave-ui/features/shields'
// Shared components
import { Button } from 'brave-ui'

// Images
import { WelcomeSearchImage } from 'brave-ui/features/welcome/images'

// Utils
import { getLocale } from '../../../common/locale'

interface Props {
  index: number
  currentScreen: number
  onClick: () => void
  onChange: () => string
  searchEngineSelected: boolean
  isDefaultSearchGoogle: boolean
  // TODO Pass in search options as an array of data and define specific type definition
  searchOptions: Array<any>
}

export default class SearchEngineBox extends React.PureComponent<Props, {}> {
  render () {
    const { index, currentScreen, onClick, onChange, searchEngineSelected, isDefaultSearchGoogle, searchOptions } = this.props
    const bodyText = isDefaultSearchGoogle ? `${getLocale('chooseSearchEngine')} ${getLocale('privateExperience')}` : getLocale('chooseSearchEngine')
    return (
      <Content
        zIndex={index}
        active={index === currentScreen}
        screenPosition={'1' + (index + 1) + '0%'}
        isPrevious={index <= currentScreen}
      >
        <WelcomeSearchImage />
        <Title>{getLocale('setDefaultSearchEngine')}</Title>
        <Paragraph>{getLocale('chooseSearchEngine')}</Paragraph>
          <SelectGrid>
            <SelectBox onChange={onChange}>
              <option key={0} value=''>{getLocale('selectSearchEngine')}</option>
              {searchOptions.map((option, index) =>
                <option
                  key={index + 1}
                  value={option.value}
                >
                  {getLocale(option.name)}
                </option>
              )}
            </SelectBox>
            <Button
              level='primary'
              type='accent'
              size='large'
              text={getLocale('search')}
              disabled={!searchEngineSelected}
              onClick={onClick}
            />
          </SelectGrid>
      </Content>
    )
  }
}
