import { Fragment } from 'react';
import classnames from 'classnames';
import styles from './index.css';

export default function({ data = [], title, style = {} }) {
  return (
    <Fragment>
      <div className={styles['title-box']} style={style}>
        {title}
      </div>
      <ul className={classnames('clearfix', styles['list'])}>
        {data.map(({ shortName, name, ...item }, ind) => {
          const linkProps = {
            href: item.url,
            title: name,
            target: '_blank',
            rel: 'nofollow',
            'data-stat': `officeweb.${shortName}`,
          };

          return (
            <li
              key={shortName}
              className={classnames('clearfix', styles['item'], {
                [styles['item-even']]: ind % 2 === 1,
              })}
            >
              <div className={classnames('left', styles['logo'])}>
                <a {...linkProps}>
                  <img src={require(`./images/${item.img}`)} alt="" />
                </a>
              </div>
              <div className={classnames('left', styles['info'])}>
                <div className={classnames('clearfix', styles['topbox'])}>
                  <h2 className={classnames('left', styles['title'])}>
                    <a {...linkProps}>{name} for Mac</a>
                  </h2>
                  <div className={classnames('left', styles['time'])}>{item.time}</div>
                </div>
                <div className={styles['desc']}>{item.desc}</div>
              </div>
              <div className={classnames('right', styles['btns'], styles['btns2'])}>
                {item.download ? (
                  <a
                    title={`立即下载Mac${name}`}
                    href={item.download}
                    target="_blank"
                    className={classnames('btn-download', styles['btn-download'])}
                    data-stat={`main.down.${shortName}`}
                  >
                    <span>立即下载</span>
                  </a>
                ) : null}
                {item.appStore ? (
                  <a
                    title={`App Store下载${name}`}
                    href={item.appStore}
                    target="_blank"
                    className={classnames(
                      'btn-download',
                      styles['btn-download'],
                      styles['btn-appstore'],
                    )}
                    data-stat={`main.appstore.${shortName}`}
                  >
                    <i />
                    <span>下载</span>
                  </a>
                ) : null}
              </div>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
}
