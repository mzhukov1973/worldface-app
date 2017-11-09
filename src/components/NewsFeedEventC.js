import React, { Component } from 'react'
//import PropTypes            from 'prop-types'
//import elementType          from 'prop-types-extra/lib/elementType'
import { Feed }             from 'semantic-ui-react'
import { Icon }             from 'semantic-ui-react'

//import { ResponsiveComponent } from "react-responsive-component"
import 'semantic-ui-css/semantic.min.css'

class NewsFeedEventC extends Component {
//  static defaultProps = {
//    newsFeedData:{
//      1: {
//        eventIdx:  1,
//        label:     '',
//        summary:   '',
//        timestamp: '',
//        meta:      '',
//        extra:     ''
//      },
//
//    }
//  }
//  static propTypes    = {
//    newsFeedData: PropTypes.shape({
//      eventIdx:   PropTypes.shape({
//        eventIdx:  PropTypes.number.isRequired,
//        label:     PropTypes.string.isRequired,
//        summary:   PropTypes.string.isRequired,
//        timestamp: PropTypes.string.isRequired,
//        meta:      PropTypes.string.isRequired,
//        extra:     PropTypes.string.isRequired
//      }).isRequired,
//    }).isRequired,
//    eventIdx:     PropTypes.number.isRequired
//  }
//  static baseCSSRules = {
//    '.NewsFeedEventClassOne':'{\nposition:absolute;\nfont-size:1em;\nline-height:1.2em;\ntop:1em;\nleft:1em;\nline-height:1.2em;\nheight:3em;\nmargin:0;\npadding:2px;\nborder:1px solid rgba(0,0,0,1);\nbackground-color: rgba(220,220,220,0.8);\nz-index:0;\ntext-align:left;\n}\n',
//    '.NewsFeedEventClassTwo':'{\nfont-size:1em;\nline-height:1.2em;\n;border:2px solid red;\nposition:relative;\npadding:4px;\nmargin:2px;\nmargin-top:50px;\n}\n'
//  }

//  instCSSRules={}
//  reGenerateCSSRules = () => {let result=null,newRuleIdx=0,style=document.createElement('style');style.appendChild(document.createTextNode(''));document.head.appendChild(style);let stSh=style.sheet;for (let i in NewsFeedEventC.baseCSSRules) {if (!NewsFeedEventC.baseCSSRules.hasOwnProperty(i)) {continue;}let clSelExploded = i.split(' ');clSelExploded.forEach((currVal,idx,array)=>{clSelExploded[idx]=currVal.slice(0,1)+this.props.newsFeedData[this.props.eventIdx].eventIdx+currVal.slice(1);});let newClSel = clSelExploded.join(' ');newRuleIdx = stSh.insertRule( (newClSel+'\n'+NewsFeedEventC.baseCSSRules[i]), stSh.cssRules.length );result = stSh.cssRules[newRuleIdx];this.instCSSRules[i] = {'newSel':newClSel,'rule':result};}}

  /*Generate and apply unique CSS rules for this component:*/
  componentWillMount = function() {/*this.reGenerateCSSRules();*/}
  componentDidMount  = function() { }

timeSince = function(date) {
  let seconds = Math.floor((new Date() - date) / 1000), interval = 0, retStr = '';
  /*years  */                               interval = Math.floor(seconds / 31536000); if (interval > 1) {if (interval === 1) {retStr += ' ' +  interval + " год";}    else if ((interval >= 2)&&(interval <= 4)) {retStr += ' ' +  interval + " года";}   else {retStr += ' ' +  interval + " лет";}}
  /*months */ seconds -= interval*31536000; interval = Math.floor(seconds / 2592000);  if (interval > 1) {if (interval === 1) {retStr += ' ' +  interval + " месяц";}  else if ((interval >= 2)&&(interval <= 4)) {retStr += ' ' +  interval + " месяца";} else {retStr += ' ' +  interval + " месяцев";}}
  /*days   */ seconds -= interval*2592000;  interval = Math.floor(seconds / 86400);    if (interval > 1) {if (interval === 1) {retStr += ' ' +  interval + " день";}   else if ((interval >= 2)&&(interval <= 4)) {retStr += ' ' +  interval + " дня";}    else {retStr += ' ' +  interval + " дней";}}
  /*hours  */ seconds -= interval*86400;    interval = Math.floor(seconds / 3600);     if (interval > 1) {if (interval === 1) {retStr += ' ' +  interval + " час";}    else if ((interval >= 2)&&(interval <= 4)) {retStr += ' ' +  interval + " часа";}   else {retStr += ' ' +  interval + " часов";}}
  /*minutes*/ seconds -= interval*3600;     interval = Math.floor(seconds / 60);       if (interval > 1) {if (interval === 1) {retStr += ' ' +  interval + " минута";} else if ((interval >= 2)&&(interval <= 4)) {retStr += ' ' +  interval + " минуты";} else {retStr += ' ' +  interval + " минут";}}
  /*seconds*/ /*seconds -= interval*60; if (Math.floor(seconds) === 1) {retStr += ' ' +  interval + " секунду";} else if ((Math.floor(seconds) >= 2)&&(Math.floor(seconds) <= 4)) {retStr += ' ' +  interval + " секунды";} else {retStr += ' ' +  Math.floor(seconds) + " секунд";}*/
  return retStr;
}

  render() {
    let label;
    if (this.props.newsFeedData[this.props.eventIdx].label==='sale') {
      label =     <Icon.Group size='large'>
                   <Icon name='money' color={(this.props.newsFeedData[this.props.eventIdx].active)?'green':'grey'}/>
                  </Icon.Group>;
    }
    else if (this.props.newsFeedData[this.props.eventIdx].label==='mail') {
      label = <Icon.Group size='large'>
               <Icon name='mail outline' color={(this.props.newsFeedData[this.props.eventIdx].read)?'grey':'green'}/>
              </Icon.Group>;
    }
    else {
      label = <Icon.Group size='large'>
               <Icon name='announcement'/>
              </Icon.Group>;
    }
    return (
      <Feed.Event>
       <Feed.Label>{label}</Feed.Label>
       <Feed.Content>
        <Feed.Summary>{this.props.newsFeedData[this.props.eventIdx].summary}</Feed.Summary>
        <Feed.Date><br/>{this.timeSince(new Date(this.props.newsFeedData[this.props.eventIdx].timestamp*1000))} назад</Feed.Date>
        <Feed.Extra>{this.props.newsFeedData[this.props.eventIdx].extra}</Feed.Extra>
        <Feed.Meta>{this.props.newsFeedData[this.props.eventIdx].meta}</Feed.Meta>
       </Feed.Content>
      </Feed.Event>
    );
  }
}

export default NewsFeedEventC
