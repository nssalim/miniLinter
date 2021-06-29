// Mini Linter
// Iterate over arrays to improve the quality of the paragraph and gather information about that paragraph (word count, sentence count and overused words). Plus, filter out unnecessary words.

let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

// Heading
console.log("MINI LINTER\n");

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually'];


// Gather information about the individual words and sentences in the string 'story'. 

// split the string 'story' into individual words
let storyWords = story.split(' ');
// console.log(storyWords);
// console.log(storyWords.length);


// log number of words in the 'story' string
console.log("Word count: " + storyWords.length);
// Output: Word count: 188

//  Iterate over array to filter out any unnecessary words.
let betterWords = storyWords.filter(function(word){
  return !unnecessaryWords.includes(word)
})
// console.log(betterWords);
// Output shows: 'extremely', 'literally', 'actually' have been filtered out.


// state number of times the overused words have been used. 
let reallyCount = 0;
let veryCount = 0;
let basicallyCount = 0;

for (word of storyWords){
  if (word === 'really'){
    reallyCount += 1
  } else if (word === 'very'){
    veryCount += 1
  } else if (word === 'basically'){
    basicallyCount += 1
  }
}
console.log("\nNumber of times given overused word appears:- ");
console.log('really: ', reallyCount);
console.log('very: ', veryCount);
console.log('basically: ', basicallyCount + "\n");
// Output: Number of times given overused word appears:-
// really:  2
// very:  5
// basically:  1


// state number of sentences in a paragraph
// all of the sentences in this paragraph end with a period (.) or an exclamation mark (!).
// utilize -1: this shows last character in string being iterated over
 let sentencesCount = 0

 for (word of storyWords){
   if (word[word.length -1] ==='.' || word[word.length -1] === '!'){
     sentencesCount += 1
   }
 }
console.log("Sentence count: " + sentencesCount + "\n");
// Output: Sentence count: 12


// use console.log() and .join() to print betterWords array as a single string
console.log("Paragraph after unnecessary words (extremely', 'literally', 'actually') have been filtered out: \n" + betterWords.join(' '));
// Output: 
// Last weekend, I took the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It's really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you cross back into New York! At this point, you are very close to the end.

