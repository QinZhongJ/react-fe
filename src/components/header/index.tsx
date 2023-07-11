import { Button, Card, Menu } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { setDark } from '@/store/slices/theme';
import { globalConfig } from '@/globalConfig';
import ThemeModal from '@/components/themeModal';
import {
  MoonOutlined,
  ThemeOutlined,
  SunOutlined,
} from '@/components/extraIcons';

import styles from './index.module.less';

interface Props {
  title?: string;
  info?: () => void;
}

function Header({ title, info }: Props) {
  // 创建路由定位钩子
  const location = useLocation();
  // 创建路由钩子
  const navigate = useNavigate();

  // 定义导航栏
  const menuItems = [
    {
      // 导航显示的名称
      label: 'Home',
      // 导航唯一标识，为便于当前态的显示，与当前路由保持一致
      key: '/home',
      // 导航的前置图标
      icon: <HomeOutlined />,
      // 点击跳转行为
      onClick: () => {
        navigate('/home');
      },
    },
    {
      label: 'Account',
      key: '/account',
      icon: <UserOutlined />,
      onClick: () => {
        navigate('/account');
      },
    },
  ];

  // 获取redux派发钩子
  const dispatch = useAppDispatch();

  // 获取store中的主题配置
  const theme = useAppSelector((state) => state.theme);

  info?.();

  // 是否显示主题色选择对话框
  const [showThemeModal, setShowThemeModal] = useState(false);

  return (
    <Card className={styles['header']}>
      <div className={styles['header-wrapper']}>
        <div className={styles['logo-con']}>Header:{title}</div>
        <div className={styles['menu-con']}>
          <Menu
            mode="horizontal"
            selectedKeys={[location.pathname]}
            items={menuItems}
          />
        </div>

        <div className={styles['opt-con']}>
          {theme.dark ? (
            <Button
              icon={<SunOutlined />}
              shape="circle"
              onClick={() => {
                dispatch(setDark(false));
              }}
            ></Button>
          ) : (
            <Button
              icon={<MoonOutlined />}
              shape="circle"
              onClick={() => {
                dispatch(setDark(true));
              }}
            ></Button>
          )}

          {
            // 当globalConfig配置了主题色，并且数量大于0时，才显示主题色换肤按钮
            globalConfig.customColorPrimarys &&
              globalConfig.customColorPrimarys.length > 0 && (
                <Button
                  icon={<ThemeOutlined />}
                  shape="circle"
                  onClick={() => {
                    setShowThemeModal(true);
                  }}
                ></Button>
              )
          }
        </div>
      </div>
      {
        // 显示主题色换肤对话框
        showThemeModal && (
          <ThemeModal
            onClose={() => {
              setShowThemeModal(false);
            }}
          />
        )
      }
    </Card>
  );
}

export default Header;
