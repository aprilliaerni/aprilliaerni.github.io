// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/NearMe/setting/SingleFilterSetting.html":'\x3cdiv\x3e\r\n\t\x3cdiv class\x3d"esriCTFilterLabel esriCTLabelMargin"\x3e ${jimuNls.common.layer}\x3c/div\x3e\r\n\t\x3cdiv class\x3d"esriCTFilterLabel" data-dojo-attach-point\x3d"layerTd"\x3e\x3c/div\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"tabsNode" class\x3d"esriCTTabsNode"\x3e\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"infoTabNode"\x3e\r\n\t\t\t\x3cdiv class\x3d"esriCTFilterLabel esriCTLabelMargin" style\x3d"margin-top: 20px"\x3e${jimuNls.common.label}\x3c/div\x3e\r\n\t\t\t\x3cdiv data-dojo-attach-point\x3d"nameTextBox" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-attach-event\x3d"change:_onNameTextBoxChanged"\r\n\t\t\t data-dojo-props\x3d\'required:true,trim:true\' style\x3d"width:100%;"\x3e\x3c/div\x3e\r\n\t\t\t\x3cdiv class\x3d"esriCTFilterLabel esriCTLabelMargin" style\x3d"margin-top: 20px"\x3e${jimuNls.common.icon}\x3c/div\x3e\r\n\t\t\t\x3cdiv data-dojo-attach-point\x3d"symbolPicker" data-dojo-type\x3d"jimu/dijit/SymbolPicker" data-dojo-props\x3d"cropImage:true,customZIndex:2000"\x3e\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"expressionsTabNode"\x3e\r\n\t\t\t\x3cdiv style\x3d"margin-top:10px;"\x3e\r\n\t\t\t\t\x3cdiv class\x3d"esriCTFilterLabel"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"filterDiv" class\x3d"filter-div"\x3e\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"optionsTabNode" style\x3d"margin-top: 20px"\x3e\r\n\t\t\t\x3cdiv class\x3d"esriCTFilterOptionsNode" data-dojo-attach-point\x3d"useMapFilterNode"\x3e\x3c/div\x3e\r\n\t\t\t\x3cdiv class\x3d"esriCTFilterOptionsNode" data-dojo-attach-point\x3d"autoApplyWhenWidgetOpenNode"\x3e\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/on dojo/query dojo/Evented dojo/_base/lang dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./SingleFilterSetting.html jimu/utils jimu/dijit/Filter jimu/dijit/Message jimu/dijit/CheckBox esri/symbols/PictureMarkerSymbol esri/symbols/jsonUtils jimu/dijit/TabContainer3 jimu/dijit/LayerChooserFromMapWithDropbox ./CustomFeaturelayerChooserFromMap jimu/dijit/SymbolPicker jimu/dijit/ImageChooser dijit/form/ValidationTextBox".split(" "),function(d,
f,g,c,h,k,l,m,n,p,q,r,e,t,u,v,w,x){return h([k,l,m,g],{baseClass:"jimu-widget-nearme-singlefilter-setting",templateString:n,jimuNls:null,_defaultTaskIcon:null,map:null,nls:null,target:null,layerInfosObj:null,folderUrl:"",appConfig:null,postMixInProperties:function(){this.inherited(arguments);this._defaultTaskIcon=this.folderUrl+"css/images/default_task_icon.png";this.jimuNls=window.jimuNls},postCreate:function(){this.inherited(arguments);this.cbxRemoveMapFilter=new e({"class":"esriCTFilterLabel",
label:this.nls.filterSetting.enableMapFilter||""});this.cbxRemoveMapFilter.placeAt(this.useMapFilterNode);this.cbxRemoveMapFilter.setValue(!1);this.cbxAutoApplyWhenWidgetOpen=new e({"class":"esriCTFilterLabel",label:this.nls.filterSetting.autoApplyWhenWidgetOpen||""});this.cbxAutoApplyWhenWidgetOpen.placeAt(this.autoApplyWhenWidgetOpenNode);this.cbxAutoApplyWhenWidgetOpen.setValue(!1);this._recreateLayerChooserSelect(!0);this.filter=new q({enableAskForValues:!0,noFilterTip:this.nls.noFilterTip,style:"width:100%;"});
this.filter.placeAt(this.filterDiv);this._setDefaultTaskIcon();this._initTabs()},_recreateLayerChooserSelect:function(a){this.layerChooserSelect&&this.layerChooserSelect.destroy();this.layerChooserSelect=null;var b=new x({showLayerFromFeatureSet:!1,showTable:!1,onlyShowVisible:!1,createMapResponse:this.map.webMapResponse,selectedSearchLayers:this.selectedSearchLayers});this.layerChooserSelect=new w({layerChooser:b});this.layerChooserSelect.placeAt(this.layerTd);a&&this._bindEventForLayerChooserSelect(this.layerChooserSelect)},
showLayerChooserPopup:function(){this.layerChooserSelect.showLayerChooser()},destroy:function(){this.target=null;this.emit("before-destroy");this.inherited(arguments)},setConfig:function(a){var b=c.clone(a);this._showLoading();this.reset();this._recreateLayerChooserSelect(!1);var d=c.hitch(this,function(){this.domNode&&(this._bindEventForLayerChooserSelect(this.layerChooserSelect),this._hideLoading())});this.layerInfosObj.getLayerInfoById(b.layerId).getLayerObject().then(c.hitch(this,function(a){this.domNode&&
this.layerChooserSelect.setSelectedLayer(a).then(c.hitch(this,function(c){this.domNode&&(this._hideLoading(),c&&(c=b.icon?b.icon:this._defaultTaskIcon,c=b.symbol?u.fromJson(b.symbol):new t({yoffset:16,type:"picturemarkersymbol",url:c,width:24,height:24,size:16,xoffset:0}),this.symbolPicker.showBySymbol(c),this.cbxRemoveMapFilter.setValue(!b.enableMapFilter),this.nameTextBox.set("value",b.name),c=this._getLayerDefinitionForFilterDijit(a),this.filter.buildByFilterObj(a.url,b.filter,c),this._bindEventForLayerChooserSelect(this.layerChooserSelect)))}),
c.hitch(this,function(a){console.error(a);d()}))}),c.hitch(this,function(a){console.error(a);d()}));this.cbxAutoApplyWhenWidgetOpen.setValue(b.autoApplyWhenWidgetOpen)},getConfig:function(){var a={layerId:null,url:null,name:null,filter:null,icon:null,enableMapFilter:!this.cbxRemoveMapFilter.getValue(),autoApplyWhenWidgetOpen:this.cbxAutoApplyWhenWidgetOpen.getValue()},b=this.layerChooserSelect.getSelectedItem();if(!b)return this._showMessage(this.nls.filterSetting.selectLayerTip),!1;b=b.layerInfo.layerObject;
a.layerId=b.id;a.url=b.url;a.name=this.nameTextBox.get("value");if(!a.name)return this._showMessage(this.nls.setTitleTip),!1;a.symbol=this.symbolPicker.getSymbol().toJson();a.filter=this.filter.toJson();return a.filter?this.target.singleConfig=a:(this._showMessage(window.jimuNls.filterBuilder.setFilterTip),!1)},_initTabs:function(){this.tab=new v({tabs:[{title:this.nls.filterSetting.infoTab,content:this.infoTabNode},{title:this.nls.filterSetting.expressionsTab,content:this.expressionsTabNode},{title:this.nls.filterSetting.optionsTab,
content:this.optionsTabNode}]});this.tab.placeAt(this.tabsNode);this.own(d(this.tab,"tabChanged",c.hitch(this,function(){})))},reset:function(){this._setDefaultTaskIcon();this.cbxRemoveMapFilter.setValue(!1);this.nameTextBox.set("value","");this.filter.reset()},_setDefaultTaskIcon:function(){this.symbolPicker.showByType("marker")},_onNameTextBoxChanged:function(){var a=f(".label",this.target)[0],b=this.nameTextBox.get("value");a.innerHTML=b;a.title=b},_bindEventForLayerChooserSelect:function(a){a.isBindEvent||
(this.own(d(a,"selection-change",c.hitch(this,this._onLayerChanged))),a.isBindEvent=!0)},_showMessage:function(a){new r({message:a})},_onLayerChanged:function(){this.reset();var a=this.layerChooserSelect.getSelectedItem();if(a){var b=a.layerInfo,a=b.layerObject;this.nameTextBox.set("value",b.title);b=this._getLayerDefinitionForFilterDijit(a);this.filter.buildByExpr(a.url,"1\x3d1",b)}},_getLayerDefinitionForFilterDijit:function(a){var b=null;"esri.layers.FeatureLayer"===a.declaredClass&&(b=p.getFeatureLayerDefinition(a));
b||(b={currentVersion:a.currentVersion,fields:c.clone(a.fields)});return b},_showLoading:function(){this.emit("loading")},_hideLoading:function(){this.emit("unloading")},updateLayerOptions:function(a){this.selectedSearchLayers=a;this._recreateLayerChooserSelect(!0)}})});