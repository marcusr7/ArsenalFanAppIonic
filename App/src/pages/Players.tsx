import React, {useEffect, useState} from 'react';
import { Redirect, Route } from 'react-router-dom';
import { ellipse, square, triangle, logIn, hourglass, homeOutline, handLeftOutline, personCircleOutline, settingsOutline, calendar, personCircle, map, informationCircle, personOutline  } from 'ionicons/icons';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonButton, IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonList, IonThumbnail, IonImg, IonSearchbar} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

import './Players.css';

import firebase from '../firebaseConfig';

import { IonReactRouter } from '@ionic/react-router';
import { clear } from 'console';

function useForwards(){
  const [forwards, setForwards] = useState<any[]>([])

  useEffect(() => {
      firebase
      .firestore()
      .collection('forwards').orderBy('Number')
      .onSnapshot((snapshot) => {
          const newForwards = snapshot.docs.map((document) => ({
              id : document.id,
              ...document.data() //the ... operator will merge the id to the associated data
          }))

          setForwards(newForwards)
      })

  }, [])

  return forwards
}

function useMidfielders(){
  const [midfielders, setMidfielders] = useState<any[]>([])

  useEffect(() => {
      firebase
      .firestore()
      .collection('midfielders').orderBy('Number')
      .onSnapshot((snapshot) => {
          const newMidfielders = snapshot.docs.map((document) => ({
              id : document.id,
              ...document.data() //the ... operator will merge the id to the associated data
          }))

          setMidfielders(newMidfielders)
      })

  }, [])

  return midfielders
}

function useDefenders(){
  const [defenders, setDefenders] = useState<any[]>([])

  useEffect(() => {
      firebase
      .firestore()
      .collection('defenders').orderBy('Number')
      .onSnapshot((snapshot) => {
          const newDefenders = snapshot.docs.map((document) => ({
              id : document.id,
              ...document.data() //the ... operator will merge the id to the associated data
          }))

          setDefenders(newDefenders)
      })

  }, [])

  return defenders
}

function useGoalkeepers(){
  const [goalkeepers, setGoalkeepers] = useState<any[]>([])

  useEffect(() => {
      firebase
      .firestore()
      .collection('goalkeepers').orderBy('Number')
      .onSnapshot((snapshot) => {
          const newGoalkeepers = snapshot.docs.map((document) => ({
              id : document.id,
              ...document.data() //the ... operator will merge the id to the associated data
          }))

          setGoalkeepers(newGoalkeepers)
      })

  }, [])

  return goalkeepers
}

function useOnloan(){
  const [onloan, setOnloan] = useState<any[]>([])

  useEffect(() => {
      firebase
      .firestore()
      .collection('onloan').orderBy('Age')
      .onSnapshot((snapshot) => {
          const newOnloan = snapshot.docs.map((document) => ({
              id : document.id,
              ...document.data() //the ... operator will merge the id to the associated data
          }))

          setOnloan(newOnloan)
      })

  }, [])

  return onloan
}

