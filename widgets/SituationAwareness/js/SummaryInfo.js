// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define("dojo/_base/declare dojo/Evented dojo/_base/array dojo/DeferredList dojo/Deferred dojo/_base/lang dojo/_base/Color dojo/dom dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/dom-style dojo/number dojo/on dojo/has dijit/form/Button jimu/dijit/Popup jimu/utils jimu/dijit/Message esri/config esri/geometry/geometryEngine esri/geometry/mathUtils esri/geometry/Point esri/geometry/webMercatorUtils esri/graphic esri/layers/FeatureLayer esri/symbols/SimpleMarkerSymbol esri/symbols/SimpleLineSymbol esri/symbols/Font esri/symbols/TextSymbol esri/tasks/query ./analysisUtils".split(" "),
function(C,D,v,y,u,n,F,G,p,t,H,I,J,w,K,L,M,z,A,N,O,P,Q,R,E,x,S,T,U,V,B,q){return C("SummaryInfo",[D],{summaryLayer:null,summaryFields:[],summaryIds:[],summaryFeatures:[],tabNum:null,symbolField:null,graphicsLayer:null,lyrRenderer:null,lyrSymbol:null,featureCount:0,mapServiceLayer:!1,loading:!1,queryOnLoad:!1,incidentCount:0,allFields:!1,constructor:function(a,d,f){this.tab=a;this.container=d;this.parent=f;this.config=f.config;this.graphicsLayer=null;this.baseLabel=""!==a.label?a.label:a.layerTitle?
a.layerTitle:a.layers},queryTabCount:function(a,d,f,e){var k=new u;this.incidentCount=a.length;var c=[this.tab.tabLayers[0]];this.mapServiceLayer&&1<this.tab.tabLayers.length&&(c=[this.tab.tabLayers[1]]);if(0<this.tab.tabLayers.length&&this.tab.tabLayers[0].url&&-1<this.tab.tabLayers[0].url.indexOf("MapServer")){this.mapServiceLayer=!0;var h;"undefined"!==typeof this.tab.tabLayers[0].infoTemplate?(this.summaryLayer=this.tab.tabLayers[0],this.summaryLayer.hasOwnProperty("loaded")&&this.summaryLayer.loaded?
(this.summaryFields=this._getFields(this.summaryLayer),this._performQuery(a,d,f,e,c).then(function(a){k.resolve(a)})):(h=new x(this.summaryLayer.url),h.infoTemplate=this.tab.tabLayers[0].infoTemplate,c=[h],this.tab.tabLayers=c,w(h,"load",n.hitch(this,function(){this.summaryLayer=h;this.summaryFields=this._getFields(this.summaryLayer);this._performQuery(a,d,f,e,c).then(function(a){k.resolve(a)})})))):this.loading||(h=new x(this.tab.tabLayers[0].url),this.loading=!0,w(h,"load",n.hitch(this,function(){this.summaryLayer=
h;this.summaryFields=this._getFields(this.summaryLayer);for(var g=this.tab.tabLayers[0].url.split("MapServer/")[1],b=this.parent.map.itemInfo.itemData.operationalLayers,l=0;l<b.length;l++){var m=b[l];if("undefined"!==typeof m.layerObject)if(m.layerObject.infoTemplates){if(m=m.layerObject.infoTemplates[g]){h.infoTemplate=m.infoTemplate;break}}else if(m.layerObject.infoTemplate){h.infoTemplate=m.layerObject.infoTemplate;break}}c=[h];this.tab.tabLayers=c;this.loading=!1;this._performQuery(a,d,f,e,c).then(function(a){k.resolve(a)})})))}this.mapServiceLayer||
this._performQuery(a,d,f,e,c).then(function(a){k.resolve(a)});return k},_performQuery:function(a,d,f,e,k){var c=new u,h=[],g,b;0<d.length?b=q.getGeoms(d):0<a.length&&(b=q.getGeoms(a));this.summaryGeoms=b;if(0<b.length)for(a=0;a<b.length;a++)h=b[a],d=q.createDefArray(k,h,this.parent.opLayers,this.tab),g=0===a?h=d:h=g.concat(d);(new y(h)).then(n.hitch(this,function(a){for(var b=0,g=0;g<a.length;g++){var d=a[g][1];isNaN(d)?d&&d.features?b+=d.features.length:d&&"undefined"!==typeof d.length&&(b+=d.length):
b+=d}this.updateTabCount(b,f,e);this.queryOnLoad&&n.hitch(this,this._queryFeatures(this.summaryGeoms));c.resolve(b)}));return c},updateTabCount:function(a,d,f){this.featureCount=a;q.updateTabCount(this.featureCount,d,f,this.baseLabel,this.incidentCount)},updateForIncident:function(a,d,f,e,k,c,h){this.incidentCount=a.length;this.allFields="undefined"!==typeof c&&"undefined"!==typeof h?c?!0:h:!1;var g="undefined"!==typeof k,b;this.tabNum=e;g?b=new u:(this.container.innerHTML="",p.add(this.container,
"loading"));this.summaryIds=[];this.summaryFeatures=[];if(0<this.tab.tabLayers.length){var l=this.summaryGeoms,m;"undefined"!==typeof this.tab.tabLayers[0].infoTemplate?(this.summaryLayer=this.tab.tabLayers[0],m=new x(this.summaryLayer.url),m.infoTemplate=this.tab.tabLayers[0].infoTemplate,this.tab.tabLayers[1]=m,this.summaryFields=this._getFields(this.tab.tabLayers[0]),g?this._queryFeatures(l,g).then(function(a){b.resolve(a)}):(this._initGraphicsLayer(f),n.hitch(this,this._queryFeatures(l)))):(m=
new x(this.tab.tabLayers[0].url),w(m,"load",n.hitch(this,function(){this.summaryLayer=m;if(-1<this.tab.tabLayers[0].url.indexOf("MapServer"))for(var a=this.tab.tabLayers[0].url.split("MapServer/")[1],d=this.parent.map.itemInfo.itemData.operationalLayers,e=0;e<d.length;e++){var c=d[e];if("undefined"!==typeof c.layerObject&&c.layerObject.infoTemplates&&(c=c.layerObject.infoTemplates[a])){m.infoTemplate=c.infoTemplate;break}}this.tab.tabLayers[1]=m;this.summaryFields=this._getFields(this.tab.tabLayers[1]);
g?this._queryFeatures(l,g).then(function(a){b.resolve(a)}):(this._initGraphicsLayer(f),n.hitch(this,this._queryFeatures(l)))})));if(g)return b}},_initGraphicsLayer:function(a){null!==a&&(this.graphicsLayer=a,this.graphicsLayer.clear(),this.summaryLayer&&this.summaryLayer.renderer&&(this.lyrRenderer=this.summaryLayer.renderer,this.graphicsLayer.renderer=this.lyrRenderer,"undefined"!==typeof this.summaryLayer.renderer.attributeField?this.symbolField=this.summaryLayer.renderer.attributeField:this.lyrSymbol=
this.lyrRenderer.symbol))},_queryFeatures:function(a,d){var f;d&&(f=new u);for(var e=[],k=-1===[null,void 0,""].indexOf(this.tab.tabLayers[0].id)?this.tab.tabLayers[0].id:this.tab.layers,k=q.getFilter(k,this.parent.opLayers),c=new B,h=0;h<a.length;h++)c.geometry=a[h],c.where=k,e.push(this.summaryLayer.queryIds(c));(new y(e)).then(n.hitch(this,function(a){for(var b,e,c=0;c<a.length;c++)a[c][0]&&(b=a[c][1],e=b=0===c?b:e.concat(b));b?(this.summaryIds=b,0<this.summaryIds.length?d?this._queryFeaturesByIds(d).then(function(a){f.resolve(a)}):
this._queryFeaturesByIds():d||this._processResults()):d||this._processResults()}),n.hitch(this,function(a){console.error(a);new A({message:a})}));if(d)return f},_queryFeaturesByIds:function(a){var d,f=[];a&&(d=new u);var e=this.summaryLayer.maxRecordCount||1E3,k=this.summaryIds.slice(0,e);this.summaryIds.splice(0,e);var c=new B;c.where=q.getFilter(this.summaryLayer.id,this.parent.opLayers);var h=!1;v.some(this.summaryFields,n.hitch(this,function(a){if("area"===a.type||"length"===a.type||this.graphicsLayer)return h=
!0}));a&&(h=!0);c.returnGeometry=h;c.outSpatialReference=this.parent.map.spatialReference;var g=[];v.forEach(this.summaryFields,function(a){g.push(a.field)});this.symbolField&&g.push(this.symbolField);c.outFields=!0===this.config.csvAllFields||"true"===this.config.csvAllFields?["*"]:g;c.objectIds=k;for(f.push(this.summaryLayer.queryFeatures(c));0<this.summaryIds.length;)k=this.summaryIds.slice(0,e),this.summaryIds.splice(0,e),c.objectIds=k,f.push(this.summaryLayer.queryFeatures(c));(new y(f)).then(n.hitch(this,
function(b){this.summaryFeatures=[];for(var c=0;c<b.length;c++)if(b[c][0]){var e=b[c][1];e.features&&(this.summaryFeatures=this.summaryFeatures.concat(e.features))}a?this._processResults(a).then(n.hitch(this,function(a){this.SA_SAT_download&&p.replace(this.SA_SAT_download,"download","processing");d.resolve(a)})):(this._processResults(),this.SA_SAT_download&&p.replace(this.SA_SAT_download,"download","processing"));this.SA_SAT_download&&p.replace(this.SA_SAT_download,"download","processing")}),n.hitch(this,
function(a){console.error(a);new A({message:a})}));if(a)return d},_prepResults:function(){for(var a=0;a<this.summaryFields.length;a++){var d=this.summaryFields[a],f=d.field,e=d.total;switch(d.type){case "count":e=this.summaryFeatures.length;break;case "area":e=q.getArea(this.summaryFeatures,this.summaryGeoms,this.config.distanceSettings,this.config.distanceUnits);break;case "length":e=q.getLength(this.summaryFeatures,this.summaryGeoms,this.config.distanceSettings,this.config.distanceUnits);break;
case "sum":e=q.getSum(this.summaryFeatures,f);break;case "avg":e=q.getSum(this.summaryFeatures,f)/this.summaryFeatures.length;break;case "min":e=q.getMin(this.summaryFeatures,f);break;case "max":e=q.getMax(this.summaryFeatures,f)}d.total=e}},_processResults:function(a){this._prepResults();var d,f=this.summaryFields,e=0,k;if(a)d=new u;else{this.container.innerHTML="";p.remove(this.container,"loading");if(0===this.summaryFeatures.length){this.container.innerHTML=this.parent.nls.noFeaturesFound;return}k=
t.create("div",{style:"width:"+220*(f.length+1)+"px;"},this.container);p.add(k,"SAT_tabPanelContent");var c=t.create("div",{},k);p.add(c,"SATcolExport");p.add(c,this.parent.lightTheme?"lightThemeBorder":"darkThemeBorder");c=t.create("div",{"data-dojo-attach-point":"SA_SAT_download",title:this.parent.nls.downloadCSV},c);p.add(c,[this.parent.isBlackTheme?"btnExportBlack":"btnExport","download"]);w(c,"click",n.hitch(this,this._exportToCSV,f))}for(var c=[],h=0;h<f.length;h++){var g=f[h],b=z.stripHTML(g.alias?
g.alias:"")+"\x3cbr/\x3e",e=g.total;isNaN(e)&&(e=0);g=z.localizeNumber(e);if(a)c.push({num:g,info:b,total:e});else{e=t.create("div",{"class":"SATcol"},k);p.add(e,this.parent.lightTheme?"lightThemeBorder":"darkThemeBorder");var l=t.create("div",{style:"max-height: 60px;"},e);t.create("div",{"class":" SATcolWrap",style:"max-height: 30px; overflow: hidden;",innerHTML:b},l);t.create("div",{"class":" colSummary",innerHTML:g},e)}}f=[];k=null!==this.graphicsLayer;!a&&k&&(this.graphicsLayer.clear(),this.tab.tabLayers[1].clear());
if(this.summaryFeatures)for(h=0;h<this.summaryFeatures.length;h++)b=this.summaryFeatures[h],this.lyrSymbol?b.symbol=this.lyrSymbol:k&&this.graphicsLayer.renderer?(g=this.graphicsLayer.renderer.getSymbol(b),b.symbol=g):this.summaryLayer.renderer&&this.summaryLayer.renderer.getSymbol&&(b.symbol=this.summaryLayer.renderer.getSymbol(b)),b=b.toJson?new E(b.toJson()):b,!a&&k?(this.graphicsLayer.add(b),this.tab.tabLayers[1].add(b)):f.push(b);!a&&k&&(this.graphicsLayer.setVisibility(!0),this.parent._toggleTabLayersNew(this.tabNum),
this.tab.restore&&this.emit("summary-complete",{bubbles:!0,cancelable:!0,tab:this.tabNum}));if(a)return d.resolve({graphics:f,analysisResults:c,context:this}),d},_exportToCSV:function(a,d,f,e){a=q.exportToCSV(this.summaryFeatures,d,f,e,{type:"summary",baseLabel:this.baseLabel,csvAllFields:this.parent.config.csvAllFields,layer:this.summaryLayer,opLayers:this.parent.opLayers,nlsValue:this.parent.nls.summary,nlsCount:this.parent.nls.count,summaryFields:this.summaryFields,calcFields:this.calcFields});
this.summaryLayer=a.summaryLayer;return a.details},_getFields:function(a){this.layerDefinition=z.getFeatureLayerDefinition(a);var d=q.getSkipFields(a),f=[];if("undefined"!==typeof this.tab.advStat){var e=this.tab.advStat.stats,k=["count","area","length","tabCount"],c=[];this.tab.advStat.fieldOrder&&v.forEach(this.tab.advStat.fieldOrder,n.hitch(this,function(a){var b;a:for(b in e)if(-1===k.indexOf(b)){var d=0;for(;d<e[b].length;d++){var g=e[b][d],h=g.expression;if(h===a){c.push(h);f.push({field:g.expression,
alias:g.label,type:b,total:0});break a}}}}));for(var h in e)0<e[h].length&&v.forEach(e[h],function(a){-1===c.indexOf(a.expression)&&f.push({field:a.expression,alias:a.label+"",type:h,total:0})})}else{var g;if(a.infoTemplate)g=a.infoTemplate.info.fieldInfos;else if(-1<this.tab.tabLayers[0].url.indexOf("MapServer")){var b=this.tab.tabLayers[0].url.split("MapServer/")[1],l=this.parent.map.itemInfo.itemData.operationalLayers;g=null;for(var m=0;m<l.length;m++){var p=l[m];if(p.layerObject.infoTemplates&&
(p=p.layerObject.infoTemplates[b])){g=p.infoTemplate.info.fieldInfos;break}}}else g=a.fields;g||(g=a.fields);for(b=0;b<g.length;b++)if(l=g[b],"undefined"!==typeof a.fields){var m=a.fields[b].type,r;l.name===a.objectIdField||"esriFieldTypeDouble"!==m&&"esriFieldTypeInteger"!==m&&"esriFieldTypeSmallInteger"!==m||("undefined"!==typeof l.visible?l.visible&&(r={field:l.fieldName,alias:l.label,type:"sum",total:0}):r={field:l.name,alias:l.alias,type:"sum",total:0},r&&-1===d.indexOf(r.field)&&f.push(r),r=
null)}}this.calcFields=n.clone(f);if(this.allFields)for(g=0;g<a.fields.length;g++){r=a.fields[g];b=!0;l=0;b:for(;l<f.length;l++)if(r.name===f[l].field){b=!1;break b}-1===d.indexOf(r.name)&&b&&f.push({field:r.name,alias:r.alias,type:r.type})}a=q.getSpecialFields(a);this.dateFields=a.dateFields;this.specialFields=a.specialFields;this.typeIdField=a.typeIdField;this.types=a.types;return f}})});