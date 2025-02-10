var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_MetroManilaCityBoundaries_1 = new ol.format.GeoJSON();
var features_MetroManilaCityBoundaries_1 = format_MetroManilaCityBoundaries_1.readFeatures(json_MetroManilaCityBoundaries_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MetroManilaCityBoundaries_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MetroManilaCityBoundaries_1.addFeatures(features_MetroManilaCityBoundaries_1);
var lyr_MetroManilaCityBoundaries_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MetroManilaCityBoundaries_1, 
                style: style_MetroManilaCityBoundaries_1,
                popuplayertitle: 'Metro Manila City Boundaries',
                interactive: true,
                title: '<img src="styles/legend/MetroManilaCityBoundaries_1.png" /> Metro Manila City Boundaries'
            });
var format_MAKATICITY272025_2 = new ol.format.GeoJSON();
var features_MAKATICITY272025_2 = format_MAKATICITY272025_2.readFeatures(json_MAKATICITY272025_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MAKATICITY272025_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MAKATICITY272025_2.addFeatures(features_MAKATICITY272025_2);
var lyr_MAKATICITY272025_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MAKATICITY272025_2, 
                style: style_MAKATICITY272025_2,
                popuplayertitle: 'MAKATI CITY 2--7-2025',
                interactive: true,
                title: '<img src="styles/legend/MAKATICITY272025_2.png" /> MAKATI CITY 2--7-2025'
            });
var format_MAKATICITYStoreStatus_3 = new ol.format.GeoJSON();
var features_MAKATICITYStoreStatus_3 = format_MAKATICITYStoreStatus_3.readFeatures(json_MAKATICITYStoreStatus_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MAKATICITYStoreStatus_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MAKATICITYStoreStatus_3.addFeatures(features_MAKATICITYStoreStatus_3);
var lyr_MAKATICITYStoreStatus_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MAKATICITYStoreStatus_3, 
                style: style_MAKATICITYStoreStatus_3,
                popuplayertitle: 'MAKATI CITY Store Status',
                interactive: true,
    title: 'MAKATI CITY Store Status<br />\
    <img src="styles/legend/MAKATICITYStoreStatus_3_0.png" /> Deleted<br />\
    <img src="styles/legend/MAKATICITYStoreStatus_3_1.png" /> New Store<br />\
    <img src="styles/legend/MAKATICITYStoreStatus_3_2.png" /> Retained<br />\
    <img src="styles/legend/MAKATICITYStoreStatus_3_3.png" /> Ongoing<br />' });
var format_MALABONCITY272025_4 = new ol.format.GeoJSON();
var features_MALABONCITY272025_4 = format_MALABONCITY272025_4.readFeatures(json_MALABONCITY272025_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MALABONCITY272025_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MALABONCITY272025_4.addFeatures(features_MALABONCITY272025_4);
var lyr_MALABONCITY272025_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MALABONCITY272025_4, 
                style: style_MALABONCITY272025_4,
                popuplayertitle: 'MALABON CITY 2--7-2025',
                interactive: true,
                title: '<img src="styles/legend/MALABONCITY272025_4.png" /> MALABON CITY 2--7-2025'
            });
var format_MALABONCITYStoreStatus_5 = new ol.format.GeoJSON();
var features_MALABONCITYStoreStatus_5 = format_MALABONCITYStoreStatus_5.readFeatures(json_MALABONCITYStoreStatus_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MALABONCITYStoreStatus_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MALABONCITYStoreStatus_5.addFeatures(features_MALABONCITYStoreStatus_5);
var lyr_MALABONCITYStoreStatus_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MALABONCITYStoreStatus_5, 
                style: style_MALABONCITYStoreStatus_5,
                popuplayertitle: 'MALABON CITY Store Status',
                interactive: true,
    title: 'MALABON CITY Store Status<br />\
    <img src="styles/legend/MALABONCITYStoreStatus_5_0.png" /> Deleted<br />\
    <img src="styles/legend/MALABONCITYStoreStatus_5_1.png" /> New Store<br />\
    <img src="styles/legend/MALABONCITYStoreStatus_5_2.png" /> Retained<br />\
    <img src="styles/legend/MALABONCITYStoreStatus_5_3.png" /> Ongoing<br />' });
var format_MANILACITY272025_6 = new ol.format.GeoJSON();
var features_MANILACITY272025_6 = format_MANILACITY272025_6.readFeatures(json_MANILACITY272025_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MANILACITY272025_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MANILACITY272025_6.addFeatures(features_MANILACITY272025_6);
var lyr_MANILACITY272025_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MANILACITY272025_6, 
                style: style_MANILACITY272025_6,
                popuplayertitle: 'MANILA CITY 2--7-2025',
                interactive: true,
                title: '<img src="styles/legend/MANILACITY272025_6.png" /> MANILA CITY 2--7-2025'
            });
var format_MANILACITYStoreStatus_7 = new ol.format.GeoJSON();
var features_MANILACITYStoreStatus_7 = format_MANILACITYStoreStatus_7.readFeatures(json_MANILACITYStoreStatus_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MANILACITYStoreStatus_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MANILACITYStoreStatus_7.addFeatures(features_MANILACITYStoreStatus_7);
var lyr_MANILACITYStoreStatus_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MANILACITYStoreStatus_7, 
                style: style_MANILACITYStoreStatus_7,
                popuplayertitle: 'MANILA CITY Store Status',
                interactive: true,
    title: 'MANILA CITY Store Status<br />\
    <img src="styles/legend/MANILACITYStoreStatus_7_0.png" /> Deleted<br />\
    <img src="styles/legend/MANILACITYStoreStatus_7_1.png" /> New Store<br />\
    <img src="styles/legend/MANILACITYStoreStatus_7_2.png" /> Retained<br />\
    <img src="styles/legend/MANILACITYStoreStatus_7_3.png" /> Ongoing<br />' });
