import * as React from 'react';
import './App.css';
import Tab from './components/Tab';

const items = [
  {
    "imgUrl": "/images/img1.jpeg",
    "imgDate": "03.07.2015",
    "imgText": "Vacation 1",
    "text": "",
    "title": "Einladung zur Jahrespressekonferenz"
  },
  {
    "imgUrl": "/images/img2.jpeg",
    "imgDate": "03.07.2015",
    "imgText": "Vacation 2",
    "text": "Studie zu rheumatoider Arthritis (RA)",
    "title": "Studienstart im Juni"
  },
  {
    "imgUrl": "/images/img3.jpeg",
    "imgDate": "02.07.2015",
    "imgText": "Vacation 3",
    "text": "TV-Tipp: Ein Beitregin der WDR Mediathek",
    "title": "Herzenssache - Patienten warten auf ein Spenderherz"
  },
  {
    "imgUrl": "/images/img4.jpeg",
    "imgDate": "03.07.2015",
    "imgText": "Vacation 4",
    "text": "",
    "title": "Einladung zur Jahrespressekonferenz"
  },
  {
    "imgUrl": "/images/img5.jpeg",
    "imgDate": "03.07.2015",
    "imgText": "Vacation 5",
    "text": "Studie zu rheumatoider Arthritis (RA)",
    "title": "Studienstart im Juni"
  },
  {
    "imgUrl": "/images/img6.jpeg",
    "imgDate": "03.07.2015",
    "imgText": "Vacation 6",
    "text": "TV-Tipp: Ein Beitregin der WDR Mediathek",
    "title": "Herzenssache - Patienten warten auf ein Spenderherz"
  }
];


class App extends React.PureComponent {
  public render() {
    return (
      <div className="App">
        <Tab items={items} />
      </div>
    );
  }
}

export default App;
