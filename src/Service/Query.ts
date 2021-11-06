const gKey = "AIzaSyDAF9mCr2qHKDU6-SFdyIG-06wcqY4TuFo";

import cheerio from "cheerio";
import stringSimilarity from "string-similarity";
import fetch from "node-fetch";

const getSnips = async (query: string) => {
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${gKey}&cx=918d0b1fbc2166b72&q=${query}`
  );

  console.log(response.status);
  if (response.status !== 200) return false;
  const body = await response.text();

  return JSON.parse(body);
};

const getPage = async (query: string) => {
  const response = await fetch(`${query}`);
  if (response.status !== 200) return false;

  const body = await response.text();
  const $ = cheerio.load(body);

  let arr = $(".TermText")
    .toArray()
    .map((x) => {
      return $(x).text();
    });

  return arr;
};

const getAnswers = async (query: string) => {
  var snips = await getSnips(query);
  console.log(snips );
  if (!snips || snips.searchInformation.totalResults === 0) return false;

  console.log("pulled: ", snips.items.length);

  var dict = {};

  for (var i = 0; i < 4; i++) {
    var arr = await getPage(snips.items[i].link);
    if (arr != false) {
      for (var j = 0; j < arr.length - 1; j += 2) {
        dict[arr[j]] = arr[j + 1];
      }
    }
  }

  let match = await stringSimilarity.findBestMatch(query, Object.keys(dict));

  let ans = [];

  console.log(match);
  for (var i = 0; i < match.ratings.length; i++) {
    if (match.ratings[i].rating < 0.5) continue;
    ans.push({
      question: match.ratings[i].target,
      match: round(match.ratings[i].rating * 100, 1),
      answer: dict[match.ratings[i].target],
    });
  }
  return ans;
};

export { getSnips, getAnswers };

function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}
