// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/Deferred ./LayerInfo dojox/gfx dojo/dom-construct dojo/dom-attr dojo/dom-class dojo/aspect jimu/portalUrlUtils jimu/portalUtils jimu/utils esri/symbols/jsonUtils esri/layers/LabelLayer esri/layers/LabelClass esri/dijit/PopupTemplate esri/dijit/Legend esri/graphic esri/geometry/Point esri/tasks/query esri/tasks/QueryTask".split(" "),function(t,f,d,h,u,l,g,v,w,x,m,y,k,z,n,A,B,p,C,D,E,F){return t(u,{_legendsNode:null,controlPopupInfo:null,
constructor:function(){this._initControlPopup();this._updateLayerObjectName();try{this._initToShowLabels()}catch(a){console.warn(a.message)}},_updateLayerObjectName:function(){this.layerObject&&!this.layerObject.empty&&this.layerObject.name&&!d.getObject("_wabProperties.originalLayerName",!1,this.layerObject)&&(d.setObject("_wabProperties.originalLayerName",this.layerObject.name,this.layerObject),this.layerObject.name=this.title)},_initToShowLabels:function(){var a=d.getObject("_wabProperties.itemLayerInfo",
!1,this.layerObject);a&&!this.layerObject.empty&&y.getPortal(a.portalUrl).getItemData(a.itemId).then(d.hitch(this,function(a){var b;a&&a.layers&&(f.some(a.layers,function(a){return a.id===this.layerObject.layerId?(b=a,!0):!1},this),b&&b.showLabels&&((a=d.getObject("layerDefinition.drawingInfo.labelingInfo",!1,b))&&!this.layerObject.labelingInfo&&this.layerObject.setLabelingInfo&&(a=f.map(a,function(a){return new A(a)},this),this.layerObject.setLabelingInfo(a)),this.showLabels()))}),d.hitch(this,function(a){a&&
a.message&&console.log(a.message)}))},_initOldFilter:function(){this._oldFilter=this.layerObject&&!this.layerObject.empty&&this.layerObject.getDefinitionExpression?this.layerObject.getDefinitionExpression():null},_getLayerOptionsForCreateLayerObject:function(){var a={};a.id=this.id;var b=[],c=this.getInfoTemplate();c&&c.info&&c.info.fieldInfos?f.forEach(c.info.fieldInfos,function(a){a.visible&&b.push(a.fieldName)},this):b=["*"];a.outFields=b;return a},_getExtent:function(){var a=new h,b;b=this.layerObject.graphics&&
0<this.layerObject.graphics.length?k.graphicsExtent(this.layerObject.graphics):this.layerObject.fullExtent||this.layerObject.initialExtent;this.layerObject.url?"esri.layers.FeatureLayer"===this.layerObject.declaredClass?this.getServiceDefinition().then(d.hitch(this,function(c){var q=new F(this.layerObject.url),e=new E,r=this.getFilter();e.where=r?r:"1\x3d1";e.outSpatialReference=this.map.spatialReference;e.returnGeometry=!0;c&&c.advancedQueryCapabilities&&c.advancedQueryCapabilities.supportsReturningQueryExtent?
q.executeForExtent(e,d.hitch(this,function(b){var c=b.extent;1===b.count&&"esriGeometryPoint"===this.layerObject.geometryType&&(b=new D(b.extent.xmin,b.extent.ymin,b.extent.spatialReference),c=k.graphicsExtent([new C(b)]));a.resolve(c)}),d.hitch(this,function(){a.resolve(b);console.log("executeForExtent failed.")})):q.execute(e).then(d.hitch(this,function(b){b=k.graphicsExtent(b.features);a.resolve(b)}),d.hitch(this,function(){a.resolve(b);console.log("query execute failed.")}))})):a.resolve(b):a.resolve(b);
return a},_resetLayerObjectVisiblity:function(a){a=a?a[this.id]:null;!this.originOperLayer.collection&&a&&(this.layerObject.setVisibility(a.visible),this._visible=this.layerObject.visible)},_initVisible:function(){var a=!1;if(this.originOperLayer.collection&&this._notFirstInitVisilbeFlag){var a=this.originOperLayer.collection.layerInfo,b=this.layerObject.visible;if(a._oldIsShowInMap!==a.isShowInMap())return;this._visible=b?!0:!1;a._onVisibilityChanged()}else this._visible=a=this.originOperLayer.layerObject.visible;
this._notFirstInitVisilbeFlag=!0},_setTopLayerVisible:function(a){this.originOperLayer.collection?this.originOperLayer.collection.layerInfo._visible?a?(this.layerObject.show(),this._visible=!0):(this.layerObject.hide(),this._visible=!1):a?(this.layerObject.hide(),this._visible=!0):(this.layerObject.hide(),this._visible=!1):(a?this.layerObject.show():this.layerObject.hide(),this._visible=a)},setLayerVisiblefromTopLayer:function(){this.originOperLayer.collection.layerInfo._visible?this._visible&&this.layerObject.show():
this.layerObject.hide()},_prepareCheckedInfoForShowOrHide:function(a){for(var b={},c=this;c.parentLayerInfo;)b[c.id]=a,c=c.parentLayerInfo;return b},show:function(){if(this.isRootLayer())this._setTopLayerVisible(!0);else{var a=this.getRootLayerInfo();if(a._setSubLayerVisibleByCheckedInfo){var b=this._prepareCheckedInfoForShowOrHide(!0);a._setSubLayerVisibleByCheckedInfo(b);a.show()}}},_initControlPopup:function(){this.controlPopupInfo={enablePopup:this.layerObject.infoTemplate?!0:!1,infoTemplate:this.layerObject.infoTemplate};
this.layerObject._infoTemplate=this.layerObject.infoTemplate;var a=x.after(this.layerObject,"setInfoTemplate",d.hitch(this,function(){this.layerObject._infoTemplate=this.layerObject.infoTemplate;this.controlPopupInfo.infoTemplate=this.layerObject.infoTemplate;this.controlPopupInfo.enablePopup||(this.layerObject.infoTemplate=null)}));this._eventHandles.push(a)},_getServiceDefinition:function(){var a;(a=this.getUrl())&&this.isRootLayer()&&"esri.layers.FeatureLayer"===this.layerObject.declaredClass?
a=this._serviceDefinitionBuffer.getRequest(this.subId).request(a):(a=new h,a.resolve(null));return a},createLegendsNode:function(){var a=g.create("div",{"class":"legends-div jimu-legends-div-flag jimu-leading-margin1",legendsDivId:this.id},document.body);g.create("img",{"class":"legends-loading-img",src:require.toUrl("jimu")+"/images/loading.gif"},a);return a},drawLegends:function(a){this._initLegendsNodeByLegendDijit(a)},_initLegendsNodeByLegendDijit:function(a){if(this.layerObject&&!this.layerObject.empty&&
(!this.originOperLayer.subLayer||0===this.originOperLayer.subLayers.length)&&this.layerObject.loaded){g.empty(a);w.remove(a,"jimu-legends-div-flag");var b=new p({map:this.map,layerInfos:[{layer:this.layerObject}],arrangement:p.ALIGN_LEFT,respectCurrentMapScale:!1,respectVisibility:!1},g.create("div",{},a));b.startup();a._legendDijit=b}},_initLegendsNode:function(a){var b=[],c=this.layerObject;!this.layerObject||this.layerObject.empty||this.originOperLayer.subLayer&&0!==this.originOperLayer.subLayers.length||
(g.empty(a),c.renderer&&(c.renderer.infos?b=d.clone(c.renderer.infos):b.push({label:c.renderer.label,symbol:c.renderer.symbol}),c.renderer&&c.renderer.defaultSymbol&&0<b.length&&b.push({label:c.renderer.defaultLabel||"others",symbol:c.renderer.defaultSymbol}),f.forEach(b,function(b){b.legendDiv=g.create("div",{"class":"legend-div"},a);b.symbolDiv=g.create("div",{"class":"legend-symbol jimu-float-leading"},b.legendDiv);b.labelDiv=g.create("div",{"class":"legend-label jimu-float-leading",innerHTML:b.label||
" "},b.legendDiv);if("textsymbol"===b.symbol.type)v.set(b.symbolDiv,"innerHTML",b.symbol.text);else{var c=l.createSurface(b.symbolDiv,50,50);b=z.getShapeDescriptors(b.symbol);c.createShape(b.defaultShape).setFill(b.fill).setStroke(b.stroke).setTransform(l.matrix.translate(25,25))}},this)))},obtainNewSubLayers:function(){var a=[];f.forEach(this.originOperLayer.subLayers,function(b){b.parentLayerInfo=this;b=this._layerInfoFactory.create(b);a.push(b);b.init()},this);return a},_isAllSubLayerVisibleOnPath:function(){for(var a=
!0,b=this;!b.isRootLayer();)a=a&&b.isVisible(),b=b.parentLayerInfo;return a},_getCustomPopupInfo:function(a,b){var c=null;a&&a.fields&&(c={title:a.name,fieldInfos:[],description:null,showAttachments:!0,mediaInfos:[]},f.forEach(a.fields,function(a){var e=!1;b?f.some(b,d.hitch(this,function(b){return b&&a.name.toLowerCase()===b.toLowerCase()}))&&(e=!0):e=!0;e&&(e=k.getDefaultPortalFieldInfo(a),e.visible=!0,e.isEditable=a.editable,c.fieldInfos.push(e))},this));return c},_getDefaultPopupInfo:function(a){if(a=
this._getCustomPopupInfo(a))a.fieldInfos=f.filter(a.fieldInfos,d.hitch(this,function(a){a=a.fieldName.toLowerCase();return 0>a.indexOf("object")&&0>a.indexOf("globalid")&&0>a.indexOf("shape")&&0>a.indexOf("perimeter")?!0:!1}));return a},_getDefaultPopupTemplate:function(a){var b=null;(a=this.getPopupInfo()||this._getDefaultPopupInfo(a))&&(b=new B(a));return b},enablePopup:function(){return this.loadInfoTemplate().then(d.hitch(this,function(){return this.controlPopupInfo.infoTemplate?(this.controlPopupInfo.enablePopup=
!0,this.layerObject.infoTemplate=this.controlPopupInfo.infoTemplate,!0):!1}))},disablePopup:function(){this.controlPopupInfo.enablePopup=!1;this.layerObject.infoTemplate=null},isPopupEnabled:function(){return this.controlPopupInfo&&this.controlPopupInfo.enablePopup?!0:!1},loadInfoTemplate:function(){var a=new h;this.controlPopupInfo.infoTemplate?a.resolve(this.controlPopupInfo.infoTemplate):this.getLayerObject().then(d.hitch(this,function(){this.controlPopupInfo.infoTemplate=this._getDefaultPopupTemplate(this.layerObject);
a.resolve(this.controlPopupInfo.infoTemplate)}),d.hitch(this,function(){a.resolve(null)}));return a},getInfoTemplate:function(){return this.controlPopupInfo.infoTemplate},_getRelatedUrls:function(a,b){var c=[];if(!a||!a.url||!a.relationships)return c;var d=a.url.lastIndexOf("/"),e=a.url.slice(0,d);f.forEach(a.relationships,function(a){b&&a.role&&"esriRelCardinalityManyToMany"!==a.cardinality&&b!==a.role||c.push(e+"/"+a.relatedTableId.toString())},this);return c},getRelatedTableInfoArray:function(a){var b=
[],c=new h;this.getLayerObject().then(d.hitch(this,function(g){var e=this._getRelatedUrls(g,a);0!==e.length&&this._getLayerInfosObj().traversalAll(d.hitch(this,function(a){var c=-1;if(0===e.length)return!0;f.forEach(e,function(e,f){d.getObject("layerObject.url",!1,a)&&m.removeProtocol(e.toString().toLowerCase()).replace(/\/+/g,"/")===m.removeProtocol(a.layerObject.url.toString().toLowerCase()).replace(/\/+/g,"/")&&(b.push(a),c=f)},this);0<=c&&e.splice(c,1);return!1}));c.resolve(b)}),d.hitch(this,
function(){c.resolve(b)}));return c},getFilter:function(){return this.layerObject&&!this.layerObject.empty&&this.layerObject.getDefinitionExpression?this.layerObject.getDefinitionExpression():null},setFilter:function(a){this.layerObject&&!this.layerObject.empty&&this.layerObject.setDefinitionExpression&&this.layerObject.setDefinitionExpression(a)},_isAlreadyInLabelLayerOfMap:function(a){var b=!1;a&&(b=f.some(a.getFeatureLayers(),function(a){return this.id===a.id},this));return b},_addToLabelLayerOfMap:function(){var a=
this.getLabelLayerOfMap();a&&!this._isAlreadyInLabelLayerOfMap(a)&&(a.addFeatureLayer(this.layerObject),this.map.removeLayer(a),this.map.addLayer(a))},_removeFromLabelLayerOfMap:function(){this.getLabelLayerOfMap().removeFeatureLayer(this.id)},_isSupportLabelControl:function(){return this.isRootLayer()&&!this.layerObject.empty&&"esri.layers.FeatureLayer"===this.layerObject.declaredClass&&this.layerObject.labelingInfo&&0<this.layerObject.labelingInfo.length?!0:!1},getLabelLayerOfMap:function(){var a;
this.map._labels?a=this.map._labels:(a=this.map.getLayer("labels"),a||(a=new n({id:"labels"}),this.map.addLayer(a)));return a},obtainLabelControl:function(){var a=this.id+"_labelLayer",b=this.map.getLayer(a);if(!b&&this._isSupportLabelControl()){var c=this.getLabelLayerOfMap();c&&this._isAlreadyInLabelLayerOfMap(c)&&(b=new n({id:a}),b.addFeatureLayer(this.layerObject),this.map.addLayer(b),this._removeFromLabelLayerOfMap())}return b?b:null},restoreLabelControl:function(){this._isSupportLabelControl()&&
(this.destroyRealtedLabelLayer(),this._addToLabelLayerOfMap())},destroyRealtedLabelLayer:function(){var a=this.map.getLayer(this.id+"_labelLayer");a&&this.map.removeLayer(a)},destroyLabelLayer:function(){this.map.getLayer(this.id)||(this._removeFromLabelLayerOfMap(),this.destroyRealtedLabelLayer())},canShowLabel:function(){return this._isSupportLabelControl()},isShowLabels:function(){var a=this.map.getLayer(this.id+"_labelLayer"),b=this.getLabelLayerOfMap();return this._isSupportLabelControl()&&(a||
b&&this._isAlreadyInLabelLayerOfMap(b))?this.layerObject.showLabels:!1},showLabels:function(){this._isSupportLabelControl()&&this.layerObject.setShowLabels&&(this.map.getLayer(this.id+"_labelLayer")||this._addToLabelLayerOfMap(),this.layerObject.setShowLabels(!0))},hideLabels:function(){this._isSupportLabelControl()&&this.layerObject.setShowLabels&&this.layerObject.setShowLabels(!1)}})});