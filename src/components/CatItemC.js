import React, { Component } from 'react'
//import PropTypes            from 'prop-types'
//import { Button }           from 'semantic-ui-react'
//import { Container }        from 'semantic-ui-react'
import { Card }             from 'semantic-ui-react'
import { Icon }             from 'semantic-ui-react'
//import { Image }             from 'semantic-ui-react'
//import logoHead from './images/logoHead.svg'
import 'semantic-ui-css/semantic.min.css'
import './css/rotating-card.css'

class CatItemC extends Component {

//  static defaultProps = {
//    catItemDatas:{
//      modPrefix:        'CatItemC_PLACEHOLDER_CatItemC_',
//      similar_goods:    [''],
//      recommendedGoods: ['']
//    }
//  }
/*
  static propTypes    = {
    catItemDatas:           PropTypes.shape({
      modPrefix: PropTypes.shape({
        modPrefix:      PropTypes.string.isRequired,
        uniqueItemId:   PropTypes.string.isRequired,
        cardFlipped:    PropTypes.bool.isRequired,
        photo:          PropTypes.shape({
          srcSet: PropTypes.string.isRequired,
          sizes:  PropTypes.string.isRequired
        }).isRequired,
        salesName:      PropTypes.string.isRequired,
        variant:        PropTypes.string.isRequired,
        description:    PropTypes.string.isRequired,
        producer:       PropTypes.string.isRequired,
        isAvailable:    PropTypes.bool.isRequired,
        isFavourite:    PropTypes.bool.isRequired,
        price:          PropTypes.shape({RUR: PropTypes.number}).isRequired,
        activePromo:    PropTypes.shape({
          promoName:     PropTypes.string,
          prePromoPrice: PropTypes.shape({RUR: PropTypes.number}),
          promoEnds:     PropTypes.string
        }),
        userReviews:    PropTypes.arrayOf(PropTypes.shape({
          username:   PropTypes.string,
          rating:     PropTypes.number,
          reviewText: PropTypes.string
        })),
        similarGoods: PropTypes.arrayOf(PropTypes.string),
        recommendedGoods: PropTypes.arrayOf(PropTypes.string)
      }).isRequired
    }).isRequired,
    itemModPrefixFromAbove: PropTypes.string.isRequired,
    groupModPrefixFromAbove: PropTypes.string.isRequired,
    setModPrefix:           PropTypes.func.isRequired,
    flipCard:               PropTypes.func.isRequired
  }
*/
  static baseCSSRules = {
    '.CatItemClassOne':'{\nposition:absolute;\nfont-size:1em;\nline-height:1.2em;\ntop:1em;\nleft:1em;\nline-height:1.2em;\nheight:3em;\nmargin:0;\npadding:2px;\nborder:1px solid rgba(0,0,0,1);\nbackground-color: rgba(220,220,220,0.8);\nz-index:0;\ntext-align:left;\n}\n',
    '.CatItemClassTwo':'{\nfont-size:1em;\nline-height:1.2em;\n;border:2px solid red;\nposition:relative;\npadding:4px;\nmargin:2px;\nmargin-top:50px;\n}\n'
  }
  static genNewModPrefix() {
    return 'CatItemC_'+Date.now().toString(16).slice(4)+'_CatItemC_';
  }

  instCSSRules={}
  reGenerateCSSRules = () => {let result=null,newRuleIdx=0,style=document.createElement('style');style.appendChild(document.createTextNode(''));document.head.appendChild(style);let stSh=style.sheet;for (let i in CatItemC.baseCSSRules) {if (!CatItemC.baseCSSRules.hasOwnProperty(i)) {continue;}let clSelExploded = i.split(' ');clSelExploded.forEach((currVal,idx,array)=>{clSelExploded[idx]=currVal.slice(0,1)+this.props.catItemDatas[this.props.itemModPrefixFromAbove].modPrefix+currVal.slice(1);});let newClSel = clSelExploded.join(' ');newRuleIdx = stSh.insertRule( (newClSel+'\n'+CatItemC.baseCSSRules[i]), stSh.cssRules.length );result = stSh.cssRules[newRuleIdx];this.instCSSRules[i] = {'newSel':newClSel,'rule':result};}}

  /*Genereate and apply unique CSS rules for this component:*/
  /*className={this.props.catItemData.modPrefix+'CatItemClassOne'}*/
  /*className={this.props.catItemData.modPrefix+'CatItemClassTwo'}*/
  componentWillMount = function() {this.reGenerateCSSRules();}
  componentDidMount  = function() { }

  render() {
    return (
    <Card style={{'background':'none','border':'none','boxShadow':'none','transition':'0.5s'}} centered={true} raised={false} fluid={false} className={(this.props.catItemDatas[this.props.itemModPrefixFromAbove].cardFlipped)?'card-container hover':'card-container'} onTouchStart={()=>{this.props.flipCard(this.props.catItemDatas[this.props.itemModPrefixFromAbove].modPrefix, this.props.groupModPrefixFromAbove);}}>
     <Card centered={true} raised fluid={false} className="card" style={{'transition':'0.5s'}}>

     <div className="front">
      <img style={{height:'auto'}} sizes={this.props.catItemDatas[this.props.itemModPrefixFromAbove].photo.sizes} srcSet={this.props.catItemDatas[this.props.itemModPrefixFromAbove].photo.srcSet}  alt="zz"/>
      <Card.Content>
       <Card.Header>{this.props.catItemDatas[this.props.itemModPrefixFromAbove].salesName}</Card.Header>
       <Card.Meta>
        <span className='date'>Цена:{this.props.catItemDatas[this.props.itemModPrefixFromAbove].price.RUR}<br/></span>
        <span className='date'>Наличие на складе:{(this.props.catItemDatas[this.props.itemModPrefixFromAbove].isAvailable)?'В наличии.':'Нет в наличии.'}<br/></span>
       </Card.Meta>
       <Card.Description>{this.props.catItemDatas[this.props.itemModPrefixFromAbove].description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
       Some exta content, e.g. User Reviews.
      </Card.Content>
     </div> {/*<!-- end front panel -->*/}

     <div className="back">
      <Card.Content>
       <Card.Header>{this.props.catItemDatas[this.props.itemModPrefixFromAbove].salesName}</Card.Header>
       <Card.Meta>
        <span className='date'>Производитель:{this.props.catItemDatas[this.props.itemModPrefixFromAbove].producer}<br/></span>
        <span className='date'>Форма выпуска:{this.props.catItemDatas[this.props.itemModPrefixFromAbove].variant}</span>
       </Card.Meta>
       <Card.Description>Some extra information on the card. Some popular actions should be triggerable from both sides of the card. E.g. "Buy".</Card.Description>
      </Card.Content>
      <Card.Content extra>
       <ruby><span><Icon name='alarm' />I wonder, if there is an 'alarm' icon...</span><rt><strong>EXTRA-CONTENT</strong></rt></ruby>
      </Card.Content>
     </div> {/*<!-- end back panel -->*/}

    </Card>
   </Card>
    );
  }
}

export default CatItemC
