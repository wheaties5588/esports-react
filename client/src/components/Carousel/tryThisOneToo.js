import React, { Component } from "react";
import Carousel from "react-elastic-carousel";

class App extends Component {
  state = {
    items: [
      {id: 1, link: 'https://cdn.shopify.com/s/files/1/0211/8944/products/Lorem3_compact.jpg?v=1371040442'},
      {id: 2, link: 'https://cdn.shopify.com/s/files/1/0211/8944/products/Lorem3_compact.jpg?v=1371040442'},
      {id: 3, link: 'https://cdn.shopify.com/s/files/1/0211/8944/products/Lorem3_compact.jpg?v=1371040442'},
      {id: 4, link: 'https://cdn.shopify.com/s/files/1/0211/8944/products/Lorem3_compact.jpg?v=1371040442'},
      {id: 5, link: 'https://cdn.shopify.com/s/files/1/0211/8944/products/Lorem3_compact.jpg?v=1371040442'}
    ],
  }

  render () {
      const { items } = this.state;
      return (
          <Carousel>
              {items.map(item => <div key={item.id}>{item.link}</div>)}
          </Carousel>
      )
  }
}