const Players: React.FC = () => {

  const forwards = useForwards();
  const midfielders = useMidfielders();
  const defenders = useDefenders();
  const goalkeepers = useGoalkeepers();
  const onloans = useOnloan();
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonItem color="primary">
            <IonThumbnail>
              <IonImg src={"assets/icon/Arsenal_White.png"}></IonImg>
            </IonThumbnail>

          <IonTitle>Players</IonTitle>
          </IonItem>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Players</IonTitle>
          </IonToolbar>
        </IonHeader>
        
          <IonItem color="primary">
            <IonTitle>Forwards</IonTitle>
          </IonItem>
          {forwards.map((forward) =>
          <IonItem key={forward.id}>
            <IonList>

              {forward.Name == "Alexandre Lacazette" ? <IonImg src="assets/icon/alexandreLacazette.jpg" className="player_image"></IonImg>
              : forward.Name == "Willian" ? <IonImg src="assets/icon/willian.jpg" className="player_image"></IonImg>
              : forward.Name == "Pierre-Emerick Aubameyang" ? <IonImg src="assets/icon/pierreEmerickAubameyang.jpg" className="player_image"></IonImg>
              : forward.Name == "Nicolas Pepe" ? <IonImg src="assets/icon/nicolasPepe.jpg" className="player_image"></IonImg>
              : forward.Name == "Reiss Nelson" ? <IonImg src="assets/icon/reissNelson.jpg" className="player_image"></IonImg>
              : forward.Name == "Eddie Nketiah" ? <IonImg src="assets/icon/eddieNketiah.jpg" className="player_image"></IonImg>
              : forward.Name == "Gabriel Martinelli" ? <IonImg src="assets/icon/gabrielMartinelli.jpg" className="player_image"></IonImg>
              : ''}

              
              
          
          <IonLabel>{forward.Name}</IonLabel>
          <IonLabel>Age: {forward.Age}</IonLabel>
          <IonLabel>Number: {forward.Number}</IonLabel>
          <IonLabel>Nationality: {forward.Nationality}</IonLabel>

          </IonList>
          </IonItem>
          )}


          <IonItem color="primary">
            <IonTitle>Midfielders</IonTitle>
          </IonItem>
          {midfielders.map((midfielder) =>
          <IonItem key={midfielder.id}>
            <IonList>

            {midfielder.Name == "Bukayo Saka" ? <IonImg src="assets/icon/bukayoSaka.jpg" className="player_image"></IonImg>
              : midfielder.Name == "Mesut Ozil" ? <IonImg src="assets/icon/mesutOzil.jpg" className="player_image"></IonImg>
              : midfielder.Name == "Lucas Torreira" ? <IonImg src="assets/icon/lucasTorreira.jpg" className="player_image"></IonImg>
              : midfielder.Name == "Ainsley Maitland-Niles" ? <IonImg src="assets/icon/ainsleyMaitlandNiles.jpg" className="player_image"></IonImg>
              : midfielder.Name == "Mohamed Elneny" ? <IonImg src="assets/icon/mohamedElneny.jpg" className="player_image"></IonImg>
              : midfielder.Name == "Joe Willock" ? <IonImg src="assets/icon/joeWillock.jpg" className="player_image"></IonImg>
              : midfielder.Name == "Matteo Guendouzi" ? <IonImg src="assets/icon/matteoGuendouzi.jpg" className="player_image"></IonImg>
              : midfielder.Name == "Emile Smith Rowe" ? <IonImg src="assets/icon/emileSmithRowe.jpg" className="player_image"></IonImg>
              : midfielder.Name == "Granit Xhaka" ? <IonImg src="assets/icon/granitXhaka.jpg" className="player_image"></IonImg>
              : ''}
              
          
          <IonLabel>{midfielder.Name}</IonLabel>
          <IonLabel>Age: {midfielder.Age}</IonLabel>
          <IonLabel>Number: {midfielder.Number}</IonLabel>
          <IonLabel>Nationality: {midfielder.Nationality}</IonLabel>

          </IonList>
          </IonItem>
          )}

          <IonItem color="primary">
            <IonTitle>Defenders</IonTitle>
          </IonItem>

          {defenders.map((defender) =>
          <IonItem key={defender.id}>
            <IonList>

            {defender.Name == "Hector Bellerin" ? <IonImg src="assets/icon/hectorBellerin.jpg" className="player_image"></IonImg>
              : defender.Name == "Kieran Tierney" ? <IonImg src="assets/icon/kieranTierney.jpg" className="player_image"></IonImg>
              : defender.Name == "William Saliba" ? <IonImg src="assets/icon/williamSaliba.jpg" className="player_image"></IonImg>
              : defender.Name == "Sokratis" ? <IonImg src="assets/icon/sokratis.jpg" className="player_image"></IonImg>
              : defender.Name == "Rob Holding" ? <IonImg src="assets/icon/robHolding.jpg" className="player_image"></IonImg>
              : defender.Name == "Cedric Soares" ? <IonImg src="assets/icon/cedricSoares.jpg" className="player_image"></IonImg>
              : defender.Name == "Shkodran Mustafi" ? <IonImg src="assets/icon/shkodranMustafi.jpg" className="player_image"></IonImg>
              : defender.Name == "Calum Chambers" ? <IonImg src="assets/icon/calumChambers.jpg" className="player_image"></IonImg>
              : defender.Name == "Pablo Mari" ? <IonImg src="assets/icon/pabloMari.jpg" className="player_image"></IonImg>
              : defender.Name == "David Luiz" ? <IonImg src="assets/icon/davidLuiz.jpg" className="player_image"></IonImg>
              : defender.Name == "Sead Kolasinac" ? <IonImg src="assets/icon/seadKolasinac.jpg" className="player_image"></IonImg>
              : ''}
              
          
          <IonLabel>{defender.Name}</IonLabel>
          <IonLabel>Age: {defender.Age}</IonLabel>
          <IonLabel>Number: {defender.Number}</IonLabel>
          <IonLabel>Nationality: {defender.Nationality}</IonLabel>

          </IonList>
          </IonItem>
          )}


          <IonItem color="primary">
            <IonTitle>Goalkeepers</IonTitle>
          </IonItem>
          {goalkeepers.map((goalkeeper) =>
          <IonItem key={goalkeeper.id}>
            <IonList>

            {goalkeeper.Name == "Bernd Leno" ? <IonImg src="assets/icon/berndLeno.jpg" className="player_image"></IonImg>
              : goalkeeper.Name == "Emiliano Martinez" ? <IonImg src="assets/icon/emilianoMartinez.jpg" className="player_image"></IonImg>
              : goalkeeper.Name == "Matt Macey" ? <IonImg src="assets/icon/mattMacey.jpg" className="player_image"></IonImg>
              : ''}
              
          
          <IonLabel>{goalkeeper.Name}</IonLabel>
          <IonLabel>Age: {goalkeeper.Age}</IonLabel>
          <IonLabel>Number: {goalkeeper.Number}</IonLabel>
          <IonLabel>Nationality: {goalkeeper.Nationality}</IonLabel>

          </IonList>
          </IonItem>
          )}

          <IonItem color="primary">
          <IonTitle>On Loan</IonTitle>
          </IonItem>
          {onloans.map((onloan) =>
          <IonItem key={onloan.id}>
            <IonList>

            {onloan.Name == "Konstantinos Mavropanos" ? <IonImg src="assets/icon/konstantinosMavropanos.jpg" className="player_image"></IonImg>
              : onloan.Name == "Henrikh Mkhitaryan" ? <IonImg src="assets/icon/henrikhMkhitaryan.jpg" className="player_image"></IonImg>
              : ''}
              
          
          <IonLabel>{onloan.Name}</IonLabel>
          <IonLabel>Age: {onloan.Age}</IonLabel>
          <IonLabel>Team: {onloan.Team}</IonLabel>
          <IonLabel>Nationality: {onloan.Nationality}</IonLabel>

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

export default Players;
