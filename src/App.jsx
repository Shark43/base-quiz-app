import React, { useState, useEffect } from 'react';
import { Typography, Button } from '@material-ui/core';
import './App.css';
import QuestionContainer from './QuestionContainer';
import LinearWithValueLabel from './LinearWithValueLabel';

const cap3 = [
  {
      'name' : 'Villaggio di New Lanark',
      'author' : 'Robert Owen',
      'date' : '1818',
      'place' : 'Scozia',
      'context' : 'Citta dellutopia',
      'image' : 'https://www.newlanark.org/images/Watercolour_by_John_Winning_circa_1818.jpg'
  },
  {
      'name' : 'Villaggio di New Armony',
      'author' : 'Robert Owen',
      'date' : '1898',
      'place' : 'Scozia',
      'context' : 'Citta dellutopia',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/New_Harmony%2C_Indiana%2C_por_F._Bates.jpg/800px-New_Harmony%2C_Indiana%2C_por_F._Bates.jpg'
  },
  {
      'name' : 'Villaggio di New Lanark',
      'author' : 'Robert Owen',
      'date' : '1818',
      'place' : 'USA',
      'context' : 'Citta dellutopia',
      'image' : 'https://www.newlanark.org/images/Watercolour_by_John_Winning_circa_1818.jpg'
  },
  {
      'name' : 'Falansterio',
      'author' : 'Fourier',
      'date' : '1830',
      'place' : 'Francia',
      'context' : 'Citta dellutopia',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Phalanstère.jpg'
  },
  {
      'name' : 'Saltaire',
      'author' : 'Salt',
      'date' : '1850',
      'place' : 'Bratford',
      'context' : 'Città industriali',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Saltaire_from_Leeds_and_Liverpool_Canal.jpg'
  },
  {
      'name' : 'Villaggio Krupp',
      'author' : '',
      'date' : '1870',
      'place' : 'Germania',
      'context' : 'Città industriali',
      'image' : 'https://www.researchgate.net/profile/Edgar-Adams/publication/333430478/figure/fig2/AS:763572162408449@1559061198136/Krupp-worker-village-at-Essen-Germany.pbm'
  },
  {
      'name' : 'Villaggio Crespi dAdda',
      'author' : '',
      'date' : '1875',
      'place' : 'Bergamo',
      'context' : 'Città industriali',
      'image' : 'https://www.domusweb.it/content/dam/domusweb/it/architecture/2020/12/04/crespi-dadda/domus_crespi_dadda_7.jpg.foto.rmedium.jpg'
  },
  {
      'name' : 'Villaggio Leumann',
      'author' : '',
      'date' : '1875',
      'place' : 'Torino',
      'context' : 'Città industriali',
      'image' : 'https://www.piemonteitalia.eu/sites/default/files/styles/ingrandimento/public/curiosita/immagini/LEUMANN.jpg?itok=AJMahd8A'
  },
  {
      'name' : 'Piano Haussmann',
      'author' : 'Haussmann',
      'date' : '1850-1870',
      'place' : 'Parigi',
      'context' : 'Progettazione città',
      'image' : 'https://c8.alamy.com/compit/ff7y88/parigi-piano-di-haussmann-nil-piano-di-parigi-francia-c1870-mostrando-georges-eug-ne-boulevard-haussman-sovrapposti-in-nero-pesante-ff7y88.jpg'
  },
  {
      'name' : 'Ringstrasse',
      'author' : 'J. e C. Walker',
      'date' : '1858',
      'place' : 'Vienna',
      'context' : 'Città progettata',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Wien1858.jpg/1200px-Wien1858.jpg'
  },
  {
      'name' : 'Plan Cerdà',
      'author' : 'Cerdà',
      'date' : '1860',
      'place' : 'Barcellona',
      'context' : 'Città progettata',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/PlaCerda1859b.jpg/1200px-PlaCerda1859b.jpg'
  },
  {
      'name' : 'Ciudad Lineal',
      'author' : 'Soria y Mata',
      'date' : '1882',
      'place' : 'Madrid',
      'context' : 'Città progettata',
      'image' : 'https://www.politico.eu/wp-content/uploads/2022/09/28/019-ciudad-lineal-de-madrid1.jpg'
  },
  {
      'name' : 'Three magnets',
      'author' : 'Howard',
      'date' : '1898',
      'place' : 'Inghilterra',
      'context' : 'Precursore città giardino',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/5/55/Howard-three-magnets.png'
  },
  {
      'name' : 'Garden city',
      'author' : 'Howard',
      'date' : '1898',
      'place' : 'Inghilterra',
      'context' : 'Precursore città giardino',
      'image' : 'https://www.reddit.com/media?url=https%3A%2F%2Fi.redd.it%2Fjhgizg0rkij51.png'
  },
];

const cap2 = [
  {
    'name': 'The Grammar of Ornament',
    'author': 'Owen Jones',
    'date': '1856',
    'context': 'Eclettismo',
    'image': 'https://www.meisterdrucke.uk/kunstwerke/1260px/Owen%20Jones%20-%20Moresque%20No%204%20Plate%20XLII%20from%20The%20Grammar%20of%20Ornament%20by%20Owe%20-%20%28MeisterDrucke-222252%29.jpg'
  },
  {
    'name': 'Mercato coperto',
    'author': 'Viollet le Duc',
    'date': '1863',
    'context': 'Gotico',
    'image': 'data:image/jpeg;base64,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'
  },
  {
    'name': "Conjecture sur l'origine",
    'author': "Seroux d'Agincourt",
    'date': '1808',
    'context': 'Classicismo',
    'image': 'https://www.researchgate.net/profile/Francesca-Mattei/publication/306102997/figure/fig2/AS:669388399190018@1536606039043/Jean-Baptiste-Louis-George-Seroux-dAgincourt-Histoire-de-lArt-par-les-Monumens.ppm'
  },
  {
    'name': 'Strawberry Hill',
    'author': 'Horace Walpole',
    'date': '1747',
    'context': 'Eclettismo',
    'image': 'https://www.goticomania.it/wp-content/uploads/2017/01/Strawberry-Hill-galleria.jpg'
  },
  {
    'name': 'St. Giles di Cheadle',
    'author': 'Pugin',
    'date': '1840',
    'context': 'Gotico',
    'image': 'https://i.pinimg.com/originals/b3/41/fc/b341fc1e6a984d8ac821777b4c7033c1.jpg'
  },
  {
    'name': 'Castello di Pierrefonds',
    'author': 'Viollet Le Duc',
    'date': '1857',
    'context': 'Gotico',
    'image': 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Le_Château_de_Pierrefonds.jpg'
  },
  {
    'name': 'Palazzo Redern',
    'author': 'Schinkel',
    'date': '1830',
    'place': 'Berlino',
    'context': 'Gotico',
    'image': 'https://cdn.loquis.com/prod/loquis/pictures/c1127538-e717-49b7-b1cd-ea3776037523.jpg'
  },
  {
    'name': 'Sala da pranzo casa Bagatti Valsecchi',
    'author': '',
    'date': '1880',
    'place': 'Milano',
    'context': 'Gotico',
    'image': 'https://casemuseo.it/wp-content/uploads/2015/06/sala-da-pranzo.jpg'
  },
  {
    'name': 'Gabinetto dantesco casa Poldi Pezzoli',
    'author': '',
    'date': '1856',
    'place': 'Milano',
    'context': 'Gotico',
    'image': 'https://i0.wp.com/blog.versanteripido.it/wp-content/uploads/2021/05/CAMINO-GABINETTO.jpg?ssl=1'
  },
  {
    'name': 'Ospedale di Gallarate',
    'author': 'Camillo Boito',
    'date': '1870',
    'place': 'Milano',
    'context': 'Gotico',
    'image': 'https://www3.varesenews.it/immagini_articoli/201011/dsc_3649_14331.jpg'
  },
  {
    'name': 'Edificio scolastico ex reggia carrarese',
    'author': 'Camillo Boito',
    'date': '1877',
    'place': 'Padova',
    'context': 'Gotico',
    'image': 'https://upload.wikimedia.org/wikipedia/it/9/9f/Scuole_elementari_reggia_carrarese_padova.jpg'
  },
  {
    'name': 'II Vittoriano',
    'author': 'sacconi',
    'date': '1885',
    'place': 'Roma',
    'context': 'Classicismo',
    'image': 'https://vive.cultura.gov.it/_cms/sites/default/files/styles/original/public/el-img-testo/Il_Vittoriano_negli_anni_venti_del_XX_secolo_0.jpg?itok=FFYLe3h9'
  },
  {
    'name': 'Burghtheater',
    'author': 'G. Semper',
    'date': '1875',
    'place': 'Vienna',
    'context': 'Barocco',
    'image': 'https://afar.brightspotcdn.com/dims4/default/a72f571/2147483647/strip/true/crop/728x500+36+0/resize/660x453!/quality/90/?url=https%3A%2F%2Fafar-media-production-web.s3.us-west-2.amazonaws.com%2Fbrightspot%2Fcb%2Ff7%2F9327ebe567f2b660e1349d08711d%2Foriginal-fcceb95c24772e7e18dd7416c7b8d7e8.jpg'
  },
  {
    'name': 'Castello di Falkenstein',
    'author': 'Jank',
    'date': '1883',
    'place': 'Germania',
    'context': 'Tradizione germanica',
    'image': 'https://labavierapertutti.it/wp-content/uploads/2019/07/Falkenstein.2.var2_.jpg'
  },
  {
    'name': 'Crystal Palace',
    'author': 'J. Paxton',
    'date': '1851',
    'place': 'Londra',
    'context': 'Great Exhibition',
    'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Crystal_Palace.PNG/260px-Crystal_Palace.PNG'
  },
  {
    'name': 'Catalogo Thonet',
    'author': 'Thonet',
    'date': '1904',
    'place': 'Austria',
    'context': 'Pionieri produzione industriale',
    'image': 'https://blog.arredasi.it/wp-content/uploads/2017/06/sedie-thonet2.jpg'
  },
  {
    'name': 'porcellana Wedgwood',
    'author': 'Wedgwood',
    'date': '1763',
    'place': 'Inghilterra',
    'context': 'Pionieri produzione industriale',
    'image': 'https://www.picclickimg.com/KMQAAOSwz41k~Y-q/Porcellana-Wedgwood-motivo-samurai-brocca-latte.webp'
  },
  {
    'name': 'Court medievale',
    'author': 'Pugin',
    'date': '1851',
    'place': 'Londra',
    'context': 'Great Exhibition',
    'image': 'data:image/jpeg;base64,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'
  },
  {
    'name': 'Cottage modello per famiglie',
    'author': 'Henry Roberts',
    'date': '1851',
    'place': 'Inghilterra',
    'context': 'Great Exhibition',
    'image': 'https://i.pinimg.com/originals/a4/4b/0e/a44b0ea9441b3c2bed274e3953b631e1.png'
  },
  {
    'name': 'Expo Parigi',
    'author': '',
    'date': '1867',
    'place': 'Parigi',
    'context': 'expo Parigi 1867',
    'image': 'https://c8.alamy.com/compit/b4amca/mostre-esposizione-mondiale-parigi-1-4-1867-31-12-1867-b4amca.jpg'
  },
  {
    'name': 'expo Parigi',
    'author': '',
    'date': '1889',
    'place': 'Parigi',
    'context': 'expo Parigi 1889',
    'image': 'https://c8.alamy.com/compit/g5jwp1/esposizione-di-parigi-1889-vista-aerea-di-parigi-francia-da-un-palloncino-mostrando-la-senna-la-torre-eiffel-e-gli-edifici-dell-exposition-universelle-di-1889-foto-di-alphonse-liebert-1889-g5jwp1.jpg'
  },
  {
    'name': 'biblioteca saint Genevieve',
    'author': 'Labrouste',
    'date': '1840',
    'place': 'Parigi',
    'context': 'Pioniere industrializzazione architettura',
    'image': 'https://cdn.sortiraparis.com/images/80/1467/1015249-la-bibliotheque-sainte-genevieve-au-coeur-du-quartier-latin.jpg'
  },
  {
    'name': 'Biblioteca nazionale',
    'author': 'Labrouste',
    'date': '1855',
    'place': 'Parigi',
    'context': 'Pioniere industrializzazione architettura',
    'image': 'https://www.architecturalrecord.com/ext/resources/Issues/2017/August/close-up/1708-Close-Up-At-Long-Last-Labrouste-01.jpg'
  },
  {
    'name': 'Halles centrales',
    'author': 'Callet',
    'date': '1863',
    'place': 'Parigi',
    'context': 'Pioniere industrializzazione architettura',
    'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Halles_de_Paris%2C_1863.jpg/1024px-Halles_de_Paris%2C_1863.jpg'
  },
  {
    'name': 'Magazzini Au Bon Marche',
    'author': 'G. Eiffel',
    'date': '1876',
    'place': 'Parigi',
    'context': 'Pioniere industrializzazione architettura',
    'image': 'https://r.lvmh-static.com/uploads/2014/10/identite-8-790x1103.jpg'
  },
  {
    'name': 'Galleria Vittorio Emanuele II',
    'author': 'G. Mengoni',
    'date': '1865',
    'place': 'Milano',
    'context': 'Passage',
    'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Brogi%2C_Giacomo_%281822-1881%29_-_n._3837_-_Milano_-_Galleria_Vittorio_Emanuele_-_Architetto_Mengoni.jpg/220px-Brogi%2C_Giacomo_%281822-1881%29_-_n._3837_-_Milano_-_Galleria_Vittorio_Emanuele_-_Architetto_Mengoni.jpg'
  },
  {
    'name': 'stazione St. Pancras',
    'author': 'Barlow e Scott',
    'date': '1862',
    'place': 'Londra',
    'context': 'Stazioni ferroviarie dopo esposizioni',
    'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/St_Pancras_Station.png/259px-St_Pancras_Station.png'
  },
  {
    'name': 'Foreign Office',
    'author': 'Scott',
    'date': '1868',
    'place': 'Londra',
    'context': 'Battle of style',
    'image': 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Foreign_%26_Commonwealth_Office_main_building.jpg'
  },
  {
    'name': "Teatro dell'Opera",
    'author': 'Garnier',
    'date': '1861',
    'place': 'Parigi',
    'context': 'Classicismo',
    'image': 'https://www.parigi.it/images/3-parisoperagarnier-c15308.jpg?v=9be7'
  },
  {
    'name': "Foyer teatro dell'Opera",
    'author': 'Garnier',
    'date': '1861',
    'place': 'Parigi',
    'context': 'Classicismo',
    'image': 'https://c8.alamy.com/compit/bb4hfy/all-interno-del-grand-foyer-del-palais-garnier-il-piu-antico-teatro-dell-opera-di-parigi-francia-bb4hfy.jpg'
  },
  {
    'name': 'Mole Antonelliana',
    'author': 'A. Antonelli',
    'date': '1859',
    'place': 'Torino',
    'context': 'Pragmatismo no battle of styles',
    'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Mole_Antonelliana_in_Turin.jpg/1200px-Mole_Antonelliana_in_Turin.jpg'
  },


];

const cap4 = [
  {
      'name' : 'Brevetto casa ballon frame',
      'author' : '',
      'date' : '',
      'place' : 'USA',
      'context' : 'Costruzioni americane',
      'image' : 'https://lh3.googleusercontent.com/proxy/RD5ie5-nxUVC3XSywAX-nHmfrukDFK-Wzz2RHHpSAN209zZvjEEOZ89q_XCk7vbSsGMkM0zrwI1Cw2EJurpXD1cdoKr4menbNRqlQj_Tz0dTcaHKHKprNk-yfudqtF_7nNq2hAatOeCs'
  },
  {
      'name' : 'Edificio in Canal street',
      'author' : '',
      'date' : '1856',
      'place' : 'New York',
      'context' : 'Primi edifici alti',
      'image' : 'https://images1.loopnet.com/i2/uUfVwT0a5it5znrerP67hv11M7XVrzPOqH3yvAqfg9Y/110/254-260-Canal-St-New-York-NY-Primary-Photo-1-Large.jpg'
  },
  {
      'name' : 'Sede editore Harpers and brothers',
      'author' : 'Bogardus',
      'date' : '1855',
      'place' : 'New York',
      'context' : 'Primi edifici alti',
      'image' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVUdxjs7fcfQWByzUjAuWmEaG0xmZlWOivjQ&usqp=CAU'
  },
  {
      'name' : 'Victorian cottage residence',
      'author' : 'Downing',
      'date' : '1842',
      'place' : 'USA',
      'context' : 'Case vittoriane',
      'image' : 'https://l450v.alamy.com/450v/p5tjhd/na-english-andrew-jackson-downing-italian-style-1850-cottage-residence-book-1850-andrew-jackson-downing-325-charles-dodge-estate-mansion-show-side-influence-2-luther-briggs-p5tjhd.jpg'
  },
  {
      'name' : 'Mappa central park',
      'author' : 'Vaux e Olmsted',
      'date' : '1870',
      'place' : 'New York',
      'context' : 'Park Movement',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/1868_Vaux_%5E_Olmsted_Map_of_Central_Park%2C_New_York_City_-_Geographicus_-_CentralPark-CentralPark-1869.jpg/1200px-1868_Vaux_%5E_Olmsted_Map_of_Central_Park%2C_New_York_City_-_Geographicus_-_CentralPark-CentralPark-1869.jpg'
  },
  {
      'name' : 'Boston public library',
      'author' : 'McKim Mead e White',
      'date' : '1890',
      'place' : 'Boston',
      'context' : 'City beautiful movement',
      'image' : 'https://cdn.britannica.com/32/182932-050-0F6855E5/Boston-Public-Library-McKim-Building-Charles-Follen.jpg'
  },
  {
      'name' : 'First leiter building',
      'author' : 'Jenney',
      'date' : '1880',
      'place' : 'USA',
      'context' : 'Edifici alti chicago',
      'image' : 'https://time.graphics/uploadedFiles/500/4e/21/4e21847f969717719e02c596ed5c4966.jpg'
  },
  {
      'name' : 'Manhattan building',
      'author' : 'Jenney',
      'date' : '1889',
      'place' : 'Chicago',
      'context' : 'Edifici alti chicago',
      'image' : 'https://www.dreamtown.com/assets/img/buildings/main/manhattan-building.jpg'
  },
  {
      'name' : 'Fair building',
      'author' : 'Jenney',
      'date' : '1891',
      'place' : 'Chicago',
      'context' : 'Edifici alti',
      'image' : 'https://time.graphics/uploadedFiles/500/f4/ab/f4abcf5a98482fc7c8920d84105104b6.jpg'
  },
  {
      'name' : 'Monadnok building',
      'author' : 'Burnham e Root',
      'date' : '1891',
      'place' : 'Chicago',
      'context' : 'Edifici alti',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Monadnock.jpg'
  },
  {
      'name' : 'Marhall Fields',
      'author' : 'Richardson',
      'date' : '1885',
      'place' : 'Chicago',
      'context' : 'Edifici alti',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/2/28/Marshall_Field_Warehouse_Store.jpg'
  },
  {
      'name' : 'Auditorium chicago',
      'author' : 'Sullivan e Adler',
      'date' : '1886',
      'place' : 'Chicago',
      'context' : 'Edifici alti',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Auditorium_Building_Chicago_June_30%2C_2012-92.jpg/325px-Auditorium_Building_Chicago_June_30%2C_2012-92.jpg'
  },
  {
      'name' : 'Guaranty Building',
      'author' : 'Sullivan e Adler',
      'date' : '1894',
      'place' : 'New York',
      'context' : 'Edifici alti',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Guaranty_%28Prudential%29_Building%2C_Church_Street_and_Pearl_Street%2C_Buffalo%2C_NY_-_52674539907.jpg/1200px-Guaranty_%28Prudential%29_Building%2C_Church_Street_and_Pearl_Street%2C_Buffalo%2C_NY_-_52674539907.jpg'
  },
  {
      'name' : 'Grand basin',
      'author' : '',
      'date' : '1893',
      'place' : 'Chicago',
      'context' : 'Chicago fair',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/0/06/Looking_West_From_Peristyle%2C_Court_of_Honor_and_Grand_Basin%2C_1893.jpg'
  },
  {
      'name' : 'Masonic temple',
      'author' : 'Burnham',
      'date' : '1890',
      'place' : 'Chicago',
      'context' : 'Edifici alti',
      'image' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbDu4yM_XjByX0CqESQCEfCY6zeS7SfiJfnQ&usqp=CAU'
  },
  {
      'name' : 'Watts sherman house',
      'author' : 'Richardson',
      'date' : '1875',
      'place' : 'USA',
      'context' : 'Shingle style',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/e/e1/William_Watts_Sherman_House_2018.jpg'
  },
  {
      'name' : 'Low house',
      'author' : 'McKim Mead White',
      'date' : '1886',
      'place' : 'Bristol',
      'context' : 'Shingle style',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/LowHouseBristolRI.jpg/640px-LowHouseBristolRI.jpg'
  },
  {
      'name' : 'Casa studio Oak Park',
      'author' : 'Frank Lloyd Wright',
      'date' : '1889',
      'place' : 'Illinois',
      'context' : 'Praire House',
      'image' : 'https://www.viaggiarecongusto.it/wp-content/uploads/2018/01/casa-e-studio-Wright.jpg'
  },
  {
      'name' : 'Winslow house',
      'author' : 'Frank Lloyd Wright',
      'date' : '1893',
      'place' : 'Illinois',
      'context' : '',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/1/1f/William_H._Winslow_House_Front_Facade.jpg'
  },
  {
      'name' : 'Home in a prairie town',
      'author' : '',
      'date' : '1901',
      'place' : 'USA',
      'context' : 'Praire House',
      'image' : 'https://www.researchgate.net/publication/352322046/figure/fig4/AS:11431281103434841@1669685103162/Image-from-the-article-A-Home-in-a-Prairie-Town-by-Frank-Lloyd-Wright-Ladies-Home_Q320.jpg'
  },
  {
      'name' : 'Ward Willits House',
      'author' : 'Frank Lloyd Wright',
      'date' : '1902',
      'place' : 'Highland Park USA',
      'context' : 'Praire House',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/9/91/Willits_House.jpg'
  },
  {
      'name' : 'Robie House',
      'author' : 'Frank Lloyd Wright',
      'date' : '1910',
      'place' : 'Chicago',
      'context' : 'Praire House',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Frederick_C._Robie_House.JPG/1200px-Frederick_C._Robie_House.JPG'
  },
  {
      'name' : 'Unity temple',
      'author' : 'Frank Lloyd Wright',
      'date' : '1905',
      'place' : 'Oak Park',
      'context' : 'Edifici pubblici',
      'image' : 'https://www.metalocus.es/sites/default/files/styles/mopis_fullslider_desktop/public/lead-images/metalocus_flwright_unity-temple_02_tomrossiter_p.jpg?itok=whhMYzBv'
  },
  {
      'name' : 'Mission Chair',
      'author' : '',
      'date' : '1910',
      'place' : '',
      'context' : 'Praire House',
      'image' : 'https://i.ebayimg.com/images/g/jDcAAOSw2jZj9~dt/s-l400.jpg'
  },
  {
      'name' : 'Robie House',
      'author' : 'Frank Lloyd Wright',
      'date' : '1910',
      'place' : 'Chicago',
      'context' : 'Praire House',
      'image' : 'https://www.domusweb.it/content/dam/domusweb/it/architecture/gallery/2023/06/16/frank-lloyd-wright-robie-house-/gallery/domus-robie-house-3.jpg.foto.rmedium.png'
  },
  {
      'name' : 'Robie House',
      'author' : 'Frank Lloyd Wright',
      'date' : '1910',
      'place' : 'Chicago',
      'context' : 'Praire House',
      'image' : 'https://arte.sky.it/archivio/wp-content/uploads/2019/03/Robie-House-Living-Room-Courtesy-of-Frank-Lloyd-Wright-Trust-620x358.jpg'
  },
  
];

