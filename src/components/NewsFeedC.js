import React, { Component } from 'react'
//import PropTypes            from 'prop-types'
//import elementType          from 'prop-types-extra/lib/elementType'
import NewsFeedEventCConn   from '../containers/NewsFeedEventCConn'
import { Feed }             from 'semantic-ui-react'

//import { ResponsiveComponent } from "react-responsive-component"
import 'semantic-ui-css/semantic.min.css'

class NewsFeedC extends Component {
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
//    }).isRequired
//  }
//  static baseCSSRules = {
//    '.NewsFeedClassOne':'{\nposition:absolute;\nfont-size:1em;\nline-height:1.2em;\ntop:1em;\nleft:1em;\nline-height:1.2em;\nheight:3em;\nmargin:0;\npadding:2px;\nborder:1px solid rgba(0,0,0,1);\nbackground-color: rgba(220,220,220,0.8);\nz-index:0;\ntext-align:left;\n}\n',
//    '.NewsFeedClassTwo':'{\nfont-size:1em;\nline-height:1.2em;\n;border:2px solid red;\nposition:relative;\npadding:4px;\nmargin:2px;\nmargin-top:50px;\n}\n'
//  }

//  instCSSRules={}
//  reGenerateCSSRules = () => {let result=null,newRuleIdx=0,style=document.createElement('style');style.appendChild(document.createTextNode(''));document.head.appendChild(style);let stSh=style.sheet;for (let i in NewsFeedC.baseCSSRules) {if (!NewsFeedC.baseCSSRules.hasOwnProperty(i)) {continue;}let clSelExploded = i.split(' ');clSelExploded.forEach((currVal,idx,array)=>{clSelExploded[idx]=currVal.slice(0,1)+currVal.slice(1);});let newClSel = clSelExploded.join(' ');newRuleIdx = stSh.insertRule( (newClSel+'\n'+NewsFeedC.baseCSSRules[i]), stSh.cssRules.length );result = stSh.cssRules[newRuleIdx];this.instCSSRules[i] = {'newSel':newClSel,'rule':result};}}

  /*Generate and apply unique CSS rules for this component:*/
  componentWillMount = function() {/*this.reGenerateCSSRules();*/}
  componentDidMount  = function() { }

  render() {
    let arrout = [];
    let maxKey = 0;
    Object.keys(this.props.newsFeedData).forEach(function(key,index) { if (maxKey<key) {maxKey = key;} });
    for(let i=maxKey;((i>=0)&&(i>=(maxKey-20)));i--) {
      arrout.push(<NewsFeedEventCConn key={i} eventIdx={i}/>);
    }

    return (
      <Feed>
       {arrout}
      </Feed>
    );
  }
}

export default NewsFeedC
