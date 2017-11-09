import React, { Component } from 'react'
//import PropTypes            from 'prop-types'
import CatItemCConn         from '../containers/CatItemCConn'
import { Card }             from 'semantic-ui-react'
import { ResponsiveComponent } from "react-responsive-component"
import 'semantic-ui-css/semantic.min.css'

class CatGroupC extends Component {
//  static defaultProps = {
//    catGroupDatas:{
//      modPrefix:       'CatGroupC_PLACEHOLDER_CatGroupC_',
//      shortName:       'Placeholder CatGroupC'
//    }
//  }
//  static propTypes    = {
//    catGroupDatas:           PropTypes.shape({
//      modPrefix:         PropTypes.shape({
//        modPrefix:       PropTypes.string.isRequired,
//        shortName:       PropTypes.string.isRequired,
//        catItemPrefixes: PropTypes.arrayOf(PropTypes.string)
//      }).isRequired,
//    }).isRequired,
//    groupModPrefixFromAbove: PropTypes.string.isRequired,
//    setModPrefix:            PropTypes.func.isRequired
//  }
  static baseCSSRules = {
    '.CatGroupClassOne':'{\nposition:absolute;\nfont-size:1em;\nline-height:1.2em;\ntop:1em;\nleft:1em;\nline-height:1.2em;\nheight:3em;\nmargin:0;\npadding:2px;\nborder:1px solid rgba(0,0,0,1);\nbackground-color: rgba(220,220,220,0.8);\nz-index:0;\ntext-align:left;\n}\n',
    '.CatGroupClassTwo':'{\nfont-size:1em;\nline-height:1.2em;\n;border:2px solid red;\nposition:relative;\npadding:4px;\nmargin:2px;\nmargin-top:50px;\n}\n'
  }
  static genNewModPrefix() {
    return 'CatGroupC_'+Date.now().toString(16).slice(4)+'_CatGroupC_';
  }

  instCSSRules={}
  reGenerateCSSRules = () => {let result=null,newRuleIdx=0,style=document.createElement('style');style.appendChild(document.createTextNode(''));document.head.appendChild(style);let stSh=style.sheet;for (let i in CatGroupC.baseCSSRules) {if (!CatGroupC.baseCSSRules.hasOwnProperty(i)) {continue;}let clSelExploded = i.split(' ');clSelExploded.forEach((currVal,idx,array)=>{clSelExploded[idx]=currVal.slice(0,1)+this.props.catGroupDatas[this.props.groupModPrefixFromAbove].modPrefix+currVal.slice(1);});let newClSel = clSelExploded.join(' ');newRuleIdx = stSh.insertRule( (newClSel+'\n'+CatGroupC.baseCSSRules[i]), stSh.cssRules.length );result = stSh.cssRules[newRuleIdx];this.instCSSRules[i] = {'newSel':newClSel,'rule':result};}}

  /*Genereate and apply unique CSS rules for this component:*/
  componentWillMount = function() {this.reGenerateCSSRules();}
  componentDidMount  = function() { }

  render() {
    let arrout = [];
    for(let i=0;i<this.props.catGroupDatas[this.props.groupModPrefixFromAbove].catItemPrefixes.length;i++) {
      arrout.push(<CatItemCConn key={this.props.catGroupDatas[this.props.groupModPrefixFromAbove].catItemPrefixes[i]} groupModPrefixFromAbove={this.props.catGroupDatas[this.props.groupModPrefixFromAbove].modPrefix} itemModPrefixFromAbove={this.props.catGroupDatas[this.props.groupModPrefixFromAbove].catItemPrefixes[i]} />);
    }

    return (
      <div>
       <ResponsiveComponent query="only screen and (max-width: 359px)">
        <Card.Group itemsPerRow={2}> {arrout} </Card.Group>
       </ResponsiveComponent>
       <ResponsiveComponent query="only screen and (min-width: 360px) and (max-width: 599px)">
        <Card.Group itemsPerRow={3}> {arrout} </Card.Group>
       </ResponsiveComponent>
       <ResponsiveComponent query="only screen and (min-width: 600px)">
        <Card.Group itemsPerRow={4}> {arrout} </Card.Group>
       </ResponsiveComponent>
      </div>
    );
  }
}

export default CatGroupC
