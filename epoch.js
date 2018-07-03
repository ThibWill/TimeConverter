#!/usr/bin/env node

const process = require('process');
const moment = require('moment');

let time = process.argv[2];

if(time) {
  let nature = 'seconds';

  if(time.indexOf('ms') !== -1 || process.argv[3] === 'ms') {
    nature = 'miliseconds';
    time = time.replace('ms', '')
  } 
  time = time.trim();

  if(time.match(/^\d+$/)){ // Only number
    nature === 'miliseconds' ? time = Math.round(time/1000) : null;
    console.log(moment.unix(time).format('MMMM Do YYYY, h:mm:ss a'))
  } else {
    try {
      console.log(moment(time.toString()).unix());
    } catch (e) {
      console.log('Moment.js doesn\'t like your date')
    }
  }
} else {
  console.log('No time to convert :\'(')
}