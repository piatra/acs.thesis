#!/usr/local/bin/node

var fs = require('fs');

if (process.argv.length < 3) {
  console.log('No input file');
  return 1;
}

var file = fs.readFileSync(process.argv[2], 'utf8');
var lines = file.split('\n');
var i = 0;
for (i = 0; i < lines.length - 1; i++) {
  console.log(getTimestamp(lines[i + 1]) - getTimestamp(lines[i]),
              getNoTweets(lines[i + 1]));
}

function getTimestamp(line) {
  if (line.length) {
    return parseInt(line.match(/[0-9]{10,}/g)[0]);
  }

  return 0;
}

function getNoTweets(line) {
  try {
    return parseInt(line.match(/[0-9]{2,4} tweets/)[0]);
  } catch (e) {
    return 0;
  }

  return 0;
}
