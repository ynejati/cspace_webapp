import React, {PropTypes} from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';
import {title, html} from './index.md';
import './material.css'


class HomePage extends React.Component {

  static propTypes = {
     // articles: PropTypes.array.isRequired,
  };

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout className={s.content}>
        <h4>Articles</h4>
        <ul>
          {/*{this.props.articles.map((article, i) =>*/}
            {/*<li key={i}><a href={article.url}>{article.title}</a> by {article.author}</li>*/}
          {/*)}*/}
        </ul>
      </Layout>
    );
  }

}

export default HomePage;

/*

 */
