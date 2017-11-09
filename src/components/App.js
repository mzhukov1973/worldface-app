import React, { Component }   from 'react';
//import MediaQuery from 'react-responsive';
import {Container}            from 'semantic-ui-react'
import { Header }             from 'semantic-ui-react'
import { Icon }               from 'semantic-ui-react'
import { Sidebar }            from 'semantic-ui-react'
import { Segment }            from 'semantic-ui-react'
import { Menu }               from 'semantic-ui-react'
import { Dimmer }             from 'semantic-ui-react'
//import { Divider }            from 'semantic-ui-react'
import { Transition }         from 'semantic-ui-react'
import { MorphReplace }       from 'react-svg-morph'
import { MorphReplaceResize } from 'react-svg-morph'
import { MorphTransition }    from 'react-svg-morph'
//import { svg } from 'font-awesome-assets'
//import IconNewsFeed from 'svg-react-loader?name=Icon!../svg/my-icon.svg';
import { MLMenu }             from '../modules/MLMenu'
import './css/MLMenu.component.css'
//import './css/bootstrap.min.css'
//import './css/bootstrap-theme.min.css'
//import './fonts/font-awesome.modified.css'
import './css/App.css'


import UserHomeCConn                  from '../containers/UserHomeCConn'
//import UserProfilePersCConn           from '../containers/UserProfilePersCConn'
//import UserProfileIntChatProfileCConn from '../containers/UserProfileIntChatProfileCConn'
//import UserProfileCommsCConn          from '../containers/UserProfileCommsCConn'
//import UserProfileDocsCConn           from '../containers/UserProfileDocsCConn'
//import UserGalleryCConn               from '../containers/UserGalleryCConn'
//import UserProfDiaryCConn             from '../containers/UserProfDiaryCConn'
//import UserOwnLinksPoolCConn          from '../containers/UserOwnLinksPoolCConn'
import CatalogueCConn                 from '../containers/CatalogueCConn'
import NewsFeedCConn                  from '../containers/NewsFeedCConn'
//import PromosCConn                    from '../containers/PromosCConn'
//import WFBlogCConn                    from '../containers/WFBlogCConn' /*WFBlog === Worldface Blog*/
//import OrdersCConn                    from '../containers/OrdersCConn'
//import FavouritesCConn                from '../containers/FavouritesCConn' /*from all sections*/
//import NotificationsCConn             from '../containers/NotificationsCConn'
//import InternalContactsCConn          from '../containers/InternalContactsCConn' /* for now only 1-2 support, 1 manager & 1 admin tops */
//import InternalChatCConn              from '../containers/InternalChatCConn'
//import SupportCConn                   from '../containers/SupportCConn'
//import CartCConn                      from '../containers/CartCConn' /*Should not lead down a route, should oprn a nice modal instead */