const cap12 = [
  {
      'name' : 'Greater London Plan',
      'author' : 'P. Abercrombie e Forshaw',
      'date' : '1944',
      'place' : 'Londra',
      'context' : 'Ricostruzione dopo bombardamenti 2ª G.M.',
      'image' : 'https://live.staticflickr.com/65535/48013708571_a66bbfc0bd_b.jpg'
  },
  {
      'name' : 'Scuola superiore Hunstanton',
      'author' : 'A. e P. Smithson',
      'date' : '1951',
      'place' : 'Norfolk - UK',
      'context' : 'Brutalismo',
      'image' : 'https://i.pinimg.com/474x/7e/83/36/7e83364492d9aed8a751ed156d5b85d8.jpg'
  },
  {
      'name' : 'Sede del giornale The Economist',
      'author' : 'A. e P. Smithson',
      'date' : '1963',
      'place' : 'Londra',
      'context' : 'Brutalismo',
      'image' : 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiEDpGOIkV1PlgAkv8oIpORsyoeNOaxeu0EcdK34ZqXpLivHAFtV9_NGbuNvxf5n2uqfuj_5tN1LOTRB3w9pT5X6PynlQsLdT_PnPRyXoMB2wAO_xdtwLN6bL3PkOVf7zVfqwQQlj81lGQ7/s1600/IMG_3275.JPG'
  },
  {
      'name' : 'Chiesa St. Joseph',
      'author' : 'A. Perret',
      'date' : '1945',
      'place' : 'Le Havre',
      'context' : 'Ricostruzione post 2ª G.M.',
      'image' : 'https://normandielovers.fr/wp-content/uploads/2023/08/visite-eglise-saint-joseph-le-Havre-4.jpeg'
  },
  {
      'name' : 'Ricostruzione Le Havre',
      'author' : 'A. Perret',
      'date' : '1945',
      'place' : 'Le Havre',
      'context' : 'Ricostruzione post 2ª G.M.',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Plan_de_la_ville_du_Havre.png/400px-Plan_de_la_ville_du_Havre.png'
  },
  {
      'name' : 'Unitè dHabitation',
      'author' : 'Le Corbusier',
      'date' : '1945',
      'place' : 'Marsiglia',
      'context' : 'Movimento Moderno nel dopoguerra',
      'image' : 'https://archeyes.com/wp-content/uploads/2023/09/L-Unite-d-Habitation-de-Marseille-Le-Corbusier-Apartments-France-Concrete-ArchEyes-exterior.jpg'
  },
  {
      'name' : 'Villes nouvelles',
      'author' : '',
      'date' : '1965',
      'place' : 'Francia',
      'context' : 'Anni 60 del 900 per risolvere sovraffollamento',
      'image' : 'https://journals.openedition.org/eps/docannexe/image/4728/img-1.jpg'
  },
  {
      'name' : 'Francobollo quartiere Hansaviertel',
      'author' : '',
      'date' : '1957',
      'place' : 'Esposizione Interbau - Berlino',
      'context' : 'Movimento Moderno nel dopoguerra',
      'image' : 'https://c8.alamy.com/compit/2h69ah9/germania-berlino-circa-1957-un-francobollo-dalla-germania-berlino-che-mostra-il-modello-dell-hansaviertel-mostra-internazionale-di-costruzioni-interbau-2h69ah9.jpg'
  },
  {
      'name' : 'Filarmonica',
      'author' : 'H. Scharoun',
      'date' : '1956',
      'place' : 'Berlino',
      'context' : 'Opera espressionista - Germania dopo 2ª G.M.',
      'image' : 'https://images.adsttc.com/media/images/5037/fabf/28ba/0d59/9b00/0766/large_jpg/stringio.jpg?1414206709'
  },
  {
      'name' : 'Monumento alle Fosse Ardeatine',
      'author' : 'Aprile, Calcaprina, Fiorentino e Perugini',
      'date' : '1945',
      'place' : 'Roma',
      'context' : 'Ricostruzione Italia dopo 2ª G.M - Rottura con il passato',
      'image' : 'https://hicarquitectura.com/wp-content/uploads/2016/10/18.jpg'
  },
  {
      'name' : 'Monumento ai caduti ai campi di concentramento',
      'author' : 'Belgiojoso, Peresutti e Rogers',
      'date' : '1947',
      'place' : 'Milano',
      'context' : 'Italia post 2ª G.M. - Razionalismo',
      'image' : 'https://lh3.googleusercontent.com/proxy/D6H9w3I10cVJtVB9WZUy-Haz_yVk0Pyd7JCEALqk9cf7PbbcBewvRsvqkqfQM3g8lNs-3Jz2kjNfQreo4e1hzHa5gin0lCdU49Ky7TpFwctZ62uPzGAf4Mlo4vu1NX6uSdGpP5XKNtMIH6-oQwea0nH49quqnCEOeNuOPCIoK5J98LrJVtmq9_ojxP3jKT8OP5pIxpzFTA'
  },
  {
      'name' : 'Quartiere Tiburtino',
      'author' : 'L. Quaroni',
      'date' : '1950',
      'place' : 'Roma',
      'context' : 'Neorealismo in architettura',
      'image' : 'https://archidiap.com/beta/assets/uploads/2015/06/img145111-1024x970.jpg'
  },
  {
      'name' : 'Quartiere Falchera',
      'author' : 'G. Astengo',
      'date' : '1951',
      'place' : 'Torino',
      'context' : 'Ricostruzione post 2ª G.M.',
      'image' : 'https://atlas.landscapefor.eu/images/atlas/luoghi_contemporaneo/falchera/immagini/planimetria.jpg'
  },
  {
      'name' : 'Quartiere QT8',
      'author' : 'P. Bottoni',
      'date' : '1946',
      'place' : 'Milano',
      'context' : 'Ricostruzione post 2ª G.M. - Innovazione tecnologica - Prefabbricazione',
      'image' : 'https://oami.s3.eu-south-1.amazonaws.com/legacy/cache/arch_img_big/media/resize/copy/0/43/2011-04-07-15-16-57-qt8-01.jpg'
  },
  {
      'name' : 'Quartiere Forte Quezzi',
      'author' : 'L.C. Daneri',
      'date' : '1956',
      'place' : 'Genova',
      'context' : 'Ricostruzione post 2ª G.M. - Influenza Le Corbusier',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/8/82/Genova_Forte_Quezzi-Torre_Quezzi.jpg'
  },
  {
      'name' : 'Gallerie di Palazzo Bianco',
      'author' : 'F. Albini',
      'date' : '1952',
      'place' : 'Genova',
      'context' : 'Musei durante Ricostruzione post 2ª G.M.',
      'image' : 'https://static2-living.corriereobjects.it/wp-content/uploads/2017/01/29_9.jpg'
  },
  {
      'name' : 'Allestimento Museo Castello Sforzesco - Pietà Rondanini',
      'author' : 'BBPR',
      'date' : '1956',
      'place' : 'Milano',
      'context' : 'Musei durante Ricostruzione post 2ª G.M.',
      'image' : 'https://italics.art/wp-content/uploads/2021/04/MASSIMODECARLO-TIP-LIBERO-702x1024.jpeg'
  },
  {
      'name' : 'Fondazione Querini Stampalia',
      'author' : 'C. Scarpa',
      'date' : '1949',
      'place' : 'Venezia',
      'context' : 'Musei durante Ricostruzione post 2ª G.M.',
      'image' : 'https://media-cdn.tripadvisor.com/media/photo-s/11/65/42/50/photo6jpg.jpg'
  },
  {
      'name' : 'Cappella',
      'author' : 'Le Corbusier',
      'date' : '1950',
      'place' : 'Ronchamp - Francia',
      'context' : 'Movimento moderno - Edificio sacro - Volume plastico',
      'image' : 'https://i0.wp.com/architectureandwonder.com/wp-content/uploads/2022/02/RH1513-0001.jpg?fit=1024%2C803&ssl=1'
  },
  {
      'name' : 'Convento Sainte-Marie de la Turette',
      'author' : 'Le Corbusier',
      'date' : '1957',
      'place' : 'Lione',
      'context' : 'Movimento moderno - Edificio sacro',
      'image' : 'https://www.corriere.it/methode_image/2021/08/05/Tecnologia/Foto%20Tecnologia%20-%20Trattate/Couvent_Sainte-Marie_de_La_Tourette-kY1C-U3280913279634AlE-593x443@Corriere-Web-Sezioni.jpg'
  },
  {
      'name' : 'Padiglione Philips',
      'author' : 'Le Corbusier',
      'date' : '1958',
      'place' : 'Bruxelles',
      'context' : 'Esposizione mondiale di Bruxelles',
      'image' : 'https://miro.medium.com/v2/resize:fit:1358/1*rbnGzRJKAYH-3bYejvEMVA.jpeg'
  },
  {
      'name' : 'MetLife',
      'author' : 'W. Gropius',
      'date' : '1958',
      'place' : 'New York',
      'context' : 'Gropius dopo 2ª G.M.',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Walter_Gropius_photo_MetLife_Building_fassade_New_York_USA_2005-10-03.jpg'
  },
  {
      'name' : 'Ambasciata americana',
      'author' : 'W. Gropius',
      'date' : '1956',
      'place' : 'Atene',
      'context' : 'Gropius dopo 2ª G.M. - Evocazione classicità senza ricadere in imitazione',
      'image' : 'https://i.pinimg.com/originals/ef/49/35/ef4935b325533cf013844e328802050a.jpg'
  },
  {
      'name' : 'Crawn Hall IIT',
      'author' : 'L. Mies van der Rohe',
      'date' : '1950',
      'place' : 'Chicago',
      'context' : 'Direzione architettura IIt - Mies van der Rohe nel dopoguerra - Estrema semplificazione e sottrazione',
      'image' : 'https://arch.iit.edu/img/34302d33/5804-l.jpg'
  },
  {
      'name' : 'Casa Farnsworth',
      'author' : 'L. Mies van der Rohe',
      'date' : '1945',
      'place' : 'Illinois - USA',
      'context' : 'Mies van der Rohe nel dopoguerra - Estrema semplificazione e sottrazione',
      'image' : 'https://www.domusweb.it/content/dam/domusweb/it/architecture/gallery/2020/07/03/la-storia-della-casa-disegnata-da-mies-van-der-rohe-per-edith-farnsworth/gallery/domus-mies-van-der-rohe-farnsworth-house-4.jpg.foto.rmedium.png'
  },
  {
      'name' : 'Seagram Building',
      'author' : 'L. Mies van der Rohe',
      'date' : '1954',
      'place' : 'New York',
      'context' : 'Mies van der Rohe in USA nel dopoguerra',
      'image' : 'https://untappedcities.com/wp-content/uploads/2015/10/Seagram-Building-Park-Avenue-Secrets-Landmark-NYC-4.jpg'
  },
  {
      'name' : 'Piazza Seagram Building',
      'author' : 'L. Mies van der Rohe',
      'date' : '1954',
      'place' : 'New York',
      'context' : 'Mies van der Rohe in USA nel dopoguerra',
      'image' : 'https://nypost.com/wp-content/uploads/sites/2/2016/12/seagram-building.jpg?quality=75&strip=all'
  },
  {
      'name' : 'Nuova galleria nazionale',
      'author' : 'L. Mies van der Rohe',
      'date' : '1962',
      'place' : 'Berlino',
      'context' : 'Ultime opere di van der Rohe - Estrema semplificazione e sottrazione',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Berlin_Neue_Nationalgalerie_asv2021-11_img1.jpg'
  },
  {
      'name' : 'Piano per Chandigarh',
      'author' : 'Le Corbusier e P. Jeanneret',
      'date' : '1950',
      'place' : 'Chandigarh - Punjab - India',
      'context' : 'Movimento Moderno - Costruzione capitali',
      'image' : 'https://www.archweb.it/dwg/arch_arredi_famosi/le_corbusier/chandigarh/chandigarh_piano_urbanistico.jpg'
  },
  {
      'name' : 'Campidoglio Chandigarh',
      'author' : 'Le Corbusier e P. Jeanneret',
      'date' : '1950',
      'place' : 'Chandigarh - Punjab - India',
      'context' : 'Movimento Moderno - Costruzione capitali',
      'image' : 'https://www.archweb.it/dwg/arch_arredi_famosi/le_corbusier/chandigarh/chandigarh_master_plan.jpg'
  },
  {
      'name' : 'Palazzo del Parlamento Chandigarh',
      'author' : 'Le Corbusier e P. Jeanneret',
      'date' : '1961',
      'place' : 'Chandigarh - Punjab - India',
      'context' : 'Movimento Moderno - Costruzione capitali',
      'image' : 'https://www.archweb.it/dwg/arch_arredi_famosi/le_corbusier/chandigarh_assemblea/photos/Chandigarh_Assembly_2.jpg'
  },
  {
      'name' : 'Piano per Brasilia',
      'author' : 'O. Niemeyer e L. Costa',
      'date' : '1957',
      'place' : 'Brasilia - Brasile',
      'context' : 'Movimento Moderno - Costruzione capitali',
      'image' : 'https://annaluciani.com/wp-content/uploads/2019/01/foto0004.jpg?w=470'
  },
  {
      'name' : 'Palazzo del Parlamento',
      'author' : 'O. Niemeyer e L. Costa',
      'date' : '1957',
      'place' : 'Brasilia - Brasile',
      'context' : 'Movimento Moderno - Costruzione capitali',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Brasilia_Congresso_Nacional_05_2007_221.jpg/260px-Brasilia_Congresso_Nacional_05_2007_221.jpg'
  },
  {
      'name' : 'Cattedrale',
      'author' : 'O. Niemeyer e L. Costa',
      'date' : '1958',
      'place' : 'Brasilia - Brasile',
      'context' : 'Movimento Moderno - Costruzione capitali',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Brasilia_Catedral_08_2005_03.jpg'
  },
  {
      'name' : 'Palazzo comunale',
      'author' : 'A. Aalto',
      'date' : '1949',
      'place' : 'Saynatsalo',
      'context' : 'Architettura organica',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/SaynatsaloTownHall4.jpg/1200px-SaynatsaloTownHall4.jpg'
  },
  {
      'name' : 'Palazzo comunale',
      'author' : 'A. Aalto',
      'date' : '1961',
      'place' : 'Seynajoki',
      'context' : 'Architettura organica',
      'image' : 'https://c8.alamy.com/compit/2phwge2/municipio-di-alvar-aalto-nella-citta-finlandese-sein-joki-2phwge2.jpg'
  },
  {
      'name' : 'Istituto superiore di pedagogia',
      'author' : 'A. Aalto',
      'date' : '1950',
      'place' : 'Jyvaskyla - Finlandia',
      'context' : 'Architettura organica',
      'image' : 'https://areeweb.polito.it/didattica/01CMD/catalog/028/2/013.jpg'
  },
  {
      'name' : 'Politecnico di Otaniemi',
      'author' : 'A. Aalto',
      'date' : '1950',
      'place' : 'Helsinki - Finlandia',
      'context' : 'Architettura organica',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Helsinki_University_of_Technology_auditorium.jpg/260px-Helsinki_University_of_Technology_auditorium.jpg'
  },
  {
      'name' : 'Chiesa',
      'author' : 'A. Aalto',
      'date' : '1966',
      'place' : 'Riola di Vergato - Bologna',
      'context' : 'Architettura organica',
      'image' : 'https://www.rocchetta-mattei.it/wp-content/uploads/2017/10/interni_Santa_Maria_assunta-1024x768.jpg'
  },
  {
      'name' : 'Casa della cultura',
      'author' : 'A. Aalto',
      'date' : '1955',
      'place' : 'Helsinki - Finlandia',
      'context' : 'Architettura organica',
      'image' : 'https://images.adsttc.com/media/images/56de/355d/e58e/ce68/3d00/0087/medium_jpg/21025736026_a553963cb7_o.jpg?1457403221'
  },
  {
      'name' : 'Palazzo dei congressi e sala per concerti',
      'author' : 'A. Aalto',
      'date' : '1962',
      'place' : 'Helsinki - Finlandia',
      'context' : 'Architettura organica',
      'image' : 'https://c8.alamy.com/compit/2de3p37/centro-congressi-ed-eventi-finlandia-hall-progettato-dall-architetto-alvar-aalto-sulla-baia-di-toolonlahti-a-helsinki-finlandia-2de3p37.jpg'
  },
  {
      'name' : 'Opera House',
      'author' : 'J. Hutzon e A. Jacobsen',
      'date' : '1957',
      'place' : 'Sydney - Australia',
      'context' : 'Influenza architettura scandinava Alvar Aalto',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/4/40/Sydney_Opera_House_Sails.jpg'
  },
];

