import React, {
  useState,
  useEffect
} from 'react';
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
} from '@ionic/react';
import './Tab1.css';
import Greeting from '../components/Greeting';
import TutorialHero from '../assets/tutorial-image.jpg';

const Tab1: React.FC = () => {
  const [promptId, setPromptId] = useState('');
  const [promptTitle, setPromptTitle] = useState('');
  const [promptCatagory, setPromptCatagory] = useState('');
  const [prompContent, setPromptContent] = useState('');
  
  useEffect(() => {
    fetch("http://192.168.1.2:8080/api")
      .then (res => res.json())
      .then(data => {
        console.log(data);
      })
  }, [])

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
