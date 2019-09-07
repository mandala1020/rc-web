import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Carousel } from 'antd';

import styles from './index.css';

/**
 * 下载按钮
 */
function DownloadButton({ data, type, zh_CN, en }) {
  const isObj = typeof data === 'object';
  const isAppStore = type === 'appStore';
  let stat = `${isAppStore ? 'banner.appstore' : 'banner-down'}.${en}`;
  return (
    <a
      type="link"
      key={stat}
      title={`${isAppStore ? 'App Store' : '立即'}下载${zh_CN}`}
      href={isObj ? data.url : data}
      target="_blank"
      rel="noopener noreferrer"
      data-stat={stat}
      className={classnames('left', 'btn-download', styles['btn-download'], {
        [styles['btn-appstore']]: isAppStore,
      })}
      style={(isObj && data.style) || {}}
      children={
        <Fragment>
          <i />
          <span dangerouslySetInnerHTML={{ __html: isAppStore ? 'App&nbsp;Store' : '立即下载' }} />
        </Fragment>
      }
    />
  );
}

// 轮播图项
function SlideItem({ img = '', ...props }) {
  const style = {
    backgroundImage: 'url(' + require('./images/' + img) + ')',
  };
  return (
    <div style={style} className={classnames(styles['slide-item'])}>
      <div className={styles['btn-box']}>
        <div className={styles['down-box']}>
          <div className={classnames('clearfix')}>
            {props.download ? (
              <DownloadButton
                type="download"
                data={props.download}
                zh_CN={props.zh_CN}
                en={props.en}
              />
            ) : null}
            {props.appStore ? (
              <DownloadButton
                type="appStore"
                data={props.appStore}
                zh_CN={props.zh_CN}
                en={props.en}
              />
            ) : null}
          </div>
          <div className={styles.desc} style={props.descStyle}>
            {props.desc}
          </div>
        </div>
      </div>
    </div>
  );
}

SlideItem.propTypes = {
  download: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  img: PropTypes.string.isRequired,
  en: PropTypes.string.isRequired,
  zh_CN: PropTypes.string,
  appStore: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  desc: PropTypes.string,
  descStyle: PropTypes.object,
};

SlideItem.defaultProps = {
  descStyle: {},
};

export default function({ data = [] }) {
  return (
    <div className={styles['tbr-bigbox']}>
      <Carousel className={styles['cslide-box']} autoplay>
        {data.map(item => (
          <SlideItem key={item.en} {...item} />
        ))}
      </Carousel>
    </div>
  );
}
