import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import './App.css';
import QuestionContainer from './QuestionContainer';


const cap2 = [
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
    'name': 'The Grammar of Ornament',
    'author': 'Owen Jones',
    'date': '1856',
    'context': 'Eclettismo',
    'image': 'https://www.meisterdrucke.uk/kunstwerke/1260px/Owen%20Jones%20-%20Moresque%20No%204%20Plate%20XLII%20from%20The%20Grammar%20of%20Ornament%20by%20Owe%20-%20%28MeisterDrucke-222252%29.jpg'
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

const questions = [
  ...cap2
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
function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      alert('Quiz completato!'); // Add logic to handle quiz completion
    }
  };

  return (
    <div className="App">
      <Typography variant="h1">Quiz App - Arte</Typography>

      {questions[currentQuestion] && (
        <QuestionContainer
          question={questions[currentQuestion]}
          onNextQuestion={handleNextQuestion}
        />
      )}
    </div>
  );
}

export default App;