class IcoNewsPaper1 extends React.Component {
    render() {
        return (
<div style={{'padding':'0.25rem !important'}}>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="42" height="32" viewBox="0 0 42 32" fill="#FFF">
<title>newspaper</title>
<path d="M37 29c1.196 0 2-0.804 2-2v-26.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v26.5c0 0.87-0.627 1-1 1-0.103 0-1-0.028-1-1v-26.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v26.5c0 1.313 1.006 2 2 2zM4.5 21h10c0.276 0 0.5-0.224 0.5-0.5v-9c0-0.276-0.224-0.5-0.5-0.5h-10c-0.276 0-0.5 0.224-0.5 0.5v9c0 0.276 0.224 0.5 0.5 0.5zM5 12h9v8h-9v-8zM4.5 8h24c0.276 0 0.5-0.224 0.5-0.5v-4c0-0.276-0.224-0.5-0.5-0.5h-24c-0.276 0-0.5 0.224-0.5 0.5v4c0 0.276 0.224 0.5 0.5 0.5zM5 4h23v3h-23v-3zM28.5 11h-10c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h10c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5zM28.5 14h-10c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h10c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5zM28.5 17h-10c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h10c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5zM28.5 20h-10c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h10c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5zM28.5 23h-10c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h10c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5zM4.5 24h10c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-10c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5zM28.5 26h-10c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h10c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5zM4.5 27h10c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-10c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5zM5 31.947h32c0.008 0 0.016 0 0.020 0 0.007 0 0.013-0.004 0.020-0.004 2.709-0.022 4.908-2.229 4.908-4.943v-26.5c0-0.247-0.2-0.447-0.447-0.447s-0.447 0.2-0.447 0.447v26.5c0 2.235-1.818 4.053-4.053 4.053s-4.054-1.818-4.054-4.053v-26.5c0-0.247-0.2-0.447-0.447-0.447h-32c-0.247 0-0.447 0.2-0.447 0.447v26.5c0 2.728 2.219 4.947 4.947 4.947zM0.947 0.947h31.105v26.053c0 0.306 0.037 0.603 0.090 0.895 0.011 0.058 0.020 0.116 0.033 0.173 0.062 0.278 0.144 0.547 0.251 0.806 0.019 0.047 0.042 0.091 0.063 0.137 0.108 0.242 0.233 0.475 0.378 0.695 0.017 0.025 0.030 0.052 0.047 0.077 0.158 0.23 0.338 0.443 0.531 0.643 0.042 0.043 0.083 0.085 0.127 0.127 0.186 0.18 0.382 0.351 0.594 0.5h-29.166c-2.234 0-4.053-1.818-4.053-4.053v-26.053z"></path>
</svg>
</div>
        );
    }
}

class IcoNewsPaper2 extends React.Component {
    render() {
        return (
<div style={{'padding':'0.25rem !important'}}>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFF">
<title>newspaper2</title>
<path d="M6 16h12v-6h-12v6zM7 11h10v4h-10v-4zM6 8h12v1h-12zM6 17h5v1h-5zM6 19h3v1h-3zM10.035 19.059h1v1h-1zM13 17h5v1h-5zM13 19h5v1h-5zM20 4v-0.941c0-1.159-0.998-2.059-3.465-2.059h-12c-1.654 0-2.535 1.404-2.535 3.059v17c0 1.654 0.881 2.941 2.535 2.941h14c1.654 0 1.465 0 3.465 0v-20h-2zM20 22h-15.465c-0.551 0-0.535-0.391-0.535-0.941v-17c0-0.551-0.016-1.059 0.535-1.059h13.465v1h-12v2h14v16z"></path>
</svg>
</div>
        );
    }
}

class IcoNewsPaper3 extends React.Component {
    render() {
        return (
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="28" viewBox="0 0 32 28" fill="#FFF">
<title>newspaper-o</title>
<path d="M16 8h-6v6h6v-6zM18 18v2h-10v-2h10zM18 6v10h-10v-10h10zM28 18v2h-8v-2h8zM28 14v2h-8v-2h8zM28 10v2h-8v-2h8zM28 6v2h-8v-2h8zM4 21v-15h-2v15c0 0.547 0.453 1 1 1s1-0.453 1-1zM30 21v-17h-24v17c0 0.344-0.063 0.688-0.172 1h23.172c0.547 0 1-0.453 1-1zM32 2v19c0 1.656-1.344 3-3 3h-26c-1.656 0-3-1.344-3-3v-17h4v-2h28z"></path>
</svg>
        );
    }
}

