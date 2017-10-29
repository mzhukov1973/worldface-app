import React, { Component } from 'react'
//import { Navbar,Nav,NavItem } from 'react-bootstrap'
//import { LinkContainer } from 'react-router-bootstrap'
//import { Switch, Route, Link } from 'react-router-dom'
//import MediaQuery from 'react-responsive';
//import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import CmpCConn from '../containers/CmpCConn'
//import './css/bootstrap.min.css'
//import './css/bootstrap-theme.min.css'
//import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css'; //CSS is in node_module's "dist" folder.
import './css/App.css'


//After v4.0.0, react-bootstrap-table start to support Bootstrap 4 and also compaitable with bootstrap 3. If your application use Bootstrap 4, please remember to add version='4' on BootstrapTable. This props will make some components to compaitable with bootstrap 4 style.
//E.g.:
// <BootstrapTable data={products} version='4'>
//      <TableHeaderColumn isKey dataField='id'>Produc......

//REACT-WIDGETS:
//Stylesheets, images, and fonts are found in the dist directory. You can use webpack to require() the styles, or include the css normally. 
//add CSS styles:
//import 'react-widgets/dist/css/react-wdgets/lib/react-widgets.css';
//import { render } from 'react-dom';
//import DropdownList from 'react-widgets/lib/DropdownList';

//render(<DropdownList />, document.getElementById('app-root'));

//Good widgets include a nice Calendar for our daily needs,
//A FAST DateTimePicker,
//




//React - swipeable views.. Mighty convinient!
//import React from 'react';
//import SwipeableViews from 'react-swipeable-views';
//
//const styles = {
//  slide: {
//    padding: 15,
//    minHeight: 100,
//    color: '#fff',
//  },
//  slide1: {
//    background: '#FEA900',
//  },
//  slide2: {
//    background: '#B3DC4A',
//  },
//  slide3: {
//    background: '#6AC0FF',
//  },
//};
//
//const MyComponent = () => (
//  <SwipeableViews>
//    <div style={Object.assign({}, styles.slide, styles.slide1)}>
//      slide n°1
//    </div>
//    <div style={Object.assign({}, styles.slide, styles.slide2)}>
//      slide n°2
//    </div>
//    <div style={Object.assign({}, styles.slide, styles.slide3)}>
//      slide n°3
//    </div>
//  </SwipeableViews>
//);
//
//export default MyComponent;
//







//const Example = () => (
//  <div>
//    <div>Device Test!</div>
//    <MediaQuery minDeviceWidth={1224}>
////      <div>You are a desktop or laptop</div>
//      <MediaQuery minDeviceWidth={1824}>
//        <div>You also have a huge screen</div>
//      </MediaQuery>
//      <MediaQuery maxWidth={1224}>
//        <div>You are sized like a tablet or mobile phone though</div>
//      </MediaQuery>
//    </MediaQuery>
//    <MediaQuery maxDeviceWidth={1224}>
//      <div>You are a tablet or mobile phone</div>
////    </MediaQuery>
//    <MediaQuery orientation="portrait">
//      <div>You are portrait</div>
//    </MediaQuery>
//    <MediaQuery orientation="landscape">
//      <div>You are landscape</div>
//    </MediaQuery>
//    <MediaQuery minResolution="2dppx">
//      <div>You are retina</div>
//    </MediaQuery>
//  </div>
//);


//Rendering with a child function
//You may also specify a function for the child of the MediaQuery component. When the component renders, it is passed whether or not the given media query matches. This function must return a single element or null.
//
//<MediaQuery minDeviceWidth={700}>
//  {(matches) => {
//    if (matches) {
//      return <div>Media query matches!</div>;
//    } else {
//      return <div>Media query does not match!</div>;
//    }
//  }}
//</MediaQuery>



//Component Property
//You may specify an optional component property on the MediaQuery that indicates what component to wrap children with. Any additional props defined on the MediaQuery will be passed through to this "wrapper" component. If the component property is not defined and the MediaQuery has more than 1 child, a div will be used as the "wrapper" component by default. However, if the component prop is not defined and there is only 1 child, that child will be rendered alone without a component wrapping it.
//Specifying Wrapper Component
//
//<MediaQuery minDeviceWidth={700} component="ul">
//  <li>Item 1</li>
//  <li>Item 2</li>
//</MediaQuery>
//
//// renders the following when the media query condition is met
//
//<ul>
//  <li>Item 1</li>
//  <li>Item 2</li>
//</ul>
//Unwrapped Component
//
//<MediaQuery minDeviceWidth={700}>
//  <div>Unwrapped component</div>
//</MediaQuery>
//
//// renders the following when the media query condition is met
//
//<div>Unwrapped component</div>
//Default div Wrapper Component
//
//<MediaQuery minDeviceWidth={1200} className="some-class">
//  <div>Wrapped</div>
//  <div>Content</div>
//</MediaQuery>
//
// renders the following when the media query condition is met
//
//<div className="some-class">
//  <div>Wrapped</div>
//  <div>Content</div>
//</div>


//
//Common use cases
//
//import Responsive from 'react-responsive';
//const Desktop = props => <Responsive {...props} minWidth={992} />;
//const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
//const Mobile = props => <Responsive {...props} maxWidth={767} />;
//const Default = props => <Responsive {...props} minWidth={768} />;
//
//const Example = () => (
//  <div>
//    <Desktop>Desktop or laptop</Desktop>
//    <Tablet>Tablet</Tablet>
//    <Mobile>Mobile</Mobile>
//    <Default>Not mobile (desktop or laptop or tablet)</Default>
//  </div>
//);
//
//export default Example;
//


class App extends Component {

  render() {
    return (
        <div className='App'>
          <CmpCConn />
        </div>
    );
  }
}

export default App
