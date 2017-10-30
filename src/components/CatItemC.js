import React, { Component } from 'react'
import PropTypes            from 'prop-types'
import { Button }           from 'semantic-ui-react'
import { Container }        from 'semantic-ui-react'
import { Divider }          from 'semantic-ui-react'
import { Card }             from 'semantic-ui-react'
import { Icon }             from 'semantic-ui-react'
import { Image }             from 'semantic-ui-react'
import logoHead from './images/logoHead.svg'


class CatItemC extends Component {
  static defaultProps = { catItemData:{componentsText:'Placeholder', width:256, height:256, modPrefix:''} }
  static propTypes    = { catItemData:PropTypes.shape({componentsText:PropTypes.string.isRequired, width:PropTypes.number.isRequired, height:PropTypes.number.isRequired}).isRequired, setModPrefix:PropTypes.func.isRequired, reactOnClick:PropTypes.func.isRequired }
  static baseCSSRules = {
    '.CatItemClassOne':'{\nposition:absolute;\nfont-size:1em;\nline-height:1.2em;\ntop:1em;\nleft:1em;\nline-height:1.2em;\nheight:3em;\nmargin:0;\npadding:2px;\nborder:1px solid rgba(0,0,0,1);\nbackground-color: rgba(220,220,220,0.8);\nz-index:0;\ntext-align:left;\n}\n',
    '.CatItemClassTwo':'{\nfont-size:1em;\nline-height:1.2em;\n;border:2px solid red;\nposition:relative;\npadding:4px;\nmargin:2px;\nmargin-top:50px;\n}\n'
  }
  static genNewModPrefix() {
    return 'CatItemC_'+Date.now().toString(16).slice(4)+'_CatItemC_';
  }

  instCSSRules={}
  reGenerateCSSRules = () => {let result=null,newRuleIdx=0,style=document.createElement('style');style.appendChild(document.createTextNode(''));document.head.appendChild(style);let stSh=style.sheet;for (let i in CatItemC.baseCSSRules) {if (!CatItemC.baseCSSRules.hasOwnProperty(i)) {continue;}let clSelExploded = i.split(' ');clSelExploded.forEach((currVal,idx,array)=>{clSelExploded[idx]=currVal.slice(0,1)+this.props.catItemData.modPrefix+currVal.slice(1);});let newClSel = clSelExploded.join(' ');newRuleIdx = stSh.insertRule( (newClSel+'\n'+CatItemC.baseCSSRules[i]), stSh.cssRules.length );result = stSh.cssRules[newRuleIdx];this.instCSSRules[i] = {'newSel':newClSel,'rule':result};}}

  /*Genereate and apply unique CSS rules for this component:*/
  /*className={this.props.catItemData.modPrefix+'CatItemClassOne'}*/
  /*className={this.props.catItemData.modPrefix+'CatItemClassTwo'}*/
  componentWillMount = function() {this.reGenerateCSSRules();}
  componentDidMount  = function() { }

  render() {
    return (
<div>
 <Divider horizontal>The Card. To be used as a CatItemC(Conn).</Divider>
  <Card centered={true} raised fluid={false}>
   <img style={{height:'auto'}} sizes="(max-width:450) 100vw, 290px" srcSet="images/p07id96-w1120.jpg 1120w, images/p07id96-w1280.jpg 1280w, images/p07id96-w1440.jpg 1440w, images/p07id96-w1600.jpg 1600w, images/p07id96-w160.jpg 160w, images/p07id96-w320.jpg 320w, images/p07id96-w480.jpg 480w, images/p07id96-w640.jpg 640w, images/p07id96-w800.jpg 800w, images/p07id96-w960.jpg 960w" alt="zz"/>
   <Card.Content>
    <Card.Header>TheCard.</Card.Header>
    <Card.Meta><span className='date'>It happened in 2014.</span></Card.Meta>
    <Card.Description>A single catalogue item. Usually belongs to (and is a direct child of) a catalogue group component. On a small screen should become 'fluid' to span all the width of the viewport.</Card.Description>
   </Card.Content>
   <Card.Content extra>
    <a>
     <Icon name='user' />
     33 friends
    </a>
   </Card.Content>
  </Card>
  <Card centered={true} raised fluid={false}>
    <Image src='https://react.semantic-ui.com/assets/images/avatar/large/matthew.png' />
    <Card.Content>
      <Card.Header>
        Matthew
      </Card.Header>
      <Card.Meta>
        <span className='date'>
          Joined in 2015
        </span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
 <Divider horizontal></Divider>
</div>
    );
  }
}

export default CatItemC
