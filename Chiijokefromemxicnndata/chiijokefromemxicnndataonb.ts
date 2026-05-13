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
    chip: 'Your Comedy Companion',
    title: '¡Hola, amigo!',
    subtitle: 'Meet Miguel 😃',
    body: 'Welcome to a colorful comedy experience with Miguel as your cheerful guide. Explore jokes, funny reactions, and lighthearted stories made for quick smiles and relaxed moments.',
    image: require('../assets/i/chiijokefromemxiconb1.png'),
  },
  {
    chip: 'Jokes by Style',
    title: 'Choose Your Mood',
    subtitle: '3 Comedy Styles 🌶️',
    body: 'Pick from El Enojado 😤 for dramatic jokes, El Sabio 🧠 for clever jokes, or El Romántico 💕 for romantic humor. You can also let the app suggest a surprise style.',
    image: require('../assets/i/chiijokefromemxiconb2.png'),
  },
  {
    chip: 'Joke Reaction Feature',
    title: 'Share Your Joke',
    subtitle: "Think You're Funny? 😉",
    body: 'Write your own joke and receive a humorous reaction from Miguel. The response is light, playful, and made to keep the comedy mood going.',
    image: require('../assets/i/chiijokefromemxiconb3.png'),
  },
  {
    chip: 'Group Story Activity',
    title: 'Create With Friends',
    subtitle: 'Party Story Fun 🎉',
    body: 'Gather 3 to 5 friends, complete a funny unfinished story, and read everyone’s creative ending. Participants can vote for the most entertaining response after each round.',
    image: require('../assets/i/chiijokefromemxiconb4.png'),
  },
  {
    chip: 'Stories & Saved Jokes',
    title: 'Funny Stories',
    subtitle: 'Stories & More 📖',
    body: 'Read humorous stories, save your favorite jokes, and share funny moments with friends. Keep your favorite comedy content easy to find anytime.',
    image: require('../assets/i/chiijokefromemxiconb5.png'),
  },
];
