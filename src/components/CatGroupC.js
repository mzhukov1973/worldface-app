import React, { Component } from 'react'
import PropTypes            from 'prop-types'

class CatItemC extends Component {
  static defaultProps = { catGroupData:{componentsText:'Placeholder', width:256, height:256, modPrefix:''} }
  static propTypes    = { catGroupData:PropTypes.shape({componentsText:PropTypes.string.isRequired, width:PropTypes.number.isRequired, height:PropTypes.number.isRequired}).isRequired, setModPrefix:PropTypes.func.isRequired, reactOnClick:PropTypes.func.isRequired }
  static baseCSSRules = {
    '.CatItemClassOne':'{\nposition:absolute;\nfont-size:1em;\nline-height:1.2em;\ntop:1em;\nleft:1em;\nline-height:1.2em;\nheight:3em;\nmargin:0;\npadding:2px;\nborder:1px solid rgba(0,0,0,1);\nbackground-color: rgba(220,220,220,0.8);\nz-index:0;\ntext-align:left;\n}\n',
    '.CatItemClassTwo':'{\nfont-size:1em;\nline-height:1.2em;\n;border:2px solid red;\nposition:relative;\npadding:4px;\nmargin:2px;\nmargin-top:50px;\n}\n'
  }
  static genNewModPrefix() {
    return 'CatItemC_'+Date.now().toString(16).slice(4)+'_CatItemC_';
  }

  instCSSRules={}
  reGenerateCSSRules = () => {let result=null,newRuleIdx=0,style=document.createElement('style');style.appendChild(document.createTextNode(''));document.head.appendChild(style);let stSh=style.sheet;for (let i in CatItemC.baseCSSRules) {if (!CatItemC.baseCSSRules.hasOwnProperty(i)) {continue;}let clSelExploded = i.split(' ');clSelExploded.forEach((currVal,idx,array)=>{clSelExploded[idx]=currVal.slice(0,1)+this.props.catGroupData.modPrefix+currVal.slice(1);});let newClSel = clSelExploded.join(' ');newRuleIdx = stSh.insertRule( (newClSel+'\n'+CatItemC.baseCSSRules[i]), stSh.cssRules.length );result = stSh.cssRules[newRuleIdx];this.instCSSRules[i] = {'newSel':newClSel,'rule':result};}}

  /*Genereate and apply unique CSS rules for this component:*/
  componentWillMount = function() {this.reGenerateCSSRules();}
  componentDidMount  = function() { }

  render() {
    return (
      <div className={this.props.catGroupData.modPrefix+'CatItemClassTwo'}
           style={{width:this.props.catGroupData.width+'px',height:this.props.catGroupData.height+'px'}}>
       <div className={this.props.catGroupData.modPrefix+'CatItemClassOne'}
            dangerouslySetInnerHTML={{__html:this.props.catGroupData.componentsText}}></div>
      </div>
    );
  }
}

export default CatItemC
