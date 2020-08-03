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
import './Acknowledgements.css';
import Greeting from '../components/Greeting';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Acknowledgements</IonTitle>
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
            <IonCardSubtitle>Acknowledgements</IonCardSubtitle>
            <IonCardTitle>Prompt One</IonCardTitle>
            <IonCardContent>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quibusdam!</IonCardContent>
          </IonCardHeader>
        </IonCard>
  
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Featured Prompts</IonCardSubtitle>
            <IonCardTitle>Prompt Two</IonCardTitle>
          </IonCardHeader>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Featured Prompts</IonCardSubtitle>
            <IonCardTitle>Prompt Three</IonCardTitle>
          </IonCardHeader>
        </IonCard>

        <IonCard>
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
