import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Router, Switch } from 'react-router'
import { createBrowserHistory } from 'history'
import { IntlProvider } from 'react-intl'
import { Provider } from 'react-redux'

import { privateRoutes } from './routes/routes'
import PrivateRoute from './routes/PrivateRoute'
import { ptBRMessages } from './i18n/pt-br'
import { enUSMessages } from './i18n/en-us'
import { store } from './redux/store'
import LoginPage from './features/Login'
import GlobalStyles from './globalStyles'
import Logout from './features/Logout'
import PageStructure from './components/PageStructure'

const history = createBrowserHistory()

const locale = 'en-us'
const messages = {
  'pt-br': ptBRMessages,
  'en-us': enUSMessages,
}

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Provider store={store}>
        <IntlProvider messages={messages[locale]} locale={locale}>
          <GlobalStyles />
          <Switch>
            <Route path="/" exact>
              <LoginPage />
            </Route>
            <Route path="/logout" exact>
              <Logout />
            </Route>
            {privateRoutes.map((page) => {
              return (
                <PrivateRoute path={page.path} key={page.path}>
                  <PageStructure>{page.component}</PageStructure>
                </PrivateRoute>
              )
            })}
          </Switch>
        </IntlProvider>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
