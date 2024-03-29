import React from 'react';
import {
    IonItemGroup,
    IonIcon,
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
    IonCardTitle,
    IonCardHeader,
    IonCardContent,
    IonNote,
    IonLabel,
	IonButton,
    IonList,
	IonItemDivider,
} from '@ionic/react';
import Skill from '../components/Skill';
import './Tab1.css';
import {
    gridOutline,
    flowerOutline,
    bugOutline,
    libraryOutline,
    brushOutline,
    desktopOutline,
    fileTrayStackedOutline,
    layersOutline,
    cogOutline,
    serverOutline,
    globeOutline,
} from 'ionicons/icons';
const Tab1: React.FC = () => {
    return (
        <IonPage>
          <IonHeader>
            <IonToolbar>
              <IonTitle>William Carlos Wyatt: Math-Econ PhD Student</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent fullscreen>
            <IonHeader collapse="condense">
              <IonToolbar>
                <IonTitle size="large">Tab 1</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonGrid>
	      <IonRow>
		<IonCol size-lg={'6'} size-xs={'12'}>
		  <IonCard>
		    <img src="/assets/portrait.jpg" />
		    <IonCardHeader className="ion-text-center">
		      <IonTitle color="dark" className="ion-text-center">Wil C. Wyatt</IonTitle>
		    </IonCardHeader>
		    <IonCardContent>
		      <IonNote >
			My motivation lies in finding solutions to better the standard of living of my community and the sphere of all communities. Currently, a subject that piques my interest is distributed ledgers. My goal is to understand their impact and limitations in offering automation that can enable jobs rather than deteriorate employment. 
		      </IonNote>
		    </IonCardContent>
		  </IonCard>
		</IonCol>
		<IonCol size-lg={'6'} size-xs={'12'}>
		  <IonCard>
		    <IonCardHeader className="ion-text-center">
		      <IonTitle color="dark" className="ion-text-center">Projects Overview</IonTitle>
		    </IonCardHeader>
		    <IonCardContent>
				
			<a href="/work#ctf"><IonButton fill="outline" >Game: Webcrawling CTF (2022)</IonButton></a><br />
				<a href="/work#dlmp"><IonButton fill="outline" >Deep Links Meta Pages (2022)</IonButton></a><br />
				<a href="/work#mturk"><IonButton fill="outline" >Author: MTurk Research (2021)</IonButton></a><br />
				<a href="/work#iota-workshop"><IonButton fill="outline" >IOTA Workshop (2020)</IonButton></a><br />
				<a href="/work#osrs"><IonButton fill="outline" >Runescape Bot Swarm (2017-2019)</IonButton></a><br />
				<a href="/work#iota-bet"><IonButton fill="outline" >Webapp: IOTA Bet (2017)</IonButton></a><br />
				<a href="/work#this-agora"><IonButton fill="outline" >Webapp: This Agora (2015)</IonButton></a><br />
				<a href="/work#beelieve"><IonButton fill="outline" >Game: Beelieve (2014)</IonButton></a><br />
				<a href="/work#citywide"><IonButton fill="outline" >Game: CityWide (2013)</IonButton></a><br />
				<a href="/work#halyard"><IonButton fill="outline" >Game: Halyard (2012)</IonButton></a><br />
		    </IonCardContent>
		  </IonCard>
		</IonCol>                
                
	      </IonRow>
		<IonRow>
		<IonCol size-lg={'6'} size-xs={'12'}>
		  <IonCard>
		    <IonCardHeader>
		      <IonTitle className="ion-text-center">
			<IonIcon className="absolute-icon" icon={bugOutline} />
			Programming Languages
		      </IonTitle>
		    </IonCardHeader>
		    <IonCardContent>
		      <Skill name="Python" level={5} />
		      <Skill name="JavaScript" level={5} />
		      <Skill name="Java" level={5} />
                      <Skill name="STATA" level={5} />
		      <Skill name="C++" level={3} />
		      <Skill name="R" level={2} />
		      <Skill name=".NET/C#" level={2} line={false} />
		    </IonCardContent>
		  </IonCard>
		</IonCol>
		<IonCol size-lg={'6'} size-xs={'12'}>
		  <IonCard>
		    <IonCardHeader>
		      <IonTitle className="ion-text-center">
			<IonIcon className="absolute-icon" icon={brushOutline} />
			Hobbies
		      </IonTitle>
		    </IonCardHeader>
		    <IonCardContent>
		      <Skill name="Web Crawling" level={5} />
		      <Skill name="Bot Making" level={5} />
		      <Skill name="History" level={4} quality="Learning"/>
		      <Skill name="Film Photography" level={4} />
		      <Skill name="IOT Building" level={4} />
		      <Skill name="Weightlifting" level={3} quality="Novice" line={false} />
		    </IonCardContent>
		  </IonCard>
		</IonCol>
		<IonCol size-lg={'6'} size-xs={'12'}>
		  <IonCard>
		    <IonCardHeader>
		      <IonTitle className="ion-text-center">
			<IonIcon className="absolute-icon" icon={serverOutline} />
			Databases
		      </IonTitle>
		    </IonCardHeader>
		    <IonCardContent>
		      <Skill name="mySQL" level={5} />
		      <Skill name="MongoDB" level={5} />
		      <Skill name="Redis" level={4} />
		      <Skill name="PostgreSQL" level={3} line={false} />
		    </IonCardContent>
		  </IonCard>
		</IonCol>
		<IonCol size-lg={'6'} size-xs={'12'}>
		  <IonCard>
		    <IonCardHeader>
		      <IonTitle className="ion-text-center">
			<IonIcon className="absolute-icon" icon={gridOutline} />
			Frameworks
		      </IonTitle>
		    </IonCardHeader>
		    <IonCardContent>
		      <Skill name="Django" level={5} />
		      <Skill name="React.js" level={5} />
		      <Skill name="Ionic" level={5} />
		      <Skill name="Angular.js" level={3} line={false} />
		    </IonCardContent>
		  </IonCard>
		</IonCol>
		<IonCol size-lg={'6'} size-xs={'12'}>
		  <IonCard>
		    <IonCardHeader>
		      <IonTitle className="ion-text-center">
			<IonIcon className="absolute-icon" icon={globeOutline} />
			Distributed Ledgers
		      </IonTitle>
		    </IonCardHeader>
		    <IonCardContent>
		      <Skill name="IOTA" level={5} />
		      <Skill name="Ethereum" level={3}  line={false}/>
		    </IonCardContent>
		  </IonCard>
		</IonCol>
		<IonCol size-lg={'6'} size-xs={'12'}>
		  <IonCard>
		    <IonCardHeader>
		      <IonTitle className="ion-text-center">
			<IonIcon className="absolute-icon" icon={flowerOutline} />
			Other
		      </IonTitle>
		    </IonCardHeader>
		    <IonCardContent>
		      <Skill name="Quality" level={5} quality="High Quality" />
		      <Skill name="Evil" level={2}  quality="Probably Not Evil" line={false}/>
		    </IonCardContent>
		  </IonCard>
		</IonCol>		
	      </IonRow>
	    </IonGrid>
	    <IonItem lines="none">
	    </IonItem>
          </IonContent>
        </IonPage>
    );
};

export default Tab1;
/*
  <IonNote>From an influencial teacher Orginally I was going to school for Computer Science because of my interest in game design and IOT. Later, I pursued physics looking for an understanding of the fundamentals of the universe. Now I have become interested in the dynamics of my society and everyday life looking for solutions to aid the affliction of the state and economy on my community. At Claremont Graduate Univerity I am studing an interfield of Mathematics and Economics to gain a deep understanding of the impact of Distributed Ledgers on the firm.</IonNote>
*/
