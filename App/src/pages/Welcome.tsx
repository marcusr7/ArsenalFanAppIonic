import React, {useState} from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInput, IonItem, IonAlert, IonImg, IonLabel, IonThumbnail} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import "./Welcome.css"

const Welcome: React.FC = () => {
    
    const [username, setUsername] = useState('') //initialise to empty string
    const [password, setPassword] = useState('')

    const [showAlert1, setShowAlert1] = useState(false);

    var userNameList:string [];
    var passwordList:any[];

    

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonItem color="primary">
                    <IonThumbnail>
                        <IonImg src={"assets/icon/Arsenal_White.png"} className="whiteArsenal_image"></IonImg>
                    </IonThumbnail>
                    <IonTitle>Welcome</IonTitle>
                    </IonItem>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
            <IonImg src={"assets/icon/Arsenal_FC.png"} className="arsenal_image"></IonImg>
            <IonItem color="secondary">
            <IonImg src={"assets/icon/pepeWelcome.png"} className="pepeWelcome"></IonImg>
            <IonImg src={"assets/icon/aubaWelcome.png"} className="aubaWelcome"></IonImg>
            <IonImg src={"assets/icon/lacazetteWelcome.png"} className="lacazetteWelcome"></IonImg>
            </IonItem>
            <IonItem color="primary">
                <IonTitle className="welcomeTitleOne">An App Made For Arsenal Fans</IonTitle>
            </IonItem>
            <IonItem>
            </IonItem>
                <IonButton routerLink="/home" onClick={() => setShowAlert1(true)} expand="block">Enter</IonButton>
                <IonAlert isOpen={showAlert1} onDidDismiss={() => setShowAlert1(false)} header={'Welcome'} subHeader={username} message={'An App Dedicated To Every Arsenal Fan Around The World'} buttons={['OK']}/>
            </IonContent>
        </IonPage>
    );
  };

  export default Welcome;
