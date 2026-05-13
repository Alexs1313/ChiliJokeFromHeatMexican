import type {ImageSourcePropType} from 'react-native';

export type ChiijokefromemxicnnOnbStep = {
  chip: string;
  title: string;
  subtitle: string;
  body: string;
  image: ImageSourcePropType;
};

/** Onboarding slides. */
export const chiijokefromemxicnnOnbSteps: ChiijokefromemxicnnOnbStep[] = [
  {
    chip: 'Your Mexican Comedy Companion',
    title: '¡Hola, amigo!',
    subtitle: 'I am Miguel 😃',
    body: 'Welcome to MexiLaughs — the hottest comedy app north AND south of the border! I am Miguel, your guide, your jester, and your spiritual taco advisor.',
    image: require('../assets/i/chiijokefromemxiconb1.png'),
  },
  {
    chip: 'Jokes by Category',
    title: 'Choose Your Flavor',
    subtitle: '3 Styles of Comedy 🌶️',
    body: 'Pick from El Enojado 😤 (angry jokes), El Sabio 🧠 (smart jokes), or El Romántico 💕 (romantic jokes). Or let the app choose a surprise style!',
    image: require('../assets/i/chiijokefromemxiconb2.png'),
  },
  {
    chip: 'Joke Rating System',
    title: 'Rate My Jokes',
    subtitle: "Think You're Funny? 😉",
    body: 'Write your best joke and I, Miguel, will personally evaluate it. Maybe you are hilarious. Maybe you are... not. I will tell you honestly — always do.',
    image: require('../assets/i/chiijokefromemxiconb3.png'),
  },
  {
    chip: 'Multiplayer Mini Game',
    title: '¡Juega con Amigos!',
    subtitle: 'The Party Game 🎮',
    body: 'Gather 3 to 5 friends! Each player finishes a hilarious story, then everyone votes for the funniest ending. May the best comedian be chosen!',
    image: require('../assets/i/chiijokefromemxiconb4.png'),
  },
  {
    chip: 'Stories & Saved Jokes',
    title: 'Historias Cómicas',
    subtitle: 'Stories & More 📖',
    body: 'Read my legendary funny stories, save your favorite jokes, and share the laughter with everyone you know. The fiesta never stops, amigo!',
    image: require('../assets/i/chiijokefromemxiconb5.png'),
  },
];
