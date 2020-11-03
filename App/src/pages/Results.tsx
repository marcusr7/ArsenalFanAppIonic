
import React, {useEffect, useState} from 'react';

import { Redirect, Route } from 'react-router-dom';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonIcon, IonLabel, IonButton, IonImg, IonThumbnail } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Results.css';
import { homeOutline, settingsOutline } from 'ionicons/icons';

import Home from './Home';
import About from './Season'
import { IonReactRouter } from '@ionic/react-router';


import firebase from '../firebaseConfig';
import { getHeapSnapshot } from 'v8';
import { stringify } from 'querystring';

function useResults(){
    const [results, setResults] = useState<any[]>([])

    useEffect(() => {
        firebase
        .firestore()
        .collection('results').orderBy('Order')
        .onSnapshot((snapshot) => {
            const newResults = snapshot.docs.map((document) => ({
                id : document.id,
                ...document.data() //the ... operator will merge the id to the associated data
            }))

            setResults(newResults)
        })

    }, [])
    

    return results
}

const Results: React.FC = () => {
    const results = useResults()
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonItem color="primary">
            <IonThumbnail>
            <IonImg src={"assets/icon/Arsenal_White.png"} className="whiteArsenal_image"></IonImg>
          </IonThumbnail>
          <IonTitle>Results</IonTitle>
          </IonItem>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Results</IonTitle>
          </IonToolbar>
        </IonHeader>

        {results.map((result) =>
      <IonItem key={result.id}>
        <IonList>

            {result.Type == "Premier League" ? <IonImg src={"assets/icon/PremierLeague.png"} className="typeBadgeResult_image"></IonImg>
              : result.Type == "FA Cup Final" ? <IonImg src={"assets/icon/FACup.png"} className="typeBadgeResult_image"></IonImg>
              : result.Type == "FA Cup Semi Final" ? <IonImg src={"assets/icon/FACup.png"} className="typeBadgeResult_image"></IonImg>
              : result.Type == "Pre Season" ? <IonImg src={"assets/icon/PreSeason.png"} className="typeBadgeResult_image"></IonImg>
              : ''}

            <IonLabel className="result-entry">{result.Type}</IonLabel>
            <IonLabel className="result-entry">{result.Home} v {result.Team} {result.Score}</IonLabel>
            <IonLabel className="result-entry">{result.Win}</IonLabel>

            {result.Team == "MK Dons" && result.Type == "Pre Season" ? <IonImg src={"assets/icon/MKDons.png"} className="teamBadgeResult_image"></IonImg> 
              : result.Team == "Chelsea" && result.Type == "FA Cup Final" ? <IonImg src={"assets/icon/Chelsea.png"} className="teamBadgeResult_image"></IonImg> 
              : result.Team == "Watford" && result.Type == "Premier League" && result.Home == "Home" ? <IonImg src={"assets/icon/Watford.png"} className="teamBadgeResult_image"></IonImg>
              : result.Team == "Aston Villa" && result.Type == "Premier League" && result.Home == "Away" ? <IonImg src={"assets/icon/AstonVilla.png"} className="teamBadgeResult_image"></IonImg>
              : result.Team == "Man City" && result.Type == "FA Cup Semi Final" ? <IonImg src={"assets/icon/ManCity.png"} className="teamBadgeResult_image"></IonImg>
              : result.Team == "Liverpool" && result.Type == "Premier League" && result.Home == "Home" ? <IonImg src={"assets/icon/Liverpool.png"} className="teamBadgeResult_image"></IonImg>
              : result.Team == "Tottenham" && result.Type == "Premier League" && result.Home == "Away" ? <IonImg src={"assets/icon/Tottenham.png"} className="teamBadgeResult_image"></IonImg>
              : result.Team == "Leicester" && result.Type == "Premier League" && result.Home == "Home" ? <IonImg src={"assets/icon/Leicester.png"} className="teamBadgeResult_image"></IonImg>
              : result.Team == "Wolves" && result.Type == "Premier League" && result.Home == "Away" ? <IonImg src={"assets/icon/Wolves.png"} className="teamBadgeResult_image"></IonImg>
              : result.Team == "Norwich" && result.Type == "Premier League" && result.Home == "Home" ? <IonImg src={"assets/icon/Norwich.png"} className="teamBadgeResult_image"></IonImg>
              : ''}

        </IonList>
      </IonItem>
      )}

      </IonContent>

      <IonItem>
        <IonButton routerLink="/home" size="default">Back</IonButton>
      </IonItem>
        
    </IonPage>
  );
};

export default Results;
