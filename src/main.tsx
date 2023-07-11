import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import { globalRouters } from '@/router';
import { store } from '@/store';

import { ConfigProvider } from 'antd';
// 引入Ant Design中文语言包
import zhCN from 'antd/locale/zh_CN';
// 全局样式
import '@/common/styles/frame.less';

import './mock';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <RouterProvider router={globalRouters} />
    </ConfigProvider>
  </Provider>
);
