# Time convertion

Petit utilitaire permettant de convertir des temps unix en date rapidement

## Requirements

Node supportant ES6

## Installation

## Usage 

`epoch <timeToConvert>`

## Examples 

epoch 4545445545ms => February 22nd 1970, 3:37:26 pm
epoch 4545445545 => anuary 15th 2114, 8:45:45 am
epoch 2012-12-12 => 1355266800

Attention : dans le dernier cas Moment.js est un peu pointilleux et va vous sortir un gros warning des familles si la date n'est en accord avec les conventions récentes des navigateurs 