const cap11 = [
  {
      'name' : 'Jefferson Memorial',
      'author' : 'J. R. Pope',
      'date' : '1936',
      'place' : 'Washington',
      'context' : 'Classicismo',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Jefferson_Memorial_At_Dusk_1.jpg/800px-Jefferson_Memorial_At_Dusk_1.jpg'
  },
  {
      'name' : 'Biblioteca pubblica',
      'author' : 'P. Cret',
      'date' : '1919',
      'place' : 'Indianapolis - USA',
      'context' : 'Classicismo',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Biblioteca_central%2C_Indianápolis%2C_Estados_Unidos%2C_2012-10-22%2C_DD_06.jpg'
  },
  {
      'name' : 'Treno Zephyr',
      'author' : 'Pail Cret',
      'date' : '1934',
      'place' : 'USA',
      'context' : '',
      'image' : 'https://www.pbs.org/wgbh/americanexperience/media/filer_public_thumbnails/filer_public/41/03/410386f1-7090-48b3-ad60-30f6acbcf61b/streamliners_burlington_zephyr.jpg__1000x424_q85_crop_subsampling-2_upscale.jpg'
  },
  {
      'name' : 'Progetto per il Chicago Tribune',
      'author' : 'L. Hilberseimer',
      'date' : '1922',
      'place' : 'Chicago',
      'context' : 'Concorso Chicago Tribune - Avanguardie europee',
      'image' : 'https://thecityasaproject.org/wp-content/uploads/2011/09/hilbs-chicago-tribune.jpg'
  },
  {
      'name' : 'Progetto per il Chicago Tribune',
      'author' : 'Howells e Hood',
      'date' : '1922',
      'place' : 'Chicago',
      'context' : 'Neogotico',
      'image' : 'https://s3.amazonaws.com/architecture-org/files/modules/tribune-tower-tribune-tower-02.jpg'
  },
  {
      'name' : 'Progetto per il Chicago Tribune',
      'author' : 'Eliel Saarinen',
      'date' : '1922',
      'place' : 'Chicago',
      'context' : 'Classicismo + Art Decò',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Eliel_Saarinen_Tribune_Tower_design_1922.jpg'
  },
  {
      'name' : 'Chrysler Building',
      'author' : 'W. van Alen',
      'date' : '1930',
      'place' : 'New York',
      'context' : 'Grande depressione 1929 - Distacco tradizione negli edifici alti - Art Decò',
      'image' : 'https://hips.hearstapps.com/hmg-prod/images/skyscrapers-and-chrysler-building-royalty-free-image-1655481989.jpg'
  },
  {
      'name' : 'Doccione Chrysler Building',
      'author' : 'W. van Alen',
      'date' : '1930',
      'place' : 'New York',
      'context' : 'Grande depressione 1929 - Distacco tradizione negli edifici alti - Art Decò',
      'image' : 'https://images.squarespace-cdn.com/content/v1/5a5cec57692ebeaf27ccf6a6/1519681036553-EC7VLBL3D2DVQ0LMT2EA/chrysler-building-agostina-cois-piccola-new-yorker-pianificazioni-di-viaggio-a-new+york?format=500w'
  },
  {
      'name' : 'Ascensori Chrysler Building',
      'author' : 'W. van Alen',
      'date' : '1930',
      'place' : 'New York',
      'context' : 'Grande depressione 1929 - Distacco tradizione negli edifici alti - Art Decò',
      'image' : 'https://c8.alamy.com/compit/h7j5e8/new-york-city-ny-nyc-manhattan-midtown-42nd-street-chrysler-building-lobby-ascensore-marmo-art-deco-design-legno-intarsiato-adulto-adulti-uomo-maschio-entrata-h7j5e8.jpg'
  },
  {
      'name' : 'Lobby Empire State Building',
      'author' : 'Shreve, Lamb & Harmon',
      'date' : '1930',
      'place' : 'New York',
      'context' : 'Art Decò',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Empire_State_Building_Lobby_Mural.jpg'
  },
  {
      'name' : 'Imperial Hotel',
      'author' : 'Frank Lloyd Wright',
      'date' : '1919',
      'place' : 'Tokyo',
      'context' : 'Architettura organica - Riferimenti Giappone e Praire House',
      'image' : 'https://static.dezeen.com/uploads/2017/06/imperial-hotel-tokyo-japan-frank-lloyd-wright_dezeen_2364_col_6-e1497499213369.jpg'
  },
  {
      'name' : 'Particolare HollyHock House',
      'author' : 'Frank Lloyd Wright',
      'date' : '1919',
      'place' : 'Los Angeles',
      'context' : 'Revival Maya',
      'image' : 'https://images.squarespace-cdn.com/content/v1/5f47fe9cfd0e5c5551097c51/1601143418491-L9JH15PCODRC9SYDEIK7/Untitled+design.png'
  },
  {
      'name' : 'Broadacre city',
      'author' : 'Frank Lloyd Wright',
      'date' : '1934',
      'place' : 'USA',
      'context' : 'Piano urbano e costruzioni unifamiliari con acro di terreno',
      'image' : 'https://franklloydwright.org/wp-content/uploads/2018/09/Figure1_broadacre.jpg'
  },
  {
      'name' : 'Interno Ennis House',
      'author' : 'Frank Lloyd Wright',
      'date' : '1924',
      'place' : 'Los Angeles',
      'context' : 'Revival Maya',
      'image' : 'https://www.tedsoquiphoto.com/img-get/I0000yJWjUkNaB4U/s/1200/I0000yJWjUkNaB4U.jpg'
  },
  {
      'name' : 'Taliesin West',
      'author' : 'Frank Lloyd Wright',
      'date' : '1937',
      'place' : 'Scottsdale - USA',
      'context' : 'Architettura organica',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/TaliesinWest03_gobeirne.jpg/260px-TaliesinWest03_gobeirne.jpg'
  },
  {
      'name' : 'Fallingwater',
      'author' : 'Frank Lloyd Wright',
      'date' : '1934',
      'place' : 'Mill Run - USA',
      'context' : 'Architettura organica',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Wrightfallingwater.jpg/199px-Wrightfallingwater.jpg'
  },
  {
      'name' : 'Salone Falling Water',
     'author' : 'Frank Lloyd Wright',
      'date' : '1934',
      'place' : 'Mill Run - USA',
      'context' : 'Architettura organica',
      'image' : 'https://www.architetturaeviaggi.it/moduli/galleria/america/1329_nor.jpg'
  },
  {
      'name' : 'Esposizione universale di New York',
      'author' : '',
      'date' : '1939',
      'place' : 'New York',
      'name' : 'Esposizione universale di New York',
      'image' : 'https://www.ribapix.com/images/thumbs/028/0285600_RIBA88689_600.jpeg'
  },
  {
      'name' : 'Machine Art mostra',
      'author' : 'P. Johnson',
      'date' : '1934',
      'place' : 'New York - MoMa',
      'context' : 'Movimento Moderno',
      'image' : 'https://www.moma.org/d/c/installation_images/W1siZiIsIjM0ODE4NSJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDI1NngyNTZcdTAwM2UiXV0.jpg?sha=0e6226539901ed91'
  },
  {
      'name' : 'Lovell House',
      'author' : 'R. Neutra',
      'date' : '1927',
      'place' : 'Los Angeles',
      'context' : 'Case industrializzate - 1ª casa con scheletro interamente in acciaio',
      'image' : 'https://sah-archipedia.org/sites/default/files/pictures/full/CA-01-037-0089_002.jpg'
  },
  {
      'name' : 'Struttura in acciaio Lovell House',
      'author' : 'R. Neutra',
      'date' : '1927',
      'place' : 'Los Angeles',
      'context' : 'Case industrializzate - 1ª casa con scheletro interamente in acciaio',
      'image' : 'https://www.claasshaus.com/uploads/3/7/4/0/37405143/screen-shot-2017-04-06-at-2-26-34-pm_orig.png'
  },
  {
      'name' : 'Brevetto Bagno prefabbricato',
      'author' : 'R. Buckminster Fuller',
      'date' : '1938',
      'place' : 'USA',
      'context' : 'Costruzioni prefabbricate',
      'image' : 'https://i.pinimg.com/236x/5a/91/a1/5a91a14857ce7c4778f5e0ad67428051.jpg'
  },
  {
      'name' : 'Kaufmann House',
      'author' : 'R. Neutra',
      'date' : '1946',
      'place' : 'San Jacinto - California',
      'context' : 'International Style',
      'image' : 'https://archidiap.com/beta/assets/uploads/2014/12/Kaufmann-Desert-House-1946-47.jpg'
  },
  {
      'name' : 'Glass House',
      'author' : 'P. Johnson',
      'date' : '1949',
      'place' : 'New Canaan - Connecticut - USA',
      'context' : 'International Style',
      'image' : 'https://images.divisare.com//image/upload/c_fit,f_jpg,q_80,w_1200/v1474630362/ap6slzrdoacou8gocbeo.jpg'
  },
  {
      'name' : 'Carpenter Center of the Visual Arts',
      'author' : 'Le Corbusier',
      'date' : '1959',
      'place' : 'Cambridge - USA',
      'context' : 'International Style',
      'image' : 'https://www.lemessurier.com/wp-content/uploads/2023/04/carpenter_center_1a-scaled.jpg'
  },
  {
      'name' : 'Johnson Wax Building',
      'author' : 'F.L. Wright',
      'date' : '1936',
      'place' : 'Racine -USA',
      'context' : 'Architettura organica',
      'image' : 'https://blog.360modern.com/wp-content/uploads/2021/07/Campus-Facing-East.jpeg'
  },
  {
      'name' : 'Interno Johnson Wax Building',
      'author' : 'F.L. Wright',
      'date' : '1936',
      'place' : 'Racine -USA',
      'context' : 'Architettura organica',
      'image' : 'https://www.domusweb.it/content/dam/domusweb/it/speciali/orgatec/2018/lufficio-pi-moderno-del-mondo/domus-frank-lloyd-wright-9.jpg.foto.rmedium.jpg'
  },
  {
      'name' : 'Cantiere Johnson Wax Building',
      'author' : 'F.L. Wright',
      'date' : '1936',
      'place' : 'Racine -USA',
      'context' : 'Architettura organica',
      'image' : 'https://evstudio.com/wp-content/uploads/2015/11/Loading-of-Johnson-Wax-Columns.jpg'
  },
  {
      'name' : 'Case study House nº8',
      'author' : 'C. e R. Eames',
      'date' : '1948',
      'place' : 'California',
      'context' : 'Architettura organica',
      'image' : 'https://miro.medium.com/v2/resize:fit:1200/1*5-SRl2dL5I2AAN6R57Jbew.jpeg'
  },
  {
      'name' : 'Interno Case study House nº8',
      'author' : 'C. e R. Eames',
      'date' : '1948',
      'place' : 'California',
      'context' : 'Architettura organica',
      'image' : 'https://lesommer.fr/photo/632_screen.jpg'
  },
  {
      'name' : 'Baker House',
      'author' : 'A. Aalto',
      'date' : '1947',
      'place' : 'MIT Boston',
      'context' : 'Architettura organica',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/8/81/MIT_Baker_House_Dormitory_%2834321178075%29.jpg'
  },
  {
      'name' : 'General Motors Warren',
      'author' : 'E. Saarinen',
      'date' : '1948',
      'place' : 'Michigan',
      'context' : 'Architettura organica',
      'image' : 'https://live.staticflickr.com/3348/3659654143_68e39b4e57_b.jpg'
  },
  {
      'name' : 'Interno cupola General Motors Warren',
      'author' : 'E. Saarinen',
      'date' : '1948',
      'place' : 'Michigan',
      'context' : 'Architettura organica',
      'image' : 'https://images.adsttc.com/media/images/5ece/38bd/b357/6516/5600/01de/large_jpg/General_Motors_Technical_Center_UNC195X-0167.jpg?1590573225'
  },
  {
      'name' : 'TWA Terminal',
      'author' : 'E. Saarinen',
      'date' : '1956',
      'place' : 'New York',
      'context' : 'Movimento moderno - Influenza streamline - Incontro tra industrializzazione e organicismo - Volumi curvilinei, forme concavo-convesse e materiali davanguardia',
      'image' : 'https://atlasofplaces.com/atlas-of-places-images/ATLAS-OF-PLACES-EERO-SAARINEN-ASSOCIATES-TWA-FLIGHT-CENTER-IMG-1.jpg'
  },
  {
      'name' : 'Interno TWA Terminal',
      'author' : 'E. Saarinen',
      'date' : '1956',
      'place' : 'New York',
      'context' : 'Movimento moderno - Influenza streamline - Incontro tra industrializzazione e organicismo - Volumi curvilinei, forme concavo-convesse e materiali davanguardia',
      'image' : 'https://www.metalocus.es/sites/default/files/styles/mopis_news_gallery_first_deskop/public/file-images/TWA_terminal_EeroSaarnien_rest_metalocus_05_1280.jpg?itok=IP7o4DYR'
  },
  {
      'name' : 'Guggenheim Museum',
      'author' : 'F.L. Wright',
      'date' : '1943',
      'place' : 'New York',
      'context' : 'Architettura organica',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Guggenheim_museum_exterior.jpg/260px-Guggenheim_museum_exterior.jpg'
  },
  {
      'name' : 'Interno Guggenheim Museum',
      'author' : 'F.L. Wright',
      'date' : '1943',
      'place' : 'New York',
      'context' : 'Architettura organica',
      'image' : 'https://c8.alamy.com/compit/eckhdf/stati-uniti-d-america-new-york-city-il-guggenheim-museum-di-frank-lloyd-wright-vista-interna-eckhdf.jpg'
  },
  {
      'name' : 'Mostra Organic Design in Home Furnishings',
      'author' : 'E. Saarinen e C. Eames',
      'date' : '1940',
      'place' : 'MoMa - New York',
      'context' : 'Interni organici',
      'image' : 'https://static.vitra.com/media-resized/sLj9G2MAt_NVx7589cGrLX3TKDZ_kLUwJv3VC0HVtAc/fill/750/498/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzE1OTYzNjQvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC8xODI5MzMxMC5qcGc.jpg'
  },
  {
      'name' : 'Sedia in plastica monoscocca',
      'author' : 'R. Day',
      'date' : '1960',
      'place' : 'UK',
      'context' : 'Progetto industriale',
      'image' : 'https://m.media-amazon.com/images/I/51KP6m8UshL._AC_UF1000,1000_QL80_.jpg'
  },
];