var format_NAVOTASCITY272025_8 = new ol.format.GeoJSON();
var features_NAVOTASCITY272025_8 = format_NAVOTASCITY272025_8.readFeatures(json_NAVOTASCITY272025_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NAVOTASCITY272025_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NAVOTASCITY272025_8.addFeatures(features_NAVOTASCITY272025_8);
var lyr_NAVOTASCITY272025_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NAVOTASCITY272025_8, 
                style: style_NAVOTASCITY272025_8,
                popuplayertitle: 'NAVOTAS CITY 2--7-2025',
                interactive: true,
                title: '<img src="styles/legend/NAVOTASCITY272025_8.png" /> NAVOTAS CITY 2--7-2025'
            });
var format_NAVOTASCITYStoreStatus_9 = new ol.format.GeoJSON();
var features_NAVOTASCITYStoreStatus_9 = format_NAVOTASCITYStoreStatus_9.readFeatures(json_NAVOTASCITYStoreStatus_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NAVOTASCITYStoreStatus_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NAVOTASCITYStoreStatus_9.addFeatures(features_NAVOTASCITYStoreStatus_9);
var lyr_NAVOTASCITYStoreStatus_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NAVOTASCITYStoreStatus_9, 
                style: style_NAVOTASCITYStoreStatus_9,
                popuplayertitle: 'NAVOTAS CITY Store Status',
                interactive: true,
    title: 'NAVOTAS CITY Store Status<br />\
    <img src="styles/legend/NAVOTASCITYStoreStatus_9_0.png" /> Deleted<br />\
    <img src="styles/legend/NAVOTASCITYStoreStatus_9_1.png" /> New Store<br />\
    <img src="styles/legend/NAVOTASCITYStoreStatus_9_2.png" /> Retained<br />\
    <img src="styles/legend/NAVOTASCITYStoreStatus_9_3.png" /> Ongoing<br />' });
var format_PASAYCITY272025_10 = new ol.format.GeoJSON();
var features_PASAYCITY272025_10 = format_PASAYCITY272025_10.readFeatures(json_PASAYCITY272025_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PASAYCITY272025_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PASAYCITY272025_10.addFeatures(features_PASAYCITY272025_10);
var lyr_PASAYCITY272025_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PASAYCITY272025_10, 
                style: style_PASAYCITY272025_10,
                popuplayertitle: 'PASAY CITY 2--7-2025',
                interactive: true,
                title: '<img src="styles/legend/PASAYCITY272025_10.png" /> PASAY CITY 2--7-2025'
            });
var format_PASAYCITYStoreStatus_11 = new ol.format.GeoJSON();
var features_PASAYCITYStoreStatus_11 = format_PASAYCITYStoreStatus_11.readFeatures(json_PASAYCITYStoreStatus_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PASAYCITYStoreStatus_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PASAYCITYStoreStatus_11.addFeatures(features_PASAYCITYStoreStatus_11);
var lyr_PASAYCITYStoreStatus_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PASAYCITYStoreStatus_11, 
                style: style_PASAYCITYStoreStatus_11,
                popuplayertitle: 'PASAY CITY Store Status',
                interactive: true,
    title: 'PASAY CITY Store Status<br />\
    <img src="styles/legend/PASAYCITYStoreStatus_11_0.png" /> Deleted<br />\
    <img src="styles/legend/PASAYCITYStoreStatus_11_1.png" /> New Store<br />\
    <img src="styles/legend/PASAYCITYStoreStatus_11_2.png" /> Retained<br />\
    <img src="styles/legend/PASAYCITYStoreStatus_11_3.png" /> Ongoing<br />' });
var format_PASIGCITY272025_12 = new ol.format.GeoJSON();
var features_PASIGCITY272025_12 = format_PASIGCITY272025_12.readFeatures(json_PASIGCITY272025_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PASIGCITY272025_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PASIGCITY272025_12.addFeatures(features_PASIGCITY272025_12);
var lyr_PASIGCITY272025_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PASIGCITY272025_12, 
                style: style_PASIGCITY272025_12,
                popuplayertitle: 'PASIG CITY 2--7-2025',
                interactive: true,
                title: '<img src="styles/legend/PASIGCITY272025_12.png" /> PASIG CITY 2--7-2025'
            });
var format_PASIGCITYStoreStatus_13 = new ol.format.GeoJSON();
var features_PASIGCITYStoreStatus_13 = format_PASIGCITYStoreStatus_13.readFeatures(json_PASIGCITYStoreStatus_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PASIGCITYStoreStatus_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PASIGCITYStoreStatus_13.addFeatures(features_PASIGCITYStoreStatus_13);
var lyr_PASIGCITYStoreStatus_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PASIGCITYStoreStatus_13, 
                style: style_PASIGCITYStoreStatus_13,
                popuplayertitle: 'PASIG CITY Store Status',
                interactive: true,
    title: 'PASIG CITY Store Status<br />\
    <img src="styles/legend/PASIGCITYStoreStatus_13_0.png" /> Deleted<br />\
    <img src="styles/legend/PASIGCITYStoreStatus_13_1.png" /> New Store<br />\
    <img src="styles/legend/PASIGCITYStoreStatus_13_2.png" /> Retained<br />\
    <img src="styles/legend/PASIGCITYStoreStatus_13_3.png" /> Ongoing<br />' });
var format_PATEROS272025_14 = new ol.format.GeoJSON();
var features_PATEROS272025_14 = format_PATEROS272025_14.readFeatures(json_PATEROS272025_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PATEROS272025_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PATEROS272025_14.addFeatures(features_PATEROS272025_14);
var lyr_PATEROS272025_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PATEROS272025_14, 
                style: style_PATEROS272025_14,
                popuplayertitle: 'PATEROS 2--7-2025',
                interactive: true,
                title: '<img src="styles/legend/PATEROS272025_14.png" /> PATEROS 2--7-2025'
            });
