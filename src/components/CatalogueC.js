import React, { Component } from 'react'
import PropTypes            from 'prop-types'
import CatGroupCConn        from '../containers/CatGroupCConn'
import { Divider }          from 'semantic-ui-react'

class CatalogueC extends Component {
  static defaultProps = {
    catalogueData:{
      componentsText:'Placeholder',
      width:256,
      height:256,
      modPrefix:''
    }
  }
  static propTypes    = {
    catalogueData:PropTypes.shape({
      componentsText:PropTypes.string,
      width:PropTypes.number,
      height:PropTypes.number
    }),
    setModPrefix:PropTypes.func
  }
  static baseCSSRules = {
    '.CatalogueClassOne':'{\nposition:absolute;\nfont-size:1em;\nline-height:1.2em;\ntop:1em;\nleft:1em;\nline-height:1.2em;\nheight:3em;\nmargin:0;\npadding:2px;\nborder:1px solid rgba(0,0,0,1);\nbackground-color: rgba(220,220,220,0.8);\nz-index:0;\ntext-align:left;\n}\n',
    '.CatalogueClassTwo':'{\nfont-size:1em;\nline-height:1.2em;\n;border:2px solid red;\nposition:relative;\npadding:4px;\nmargin:2px;\nmargin-top:50px;\n}\n'
  }
  static genNewModPrefix() {
    return 'CatalogueC_'+Date.now().toString(16).slice(4)+'_CatalogueC_';
  }

  instCSSRules={}
  reGenerateCSSRules = () => {let result=null, newRuleIdx=0, style=document.createElement('style'); style.appendChild(document.createTextNode('')); document.head.appendChild(style);let stSh=style.sheet; for (let i in CatalogueC.baseCSSRules) {if (!CatalogueC.baseCSSRules.hasOwnProperty(i)) {continue;} let clSelExploded = i.split(' ');clSelExploded.forEach((currVal,idx,array)=>{clSelExploded[idx]=currVal.slice(0,1)+this.props.catalogueData.modPrefix+currVal.slice(1);}); let newClSel = clSelExploded.join(' ');newRuleIdx = stSh.insertRule( (newClSel+'\n'+CatalogueC.baseCSSRules[i]), stSh.cssRules.length );result = stSh.cssRules[newRuleIdx];this.instCSSRules[i] = {'newSel':newClSel,'rule':result}; }}

  /*Genereate and apply unique CSS rules for this component:*/
  componentWillMount = function() {this.reGenerateCSSRules();}
  componentDidMount  = function() { }

  render() {
    let arrout = [];
    for(let i=0;i<this.props.catalogueData.catGroupPrefixes.length;i++) { arrout.push(<Divider horizontal key={this.props.catalogueData.catGroupPrefixes[i]+'_divider'}>Group #{i+1} of {this.props.catalogueData.catGroupPrefixes.length}</Divider>);arrout.push(<CatGroupCConn key={this.props.catalogueData.catGroupPrefixes[i]} groupModPrefixFromAbove={this.props.catalogueData.catGroupPrefixes[i]}/>); }
    return (<div>{arrout}</div>);
  }
}

export default CatalogueC

