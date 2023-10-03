// 导入React
import React from 'react';
// 导入 React Dom
import ReactDOM from 'react-dom/client';
// 导入css样式表
import './style/index.css';
//导入App模块
import App from './App';

// 获取html中的id为root 的标签
const root = ReactDOM.createRoot(document.getElementById('root'));
// 将以下代码注入进html
root.render(
  // 声明App标签
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