class IcoArrowDown1 extends React.Component {
    render() {
        return (
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="#FFF">
<title>arrow-down-outline</title>
<path d="M12 21.312l-7.121-7.121c-1.17-1.17-1.17-3.073 0-4.242 1.094-1.094 2.978-1.138 4.121-0.115v-4.834c0-1.654 1.346-3 3-3s3 1.346 3 3v4.834c1.143-1.023 3.027-0.979 4.121 0.115 1.17 1.169 1.17 3.072 0 4.242l-7.121 7.121zM7 11.070c-0.268 0-0.518 0.104-0.707 0.293-0.391 0.39-0.391 1.023 0 1.414l5.707 5.707 5.707-5.707c0.391-0.391 0.391-1.024 0-1.414-0.379-0.379-1.035-0.379-1.414 0l-3.293 3.293v-9.656c0-0.551-0.448-1-1-1s-1 0.449-1 1v9.656l-3.293-3.293c-0.189-0.189-0.439-0.293-0.707-0.293z"></path>
</svg>
        );
    }
}
class IcoArrowDown2 extends React.Component {
    render() {
        return (
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="#FFF">
<title>arrow-down-thick</title>
<path d="M18.414 10.656c-0.781-0.781-2.047-0.781-2.828 0l-1.586 1.586v-7.242c0-1.105-0.896-2-2-2-1.105 0-2 0.895-2 2v7.242l-1.586-1.586c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.414 6.414 6.414-6.414c0.781-0.781 0.781-2.046 0-2.828z"></path>
</svg>
        );
    }
}
class IcoArrowDown3 extends React.Component {
    render() {
        return (
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="#FFF">
<title>arrow-down</title>
<path d="M16.707 13.293c-0.391-0.391-1.023-0.391-1.414 0l-2.293 2.293v-7.586c0-0.552-0.447-1-1-1s-1 0.448-1 1v7.586l-2.293-2.293c-0.391-0.391-1.023-0.391-1.414 0s-0.391 1.023 0 1.414l4.707 4.707 4.707-4.707c0.391-0.391 0.391-1.023 0-1.414z"></path>
</svg>
        );
    }
}


class App extends Component {
  state = { visible: false, visible1: true, visible2: false, visible3: false, visible4: false, visible5: false }

  toggleVisibility  = () => {this.setState({ visible:  !this.state.visible });}
  setVisibility1 = () => {this.setState({ visible1:true, visible2:false,visible3:false,visible4:false,visible5:false });}
  setVisibility2 = () => {this.setState({ visible1:false,visible2:true, visible3:false,visible4:false,visible5:false });}
  setVisibility3 = () => {this.setState({ visible1:false,visible2:false,visible3:true, visible4:false,visible5:false });}
  setVisibility4 = () => {this.setState({ visible1:false,visible2:false,visible3:false,visible4:true, visible5:false });}
  setVisibility5 = () => {this.setState({ visible1:false,visible2:false,visible3:false,visible4:false,visible5:true  });}

  componentWillMount = function() {}

  componentDidMount  = function() {
    this.menuEl=document.getElementById('ml-menu');
    this.mlmenu=new MLMenu(this.menuEl, {backCtrl:false,onItemClick:function(){}});
//    this.openMenuCtrl=document.querySelector('.action--open');
//    this.closeMenuCtrl=document.querySelector('.action--close');
//    this.openMenu=function(){classie.add(this.menuEl,'menu--open');}
//    this.closeMenu=function(){classie.remove(this.menuEl,'menu--open');}
//    this.openMenuCtrl.addEventListener('click',this.openMenu);
//    this.closeMenuCtrl.addEventListener('click',this.closeMenu);
//    this.gridWrapper=document.querySelector('.content');
//    this.loadDummyData = function (ev,itemName) {
//      console.log('MLMenu - attempting to load data.\nev is:');console.log(ev);console.log('itemName:');console.log(itemName);
//      ev.preventDefault();
//      this.toggleVisibility();
//      this.gridWrapper.innerHTML = '';
//      classie.add(this.gridWrapper,'content--loading');
//      setTimeout(function() {
//        classie.remove(this.gridWrapper,'content--loading');
//        this.gridWrapper.innerHTML = '<ul className="products">'+dummyData[itemName]+'<ul>';
//      },700);
//    }
  }