const cap9 = [
  {
      'name' : 'Cassa di orologio decorato',
      'author' : 'Le Corbusier',
      'date' : '1902',
      'place' : 'Esposizione internazionale di Arti Decorative di Torino',
      'context' : 'Movimento Moderno',
      'image' : 'http://www.instoria.it/home/le_corbusier_I.jpg'
  },
  {
      'name' : 'Villa Schwob',
      'author' : 'Le Corbusier',
      'date' : '1916',
      'place' : 'Svizzera',
      'context' : 'Movimento Moderno',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/CF05.jpg/520px-CF05.jpg'
  },
  {
      'name' : 'Maison Dom-ino',
      'author' : 'Le Corbusier',
      'date' : '1914',
      'place' : 'Svizzera',
      'context' : 'Movimento Moderno',
      'image' : 'https://www.domusweb.it/content/dam/domusweb/it/architettura/2012/10/31/dalla-dom-ino-alla-polykatoikia/big_398303_5021_02_Le-Corbusier1.jpg.foto.rmedium.jpg'
  },
  {
      'name' : 'Padiglione dellEsprit Nouveau',
      'author' : 'Le Corbusier',
      'date' : '1925',
      'place' : 'Parigi',
      'context' : 'Movimento Moderno',
      'image' : 'https://static.bolognawelcome.com/immagini/d6/f7/7f/ff/20230207094805_landscape_16_9_desktop.jpg'
  },
  {
      'name' : 'Una ville contemporaine',
      'author' : 'Le Corbusier',
      'date' : '1922',
      'place' : 'Parigi',
      'context' : 'Movimento Moderno',
      'image' : 'https://images.adsttc.com/media/images/51fa/dfbb/e8e4/4ea2/b000/0010/medium_jpg/ville_radieuse_(1).jpg?1375395768'
  },
  {
      'name' : 'Quartiere operaio di Pessac',
      'author' : 'Le Corbusier',
      'date' : '1925',
      'place' : 'Pessac',
      'context' : 'Movimento Moderno',
      'image' : 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjy82pDE0IURwzdU4SB5OSCtXSZarlaBBjEt8gu1Bfyf7lSfOEJVTRTpOHHPmcnohQc5nK1fBD51cMn2LH9zoBFUQEGk-rQV04m85gWOOIT3VelpYNiwV8LIFYBHV7Se2-xaj9S28CXG00/s320/DSCN0243.JPG'
  },
  {
      'name' : 'Casa per il Weissenhof',
      'author' : 'Le Corbusier',
      'date' : '1927',
      'place' : 'Stoccarda',
      'context' : 'Movimento Moderno',
      'image' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuAkjOa9uRyRjvsWTer3LpMpjx32RvkXmnoA&usqp=CAU'
  },
  {
      'name' : 'Ville Savoye',
      'author' : 'Le Corbusier',
      'date' : '1929',
      'place' : 'Poissy - Francia',
      'context' : 'Movimento Moderno',
      'image' : 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/VillaSavoye.jpg/500px-VillaSavoye.jpg'
  },
  {
      'name' : 'Concorso per il Palazzo delle Società',
      'author' : 'Le Corbusier',
      'date' : '1927',
      'place' : 'Ginevra',
      'context' : 'Movimento Moderno',
      'image' : 'https://areeweb.polito.it/didattica/01CMD/catalog/023/1/030.jpg'
  },
  {
      'name' : 'Concorso palazzo del centro Soyus',
      'author' : 'Le Corbusier',
      'date' : '1929',
      'place' : 'Mosca',
      'context' : 'Movimento Moderno',
      'image' : 'https://areeweb.polito.it/didattica/01CMD/catalog/023/1/043.jpg'
  },
  {
      'name' : 'Citè de Refuge',
      'author' : 'Le Corbusier',
      'date' : '1929',
      'place' : 'Parigi',
      'context' : 'Movimento Moderno - Casa economica e collettiva',
      'image' : 'https://www.fondationlecorbusier.fr/wp-content/uploads/2022/04/armee-du-salut-cite-de-refuge-flc-adagp-olivier-martin-gambier-1.jpg'
  },
  {
      'name' : 'Modulor',
      'author' : 'Le Corbusier',
      'date' : '1942',
      'place' : 'Francia',
      'context' : 'Movimento Moderno durante 2ª G.M.',
      'image' : 'https://web.math.unifi.it/users/mathesis/sezione/arte/img/44.jpg'
  },
  {
      'name' : 'Plan Voisin',
      'author' : 'Le Corbusier',
      'date' : '1925',
      'place' : 'PArigi',
      'context' : 'Movimento Moderno - Carta di Atene',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Plan_Voisin_model.jpg/440px-Plan_Voisin_model.jpg'
  },
  {
      'name' : 'Officine Fagus',
      'author' : 'Walter Gropius e Adolf Meyer',
      'date' : '1911',
      'place' : 'Alfeld - Germania',
      'context' : 'Movimento Moderno',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Fagus_Gropius_Hauptgebaeude_200705_wiki_front.jpg/260px-Fagus_Gropius_Hauptgebaeude_200705_wiki_front.jpg'
  },
  {
      'name' : 'Edificio industriale modello',
      'author' : 'Walter Gropius e Adolf Meyer',
      'date' : '1914',
      'place' : 'Esposizione Werkbund di Colonia',
      'context' : 'Movimento Moderno',
      'image' : 'https://i.pinimg.com/originals/c3/22/25/c322251e54ad5a6ce791d9ad25739426.jpg'
  },
  {
      'name' : 'Casa Sommerfeld',
      'author' : 'Walter Gropius e Adolf Meyer',
      'date' : '1920',
      'place' : 'Berlino',
      'context' : 'Movimento Moderno',
      'image' : 'https://en.wikiarquitectura.com/wp-content/uploads/2024/02/Sommerfeld-House-Gropius-Meyer.jpg'
  },
  {
      'name' : 'Monumento ai caduti di marzo',
      'author' : 'Walter Gropius',
      'date' : '1922',
      'place' : 'Berlino',
      'context' : 'Bauhaus',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Monument_to_the_March_dead.jpg/800px-Monument_to_the_March_dead.jpg'
  },
  {
      'name' : 'Progetto per il Chicago Tribune',
      'author' : 'Walter Gropius',
      'date' : '1922',
      'place' : 'Chicago',
      'context' : 'Bauhaus',
      'image' : 'https://bauhauskooperation.com/fileadmin/_processed_/d/6/csm_Gropius_Meyer_Chicago_Tribune_Building_0b9d776f28.jpg'
  },
  {
      'name' : 'Casa am Horn',
      'author' : 'G. Muche',
      'date' : '1923',
      'place' : 'Weimar',
      'context' : 'Bauhaus',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Haus_am_Horn_04.JPG/520px-Haus_am_Horn_04.JPG'
  },
  {
      'name' : 'Sede del Bauhaus',
      'author' : 'Walter Gropius',
      'date' : '1925',
      'place' : 'Dessau',
      'context' : 'Bauhaus Dessau',
      'image' : 'https://www.domusweb.it/content/dam/domusweb/it/speciali/bauhaus-100/gallery/2019/stefano-barattini-omaggia-il-bauhaus-con-un-progetto-fotografico/domus-bauhaus-barattini-01.jpg.foto.rmedium.jpg'
  },
  {
      'name' : 'Quartiere Torten',
      'author' : 'Walter Gropius',
      'date' : '1926',
      'place' : 'Dessau',
      'context' : 'Bauhaus',
      'image' : 'https://l450v.alamy.com/450vit/2nprr0y/1920-karlsruhe-germania-le-case-popolari-costruite-dalla-celebre-bauhaus-tedesca-walter-gropius-berlino-1883-boston-1969-architettura-architettura-architettura-abitazione-casa-casa-avantguardia-avantgarde-razionalismo-razionalista-weimar-germania-archivio-gbb-2nprr0y.jpg'
  },
  {
      'name' : 'Casa Gropius',
      'author' : 'Walter Gropius',
      'date' : '1938',
      'place' : 'USA - Massachussets',
      'context' : 'Movimento Moderno',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/0/03/Walter_Gropius_photo_Gropius_house_Lincoln_MA.jpg'
  },
  {
      'name' : 'Grattacielo in vetro',
      'author' : 'Mies van der Rohe',
      'date' : '1921',
      'place' : '',
      'context' : 'Influenza espressionista',
      'image' : 'https://www.frontiere.eu/wp-content/uploads/2017/01/Figura-57-Ludwig-Mies-Van-Der-Rohe-Grattacielo-di-Vetro-in-Via-Friedrich-di-Berl-1921.jpg'
  },
  {
      'name' : 'Grattacielo in vetro',
      'author' : 'Mies van der Rohe',
      'date' : '1921',
      'place' : '',
      'context' : 'Influenza espressionista',
      'image' : 'https://i.pinimg.com/originals/c4/a7/59/c4a7599dd9a86b4d3b31b3a224d1b71c.jpg'
  },
  {
      'name' : 'Monumento a Karl Liebknecht e Rosa Luxemburg',
      'author' : 'Mies van der Rohe',
      'date' : '1925',
      'place' : 'Berlino',
      'context' : 'Ricerca neoplastica ma utilizzo del mattone',
      'image' : 'https://www.urbipedia.org/w/images/thumb/3/3f/Ludwig_Mies_van_der_Rohe%2C_Monumento_a_Rosa_Luxemburg_y_Karl_Liebknecht.2.jpg/183px-Ludwig_Mies_van_der_Rohe%2C_Monumento_a_Rosa_Luxemburg_y_Karl_Liebknecht.2.jpg'
  },
  {
      'name' : 'Direttore Esposizione del Weissenhof Siedlung',
      'author' : 'Mies van der Rohe',
      'date' : '1927',
      'place' : 'Esposizione del Weissenhof Siedlung Stoccarda',
      'context' : 'Movimento Moderno - abitazione basso costo',
      'image' : 'https://static.designboom.com/wp-content/uploads/2021/08/weissenhof-stuttgart-estate-mies-van-der-rohe-le-corbusier-designboom-600-1.jpg'
  },
  {
      'name' : 'Padiglione della Germania',
      'author' : 'Mies van der Rohe',
      'date' : '1929',
      'place' : 'Esposizione Universale di Barcellona',
      'context' : 'Movimento Moderno - less is more',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/The_Barcelona_Pavilion%2C_Barcelona%2C_2010.jpg/640px-The_Barcelona_Pavilion%2C_Barcelona%2C_2010.jpg'
  },
  {
      'name' : 'Villa Tugendhat',
      'author' : 'Mies van der Rohe',
      'date' : '1930',
      'place' : 'Brno - Repubblica Ceca',
      'context' : 'Movimento Moderno',
      'image' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8bLqRCAHEkGtICHXmW7Tgqxi7znzX2vbJ_g&usqp=CAU'
  },
  {
      'name' : 'Perriand su LC4',
      'author' : 'Le Corbusier',
      'date' : '1928',
      'place' : '',
      'context' : 'Movimento Moderno',
      'image' : 'https://static01.nyt.com/images/2019/11/22/arts/20perriand1/merlin_162821814_d8391123-c056-4832-9b93-885dfce76b4f-superJumbo.jpg?quality=75&auto=webp'
  },
  {
      'name' : 'R. Eames su Lounge chair',
      'author' : 'Charles Eames',
      'date' : '1952',
      'place' : '',
      'context' : 'Ruolo della donna nella progettazione',
      'image' : 'https://www.atomic-ranch.com/wp-content/uploads/2020/02/Ray-Eames-in-Eames-Lounge-Chair-Prototype-Web-e1582915951357.jpg'
  },
  {
      'name' : 'Studi per il progetto razionale dellalloggio minimo',
      'author' : 'Klein',
      'date' : '1928',
      'place' : '',
      'context' : 'Movimento Moderno - 2º CIAM',
      'image' : 'https://www.famagazine.it/public/journals/1/images/59-60/rama_002.jpg'
  },
  {
      'name' : 'Georgsgarten',
      'author' : 'Otto Haesler',
      'date' : '1924',
      'place' : 'Celle - Germania',
      'context' : 'Casa popolare',
      'image' : 'http://otto-haesler-initiative.de/sites/default/files/styles/medium/public/bauten/georgsgarten-8.jpg?itok=F0fSNHoy'
  },
  {
      'name' : 'Hufeisen Siedlung',
      'author' : 'Bruno Taut',
      'date' : '1925',
      'place' : 'Berlino',
      'context' : 'Moviemnto Moderno',
      'image' : 'http://www.capitalieuropee.altervista.org/1/117/001s.jpg'
  },
  {
      'name' : 'Siemensstadt',
      'author' : 'Hans Scharoun',
      'date' : '1929',
      'place' : 'Berlino',
      'context' : 'Moviemnto Moderno',
      'image' : 'https://vonortzuort.reisen/wp-content/uploads/2019/07/panzerkreuzer.jpg'
  },
  {
      'name' : 'Bruchfeldstrasse',
      'author' : 'E. May',
      'date' : '1926',
      'place' : 'Francoforte',
      'context' : 'Movimento Moderno - Costruzione alloggi',
      'image' : 'https://i.pinimg.com/736x/fe/e7/3e/fee73ef0ed40549d1492d01bbc34cd8f.jpg'
  },
  {
      'name' : 'Romerstadt',
      'author' : 'E. May',
      'date' : '1927',
      'place' : 'Francoforte',
      'context' : 'Movimento Moderno - Costruzione alloggi',
      'image' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi4m4s4yegPKjJA9yEGhUn51DqPsM6ZCfN-g&usqp=CAU'
  },
  {
      'name' : 'Professor Jodl Hof',
      'author' : 'Perco e Frass',
      'date' : '1925',
      'place' : 'Vienna',
      'context' : 'Movimento Moderno - Hofe',
      'image' : 'https://cdn.loquis.com/prod/loquis/pictures/269ecaf6-1871-46cd-8800-6cfd3609cc6d-720.jpg'
  },
  {
      'name' : 'Matteotti Hof',
      'author' : 'Schmid e Aichinger',
      'date' : '1926',
      'place' : 'Vienna',
      'context' : 'Movimento Moderno - Hofe',
      'image' : 'https://cdn.loquis.com/prod/loquis/pictures/a619d661-d3c8-4614-bd42-109a0a438831-720.jpg'
  },
  {
      'name' : 'Karl Marx Hof',
      'author' : 'k. Ehn',
      'date' : '1927',
      'place' : 'Vienna',
      'context' : 'Movimento Moderno - Hofe',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Döbling_%28Wien%29_-_Karl-Marx-Hof.JPG/520px-Döbling_%28Wien%29_-_Karl-Marx-Hof.JPG'
  },
  {
      'name' : 'George Washington Hof',
      'author' : 'K. Krist e R. Oerley',
      'date' : '1927',
      'place' : 'Vienna',
      'context' : 'Movimento Moderno - Hofe',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/George_Washington-Hof.jpg/927px-George_Washington-Hof.jpg?20070319104413'
  },
  {
      'name' : 'Da Dageraad',
      'author' : 'Kramer',
      'date' : '1918',
      'place' : 'Amsterdam',
      'context' : 'Movimento Moderno - Hofe',
      'image' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREyGKyNHVG8EU0YJZdIh6sNBsAYp9vsPnw6g&usqp=CAU'
  },
  {
      'name' : 'Betondorp',
      'author' : 'J.B. van Loghem',
      'date' : '1921',
      'place' : 'Amsterdam',
      'context' : 'Movimento Moderno - Hofe',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Veeteeltstraat_Amsterdam.jpg/500px-Veeteeltstraat_Amsterdam.jpg'
  },
  {
      'name' : 'Hoek van Holland',
      'author' : 'Oud',
      'date' : '1924',
      'place' : 'Rotterdam',
      'context' : 'Movimento Moderno - Hofe',
      'image' : 'https://www.matharchitecten.nl/wp-content/uploads/2018/12/1-18.jpg'
  },
  {
      'name' : 'Prototipo case a schiera',
      'author' : 'Oud',
      'date' : '1927',
      'place' : 'Weissenhof Siedlung - Stoccarda',
      'context' : 'Movimento Moderno',
      'image' : 'https://www.archweb.it/dwg/arch_arredi_famosi/Oud/photos/Oud_weissenhof_house_1r.jpg'
  },
  {
      'name' : 'Blocco residenziale Spangen',
      'author' : 'Brinkman',
      'date' : '1919',
      'place' : 'Rotterdam',
      'context' : 'Movimento Moderno - Hofe',
      'image' : 'https://www.architecturalrecord.com/ext/resources/archives/news/2014/01/images/slideshow/140116/1.jpg'
  },
  {
      'name' : 'Hotel nord sud',
      'author' : 'Lurcat',
      'date' : '1929',
      'place' : 'Corsica',
      'context' : 'Movimento Moderno',
      'image' : 'https://i0.wp.com/misfitsarchitecture.com/wp-content/uploads/2013/01/untitled1.jpg?w=752&ssl=1'
  },
  {
      'name' : 'Cucina di Francoforte',
      'author' : 'Shuttle-Lihotzky',
      'date' : '1926',
      'place' : 'Francoforte',
      'context' : 'Ruolo della donna nella progettazione - Movimento Moderno',
      'image' : 'https://hiddenarchitecture.net/wp-content/uploads/2017/11/frankfurtkitchen_01.jpg'
  },
  {
      'name' : 'Armadi PAX',
      'author' : 'IKEA',
      'date' : '1995',
      'place' : 'Svezia',
      'context' : 'Arredi standard',
      'image' : 'https://www.ikea.com/it/it/images/products/pax-combinazione-di-guardaroba-effetto-rovere-con-mordente-bianco__0962027_ph171206_s5.jpg'
  },
  
];

const cap10 = [
  {
      'name' : 'Ca Brutta',
      'author' : 'Giovanni Muzio',
      'date' : '1919',
      'place' : 'Milano',
      'context' : 'Ritorno al classicismo post 1ª G.M.',
      'image' : 'https://cdn.turistipercaso.it/media?src=/uploads/2023/12/ca-brutta.jpg&sharpen&save-as=webp&aspect-ratio=16:9&crop-to-fit&w=660&q=69'
  },
  {
      'name' : 'Palazzo per uffici Gualino',
      'author' : 'G. Pagano',
      'date' : '1928',
      'place' : 'Torino',
      'context' : 'Movimento Moderno',
      'image' : 'https://www.arketipomagazine.it/wp-content/uploads/sites/20/2014/12/palazzo_gualino_03-436x291.jpg'
  },
  {
      'name' : 'Villa Colli',
      'author' : 'G. Pagano',
      'date' : '1929',
      'place' : 'Torino',
      'context' : 'Modernità + tradizione rurale',
      'image' : 'https://www.antithesi.info/images/foto/villa_colli/web_Villa-Colli-fronte.jpg'
  },
  {
      'name' : 'Mostra dellarchitettura rurale',
      'author' : 'G. Pagano',
      'date' : '1936',
      'place' : 'Milano - VI Triennale',
      'context' : 'Architettura rurale',
      'image' : 'https://freight.cargo.site/w/948/q/94/i/1f364719b8251f9964152cb49ca6372f935ad273915b784f9bbe293e695f704c/Giusppe-Pagano-RURAL-Ciclostile-Architettura-rurale.jpg'
  },
  {
      'name' : 'Elettrotreno Etr200',
      'author' : 'G. Pagano produzione Breda',
      'date' : '1936',
      'place' : 'Milano',
      'context' : 'Razionalismo italiano',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Elettrotreno_ETR_232_interno.JPG/220px-Elettrotreno_ETR_232_interno.JPG'
  },
  {
      'name' : 'Sala dattesa di uno studio medico',
      'author' : 'Bottoni e Pucci',
      'date' : '1936',
      'place' : 'Triennale di Milano',
      'context' : 'Razionalismo italiano',
      'image' : 'https://www.area-arch.it/wp-content/uploads/sites/6/2019/09/P.-Bottoni-M.-Pucci-“Sala-di-attesa-per-lo-studio-di-un-medico”-VI-Triennale-di-Milano-1936.-Archivio.jpg'
  },
  {
      'name' : 'Interno sede Bocconi',
      'author' : 'G. Pagano',
      'date' : '1939',
      'place' : 'Milano',
      'context' : 'Razionalismo italiano',
      'image' : 'https://www.disegnoallitaliana.it/wp-content/uploads/2020/09/Interno-Bocconi.jpg'
  },
  {
      'name' : 'Casa a struttura in acciaio',
      'author' : 'G. Pagano',
      'date' : '1933',
      'place' : 'V Triennale di Milano',
      'context' : 'Razionalismo italiano',
      'image' : 'https://www.lombardiabeniculturali.it/img_db/bcf/3u030/3/l/F-SUP-3u030-0002193-IMG-0000988613.jpg'
  },
  {
      'name' : 'Sede Bocconi',
      'author' : 'G. Pagano',
      'date' : '1937',
      'place' : 'Milano',
      'context' : 'Razionalismo italiano',
      'image' : 'https://i.pinimg.com/564x/49/4e/bd/494ebdb32ffe06c3665abc9df949e9a4.jpg'
  },
  {
      'name' : 'Tavola degli orrori',
      'author' : 'Pietro Maria Bardi',
      'date' : '1931',
      'place' : 'II Esposizione di Roma',
      'context' : 'Critica alle opere tradizionalistehttps://www.lombardiabeniculturali.it/img_db/bca/3m080/1/l/SC_A_3m080-00038_IMG-0000187291.jpg',
      'image' : 'https://bonapartedotblog.wordpress.com/wp-content/uploads/2019/05/image_gallery.jpg'
  },
  {
      'name' : 'Novocomun',
      'author' : 'G. Terragni',
      'date' : '1927',
      'place' : 'Como',
      'context' : 'Razionalismo italiano',
      'image' : 'https://www.lombardiabeniculturali.it/img_db/bca/3m080/1/l/SC_A_3m080-00038_IMG-0000187291.jpg'
  },
  {
      'name' : 'Casa del fascio',
      'author' : 'G. Terragni',
      'date' : '1932',
      'place' : 'Como',
      'context' : 'Razionalismo italiano',
      'image' : 'https://www.lombardiabeniculturali.it/img_db/bca/3m080/1/l/SC_A_3m080-00039_IMG-0000187305.jpg'
  },
  {
      'name' : 'Macchina da scrivere Lettera 22',
      'author' : 'M. Nizzoli produzione Olivetti',
      'date' : '1950',
      'place' : 'Ivrea',
      'context' : '',
      'image' : 'http://www.typewriterstory.com/wp-content/uploads/2020/09/Senza-titolo-19.png'
  },
  {
      'name' : 'Casa Rustici',
      'author' : 'G. Terragni',
      'date' : '1933',
      'place' : 'Milano',
      'context' : 'Razionalismo italiano',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/6/64/Milano_casa_Rustici.JPG'
  },
  {
      'name' : 'Palazzo di giustizia',
      'author' : 'M. Piacentini',
      'date' : '1933',
      'place' : 'Milano',
      'context' : 'Modernità + tradizione - Anni 30 Italia',
      'image' : 'https://tribunale-milano.giustizia.it/cmsresources/cms/images/foto81_2_d0.jpg'
  },
  {
      'name' : 'Ricostruzione 2º tratto Via Roma',
      'author' : 'M. Piacentini',
      'date' : '1933',
      'place' : 'Torino',
      'context' : 'Modernità + tradizione - Anni 30 Italia',
      'image' : 'https://www.museotorino.it/images/7c/85/f5/43/7c85f54367fe4101ab623b12f7c4ad29-1.jpg?VSCL=100'
  },
  {
      'name' : 'Città universitaria',
      'author' : 'M. Piacentini',
      'date' : '1932',
      'place' : 'Roma',
      'context' : 'Modernità + tradizione - Anni 30 Italia',
      'image' : 'https://www.secondamanoitalia.it/wp-content/uploads/2021/01/Roma-quartiere-San-Lorenzo.-Statua-della-Minerva-e-Rettorato-della-Citta-universitaria.jpg'
  },
  {
      'name' : 'Stazione Santa Maria Novella',
      'author' : 'G. Michelucci',
      'date' : '1933',
      'place' : 'Firenze',
      'context' : 'Moderno',
      'image' : 'https://www.florencecity.it/wp-content/uploads/2017/07/Stazione-SFM2.jpg'
  },
  {
      'name' : 'Palazzo delle poste',
      'author' : 'G. Vaccaro',
      'date' : '1932',
      'place' : 'Napoli',
      'context' : 'Monumentalità',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Palazzo_dell_Poste%2C_Piazza_Matteotti.jpg/1200px-Palazzo_dell_Poste%2C_Piazza_Matteotti.jpg'
  },
  {
      'name' : 'Palazzo delle poste',
      'author' : 'Libera e De Renzi',
      'date' : '1933',
      'place' : 'Roma',
      'context' : 'Modernità',
      'image' : 'https://archidiap.com/beta/assets/uploads/2014/10/Veduta-generale2-1024x682.jpg'
  },
  {
      'name' : 'Foro italico, Stadio dei marmi',
      'author' : 'E. Del Debbio',
      'date' : '1930',
      'place' : 'Roma',
      'context' : 'Monumentalià - Fascismo italiano',
      'image' : 'https://artepiu.info/wp-content/uploads/2020/09/Roma-Stadio-dei-Marmi-4-750x410.jpg'
  },
  {
      'name' : 'Dispensario antitubercolare',
      'author' : 'I. Gardella',
      'date' : '1935',
      'place' : 'Alessandria',
      'context' : 'Fascismo',
      'image' : 'https://i.pinimg.com/550x/d7/e9/cb/d7e9cbb59865c2a050c1c2e3f880bddd.jpg'
  },
  {
      'name' : 'Società ippica torinese',
      'author' : 'C. Mollino',
      'date' : '1936',
      'place' : 'Torino',
      'context' : 'Fascismo',
      'image' : 'https://www.museotorino.it/images/89/9b/55/48/899b5548caba42d0a4adc21dc492c2d3-1.jpg?VSCL=100'
  },
  {
      'name' : 'Colonia marina',
      'author' : 'A. Mazzoni',
      'date' : '1926',
      'place' : 'Pisa',
      'context' : 'Fascismo - Influenza futurista colonie',
      'image' : 'https://www.artefascista.it/CALAMBRONE%20(PISA)%20-%20FASCIO/(WEB)(OK)-1-Calambrone---Pisa-Colonia-Rosa-Maltoni-Mussolini-copia.jpg'
  },
  {
      'name' : 'Colonia marina',
      'author' : 'C. Busiri-Vici',
      'date' : '1934',
      'place' : 'Cattolica',
      'context' : 'Fascismo - Influenza futurista colonie',
      'image' : 'https://www.sigecweb.beniculturali.it/images/fullsize/ICCD1070520/ICCD15664435_SABAPRAAFS98604.jpg'
  },
  {
      'name' : 'Rampa musei Vaticani',
      'author' : 'G. Momo',
      'date' : 1930,
      'place' : 'Città del Vaticano',
      'context' : 'Nascita stato del Vaticano',
      'image' : 'https://michelangelobuonarrotietornato.com/wp-content/uploads/2019/09/f077a751faaaca42887fa897d244e7e8.jpg?w=640'
  },
  {
      'name' : 'Manifesto esposizione universale E42',
      'author' : 'G. Quaroni',
      'date' : '1939',
      'place' : 'Roma',
      'context' : 'Esposizione universale Roma - Fascismo',
      'image' : 'https://www.sigecweb.beniculturali.it/images/fullsize/ICCD1022838/ICCD11443331_05761_VE%2045469_B.jpg'
  },
  {
      'name' : 'Palazzo dei congressi',
      'author' : 'A. Libera',
      'date' : '1937',
      'place' : 'Roma',
      'context' : 'Esposizione universale Roma - Fascismo - Monumentalità',
      'image' : 'https://upload.wikimedia.org/wikipedia/it/9/96/Roma_2011_08_16_Palazzo_dei_Congressi_fronte.jpg'
  },
  {
      'name' : 'Palazzo della civiltà italiana',
      'author' : 'G. Guerrini',
      'date' : '1937',
      'place' : 'Roma',
      'context' : 'Esposizione universale Roma - Fascismo - Monumentalità',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/8/88/PALACIVILTA888.jpg'
  },
  {
      'name' : 'Casa dellarte - Haus der Kunst',
      'author' : 'P. Troost',
      'date' : '1933',
      'place' : 'Monaco',
      'context' : 'Monumentalità - Nazismo',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/5/55/München_Haus_der_Kunst_2009.jpg'
  },
  {
      'name' : 'Templi dei martiri',
      'author' : 'P. Troost',
      'date' : '1935',
      'place' : 'Monaco',
      'context' : 'Monumentalità - Nazismo',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/9/99/Bundesarchiv_Bild_183-S22310%2C_München%2C_Königsplatz%2C_Ehrentempel.jpg'
  },
  {
      'name' : 'Zeppelinfeld',
      'author' : 'A. Speer',
      'date' : '1934',
      'place' : 'Norimberga',
      'context' : 'Monumentalità - Nazismo',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Bundesarchiv_Bild_183-1982-1130-502%2C_Nürnberg%2C_Reichsparteitag%2C_Lichtdom.jpg/640px-Bundesarchiv_Bild_183-1982-1130-502%2C_Nürnberg%2C_Reichsparteitag%2C_Lichtdom.jpg'
  },
  {
      'name' : 'Padiglione Germania',
      'author' : 'A. Speer',
      'date' : '1937',
      'place' : 'Esposizione universale di Parigi',
      'context' : 'Monumentalità - Nazismo',
      'image' : 'https://www.repstatic.it/content/periodici/img/d/2015/04/20/112257485-4c3810e3-7f5b-47bf-909e-33fe2c9a4747.jpg'
  },
  {
      'name' : 'Modello della nuova Berlino di Hitler',
      'author' : 'A. Speer',
      'date' : '1939',
      'place' : 'Berlino',
      'context' : 'Nazismo',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Bundesarchiv_Bild_146III-373%2C_Modell_der_Neugestaltung_Berlins_%28%22Germania%22%29.jpg/220px-Bundesarchiv_Bild_146III-373%2C_Modell_der_Neugestaltung_Berlins_%28%22Germania%22%29.jpg'
  },
  {
      'name' : 'Grosse Halle modello',
      'author' : 'A. Speer',
      'date' : '1939',
      'place' : 'Berlino',
      'context' : 'Nazismo',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Bundesarchiv_Bild_146-1986-029-02%2C_%22Germania%22%2C_Modell_%22Große_Halle%22.jpg'
  },
  {
      'name' : 'Olympiastadion',
      'author' : 'A. Speer',
      'date' : '1936',
      'place' : 'Berlino',
      'context' : 'Olimpiadi 1936 - Nazismo',
      'image' : 'https://c8.alamy.com/compit/bhdg00/sport-giochi-olimpici-berlino-1936-bhdg00.jpg'
  },
  {
      'name' : 'Nuova cancelleria',
      'author' : 'A. Speer',
      'date' : '1939',
      'place' : 'Berlino',
      'context' : 'Nazismo',
      'image' : 'https://patrimonio.archivioluce.com/luce-web/imageViewPort/720?imageName=ATTUALITA/A35-234/A00113841.JPG'
  },
  {
      'name' : 'Mausoleo di Lenin',
      'author' : 'A. Scusev',
      'date' : '1929',
      'place' : 'Mosca',
      'context' : 'Russia di Stalin - Ancora influenza avanguardie ma monumentalià',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Mauzoleumlenina_%28cropped%29.jpeg/1200px-Mauzoleumlenina_%28cropped%29.jpeg'
  },
  {
      'name' : 'Piano di Mosca',
      'author' : '',
      'date' : '1935',
      'place' : 'Mosca',
      'context' : 'Russia di Stalin',
      'image' : 'https://c8.alamy.com/compit/fp68wr/mosca-piano-di-mosca-1882-mappa-antichi-fp68wr.jpg'
  },
  {
      'name' : 'Teatro dellarmata rossa',
      'author' : 'K. Alabyan',
      'date' : '1934',
      'place' : 'Mosca',
      'context' : 'Ritorno al classicismo',
      'image' : 'https://casabellaweb.eu/wp-content/uploads/2012/12/Teatro-Armata-Rossa-Mosca-1940-imagecredits-Sergei-Dorokhovsky-CC-BY-SA-3.0.jpg'
  },
  {
      'name' : 'Padiglione sovietico',
      'author' : 'B. Iofan',
      'date' : '1937',
      'place' : 'Parigi',
      'place' : 'Esposizione universale di Parigi',
      'image' : 'https://i1.wp.com/www.senzatregua.it/wp-content/uploads/2017/05/padiglione-sovietico1.jpg'
  },
  {
      'name' : 'Biblioteca Lenin',
      'author' : 'V. Shchuko',
      'date' : '1927',
      'place' : 'Mosca',
      'context' : 'Russia di Stalin - Ritorno al classicismo',
      'image' : 'https://c8.alamy.com/compit/rbjjxa/mosca-russia-20-settembre-2014-costruzione-dello-stato-russo-biblioteca-ex-lenin-biblioteca-la-stazione-della-metropolitana-con-lo-stesso-nome-rbjjxa.jpg'
  },
  {
      'name' : 'Hotel Ucraina',
      'author' : 'A. Mordvinov',
      'date' : '1950',
      'place' : 'Mosca',
      'context' : 'Russia di Stalin - Ritorno al classicismo - Monumentalità',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Moscow_Ukraina_hotel.jpg'
  },
  
];

