import React from 'react';
import {
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
    IonCardHeader,
    IonCardContent,
    IonNote,
    IonLabel,
    IonList,
} from '@ionic/react';

import { star,starOutline } from 'ionicons/icons';

const getStars = (level:number)=>{
    const stars = [];
    for(var i=0; i < 5; ++i){
	if (i < level)
	    stars.push(<IonIcon icon={star} />);
	else
	    stars.push(<IonIcon icon={starOutline} />);
    }
    return stars;
};

const getQualityName = (level:number)=>{
    if (level <= 2)
	return "Prior Experience";
    else if(level <= 4)
	return "Proficient";
    else
	return "Expert";
};

interface SkillType{
    level: number;
    name: string;
    line?: boolean;
    quality?: string;
};

const Skill = ({level,name,line=true,quality=""}:SkillType)=>{
    const stars = getStars(level);
    if (quality==="")
	quality = getQualityName(level)
    return (
	<IonItem lines={line ? "full" : "none"}>
	    <IonLabel class="ion-text-wrap">{name}</IonLabel>
	    <IonLabel class="ion-text-center">
		{stars}
	    </IonLabel>
	    <IonLabel class="ion-text-wrap ion-text-right">{quality}</IonLabel>
	</IonItem>
    );
};

export default Skill
