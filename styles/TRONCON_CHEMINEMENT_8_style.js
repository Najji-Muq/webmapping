var size = 0;
var placement = 'point';
function categories_TRONCON_CHEMINEMENT_8(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'CIRCULATION':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(239,159,29,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'ESCALIER':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(229,101,172,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'QUAI':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(221,237,75,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'RAMPE':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(34,230,106,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'TRAVERSEE':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(223,47,31,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_TRONCON_CHEMINEMENT_8 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Genre de Troncon");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_TRONCON_CHEMINEMENT_8(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