var format_PATEROSStoreStatus_15 = new ol.format.GeoJSON();
var features_PATEROSStoreStatus_15 = format_PATEROSStoreStatus_15.readFeatures(json_PATEROSStoreStatus_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PATEROSStoreStatus_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PATEROSStoreStatus_15.addFeatures(features_PATEROSStoreStatus_15);
var lyr_PATEROSStoreStatus_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PATEROSStoreStatus_15, 
                style: style_PATEROSStoreStatus_15,
                popuplayertitle: 'PATEROS Store Status',
                interactive: true,
    title: 'PATEROS Store Status<br />\
    <img src="styles/legend/PATEROSStoreStatus_15_0.png" /> Deleted<br />\
    <img src="styles/legend/PATEROSStoreStatus_15_1.png" /> New Store<br />\
    <img src="styles/legend/PATEROSStoreStatus_15_2.png" /> Retained<br />\
    <img src="styles/legend/PATEROSStoreStatus_15_3.png" /> Ongoing<br />' });
var format_QUEZONCITY272025_16 = new ol.format.GeoJSON();
var features_QUEZONCITY272025_16 = format_QUEZONCITY272025_16.readFeatures(json_QUEZONCITY272025_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QUEZONCITY272025_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QUEZONCITY272025_16.addFeatures(features_QUEZONCITY272025_16);
var lyr_QUEZONCITY272025_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QUEZONCITY272025_16, 
                style: style_QUEZONCITY272025_16,
                popuplayertitle: 'QUEZON CITY 2--7-2025',
                interactive: true,
                title: '<img src="styles/legend/QUEZONCITY272025_16.png" /> QUEZON CITY 2--7-2025'
            });
var format_QUEZONCITYStoreStatus_17 = new ol.format.GeoJSON();
var features_QUEZONCITYStoreStatus_17 = format_QUEZONCITYStoreStatus_17.readFeatures(json_QUEZONCITYStoreStatus_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QUEZONCITYStoreStatus_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QUEZONCITYStoreStatus_17.addFeatures(features_QUEZONCITYStoreStatus_17);
var lyr_QUEZONCITYStoreStatus_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QUEZONCITYStoreStatus_17, 
                style: style_QUEZONCITYStoreStatus_17,
                popuplayertitle: 'QUEZON CITY Store Status',
                interactive: true,
    title: 'QUEZON CITY Store Status<br />\
    <img src="styles/legend/QUEZONCITYStoreStatus_17_0.png" /> Deleted<br />\
    <img src="styles/legend/QUEZONCITYStoreStatus_17_1.png" /> New Store<br />\
    <img src="styles/legend/QUEZONCITYStoreStatus_17_2.png" /> Retained<br />\
    <img src="styles/legend/QUEZONCITYStoreStatus_17_3.png" /> Ongoing<br />' });
var format_VALENZUELACITY272025_18 = new ol.format.GeoJSON();
var features_VALENZUELACITY272025_18 = format_VALENZUELACITY272025_18.readFeatures(json_VALENZUELACITY272025_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VALENZUELACITY272025_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VALENZUELACITY272025_18.addFeatures(features_VALENZUELACITY272025_18);
var lyr_VALENZUELACITY272025_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VALENZUELACITY272025_18, 
                style: style_VALENZUELACITY272025_18,
                popuplayertitle: 'VALENZUELA CITY 2--7-2025',
                interactive: true,
                title: '<img src="styles/legend/VALENZUELACITY272025_18.png" /> VALENZUELA CITY 2--7-2025'
            });
var format_VALENZUELAStoreStatus_19 = new ol.format.GeoJSON();
var features_VALENZUELAStoreStatus_19 = format_VALENZUELAStoreStatus_19.readFeatures(json_VALENZUELAStoreStatus_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VALENZUELAStoreStatus_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VALENZUELAStoreStatus_19.addFeatures(features_VALENZUELAStoreStatus_19);
var lyr_VALENZUELAStoreStatus_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VALENZUELAStoreStatus_19, 
                style: style_VALENZUELAStoreStatus_19,
                popuplayertitle: 'VALENZUELA Store Status',
                interactive: true,
    title: 'VALENZUELA Store Status<br />\
    <img src="styles/legend/VALENZUELAStoreStatus_19_0.png" /> Deleted<br />\
    <img src="styles/legend/VALENZUELAStoreStatus_19_1.png" /> New Store<br />\
    <img src="styles/legend/VALENZUELAStoreStatus_19_2.png" /> Retained<br />\
    <img src="styles/legend/VALENZUELAStoreStatus_19_3.png" /> Ongoing<br />' });
var group_GMAStoresOngoingUpdates272025 = new ol.layer.Group({
                                layers: [lyr_MAKATICITY272025_2,lyr_MAKATICITYStoreStatus_3,lyr_MALABONCITY272025_4,lyr_MALABONCITYStoreStatus_5,lyr_MANILACITY272025_6,lyr_MANILACITYStoreStatus_7,lyr_NAVOTASCITY272025_8,lyr_NAVOTASCITYStoreStatus_9,lyr_PASAYCITY272025_10,lyr_PASAYCITYStoreStatus_11,lyr_PASIGCITY272025_12,lyr_PASIGCITYStoreStatus_13,lyr_PATEROS272025_14,lyr_PATEROSStoreStatus_15,lyr_QUEZONCITY272025_16,lyr_QUEZONCITYStoreStatus_17,lyr_VALENZUELACITY272025_18,lyr_VALENZUELAStoreStatus_19,],
                                fold: "open",
                                title: 'GMA Stores  Ongoing Updates 2/7/2025'});

