import { classie } from './MLMenu.classie'

let onEndAnimation=function(el,callback){let onEndCallbackFn=function(ev){if(ev.target!=this){return;}this.removeEventListener('animationend',onEndCallbackFn);if(callback&&typeof callback==='function'){callback.call();}};el.addEventListener('animationend',onEndCallbackFn);},extend=function(a,b){for(let key in b){if(b.hasOwnProperty(key)){a[key]=b[key];}}return a;}

export const MLMenu = function(el,options){this.el=el;this.options=extend({},this.options);extend(this.options,options);this.menus=[].slice.call(this.el.querySelectorAll('.menu__level'));this.current=0;this._init();}

MLMenu.prototype.options        ={breadcrumbsCtrl:true,initialBreadcrumb:'all',backCtrl:true,itemsDelayInterval:60,direction:'r2l',onItemClick:function(ev,itemName){return false;}}
MLMenu.prototype._init          =function(){this.menusArr=[];let self=this;this.menus.forEach(function(menuEl,pos){let menu={menuEl:menuEl,menuItems:[].slice.call(menuEl.querySelectorAll('.menu__item'))};self.menusArr.push(menu);if(pos===self.current){classie.add(menuEl,'menu__level--current');}});if(this.options.backCtrl){this.backCtrl=document.createElement('button');this.backCtrl.className='menu__back menu__back--hidden';this.backCtrl.setAttribute('aria-label','Go back');this.backCtrl.innerHTML='';this.el.insertBefore(this.backCtrl,this.el.firstChild);}if(self.options.breadcrumbsCtrl){this.breadcrumbsCtrl=document.createElement('nav');this.breadcrumbsCtrl.className='menu__breadcrumbs';this.el.insertBefore(this.breadcrumbsCtrl,this.el.firstChild);this._addBreadcrumb(0);}this._initEvents();}
MLMenu.prototype._initEvents    =function(){
  let self=this;
  for(let i=0,len=this.menusArr.length;i<len;++i){
    this.menusArr[i].menuItems.forEach(function(item,pos){
      item.addEventListener('click',function(ev){
        let submenu=ev.target.getAttribute('data-submenu'),itemName=ev.target.innerHTML,subMenuEl=self.el.querySelector('ul[data-menu="'+submenu+'"]');
        if(submenu&&subMenuEl){
          ev.preventDefault();
          self._openSubMenu(subMenuEl,pos,itemName);
        }
        else{
          let currentlink=self.el.querySelector('.menu__link--current');
          if(currentlink){
            classie.remove(self.el.querySelector('.menu__link--current'),'menu__link--current');
          }
          classie.add(ev.target,'menu__link--current');
          self.options.onItemClick(ev,itemName);
        }
      });
    });
  }
  if(this.options.backCtrl){
    this.backCtrl.addEventListener('click',function(){self._back();});
  }
}
MLMenu.prototype._openSubMenu   =function(subMenuEl,clickPosition,subMenuName){if(this.isAnimating){return false;}this.isAnimating=true;this.menusArr[this.menus.indexOf(subMenuEl)].backIdx=this.current;this.menusArr[this.menus.indexOf(subMenuEl)].name=subMenuName;this._menuOut(clickPosition);this._menuIn(subMenuEl,clickPosition);}
MLMenu.prototype._back          =function(){if(this.isAnimating){return false;}this.isAnimating=true;this._menuOut();let backMenu=this.menusArr[this.menusArr[this.current].backIdx].menuEl;this._menuIn(backMenu);if(this.options.breadcrumbsCtrl){this.breadcrumbsCtrl.removeChild(this.breadcrumbsCtrl.lastElementChild);}}
MLMenu.prototype._menuOut       =function(clickPosition){let self=this,currentMenu=this.menusArr[this.current].menuEl,isBackNavigation=typeof clickPosition=='undefined'?true:false;this.menusArr[this.current].menuItems.forEach(function(item,pos){item.style.animationDelay=isBackNavigation?parseInt(pos*self.options.itemsDelayInterval)+'ms':parseInt(Math.abs(clickPosition-pos)*self.options.itemsDelayInterval)+'ms';});if(this.options.direction==='r2l'){classie.add(currentMenu,!isBackNavigation?'animate-outToLeft':'animate-outToRight');}else{classie.add(currentMenu,isBackNavigation?'animate-outToLeft':'animate-outToRight');}}
MLMenu.prototype._menuIn        =function(nextMenuEl,clickPosition){let self=this,currentMenu=this.menusArr[this.current].menuEl,isBackNavigation=typeof clickPosition=='undefined'?true:false,nextMenuIdx=this.menus.indexOf(nextMenuEl),nextMenuItems=this.menusArr[nextMenuIdx].menuItems,nextMenuItemsTotal=nextMenuItems.length;nextMenuItems.forEach(function(item,pos){item.style.animationDelay=isBackNavigation?parseInt(pos*self.options.itemsDelayInterval)+'ms':parseInt(Math.abs(clickPosition-pos)*self.options.itemsDelayInterval)+'ms';let farthestIdx=clickPosition<=nextMenuItemsTotal/2||isBackNavigation?nextMenuItemsTotal-1:0;if(pos===farthestIdx){onEndAnimation(item,function(){if(self.options.direction==='r2l'){classie.remove(currentMenu,!isBackNavigation?'animate-outToLeft':'animate-outToRight');classie.remove(nextMenuEl,!isBackNavigation?'animate-inFromRight':'animate-inFromLeft');}else{classie.remove(currentMenu,isBackNavigation?'animate-outToLeft':'animate-outToRight');classie.remove(nextMenuEl,isBackNavigation?'animate-inFromRight':'animate-inFromLeft');}classie.remove(currentMenu,'menu__level--current');classie.add(nextMenuEl,'menu__level--current');self.current=nextMenuIdx;if(!isBackNavigation){if(self.options.backCtrl){classie.remove(self.backCtrl,'menu__back--hidden');}self._addBreadcrumb(nextMenuIdx);}else if(self.current===0&&self.options.backCtrl){classie.add(self.backCtrl,'menu__back--hidden');}self.isAnimating=false;});}});if(this.options.direction==='r2l'){classie.add(nextMenuEl,!isBackNavigation?'animate-inFromRight':'animate-inFromLeft');}else{classie.add(nextMenuEl,isBackNavigation?'animate-inFromRight':'animate-inFromLeft');}}
MLMenu.prototype._addBreadcrumb =function(idx){if(!this.options.breadcrumbsCtrl){return false;}let bc=document.createElement('a');bc.innerHTML=idx?this.menusArr[idx].name:this.options.initialBreadcrumb;this.breadcrumbsCtrl.appendChild(bc);let self=this;bc.addEventListener('click',function(ev){ev.preventDefault();if(!bc.nextSibling||self.isAnimating){return false;}self.isAnimating=true;self._menuOut();let nextMenu=self.menusArr[idx].menuEl;self._menuIn(nextMenu);let siblingNode;while(siblingNode=bc.nextSibling){self.breadcrumbsCtrl.removeChild(siblingNode);}});}
