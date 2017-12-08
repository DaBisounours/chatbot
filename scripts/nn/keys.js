/* Mots clés */
var keywords = [
	"sang,saigné",
	"beaucoup",
	"petite",
	"grosse",
	"plaie",
	"accident,blessé",
	"inconscient,pommes",
	"comment",
	"secours",
	"numéro",
	"quoi,qu'est-ce",
	"brulure,brulé,brûlure,brûlé",
	"aide,(besoin)",
	"danger",
	"douleur",
	"mal",
	"respire,respirer,respiré",
	"pas,plus",
	"etouffe,etouffé",
	"perdu,(connaissance)",
	"hopital,hôpital",
	"urgent",
	"vite,rapide,rapidement",
	"éléctricité,électrifié,éléctrocuté,jus",
	"outils,perceuse,scie,marteau",
	"tombé,tombe,chute,chuté",
	"haut",
	"eau",
	"medicament,médicament,produit",
	"parler",
	"intoxication,intoxiqué,poison",
	"bonjour"
];

/* Réponses */
var answers = [
	"Si il y beaucoup de sang, appuyez sur la plaie. Appelez à l'aide et composez le 15 (secours)",
	"Si la plaie est petite, nettoyez avec de l'eau et du savon, désinfectez (si possible) puis appliquez un bandage (si vraiment petite, ce n'est pas nécessaire)",
	"Si la personne est inconsciente, commencez par vérifier si il respire puis mettez le en position latérale de sécurité (PLS). Appelez immédiatement les secours (15)",
	"Débrancher l'outil, écartez-le puis verifiez si la personne est consciente.",
	"Trouvez le compteur électrique et eteignez-le. Ecartez l'outil et vérifier si la personne est consciente.",
	"Passez de l'eau sur la brûlure pendant au moins 5 minutes. Protégez la brûlure sans pour autant la serrer ou y coller quelque chose dessus (parachute)",
	"Passer de l'eau sur la brûlure et appelez les secours (le 15). Laissez couler doucement l'eau froide jusqu'à l'arrivée des secours",
	"Pour vérifier si une personne est inconsciente, demandez lui d'ouvrir les yeux, de vous serez les mains. Aucune réponse veut dire qu'elle est inconsciente.",
	"La personne a du mal à respirer mais peut parler (produire un son). Asseyez-la contre un mur ou une chaise et appelez les secours (15). Attention, il est important de ne pas lui taper dans le dos pour éviter d'aggraver la situation",
	"La personne ne peut ni parler, ni respirer, ni tousser. Elle peut émettre des sifflements ou tenter de tousser sans émettre de bruit: Donnez un maximum de 5 claques dans le dos de la personne. Après chaque claque, vérifiez si tout rentre dans l'ordre. Si les claques dans le dos n'ont pas d'effet, effectuez un maximum de 5 compressions abdominales. Si n'y a toujours pas d'amélioration, appeler les secours (15). Si la personne perd connaissance, posez la délicatement au sol et alertez immédiamente les secours (15)",
	"Si la personne a perdu connaissance, posez-la délicatement au sol (si besoin), verifier sa respiration. Alertez immédiatement les secours. Si elle ne respire pas, prenez son pouls et donnez les indications demandées par les secours.",
	"Si la personne a perdu connaissance, posez-la délicatement au sol (si besoin), verifier sa respiration. SI elle ne respire pas, vérifier sont poue et alertez immédiatement les secours. Pratiquer une réanimation cardio-pulmonaire unique si il n'y ni pouls, ni respiration.",
	"Si la personne à été éléctrocutée, cherchez toute source électrique dangeureus et neutralisez la (éteindre compteur électrique, débrancher l'appareil...), cherchez les points de contact et traitez la comme pour une brûlure. Appelez ensuite les secours (15)",
	"Si une personne est tombée de haut, et est toujours consciente, demander lui de ne pas bouger et ne la touchez pas. Appelez immédiatement les secours (15)",
	"Si la personne est tombée de haut et est inconsciente, Ne la touchez pas mais vérifiez sa respiration et sont pouls. Appelez immédiatement les secours (15) et procédez à une réanimation cardio-pulmonaire si nécessaire (pas de pouls ni de respiration). Le numéro des secours est le 15",
	"Si la personne a ingéré le mauvais médicament (pas le bon traitement), appelez immédiatement les secours (15)",
	"Donnez plus de détails.",
	"Bonjour, que puis-je faire pour vous?"
];

/* Représentation des liens entre les mots-clés et les réponses (matrice simplifiée, chaque valeur représente l'index d'un 1 dans une ligne, les autres index sont à zéro)*/
var dataset = [
	[0, 1, 4, 12, 0],
	[2, 4, 1],
	[6, 7, 19, 2],
	[23, 24, 9, 12, 5, 3],
	[23, 24, 27, 5, 4],
	[11, 2, 5],
	[11, 3, 6],
	[6, 7, 12, 7],
	[16, 17, 18, 8],
	[16, 17, 18, 1, 21, 29, 9],
	[19, 10],
	[19, 11],
	[23, 7, 10, 12],
	[26, 25, 13],
	[26, 25, 19, 6, 14],
	[28, 30, 15],
	[31, 17],
    [16]
]