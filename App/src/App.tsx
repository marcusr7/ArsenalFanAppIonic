import * as React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle, logIn, hourglass, homeOutline, handLeftOutline, personCircleOutline, settingsOutline, personOutline, footballOutline, footballSharp } from 'ionicons/icons';
import Home from './pages/Home';
import Season from './pages/Season';
import Welcome from './pages/Welcome';
import Results from './pages/Results';
import Fixtures from './pages/Fixtures';
import Players from './pages/Players';

import firebase from './firebaseConfig';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>

      <IonRouterOutlet>
      <Route path="/" component={Welcome} exact={true}/> 
      <Route path="/results" component={Results} exact={true}/>
      <Route path="/fixtures" component={Fixtures} exact={true}/>
      <Route path="/players" component={Players} exact={true}/>

        <IonTabs>
          <IonRouterOutlet>
            <Route path="/home" component={Home} exact={true}/>
            <Route path="/season" component={Season} exact={true}/>

            
          </IonRouterOutlet>

          <IonTabBar slot="bottom">

            <IonTabButton tab="Home" href="/home">
              <IonIcon icon={homeOutline} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>

            <IonTabButton tab="Season" href="/season">
              <IonIcon icon={footballOutline}/>
              <IonLabel>Season</IonLabel>
            </IonTabButton>
            
          </IonTabBar>

        </IonTabs>

      </IonRouterOutlet>

    </IonReactRouter>
  </IonApp>
);

export default App;
