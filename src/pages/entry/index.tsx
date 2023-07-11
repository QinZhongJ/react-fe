import { Outlet } from 'react-router-dom';
import { ConfigProvider, theme } from 'antd';

import { useAppSelector } from '@/store/hooks';
import Header from '@/components/header';
import { PrivateRoute } from '@/router';

import styles from './index.module.less';

// darkAlgorithm为暗色主题，defaultAlgorithm为亮色（默认）主题
// 注意这里的theme是来自于Ant Design的，而不是store
const { darkAlgorithm, defaultAlgorithm } = theme;

function Entry() {
  // 获取store中的主题配置
  const globalTheme = useAppSelector((state) => state.theme);
  // Ant Design主题变量
  let antdTheme: any = {
    // 亮色/暗色配置
    algorithm: globalTheme.dark ? darkAlgorithm : defaultAlgorithm,
  };

  // 应用自定义主题色
  if (globalTheme.colorPrimary) {
    antdTheme.token = {
      colorPrimary: globalTheme.colorPrimary,
    };
  }

  return (
    <PrivateRoute>
      <ConfigProvider theme={antdTheme}>
        <div className={styles['entry']}>
          <Header />
          <div className={styles['main-container']}>
            <Outlet />
          </div>
        </div>
      </ConfigProvider>
    </PrivateRoute>
  );
}

export default Entry;
