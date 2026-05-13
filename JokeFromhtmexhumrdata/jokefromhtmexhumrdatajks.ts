export type JokeFromhtmexhumrJokeCategoryKey = 'angry' | 'smart' | 'romantic';

export type JokeFromhtmexhumrJokeCategory = {
  key: JokeFromhtmexhumrJokeCategoryKey;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  quote: string;
  tag: string;
  jokes: string[];
  gradient: [string, string];
  border: string;
};

/** Jokes tab — categories with joke lists. */
export const jokefromhtmexhumrJokeCategories: JokeFromhtmexhumrJokeCategory[] =
  [
    {
      key: 'angry',
      icon: '😤',
      title: 'El Enojado',
      subtitle: 'The Angry Mexican',
      description: 'Furious jokes with maximum\nspice and zero patience',
      quote: '"Ay, caramba! Why is everything so WRONG?!"',
      tag: '🌶️',
      jokes: [
        'I told my taco to stay warm… now it thinks it owns the microwave.',
        'My neighbor stole one pepper from my garden. Now every taco he eats tastes like betrayal.',
        'I asked for peace and quiet. Instead, my mariachi band cousin arrived with three trumpets.',
        'If someone says my salsa is too spicy, I take it as a personal insult.',
        "My burrito exploded in the microwave. Even the kitchen couldn't handle my anger.",
        'I lost one game of cards and suddenly the whole village heard new Spanish words.',
        'The waiter forgot my hot sauce. That was the longest five minutes of his life.',
        'I tried yoga once, but I got angry because the floor was winning.',
        'My cactus has fewer sharp points than my mood before breakfast.',
        "People say I overreact. Sorry, I couldn't hear them over my dramatic exit.",
      ],
      gradient: ['#600B1A', '#3D0510'],
      border: '#FF3D5A33',
    },
    {
      key: 'smart',
      icon: '🧠',
      title: 'El Sabio',
      subtitle: 'The Smart Mexican',
      description:
        'Witty intellectual humor with\ndeep philosophical insights',
      quote:
        '"I use logic like salsa: carefully measured, but always present."',
      tag: '🧠',
      jokes: [
        "I don't burn tacos because I understand the science of perfect timing.",
        'My calculator gave up after trying to count how many tacos I can eat.',
        'I studied philosophy just to answer one question: soft taco or crunchy taco?',
        'People call me smart because I bring extra salsa before anyone asks.',
        'I once solved a family argument using math and three burritos.',
        'The secret to happiness is simple: knowledge, confidence, and unlimited guacamole.',
        "My teacher asked for a smart answer, so I said, 'Vacation.'",
        "I read books while eating tacos. That's called balanced education.",
        'Even my sombrero looks intelligent when I wear it.',
        "I don't argue loudly. I calmly destroy people with facts and spicy logic.",
      ],
      gradient: ['#9F4A0A', '#5A2A05'],
      border: '#E6AD4C33',
    },
    {
      key: 'romantic',
      icon: '💕',
      title: 'El Romántico',
      subtitle: 'The Romantic Mexican',
      description: 'Love, passion and tacos wrapped\nin one tender joke',
      quote: '"Love is temporary... tacos together are forever."',
      tag: '❤️',
      jokes: [
        'I gave her flowers and tacos. She said tacos were more romantic.',
        'My love language is sharing the last nacho.',
        "Every sunset looks better when there's mariachi music nearby.",
        'I wrote her a poem, but she only remembered the part about burritos.',
        'She stole my heart faster than I steal chips from the table.',
        "I knew it was true love when she didn't complain about extra onions.",
        'My romantic dinners always include candles and dangerous amounts of salsa.',
        'I tried singing under her window, but her dog became my biggest fan instead.',
        'Love is temporary, but tacos together create memories forever.',
        'She said I was too dramatic, so I played sad guitar for three hours.',
      ],
      gradient: ['#7A1040', '#3D0820'],
      border: '#FF6B9D33',
    },
  ];
