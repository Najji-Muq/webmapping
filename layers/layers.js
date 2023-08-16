var wms_layers = [];


        var lyr_GoogleSatellitehybride_0 = new ol.layer.Tile({
            'title': 'Google Satellite hybride',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ERP_2 = new ol.format.GeoJSON();
var features_ERP_2 = format_ERP_2.readFeatures(json_ERP_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ERP_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ERP_2.addFeatures(features_ERP_2);
var lyr_ERP_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ERP_2, 
                style: style_ERP_2,
                interactive: true,
                title: '<img src="styles/legend/ERP_2.png" /> ERP'
            });
var format_Perimetre_CNIG_3 = new ol.format.GeoJSON();
var features_Perimetre_CNIG_3 = format_Perimetre_CNIG_3.readFeatures(json_Perimetre_CNIG_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Perimetre_CNIG_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Perimetre_CNIG_3.addFeatures(features_Perimetre_CNIG_3);
var lyr_Perimetre_CNIG_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Perimetre_CNIG_3, 
                style: style_Perimetre_CNIG_3,
                interactive: true,
                title: '<img src="styles/legend/Perimetre_CNIG_3.png" /> Perimetre_CNIG'
            });
var format_Perimetre_PAVE_4 = new ol.format.GeoJSON();
var features_Perimetre_PAVE_4 = format_Perimetre_PAVE_4.readFeatures(json_Perimetre_PAVE_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Perimetre_PAVE_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Perimetre_PAVE_4.addFeatures(features_Perimetre_PAVE_4);
var lyr_Perimetre_PAVE_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Perimetre_PAVE_4, 
                style: style_Perimetre_PAVE_4,
                interactive: true,
                title: '<img src="styles/legend/Perimetre_PAVE_4.png" /> Perimetre_PAVE'
            });
var format_STATIONNEMENT_PMR_5 = new ol.format.GeoJSON();
var features_STATIONNEMENT_PMR_5 = format_STATIONNEMENT_PMR_5.readFeatures(json_STATIONNEMENT_PMR_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_STATIONNEMENT_PMR_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STATIONNEMENT_PMR_5.addFeatures(features_STATIONNEMENT_PMR_5);
var lyr_STATIONNEMENT_PMR_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_STATIONNEMENT_PMR_5, 
                style: style_STATIONNEMENT_PMR_5,
                interactive: true,
                title: '<img src="styles/legend/STATIONNEMENT_PMR_5.png" /> STATIONNEMENT_PMR'
            });
var format_largeurs_6 = new ol.format.GeoJSON();
var features_largeurs_6 = format_largeurs_6.readFeatures(json_largeurs_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_largeurs_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_largeurs_6.addFeatures(features_largeurs_6);
var lyr_largeurs_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_largeurs_6, 
                style: style_largeurs_6,
                interactive: true,
                title: 'largeurs'
            });
var format_Pentesetdvers_7 = new ol.format.GeoJSON();
var features_Pentesetdvers_7 = format_Pentesetdvers_7.readFeatures(json_Pentesetdvers_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pentesetdvers_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pentesetdvers_7.addFeatures(features_Pentesetdvers_7);
var lyr_Pentesetdvers_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pentesetdvers_7, 
                style: style_Pentesetdvers_7,
                interactive: true,
                title: 'Pentes et dévers'
            });
var format_TRONCON_CHEMINEMENT_8 = new ol.format.GeoJSON();
var features_TRONCON_CHEMINEMENT_8 = format_TRONCON_CHEMINEMENT_8.readFeatures(json_TRONCON_CHEMINEMENT_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRONCON_CHEMINEMENT_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRONCON_CHEMINEMENT_8.addFeatures(features_TRONCON_CHEMINEMENT_8);
var lyr_TRONCON_CHEMINEMENT_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TRONCON_CHEMINEMENT_8, 
                style: style_TRONCON_CHEMINEMENT_8,
                interactive: true,
    title: 'TRONCON_CHEMINEMENT <br />\
    <img src="styles/legend/TRONCON_CHEMINEMENT_8_0.png" /> CIRCULATION<br />\
    <img src="styles/legend/TRONCON_CHEMINEMENT_8_1.png" /> ESCALIER<br />\
    <img src="styles/legend/TRONCON_CHEMINEMENT_8_2.png" /> QUAI<br />\
    <img src="styles/legend/TRONCON_CHEMINEMENT_8_3.png" /> RAMPE<br />\
    <img src="styles/legend/TRONCON_CHEMINEMENT_8_4.png" /> TRAVERSEE<br />'
        });
var format_NOEUD_CHEMINEMENT_9 = new ol.format.GeoJSON();
var features_NOEUD_CHEMINEMENT_9 = format_NOEUD_CHEMINEMENT_9.readFeatures(json_NOEUD_CHEMINEMENT_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NOEUD_CHEMINEMENT_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NOEUD_CHEMINEMENT_9.addFeatures(features_NOEUD_CHEMINEMENT_9);
var lyr_NOEUD_CHEMINEMENT_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NOEUD_CHEMINEMENT_9, 
                style: style_NOEUD_CHEMINEMENT_9,
                interactive: true,
                title: '<img src="styles/legend/NOEUD_CHEMINEMENT_9.png" /> NOEUD_CHEMINEMENT '
            });
var format_Obstacles_10 = new ol.format.GeoJSON();
var features_Obstacles_10 = format_Obstacles_10.readFeatures(json_Obstacles_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Obstacles_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Obstacles_10.addFeatures(features_Obstacles_10);
var lyr_Obstacles_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Obstacles_10, 
                style: style_Obstacles_10,
                interactive: true,
                title: '<img src="styles/legend/Obstacles_10.png" /> Obstacles'
            });

