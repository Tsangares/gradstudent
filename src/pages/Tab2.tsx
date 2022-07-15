import React from 'react';
import {
    IonItem,
    IonItemDivider,
    IonItemGroup,
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
	IonButton,
} from '@ionic/react';

import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
	setTimeout((win:Window,ev:Event) => {
		const element = document.querySelector('#' + document.location.toString().split('#')[1]);
		if (element != null) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	},500);
	console.log()
    return (
	<IonPage>
	    <IonHeader>
		<IonToolbar>
		    <IonTitle>Wil: Projects and Acomplishmets</IonTitle>
		</IonToolbar>
	    </IonHeader>
	    <IonContent fullscreen>
		<IonHeader collapse="condense">
		    <IonToolbar>
			<IonTitle size="large">Tab 2</IonTitle>
		    </IonToolbar>
		</IonHeader>
		<IonGrid>
			<IonRow>
				<IonCol size-lg={'4'} size-xs={'2'} />
				<IonCol size-lg={'4'} size-xs={'8'}>
					<img src="/img/selfie.jpg" />
				</IonCol>
				<IonCol size-lg={'4'} size-xs={'2'} />
			</IonRow>
		    <IonRow>
			<IonCol size-lg={'2'} size-xs={'0'} />
			<IonCol size-lg={'8'} size-xs={'12'}>
			    <IonCard>
				<IonCardHeader>
				    <IonTitle className="ion-text-center">Qualifications</IonTitle>
				</IonCardHeader>
				<IonCardContent>
				    <IonList>
					<IonItem>
					    <IonLabel className="ion-text-wrap">Ph.D. Candidate Econ & Math</IonLabel>
					    <IonLabel className="ion-text-wrap ion-text-right">Claremont Gradute University</IonLabel>
					</IonItem>
					<IonItem>
					    <IonLabel className="ion-text-wrap">M.S. Economics</IonLabel>
					    <IonLabel className="ion-text-wrap ion-text-right">Claremont Gradute University 2022</IonLabel>
					</IonItem>
					<IonItem>
					    <span>B.S. Physics</span>
					    <IonLabel className="ion-text-wrap ion-text-right">UC Santa Cruz 2018</IonLabel>
					</IonItem>
					<IonItem>
					    <span>A.S. Physics</span>
					    <IonLabel className="ion-text-wrap ion-text-right">College of Marin 2016</IonLabel>
					</IonItem>
					<IonItem lines="none">
					    <span>A.S. Math</span>
					    <IonLabel className="ion-text-wrap ion-text-right">College of Marin 2016</IonLabel>
					</IonItem>					
				    </IonList>
				</IonCardContent>
			    </IonCard>
			</IonCol>
			<IonCol size-lg={'2'} size-xs={'0'}/>
		    </IonRow>
		</IonGrid>
		<IonItem className="ion-margin-top" lines="none">
		    <IonTitle className="ion-text-center">Project Chronology</IonTitle>
		</IonItem>
		<IonGrid className="ion-margin">
		<IonRow>
		
		<IonCol size-lg={'12'} size-xs={'12'}>
		  <IonCard id="ctf">
		    <IonCardHeader className="ion-text-center">
		      <IonTitle color="dark" className="ion-text-center">Capture The Flag: Webcrawling (2022)</IonTitle>
		    </IonCardHeader>
		    <IonCardContent>
		      <IonItemGroup>
				<IonLabel>Stack: Python Flask server</IonLabel><br />
				<IonNote className="ion-word-wrap">A fully featured multiplayer educational game where the players must learn to web-crawl the sites resouces in order to gain weapons and orbs to fight eachother.</IonNote>
				<br />
				<IonNote className="ion-word-wrap">This project used the WebGL library Matter.js to create the graphics involved in the game. This was for a summer course in webcrawling.</IonNote>
				<br />
				<IonGrid className="ion-text-center" ><IonRow>
				<IonCol size-lg={'4'} size-xs={'0'}  />
				<IonCol size-lg={'4'} size-xs={'12'} ><img src="/img/ctf.png" /></IonCol>
				<IonCol size-lg={'4'} size-xs={'0'} />
				</IonRow></IonGrid>
				<IonItemGroup class="ion-text-center">
				<a target="_blank" href="https://ctf.gradstudent.me"><IonButton class="ion-text-center">View Website</IonButton></a>
				<a target="_blank" href="https://github.com/Tsangares/crawl_ctf"><IonButton class="ion-text-center">View Github Repository</IonButton></a>
		      	</IonItemGroup>
			  </IonItemGroup>
		    </IonCardContent>
		  </IonCard>
		</IonCol>

		<IonCol size-lg={'12'} size-xs={'12'}>
		  <IonCard id="dlmp">
		    <IonCardHeader className="ion-text-center">
		      <IonTitle color="dark" className="ion-text-center">Deep Links Meta Pages (2022)</IonTitle>
		    </IonCardHeader>
		    <IonCardContent>
		      <IonItemGroup>
				<IonLabel>Stack: Python Flask server, IOTA Ledger and QR-Code apparel</IonLabel><br />
				<IonNote className="ion-word-wrap">A Deep Link Micro Page does the impossible task of creating a unique digital identity
while maintaining your anonymity. We offer a service to give your apparel a digital presence. We
do this by embedding the clothes with a decentralized identifier and providing a micro webpage
that end-users can interact, customize and curate. </IonNote>
				<br />
				<IonNote className="ion-word-wrap">This project used the IOTA Ledger to create identities of the produces used as a digital passport for supply chain audits.</IonNote>
				<br />
				<IonGrid className="ion-text-center" ><IonRow class="ion-justify-content-center">
				<IonCol size-lg={'4'} size-xs={'2'}  />
				<IonCol size-lg={'4'} size-xs={'8'}  ><img src="/img/dlmp.png" /></IonCol>
				<IonCol size-lg={'4'} size-xs={'2'}  />
				</IonRow></IonGrid>
				<IonItemGroup class="ion-text-center">
				<a target="_blank" href="/img/Deep_Links_Meta_Pages-Business_Proposal.pdf"><IonButton class="ion-text-center">View Business Proposal</IonButton></a>
				<a target="_blank" href="https://yque.net"><IonButton class="ion-text-center">View Website</IonButton></a>
				<a target="_blank" href="https://github.com/Tsangares/DLMP"><IonButton class="ion-text-center">View Github Repository</IonButton></a>
		      	</IonItemGroup>
			  </IonItemGroup>
		    </IonCardContent>
		  </IonCard>
		</IonCol>
		<IonCol size-lg={'12'} size-xs={'12'}>
		  <IonCard id="iota-workshop">
		    <IonCardHeader className="ion-text-center">
		      <IonTitle color="dark" className="ion-text-center">IOTA Workshop (2020)</IonTitle>
		    </IonCardHeader>
		    <IonCardContent>
		      <IonItemGroup>
				<IonLabel>Stack: Flask server, Raspberry Pi-Zero and IOTA Ledger</IonLabel><br />
				<IonNote className="ion-word-wrap">IOTA Workshop is a proof of concept on how to build equipment rental service based on the IOTA Ledger. The implications of this start from simple vending machines and vending equipment to broadening the craft-production market and increasing employment in areas that are currently inaccessible.</IonNote>
				<br />
				<IonNote className="ion-word-wrap">This project used the IOTA Ledger as an immutable public database where encrypted sensor data of the rental box is uploaded. This allows the rental box to accept and vend equipment completley autonomuosly. This is supposed to showcase a type of autonomous business that could not exist prior to smart contracts and distributed ledgers.</IonNote>
				<br />
				<IonGrid ><IonRow class="ion-justify-content-center">
				<IonCol size-lg={'2'} size-xs={'0'}  />
				<IonCol size-lg={'8'} size-xs={'12'}  ><img src="/img/workshop.jpg" /></IonCol>
				<IonCol size-lg={'2'} size-xs={'0'} />
				</IonRow></IonGrid>
				<IonItemGroup class="ion-text-center">
				<a target="_blank" href="https://youtu.be/PolIkJH3thQ"><IonButton class="ion-text-center">View Video Introduction</IonButton></a>
				<a target="_blank" href="https://youtu.be/LRsAu9jn_a0"><IonButton class="ion-text-center">View Video Demonstation</IonButton></a>
				<a target="_blank" href="https://github.com/Tsangares/iotaworkshop"><IonButton class="ion-text-center">View Github Repository</IonButton></a>
				<a target="_blank" href="https://i2t.medium.com/integrate-everything-with-iota-hackathon-winners-announcement-d1c86f075b3b#a582"><IonButton class="ion-text-center">View Award Page</IonButton></a>
		      	</IonItemGroup>
			  </IonItemGroup>
		    </IonCardContent>
		  </IonCard>
		</IonCol>

		<IonCol size-lg={'12'} size-xs={'12'}>
		  <IonCard id="mturk">
		    <IonCardHeader className="ion-text-center">
		      <IonTitle color="dark" className="ion-text-center">Author: MTurk Research (2021)</IonTitle>
		    </IonCardHeader>
		    <IonCardContent>
		      <IonItemGroup>
				<IonLabel>Stack: Python Flask server</IonLabel><br />
				<IonNote className="ion-word-wrap">A web interface to a database of word responses. The purpose of this interface is to offer two types of survey questions. One to undergraduates and one to MTurks. The MTurks are used as a rough filter to quantify the text blurbs based on their disposition to discriminatino in academia. Then the undergraduates are more refined in this responses in order to create an annotated dataset of text-blurbs from Reddit.</IonNote>
				<br />
				<IonNote className="ion-word-wrap">This project implements both an interface for MTurks, students, a way to display and filter data. The repository can be recycled for other research projects.</IonNote>
				<br />
				<IonGrid className="ion-text-center" ><IonRow class="ion-justify-content-center">
				<IonCol size-lg={'4'} size-xs={'0'} />
				<IonCol size-lg={'4'} size-xs={'12'} ><img src="/img/author.png" /></IonCol>
				<IonCol size-lg={'4'} size-xs={'0'} />
				</IonRow></IonGrid>
				<IonItemGroup class="ion-text-center">
				<a target="_blank" href="https://author.gradstudent.me"><IonButton class="ion-text-center">View Website</IonButton></a>
		      	</IonItemGroup>
			  </IonItemGroup>
		    </IonCardContent>
		  </IonCard>
		</IonCol>
		<IonCol size-lg={'12'} size-xs={'12'}>
		  <IonCard id="osrs">
		    <IonCardHeader className="ion-text-center">
		      <IonTitle color="dark" className="ion-text-center">Runescape Bot Orchestration (2017-2019)</IonTitle>
		    </IonCardHeader>
		    <IonCardContent>
		      <IonItemGroup>
				<IonLabel>Stack: Runelite-Java-Plugin, Flask-Server, Docker</IonLabel><br />
				<IonNote className="ion-word-wrap">This project I spent about 5 years on, but I will only reference the last iteration. This was a suite of bot software and orchestration systems. The purpose of this project was to automate the gameplay of Runescape for no reason other than my own enjoyment. Initially I used machine learning but then opted for Java library injection.</IonNote>
				<br />
				<IonNote className="ion-word-wrap">The complexity of this project was to fight the arms race of the bot-detection software developed by Jagex. In order to mask my mouse movements, I had my friends record their mouse movements for a month, then used the data to create realistic mouse movements. Along with this, I ran each instance of the game in a docker container with their own VPN running to mask their IP. I opted for this method instead of simply an instanced proxy to fully mask my bot like nature. The botting Runelite Plugin I designed interacted with the game of Runescape to create functions like move to location, or pick up items. Each bot was then connected to a Command and Control server (C&C) where large algorithms of instructions would be incrementally given to each bot based on their actions. The C&C was a python flask server which would receive instructions from python scripts from my laptop to coordinate the bots on either routines or specific tasks. In order to create the algorithms for complex in-game actions like quests, I built an in-game interface that let me record the actions of objects I clicked on and paths I would take; this program would output python scripts that I would revise and save for future bot use.</IonNote>
				<br />
				<IonNote className="ion-word-wrap">I am not allowed to release the software to this project because it breaches the terms and agreement of Jagex. I never hurt the game or interfered with other players; I just wanted to play Runescape through a bot network. This software given to the wrong people can critically damage the in-game economy and game experience for others.</IonNote>
				<br />
				<IonGrid ><IonRow class="ion-justify-content-center">
				<IonCol size-lg={'2'} size-xs={'0'}  />
				<IonCol size-lg={'8'} size-xs={'12'}  ><img src="/img/rsbot.png" /></IonCol>
				<IonCol size-lg={'2'} size-xs={'0'}  />
				</IonRow></IonGrid>
			  </IonItemGroup>
		    </IonCardContent>
		  </IonCard>
		</IonCol>

		<IonCol size-lg={'12'} size-xs={'12'}>
		  <IonCard id="iota-bet">
		    <IonCardHeader className="ion-text-center">
		      <IonTitle color="dark" className="ion-text-center">Webapp: IOTA Bet (2017)</IonTitle>
		    </IonCardHeader>
		    <IonCardContent>
		      <IonItemGroup>
				<IonLabel>Stack: Express, Python-Django and MongoDB</IonLabel><br />
				<IonNote className="ion-word-wrap">This website was a fully feature prediction market using distributed ledgers. We implemented the feeless cryptocurrenty IOTA to facilitate transactions and betting. The website was acount-less so when placing a bet you create an account with your return address. The value of the bets would represent the probability of the event occuring.</IonNote>
				<br />

				<IonItemGroup class="ion-text-center">
				<a target="_blank" href="https://iotabet.gradstudent.me/"><IonButton class="ion-text-center">View IOTA-Bet Demo</IonButton></a>
		      	</IonItemGroup>
			  </IonItemGroup>
		    </IonCardContent>
		  </IonCard>
		</IonCol>
		

		<IonCol size-lg={'6'} size-xs={'12'}>
		  <IonCard id="this-agora">
			<img src="/img/this_agora.png" />
		    <IonCardHeader className="ion-text-center">
		      <IonTitle color="dark" className="ion-text-center">Webapp: This Agora (2015)</IonTitle>
		    </IonCardHeader>
		    <IonCardContent>
		      <IonItemGroup>
				<IonLabel>Stack: Angular.js, Python-Django and mySQL</IonLabel><br />
				<IonNote className="ion-word-wrap">This project is intended to fasilitate the discussion of questions with no right answer. With the intentional focus on discussion of opposing viewpoints, This Agora was supposed to resemble the greek plaza where the philosophers spoke at, the Agora. This was a full stack project which taught me all the components of project management involved from user creationg to database management.</IonNote>
				<br />
				<IonItemGroup class="ion-text-center">
				<a target="_blank" href="https://agora.gradstudent.me/"><IonButton class="ion-text-center">View This-Agora Demo</IonButton></a>
				</IonItemGroup>
		      </IonItemGroup>
		    </IonCardContent>
		  </IonCard>
		</IonCol>
		<IonCol size-lg={'6'} size-xs={'12'}>
		  	<IonCard id="beelieve">
			<img src="/img/beelieve.png" />
		    <IonCardHeader className="ion-text-center">
		      <IonTitle color="dark" className="ion-text-center">Game: Beelieve (2014)</IonTitle>
		    </IonCardHeader>
		    <IonCardContent>
				<IonLabel>Language: Java 7 and JavaFX </IonLabel><br />
				<IonNote className="ion-word-wrap">A Bee RPG where you collect honey and pollen. This was essentially an idle game where you play the role of the hive mind facilitating the autonomus NPC characters. The saving system used my own markup language to save all the game elements.</IonNote>
		    	<br />
				<IonItemGroup class="ion-text-center">
				<a target="_blank" href="https://github.com/Tsangares/beelieve"><IonButton class="ion-text-center">View Github Repository</IonButton></a>
				</IonItemGroup>
			</IonCardContent>
		  </IonCard>
		</IonCol>

		<IonCol size-lg={'6'} size-xs={'12'}>
			<IonCard id="citywide">
			<img src="/img/citywide.png" />             
		    <IonCardHeader className="ion-text-center">
		      <IonTitle color="dark" className="ion-text-center">Game: CityWide (2013)</IonTitle>
		    </IonCardHeader>
		    <IonCardContent>
				<IonLabel>Language: Actionscipt 3.0</IonLabel><br />
				<IonNote className="ion-word-wrap">Junior year of highschool, this was a minimally featured building RPG game where you collected resources built houses and killed bunnies. This game involved an interesting caching mechanism to load the map in chunks.</IonNote>
				<img src="/img/citywide_screenshot.png" />
		    </IonCardContent>
			</IonCard>
		</IonCol>
		<IonCol size-lg={'6'} size-xs={'12'}>
		    <IonCard id="halyard">
			<img src="/img/halyard.png" />
		    <IonCardHeader className="ion-text-center">
		      <IonTitle color="dark" className="ion-text-center">Game: Halyard (2012)</IonTitle>
		    </IonCardHeader>
		    <IonCardContent>
				<IonLabel>Language: Actionscipt 3.0</IonLabel><br />
				<IonNote className="ion-word-wrap">This was my first Adobe Flash game in Sophmore year of highschool. It featured a basic boat sailing RPG. The major design contribution to this the water and boat physics mechaincs and object collision engine. This was also my first introduction to vector art.</IonNote>
				<br />
				<img src="/img/boat.png" />
			</IonCardContent>
			</IonCard>
		</IonCol>
		</IonRow>
		    <IonRow>
			<IonCol>
			    <IonItem lines="none">
				<IonTitle color="secondary" className="ion-text-center">Iota Secret</IonTitle>
			    </IonItem>
			    <IonItem>
				<IonLabel color="dark" className="ion-padding ion-text-wrap">A commmand line utility that allows sending small messages between computers without an intermediate server. The mesages are encrypted then held in a distribued ledgers, waiting for any reciver to retrieve the data anywhere using only a passphrase in common with the sender. <a href="https://github.com/Tsangares/iotasecret" target="_blank">This is a open source command line utility written in python located on github and ready to install from the pypi repository.</a></IonLabel>
			    </IonItem>
			</IonCol>
		    </IonRow>
		</IonGrid>
		<IonItem className="ion-margin-top" lines="none">
		    <IonTitle className="ion-text-center">Publications</IonTitle>
		</IonItem>
		<IonGrid className="ion-margin">
		    <IonRow>
			<IonCol>
			    <IonItem lines="none">
				<IonLabel className="ion-text-wrap ion-text-center"><a target="_blank" href="https://arxiv.org/abs/2006.04241">Potential for Improved Time Resolution Using Very Thin Ultra-Fast Silicon Detectors (UFSDs)</a></IonLabel>
			    </IonItem>
			    <IonItem className="ion-text-justify ion-textcenter">
				<IonNote className="auto-align ion-padding">arXiv preprint arXiv:2006.04241 (2020).</IonNote>
			    </IonItem>
			</IonCol>
		    </IonRow>
		    <IonRow>
			<IonCol>
			    <IonItem lines="none">
				<IonLabel className="ion-text-wrap ion-text-center"><a target="_blank" href="https://www.sciencedirect.com/science/article/pii/S0168900220310056?dgcid=rss_sd_all">Radiation hardness of the low gain avalanche diodes developed by NDL and IHEP in China</a></IonLabel>
			    </IonItem>
			    <IonItem className="ion-text-justify">
				<IonNote className="ion-padding ion-text-center">Nuclear Instruments and Methods in Physics Research Section A: Accelerators, Spectrometers, Detectors and Associated Equipment, vol. 984, Dec. 2020, p. 164608. ScienceDirect, doi:10.1016/j.nima.2020.164608.</IonNote>
			    </IonItem>
		    	</IonCol>
		    </IonRow>
		    <IonRow>
			<IonCol>
			    <IonItem lines="none">
				<IonLabel className="ion-text-wrap ion-text-center"><a target="_blank" href="https://cds.cern.ch/record/2718058">Experimental Study of Acceptor Removal in UFSD</a></IonLabel>
			    </IonItem>
			    <IonItem className="ion-text-justify">
				<IonNote className="ion-padding ion-text-center">Nuclear Instruments and Methods in Physics Research Section A: Accelerators, Spectrometers, Detectors and Associated Equipment, vol. 983, Dec. 2020, p. 164611. ScienceDirect, doi:10.1016/j.nima.2020.164611.</IonNote>
			    </IonItem>
		    	</IonCol>
		    </IonRow>
		    <IonRow>
			<IonCol>

			    <IonItem lines="none">
				<IonLabel className="ion-text-wrap ion-text-center"><a target="_blank" href="https://arxiv.org/abs/2003.14071">Layout and Performance of HPK Prototype LGAD Sensors for the High-Granularity Timing Detector</a></IonLabel>
			    </IonItem>
			    <IonItem className="ion-text-justify">
				<IonNote className="ion-padding ion-text-center">Nuclear Instruments and Methods in Physics Research Section A: Accelerators, Spectrometers, Detectors and Associated Equipment, vol. 980, Nov. 2020, p. 164379. ScienceDirect, doi:10.1016/j.nima.2020.164379.</IonNote>
			    </IonItem>
		    	</IonCol>
		    </IonRow>		    
		    <IonRow>
			<IonCol>
			    <IonItem lines="none">
				<IonLabel className="ion-text-wrap ion-text-center"><a target="_blank" href="https://arxiv.org/abs/2004.13895">Radiation Campaign of HPK Prototype LGAD sensors for the High-Granularity Timing Detector (HGTD)
				</a></IonLabel>
			    </IonItem>
			    <IonItem className="ion-text-justify">
				<IonNote className="ion-padding ion-text-center">Nuclear Instruments and Methods in Physics Research Section A: Accelerators, Spectrometers, Detectors and Associated Equipment, vol. 979, Nov. 2020, p. 164382. ScienceDirect, doi:10.1016/j.nima.2020.164382.</IonNote>
			    </IonItem>
		    	</IonCol>
		    </IonRow>
		    <IonRow>
			<IonCol>
			    <IonItem lines="none">
				<IonLabel className="ion-text-wrap ion-text-center"><a target="_blank" href="https://doi.org/10.1016/j.nima.2019.01.050">Use of LGAD ultra-fast silicon detectors for time-resolved low-keV X-ray science</a></IonLabel>
			    </IonItem>
			    <IonItem lines="none" className="ion-text-justify">
				<IonNote className="ion-padding ion-text-center">Nuclear Instruments and Methods in Physics Research Section A: Accelerators, Spectrometers, Detectors and Associated Equipment, vol. 923, Apr. 2019, pp. 5–7. ScienceDirect, doi:10.1016/j.nima.2019.01.050.</IonNote>
			    </IonItem>
			</IonCol>
		    </IonRow>
		</IonGrid>
		<IonItem lines="none" />
		<IonItem lines="none" />
	    </IonContent>
	</IonPage>
    );
};

export default Tab2;
