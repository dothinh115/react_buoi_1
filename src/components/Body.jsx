import React, { Component, Fragment } from 'react';
import Banner from '../components/Banner';
import Item from '../components/Item';

export default class Body extends Component {
  render() {
    return (
        <div className="container">
            <Banner />
            <Item />
        </div>
    )
  }
}
