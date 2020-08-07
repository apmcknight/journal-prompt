import React from 'react';
import {
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
  IonButtons,
  IonBackButton
} from '@ionic/react';
import PromptData from '../../assets/db.json';

const PromptOne: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Prompt One</IonTitle>
          <IonButtons slot="start">
            <IonBackButton defaultHref="home" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      
      <IonContent>
        <IonHeader collapse="condense">
            <IonToolbar>
             <IonTitle size="large">{PromptData.prompts.sports[0].title}</IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent>
          {PromptData.prompts.sports[0].prompt}
        </IonContent>

        
      </IonContent>
    </IonPage>
  );
};

export default PromptOne;
