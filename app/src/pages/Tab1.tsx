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
  IonCardContent 
} from '@ionic/react';
import './Tab1.css';
import Greeting from '../components/Greeting';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Hello</IonTitle>
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
            <IonCardSubtitle>Featured Prompts</IonCardSubtitle>
            <IonCardTitle>Prompt One</IonCardTitle>
            <IonCardContent>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quibusdam!</IonCardContent>
          </IonCardHeader>
        </IonCard>
  
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Featured Prompts</IonCardSubtitle>
            <IonCardTitle>Prompt Two</IonCardTitle>
            <IonCardContent>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quibusdam!</IonCardContent>
          </IonCardHeader>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Featured Prompts</IonCardSubtitle>
            <IonCardTitle>Prompt Three</IonCardTitle>
            <IonCardContent>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quibusdam!</IonCardContent>
          </IonCardHeader>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
