/*Mini CatItemC.js - statless, works just off two props: unque item id and modPrefix. It should always point to one that exists in the currewnt state anyway.*/
import React, { Component } from 'react'
import PropTypes            from 'prop-types'

class MiniCatItemC extends Component {
  static defaultProps = { uniqueItemId:'907a26f71b',                modPrefix:'' }
  static propTypes    = { uniqueItemId:PropTypes.string.isRequired, modPrefix:PropTypes.string.isRequired }
  static baseCSSRules = {
    '.MiniCatItemClassOne':'{\nposition:absolute;\nfont-size:1em;\nline-height:1.2em;\ntop:1em;\nleft:1em;\nline-height:1.2em;\nheight:3em;\nmargin:0;\npadding:2px;\nborder:1px solid rgba(0,0,0,1);\nbackground-color: rgba(220,220,220,0.8);\nz-index:0;\ntext-align:left;\n}\n',
    '.MiniCatItemClassTwo':'{\nfont-size:1em;\nline-height:1.2em;\n;border:2px solid red;\nposition:relative;\npadding:4px;\nmargin:2px;\nmargin-top:50px;\n}\n'
  }
  static genNewModPrefix() {
    return 'MiniCatItemC_'+Date.now().toString(16).slice(4)+'_MiniCatItemC_';
  }

  instCSSRules={}
  reGenerateCSSRules = () => {let result=null,newRuleIdx=0,style=document.createElement('style');style.appendChild(document.createTextNode(''));document.head.appendChild(style);let stSh=style.sheet;for (let i in MiniCatItemC.baseCSSRules) {if (!MiniCatItemC.baseCSSRules.hasOwnProperty(i)) {continue;}let clSelExploded = i.split(' ');clSelExploded.forEach((currVal,idx,array)=>{clSelExploded[idx]=currVal.slice(0,1)+this.props.catItemData.modPrefix+currVal.slice(1);});let newClSel = clSelExploded.join(' ');newRuleIdx = stSh.insertRule( (newClSel+'\n'+MiniCatItemC.baseCSSRules[i]), stSh.cssRules.length );result = stSh.cssRules[newRuleIdx];this.instCSSRules[i] = {'newSel':newClSel,'rule':result};}}

  /*Genereate and apply unique CSS rules for this component:*/
  componentWillMount = function() {this.reGenerateCSSRules();}
  componentDidMount  = function() { }

  render() {
    return (
      <div className={this.props.catItemData.modPrefix+'MiniCatItemClassTwo'}>
       <div className={this.props.catItemData.modPrefix+'MiniCatItemClassOne'}>Mini-item.</div>
      </div>
    );
  }
}

export default MiniCatItemC
