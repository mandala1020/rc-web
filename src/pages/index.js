import classnames from 'classnames';
import PageHeader from '../components/Index/PageHeader';
import Slide from '../components/Index/Slide';
import Content from '../components/Index/Content';
import Footer from '../components/Index/Footer';

import restful from './restful';
import styles from './index.css';

export default function() {
  return (
    <div className={styles.container}>
      {/** 页头 */}
      <PageHeader data={restful.header} />

      {/** 轮播图 */}
      <Slide data={restful.slider} />

      {/** 专区 */}
      <div className={classnames('mcon', styles.content)}>
        <Content title="腾讯专区" data={restful.content} />
        <Content
          style={{ marginTop: 38 }}
          title="更多精品推荐"
          data={restful.content.slice(0, 2)}
        />
      </div>

      {/** 页脚 */}
      <Footer />
    </div>
  );
}
