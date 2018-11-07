import React, { Component } from 'react';
import { Route, Switch, Redirect, HashRouter } from 'react-router-dom'
import { loyoutRouterMap, notLoyoutRouterMap } from './config'
import Layout from 'src/App'
import GlobalComponents from 'components/GlobalComponents'
import AuthRoute from './authRoute'

const renderRouteComponent = routes => routes.map ((route, index) => {
  // To check authority without login or no
  if (route.auth) {
    return <AuthRoute key={index} {...route} />
  } else {
    return <Route key={index} {...route} />
  }
  // return <Route key={index} {...route}/>
})
const NotLayoutRouter = renderRouteComponent (notLoyoutRouterMap)
const LayoutRouter = renderRouteComponent (loyoutRouterMap)

class Router extends Component {
  render () {
    return (
      <div>
        <HashRouter>
          <Route render={() => {
            return (
              <div style={{width: '100%', height: '100%'}}>
                <GlobalComponents />
                <Switch
                  className="animate-wrapper">
                  {NotLayoutRouter}
                  <Route render={props => {
                    return <Layout {...props}>
                      <Route render={() => {
                        return (
                          <Switch>
                            {LayoutRouter}
                            <Redirect from="*" to="/404" />
                          </Switch>
                        )
                      }} />
                    </Layout>
                  }} />
                </Switch>
              </div>
            )
          }} />
        </HashRouter>
      </div>
    )

  }
}

export default Router