import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonItem, IonImg, IonList, IonThumbnail, IonButton, IonButtons, IonRouterLink, IonBadge} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonItem color="primary">
            <IonThumbnail>
              <IonImg src={"assets/icon/Arsenal_White.png"} className="whiteArsenal_image"></IonImg>
            </IonThumbnail>
          <IonTitle>Home</IonTitle>
          </IonItem>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
          </IonToolbar>
        </IonHeader>

        <IonItem>
          <IonList>
            <IonItem color="light" className="results_item">
              <IonButton routerLink="/results" color="dark" size="default">Results</IonButton>
              <IonLabel> </IonLabel>
              <IonThumbnail>
                <IonImg src={"assets/icon/results.png"} className="results_image"></IonImg>
              </IonThumbnail>
            </IonItem>
          </IonList>       
        </IonItem>

        <IonItem>
          <IonList>
            <IonItem color="light" className="fixtures_item">
              <IonButton routerLink="/fixtures" color="dark" size="default">Fixtures</IonButton>
              <IonLabel> </IonLabel>
              <IonThumbnail>
                <IonImg src={"assets/icon/fixtures.png"}></IonImg>
              </IonThumbnail>
            </IonItem>
          </IonList>
        </IonItem>

        <IonItem>
          <IonList>
            <IonItem color="light" className="players_item">
              <IonButton routerLink="/players" color="dark" size="default">Players</IonButton>
              <IonThumbnail>
                <IonImg src={"assets/icon/players.png"}></IonImg>
              </IonThumbnail>
            </IonItem>
          </IonList>
        </IonItem>

      

  

      </IonContent>
    </IonPage>
  );
};

export default Home;
