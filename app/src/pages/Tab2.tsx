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
  IonButton,
  IonRouterLink
} from '@ionic/react';
import './Tab2.css';
import PromptData from '../assets/db.json';
import { americanFootball, attach, happy, cloudyNight } from 'ionicons/icons';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Prompts</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent>
        <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Prompts</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonRouterLink routerLink="/prompt-one">
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>FEATURED PROMPT</IonCardSubtitle>
              <IonCardTitle>{PromptData.prompts.mindfulness[0].title}</IonCardTitle>
              <IonCardContent>{PromptData.prompts.mindfulness[0].prompt}</IonCardContent>
            </IonCardHeader>
          </IonCard>
        </IonRouterLink>

        <IonCardSubtitle className="Subtitle">Catagories</IonCardSubtitle>

        <IonCard className="CardMargin">
          <IonCardHeader>
            <IonCardTitle className="ToUppercase">
                <IonIcon className="Icon" icon={happy}/>
              {PromptData.prompts.mindfulness[0].catagroy}
            </IonCardTitle>
          </IonCardHeader>
        </IonCard>

        <IonCard className="CardMargin">
          <IonCardHeader>
            <IonCardTitle className="ToUppercase">
              <IonIcon className="Icon" icon={cloudyNight}/>
              {PromptData.prompts.meditation[0].catagroy}
            </IonCardTitle>
          </IonCardHeader>
        </IonCard>

        <IonCard className="CardMargin">
          <IonCardHeader>
            <IonCardTitle className="ToUppercase">
              <IonIcon className="Icon" icon={americanFootball}/>
              {PromptData.prompts.sports[0].catagroy}
            </IonCardTitle>
          </IonCardHeader>
        </IonCard>

        <IonCard className="CardMargin">
          <IonCardHeader>
            <IonCardTitle className="ToUppercase">
              <IonIcon className="Icon" icon={attach}/>
              {PromptData.prompts.productivity[0].catagroy}
            </IonCardTitle>
          </IonCardHeader>
        </IonCard>

        


      </IonContent>
    </IonPage>
  );
};

export default Tab2;
