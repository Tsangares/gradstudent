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
    IonList,
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
          <IonTitle>William Carlos Wyatt</IonTitle>
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
			    <IonNote color="secondary">
				To summarize myself, what I am good at is research and my desire lies in challenging the norm to find viable solutions that can better the state of living for my community and the global sphere of all communities. Currently, a subject that piques my interest is distributed ledgers. My goal is to understand their impact and limitations in offering automation that can enable jobs rather than deteriorate employment. 
			    </IonNote>
			</IonCardContent>
		    </IonCard>
		</IonCol>
	    <IonCol size-lg={'6'} size-xs={'12'}>
		<IonCard>
		    <IonCardHeader className="ion-text-center">
			<IonTitle color="dark" className="ion-text-center">Context</IonTitle>
		    </IonCardHeader>
		    <IonCardContent>
			<IonItemGroup>
			<IonNote color="secondary" className="ion-text-wrap">
			    From an inspirational teacher in community college, Dr. Everett convinced me that I needed to know how our society describes the contents of the universe. A few years of thinking about particles and blackholes, in my lab surrounded by dials, switches, and buttons, a seed of curiosity was planted for something more tangible. Although, before my bachelors in physics, my identity formed much earlier. During my time locked in bed from a broken rib, a book about designing computer viruses infected my mind with a meme: more than the obvious things are alive. Ultimately, this event led me down an obsession of designing flash games, bots, web crawlers and a fascination with bitcoin.
			</IonNote>
			<br />
			<br />
			<IonNote color="secondary" className="ion-text-wrap">
			    Now, I am now covered in the homework for a PhD in the interfield of Math and Economics at Claremont Graduate University. My optimistic goal is to assist in the assimilation of distributed ledgers, and combat the leviathans of big corporations and government. I think this can be done by using distributed ledgers to grow the craft-production market, by lowering the barriers of entry for small businesses, and reducing the cost of market transactions. Ignoring if this is even possible, the pursuit is what interests me most.
			</IonNote>
			</IonItemGroup>
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
			    <Skill name="Java" level={4} />
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
