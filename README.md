# Instagram Mass Unlike Bot 🤖

Un script de console navigateur pour supprimer tous tes likes Instagram en masse automatiquement.

## ⚠️ Disclaimer

Ce script peut violer les [Conditions d'Utilisation d'Instagram](https://help.instagram.com/581066165581870). Utilisez-le à vos propres risques. L'auteur n'est pas responsable d'un éventuel bannissement ou restriction de votre compte.

## Comment ça marche

Le script tourne directement dans votre navigateur via la console DevTools. Il simule des clics humains pour :
1. Sélectionner les posts likés
2. Cliquer "Unlike"
3. Confirmer
4. Scroller et recommencer automatiquement

## Installation

Aucune installation requise. Tout se passe dans le navigateur.

## Utilisation

1. Connecte-toi sur [Instagram](https://www.instagram.com)
2. Va sur `instagram.com/your_activity/interactions/likes/`
3. Clique sur **Select** en haut à droite pour activer le mode sélection
4. Appuie sur **F12** pour ouvrir les DevTools
5. Va dans l'onglet **Console**
6. Copie-colle le contenu de `instagram_unlike_bot.js`
7. Appuie sur **Entrée** et laisse tourner

## Tips

- **Ne mets pas ton PC en veille** pendant que le script tourne
- Le délai entre chaque action est de 800ms — ne le baisse pas trop pour éviter la détection
- Le script attend 10 secondes entre chaque batch pour laisser la page se recharger

## Testé sur

- Chrome / MacOS (M3 Max)
- Mars 2026

## Licence

MIT — fais ce que tu veux avec.
