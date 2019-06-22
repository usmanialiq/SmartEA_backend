var express = require('express');
var router = express.Router();
var dictionary = require('dictionary-en-us');
var nspell = require('nspell');
var stringSimilarity = require('string-similarity');
var _ = require('underscore');
const Grammarbot = require('grammarbot');
var thesaurus = require('thesaurus-synonyms');
var fuzz = require('fuzzball');
var Sentiment = require('sentiment');
var sentiment = new Sentiment();
var emotional = require("emotional");

/*
const bot = new Grammarbot({
  'api_key' : 'AF5B9M2X',      // (Optional) defaults to node_default
  'language': 'en-US',         // (Optional) defaults to en-US
  'base_uri': 'api.grammarbot.io', // (Optional) defaults to api.grammarbot.io
});

async function checkThesaurus(nerd) {
  return await thesaurus.similar(nerd).then(results => {console.log("THESAURUS RESP ===>", results)})
}
checkThesaurus('morning');

let qs = 'It was fine morning when the match was played';
let as = 'Match was not played in the morning';
console.log("FUZZ RATIO ==>", fuzz.ratio(qs, as));
console.log("FUZZ PARTIAL RATIO ==>", fuzz.partial_ratio(qs, as));
console.log("FUZZ SET RATIO ==>", fuzz.token_set_ratio(qs, as));
console.log("FUZZ SORT RATIO ==>", fuzz.token_sort_ratio(qs, as));
let sentiment_qs = sentiment.analyze(qs);
let sentiment_as = sentiment.analyze(as);
console.log("SENTIMENT SCORE Qs ==>", sentiment_qs.score);
console.log("SENTIMENT SCORE As ==>", sentiment_as.score);
emotional.load(
  () => {
    let qs_emotions = emotional.get(qs); 
    let as_emotions = emotional.get(as);

    let qs_emotional = emotional.positive(qs);
    let as_emotional = emotional.positive(as);
    console.log('EMOTIONAL POSITIVITY Qs', qs_emotional);
    console.log('EMOTIONAL POSITIVITY As', as_emotional);
  }
)

//Checking for similarity
var similarity = stringSimilarity.compareTwoStrings(qs, as); 
similarity = similarity * 100;
function truncate (num, places) {
  return Math.trunc(num * Math.pow(10, places)) / Math.pow(10, places);
}
similarity = truncate(similarity, 3);
console.log("STRING SIMILARITY ==>", similarity + '%');

*/

var connection = require('../db/index');

let data = connection.query('SELECT * FROM `SEQuestion`', (error, results, fields) => {
  if(error) throw error;
  console.log(results[0]);
  
  connection.end()
})


/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ title: 'Express' });
});

module.exports = router;
