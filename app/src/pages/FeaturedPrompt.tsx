import React from 'react';
import {
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonCard, 
  IonCardHeader, 
  IonCardSubtitle, 
  IonCardTitle,
  IonCardContent, 
} from '@ionic/react';
import './Tab1.css';
import Greeting from '../components/Greeting';
import TutorialHero from '../assets/tutorial-image.jpg';
import PromptData from '../assets/db.json';

 
const Tab1: React.FC = () => {
    return (
  
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>j-prompt.</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">
                <Greeting/>
              </IonTitle>
            </IonToolbar>
          </IonHeader>
            
          <IonCard>
          <IonCardHeader>
              <IonCardSubtitle>FEATURED PROMPT</IonCardSubtitle>
              <IonCardTitle>{PromptData.prompts.mindfulness[0].title}</IonCardTitle>
              <IonCardContent>{PromptData.prompts.mindfulness[0].prompt}</IonCardContent>
            </IonCardHeader>
          </IonCard>

          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Randomize</IonCardTitle>
            </IonCardHeader>
          </IonCard>

          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Prompt Catagories</IonCardTitle>
            </IonCardHeader>
          </IonCard>

          <IonCard>
            <img src={TutorialHero} alt=""/>
            <IonCardHeader>
              <IonCardSubtitle>Tutorial</IonCardSubtitle>
              <IonCardTitle>Learn Journal Prompt</IonCardTitle>
            </IonCardHeader>
          </IonCard>

        </IonContent>
      </IonPage>
    );
};

export default Tab1;
