import { Button } from 'antd';

import styles from './index.module.less';

function Account() {
  return (
    <div className={styles.account}>
      <h1 className={styles.h1}>Account Page</h1>
      <div className={styles.ipt_con}>
        <Button type="primary">返回登录</Button>
      </div>
    </div>
  );
}

export default Account;
