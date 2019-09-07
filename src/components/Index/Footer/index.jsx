import classnames from 'classnames';
import styles from './index.css';

export default function() {
  return (
    <div className={classnames('mcon', styles.footer)}>
      Copyright © 1998 - 2019 Tencent. All Rights Reserved.
      <br />
      腾讯公司 版权所有
    </div>
  );
}