lyr_GoogleSatellitehybride_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_ERP_2.setVisible(true);lyr_Perimetre_CNIG_3.setVisible(true);lyr_Perimetre_PAVE_4.setVisible(true);lyr_STATIONNEMENT_PMR_5.setVisible(true);lyr_largeurs_6.setVisible(true);lyr_Pentesetdvers_7.setVisible(true);lyr_TRONCON_CHEMINEMENT_8.setVisible(true);lyr_NOEUD_CHEMINEMENT_9.setVisible(true);lyr_Obstacles_10.setVisible(true);
var layersList = [lyr_GoogleSatellitehybride_0,lyr_OpenStreetMap_1,lyr_ERP_2,lyr_Perimetre_CNIG_3,lyr_Perimetre_PAVE_4,lyr_STATIONNEMENT_PMR_5,lyr_largeurs_6,lyr_Pentesetdvers_7,lyr_TRONCON_CHEMINEMENT_8,lyr_NOEUD_CHEMINEMENT_9,lyr_Obstacles_10];
lyr_ERP_2.set('fieldAliases', {'fid': 'fid', 'idERP': 'idERP', 'nom': 'nom', 'adresse': 'adresse', 'codePostal': 'codePostal', 'insee': 'insee', 'telephone': 'telephone', 'siteweb': 'siteweb', 'siret': 'siret', 'erpCategorie': 'erpCategorie', 'erpType': 'erpType', 'erpActivite': 'erpActivite', 'latitude': 'latitude', 'longitude': 'longitude', 'dateMiseAJour': 'dateMiseAJour', 'sourceMiseAJour': 'sourceMiseAJour', 'stationnementERP': 'stationnementERP', 'stationnementPMR': 'stationnementPMR', 'accueilPersonnel': 'accueilPersonnel', 'accueilBIM': 'accueilBIM', 'accueilBIMPortative': 'accueilBIMPortative', 'accueilLSF': 'accueilLSF', 'accueilST': 'accueilST', 'accueilAideAudition': 'accueilAideAudition', 'accueilPrestations': 'accueilPrestations', 'sanitairesERP': 'sanitairesERP', 'sanitairesAdaptes': 'sanitairesAdaptes', 'photo': 'photo', });
lyr_Perimetre_CNIG_3.set('fieldAliases', {'id': 'id', 'ID_1': 'ID_1', 'Nom': 'Nom', });
lyr_Perimetre_PAVE_4.set('fieldAliases', {'id': 'id', });
lyr_STATIONNEMENT_PMR_5.set('fieldAliases', {'fid': 'fid', 'idstationnement': 'idstationnement', 'typeStationnement': 'typeStationnement', 'etatRevetement': 'etatRevetement', 'typeSol': 'typeSol', 'largeurStat': 'largeurStat', 'longueurStat': 'longueurStat', 'bandLatSecurite': 'bandLatSecurite', 'signalPMR': 'signalPMR', 'marquageSol': 'marquageSol', 'pente': 'pente', 'devers': 'devers', 'surLongueur': 'surLongueur', 'photo': 'photo', 'collecte faite': 'collecte faite', });
lyr_largeurs_6.set('fieldAliases', {'fid': 'fid', 'from': 'from', 'to': 'to', 'distance': 'distance', 'typetroncon': 'typetroncon', 'pente': 'pente', 'devers': 'devers', 'idtroncon': 'idtroncon', 'idequip': 'idequip', 'photo': 'photo', 'idtraversee': 'idtraversee', 'feuPietons': 'feuPietons', 'aideSonore': 'aideSonore', 'repereLineaire': 'repereLineaire', 'presencellot': 'presencellot', 'chausseeBombee': 'chausseeBombee', 'covisibilite': 'covisibilite', 'TRAVERSEE': 'TRAVERSEE', 'RAMPE': 'RAMPE', 'idrampe': 'idrampe', 'largeurUtile': 'largeurUtile', 'mainCourante': 'mainCourante', 'distPalierRepos': 'distPalierRepos', 'aireRotation': 'aireRotation', 'chasseRoue': 'chasseRoue', 'ESCALIER': 'ESCALIER', 'idescalier': 'idescalier', 'dispositifMarche': 'dispositifMarche', 'mainCouranteContinue': 'mainCouranteContinue', 'prolongMainCourante': 'prolongMainCourante', 'nbMarches': 'nbMarches', 'nbVoleeMarches': 'nbVoleeMarches', 'hauteurMarche': 'hauteurMarche', 'giron': 'giron', 'idescalator': 'idescalator', 'detecteur': 'detecteur', 'sens': 'sens', 'TAPIS ROULANT': 'TAPIS ROULANT', 'idtapis': 'idtapis', 'ESCALATOR': 'ESCALATOR', 'QUAI': 'QUAI', 'idquai': 'idquai', 'HauteurQuai': 'HauteurQuai', 'largeurPassage': 'largeurPassage', 'signalisationPorte': 'signalisationPorte', 'diamZoneManoeuvre': 'diamZoneManoeuvre', 'idcirculation': 'idcirculation', 'typesol': 'typesol', 'couvert': 'couvert', 'Genre de Troncon': 'Genre de Troncon', 'Itineraire': 'Itineraire', 'typetronconcodage': 'typetronconcodage', 'typepassage': 'typepassage', ' transition ': ' transition ', 'bandesBlanches': 'bandesBlanches', 'voiesTraversées ': 'voiesTraversées ', 'masqueCovisibilite': 'masqueCovisibilite', 'statutVoie': 'statutVoie', 'etatRevetement': 'etatRevetement', 'marquageSol': 'marquageSol', 'eclairage': 'eclairage', 'dispositifVigilance': 'dispositifVigilance', 'contrasteVisuel': 'contrasteVisuel', 'collecte faite': 'collecte faite', 'Commentaire': 'Commentaire', 'layer': 'layer', 'path': 'path', });
lyr_Pentesetdvers_7.set('fieldAliases', {'fid': 'fid', 'from': 'from', 'to': 'to', 'distance': 'distance', 'typetroncon': 'typetroncon', 'pente': 'pente', 'devers': 'devers', 'idtroncon': 'idtroncon', 'idequip': 'idequip', 'photo': 'photo', 'idtraversee': 'idtraversee', 'feuPietons': 'feuPietons', 'aideSonore': 'aideSonore', 'repereLineaire': 'repereLineaire', 'presencellot': 'presencellot', 'chausseeBombee': 'chausseeBombee', 'covisibilite': 'covisibilite', 'TRAVERSEE': 'TRAVERSEE', 'RAMPE': 'RAMPE', 'idrampe': 'idrampe', 'largeurUtile': 'largeurUtile', 'mainCourante': 'mainCourante', 'distPalierRepos': 'distPalierRepos', 'aireRotation': 'aireRotation', 'chasseRoue': 'chasseRoue', 'ESCALIER': 'ESCALIER', 'idescalier': 'idescalier', 'dispositifMarche': 'dispositifMarche', 'mainCouranteContinue': 'mainCouranteContinue', 'prolongMainCourante': 'prolongMainCourante', 'nbMarches': 'nbMarches', 'nbVoleeMarches': 'nbVoleeMarches', 'hauteurMarche': 'hauteurMarche', 'giron': 'giron', 'idescalator': 'idescalator', 'detecteur': 'detecteur', 'sens': 'sens', 'TAPIS ROULANT': 'TAPIS ROULANT', 'idtapis': 'idtapis', 'ESCALATOR': 'ESCALATOR', 'QUAI': 'QUAI', 'idquai': 'idquai', 'HauteurQuai': 'HauteurQuai', 'largeurPassage': 'largeurPassage', 'signalisationPorte': 'signalisationPorte', 'diamZoneManoeuvre': 'diamZoneManoeuvre', 'idcirculation': 'idcirculation', 'typesol': 'typesol', 'couvert': 'couvert', 'Genre de Troncon': 'Genre de Troncon', 'Itineraire': 'Itineraire', 'typetronconcodage': 'typetronconcodage', 'typepassage': 'typepassage', ' transition ': ' transition ', 'bandesBlanches': 'bandesBlanches', 'voiesTraversées ': 'voiesTraversées ', 'masqueCovisibilite': 'masqueCovisibilite', 'statutVoie': 'statutVoie', 'etatRevetement': 'etatRevetement', 'marquageSol': 'marquageSol', 'eclairage': 'eclairage', 'dispositifVigilance': 'dispositifVigilance', 'contrasteVisuel': 'contrasteVisuel', 'collecte faite': 'collecte faite', 'Commentaire': 'Commentaire', 'layer': 'layer', 'path': 'path', });
lyr_TRONCON_CHEMINEMENT_8.set('fieldAliases', {'fid': 'fid', 'from': 'from', 'to': 'to', 'distance': 'distance', 'typetroncon': 'typetroncon', 'pente': 'pente', 'devers': 'devers', 'idtroncon': 'idtroncon', 'idequip': 'idequip', 'photo': 'photo', 'idtraversee': 'idtraversee', 'feuPietons': 'feuPietons', 'aideSonore': 'aideSonore', 'repereLineaire': 'repereLineaire', 'presencellot': 'presencellot', 'chausseeBombee': 'chausseeBombee', 'covisibilite': 'covisibilite', 'TRAVERSEE': 'TRAVERSEE', 'RAMPE': 'RAMPE', 'idrampe': 'idrampe', 'largeurUtile': 'largeurUtile', 'mainCourante': 'mainCourante', 'distPalierRepos': 'distPalierRepos', 'aireRotation': 'aireRotation', 'chasseRoue': 'chasseRoue', 'ESCALIER': 'ESCALIER', 'idescalier': 'idescalier', 'dispositifMarche': 'dispositifMarche', 'mainCouranteContinue': 'mainCouranteContinue', 'prolongMainCourante': 'prolongMainCourante', 'nbMarches': 'nbMarches', 'nbVoleeMarches': 'nbVoleeMarches', 'hauteurMarche': 'hauteurMarche', 'giron': 'giron', 'idescalator': 'idescalator', 'detecteur': 'detecteur', 'sens': 'sens', 'TAPIS ROULANT': 'TAPIS ROULANT', 'idtapis': 'idtapis', 'ESCALATOR': 'ESCALATOR', 'QUAI': 'QUAI', 'idquai': 'idquai', 'HauteurQuai': 'HauteurQuai', 'largeurPassage': 'largeurPassage', 'signalisationPorte': 'signalisationPorte', 'diamZoneManoeuvre': 'diamZoneManoeuvre', 'idcirculation': 'idcirculation', 'typesol': 'typesol', 'couvert': 'couvert', 'Genre de Troncon': 'Genre de Troncon', 'Itineraire': 'Itineraire', 'typetronconcodage': 'typetronconcodage', 'typepassage': 'typepassage', ' transition ': ' transition ', 'bandesBlanches': 'bandesBlanches', 'voiesTraversées ': 'voiesTraversées ', 'masqueCovisibilite': 'masqueCovisibilite', 'statutVoie': 'statutVoie', 'etatRevetement': 'etatRevetement', 'marquageSol': 'marquageSol', 'eclairage': 'eclairage', 'dispositifVigilance': 'dispositifVigilance', 'contrasteVisuel': 'contrasteVisuel', 'collecte faite': 'collecte faite', 'Commentaire': 'Commentaire', 'layer': 'layer', 'path': 'path', });
lyr_NOEUD_CHEMINEMENT_9.set('fieldAliases', {'fid': 'fid', 'idnoeud': 'idnoeud', 'altitude': 'altitude', 'bandeEveilVigilance': 'bandeEveilVigilance', 'hauteurRessaut': 'hauteurRessaut', 'abaissePente': 'abaissePente', 'abaisseTrottoir': 'abaisseTrottoir', 'controleBEV': 'controleBEV', 'bandeInterception': 'bandeInterception', 'idequip': 'idequip', 'idstationnement': 'idstationnement', 'photo': 'photo', 'EQUIPEMENT_ACCES': 'EQUIPEMENT_ACCES', 'identree': 'identree', 'adresse': 'adresse', 'typeEntree': 'typeEntree', 'rampe': 'rampe', 'rampeSonnette': 'rampeSonnette', 'ascenseur': 'ascenseur', 'escalierNBMarche': 'escalierNBMarche', 'escalierMainCourante': 'escalierMainCourante', 'reperabilite': 'reperabilite', 'reperageELtsVitres': 'reperageELtsVitres', 'signaletique': 'signaletique', 'largeurPassage': 'largeurPassage', 'controleAcces': 'controleAcces', 'entreeAccueilVisible': 'entreeAccueilVisible', 'typePorte': 'typePorte', 'espaceManoeuvre': 'espaceManoeuvre', 'largManoeuvreExt': 'largManoeuvreExt', 'longManoeuvreExt': 'longManoeuvreExt', 'largManoeuvreInt': 'largManoeuvreInt', 'longManoeuvreInt': 'longManoeuvreInt', 'idERP': 'idERP', 'idpassageselectif': 'idpassageselectif', 'passageMecanique': 'passageMecanique', 'largeurUtile': 'largeurUtile', 'profondeur': 'profondeur', 'contrasteVisuel': 'contrasteVisuel', 'idascenseur': 'idascenseur', 'diamManoeuvreFauteuil': 'diamManoeuvreFauteuil', 'diamZoneManoeuvre': 'diamZoneManoeuvre', 'longueurCabine': 'longueurCabine', 'signalSonor': 'signalSonor', 'miroir': 'miroir', 'eclairage': 'eclairage', 'voyantAlerte': 'voyantAlerte', 'typeOuverture': 'typeOuverture', 'hauteurMainCourante ': 'hauteurMainCourante ', 'boutonsEnrelief': 'boutonsEnrelief', 'maincourante': 'maincourante', 'idelevateur': 'idelevateur', 'largeurPlateforme': 'largeurPlateforme', 'longueurPlateforme': 'longueurPlateforme', 'chargeMax': 'chargeMax', 'accompagnateur': 'accompagnateur', 'utilisableAutonomie': 'utilisableAutonomie', 'etatRevetement': 'etatRevetement', 'largeurPlateformeElevateur': 'largeurPlateformeElevateur', 'longeurPlateformeElevateur': 'longeurPlateformeElevateur', 'annonceSonore': 'annonceSonore', 'signalEtage': 'signalEtage', 'largeurCabine': 'largeurCabine', 'boucleInducMagnet': 'boucleInducMagnet', 'autrePorteSortie ': 'autrePorteSortie ', 'collecte faite': 'collecte faite', 'commentaire': 'commentaire', 'layer': 'layer', 'path': 'path', });
lyr_Obstacles_10.set('fieldAliases', {'fid': 'fid', 'idobstacle': 'idobstacle', 'typeObstacle': 'typeObstacle', 'largeurUtile': 'largeurUtile', 'longueurObstacle': 'longueurObstacle', 'rappelObstacle': 'rappelObstacle', 'reperabiliteVisuelle': 'reperabiliteVisuelle', 'photo': 'photo', 'date': 'date', 'audio ': 'audio ', 'video ': 'video ', 'idTroncon/OBS': 'idTroncon/OBS', 'typeObstacleCodage': 'typeObstacleCodage', 'commentaire': 'commentaire', 'ID': 'ID', 'layer': 'layer', 'path': 'path', 'positionObstacle': 'positionObstacle', });
lyr_ERP_2.set('fieldImages', {'fid': 'TextEdit', 'idERP': 'TextEdit', 'nom': 'TextEdit', 'adresse': 'TextEdit', 'codePostal': 'TextEdit', 'insee': 'TextEdit', 'telephone': 'TextEdit', 'siteweb': 'TextEdit', 'siret': 'TextEdit', 'erpCategorie': 'ValueMap', 'erpType': 'ValueMap', 'erpActivite': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'dateMiseAJour': 'DateTime', 'sourceMiseAJour': 'TextEdit', 'stationnementERP': 'CheckBox', 'stationnementPMR': 'Range', 'accueilPersonnel': 'ValueMap', 'accueilBIM': 'CheckBox', 'accueilBIMPortative': 'CheckBox', 'accueilLSF': 'CheckBox', 'accueilST': 'CheckBox', 'accueilAideAudition': 'CheckBox', 'accueilPrestations': 'TextEdit', 'sanitairesERP': 'CheckBox', 'sanitairesAdaptes': 'Range', 'photo': 'ExternalResource', });
lyr_Perimetre_CNIG_3.set('fieldImages', {'id': 'TextEdit', 'ID_1': 'TextEdit', 'Nom': 'TextEdit', });
lyr_Perimetre_PAVE_4.set('fieldImages', {'id': 'TextEdit', });
lyr_STATIONNEMENT_PMR_5.set('fieldImages', {'fid': 'TextEdit', 'idstationnement': 'TextEdit', 'typeStationnement': 'ValueMap', 'etatRevetement': 'ValueMap', 'typeSol': 'ValueMap', 'largeurStat': 'TextEdit', 'longueurStat': 'TextEdit', 'bandLatSecurite': 'CheckBox', 'signalPMR': 'CheckBox', 'marquageSol': 'CheckBox', 'pente': 'Range', 'devers': 'Range', 'surLongueur': 'TextEdit', 'photo': 'ExternalResource', 'collecte faite': '', });
lyr_largeurs_6.set('fieldImages', {'fid': 'TextEdit', 'from': 'TextEdit', 'to': 'TextEdit', 'distance': 'Range', 'typetroncon': 'ValueMap', 'pente': 'TextEdit', 'devers': 'TextEdit', 'idtroncon': 'TextEdit', 'idequip': 'TextEdit', 'photo': 'ExternalResource', 'idtraversee': 'Hidden', 'feuPietons': 'CheckBox', 'aideSonore': 'ValueMap', 'repereLineaire': 'ValueMap', 'presencellot': 'CheckBox', 'chausseeBombee': 'CheckBox', 'covisibilite': 'ValueMap', 'TRAVERSEE': 'Hidden', 'RAMPE': 'TextEdit', 'idrampe': 'Hidden', 'largeurUtile': 'TextEdit', 'mainCourante': 'ValueMap', 'distPalierRepos': 'TextEdit', 'aireRotation': 'ValueMap', 'chasseRoue': 'ValueMap', 'ESCALIER': 'CheckBox', 'idescalier': 'Hidden', 'dispositifMarche': 'TextEdit', 'mainCouranteContinue': 'ValueMap', 'prolongMainCourante': 'ValueMap', 'nbMarches': 'TextEdit', 'nbVoleeMarches': 'TextEdit', 'hauteurMarche': 'TextEdit', 'giron': 'TextEdit', 'idescalator': 'Hidden', 'detecteur': 'CheckBox', 'sens': 'ValueMap', 'TAPIS ROULANT': 'CheckBox', 'idtapis': 'Hidden', 'ESCALATOR': 'CheckBox', 'QUAI': 'CheckBox', 'idquai': 'Hidden', 'HauteurQuai': 'TextEdit', 'largeurPassage': 'TextEdit', 'signalisationPorte': 'ValueMap', 'diamZoneManoeuvre': 'TextEdit', 'idcirculation': 'Hidden', 'typesol': 'ValueMap', 'couvert': 'ValueMap', 'Genre de Troncon': 'ValueMap', 'Itineraire': 'Hidden', 'typetronconcodage': 'Hidden', 'typepassage': 'ValueMap', ' transition ': 'ValueMap', 'bandesBlanches': 'CheckBox', 'voiesTraversées ': 'TextEdit', 'masqueCovisibilite': 'ValueMap', 'statutVoie': 'ValueMap', 'etatRevetement': 'ValueMap', 'marquageSol': 'ValueMap', 'eclairage': 'ValueMap', 'dispositifVigilance': 'ValueMap', 'contrasteVisuel': 'ValueMap', 'collecte faite': 'CheckBox', 'Commentaire': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Pentesetdvers_7.set('fieldImages', {'fid': 'TextEdit', 'from': 'TextEdit', 'to': 'TextEdit', 'distance': 'Range', 'typetroncon': 'ValueMap', 'pente': 'TextEdit', 'devers': 'TextEdit', 'idtroncon': 'TextEdit', 'idequip': 'TextEdit', 'photo': 'ExternalResource', 'idtraversee': 'Hidden', 'feuPietons': 'CheckBox', 'aideSonore': 'ValueMap', 'repereLineaire': 'ValueMap', 'presencellot': 'CheckBox', 'chausseeBombee': 'CheckBox', 'covisibilite': 'ValueMap', 'TRAVERSEE': 'Hidden', 'RAMPE': 'TextEdit', 'idrampe': 'Hidden', 'largeurUtile': 'TextEdit', 'mainCourante': 'ValueMap', 'distPalierRepos': 'TextEdit', 'aireRotation': 'ValueMap', 'chasseRoue': 'ValueMap', 'ESCALIER': 'CheckBox', 'idescalier': 'Hidden', 'dispositifMarche': 'TextEdit', 'mainCouranteContinue': 'ValueMap', 'prolongMainCourante': 'ValueMap', 'nbMarches': 'TextEdit', 'nbVoleeMarches': 'TextEdit', 'hauteurMarche': 'TextEdit', 'giron': 'TextEdit', 'idescalator': 'Hidden', 'detecteur': 'CheckBox', 'sens': 'ValueMap', 'TAPIS ROULANT': 'CheckBox', 'idtapis': 'Hidden', 'ESCALATOR': 'CheckBox', 'QUAI': 'CheckBox', 'idquai': 'Hidden', 'HauteurQuai': 'TextEdit', 'largeurPassage': 'TextEdit', 'signalisationPorte': 'ValueMap', 'diamZoneManoeuvre': 'TextEdit', 'idcirculation': 'Hidden', 'typesol': 'ValueMap', 'couvert': 'ValueMap', 'Genre de Troncon': 'ValueMap', 'Itineraire': 'Hidden', 'typetronconcodage': 'Hidden', 'typepassage': 'ValueMap', ' transition ': 'ValueMap', 'bandesBlanches': 'CheckBox', 'voiesTraversées ': 'TextEdit', 'masqueCovisibilite': 'ValueMap', 'statutVoie': 'ValueMap', 'etatRevetement': 'ValueMap', 'marquageSol': 'ValueMap', 'eclairage': 'ValueMap', 'dispositifVigilance': 'ValueMap', 'contrasteVisuel': 'ValueMap', 'collecte faite': 'CheckBox', 'Commentaire': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_TRONCON_CHEMINEMENT_8.set('fieldImages', {'fid': 'TextEdit', 'from': 'TextEdit', 'to': 'TextEdit', 'distance': 'Range', 'typetroncon': 'ValueMap', 'pente': 'TextEdit', 'devers': 'TextEdit', 'idtroncon': 'TextEdit', 'idequip': 'TextEdit', 'photo': 'ExternalResource', 'idtraversee': 'Hidden', 'feuPietons': 'CheckBox', 'aideSonore': 'ValueMap', 'repereLineaire': 'ValueMap', 'presencellot': 'CheckBox', 'chausseeBombee': 'CheckBox', 'covisibilite': 'ValueMap', 'TRAVERSEE': 'Hidden', 'RAMPE': 'TextEdit', 'idrampe': 'Hidden', 'largeurUtile': 'TextEdit', 'mainCourante': 'ValueMap', 'distPalierRepos': 'TextEdit', 'aireRotation': 'ValueMap', 'chasseRoue': 'ValueMap', 'ESCALIER': 'CheckBox', 'idescalier': 'Hidden', 'dispositifMarche': 'TextEdit', 'mainCouranteContinue': 'ValueMap', 'prolongMainCourante': 'ValueMap', 'nbMarches': 'TextEdit', 'nbVoleeMarches': 'TextEdit', 'hauteurMarche': 'TextEdit', 'giron': 'TextEdit', 'idescalator': 'Hidden', 'detecteur': 'CheckBox', 'sens': 'ValueMap', 'TAPIS ROULANT': 'CheckBox', 'idtapis': 'Hidden', 'ESCALATOR': 'CheckBox', 'QUAI': 'CheckBox', 'idquai': 'Hidden', 'HauteurQuai': 'TextEdit', 'largeurPassage': 'TextEdit', 'signalisationPorte': 'ValueMap', 'diamZoneManoeuvre': 'TextEdit', 'idcirculation': 'Hidden', 'typesol': 'ValueMap', 'couvert': 'ValueMap', 'Genre de Troncon': 'ValueMap', 'Itineraire': 'Hidden', 'typetronconcodage': 'Hidden', 'typepassage': 'ValueMap', ' transition ': 'ValueMap', 'bandesBlanches': 'CheckBox', 'voiesTraversées ': 'TextEdit', 'masqueCovisibilite': 'ValueMap', 'statutVoie': 'ValueMap', 'etatRevetement': 'ValueMap', 'marquageSol': 'ValueMap', 'eclairage': 'ValueMap', 'dispositifVigilance': 'ValueMap', 'contrasteVisuel': 'ValueMap', 'collecte faite': 'CheckBox', 'Commentaire': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_NOEUD_CHEMINEMENT_9.set('fieldImages', {'fid': 'UniqueValues', 'idnoeud': 'TextEdit', 'altitude': 'TextEdit', 'bandeEveilVigilance': 'ValueMap', 'hauteurRessaut': 'TextEdit', 'abaissePente': 'TextEdit', 'abaisseTrottoir': 'TextEdit', 'controleBEV': 'ValueMap', 'bandeInterception': 'CheckBox', 'idequip': 'TextEdit', 'idstationnement': 'Hidden', 'photo': 'ExternalResource', 'EQUIPEMENT_ACCES': 'ValueMap', 'identree': 'TextEdit', 'adresse': 'TextEdit', 'typeEntree': 'ValueMap', 'rampe': 'ValueMap', 'rampeSonnette': 'CheckBox', 'ascenseur': 'CheckBox', 'escalierNBMarche': 'Range', 'escalierMainCourante': 'ValueMap', 'reperabilite': 'CheckBox', 'reperageELtsVitres': 'CheckBox', 'signaletique': 'CheckBox', 'largeurPassage': 'TextEdit', 'controleAcces': 'ValueMap', 'entreeAccueilVisible': 'CheckBox', 'typePorte': 'ValueMap', 'espaceManoeuvre': 'ValueMap', 'largManoeuvreExt': 'TextEdit', 'longManoeuvreExt': 'TextEdit', 'largManoeuvreInt': 'TextEdit', 'longManoeuvreInt': 'TextEdit', 'idERP': 'Hidden', 'idpassageselectif': 'TextEdit', 'passageMecanique': 'CheckBox', 'largeurUtile': 'TextEdit', 'profondeur': 'TextEdit', 'contrasteVisuel': 'CheckBox', 'idascenseur': 'TextEdit', 'diamManoeuvreFauteuil': 'TextEdit', 'diamZoneManoeuvre': 'TextEdit', 'longueurCabine': 'TextEdit', 'signalSonor': 'ValueMap', 'miroir': 'CheckBox', 'eclairage': 'TextEdit', 'voyantAlerte': 'ValueMap', 'typeOuverture': 'ValueMap', 'hauteurMainCourante ': 'TextEdit', 'boutonsEnrelief': 'ValueMap', 'maincourante': 'ValueMap', 'idelevateur': 'TextEdit', 'largeurPlateforme': 'TextEdit', 'longueurPlateforme': 'TextEdit', 'chargeMax': 'Range', 'accompagnateur': 'ValueMap', 'utilisableAutonomie': 'CheckBox', 'etatRevetement': 'ValueMap', 'largeurPlateformeElevateur': 'TextEdit', 'longeurPlateformeElevateur': 'TextEdit', 'annonceSonore': 'CheckBox', 'signalEtage': 'ValueMap', 'largeurCabine': 'TextEdit', 'boucleInducMagnet': 'CheckBox', 'autrePorteSortie ': 'ValueMap', 'collecte faite': 'CheckBox', 'commentaire': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Obstacles_10.set('fieldImages', {'fid': 'Range', 'idobstacle': 'TextEdit', 'typeObstacle': 'ValueMap', 'largeurUtile': 'TextEdit', 'longueurObstacle': 'TextEdit', 'rappelObstacle': 'ValueMap', 'reperabiliteVisuelle': 'CheckBox', 'photo': 'ExternalResource', 'date': 'DateTime', 'audio ': 'TextEdit', 'video ': 'Hidden', 'idTroncon/OBS': 'Hidden', 'typeObstacleCodage': 'Hidden', 'commentaire': 'TextEdit', 'ID': 'Range', 'layer': 'Hidden', 'path': 'Hidden', 'positionObstacle': 'ValueMap', });
lyr_ERP_2.set('fieldLabels', {'fid': 'no label', 'idERP': 'no label', 'nom': 'no label', 'adresse': 'inline label', 'codePostal': 'inline label', 'insee': 'inline label', 'telephone': 'no label', 'siteweb': 'no label', 'siret': 'no label', 'erpCategorie': 'no label', 'erpType': 'no label', 'erpActivite': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'dateMiseAJour': 'no label', 'sourceMiseAJour': 'no label', 'stationnementERP': 'no label', 'stationnementPMR': 'no label', 'accueilPersonnel': 'no label', 'accueilBIM': 'no label', 'accueilBIMPortative': 'no label', 'accueilLSF': 'no label', 'accueilST': 'no label', 'accueilAideAudition': 'no label', 'accueilPrestations': 'no label', 'sanitairesERP': 'no label', 'sanitairesAdaptes': 'no label', 'photo': 'no label', });
lyr_Perimetre_CNIG_3.set('fieldLabels', {'id': 'no label', 'ID_1': 'no label', 'Nom': 'no label', });
lyr_Perimetre_PAVE_4.set('fieldLabels', {'id': 'no label', });
lyr_STATIONNEMENT_PMR_5.set('fieldLabels', {'fid': 'no label', 'idstationnement': 'inline label', 'typeStationnement': 'no label', 'etatRevetement': 'no label', 'typeSol': 'inline label', 'largeurStat': 'no label', 'longueurStat': 'no label', 'bandLatSecurite': 'no label', 'signalPMR': 'no label', 'marquageSol': 'no label', 'pente': 'no label', 'devers': 'no label', 'surLongueur': 'no label', 'photo': 'no label', 'collecte faite': 'no label', });
lyr_largeurs_6.set('fieldLabels', {'fid': 'no label', 'from': 'no label', 'to': 'no label', 'distance': 'no label', 'typetroncon': 'inline label', 'pente': 'no label', 'devers': 'no label', 'idtroncon': 'no label', 'idequip': 'no label', 'photo': 'no label', 'feuPietons': 'no label', 'aideSonore': 'no label', 'repereLineaire': 'no label', 'presencellot': 'no label', 'chausseeBombee': 'no label', 'covisibilite': 'no label', 'RAMPE': 'no label', 'largeurUtile': 'inline label', 'mainCourante': 'no label', 'distPalierRepos': 'no label', 'aireRotation': 'no label', 'chasseRoue': 'no label', 'ESCALIER': 'no label', 'dispositifMarche': 'no label', 'mainCouranteContinue': 'no label', 'prolongMainCourante': 'no label', 'nbMarches': 'no label', 'nbVoleeMarches': 'no label', 'hauteurMarche': 'no label', 'giron': 'no label', 'detecteur': 'no label', 'sens': 'no label', 'TAPIS ROULANT': 'no label', 'ESCALATOR': 'no label', 'QUAI': 'no label', 'HauteurQuai': 'no label', 'largeurPassage': 'no label', 'signalisationPorte': 'no label', 'diamZoneManoeuvre': 'no label', 'typesol': 'no label', 'couvert': 'no label', 'Genre de Troncon': 'inline label', 'typepassage': 'no label', ' transition ': 'no label', 'bandesBlanches': 'no label', 'voiesTraversées ': 'no label', 'masqueCovisibilite': 'no label', 'statutVoie': 'no label', 'etatRevetement': 'no label', 'marquageSol': 'no label', 'eclairage': 'no label', 'dispositifVigilance': 'no label', 'contrasteVisuel': 'no label', 'collecte faite': 'no label', 'Commentaire': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Pentesetdvers_7.set('fieldLabels', {'fid': 'no label', 'from': 'no label', 'to': 'no label', 'distance': 'no label', 'typetroncon': 'inline label', 'pente': 'inline label', 'devers': 'inline label', 'idtroncon': 'no label', 'idequip': 'no label', 'photo': 'no label', 'feuPietons': 'no label', 'aideSonore': 'no label', 'repereLineaire': 'no label', 'presencellot': 'no label', 'chausseeBombee': 'no label', 'covisibilite': 'no label', 'RAMPE': 'no label', 'largeurUtile': 'no label', 'mainCourante': 'no label', 'distPalierRepos': 'no label', 'aireRotation': 'no label', 'chasseRoue': 'no label', 'ESCALIER': 'no label', 'dispositifMarche': 'no label', 'mainCouranteContinue': 'no label', 'prolongMainCourante': 'no label', 'nbMarches': 'no label', 'nbVoleeMarches': 'no label', 'hauteurMarche': 'no label', 'giron': 'no label', 'detecteur': 'no label', 'sens': 'no label', 'TAPIS ROULANT': 'no label', 'ESCALATOR': 'no label', 'QUAI': 'no label', 'HauteurQuai': 'no label', 'largeurPassage': 'no label', 'signalisationPorte': 'no label', 'diamZoneManoeuvre': 'no label', 'typesol': 'no label', 'couvert': 'no label', 'Genre de Troncon': 'inline label', 'typepassage': 'no label', ' transition ': 'no label', 'bandesBlanches': 'no label', 'voiesTraversées ': 'no label', 'masqueCovisibilite': 'no label', 'statutVoie': 'no label', 'etatRevetement': 'no label', 'marquageSol': 'no label', 'eclairage': 'no label', 'dispositifVigilance': 'no label', 'contrasteVisuel': 'no label', 'collecte faite': 'no label', 'Commentaire': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_TRONCON_CHEMINEMENT_8.set('fieldLabels', {'fid': 'no label', 'from': 'inline label', 'to': 'inline label', 'distance': 'inline label', 'typetroncon': 'inline label', 'pente': 'inline label', 'devers': 'inline label', 'idtroncon': 'no label', 'idequip': 'no label', 'photo': 'no label', 'feuPietons': 'no label', 'aideSonore': 'no label', 'repereLineaire': 'no label', 'presencellot': 'no label', 'chausseeBombee': 'no label', 'covisibilite': 'no label', 'RAMPE': 'no label', 'largeurUtile': 'no label', 'mainCourante': 'no label', 'distPalierRepos': 'no label', 'aireRotation': 'no label', 'chasseRoue': 'no label', 'ESCALIER': 'no label', 'dispositifMarche': 'no label', 'mainCouranteContinue': 'no label', 'prolongMainCourante': 'no label', 'nbMarches': 'no label', 'nbVoleeMarches': 'no label', 'hauteurMarche': 'no label', 'giron': 'no label', 'detecteur': 'no label', 'sens': 'no label', 'TAPIS ROULANT': 'no label', 'ESCALATOR': 'no label', 'QUAI': 'no label', 'HauteurQuai': 'no label', 'largeurPassage': 'no label', 'signalisationPorte': 'no label', 'diamZoneManoeuvre': 'no label', 'typesol': 'no label', 'couvert': 'no label', 'Genre de Troncon': 'inline label', 'typepassage': 'no label', ' transition ': 'no label', 'bandesBlanches': 'no label', 'voiesTraversées ': 'no label', 'masqueCovisibilite': 'no label', 'statutVoie': 'no label', 'etatRevetement': 'no label', 'marquageSol': 'no label', 'eclairage': 'no label', 'dispositifVigilance': 'no label', 'contrasteVisuel': 'no label', 'collecte faite': 'no label', 'Commentaire': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_NOEUD_CHEMINEMENT_9.set('fieldLabels', {'fid': 'no label', 'idnoeud': 'inline label', 'altitude': 'no label', 'bandeEveilVigilance': 'no label', 'hauteurRessaut': 'no label', 'abaissePente': 'no label', 'abaisseTrottoir': 'no label', 'controleBEV': 'no label', 'bandeInterception': 'no label', 'idequip': 'no label', 'photo': 'no label', 'EQUIPEMENT_ACCES': 'inline label', 'identree': 'no label', 'adresse': 'no label', 'typeEntree': 'no label', 'rampe': 'no label', 'rampeSonnette': 'no label', 'ascenseur': 'no label', 'escalierNBMarche': 'no label', 'escalierMainCourante': 'no label', 'reperabilite': 'no label', 'reperageELtsVitres': 'no label', 'signaletique': 'no label', 'largeurPassage': 'no label', 'controleAcces': 'no label', 'entreeAccueilVisible': 'no label', 'typePorte': 'no label', 'espaceManoeuvre': 'no label', 'largManoeuvreExt': 'no label', 'longManoeuvreExt': 'no label', 'largManoeuvreInt': 'no label', 'longManoeuvreInt': 'no label', 'idpassageselectif': 'no label', 'passageMecanique': 'no label', 'largeurUtile': 'no label', 'profondeur': 'no label', 'contrasteVisuel': 'no label', 'idascenseur': 'no label', 'diamManoeuvreFauteuil': 'no label', 'diamZoneManoeuvre': 'no label', 'longueurCabine': 'no label', 'signalSonor': 'no label', 'miroir': 'no label', 'eclairage': 'no label', 'voyantAlerte': 'no label', 'typeOuverture': 'no label', 'hauteurMainCourante ': 'no label', 'boutonsEnrelief': 'no label', 'maincourante': 'no label', 'idelevateur': 'no label', 'largeurPlateforme': 'no label', 'longueurPlateforme': 'no label', 'chargeMax': 'no label', 'accompagnateur': 'no label', 'utilisableAutonomie': 'no label', 'etatRevetement': 'no label', 'largeurPlateformeElevateur': 'no label', 'longeurPlateformeElevateur': 'no label', 'annonceSonore': 'no label', 'signalEtage': 'no label', 'largeurCabine': 'no label', 'boucleInducMagnet': 'no label', 'autrePorteSortie ': 'no label', 'collecte faite': 'no label', 'commentaire': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Obstacles_10.set('fieldLabels', {'fid': 'no label', 'idobstacle': 'inline label', 'typeObstacle': 'inline label', 'largeurUtile': 'inline label', 'longueurObstacle': 'inline label', 'rappelObstacle': 'no label', 'reperabiliteVisuelle': 'no label', 'photo': 'inline label', 'date': 'no label', 'audio ': 'no label', 'commentaire': 'no label', 'ID': 'no label', 'positionObstacle': 'no label', });
lyr_Obstacles_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});