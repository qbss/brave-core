
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
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  isDefaultSearchGoogle: boolean
  // TODO Pass in search options as an array of data and define specific type definition
  searchProviders: Array<any>
}

interface State {
  searchEngineSelected: boolean
}

export default class SearchEngineBox extends React.PureComponent<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      searchEngineSelected: false
    }
  }

  render () {
    const { index, currentScreen, onClick, onChange, isDefaultSearchGoogle, searchProviders } = this.props
    const { searchEngineSelected } = this.state
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
              {searchProviders.map((provider, index) =>
                <option
                  key={index + 1}
                  value={provider.value}
                >
                  {getLocale(provider.name)}
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
