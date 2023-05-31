import React from 'react'
import ReactDOM from 'react-dom/client'
// 引入样式初始化，一般放在最前面
// 再是UI框架样式，最后是组件样式
import "@/assets/styles/global.scss"
import "reset-css"
import App from './App'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  </React.StrictMode>,
)
