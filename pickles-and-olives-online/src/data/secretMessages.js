export function getSecretMessage() {
  return messages[getRandomIndex()];
}

function getRandomIndex() {
  const index = Math.floor(Math.random() * messages.length);
  return index;
}

const messages = [
  'The quick brown fox jumps over the lazy dog.',
  "I don't think it'll rain this afternoon.",
  'My internet connection was cut off.',
  "Last year, I couldn't spend as much time with my children as I wanted to.",
  'She goes to the movies once a week.',
  'What would you like for dinner?',
  "Strictly speaking, that's not correct.",
  'How many of these do you plan to buy?',
  'The chair had a wobbly leg.',
  'I might bake a cake tomorrow.',
  "It's wise to check the weather before you get dressed for the day.",
  'A cat without curiosity is a very boring cat.',
  'The game has started.',
  'Just water is fine, thanks.',
  'Could you please provide more information?',
  'Excuse me, I was sitting there.',
  'The thick foliage and intertwined vines made the hike nearly impossible.',
  'There can never be too many cherries on an ice cream sundae.',
  'She insisted that it did not belong to her.',
  "You know you're an adult when you ask for a vacuum cleaner for your birthday.",
  'Could you please help me with this?',
  'Two slices of cheese, and no onion, thanks.',
  'Be a little kinder than you have to.',
  'The early bird catches the worm.',
  "Don't count your chickens before they hatch.",
  'I need to go to the grocery store to buy some milk and bread.',
  'My favorite color is blue.',
  'He always takes his coffee black.',
  'She has a beautiful singing voice.',
  'I love to read books in my free time.',
  "Let's go for a walk in the park.",
  "He's a talented musician who plays multiple instruments.",
  'The sun sets in the west.',
  "I'm allergic to peanuts, so I can't eat peanut butter.",
  'The train was delayed by an hour due to a technical issue.',
  "It's important to get enough sleep every night.",
  "She's been practicing yoga for several years and is very flexible.",
  'I enjoy watching movies on the weekends.',
  'We need to be more environmentally conscious and reduce our carbon footprint.',
  "He's a great cook and makes delicious meals from scratch.",
  'The city skyline looked beautiful at sunset.',
];
