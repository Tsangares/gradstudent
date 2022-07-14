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
} from '@ionic/react';

import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
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
		    <IonTitle className="ion-text-center">Notable Projects</IonTitle>
		</IonItem>
		<IonGrid className="ion-margin">
		    <IonRow>
			<IonCol>
			    <IonItem lines="none">
				<IonTitle color="secondary" className="ion-text-center">Iota Bet</IonTitle>
			    </IonItem>
			    <IonItem>
				<IonLabel color="dark" className="ion-padding ion-text-wrap">Iota Bet is a prediction market using the <a target="_blank" href="https://www.iota.org/get-started/what-is-iota">IOTA token</a>. A web application to post questions and make predictions by placing bets using the feeless cryptocurrency IOTA. The website is located at <a href="https://iotabet.pw" target="_blank">iotabet.pw</a>, although it should only be used as a proof of concept.</IonLabel>
			    </IonItem>
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
		    <IonRow>
			<IonCol>
			    <IonItem lines="none">
				<IonTitle color="secondary" className="ion-text-center">Iota Workshop</IonTitle>
			    </IonItem>
			    <IonItem>
				<IonLabel color="dark" className="ion-padding ion-text-wrap">Winner of the <a href="https://i2t.medium.com/integrate-everything-with-iota-hackathon-winners-announcement-d1c86f075b3b">IOT2Tangle Hackithon!</a> By targeting the instrument of labour to produce commodities, I verbosely describe in <a href="https://gist.github.com/Tsangares/6a6521ae66a4a4c75f5c55a15242ce13" target="_blank">this document</a> how to create an autonomous workshop containing vending equipment. The purpose is the create a cheaper alternative to equipment rental services, like at Home Depot, to reduce the barier of entry to start a craft production business. The benefit of this project is to create entrepreneurial jobs in either general or niche markets by enabling the working class with affordable tools they need to produce goods for their local communities.</IonLabel>
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
