import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, IonItem, IonThumbnail, IonProgressBar, IonLabel } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Season.css';

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonItem color="primary">
            <IonThumbnail>
              <IonImg src={"assets/icon/Arsenal_White.png"} className="whiteArsenal_image"></IonImg>
            </IonThumbnail>
          <IonTitle>Season</IonTitle>
          </IonItem>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Season</IonTitle>
          </IonToolbar>
        </IonHeader>
       

        <IonItem>
          
        <IonImg src={"assets/icon/Arsenal_FC.png"} className="arsenalAbout_image"></IonImg>
        <IonThumbnail>
        <IonImg src={"assets/icon/PremierLeague.png"} className="premierLeagueProgression_image"></IonImg>
        <IonImg src={"assets/icon/EflCup.png"} className="eflCupProgression_image"></IonImg>
        <IonImg src={"assets/icon/FACup.png"} className="FACupProgression_image"></IonImg>
        <IonImg src={"assets/icon/EuropaLeague.png"} className="europaLeagueProgression_image"></IonImg>
        </IonThumbnail>
        
        </IonItem>

          <IonItem>
          <IonHeader className="seasonProgressTitle">Season Progess
      
          <IonProgressBar color="primary" value={0.01} buffer={0.01}></IonProgressBar>
          </IonHeader>
          </IonItem>

          <IonItem>
            <IonHeader className="premierLeaguePlacementTitle">Premier League Placing: 1st
              <IonProgressBar color="primary" value={1}></IonProgressBar>
            </IonHeader>
          </IonItem>

          <IonItem>
            <IonHeader className="europaLeaguePlacementTitle"> Europa League Progression: Group Stage
                <IonProgressBar color="primary" value={0.16}></IonProgressBar> 
            </IonHeader>
          </IonItem>

          <IonItem>
            <IonHeader className="eflCupPlacementTitle"> EFL Cup Progression: 3rd Round
                <IonProgressBar color="primary" value={0.16}></IonProgressBar> 
            </IonHeader>
          </IonItem>

          <IonItem>
            <IonHeader className="faCupPlacementTitle"> FA Cup Progression: 3rd Round
                <IonProgressBar color="primary" value={0.16}></IonProgressBar> 
            </IonHeader>
          </IonItem>
      

      </IonContent>
    </IonPage>
  );
};

export default About;