const cap8 = [
  {
      'name' : 'Das Andere',
      'author' : 'Adlf Loos',
      'date' : '1903',
      'place' : 'Austria',
      'context' : 'Precursore Movimento Moderno',
      'image' : 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhj8H0A4KThlESdMlotl3jG4VNHabTEbOBIOd142hyphenhyphenmR50Lq7YEzCmN1KkXhx_0dW1HB5ww9QuUjPUpEZgnM9SZWcxA46azwLxaA7J8d2dx5d70Dk98mchhNAz0rGtCi3hCdOfgSn1FdEGO/s320/3_loos-mag-with-advertisment-of-client-1903-thumb-500x574-7224.jpeg'
  },
  {
      'name' : 'Cafè Museum',
      'author' : 'Adolf Loos',
      'date' : '1899',
      'place' : 'Vienna',
      'context' : 'Precursore Movimento Moderno',
      'image' : 'https://www.cafemuseum.at/xstorage/2/_cache/Cafe_Museum_Loos_7938_1_a879bba86292177119a519d42ed9ac5f.jpg'
  },
  {
      'name' : 'Casa in Michaelerplatz',
      'author' : 'Adolf Loos',
      'date' : '1910',
      'place' : 'Vienna',
      'context' : 'Precursore Movimento Moderno',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Looshaus_Michaelerplatz.JPG/1200px-Looshaus_Michaelerplatz.JPG'
  },
  {
      'name' : 'Vignetta satirica su Casa in Michaelerplatz',
      'author' : '',
      'date' : '1910',
      'place' : 'Vienna',
      'context' : '',
      'image' : 'https://3.bp.blogspot.com/-oZEyvpuMrFU/UPmY45La_rI/AAAAAAAABHI/WFp4_OiENYs/s1600/vignettadelperiodo.jpg'
  },
  {
      'name' : 'Interno sartoria Goldman',
      'author' : 'Adolf Loos',
      'date' : '',
      'place' : 'Vienna',
      'context' : 'Precursore Movimento Moderno',
      'image' : 'https://archchiarabenvenuti.wordpress.com/wp-content/uploads/2017/08/interno_goldman-e-salatsch_loos.jpg?w=620'
  },
  {
      'name' : 'Casa Steiner',
      'author' : 'Adolf Loos',
      'date' : '1910',
      'place' : 'Vienna',
      'context' : 'Precursore Movimento Moderno',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Wien_Hietzing%2C_St.-Veit-Gasse_10_-_1.JPG'
  },
  {
      'name' : 'Progetto concorso Chicago Tribune',
      'author' : 'Adolf Loos',
      'date' : '1922',
      'place' : 'Chicago',
      'context' : 'Richiamo allarchitettura classica',
      'image' : 'https://lh3.googleusercontent.com/proxy/VqGWbLWe5Nnj9Iil63MJf_79y7OI_At7pdsWtNF6bj3pW7ANzFzAuNIR3jMB2VsmyetrQbSArsIWuz00NWeEQUyS1QNGE4rLGsdEkQDjs2EJz5CUlj-n-KRAWwq_-u9U'
  },
  {
      'name' : 'LOfficina, sala studio di DAnnunzio',
      'author' : '',
      'date' : '',
      'place' : '',
      'context' : '',
      'image' : 'https://inchiostrovirtuale.it/wp-content/uploads/2017/03/officina_vittoriale.jpg'
  },
  {
      'name' : 'Casa alla Werkbund Siedlung',
      'author' : 'Adolf Loos',
      'date' : '1930',
      'place' : 'Vienna',
      'context' : 'Raumplan e case unifamiliari',
      'image' : 'https://www.archweb.it/dwg/arch_arredi_famosi/adolf_loos/siedlung/Werkbundsiedlung_loos_1.jpg'
  },
  {
      'name' : 'Citè industrielle',
      'author' : 'Tony Garnier',
      'date' : '1917',
      'place' : 'Parigi',
      'context' : 'Precursori Movimento Moderno',
      'image' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6EfCrtNIDKaTe5jLMvn4erk5JLH72EdkwNNyk_nDl0ZEAdRgNciuPeT3zpvENWdJEvOw&usqp=CAU'
  },
  {
      'name' : 'Grande Halle del mercato del bestiame',
      'author' : 'Tony Garnier',
      'date' : '1906',
      'place' : 'Lione',
      'context' : 'Precursori Movimento Moderno',
      'image' : 'https://images.placesonline.com/photos/79642__halle_tony_garnier.jpg?quality=80&w=710&h=510&mode=crop'
  },
  {
      'name' : 'Quartiere Etats-Unis',
      'author' : 'Tony Garnier',
      'date' : '1917',
      'place' : 'Lione',
      'context' : 'Precursori Movimento Moderno',
      'image' : 'https://4.bp.blogspot.com/-GC4QVDC6YEM/TvoVfFT-wmI/AAAAAAAAB-U/Tm7yPTIhvzk/s1600/DSC08765.JPG'
  },
  {
      'name' : 'Edificio in rue Vavin',
      'author' : 'Sauvage e Sarazin',
      'date' : '1912',
      'place' : 'Parigi',
      'context' : 'Precursori Movimento Moderno',
      'image' : 'https://blogmontparnos.paris/wp-content/uploads/2021/01/img-9_c-1024x824.jpg'
  },
  {
      'name' : 'Comparazione dei diversi brevetti calcestruzzo armato',
      'author' : 'Christophe',
      'date' : '1902',
      'place' : 'Francia',
      'context' : 'Epoca del calcestruzzo armato',
      'image' : 'https://asbwilbot.fr/wp-content/uploads/2014/10/Beton-arme.jpg'
  },
  {
      'name' : 'Edificio n°25 in rue Franklin',
      'author' : 'Perret',
      'date' : '1903',
      'place' : 'Parigi',
      'context' : 'Precursori Movimento Moderno',
      'image' : 'https://cajondearquitecto.com/wp-content/uploads/2013/04/auguste-perret-25-rue-franklin-2.jpg?w=563&h=1068'
  },
  {
      'name' : 'Garage Ponthieu',
      'author' : 'Perret',
      'date' : '1906',
      'place' : 'Parigi',
      'context' : 'Precursori Movimento Moderno',
      'image' : 'https://c8.alamy.com/compit/2b8tm7r/vista-interna-del-garage-ponthieu-automobiles-costruito-da-auguste-perret-51-rue-de-ponthieu-8-arrondissement-parigi-vue-interieure-du-garage-ponthieu-automobiles-construit-par-auguste-perret-51-rue-de-ponthieu-parigi-viiieme-arr-photographie-de-charles-lansiaux-1855-1939-tigre-au-gelatino-bromure-d-argent-1905-1920-parigi-musee-carnavalet-2b8tm7r.jpg'
  },
  {
      'name' : 'Sartoria Henri Esders',
      'author' : 'Perret',
      'date' : '1919',
      'place' : 'Parigi',
      'context' : 'Precursori Movimento Moderno',
      'image' : 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh5EVsXkBNXrm9t_vAg-2DENOgNItvI7Dzymb7ktiBFzAMAZu-6QOXc_Cttdqp3FoRxFvD81Z6tFbZMv0XVRhb8R6u0oGVnJW6ialrMv4tZg3gS5i1s6wxrT5fzcOCrGIVsxzBObeq6yYAI/s1600/%2523+47711_6.jpg'
  },
  {
      'name' : 'Interno Chiesa Notre-Dame',
      'author' : 'Perret',
      'date' : '1922',
      'place' : 'Raincy',
      'context' : 'Precursori Movimento Moderno',
      'image' : 'https://img.atlasobscura.com/VdgKPUdFthbeu0-zi6fYBM3X8eEDlI-b1ZzICQEIrJU/rs:fill:780:520:1/g:ce/c:711:474:nowe:0:0/q:81/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS91/cGxvYWRzL3BsYWNl/X2ltYWdlcy82YjFi/ZThiOWQ0YTMzNWE0/OWRkYWRkMzU3YjUx/ZjYyYnJhaW5jeS5q/cGc.jpg'
  },
  {
      'name' : 'Fiat Lingotto',
      'author' : 'Giacomo Mattè Trucco',
      'date' : '1915',
      'place' : 'Torino',
      'context' : 'Precursori Movimento Moderno',
      'image' : 'https://atlas.landscapefor.eu/content/uploads/media/306/2018-09-24-lingotto-dallalto-storia.jpg'
  },
  {
      'name' : 'Scala elicoidale stadio Berta',
      'author' : 'Nervi',
      'date' : '1930',
      'place' : 'Firenza',
      'context' : 'Precursori Movimento Moderno - Estetica del cemento armato',
      'image' : 'https://scontent.ftrn3-1.fna.fbcdn.net/v/t1.6435-9/95629557_2934144166700210_1547793784119492608_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=u_k8CuVVRgIAb6oUIXm&_nc_ht=scontent.ftrn3-1.fna&oh=00_AfC4QoEl6fshulp3vUtajLC3AYM-FtoE_wgXJcOWYyZkPA&oe=66584EE6'
  },
  {
      'name' : 'Wood Church',
      'author' : 'Asplund',
      'date' : '1918',
      'place' : 'Stoccolma',
      'context' : 'Classicsimo semplificato e legame con ambiente circostante',
      'image' : 'https://arquiscopio.com/archivo/wp-content/uploads/2012/08/120829_Asplund_Capilla-01.jpg'
  },
  {
      'name' : 'Bblioteca civica di Stoccolma',
      'author' : 'Asplund',
      'date' : '1920',
      'place' : 'Stoccolma',
      'context' : 'Classicsimo semplificato e legame con ambiente circostante',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/AsplundGunnarBibliotheque.jpg/260px-AsplundGunnarBibliotheque.jpg'
  },
  {
      'name' : 'Club lavoratori',
      'author' : 'Alvar Aalto',
      'date' : '1924',
      'place' : 'Jyväskylä',
      'context' : 'Movimento Moderno',
      'image' : 'https://www.alvaraalto.fi/wp-content/uploads/2018/07/Jyväskylän-työväentalo-1924-1925-vuonna-1997-kuva-maija-holma-alvar-aalto-saatio-L-1291-988x659.jpg'
  },
  {
      'name' : 'Biblioteca di Viipuri',
      'author' : 'Alvar Aalto',
      'date' : '1927',
      'place' : 'Vyborg',
      'context' : 'Razionalismo - Movimento Moderno',
      'image' : 'https://www.bookandthecity.it/wp-content/uploads/2021/04/Vyborg_Library_Interior2-1024x682.jpeg'
  },
  {
      'name' : 'Sanatorio di Paimio',
      'author' : 'Alvar Aalto',
      'date' : '1929',
      'place' : 'Paimio',
      'context' : 'Razionalismo - Movimento Moderno',
      'image' : 'https://www.domusweb.it/content/dam/domusweb/it/architecture/gallery/2024/01/12/la-sorprendente-attualit-del-sanatorio-di-paimio-di-alvar-e-aino-aalto/domus-paimio-1.jpg'
  },
  {
      'name' : 'Sgabello Viipuri',
      'author' : 'Alvar Aalto',
      'date' : '1927',
      'place' : 'Vyborg',
      'context' : 'Razionalismo - Movimento Moderno',
      'image' : 'https://www.arredativo.it/wp-content/uploads/2011/04/aretkstool60.jpg'
  },
  {
      'name' : 'Balconata Sanatorio di Paimio',
      'author' : 'Alvar Aalto',
      'date' : '1929',
      'place' : 'Paimio',
      'context' : 'Razionalismo - Movimento Moderno',
      'image' : 'https://lineediricercaphd31.wordpress.com/wp-content/uploads/2016/04/23.jpg?w=840'
  },
  {
      'name' : 'Stanza degenza Sanatorio di Paimio',
      'author' : 'Alvar Aalto',
      'date' : '1929',
      'place' : 'Paimio',
      'context' : 'Razionalismo - Movimento Moderno',
      'image' : 'https://www.domusweb.it/content/dam/domusweb/it/architecture/gallery/2024/01/12/la-sorprendente-attualit-del-sanatorio-di-paimio-di-alvar-e-aino-aalto/domus-paimio-epoca-6.jpg.foto.rmedium.jpg'
  },
  {
      'name' : 'Poltrona Paimio',
      'author' : 'Alvar Aalto',
      'date' : '1931',
      'place' : 'Paimio',
      'context' : 'Razionalismo - Movimento Moderno',
      'image' : 'https://media.fds.fi/product_image/800/Armchair-41-Paimio-Sanatorium-Anniversary-Edition-cut-out.jpg'
  },
  {
      'name' : 'Villa Mairea',
      'author' : 'Alvar Aalto',
      'date' : '1938',
      'place' : 'Noormarkku',
      'context' : 'Architettura organica',
      'image' : 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/58/6c/9b/alvar-aalto.jpg?w=1200&h=-1&s=1'
  },
  {
      'name' : 'Interno Villa Mairea',
      'author' : 'Alvar Aalto',
      'date' : '1938',
      'place' : 'Noormarkku',
      'context' : 'Architettura organica',
      'image' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTovNoNzGxrfWrOVW-4b4CMAd36OKianUWtvvbY3A1MQPpHXjzw2vhu1hgaVDkmjnzTPhw&usqp=CAU'
  },
];

