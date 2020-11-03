import React, {useState, useEffect} from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonButton, IonList, IonLabel, IonImg, IonThumbnail } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Fixtures.css';

import firebase from '../firebaseConfig'

function useFixtures(){
  const [fixtures, setFixtures] = useState<any[]>([])

  useEffect(() => {
      firebase
      .firestore()
      .collection('fixtures').orderBy('Order')
      .onSnapshot((snapshot) => {
          const newFixtures = snapshot.docs.map((document) => ({
              id : document.id,
              ...document.data() //the ... operator will merge the id to the associated data
          }))

          setFixtures(newFixtures)
      })

  }, [])
  

  return fixtures
}

const Fixtures: React.FC = () => {
  const fixtures = useFixtures();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonItem color="primary">
            <IonThumbnail>
              <IonImg src={"assets/icon/Arsenal_White.png"} className="whiteArsenal_image"></IonImg>
            </IonThumbnail>
          <IonTitle>Fixtures</IonTitle>
          </IonItem>
        </IonToolbar>
      </IonHeader>
  <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Fixtures</IonTitle>
          </IonToolbar>
        </IonHeader>
    

      {fixtures.map((fixture) =>
      <IonItem key={fixture.id}>
          <IonList>

         {fixture.Type == "Premier League" ? <IonImg src={"assets/icon/PremierLeague.png"} className="typeBadge_image"></IonImg>
              : fixture.Type == "FA Cup Final" ? <IonImg src={"assets/icon/FACup.png"} className="typeBadge_image"></IonImg>
              : fixture.Type == "FA Cup Semi Final" ? <IonImg src={"assets/icon/FACup.png"} className="typeBadge_image"></IonImg>
              : fixture.Type == "Pre Season" ? <IonImg src={"assets/icon/PreSeason.png"} className="typeBadge_image"></IonImg>
              : fixture.Type == "FA Community Shield" ? <IonImg src={"assets/icon/CommunityShield.png"} className="typeBadge_image"></IonImg>
              : ''} 

            <IonLabel className="fixture-entry">{fixture.Type}</IonLabel>
            <IonLabel className="fixture-entry">{fixture.Home} v {fixture.Team}</IonLabel>
            <IonLabel className="fixture-entry">{fixture.Date}</IonLabel>

            {fixture.Team == "Liverpool" && fixture.Type == "FA Community Shield" ? <IonImg src={"assets/icon/Liverpool.png"} className="teamBadgeFixture_image"></IonImg> 
              : fixture.Team == "Liverpool" && fixture.Type == "Premier League" ? <IonImg src={"assets/icon/Liverpool.png"} className="teamBadgeFixture_image"></IonImg>
              : fixture.Team == "Fulham" && fixture.Type == "Premier League" ? <IonImg src={"assets/icon/Fulham.png"} className="teamBadgeFixture_image"></IonImg>
              : fixture.Team == "West Ham" && fixture.Type == "Premier League" ? <IonImg src={"assets/icon/WestHam.png"} className="teamBadgeFixture_image"></IonImg>
              : fixture.Team == "Sheffield United" && fixture.Type == "Premier League" ? <IonImg src={"assets/icon/SheffieldUnited.png"} className="teamBadgeFixture_image"></IonImg>
              : fixture.Team == "Manchester City" && fixture.Type == "Premier League" ? <IonImg src={"assets/icon/ManCity.png"} className="teamBadgeFixture_image"></IonImg>
              : fixture.Team == "Leicester" && fixture.Type == "Premier League" ? <IonImg src={"assets/icon/Leicester.png"} className="teamBadgeFixture_image"></IonImg>
              : fixture.Team == "Manchester United" && fixture.Type == "Premier League" ? <IonImg src={"assets/icon/ManUnited.png"} className="teamBadgeFixture_image"></IonImg>
              : fixture.Team == "Aston Villa" && fixture.Type == "Premier League" ? <IonImg src={"assets/icon/AstonVilla.png"} className="teamBadgeFixture_image"></IonImg>
              : fixture.Team == "Leeds United" && fixture.Type == "Premier League" ? <IonImg src={"assets/icon/Leeds.png"} className="teamBadgeFixture_image"></IonImg>
              : fixture.Team == "Wolves" && fixture.Type == "Premier League" ? <IonImg src={"assets/icon/Wolves.png"} className="teamBadgeFixture_image"></IonImg>
              : ' '}



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

export default Fixtures;
