export const savedJokesCategoryKey = (categoryKey: string) =>
  `chili:savedJokes:${categoryKey}`;

export const STORAGE_KEYS = {
  allSavedJokes: 'chili:savedJokes:all',
  favStories: 'chili:favStories',
} as const;
