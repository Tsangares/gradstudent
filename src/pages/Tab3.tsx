import React from 'react';
import {
    IonItem,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonNote,
    IonLabel,
    IonList,
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const getAge = (year:number,month:number,day:number)=>{
    var dob = new Date(year,month,day);
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
    const years = Math.abs(age_dt.getUTCFullYear() - 1970);
    const months = age_dt.getUTCMonth();
    const days= age_dt.getUTCDay() ;
    return `${years} Years, ${months} Months, ${days} Days`;
};

const Tab3: React.FC = () => {
  const age = getAge(1995,8,6);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Wil: Contact</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
	    <IonRow>
		<IonCol size-lg={'3'} size-xs={'0'}></IonCol>
		<IonCol size-lg={'6'} size-xs={'12'}>
		    <IonCard>
			<img src="/assets/old_portrait.jpg" />
			<IonCardHeader>
			    <IonTitle className="ion-text-center">Contact</IonTitle>
			</IonCardHeader>
			<IonCardContent>
			    <IonItem>
				<span>Email</span>
				<IonLabel className="ion-text-wrap ion-text-right">William.Wyatt at cgu.edu</IonLabel>
			    </IonItem>
			    <IonItem>
				<span>Full Name</span>
				<IonLabel className="ion-text-wrap ion-text-right">William Carlos Wyatt</IonLabel>
			    </IonItem>
			    <IonItem>
				<IonLabel>Preferred Name</IonLabel>
				<IonLabel className="ion-text-right">Wil</IonLabel>
			    </IonItem>
			    <IonItem lines="none">
				<span>Age</span>
				<IonLabel className="ion-text-right ion-text-wrap">{age}</IonLabel>
			    </IonItem>			    
			</IonCardContent>
		    </IonCard>
		</IonCol>
		<IonCol size-lg={'3'} size-xs={'0'}></IonCol>
	    </IonRow>
	    <IonItem lines="none" />
	</IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
