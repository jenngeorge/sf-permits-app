import React from "react";
import Map from './components/map';
import Menu from './components/menu';

export default class App extends React.Component {
  render () {
    return (
      <div>
        <Map />
        <Menu />
      </div>
    );
  }
}