const cap7 = [
  {
      'name' : 'Padiglione del vetro',
      'author' : 'Bruno Taut',
      'date' : '1914',
      'place' : 'Colonia',
      'context' : 'Esposizione Deutscher Werkbund',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Taut_Glass_Pavilion_exterior_1914.jpg/260px-Taut_Glass_Pavilion_exterior_1914.jpg'
  },
  {
      'name' : 'Cattedrale',
      'author' : 'Feininger',
      'date' : '1919',
      'place' : 'Germania',
      'context' : 'Consiglio del lavoro per larte',
      'image' : 'https://wahooart.com/Art.nsf/O/8LSKQ8/$File/Lyonel-Feininger-Cathedral-of-Socialism.JPG'
  },
  {
      'name' : 'Grande teatro',
      'author' : 'Hans Poelzig',
      'date' : '1918',
      'place' : 'Berlino',
      'context' : 'Architettura espressionista',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Grosses_Schauspielhaus.jpg'
  },
  {
      'name' : 'Osservatorio astronomico di Einstein',
      'author' : 'Eric Mendelsohn',
      'date' : '1917',
      'place' : 'Potsdam',
      'context' : 'Architettura espressionista',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Einsteinturm_7443.jpg/640px-Einsteinturm_7443.jpg'
  },
  {
      'name' : 'Casa unifamiliare al Weissenhof',
      'author' : 'Hans Scharoun',
      'date' : '1927',
      'place' : 'Stoccarda',
      'context' : 'Architettura espressionista',
      'image' : 'https://www.archweb.com/wp-content/uploads/2023/07/House-33_Scharoun_01-1024x730.jpg'
  },
  {
      'name' : 'Primo Gotheanum',
      'author' : 'Dornach',
      'date' : '1913',
      'place' : 'Basilea',
      'context' : '',
      'image' : 'https://www.artedellio.it/wp-content/uploads/2023/01/01-vista-sud-ovest-pdf.jpg'
  },
  {
      'name' : 'Secondo Gotheanum',
      'author' : 'Steiner',
      'date' : '1923',
      'place' : 'Basilea',
      'context' : 'Architettura espressionista',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Goetheanum_Dornach2.jpg'
  },
  {
      'name' : 'Chilehaus',
      'author' : 'Hoger',
      'date' : '1923',
      'place' : 'Amburgo',
      'context' : 'Espressionismo nella forma ma ritorno al gotico',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/9/93/Chilehaus_-_Hamburg.jpg'
  },
  {
      'name' : 'Manifesto dell architettura futurista',
      'author' : 'Antonio Sant Elia',
      'date' : '1914',
      'place' : 'Italia',
      'context' : 'Futurismo italiano',
      'image' : 'https://lebbeuswoods.wordpress.com/wp-content/uploads/2009/11/se-man1copy.jpg?w=600&h=395'
  },
  {
      'name' : 'Città nuova',
      'author' : 'Antonio Sant Elia',
      'date' : '1914',
      'place' : 'Italia',
      'context' : 'Futurismo italiano',
      'image' : 'https://www.lombardiabeniculturali.it/img_db/bcoa/1m030/1/l/SC_D_1m030-00156_IMG-0000499855.jpg'
  },
  {
      'name' : 'Sala futurista',
      'author' : 'Fortunato Depero',
      'date' : '1923',
      'place' : 'Monza',
      'context' : 'Secondo Futurismo italiano',
      'image' : 'https://catalogo.fondazionezeri.unibo.it/foto/200000/177200/176884.jpg'
  },
  {
      'name' : 'Tazzina servizio Gancio',
      'author' : 'Mazzotti produzione Ceramica Mazzotti',
      'date' : '1929',
      'place' : 'Albisola Marina',
      'context' : 'Secondo Futurismo italiano',
      'image' : 'https://vintage-shop.it/107616-large_default/ANTICO-SERVIZIO-TE-CAFFE-TAZZE-PORCELLANA-M-G-A--Mazzotti-Giuseppe-Albisola-DECO.jpg'
  },
  {
      'name' : 'Sala da pranzo futurista',
      'author' : 'Dottori',
      'date' : '1930',
      'place' : 'Italia',
      'context' : 'Secondo Futurismo italiano',
      'image' : 'https://www.anca-aste.it/photos/auctions/orig/333/347.jpg'
  },
  {
      'name' : 'Brevetto e bottiglia Campari Soda',
      'author' : 'Fortunato Depero',
      'date' : '1932',
      'place' : 'Italia',
      'context' : 'Secondo Futurismo italiano',
      'image' : 'https://www.ilcontroverso.it/wp-content/uploads/2021/08/camparisoda_progettazione_smartalks-1-1024x725.jpg'
  },
  {
      'name' : 'Manifesto Campari',
      'author' : 'Fortunato Depero',
      'date' : '1926',
      'place' : 'Italia',
      'context' : 'Secondo Futurismo italiano',
      'image' : 'https://depero.it/wp-content/uploads/2019/05/1926-27_CORDIAL_6.jpg'
  },
  {
      'name' : 'Progetto centrale elettrica',
      'author' : 'Antonio Sant Elia',
      'date' : '1914',
      'place' : 'Milano',
      'context' : 'Futurismo italiano',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/0/06/Centrale_elettrica_Sant%27Elia.jpg'
  },
  {
      'name' : 'Padiglione tipografico',
      'author' : 'Fortunato Depero',
      'date' : '1927',
      'place' : 'III Biennale di Monza',
      'context' : 'Secondo Futurismo italiano',
      'image' : 'https://depero.it/wp-content/uploads/2019/04/927_Pad-Libro-insieme.jpg'
  },
  {
      'name' : 'Padiglione del Futurismo',
      'author' : 'Enrico Prampolini',
      'date' : '1928',
      'place' : 'Esposizione internazionale di Torino',
      'context' : 'Secondo Futurismo italiano',
      'image' : 'https://www.lindustriadellecostruzioni.it/ind_prod/wp-content/uploads/2023/07/prampolini-1928-torino-1024x770.jpg'
  },
  {
      'name' : 'Padiglione delle comunità artigiane',
      'author' : 'Sartoris',
      'date' : '1928',
      'place' : 'Esposizione internazionale di Torino',
      'context' : 'Secondo Futurismo italiano',
      'image' : 'https://scontent.ftrn3-1.fna.fbcdn.net/v/t31.18172-8/12615547_1701313166748799_7793529201284845178_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=R-O7mImfgboAb7wkvvR&_nc_ht=scontent.ftrn3-1.fna&oh=00_AfASKgNq4o4OfUhMu2oRyfGbAzwg5Bunb5pv4aFBSb3FRA&oe=66582189'
  },
  {
      'name' : 'Mostra delle opere di Malevic',
      'author' : 'Kazimir Malevic',
      'date' : '1915',
      'place' : 'San Pietroburgo',
      'context' : 'Costruttivismo russo',
      'image' : 'https://www.artesvelata.it/wp-content/uploads/2019/10/Opere-di-Malevič-nell’Art-Bureau-della-gallerista-russa-Nadeshda-Dobychina-Arte-Svelata.jpg'
  },
  {
      'name' : 'Tribuna Lenin',
      'author' : 'El Lissitzky',
      'date' : '1920',
      'place' : 'Russia',
      'context' : 'Costruttivismo russo',
      'image' : 'https://arthive.com/res/media/img/ox800/work/7ab/515668.jpg'
  },
  {
      'name' : 'Spezza i bianchi con il cuneo rosso',
      'author' : 'El Lissitzky',
      'date' : '1919',
      'place' : 'Russia',
      'context' : 'Costruttivismo russo',
      'image' : 'https://www.arengario.it/wp-content/uploads/2012/06/lissitzki-colpisci.jpg'
  },
  {
      'name' : 'Monumento alla Terza Internazionale',
      'author' : 'Tatlin',
      'date' : '1920',
      'place' : 'Russia',
      'context' : 'Costruttivismo russo',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Tatlin%27s_Tower_maket_1919_year.jpg/1200px-Tatlin%27s_Tower_maket_1919_year.jpg'
  },
  {
      'name' : 'Grattacieli orizzontali',
      'author' : 'El Lissitzky',
      'date' : '1925',
      'place' : 'Russia',
      'context' : 'Costruttivismo russo',
      'image' : 'https://mf.b37mrtl.ru/rbthmedia/images/2021.12/article/61bcb17b5be06a12f6239f29.jpg'
  },
  {
      'name' : 'Progetto Palazzo del Lavoro',
      'author' : 'Fratelli Vesnin',
      'date' : '1923',
      'place' : 'Russia',
      'context' : 'Costruttivismo russo',
      'image' : 'https://areeweb.polito.it/didattica/01CMD/catalog/017/1/040.jpg'
  },
  {
      'name' : 'Club Rusakov',
      'author' : 'Mel nikov',
      'date' : '1927',
      'place' : 'Mosca',
      'context' : 'Costruttivismo russo, club operai',
      'image' : 'http://theconstructivistproject.com/upload/images/77/64/77647c129b5036dd78ee9599ac4de710.jpg'
  },
  {
      'name' : 'Club Zuev',
      'author' : 'Golosov',
      'date' : '1928',
      'place' : 'Mosca',
      'context' : 'Costruttivismo russo, club operai',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Zuev_Workers%27_Club_-_Moscow_%281928%29.jpg'
  },
  {
      'name' : 'Narkomfin (Commissariato del popolo per le finanze)',
      'author' : 'Ginzburg e Milinis',
      'date' : '1928',
      'place' : 'Mosca',
      'context' : 'Costruttivismo russo',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Moscow%2C_Narkomfin_building_in_May_2021_03.jpg/250px-Moscow%2C_Narkomfin_building_in_May_2021_03.jpg'
  },
  {
      'name' : 'Palazzo dei Soviet',
      'author' : 'Boris Iofan',
      'date' : '1930',
      'place' : 'Russia',
      'context' : 'Ritorno al tradizionalismo',
      'image' : 'https://www.wearch.eu/wp-content/uploads/2022/03/Iofan-fig-6_web.jpg'
  },
  {
      'name' : 'Borsa di Amsterdam',
      'author' : 'Berlage',
      'date' : '1898',
      'place' : 'Amsterdam',
      'context' : 'Classicismo esterno, moderno interno',
      'image' : 'https://mywowo.net/media/images/cache/amsterdam_quartiere_luci_rosse_02_dintorni_jpg_640_336_cover_70.jpg'
  },
  {
      'name' : 'Villa Henny',
      'author' : 'Robert vant Hoff',
      'date' : '1914',
      'place' : 'Utrecht',
      'context' : 'Precursore neoplasticismo',
      'image' : 'https://miro.medium.com/v2/resize:fit:1200/1*bg2E7bmFmsu2G0Dzd3q1RQ.jpeg'
  },
  {
      'name' : 'Sedia rosso-blu',
      'author' : 'Rietveld',
      'date' : '1917',
      'place' : 'Olanda',
      'context' : 'Neoplasticismo olandese',
      'image' : 'https://classicdesign.it/media/036/635_red_and_blue_3.m.webp'
  },
  {
      'name' : 'Casa Schroder-Schrader',
      'author' : 'Rietveld',
      'date' : '1923',
      'place' : 'Utrecht',
      'context' : 'Neoplasticismo olandese',
      'image' : 'https://it.wikipedia.org/wiki/File:Rietveld_Schröderhuis_HayKranen-20.JPG'
  },
  {
      'name' : 'Interno cafè lAubette',
      'author' : 'Theo van Doesburg',
      'date' : '1928',
      'place' : 'Strasburgo',
      'context' : 'Neoplasticismo olandese',
      'image' : 'https://images.adsttc.com/media/images/578b/1c82/e58e/cec4/df00/0037/newsletter/CTL_1.jpg?1468734575'
  },
  {
      'name' : 'Cafè de Unie',
      'author' : 'Oud',
      'date' : '1925',
      'place' : 'Rotterdam',
      'context' : 'Neoplasticismo olandese',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/8/89/Rotterdam_mauritsweg_de_unie2011.jpg'
  },
  {
      'name' : 'Interno casa Schroder-Schrader',
      'author' : 'Rietveld',
      'date' : '1923',
      'place' : 'Utrecht',
      'context' : 'Neoplasticismo olandese',
      'image' : 'https://www.designbestmagazine.com/wp-content/gallery/casa-schroder_-il-de-stijl-incontra-design-e-architettura-a-utrecht/table-schroder-house-rietveld-utrecht.jpg'
  },
  {
      'name' : 'Tavolino casa Schroder-Schrader',
      'author' : 'Rietveld',
      'date' : '1923',
      'place' : 'Utrecht',
      'context' : 'Neoplasticismo olandese',
      'image' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThqPVXiKavfvfWc1vQr-ikIjAky_XRLAGd8rBqlXhadJl1SA8-iwzKtvjs89Gacy-XKJU&usqp=CAU'
  },
  {
      'name' : 'Progetto interno cafè lAubette',
      'author' : 'Theo van Doesburg',
      'date' : '1928',
      'place' : 'Strasburgo',
      'context' : 'Neoplasticismo olandese',
      'image' : 'https://c8.alamy.com/compit/rdb605/design-per-soffitto-e-pareti-di-cafe-aubette-a-strasburgo-museo-galerie-gmurzynska-autore-doesburg-theo-van-rdb605.jpg'
  },
];

const cap6 = [
  {
      'name' : 'Biglietto per Esposizione Arts & Crafts',
      'author' : '',
      'date' : '1890',
      'place' : 'Londra',
      'context' : 'Arts & Crafts',
      'image' : 'https://lacittaimmaginaria.com/wp-content/uploads/2020/02/Dettaglio-tratto-da-un-biglietto-per-The-Arts-Crafts-Exhibition-Society-640x751.jpg'
  },
  {
      'name' : 'Red House',
      'author' : 'William Morris e Philip Webb',
      'date' : '1860',
      'place' : 'Sud di Londra',
      'context' : 'Arts and Crafts',
      'image' : 'https://cdn.londonandpartners.com/asset/e0bee73cca95bf112b7f13e65bfc2319.jpg'
  },
  {
      'name' : 'Dettaglio copertura Red House',
      'author' : 'Webb',
      'date' : '1860',
      'place' : 'Sud di Londra',
      'context' : 'Arts and Crafts',
      'image' : 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjO4Fmx0s5BsoZMSNVSIQ2YIIUUZ9WbtH28xohr6AZwKoEuQsRw-bNGu3amFt9oX46RIWiI40lWHkLH2UcgjQ-Qp3-s_0lWYKeojCqic-thXdAUOEgUSr_USrjZY2IYamojQJgWbckjbAM/s1600/04_Morris_redhouse_copertura.jpg'
  },
  {
      'name' : 'Pagina catalogo sedie impagliate del Sussex',
      'author' : 'William Morris',
      'date' : '',
      'place' : 'Londra',
      'context' : 'Arts and Crafts',
      'image' : 'https://www.meisterdrucke.it/kunstwerke/1260px/English_School_-_The_Sussex_Rush-Seated_Chairs_made_by_Morris_and_Company_-_%28MeisterDrucke-424945%29.jpg'
  },
  {
      'name' : 'Acanthus Wallpaper',
      'author' : 'William Morris',
      'date' : '1875',
      'place' : 'Londra',
      'context' : 'Arts and Crafts',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Morris_Acanthus_Wallpaper_1875.jpg'
  },
  {
      'name' : 'Camera da letto Red House',
      'author' : 'William Morris',
      'date' : '1860',
      'place' : 'Londra',
      'context' : 'Arts and Crafts',
      'image' : 'https://c8.alamy.com/compit/pwn4hy/regno-unito-inghilterra-oxfordshire-kelmscott-manor-william-morris-camera-da-letto-ricamati-tessili-letto-pwn4hy.jpg'
  },
  {
      'name' : 'Kelmscott Manor in News from Nowhere',
      'author' : '',
      'date' : '1890',
      'place' : 'Inghilterra',
      'context' : 'Arts and Crafts',
      'image' : 'https://images-production.gardenvisit.com/uploads/images/114699/kelmscott_william_morris_garden_original.jpg'
  },
  {
      'name' : 'Antica villa a Clifford Chambers',
      'author' : 'Sir Benjamin Stone',
      'date' : '1900',
      'place' : 'Inghilterra',
      'context' : 'Arts and Crafts',
      'image' : 'https://d23iiv8m8qvdxi.cloudfront.net/wp-content/uploads/2016/11/8053-0.jpg'
  },
  {
      'name' : 'Homewood',
      'author' : 'Luytens',
      'date' : '1901',
      'place' : 'Hertfordshire',
      'context' : 'Arts and Crafts',
      'image' : 'https://atlive-wp.s3.eu-west-2.amazonaws.com/wp-content/uploads/First-page.jpg'
  },
  {
      'name' : 'Panchina per Little Thakeham',
      'author' : 'Lutens',
      'date' : '1902',
      'place' : 'Sussex',
      'context' : 'Arts and Crafts',
      'image' : 'https://c8.alamy.com/compit/e4gt9w/stile-lutyens-in-legno-panchina-da-giardino-e4gt9w.jpg'
  },
  {
      'name' : 'Das Englische Haus',
      'author' : 'Muthesius',
      'date' : '1904',
      'place' : 'Germania',
      'context' : 'Influenza Arts and Crafts in Germania',
      'image' : 'https://upload.wikimedia.org/wikipedia/de/e/e9/Muthesius_Das_englische_Haus.jpg'
  },
  {
      'name' : 'Casa di Voysey in Das Englische Hause',
      'author' : 'Muthesius',
      'date' : '1904',
      'place' : 'Germania',
      'context' : 'Influenza Arts and Crafts in Germania',
      'image' : "http%3A%2F%2Fwww.voysey.gotik-romanik.de%2FPrior%2527s%2520Field%2520Thumbnails%2FVoysey%2C%25201898%2C%2520Design%2520for%2520a%2520house%2520at%2520Bexhill%2C%2520for%2520A.%2520Barker%2C%2520unexecuted%2520%28Prior%27s%2520Field%29.jpg"
  },
  {
      'name' : 'Villa Olbrich',
      'author' : 'Olbrich',
      'date' : '1899',
      'place' : 'Darmstad',
      'context' : 'Colonia degli artisti Darmstad',
      'image' : 'https://api.europeana.eu/thumbnail/v3/400/5e5a557f54fbb91fbaa4866390638161'
  },
  {
      'name' : 'Casa Behrens',
      'author' : 'Peter Behrens',
      'date' : '1899',
      'place' : 'Darmstad',
      'context' : 'Colonia degli artisti Darmstad',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/0/0b/DA-Haus_Behrens1.jpg'
  },
  {
      'name' : 'Logo AEG',
      'author' : 'Peter Behrens',
      'date' : '1908',
      'place' : 'Darmstad',
      'context' : 'Deutscher Werkbund',
      'image' : 'https://designindex.it/thumb.php?s=https://www.designindex.it/foto/28/aeg.jpg&w=194&h=194'
  },
  {
      'name' : 'Catalogo AEG',
      'author' : 'Peter Behrens',
      'date' : '1910',
      'place' : 'Darmstad',
      'context' : 'Deutscher Werkbund',
      'image' : 'https://www.polano.eu/poisonorg/web/lezioni/14/immagini/immagine23.gif'
  },
  {
      'name' : 'Fabbrica turbine AEG',
      'author' : 'Peter Behrens',
      'date' : '1908',
      'place' : 'Darmstad',
      'context' : 'Deutscher Werkbund',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Berlin_AEG_Turbinenfabrik.jpg'
  },
  {
      'name' : 'Interno Fabbrica turbine AEG',
      'author' : 'Peter Behrens',
      'date' : '1908',
      'place' : 'Darmstad',
      'context' : 'Deutscher Werkbund',
      'image' : 'https://i.pinimg.com/originals/ce/93/50/ce9350e0c6870587e601341a7640685a.jpg'
  },
  {
      'name' : 'Manifesto esposizione Deutscher Werkbund',
      'author' : 'Peter Behrens',
      'date' : '1914',
      'place' : 'Darmstad',
      'context' : 'Deutscher Werkbund',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Deutsche_Werkbund-Ausstellung_Kunst_in_Handwerk%2C_Industrie_und_Handel_Architektur_Köln_1914_Oct._Peter_Behrens_A._Molling_%26_Comp._KG_Hannover_Berlin.jpg/180px-Deutsche_Werkbund-Ausstellung_Kunst_in_Handwerk%2C_Industrie_und_Handel_Architektur_Köln_1914_Oct._Peter_Behrens_A._Molling_%26_Comp._KG_Hannover_Berlin.jpg'
  },
  {
      'name' : 'Planimetria Esposizione Deutscher Werkbund',
      'author' : '',
      'date' : '1914',
      'place' : 'Colonia',
      'context' : 'Deutscher Werkbund',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Werkbund_Lageplan_1.jpg'
  },
  {
      'name' : 'Portatoast',
      'author' : 'Dresser produzione Hukin and Heath',
      'date' : '1878',
      'place' : 'Scozia',
      'context' : 'Arts and Crafts',
      'image' : 'https://i0.wp.com/www.sbandiu.com/wp-content/uploads/2019/10/porta-toast.jpg?fit=846%2C946&ssl=1'
  },
  {
      'name' : 'Portatoast',
      'author' : 'Dresser produzione Hukin and Heath',
      'date' : '1879',
      'place' : 'Scozia',
      'context' : 'Arts and Crafts',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Christopher_Dresser_-_Teapot_-_1879.jpg/1200px-Christopher_Dresser_-_Teapot_-_1879.jpg'
  },
  {
      'name' : 'Torre dell acqua',
      'author' : 'Hans Poelzig',
      'date' : '1910',
      'place' : 'Germania',
      'context' : 'Tipizzazione Deutscher Werkbund',
      'image' : 'https://www.ravennaedintorni.it/wp-content/uploads/2019/12/5-Hans-Poelzig-Wasserturm-Posen-1911.jpg'
  },
  {
      'name' : 'Festhalle',
      'author' : 'Peter Behrens',
      'date' : '1914',
      'place' : 'Colonia',
      'context' : 'Esposizione Deutscher Werkbund',
      'image' : 'https://i.pinimg.com/474x/2a/c4/96/2ac496bfbda971abbec9eb8daf7aeb64.jpg'
  },
  {
      'name' : 'Teatro esposizione Deutscher Werkbund',
      'author' : 'Henry Van de Velde',
      'date' : '1914',
      'place' : 'Colonia',
      'context' : 'Esposizione Deutscher Werkbund',
      'image' : 'https://www.theatre-architecture.eu/res/archive/325/044534.jpg?seek=1512223613'
  },
  {
      'name' : 'Pianta del Teatro esposizione Deutscher Werkbund',
      'author' : 'Henry Van de Velde',
      'date' : '1914',
      'place' : 'Colonia',
      'context' : 'Esposizione Deutscher Werkbund',
      'image' : 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjhrOwdbiYD-rw5TZVSXBvBDIYy2mbD4xSHanHeeAf7m_WSyjhu8gmHZzIgPL-tT5NYnPbrQWfsKftTncWy7tVSO9oCEwem15uf7o8Yhw_vXKyN7HXcuR2twbrAef2hvP64xcl4dh89pe61/s320/image010.jpg'
  },
];

