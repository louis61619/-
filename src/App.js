//第三方庫
import React, { memo, Suspense } from 'react'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

//功能類
import routes from './router'
import store from '@/store'

//組件
import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'
import AppPlayerBar from './pages/player/app-player-bar'

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <AppHeader />
        <Suspense fallback={<div>page-loading</div>}>
          {renderRoutes(routes)}
        </Suspense>
        <AppFooter />
        <AppPlayerBar />
      </HashRouter>
    </Provider>

  )
})

// console.log(`${window.location.hostname}:3001`);