lyr_OSMStandard_0.setVisible(true);lyr_MetroManilaCityBoundaries_1.setVisible(true);lyr_MAKATICITY272025_2.setVisible(true);lyr_MAKATICITYStoreStatus_3.setVisible(true);lyr_MALABONCITY272025_4.setVisible(true);lyr_MALABONCITYStoreStatus_5.setVisible(true);lyr_MANILACITY272025_6.setVisible(true);lyr_MANILACITYStoreStatus_7.setVisible(true);lyr_NAVOTASCITY272025_8.setVisible(true);lyr_NAVOTASCITYStoreStatus_9.setVisible(true);lyr_PASAYCITY272025_10.setVisible(true);lyr_PASAYCITYStoreStatus_11.setVisible(true);lyr_PASIGCITY272025_12.setVisible(true);lyr_PASIGCITYStoreStatus_13.setVisible(true);lyr_PATEROS272025_14.setVisible(true);lyr_PATEROSStoreStatus_15.setVisible(true);lyr_QUEZONCITY272025_16.setVisible(true);lyr_QUEZONCITYStoreStatus_17.setVisible(true);lyr_VALENZUELACITY272025_18.setVisible(true);lyr_VALENZUELAStoreStatus_19.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_MetroManilaCityBoundaries_1,group_GMAStoresOngoingUpdates272025];
lyr_MetroManilaCityBoundaries_1.set('fieldAliases', {'CITY_MUNI': 'CITY / MUNICIPAL', 'PROVINCE': 'PROVINCE', 'REGION': 'REGION', 'ZIP_CODE': 'ZIP_CODE', 'TEL_CODE': 'TEL_CODE', 'PROD_CITY_': 'PROD_CITY_', 'MUNIC_CODE': 'MUNIC_CODE', 'TTL_POP': 'POPULATION', 'HSE_POP': 'HOUSEHOLD', 'Z_HSEHOLD': 'Z_HSEHOLD', });
lyr_MAKATICITY272025_2.set('fieldAliases', {'TAG NO.': 'TAG NO.', 'Signage_Na': 'Signage_Na', 'Hse_No': 'Hse_No', 'Street': 'Street', 'Bar_Name': 'Bar_Name', 'Mun_Name': 'Mun_Name', 'Pro_Name': 'Pro_Name', 'CLASSIFICA': 'CLASSIFICA', 'STORE SALE': 'STORE SALE', 'POINT_X': 'POINT_X', 'POINT_Y': 'POINT_Y', 'STATUS': 'STATUS', });
lyr_MAKATICITYStoreStatus_3.set('fieldAliases', {'TAG NO.': 'TAG NO.', 'Signage_Na': 'Signage_Na', 'Hse_No': 'Hse_No', 'Street': 'Street', 'Bar_Name': 'Bar_Name', 'Mun_Name': 'Mun_Name', 'Pro_Name': 'Pro_Name', 'CLASSIFICA': 'CLASSIFICA', 'STORE SALE': 'STORE SALE', 'POINT_X': 'POINT_X', 'POINT_Y': 'POINT_Y', 'STATUS': 'STATUS', });
lyr_MALABONCITY272025_4.set('fieldAliases', {'TAG NO.': 'TAG NO.', 'Signage_Na': 'Signage_Na', 'Hse_No': 'Hse_No', 'Street': 'Street', 'Bar_Name': 'Bar_Name', 'Mun_Name': 'Mun_Name', 'Pro_Name': 'Pro_Name', 'CLASSIFICA': 'CLASSIFICA', 'Store_Sale': 'Store_Sale', 'POINT_X': 'POINT_X', 'POINT_Y': 'POINT_Y', 'STATUS': 'STATUS', });
lyr_MALABONCITYStoreStatus_5.set('fieldAliases', {'TAG NO.': 'TAG NO.', 'Signage_Na': 'Signage_Na', 'Hse_No': 'Hse_No', 'Street': 'Street', 'Bar_Name': 'Bar_Name', 'Mun_Name': 'Mun_Name', 'Pro_Name': 'Pro_Name', 'CLASSIFICA': 'CLASSIFICA', 'Store_Sale': 'Store_Sale', 'POINT_X': 'POINT_X', 'POINT_Y': 'POINT_Y', 'STATUS': 'STATUS', });
lyr_MANILACITY272025_6.set('fieldAliases', {'TAG NO.': 'TAG NO.', 'Signage_Na': 'Signage_Na', 'Hse_No': 'Hse_No', 'Street': 'Street', 'Bar_Name': 'Bar_Name', 'Mun_Name': 'Mun_Name', 'Pro_Name': 'Pro_Name', 'CLASSIFICA': 'CLASSIFICA', 'STORE SALE': 'STORE SALE', 'POINT_X': 'POINT_X', 'POINT_Y': 'POINT_Y', 'STATUS': 'STATUS', });
lyr_MANILACITYStoreStatus_7.set('fieldAliases', {'TAG NO.': 'TAG NO.', 'Signage_Na': 'Signage_Na', 'Hse_No': 'Hse_No', 'Street': 'Street', 'Bar_Name': 'Bar_Name', 'Mun_Name': 'Mun_Name', 'Pro_Name': 'Pro_Name', 'CLASSIFICA': 'CLASSIFICA', 'STORE SALE': 'STORE SALE', 'POINT_X': 'POINT_X', 'POINT_Y': 'POINT_Y', 'STATUS': 'STATUS', });
lyr_NAVOTASCITY272025_8.set('fieldAliases', {'TAG NO.': 'TAG NO.', 'Signage_Na': 'Signage_Na', 'Hse_No': 'Hse_No', 'Street': 'Street', 'Bar_Name': 'Bar_Name', 'Mun_Name': 'Mun_Name', 'Pro_Name': 'Pro_Name', 'CLASSIFICA': 'CLASSIFICA', 'Store_Sale': 'Store_Sale', 'POINT_X': 'POINT_X', 'POINT_Y': 'POINT_Y', 'Status': 'Status', });
lyr_NAVOTASCITYStoreStatus_9.set('fieldAliases', {'TAG NO.': 'TAG NO.', 'Signage_Na': 'Signage_Na', 'Hse_No': 'Hse_No', 'Street': 'Street', 'Bar_Name': 'Bar_Name', 'Mun_Name': 'Mun_Name', 'Pro_Name': 'Pro_Name', 'CLASSIFICA': 'CLASSIFICA', 'Store_Sale': 'Store_Sale', 'POINT_X': 'POINT_X', 'POINT_Y': 'POINT_Y', 'Status': 'Status', });
lyr_PASAYCITY272025_10.set('fieldAliases', {'TAG NO.': 'TAG NO.', 'Signage_Na': 'Signage_Na', 'Hse_No': 'Hse_No', 'Street': 'Street', 'Bar_Name': 'Bar_Name', 'Mun_Name': 'Mun_Name', 'Pro_Name': 'Pro_Name', 'CLASSIFICA': 'CLASSIFICA', 'Store_Sale': 'Store_Sale', 'POINT_X': 'POINT_X', 'POINT_Y': 'POINT_Y', 'STATUS': 'STATUS', });
lyr_PASAYCITYStoreStatus_11.set('fieldAliases', {'TAG NO.': 'TAG NO.', 'Signage_Na': 'Signage_Na', 'Hse_No': 'Hse_No', 'Street': 'Street', 'Bar_Name': 'Bar_Name', 'Mun_Name': 'Mun_Name', 'Pro_Name': 'Pro_Name', 'CLASSIFICA': 'CLASSIFICA', 'Store_Sale': 'Store_Sale', 'POINT_X': 'POINT_X', 'POINT_Y': 'POINT_Y', 'STATUS': 'STATUS', });
lyr_PASIGCITY272025_12.set('fieldAliases', {'TAG NO.': 'TAG NO.', 'Signage_Na': 'Signage_Na', 'Hse_No': 'Hse_No', 'Street': 'Street', 'Bar_Name': 'Bar_Name', 'Mun_Name': 'Mun_Name', 'Pro_Name': 'Pro_Name', 'CLASSIFICA': 'CLASSIFICA', 'Store_Sale': 'Store_Sale', 'POINT_X': 'POINT_X', 'POINT_Y': 'POINT_Y', 'STATUS': 'STATUS', });
lyr_PASIGCITYStoreStatus_13.set('fieldAliases', {'TAG NO.': 'TAG NO.', 'Signage_Na': 'Signage_Na', 'Hse_No': 'Hse_No', 'Street': 'Street', 'Bar_Name': 'Bar_Name', 'Mun_Name': 'Mun_Name', 'Pro_Name': 'Pro_Name', 'CLASSIFICA': 'CLASSIFICA', 'Store_Sale': 'Store_Sale', 'POINT_X': 'POINT_X', 'POINT_Y': 'POINT_Y', 'STATUS': 'STATUS', });
lyr_PATEROS272025_14.set('fieldAliases', {'TAG NO.': 'TAG NO.', 'Signage_Na': 'Signage_Na', 'Hse_No': 'Hse_No', 'Street': 'Street', 'Bar_Name': 'Bar_Name', 'Mun_Name': 'Mun_Name', 'Pro_Name': 'Pro_Name', 'CLASSIFICA': 'CLASSIFICA', 'Store_Sale': 'Store_Sale', 'POINT_X': 'POINT_X', 'POINT_Y': 'POINT_Y', 'STATUS': 'STATUS', });
lyr_PATEROSStoreStatus_15.set('fieldAliases', {'TAG NO.': 'TAG NO.', 'Signage_Na': 'Signage_Na', 'Hse_No': 'Hse_No', 'Street': 'Street', 'Bar_Name': 'Bar_Name', 'Mun_Name': 'Mun_Name', 'Pro_Name': 'Pro_Name', 'CLASSIFICA': 'CLASSIFICA', 'Store_Sale': 'Store_Sale', 'POINT_X': 'POINT_X', 'POINT_Y': 'POINT_Y', 'STATUS': 'STATUS', });
lyr_QUEZONCITY272025_16.set('fieldAliases', {'TAG NO.': 'TAG NO.', 'Signage_Na': 'Signage_Na', 'Hse_No': 'Hse_No', 'Street': 'Street', 'Bar_Name': 'Bar_Name', 'Mun_Name': 'Mun_Name', 'Pro_Name': 'Pro_Name', 'CLASSIFICA': 'CLASSIFICA', 'Store_Sale': 'Store_Sale', 'POINT_X': 'POINT_X', 'POINT_Y': 'POINT_Y', 'STATUS': 'STATUS', });
lyr_QUEZONCITYStoreStatus_17.set('fieldAliases', {'TAG NO.': 'TAG NO.', 'Signage_Na': 'Signage_Na', 'Hse_No': 'Hse_No', 'Street': 'Street', 'Bar_Name': 'Bar_Name', 'Mun_Name': 'Mun_Name', 'Pro_Name': 'Pro_Name', 'CLASSIFICA': 'CLASSIFICA', 'Store_Sale': 'Store_Sale', 'POINT_X': 'POINT_X', 'POINT_Y': 'POINT_Y', 'STATUS': 'STATUS', });
lyr_VALENZUELACITY272025_18.set('fieldAliases', {'TAG NO.': 'TAG NO.', 'Signage_Na': 'Signage_Na', 'Hse_No': 'Hse_No', 'Street': 'Street', 'Bar_Name': 'Bar_Name', 'Mun_Name': 'Mun_Name', 'Pro_Name': 'Pro_Name', 'CLASSIFICA': 'CLASSIFICA', 'Store_Sale': 'Store_Sale', 'POINT_X': 'POINT_X', 'POINT_Y': 'POINT_Y', 'STATUS': 'STATUS', });
lyr_VALENZUELAStoreStatus_19.set('fieldAliases', {'TAG NO.': 'TAG NO.', 'Signage_Na': 'Signage_Na', 'Hse_No': 'Hse_No', 'Street': 'Street', 'Bar_Name': 'Bar_Name', 'Mun_Name': 'Mun_Name', 'Pro_Name': 'Pro_Name', 'CLASSIFICA': 'CLASSIFICA', 'Store_Sale': 'Store_Sale', 'POINT_X': 'POINT_X', 'POINT_Y': 'POINT_Y', 'STATUS': 'STATUS', });
lyr_MetroManilaCityBoundaries_1.set('fieldImages', {'CITY_MUNI': 'TextEdit', 'PROVINCE': 'TextEdit', 'REGION': 'TextEdit', 'ZIP_CODE': 'TextEdit', 'TEL_CODE': 'TextEdit', 'PROD_CITY_': 'TextEdit', 'MUNIC_CODE': 'TextEdit', 'TTL_POP': 'TextEdit', 'HSE_POP': 'TextEdit', 'Z_HSEHOLD': 'TextEdit', });
lyr_MAKATICITY272025_2.set('fieldImages', {'TAG NO.': '', 'Signage_Na': '', 'Hse_No': '', 'Street': '', 'Bar_Name': '', 'Mun_Name': '', 'Pro_Name': '', 'CLASSIFICA': '', 'STORE SALE': '', 'POINT_X': '', 'POINT_Y': '', 'STATUS': '', });
lyr_MAKATICITYStoreStatus_3.set('fieldImages', {'TAG NO.': 'TextEdit', 'Signage_Na': 'TextEdit', 'Hse_No': 'TextEdit', 'Street': 'TextEdit', 'Bar_Name': 'TextEdit', 'Mun_Name': 'TextEdit', 'Pro_Name': 'TextEdit', 'CLASSIFICA': 'TextEdit', 'STORE SALE': 'TextEdit', 'POINT_X': 'TextEdit', 'POINT_Y': 'TextEdit', 'STATUS': 'TextEdit', });
lyr_MALABONCITY272025_4.set('fieldImages', {'TAG NO.': '', 'Signage_Na': '', 'Hse_No': '', 'Street': '', 'Bar_Name': '', 'Mun_Name': '', 'Pro_Name': '', 'CLASSIFICA': '', 'Store_Sale': '', 'POINT_X': '', 'POINT_Y': '', 'STATUS': '', });
lyr_MALABONCITYStoreStatus_5.set('fieldImages', {'TAG NO.': 'TextEdit', 'Signage_Na': 'TextEdit', 'Hse_No': 'TextEdit', 'Street': 'TextEdit', 'Bar_Name': 'TextEdit', 'Mun_Name': 'TextEdit', 'Pro_Name': 'TextEdit', 'CLASSIFICA': 'TextEdit', 'Store_Sale': 'TextEdit', 'POINT_X': 'TextEdit', 'POINT_Y': 'TextEdit', 'STATUS': 'TextEdit', });
lyr_MANILACITY272025_6.set('fieldImages', {'TAG NO.': '', 'Signage_Na': '', 'Hse_No': '', 'Street': '', 'Bar_Name': '', 'Mun_Name': '', 'Pro_Name': '', 'CLASSIFICA': '', 'STORE SALE': '', 'POINT_X': '', 'POINT_Y': '', 'STATUS': '', });
lyr_MANILACITYStoreStatus_7.set('fieldImages', {'TAG NO.': 'TextEdit', 'Signage_Na': 'TextEdit', 'Hse_No': 'TextEdit', 'Street': 'TextEdit', 'Bar_Name': 'TextEdit', 'Mun_Name': 'TextEdit', 'Pro_Name': 'TextEdit', 'CLASSIFICA': 'TextEdit', 'STORE SALE': 'TextEdit', 'POINT_X': 'TextEdit', 'POINT_Y': 'TextEdit', 'STATUS': 'TextEdit', });
lyr_NAVOTASCITY272025_8.set('fieldImages', {'TAG NO.': '', 'Signage_Na': '', 'Hse_No': '', 'Street': '', 'Bar_Name': '', 'Mun_Name': '', 'Pro_Name': '', 'CLASSIFICA': '', 'Store_Sale': '', 'POINT_X': '', 'POINT_Y': '', 'Status': '', });
lyr_NAVOTASCITYStoreStatus_9.set('fieldImages', {'TAG NO.': 'TextEdit', 'Signage_Na': 'TextEdit', 'Hse_No': 'TextEdit', 'Street': 'TextEdit', 'Bar_Name': 'TextEdit', 'Mun_Name': 'TextEdit', 'Pro_Name': 'TextEdit', 'CLASSIFICA': 'TextEdit', 'Store_Sale': 'TextEdit', 'POINT_X': 'TextEdit', 'POINT_Y': 'TextEdit', 'Status': 'TextEdit', });
lyr_PASAYCITY272025_10.set('fieldImages', {'TAG NO.': '', 'Signage_Na': '', 'Hse_No': '', 'Street': '', 'Bar_Name': '', 'Mun_Name': '', 'Pro_Name': '', 'CLASSIFICA': '', 'Store_Sale': '', 'POINT_X': '', 'POINT_Y': '', 'STATUS': '', });
lyr_PASAYCITYStoreStatus_11.set('fieldImages', {'TAG NO.': 'TextEdit', 'Signage_Na': 'TextEdit', 'Hse_No': 'TextEdit', 'Street': 'TextEdit', 'Bar_Name': 'TextEdit', 'Mun_Name': 'TextEdit', 'Pro_Name': 'TextEdit', 'CLASSIFICA': 'TextEdit', 'Store_Sale': 'TextEdit', 'POINT_X': 'TextEdit', 'POINT_Y': 'TextEdit', 'STATUS': 'TextEdit', });
lyr_PASIGCITY272025_12.set('fieldImages', {'TAG NO.': '', 'Signage_Na': '', 'Hse_No': '', 'Street': '', 'Bar_Name': '', 'Mun_Name': '', 'Pro_Name': '', 'CLASSIFICA': '', 'Store_Sale': '', 'POINT_X': '', 'POINT_Y': '', 'STATUS': '', });
lyr_PASIGCITYStoreStatus_13.set('fieldImages', {'TAG NO.': 'TextEdit', 'Signage_Na': 'TextEdit', 'Hse_No': 'TextEdit', 'Street': 'TextEdit', 'Bar_Name': 'TextEdit', 'Mun_Name': 'TextEdit', 'Pro_Name': 'TextEdit', 'CLASSIFICA': 'TextEdit', 'Store_Sale': 'TextEdit', 'POINT_X': 'TextEdit', 'POINT_Y': 'TextEdit', 'STATUS': 'TextEdit', });
lyr_PATEROS272025_14.set('fieldImages', {'TAG NO.': '', 'Signage_Na': '', 'Hse_No': '', 'Street': '', 'Bar_Name': '', 'Mun_Name': '', 'Pro_Name': '', 'CLASSIFICA': '', 'Store_Sale': '', 'POINT_X': '', 'POINT_Y': '', 'STATUS': '', });
lyr_PATEROSStoreStatus_15.set('fieldImages', {'TAG NO.': 'TextEdit', 'Signage_Na': 'TextEdit', 'Hse_No': 'TextEdit', 'Street': 'TextEdit', 'Bar_Name': 'TextEdit', 'Mun_Name': 'TextEdit', 'Pro_Name': 'TextEdit', 'CLASSIFICA': 'TextEdit', 'Store_Sale': 'TextEdit', 'POINT_X': 'TextEdit', 'POINT_Y': 'TextEdit', 'STATUS': 'TextEdit', });
lyr_QUEZONCITY272025_16.set('fieldImages', {'TAG NO.': '', 'Signage_Na': '', 'Hse_No': '', 'Street': '', 'Bar_Name': '', 'Mun_Name': '', 'Pro_Name': '', 'CLASSIFICA': '', 'Store_Sale': '', 'POINT_X': '', 'POINT_Y': '', 'STATUS': '', });
lyr_QUEZONCITYStoreStatus_17.set('fieldImages', {'TAG NO.': 'TextEdit', 'Signage_Na': 'TextEdit', 'Hse_No': 'TextEdit', 'Street': 'TextEdit', 'Bar_Name': 'TextEdit', 'Mun_Name': 'TextEdit', 'Pro_Name': 'TextEdit', 'CLASSIFICA': 'TextEdit', 'Store_Sale': 'TextEdit', 'POINT_X': 'TextEdit', 'POINT_Y': 'TextEdit', 'STATUS': 'TextEdit', });
lyr_VALENZUELACITY272025_18.set('fieldImages', {'TAG NO.': '', 'Signage_Na': '', 'Hse_No': '', 'Street': '', 'Bar_Name': '', 'Mun_Name': '', 'Pro_Name': '', 'CLASSIFICA': '', 'Store_Sale': '', 'POINT_X': '', 'POINT_Y': '', 'STATUS': '', });
lyr_VALENZUELAStoreStatus_19.set('fieldImages', {'TAG NO.': 'TextEdit', 'Signage_Na': 'TextEdit', 'Hse_No': 'TextEdit', 'Street': 'TextEdit', 'Bar_Name': 'TextEdit', 'Mun_Name': 'TextEdit', 'Pro_Name': 'TextEdit', 'CLASSIFICA': 'TextEdit', 'Store_Sale': 'TextEdit', 'POINT_X': 'TextEdit', 'POINT_Y': 'TextEdit', 'STATUS': 'TextEdit', });
lyr_MetroManilaCityBoundaries_1.set('fieldLabels', {'CITY_MUNI': 'no label', 'PROVINCE': 'no label', 'REGION': 'no label', 'ZIP_CODE': 'no label', 'TEL_CODE': 'no label', 'PROD_CITY_': 'no label', 'MUNIC_CODE': 'no label', 'TTL_POP': 'no label', 'HSE_POP': 'no label', 'Z_HSEHOLD': 'no label', });
lyr_MAKATICITY272025_2.set('fieldLabels', {'TAG NO.': 'no label', 'Signage_Na': 'no label', 'Hse_No': 'no label', 'Street': 'no label', 'Bar_Name': 'no label', 'Mun_Name': 'no label', 'Pro_Name': 'no label', 'CLASSIFICA': 'no label', 'STORE SALE': 'no label', 'POINT_X': 'no label', 'POINT_Y': 'no label', 'STATUS': 'no label', });
lyr_MAKATICITYStoreStatus_3.set('fieldLabels', {'TAG NO.': 'no label', 'Signage_Na': 'no label', 'Hse_No': 'no label', 'Street': 'no label', 'Bar_Name': 'no label', 'Mun_Name': 'no label', 'Pro_Name': 'no label', 'CLASSIFICA': 'no label', 'STORE SALE': 'no label', 'POINT_X': 'no label', 'POINT_Y': 'no label', 'STATUS': 'no label', });
lyr_MALABONCITY272025_4.set('fieldLabels', {'TAG NO.': 'no label', 'Signage_Na': 'no label', 'Hse_No': 'no label', 'Street': 'no label', 'Bar_Name': 'no label', 'Mun_Name': 'no label', 'Pro_Name': 'no label', 'CLASSIFICA': 'no label', 'Store_Sale': 'no label', 'POINT_X': 'no label', 'POINT_Y': 'no label', 'STATUS': 'no label', });
lyr_MALABONCITYStoreStatus_5.set('fieldLabels', {'TAG NO.': 'no label', 'Signage_Na': 'no label', 'Hse_No': 'no label', 'Street': 'no label', 'Bar_Name': 'no label', 'Mun_Name': 'no label', 'Pro_Name': 'no label', 'CLASSIFICA': 'no label', 'Store_Sale': 'no label', 'POINT_X': 'no label', 'POINT_Y': 'no label', 'STATUS': 'no label', });
lyr_MANILACITY272025_6.set('fieldLabels', {'TAG NO.': 'no label', 'Signage_Na': 'no label', 'Hse_No': 'no label', 'Street': 'no label', 'Bar_Name': 'no label', 'Mun_Name': 'no label', 'Pro_Name': 'no label', 'CLASSIFICA': 'no label', 'STORE SALE': 'no label', 'POINT_X': 'no label', 'POINT_Y': 'no label', 'STATUS': 'no label', });
lyr_MANILACITYStoreStatus_7.set('fieldLabels', {'TAG NO.': 'no label', 'Signage_Na': 'no label', 'Hse_No': 'no label', 'Street': 'no label', 'Bar_Name': 'no label', 'Mun_Name': 'no label', 'Pro_Name': 'no label', 'CLASSIFICA': 'no label', 'STORE SALE': 'no label', 'POINT_X': 'no label', 'POINT_Y': 'no label', 'STATUS': 'no label', });
lyr_NAVOTASCITY272025_8.set('fieldLabels', {'TAG NO.': 'no label', 'Signage_Na': 'no label', 'Hse_No': 'no label', 'Street': 'no label', 'Bar_Name': 'no label', 'Mun_Name': 'no label', 'Pro_Name': 'no label', 'CLASSIFICA': 'no label', 'Store_Sale': 'no label', 'POINT_X': 'no label', 'POINT_Y': 'no label', 'Status': 'no label', });
lyr_NAVOTASCITYStoreStatus_9.set('fieldLabels', {'TAG NO.': 'no label', 'Signage_Na': 'no label', 'Hse_No': 'no label', 'Street': 'no label', 'Bar_Name': 'no label', 'Mun_Name': 'no label', 'Pro_Name': 'no label', 'CLASSIFICA': 'no label', 'Store_Sale': 'no label', 'POINT_X': 'no label', 'POINT_Y': 'no label', 'Status': 'no label', });
lyr_PASAYCITY272025_10.set('fieldLabels', {'TAG NO.': 'no label', 'Signage_Na': 'no label', 'Hse_No': 'no label', 'Street': 'no label', 'Bar_Name': 'no label', 'Mun_Name': 'no label', 'Pro_Name': 'no label', 'CLASSIFICA': 'no label', 'Store_Sale': 'no label', 'POINT_X': 'no label', 'POINT_Y': 'no label', 'STATUS': 'no label', });
lyr_PASAYCITYStoreStatus_11.set('fieldLabels', {'TAG NO.': 'no label', 'Signage_Na': 'no label', 'Hse_No': 'no label', 'Street': 'no label', 'Bar_Name': 'no label', 'Mun_Name': 'no label', 'Pro_Name': 'no label', 'CLASSIFICA': 'no label', 'Store_Sale': 'no label', 'POINT_X': 'no label', 'POINT_Y': 'no label', 'STATUS': 'no label', });
lyr_PASIGCITY272025_12.set('fieldLabels', {'TAG NO.': 'no label', 'Signage_Na': 'no label', 'Hse_No': 'no label', 'Street': 'no label', 'Bar_Name': 'no label', 'Mun_Name': 'no label', 'Pro_Name': 'no label', 'CLASSIFICA': 'no label', 'Store_Sale': 'no label', 'POINT_X': 'no label', 'POINT_Y': 'no label', 'STATUS': 'no label', });
lyr_PASIGCITYStoreStatus_13.set('fieldLabels', {'TAG NO.': 'no label', 'Signage_Na': 'no label', 'Hse_No': 'no label', 'Street': 'no label', 'Bar_Name': 'no label', 'Mun_Name': 'no label', 'Pro_Name': 'no label', 'CLASSIFICA': 'no label', 'Store_Sale': 'no label', 'POINT_X': 'no label', 'POINT_Y': 'no label', 'STATUS': 'no label', });
lyr_PATEROS272025_14.set('fieldLabels', {'TAG NO.': 'no label', 'Signage_Na': 'no label', 'Hse_No': 'no label', 'Street': 'no label', 'Bar_Name': 'no label', 'Mun_Name': 'no label', 'Pro_Name': 'no label', 'CLASSIFICA': 'no label', 'Store_Sale': 'no label', 'POINT_X': 'no label', 'POINT_Y': 'no label', 'STATUS': 'no label', });
lyr_PATEROSStoreStatus_15.set('fieldLabels', {'TAG NO.': 'no label', 'Signage_Na': 'no label', 'Hse_No': 'no label', 'Street': 'no label', 'Bar_Name': 'no label', 'Mun_Name': 'no label', 'Pro_Name': 'no label', 'CLASSIFICA': 'no label', 'Store_Sale': 'no label', 'POINT_X': 'no label', 'POINT_Y': 'no label', 'STATUS': 'no label', });
lyr_QUEZONCITY272025_16.set('fieldLabels', {'TAG NO.': 'no label', 'Signage_Na': 'no label', 'Hse_No': 'no label', 'Street': 'no label', 'Bar_Name': 'no label', 'Mun_Name': 'no label', 'Pro_Name': 'no label', 'CLASSIFICA': 'no label', 'Store_Sale': 'no label', 'POINT_X': 'no label', 'POINT_Y': 'no label', 'STATUS': 'no label', });
lyr_QUEZONCITYStoreStatus_17.set('fieldLabels', {'TAG NO.': 'no label', 'Signage_Na': 'no label', 'Hse_No': 'no label', 'Street': 'no label', 'Bar_Name': 'no label', 'Mun_Name': 'no label', 'Pro_Name': 'no label', 'CLASSIFICA': 'no label', 'Store_Sale': 'no label', 'POINT_X': 'no label', 'POINT_Y': 'no label', 'STATUS': 'no label', });
lyr_VALENZUELACITY272025_18.set('fieldLabels', {'TAG NO.': 'no label', 'Signage_Na': 'no label', 'Hse_No': 'no label', 'Street': 'no label', 'Bar_Name': 'no label', 'Mun_Name': 'no label', 'Pro_Name': 'no label', 'CLASSIFICA': 'no label', 'Store_Sale': 'no label', 'POINT_X': 'no label', 'POINT_Y': 'no label', 'STATUS': 'no label', });
lyr_VALENZUELAStoreStatus_19.set('fieldLabels', {'TAG NO.': 'no label', 'Signage_Na': 'no label', 'Hse_No': 'no label', 'Street': 'no label', 'Bar_Name': 'no label', 'Mun_Name': 'no label', 'Pro_Name': 'no label', 'CLASSIFICA': 'no label', 'Store_Sale': 'no label', 'POINT_X': 'no label', 'POINT_Y': 'no label', 'STATUS': 'no label', });
lyr_VALENZUELAStoreStatus_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});