const cap5 = [
  {
      'name' : 'Boutique Fouquet',
      'author' : 'Mucha',
      'date' : '1901',
      'place' : 'Parigi',
      'context' : 'Art Nouveau',
      'image' : 'https://www.muchafoundation.org/media//w620h560/3D-works/Boutique_Fouquet_installation_carnavalet.jpg'
  },
  {
      'name' : 'Salone sorelle Floge',
      'author' : 'Hoffmann e Moser',
      'date' : '1904',
      'place' : 'Vienna',
      'context' : 'Art Nouveau',
      'image' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS_CykO2nrxsjg2Se56hGOsKZ_YSCc0MvKALGV9jLaSIWZLDWmI6y4zmpxwdPAkeYJREo&usqp=CAU'
  },
  {
      'name' : 'American Bar',
      'author' : 'Loos',
      'date' : '1908',
      'place' : 'Vienna',
      'context' : 'Art Nouveau',
      'image' : 'https://chapter.digital/wp-content/uploads/2022/06/Chapter-Magazine-EinzigeBarDerStadt-LoosBar-8.jpg'
  },
  {
      'name' : 'Antigua casa Figuras',
      'author' : 'Guell',
      'date' : '1902',
      'place' : 'Barcellona',
      'context' : 'Art Nouveau',
      'image' : 'https://fastly.4sqi.net/img/general/600x600/151688833_ezGQAXLiVf1M2vOahTmpkantAGqx30AtGekGPzI5FO0.jpg'
  },
  {
      'name' : 'Casa Hankar',
      'author' : 'Paul Hankar',
      'date' : '1893',
      'place' : 'Bruxelles',
      'context' : 'Art Nouveau',
      'image' : 'https://cdn.loquis.com/prod/loquis/pictures/01da031e-3a63-4043-9939-7f5fae779fb1-720.jpg'
  },
  {
      'name' : 'Maison Tassel',
      'author' : 'Victor Horta',
      'date' : '1893',
      'place' : 'Bruxelles',
      'context' : 'Art Nouveau',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Victor_Horta_Hotel_Tassel.JPG/1200px-Victor_Horta_Hotel_Tassel.JPG'
  },
  {
      'name' : 'interno Maison Tassel',
      'author' : 'Victor Horta',
      'date' : '1893',
      'place' : 'Bruxelles',
      'context' : 'Art Nouveau',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Tassel_House_stairway.JPG/800px-Tassel_House_stairway.JPG'
  },
  {
      'name' : 'interno Maison Tassel',
      'author' : 'Victor Horta',
      'date' : '1893',
      'place' : 'Bruxelles',
      'context' : 'Art Nouveau',
      'image' : 'https://www.roberto-crosio.net/1_citta/libert4.jpg'
  },
  {
      'name' : 'Auditorium Maison du Peuple',
      'author' : 'Victor Horta',
      'date' : '1896',
      'place' : 'Bruxelles',
      'context' : 'Art Nouveau',
      'image' : 'https://i.pinimg.com/originals/16/f7/81/16f7815814e64be75e36836046b72d0e.jpg'
  },
  {
      'name' : 'Abito signora Van de Velde',
      'author' : 'Henry Van de Velde',
      'date' : '1901',
      'place' : '',
      'context' : 'Art Nouveau',
      'image' : 'https://archinghomestager.wordpress.com/wp-content/uploads/2016/11/van-de-velde-02.jpg?w=445'
  },
  {
      'name' : 'Scuola di arti e mestieri',
      'author' : 'Henry Van de Velde',
      'date' : '1901',
      'place' : 'Weimar',
      'context' : 'Art Nouveau',
      'image' : 'https://i0.wp.com/www.dbnl.org/tekst/veld006gesc01_01/veld006gesc01ill84.gif?w=1120&ssl=1'
  },
  {
      'name' : 'Stazioni della metropolitana',
      'author' : 'Guimard',
      'date' : '1900',
      'place' : 'Parigi',
      'context' : 'Art Nouveau',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/5/5f/La_station_art_nouveau_de_la_porte_Dauphine_%28Hector_Guimard%29.jpg'
  },
  {
      'name' : 'Panchina',
      'author' : 'Guimard',
      'date' : '1907',
      'place' : 'Parigi',
      'context' : 'Art Nouveau',
      'image' : 'https://www.antikeo.com/uploads/images/img_x1920_58638_658e70ddabe573-32557163-76049984.jpg'
  },
  {
      'name' : 'Leslie Castle',
      'author' : '',
      'date' : '1660',
      'place' : 'Scozia',
      'context' : 'Architettura baronale',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Leslie_Castle%2C_Geograph.jpg'
  },
  {
      'name' : 'School of Arts',
      'author' : 'C. Mackintosh',
      'date' : '1897-1909',
      'place' : 'Glasgow',
      'context' : 'Art Nouveau scozzese',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Wfm_glasgow_school_of_art.jpg/800px-Wfm_glasgow_school_of_art.jpg'
  },
  {
      'name' : 'Biblioteca School of Arts',
      'author' : 'C. Mackintosh',
      'date' : '1909',
      'place' : 'Glasgow',
      'context' : 'Art Nouveau scozzese',
      'image' : 'https://i.pinimg.com/736x/09/eb/73/09eb73e2607eaab9e5c8bf0eb79fba3d.jpg'
  },
  {
      'name' : 'Decorazione School of Arts',
      'author' : 'Sorelle Macdonald',
      'date' : '1909',
      'place' : 'Glasgow',
      'context' : 'Art Nouveau scozzese',
      'image' : 'https://www.curtainscurtainscurtains.co.uk/images/library/mack%20rose%20glass.jpg'
  },
  {
      'name' : 'Hill House',
      'author' : 'C. Mackintosh',
      'date' : '1902',
      'place' : 'Scozia',
      'context' : 'Art Nouveau scozzese',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/HillHouse.jpg/310px-HillHouse.jpg'
  },
  {
      'name' : 'Willow Tea Rooms',
      'author' : 'C. Mackintosh',
      'date' : '1903',
      'place' : 'Glasgow',
      'context' : 'Art Nouveau scozzese',
      'image' : 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/1a/f6/08.jpg'
  },
  {
      'name' : 'Pavillon per la metro',
      'author' : 'Otoo Wagner',
      'date' : '1895',
      'place' : 'Vienna',
      'context' : 'Art Nouveau',
      'image' : 'https://www.wien.info/resource/image/291304/19x10/1200/630/64b9a7d649a60ce7db004d70c711c69c/91F25E1431CA7626ADFF285FEE1936D9/50239-otto-wagner-stadtbahn-pavillon.jpg'
  },
  {
      'name' : 'Padiglione secessione viennese',
      'author' : 'J.M. Olbrich',
      'date' : '1897',
      'place' : 'Vienna',
      'context' : 'Art Nouveau',
      'image' : 'https://www.wien.info/resource/image/419414/19x10/1200/630/2c0323a65d2ad481e9897fd0b6ba554f/42B0D9C095A83F731BC976CB612EA131/secession.jpg'
  },
  {
      'name' : 'Fregio di Beethoven nella casa della secessione',
      'author' : 'G. Klimt',
      'date' : '1902',
      'place' : 'Vienna',
      'context' : 'Art Nouveau',
      'image' : 'https://www.raiscuola.rai.it/dl/img/2023/08/08/1691500208823_17.%20forze%20ostili%20fregio.jpg'
  },
  {
      'name' : 'Studio di Freud',
      'author' : '',
      'date' : '1900',
      'place' : 'Austria',
      'context' : 'Art Nouveau',
      'image' : 'https://www.aboutartonline.com/wp-content/uploads/2020/07/12-Lo-studio-di-Freud.-Foto-di-E.-Engelman-del-1938.jpg'
  },
  {
      'name' : 'Manifesto secessione viennese',
      'author' : 'G. Klimt',
      'date' : '1898',
      'place' : 'Vienna',
      'context' : 'Art Nouveau',
      'image' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqnswd196eRH0oJM9WTf_z0LhA7ynqXRtiOh7Ul_n2Pg&s'
  },
  {
      'name' : 'Majolikahaus',
      'author' : 'Otto Wagner',
      'date' : '1898',
      'place' : 'Vienna',
      'context' : 'Art Nouveau',
      'image' : 'https://www.visitingvienna.com/wp-content/uploads/2022/02/majolikahaus.jpg'
  },
  {
      'name' : 'Cassa di risparmio postale',
      'author' : 'Otto Wagner',
      'date' : '1904',
      'place' : 'Vienna',
      'context' : 'Art Nouveau',
      'image' : 'https://www.viaggio-in-austria.it/postsparkasse03.jpg'
  },
  {
      'name' : 'Palais Stoclet',
      'author' : 'Hoffmann',
      'date' : '1905',
      'place' : 'Vienna',
      'context' : 'Art Nouveau',
      'image' : 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg6QnDrHN9aQh_Oa1No_GXnpkzgoaoqRV7eP0jASpVut8Cu4zBv81WwxqPk9BeHj6b7_fBS-9P61hLC1PSZAg_aoCWJUMN3tq3R_MYV7IKAZNGkL437s_czdLHRFrpixOIL9MRRdujZpXk/s1600/01+Stoclet_Palace_Hoffmann_Brussels_1911.jpg'
  },
  {
      'name' : 'Interno Palais Stoclet',
      'author' : 'Hoffmann',
      'date' : '1905',
      'place' : 'Vienna',
      'context' : 'Art Nouveau',
      'image' : 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg6QnDrHN9aQh_Oa1No_GXnpkzgoaoqRV7eP0jASpVut8Cu4zBv81WwxqPk9BeHj6b7_fBS-9P61hLC1PSZAg_aoCWJUMN3tq3R_MYV7IKAZNGkL437s_czdLHRFrpixOIL9MRRdujZpXk/s1600/01+Stoclet_Palace_Hoffmann_Brussels_1911.jpg'
  },
  {
      'name' : 'Ospedale Sant Pau',
      'author' : 'Domenech i Montaner',
      'date' : '1905',
      'place' : 'Barcellona',
      'context' : 'Art Nouveau',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/e/e3/20061225-Barcelona_Hospital_de_la_Santa_Creu_i_Sant_Pau_MQ.jpg'
  },
  {
      'name' : 'Caves Codorniu',
      'author' : 'Puig i Cadafalch',
      'date' : '1895',
      'place' : 'Barcellona',
      'context' : 'Art Nouveau',
      'image' : 'https://upload.wikimedia.org/wikipedia/commons/2/25/Caves_Codorniu_%28Sant_Sadurní_d%27Anoia%29_-_18.jpg'
  },
  {
      'name' : 'Palau della musica catalana',
      'author' : 'Domenech i Montaner',
      'date' : '1905',
      'place' : 'Barcellona',
      'context' : 'Art Nouveau',
      'image' : 'https://visitarebarcellona.com/wp-content/uploads/2016/12/palau-musica-barcellona.jpg'
  },
  {
      'name' : 'Interno Palau Guell',
      'author' : 'Antoni Gaudì',
      'date' : '1886',
      'place' : 'Barcellona',
      'context' : 'Art Nouveau',
      'image' : 'https://www.barcellonafacile.it/wp-content/uploads/salone-palazzo-guell.jpeg'
  },
  {
      'name' : 'Parc Guell',
      'author' : 'Antoni Gaudì',
      'date' : '1900',
      'place' : 'Barcellona',
      'context' : 'Art Nouveau',
      'image' : 'https://www.vivagaudi.org/wp-content/gallery/parc-guell/parc-güell008.jpg'
  },
  {
      'name' : 'Casa Milà',
      'author' : 'Antoni Gaudì',
      'date' : '1906',
      'place' : 'Barcellona',
      'context' : 'Art Nouveau',
      'image' : 'https://www.casabatllo.es/wp-content/uploads/2023/01/la-pedrera.jpg'
  },
  {
      'name' : 'Casa Battlò',
      'author' : 'Antoni Gaudì',
      'date' : '1904',
      'place' : 'Barcellona',
      'context' : 'Art Nouveau',
      'image' : 'https://img.static-kl.com/images/media/6C6AB52B-633D-4641-898CA35F820B6287?w=960&aspect_ratio=2:1'
  },
  {
      'name' : 'Sagrada Familia',
      'author' : 'Antoni Gaudì',
      'date' : '1883',
      'place' : 'Barcellona',
      'context' : 'Art Nouveau',
      'image' : 'https://cdn.getyourguide.com/img/tour/448290a706817776.jpeg/146.jpg'
  },
  {
      'name' : 'Villa Iiea',
      'author' : 'Ernesto Basile',
      'date' : '1900',
      'place' : 'Palermo',
      'context' : 'Art Nouveau',
      'image' : 'https://turismo.cittametropolitana.pa.it/wp-content/uploads/sites/3/2022/11/VillaIgea2.jpg'
  },
  {
      'name' : 'Fregio interno Villa Igiea',
      'author' : 'Bergler',
      'date' : '1900',
      'place' : 'Palermo',
      'context' : 'Art Nouveau',
      'image' : 'https://hips.hearstapps.com/hmg-prod/images/04-18-rfh-villa-igiea-9644-jg-sep-19-jpg-copia-1634631528.jpg'
  },
  {
      'name' : 'Palazzo Castiglioni',
      'author' : 'Sommaruga',
      'date' : '1900',
      'place' : 'Milano',
      'context' : 'Art Nouveau',
      'image' : 'https://www.milanosecrets.it/wp-content/Portals/0/News_cultura_eventi_foto/cultura_palazzo_castiglioni_foto.jpg'
  },
  {
      'name' : 'Manifesto prima esposizione internazionale arti decorativa moderna',
      'author' : 'Bistolfi',
      'date' : '1902',
      'place' : 'Torino',
      'context' : 'Art Nouveau',
      'image' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShbI6w5UVzqaLCF1-_AT6kbrLrHnRk-88QDZgSl4nnYspSIYsCJJfeCf1HxhJX8fvceAA&usqp=CAU'
  },
  {
      'name' : 'Ingresso prima esposizione internazionale arti decorativa moderna',
      'author' : 'D Aronco',
      'date' : '1902',
      'place' : 'Torino',
      'context' : 'Art Nouveau',
      'image' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKlCSQhS3dalMtDlFtik6QW0ScmlFBaLbAXA&usqp=CAU'
  },
  {
      'name' : 'Villino Scott',
      'author' : 'Fenoglio',
      'date' : '1902',
      'place' : 'Torino',
      'context' : 'Art Nouveau',
      'image' : 'https://luoghidicelluloide.wordpress.com/wp-content/uploads/2016/10/scott.jpg?w=1200'
  },
];

