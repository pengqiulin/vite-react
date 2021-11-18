import React, { useState } from "react";
import ConfigProvider from "antd/lib/config-provider";
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { getLocale, localeInfo, LocaleProvider } from "./components/locales";
import routes from '@/router/config'
import "antd/dist/antd.less";
import './global.less'

/**
 * 入口
 * @constructor
 */
function App() {
  return (
    <LocaleProvider>
      <ConfigProvider locale={localeInfo[getLocale()]?.antd}>
        <HashRouter>
          {
            renderRoutes(routes)
          }
        </HashRouter>
      </ConfigProvider>
    </LocaleProvider>
  );
}

export default App;
