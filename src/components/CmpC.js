import React, { Component } from 'react'
import PropTypes            from 'prop-types'

class CmpC extends Component {
  static defaultProps = { cmpData:{componentsText:'Placeholder', width:256, height:256, modPrefix:''} }
  static propTypes    = { cmpData:PropTypes.shape({componentsText:PropTypes.string.isRequired, width:PropTypes.number.isRequired, height:PropTypes.number.isRequired}).isRequired, setModPrefix:PropTypes.func.isRequired, reactOnClick:PropTypes.func.isRequired }
  static baseCSSRules = {
    '.CmpClassOne':'{\nposition:absolute;\nfont-size:1em;\nline-height:1.2em;\ntop:1em;\nleft:1em;\nline-height:1.2em;\nheight:3em;\nmargin:0;\npadding:2px;\nborder:1px solid rgba(0,0,0,1);\nbackground-color: rgba(220,220,220,0.8);\nz-index:0;\ntext-align:left;\n}\n',
    '.CmpClassTwo':'{\nfont-size:1em;\nline-height:1.2em;\n;border:2px solid red;\nposition:relative;\npadding:4px;\nmargin:2px;\nmargin-top:50px;\n}\n'
  }
  static genNewModPrefix() {
    return 'CmpC_'+Date.now().toString(16).slice(4)+'_CmpC_';
  }

  instCSSRules={}
  reGenerateCSSRules = () => {let result=null,newRuleIdx=0,style=document.createElement('style');style.appendChild(document.createTextNode(''));document.head.appendChild(style);let stSh=style.sheet;for (let i in CmpC.baseCSSRules) {if (!CmpC.baseCSSRules.hasOwnProperty(i)) {continue;}let clSelExploded = i.split(' ');clSelExploded.forEach((currVal,idx,array)=>{clSelExploded[idx]=currVal.slice(0,1)+this.props.cmpData.modPrefix+currVal.slice(1);});let newClSel = clSelExploded.join(' ');newRuleIdx = stSh.insertRule( (newClSel+'\n'+CmpC.baseCSSRules[i]), stSh.cssRules.length );result = stSh.cssRules[newRuleIdx];this.instCSSRules[i] = {'newSel':newClSel,'rule':result};}}

  /*Genereate and apply unique CSS rules for this component:*/
  componentWillMount = function() {this.reGenerateCSSRules();}
  componentDidMount  = function() { }

  render() {
    return (
      <div className={this.props.cmpData.modPrefix+'CmpClassTwo'}
           style={{width:this.props.cmpData.width+'px',height:this.props.cmpData.height+'px'}}>
       <div className={this.props.cmpData.modPrefix+'CmpClassOne'}
            dangerouslySetInnerHTML={{__html:this.props.cmpData.componentsText}}></div>
      </div>
    );
  }
}

export default CmpC