  render() {
const { visible } = this.state
const transAnimation = 'fly left';
const transDuration  = 1000;
    return (
      <div className="App">
       <Sidebar.Pushable as={Segment} className='pshbl'>

        <div className={(this.state.visible)?'sdbr2_show':'sdbr2_hide'} onClick={(e)=>{console.log('click at sdbr2!\nHere is the event object:');console.log(e);e.stopPropagation();this.toggleVisibility();}}></div>

        <Sidebar as={Menu} animation='overlay' width='wide' visible={visible} icon='labeled' vertical inverted className='sdbr'>

{/*
         <Breadcrumb size='mini' className='brdcrmb'>
          <Breadcrumb.Section link>Каталог (начало)</Breadcrumb.Section>
          <Breadcrumb.Divider icon='right chevron' />
          <Breadcrumb.Section active>Группа товаров №33</Breadcrumb.Section>
         </Breadcrumb>

         <Divider horizontal />

         <Menu.Item name='Catalogue' position='left' onClick={()=>{this.setVisibility1();this.toggleVisibility();}} style={{'textAlign':'left'}}>
          <Icon.Group>
           <Icon name='home'/>
          </Icon.Group>Каталог (начало)
         </Menu.Item>
         <Menu.Item name='NewsFeed'  position='right' onClick={()=>{this.setVisibility2();this.toggleVisibility();}} style={{'textAlign':'left'}}>
          <Icon.Group>
           <Icon name='newspaper'/>
           <Icon name='alarm' inverted corner color='green'/>
          </Icon.Group>Новости
         </Menu.Item>
         <Menu.Item name='chat' onClick={()=>{this.setVisibility3();this.toggleVisibility();}} style={{'textAlign':'left'}}>
          <Icon.Group>
           <Icon name='comments'/>
          </Icon.Group>Чат
         </Menu.Item>
         <Menu.Item name='UserHome' onClick={()=>{this.setVisibility4();this.toggleVisibility();}} style={{'textAlign':'left'}}>
          <Icon.Group>
           <Icon name='home'/>
           <Icon name='user' inverted corner color='green'/>
          </Icon.Group>Личный кабинет
         </Menu.Item>
         <Menu.Item name='Cart' onClick={()=>{this.setVisibility5();this.toggleVisibility();}} style={{'textAlign':'left'}}>
          <Icon.Group>
           <Icon name='shopping basket'/>
           <Icon name='search' inverted corner color='green'/>
          </Icon.Group>Корзина
         </Menu.Item>
*/}

{/* MLMenu: */}
         <nav id='ml-menu' className='menu menu--open'>
          <div className='menu__wrap' style={{'textAlign':'left'}}>
           <ul data-menu='main' className='menu__level'>
            <li className='menu__item'><span className='menu__link' data-submenu='submenu-1' >Item-1</span></li>
            <li className='menu__item' onClick={()=>{this.setVisibility2();this.toggleVisibility();}} style={{'textAlign':'left'}}><Icon.Group><Icon name='newspaper'/><Icon name='alarm' inverted corner color='green'/></Icon.Group>Новости</li>
            <li className='menu__item'><span className='menu__link' data-submenu='submenu-3' >Item-3</span></li>
            <li className='menu__item'><span className='menu__link' data-submenu='submenu-4' >Item-4</span></li>
           </ul>
           {/* Submenu 1 */}
           <ul data-menu='submenu-1' className='menu__level'>
            <li className='menu__item' onClick={()=>{this.toggleVisibility();}}><span className='menu__link'>Item-1-1</span></li>
            <li className='menu__item' onClick={()=>{this.toggleVisibility();}}><span className='menu__link'>Item-1-2</span></li>
            <li className='menu__item' onClick={()=>{this.toggleVisibility();}}><span className='menu__link'>Item-1-3</span></li>
            <li className='menu__item' onClick={()=>{this.toggleVisibility();}}><span className='menu__link'>Item-1-4</span></li>
            <li className='menu__item' onClick={()=>{this.toggleVisibility();}}><span className='menu__link'>Item-1-5</span></li>
            <li className='menu__item'><span className='menu__link' data-submenu='submenu-1-1'>Item-1-6</span></li>
           </ul>
           {/* Submenu 1-1 */}
           <ul data-menu='submenu-1-1' className='menu__level'>
            <li className='menu__item' onClick={()=>{this.toggleVisibility();}}><span className='menu__link'>Item-1-6-1</span></li>
            <li className='menu__item' onClick={()=>{this.toggleVisibility();}}><span className='menu__link'>Item-1-6-2</span></li>
            <li className='menu__item' onClick={()=>{this.toggleVisibility();}}><span className='menu__link'>Item-1-6-3</span></li>
            <li className='menu__item' onClick={()=>{this.toggleVisibility();}}><span className='menu__link'>Item-1-6-4</span></li>
           </ul>
           {/* Submenu 2 */}
           <ul data-menu='submenu-2' className='menu__level'>
            <li className='menu__item' onClick={()=>{this.toggleVisibility();}}><span className='menu__link'>Citrus Fruits</span></li>
            <li className='menu__item' onClick={()=>{this.toggleVisibility();}}><span className='menu__link'>Berries</span></li>
            <li className='menu__item'><span className='menu__link' data-submenu='submenu-2-1'>Special Selection</span></li>
            <li className='menu__item' onClick={()=>{this.toggleVisibility();}}><span className='menu__link'>Tropical Fruits</span></li>
            <li className='menu__item' onClick={()=>{this.toggleVisibility();}}><span className='menu__link'>Melons</span></li>
           </ul>
           {/* Submenu 2-1 */}
           <ul data-menu='submenu-2-1' className='menu__level'>
            <li className='menu__item' onClick={()=>{this.toggleVisibility();}}><span className='menu__link'>Exotic Mixes</span></li>
            <li className='menu__item' onClick={()=>{this.toggleVisibility();}}><span className='menu__link'>Wild Pick</span></li>
            <li className='menu__item' onClick={()=>{this.toggleVisibility();}}><span className='menu__link'>Vitamin Boosters</span></li>
           </ul>
           {/* Submenu 3 */}
           <ul data-menu='submenu-3' className='menu__level'>
            <li className='menu__item' onClick={()=>{this.toggleVisibility();}}><span className='menu__link'>Item-3-1</span></li>
            <li className='menu__item' onClick={()=>{this.toggleVisibility();}}><span className='menu__link'>Item-3-2</span></li>
            <li className='menu__item' onClick={()=>{this.toggleVisibility();}}><span className='menu__link'>Item-3-3</span></li>
            <li className='menu__item' onClick={()=>{this.toggleVisibility();}}><span className='menu__link'>Item-3-4</span></li>
            <li className='menu__item' onClick={()=>{this.toggleVisibility();}}><span className='menu__link'>Item-3-5</span></li>
            <li className='menu__item'><span className='menu__link' data-submenu='submenu-3-1'>Item-3-6</span></li>
           </ul>
           {/* Submenu 3-1 */}
           <ul data-menu='submenu-3-1' className='menu__level'>
            <li className='menu__item' onClick={()=>{this.toggleVisibility();}}><span className='menu__link'>Item-3-6-1</span></li>
            <li className='menu__item' onClick={()=>{this.toggleVisibility();}}><span className='menu__link'>Item-3-6-2</span></li>
            <li className='menu__item' onClick={()=>{this.toggleVisibility();}}><span className='menu__link'>Item-3-6-3</span></li>
            <li className='menu__item' onClick={()=>{this.toggleVisibility();}}><span className='menu__link'>Item-3-6-4</span></li>
           </ul>
           {/* Submenu 4 */}
           <ul data-menu='submenu-4' className='menu__level'>
            <li className='menu__item' onClick={()=>{this.toggleVisibility();}}><span className='menu__link'>Item-4-1</span></li>
            <li className='menu__item' onClick={()=>{this.toggleVisibility();}}><span className='menu__link'>Item-4-2</span></li>
            <li className='menu__item' onClick={()=>{this.toggleVisibility();}}><span className='menu__link'>Item-4-3</span></li>
            <li className='menu__item' onClick={()=>{this.toggleVisibility();}}><span className='menu__link'>Item-4-4</span></li>
            <li className='menu__item'><span className='menu__link' data-submenu='submenu-4-1'>Item-4-5</span></li>
           </ul>
           {/* Submenu 4-1 */}
           <ul data-menu='submenu-4-1' className='menu__level'>
            <li className='menu__item' onClick={()=>{this.toggleVisibility();}}><span className='menu__link'>Item-4-5-1</span></li>
            <li className='menu__item' onClick={()=>{this.toggleVisibility();}}><span className='menu__link'>Item-4-5-2</span></li>
            <li className='menu__item' onClick={()=>{this.toggleVisibility();}}><span className='menu__link'>Item-4-5-3</span></li>
           </ul>
          </div>
         </nav>
{/* <div className='content'><p className='info'>...Ajaxes go here...</p></div>      {this.state.visible2 ? <Icon key='newspaper' name='newspaper'/> : <IcoTwo key="icoTwo" />}               */}

        </Sidebar>

        <Sidebar.Pusher className='pshr'>
         <Dimmer.Dimmable as={Segment} blurring dimmed={visible} basic className='sgmnt'>
          <Header as='h1' attached='top' inverted className='hdr'>

           <div style={{'marginTop':'-0.785714rem','marginBottom':'-0.785714rem'}}>
            <Icon fitted name='sidebar' onClick={this.toggleVisibility}/>
            <Icon name='home' onClick={this.setVisibility1} style={{'marginLeft':'1rem'}}/>
           </div>

           <div style={{'marginTop':'-0.785714rem','marginBottom':'-0.785714rem'}}>
{/*
            <Icon.Group className='topIcons' onClick={this.setVisibility2} style={{'padding':'0.25rem'}}>
             <MorphReplaceResize rotation='none' color='green' height={28}>
              {!this.state.visible2 ? <IcoNewsPaper1 key='newspaper1'/> : <IcoArrowDown1 key="icoarrowdown1"/>}
             </MorphReplaceResize>
             <Icon name='alarm' inverted corner color='green'/>
            </Icon.Group>
*/}


           <Icon.Group className='topIcons' onClick={this.setVisibility2}>
            <Icon name='newspaper'/>
            <Icon name='alarm' inverted corner color='green'/>
           </Icon.Group>
{/*
const briefcase = svg('briefcase', 'rgba(0,255,0,1)');
console.log('briefcase:');
console.log(briefcase);
*/}

            <Icon.Group className='topIcons'> {/*<=====onClick={this.setVisibility3}*/}
             <Icon name='comments' disabled />
            </Icon.Group>

             <Icon.Group className='topIcons' onClick={this.setVisibility4}>
              <Icon name='home'/>
              <Icon name='user' inverted corner color='green'/>
             </Icon.Group>

            <Icon.Group className='topIcons' onClick={this.setVisibility5}>
             <Icon name='shopping basket'/>
             <Icon name='search' inverted corner color='green'/>
            </Icon.Group>
           </div>
          </Header>

          <Container fluid textAlign='center' className='cntNr'>

<Transition animation={transAnimation} duration={transDuration} mountOnShow={false} transitionOnMount={true} unmountOnHide={false} visible={this.state.visible1}>
           <div><CatalogueCConn/></div>
</Transition>

<Transition animation={transAnimation} duration={transDuration} mountOnShow={false} transitionOnMount={true} unmountOnHide={false} visible={this.state.visible2}>
           <div><NewsFeedCConn/></div>
</Transition>

<Transition animation={transAnimation} duration={transDuration} mountOnShow={false} transitionOnMount={true} unmountOnHide={false} visible={this.state.visible3}>
           <div>The third container</div>
</Transition>

<Transition animation={transAnimation} duration={transDuration} mountOnShow={false} transitionOnMount={true} unmountOnHide={false} visible={this.state.visible4}>
           <div><UserHomeCConn/></div>
</Transition>

<Transition animation={transAnimation} duration={transDuration} mountOnShow={false} transitionOnMount={true} unmountOnHide={false} visible={this.state.visible5}>
           <div>The fifth container</div>
</Transition>

          </Container>

         </Dimmer.Dimmable>
        </Sidebar.Pusher>
       </Sidebar.Pushable>
      </div>
    );
  }
}

export default App
