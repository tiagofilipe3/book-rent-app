import React, { FC } from 'react'
import { render as rtlRender } from '@testing-library/react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl'
import { Router } from 'react-router'
import { createMemoryHistory } from 'history'

import reducer from '../redux/rootReducer'
import { locale, messages } from '../i18n'

const defaultHistory = createMemoryHistory()

function render(
  ui: React.ReactElement<any, string | React.JSXElementConstructor<any>>,
  {
    initialState,
    store = createStore(reducer, initialState),
    ...renderOptions
  }: any = {},
  history: any = defaultHistory
) {
  const Wrapper: FC = ({ children }) => {
    return (
      <Router history={history}>
        <Provider store={store}>
          <IntlProvider locale={locale} messages={messages[locale]}>
            {children}
          </IntlProvider>
        </Provider>
      </Router>
    )
  }

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export * from '@testing-library/react'
export { render }
