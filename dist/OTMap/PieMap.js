define(["OTMap/OTMap","OTMap/Utils/DrawUtil"],function(e,a){function r(a,r){e.apply(this,arguments),this.type="Pie",this.setConfig({label:{xoffset:0,yoffset:-.03}})}return r.prototype=new e,r.prototype.draw=function(e){function r(){t.config.layer.baseTag&&t.config.layer.baseTag.length>0?a.drawRange(t,n):a.drawUnique(t,n)}function n(){a.drawPie(t),t.config.legend.show&&a.createLegend(t),t.config.label.show&&a.createLabel(t),t.drawLayer.redraw(),t.backupConfig(),e&&e()}var t=this;return t.clear(),a.checkParams(t),t.config.layer.simple?a.createSLayer(t,r):a.createMLayer(t,r),t},r});