const cap13 = [
    {
        'name' : 'Yale University Art Gallery',
        'author' : 'L. Kahn',
        'date' : '1950',
        'place' : 'Connecticut - USA',
        'context' : 'Crisi del Movimento Moderno - Ritorno alla monumentalità anche nel moderno',
        'image' : 'https://images.adsttc.com/media/images/5b02/0929/f197/cc16/1500/0229/newsletter/Yale_University_Art_Gallery_7604__New_Haven__2015.jpg?1526860067'
    },
    {
        'name' : 'Richards Medical Research Laboratories',
        'author' : 'L. Kahn',
        'date' : '1957',
        'place' : 'Filadelfia - USA',
        'context' : 'Crisi del Movimento Moderno - Ritorno alla monumentalità anche nel moderno',
        'image' : 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Richards_Labs_Penn.JPG'
    },
    {
        'name' : 'Salk Institute',
        'author' : 'L. Kahn',
        'date' : '1959',
        'place' : 'California - USA',
        'context' : 'Crisi del Movimento Moderno - Ritorno alla monumentalità anche nel moderno',
        'image' : 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/39/a4/f0.jpg'
    },
    {
        'name' : 'Salk Institute',
        'author' : 'L. Kahn',
        'date' : '1959',
        'place' : 'California - USA',
        'context' : 'Crisi del Movimento Moderno - Ritorno alla monumentalità anche nel moderno',
        'image' : 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Salk_Institute1.jpg'
    },
    {
        'name' : 'Parlamento',
        'author' : 'L. Kahn',
        'date' : '1962',
        'place' : 'Dacca - Bangladesh',
        'context' : 'Crisi del Movimento Moderno - Ritorno alla monumentalità anche nel moderno',
        'image' : 'https://www.repstatic.it/video/photo/2011/11/27/80724-thumb-full-louis_kahn.jpg'
    },
    {
        'name' : 'Istituto indiano di amministrazione',
        'author' : 'L. Kahn',
        'date' : '1963',
        'place' : 'Ahmedabad - India',
        'context' : 'Crisi del Movimento Moderno - Ritorno alla monumentalità anche nel moderno',
        'image' : 'https://images.adsttc.com/media/images/5037/e64a/28ba/0d59/9b00/033e/newsletter/stringio.jpg?1414231168'
    },
    {
        'name' : 'Kimbell Art Museum',
        'author' : 'L. Kahn',
        'date' : '1962',
        'place' : 'Texas - USA',
        'context' : 'Crisi del Movimento Moderno - Ritorno alla monumentalità anche nel moderno',
        'image' : 'https://magazine.texasarchitects.org/wp-content/uploads/sites/4/2022/08/IMG_2470b.jpg'
    },
    {
        'name' : 'Vanna Venturi House',
        'author' : 'R. Venturi',
        'date' : '1959',
        'place' : 'Philadelphia - USA',
        'context' : 'Postmodern',
        'image' : 'https://images.adsttc.com/media/images/5037/e07f/28ba/0d59/9b00/016c/newsletter/stringio.jpg?1414230673'
    },
    {
        'name' : 'Guild House',
        'author' : 'R. Venturi',
        'date' : '1960',
        'place' : 'Philadelphia - USA',
        'context' : 'Postmodern',
        'image' : 'https://upload.wikimedia.org/wikipedia/commons/4/41/Venturi_Guild_House.jpg'
    },
    {
        'name' : 'Learning from Las Vegas',
        'author' : 'R. Venturi',
        'date' : '1966',
        'place' : 'Las Vegas - USA',
        'context' : 'Postmodern',
        'image' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnyG-WDj-d1aD41yNpRosC9V0_RxQpqjXnng&usqp=CAU'
    },
    {
        'name' : 'Learning from Las Vegas',
        'author' : 'R. Venturi',
        'date' : '1966',
        'place' : 'Las Vegas - USA',
        'context' : 'Postmodern',
        'image' : 'https://www.artribune.com/wp-content/uploads/2014/02/Robert-Venturi-Sketch-Learning-from-Las-Vegas-480x620.jpg'
    },
    {
        'name' : 'Episcopal Academy Chapel',
        'author' : 'R. Venturi',
        'date' : '2008',
        'place' : 'Pensylvania - USA',
        'context' : 'Postmodern',
        'image' : 'https://patch.com/img/cdn/users/112995/2012/03/raw/1314c88b728e6ec54762ffc0ce4e57be.jpg'
    },
    {
        'name' : 'Piazza d Italia',
        'author' : 'C. Moore',
        'date' : '1975',
        'place' : 'New Orleans - USA',
        'context' : 'Postmodern',
        'image' : 'https://upload.wikimedia.org/wikipedia/commons/2/21/PiazzaDItalia1990.jpg'
    },
    {
        'name' : 'Edificio dei servizi municipali',
        'author' : 'M. Graves',
        'date' : '1980',
        'place' : 'Portland - USA',
        'context' : 'Postmodern',
        'image' : 'https://www.educazionetecnicaonline.com/wp-content/uploads/2014/02/Grattacieli11.jpg'
    },
    {
        'name' : 'Humana Building',
        'author' : 'M. Graves',
        'date' : '1982',
        'place' : 'Louisville - USA',
        'context' : 'Postmodern',
        'image' : 'https://i.pinimg.com/originals/31/02/4b/31024b382293efad8a48b8e7f7c5bf8c.jpg'
    },
    {
        'name' : 'Walt Disney Dolphin Resort',
        'author' : 'M. Graves',
        'date' : '1987',
        'place' : 'Orlando - Florida - USA',
        'context' : 'Postmodern',
        'image' : 'https://images.trvl-media.com/lodging/1000000/20000/12800/12710/111f91e5.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill'
    },
    {
        'name' : 'Sedia Milano',
        'author' : 'Aldo Rossi produzione Molteni',
        'date' : '1987',
        'place' : 'Italia',
        'context' : 'Postmodern',
        'image' : 'https://i0.wp.com/www.sbandiu.com/wp-content/uploads/2017/08/big_363099_7567_web_1987_milano-01_aldo-rossi_hr1.jpg?fit=960%2C763&ssl=1'
    },
    {
        'name' : 'Interno di un interno',
        'author' : 'A. Mendini',
        'date' : '1991',
        'place' : 'Milano',
        'context' : 'Postmodern',
        'image' : 'https://www.dilmos.it/wp-content/uploads/freshizer/ccc005bbbaf011950a8a664fa99b6a2e_interno_di_un_interno1991_img07-1440-c-72.jpg'
    },
    {
        'name' : 'Caffettiera Conica',
        'author' : 'Aldo Rossi produzione Alessi',
        'date' : '1984',
        'place' : 'Italia',
        'context' : 'Postmodern',
        'image' : 'https://alessi.com/cdn/shop/products/01_90002.jpg?v=1680531313'
    },
    {
        'name' : 'Interno abitazione Memphis',
        'author' : 'e. Sottsass e Memphis',
        'date' : '1980 circa',
        'place' : 'Italia',
        'context' : 'Postmodern',
        'image' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Memphis-Milano_Movement.jpg/220px-Memphis-Milano_Movement.jpg'
    },
    {
        'name' : 'Cavatappi Anna G',
        'author' : 'A. Mendini produzione Alessi',
        'date' : '1994',
        'place' : 'Italia',
        'context' : 'Postmodern',
        'image' : 'https://socialdesignmagazine.com/mag/products-selection/wp-content/uploads/sites/2/2020/12/Cavatappi-Anna-G-Turchese-ALESSI-Alessandro-Mendini.jpg'
    },
    {
        'name' : 'Grattacielo At&T',
        'author' : 'P. Johnson e J. Burgee',
        'date' : '1979',
        'place' : 'New York',
        'context' : 'Postmodern',
        'image' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Sony_Building_by_David_Shankbone_crop.jpg/640px-Sony_Building_by_David_Shankbone_crop.jpg'
    },
    {
        'name' : 'Nuova Galleria Nazionale',
        'author' : 'J. Stirling',
        'date' : '1977',
        'place' : 'Stoccarda',
        'context' : 'Postmodern in Europa - Tradizionalià smontata',
        'image' : 'https://i.pinimg.com/736x/97/4f/e1/974fe1c7b40e8b36c92d947555e62ebb.jpg'
    },
    {
        'name' : 'Centro di ricerca per le scienze sociali',
        'author' : 'J. Stirling',
        'date' : '1984',
        'place' : 'Berlino',
        'context' : 'Postmodern in Europa - Tradizionalià smontata',
        'image' : 'https://www.cca.qc.ca/img-collection/YmC9g1aF-B26KoBKxEzeACrUPrQ=/500x402/428311.jpg'
    },
    {
        'name' : 'Museo di Architettura',
        'author' : 'O.M. Ungers',
        'date' : '1979',
        'place' : 'Francoforte',
        'context' : 'Postmodern in Europa',
        'image' : 'https://www.wearch.eu/wp-content/uploads/2019/07/Museo-img8.jpg'
    },
    {
        'name' : 'Istituto per le ricerche polari e marine',
        'author' : 'O.M. Ungers',
        'date' : '1979',
        'place' : 'Germania',
        'context' : 'Postmodern in Europa',
        'image' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Alfred-Wegener-Institut_mit_Schornstein_Otto_Hahn.jpg/220px-Alfred-Wegener-Institut_mit_Schornstein_Otto_Hahn.jpg'
    },
    {
        'name' : 'Complesso residenziale Tiegarten planimetria',
        'author' : 'R. Krier',
        'date' : '1983',
        'place' : 'Germania',
        'context' : 'Postmodern in Europa - Tradizionalità + funzionalismo + decorazioni ironiche',
        'image' : 'https://lh3.googleusercontent.com/proxy/315ed3DOqdOTEKR_6lOgNA4EatiK4m2U4zBsZAs5n5MElldKmOwi29ZKVE0Su7e5nQS0aUbbAtHjQ4SKjeXFK1M8-5VJLPWggZPS4iwKIQg'
    },
    {
        'name' : 'Complesso residenziale Tiegarten',
        'author' : 'R. Krier',
        'date' : '1983',
        'place' : 'Germania',
        'context' : 'Postmodern in Europa - Tradizionalità + funzionalismo + decorazioni ironiche',
        'image' : 'https://lh3.googleusercontent.com/proxy/QbA3L80bMShbcxwyZHA5WLqgWhV0sXxKpjSnHPyNlbZE1qMTqB1e44jsq_O4zjobyl3q36rjYFJABzf8UAic9ykCK-FyMdzA2D-44IUmEn8'
    },
    {
        'name' : 'Quartiere residenziale',
        'author' : 'R. Krier',
        'date' : '1995',
        'place' : 'Alessandria',
        'context' : 'Postmodern in Europa',
        'image' : 'https://i.pinimg.com/736x/7c/fa/d4/7cfad477d21b571d9211dd00528728b4.jpg'
    },
    {
        'name' : 'Museo d arte moderna',
        'author' : 'H. Hollein',
        'date' : '1987',
        'place' : 'Francoforte',
        'context' : 'Postmodern in Europa',
        'image' : 'https://blog.casanoi.it/wp-content/uploads/2016/04/Museo-arte-moderna-Francoforte-Meno.jpg'
    },
    {
        'name' : 'Edificio commerciale Haas',
        'author' : 'H. Hollein',
        'date' : '1990',
        'place' : 'Vienna',
        'context' : 'Postmodern in Europa',
        'image' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Wien-Haas-Haus.jpg/1200px-Wien-Haas-Haus.jpg'
    },
    {
        'name' : 'Quartiere residenziale Les espace d Abraxas',
        'author' : 'R. Bofill',
        'date' : '1978',
        'place' : 'Parigi',
        'context' : 'Postmodern',
        'image' : 'https://images.adsttc.com/media/images/57d7/fe98/e58e/ce89/7b00/0295/large_jpg/Les_Espaces_Abraxas_Marne_la_Valle_Paris_France_Ricardo_Bofill_Taller_Arquitectura_07.jpg?1473773191'
    },
    {
        'name' : 'Quartiere di alloggi popolari Hautes-Formes',
        'author' : 'C. de Potzamparc',
        'date' : '1975',
        'place' : 'Parigi',
        'context' : 'Postmodern',
        'image' : 'https://images.adsttc.com/media/images/595f/1886/b22e/38a7/c200/0095/large_jpg/197500-HAUTES-FORMES_(c)Nicolas_BOREL_201203141218_p106.jpg?1499404394'
    },
    {
        'name' : 'Torre Daimler Chrysler',
        'author' : 'H. Kollhoff',
        'date' : '1997',
        'place' : 'Potsdamer Platz - Berlino',
        'context' : 'Postmodern',
        'image' : 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Potsdamer_Platz_-_Kollhoff-Tower%2C_20060603.jpg'
    },
    {
        'name' : 'Centro artigianale Balerna',
        'author' : 'M. Botta',
        'date' : '1977',
        'place' : 'Svizzera',
        'context' : 'Postmodern',
        'image' : 'https://i.pinimg.com/550x/f1/35/f7/f135f7334351d31b0156b75eab87f097.jpg'
    },
    {
        'name' : 'Casa Medici Stabio',
        'author' : 'M. Botta',
        'date' : '1977',
        'place' : 'Svizzera',
        'context' : 'Postmodern',
        'image' : 'https://www.archweb.it/dwg/arch_arredi_famosi/mario_botta/casa_medici/photos/casa_medici_botta_ph_1.jpg'
    },
    {
        'name' : 'Blocco per uffici Ransila I',
        'author' : 'M. Botta',
        'date' : '1981',
        'place' : 'Lugano',
        'context' : 'Postmodern',
        'image' : 'https://media-cdn.tripadvisor.com/media/photo-s/07/7e/8e/d7/edificio-ransila-i.jpg'
    },
    {
        'name' : 'Museo d arte moderna',
        'author' : 'M. Botta',
        'date' : '1989',
        'place' : 'San Francisco - USA',
        'context' : 'Postmodern',
        'image' : 'https://www.botta.ch/Data/Images/botta/38/2%20MOMA%20foto%20Pino%20Musi.jpg'
    },
    {
        'name' : 'Cattedrale della resurrezione',
        'author' : 'M. Botta',
        'date' : '1992',
        'place' : 'Évry - Francia',
        'context' : 'Postmodern',
        'image' : 'https://cathedrale-evry.net/images/exterie1.jpg'
    },
    {
        'name' : 'Chiesa di San Giovanni a Mogno',
        'author' : 'M. Botta',
        'date' : '1996',
        'place' : 'Svizzera',
        'context' : 'Postmodern',
        'image' : 'https://media-cdn.tripadvisor.com/media/photo-s/1b/48/90/18/eglise-san-giovanni-battista.jpg'
    },
    {
        'name' : 'Complesso diocesano e Chiesa del Santo Volto',
        'author' : 'M. Botta',
        'date' : '2004',
        'place' : 'Torino',
        'context' : 'Postmodern',
        'image' : 'https://www.archimagazine.com/abosantovolto1_max.jpg'
    },
    {
        'name' : 'Bottega di Erasmo',
        'author' : 'R. Gabetti e A. Oreglia d Isola',
        'date' : '1953',
        'place' : 'Torino',
        'context' : 'Neoliberty',
        'image' : 'https://live.staticflickr.com/1755/40898726220_36b026abd0_c.jpg'
    },
    {
        'name' : 'Reparto taglieria pelo della fabbrica Borsalino',
        'author' : 'I. Gardella',
        'date' : '1945',
        'place' : 'Alessandria',
        'context' : 'Neoliberty',
        'image' : 'https://www.alexala.it/v2/public/foto/2023/11/05/220411/647_taglieria-del-pelo-fabbrica-borsalino.jpg'
    },
    {
        'name' : 'Uffici Inail',
        'author' : 'G. Samonà e E. Trincanato',
        'date' : '1950',
        'place' : 'Venezia',
        'context' : 'Neoliberty',
        'image' : 'https://i.pinimg.com/originals/20/d3/a5/20d3a51c13d76091ecabd15f982b980d.jpg'
    },
    {
        'name' : 'Museo di Castelvecchio',
        'author' : 'C. Scarpa',
        'date' : '1957',
        'place' : 'Verona',
        'context' : 'Neoliberty',
        'image' : 'https://www.objectsmag.it/wp-content/uploads/2019/09/museo-castelvecchio-9-840x472.jpg'
    },
    {
        'name' : 'Tomba Brion',
        'author' : 'C. Scarpa',
        'date' : '1969',
        'place' : 'Treviso',
        'context' : 'Neoliberty',
        'image' : 'https://i0.wp.com/designtellers.it/wp-content/uploads/2023/02/Brion_01.jpeg?ssl=1'
    },
    {
        'name' : 'Borsa merci',
        'author' : 'G. Michelucci',
        'date' : '1964',
        'place' : 'Pistoia',
        'context' : 'Neoliberty',
        'image' : 'https://lh3.googleusercontent.com/proxy/l0bruYfJ2N7J4Bjuit2FMvp495yGSACMty-Jh7JaaEjNWUod-fHdDnGHqU0JjODZWhKawrZUBQxYeMqeDgWKoowPGroH0HbIDnfL6bFcFBx8VXqi5pMFsMC_gzdDt7pL2qsbz_s6kA'
    },
    {
        'name' : 'Casa dell Obelisco',
        'author' : 'S. Jaretti e E. Luzi',
        'date' : '1954',
        'place' : 'Torino',
        'context' : 'Neoliberty',
        'image' : 'https://www.museotorino.it/images/6c/eb/7d/1f/6ceb7d1fe0f64b879e9881578ccf8112-1.jpg?VSCL=100'
    },
    {
        'name' : 'Condominio corso Unione Sovietica',
        'author' : 'P. Derossi',
        'date' : '1962',
        'place' : 'Torino',
        'context' : 'Neoliberty',
        'image' : 'https://lh3.googleusercontent.com/proxy/gBGvL7Fp3icAYztjE6dMUj6C5GpZw2AzNgh1QbG9AhI8Z-aefa4hUSUjQKaHyzFxttMsAILr9BQ8dawoicqM64dbzzNJnw6ga-HUKYM2WWkQOOU6PDHwtN_u4V8'
    },
    {
        'name' : 'Torre Velasca',
        'author' : 'BBPR',
        'date' : '1950',
        'place' : 'Milano',
        'context' : 'Neoliberty',
        'image' : 'https://atlantearchitetturacontemporanea.cultura.gov.it/wp-content/uploads/E09-01_BBPR_Velasca.jpg'
    },
    {
        'name' : 'Grattacielo Pirelli',
        'author' : 'G. Ponti e P.L Nervi',
        'date' : '1955',
        'place' : 'Milano',
        'context' : 'Neoliberty',
        'image' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Mi-Milano-1959-Grattacielo-Pirelli-01.jpg/1200px-Mi-Milano-1959-Grattacielo-Pirelli-01.jpg'
    },
    {
        'name' : 'Complesso residenziale Monte Amiata al Gallaratese',
        'author' : 'C. Aymonino',
        'date' : '1967',
        'place' : 'Milano',
        'context' : 'Movimento Moderno',
        'image' : 'https://www.lombardiabeniculturali.it/img_db/bcac/p4010/1/l/SC_AC_p4010-00539_IMG-0000045615.jpg'
    },
    {
        'name' : 'Complesso residenziale Monte Amiata al Gallaratese',
        'author' : 'A. Rossi',
        'date' : '1967',
        'place' : 'Milano',
        'context' : 'Recupero tradizione',
        'image' : 'https://oami.s3.eu-south-1.amazonaws.com/legacy/cache/arch_img_big/media/resize/copy/190/20131021180052-_DSC0013m.jpg'
    },
    {
        'name' : 'Teatro del mondo',
        'author' : 'A. Rossi',
        'date' : '1979',
        'place' : 'Venezia',
        'context' : 'Biennale di Venezia 1980',
        'image' : 'https://www.archweb.com/wp-content/uploads/2023/07/Teatro_del_Mondo_Venezia-512x426.jpg'
    },
    {
        'name' : 'Complesso per uffici Casa Aurora',
        'author' : 'A. Rossi',
        'date' : '1984',
        'place' : 'Venezia',
        'context' : 'Biennale di Venezia 1980',
        'image' : 'https://www.museotorino.it/images/96/ea/fe/0f/96eafe0fc71e48209dcbd53e737fb5bf-3.jpg'
    },
    {
        'name' : 'Blocco sulla Kochstrasse',
        'author' : 'A. Rossi',
        'date' : '1981',
        'place' : 'Berlino',
        'context' : 'Recupero tradizione berlinese',
        'image' : 'https://c8.alamy.com/compit/pcydp1/berlino-aldo-rossi-kochstr-iba-pcydp1.jpg'
    },
    {
        'name' : 'Ricostruzione di un isolato in Shutzenstrasse',
        'author' : 'A. Rossi',
        'date' : '1992',
        'place' : 'Berlino',
        'context' : '',
        'image' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Quartier_Schützenstrasse_Berlin.jpg/1200px-Quartier_Schützenstrasse_Berlin.jpg'
    },
    {
        'name' : 'Blocco per uffici',
        'author' : 'G. Grassi',
        'date' : '1993',
        'place' : 'Potsdamer Platz - Berlino',
        'context' : '',
        'image' : 'https://casabellaweb.eu/wp-content/uploads/2015/03/Giorgio-Grassi-Potsdamer-Platz-Berlino-imagecredits-Andreas-Steinhoff.jpg'
    },
];

const totalQuestions = [
  ...cap3,
  ...cap2,
  ...cap4,
  ...cap5,
  ...cap6,
  ...cap7,
  ...cap8,
  ...cap9,
  ...cap10,
  ...cap11,
  ...cap12,
  ...cap13
]
/*[
  {
    'name': 'nome',
    'author': 'autore',
    'date': 'data',
    'context': 'contesto',
    'image': 'https://martinaway.com/wp-content/uploads/2022/03/Musei-a-Torino.jpg'
  },
  {
    'name': 'nome 2',
    'author': 'autore 2',
    'date': 'data',
    'context': 'contesto',
    'image': 'https://martinaway.com/wp-content/uploads/2022/03/Musei-a-Torino.jpg'
  }
];
*/

function getRandomElements(arr, n) {
  const selectedElements = [];
  if(Array.isArray(arr) && arr.length > 0) {
    while (selectedElements.length < n) {
      const randomIndex = Math.floor(Math.random() * arr.length);
      if (!selectedElements.includes(arr[randomIndex])) {
        selectedElements.push(arr[randomIndex]);
      }
    }
  }
  
  return selectedElements;
}

const TIMER_TIME = 90;
const MAX_QUESTION = 10;

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState(getRandomElements(totalQuestions, MAX_QUESTION))
  console.log(questions)

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setComponenteAttivo(1); // Passa al componente 1
      setTempoRimanente(TIMER_TIME); // Resetta il timer
    } else {
      alert('Quiz completato!'); // Add logic to handle quiz completion
    }
  };

  const [componenteAttivo, setComponenteAttivo] = useState(1); // Inizia con componente 1
  const [tempoRimanente, setTempoRimanente] = useState(TIMER_TIME); // 1 minuto (60 secondi)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTempoRimanente((tempoRimanente) => {
        if (tempoRimanente === 0) {
          clearInterval(intervalId);
          setComponenteAttivo(2); // Passa al componente 2
          return TIMER_TIME; // Resetta il timer
        }
        return tempoRimanente - 1;
      });
    }, 1000); // Aggiorna ogni secondo
  
    return () => {
      clearInterval(intervalId); // Pulisci l'intervallo al termine o al cambio componente
    };
  }, [componenteAttivo]); // Aggiorna l'intervallo solo quando cambia componenteAttivo

  return (
    <div className="App">
      <Typography variant="h1">Quiz App - Arte</Typography>
        <div>
        {componenteAttivo === 1 && (
          <div>
            <Typography variant="h4">Domanda: {currentQuestion + 1} di {MAX_QUESTION}</Typography>
            <Typography variant="h4">{tempoRimanente} secondi rimanenti</Typography>
            <LinearWithValueLabel progress={100 - tempoRimanente * 10}/>
            {questions[currentQuestion] && (
              <QuestionContainer
                question={questions[currentQuestion]}
                onNextQuestion={handleNextQuestion}
              />
            )}
          </div>
        )}

        {componenteAttivo === 2 && (
          <div>
            <Typography variant="h3">Tempo scaduto!</Typography>
            <Typography variant="h4">Prossima domanda è la {currentQuestion + 1}</Typography>
            <Button variant="contained" onClick={handleNextQuestion}>
              Prossima domanda
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
