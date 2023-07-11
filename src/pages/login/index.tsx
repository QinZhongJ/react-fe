import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input } from 'antd';
import { apiReqs } from '@/api';
import imgLogo from './logo.png';
import styles from './index.module.less';

function Login() {
  const navigate = useNavigate();
  // 组件中自维护的实时数据
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');

  // 登录
  const login = () => {
    apiReqs.signIn({
      data: {
        account,
        password,
      },
      success: (res) => {
        console.log(res);
        navigate('/home');
      },
    });
  };

  return (
    <div className={styles.login}>
      <img src={imgLogo} alt="" className={styles.logo} />
      <div className={styles.ipt_con}>
        <Input
          placeholder="账号"
          value={account}
          onChange={(e) => {
            setAccount(e.target.value);
          }}
        />
      </div>
      <div className={styles.ipt_con}>
        <Input.Password
          placeholder="密码"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div className={styles.ipt_con}>
        <Button type="primary" block={true} onClick={login}>
          登录
        </Button>
      </div>
    </div>
  );
}

export default Login;
