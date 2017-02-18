import React, { Component } from 'react';
import shortid from 'shortid';
import BookPageItem from './BookPageItem';
import api from './api';

export default class BookPage extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  componentDidMount() {
    const bookID = this.props.params.book;
    api.bookByID(bookID).then((result) => {
      this.setState({ items: result.data });
    });
  }

  render() {
    return (
      <section>
        <section className="section">
          <div className="container">
            {this.state.items.map(item => (<BookPageItem key={shortid.generate()} item={item} />))}
          </div>
        </section>
      </section>
    );
  }
}
