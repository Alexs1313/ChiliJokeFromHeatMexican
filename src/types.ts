import type {ImageSourcePropType} from 'react-native';

export type JokeCategoryKey = 'angry' | 'smart' | 'romantic';

export type JokeCategory = {
  key: JokeCategoryKey;
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

export type OnboardingStep = {
  chip: string;
  title: string;
  subtitle: string;
  body: string;
  image: ImageSourcePropType;
};

export type Story = {
  id: string;
  icon: string;
  title: string;
  excerpt: string;
  body: string;
};

export type RatePhrase = {
  title: string;
  body: string;
  score: number;
};

export type OnboardingCardContent = {
  chip: string;
  title: string;
  subtitle: string;
  body: string;
};

export type JokeDetailParams = {
  categoryKey?: string;
  title: string;
  subtitle: string;
  quote?: string;
  tag?: string;
  icon?: string;
  accent?: string;
  jokes: string[];
};

export type SavedJokeItem = {
  id: string;
  categoryKey: string;
  categoryTitle: string;
  categoryIcon: string;
  joke: string;
};

export type StoryDetailParams = {
  id: string;
  title: string;
  icon: string;
  body: string;
};
