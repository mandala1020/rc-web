import classnames from 'classnames';
import styles from './index.css';

export default function({ data: { phoneVer, pcVer, ...data } = {} }) {
  return (
    <div className={styles.header}>
      <div className={classnames('clearfix', 'mcon', styles['header-inner'])}>
        <a href="/" title={data.title} className={classnames('left', styles['logo-box'])}>
          <h1 className={styles.name}>{data.title}</h1>
          <div className={styles.desc}>{data.subTitle}</div>
        </a>
        <div className={classnames('right', styles['tion-box'])}>
          {phoneVer ? (
            <a
              href={phoneVer.url}
              target="_blank"
              rel="noopener noreferrer"
              className={classnames(styles.ticon, styles['ticon-phone'])}
              children={phoneVer.text}
              title={phoneVer.title}
            />
          ) : null}

          {pcVer ? (
            <a
              href={pcVer.url}
              target="_blank"
              rel="noopener noreferrer"
              className={classnames(styles.ticon, styles['ticon-pc'])}
              children={pcVer.text}
              title={pcVer.title}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
