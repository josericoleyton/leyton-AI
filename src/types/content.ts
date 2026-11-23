export interface PortfolioContent {
  title: string;
  subtitle: string;
  philosophy: string;
  currentProject: {
    name: string;
    description: string;
    status: string;
    tags: string[];
    link?: string;
  };
  timeline: Array<{
    period: string;
    role: string;
    company: string;
    description: string;
    details: string[];
    skills: string[];
  }>;
  techStack: Array<{
    category: string;
    skills: string[];
  }>;
  education: Array<{
    institution: string;
    degree: string;
    year: string;
    description?: string;
  }>;
}

export interface FootballContent {
  title: string;
  subtitle: string;
  reflection: string;
  teamsRanking: Array<{
    rank: number;
    name: string;
    country: string;
    description: string;
  }>;
  favoriteLeagues: string[];
  favoritePlayers: Array<{
    name: string;
    position: string;
    era: string;
    why: string;
  }>;
  memorableMoments: Array<{
    match: string;
    year: string;
    note: string;
  }>;
}

export interface GuitarContent {
  title: string;
  subtitle: string;
  learningJourney: string;
  favoriteGenres: string[];
  inspirations: Array<{
    artist: string;
    influence: string;
  }>;
  practiceGoals: string[];
}

export interface CoffeeContent {
  title: string;
  subtitle: string;
  ritual: string;
  brewingMethods: Array<{
    id: string;
    name: string;
    ratio: string;
    grind: string;
    time: string;
    tastingNotes: string;
    description: string;
  }>;
  favoriteOrigins: string[];
}

export interface BooksContent {
  title: string;
  subtitle: string;
  currentlyReading: {
    title: string;
    author: string;
    thought: string;
  };
  readingList: Array<{
    title: string;
    author: string;
    genre: string;
    takeaway: string;
    highlight?: boolean;
  }>;
  genres: string[];
}

export interface MoviesContent {
  title: string;
  subtitle: string;
  cinemaLove: string;
  topMovies: Array<{
    rank: number;
    title: string;
    director: string;
    year: number;
    impression: string;
  }>;
  favoriteDirectors: Array<{
    name: string;
    hallmark: string;
  }>;
}

export interface MusicContent {
  title: string;
  subtitle: string;
  philosophy: string;
  curatedPlaylists: Array<{
    name: string;
    mood: string;
    spotifyId: string;
    description: string;
  }>;
  favoriteArtists: string[];
}

export interface TravelContent {
  title: string;
  subtitle: string;
  philosophy: string;
  countriesVisited: Array<{
    code: string;
    name: string;
    year?: string;
    memory?: string;
  }>;
  citiesVisited: string[];
  bucketList: Array<{
    place: string;
    country: string;
    reason: string;
  }>;
}
