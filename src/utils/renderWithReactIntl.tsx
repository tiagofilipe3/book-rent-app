import React, { FC, ReactNode } from 'react'
import { IntlProvider } from 'react-intl'
import { render, RenderResult } from '@testing-library/react'
import { locale, messages } from '../i18n'

const renderWithReactIntl: (component: ReactNode) => RenderResult = (
  component
) => {
  return render(
    <IntlProvider locale={locale} messages={messages[locale]}>
      {component}
    </IntlProvider>
  )
}

export { renderWithReactIntl }
