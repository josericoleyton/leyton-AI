import portfolioData from '@/content/portfolio.json';
import footballData from '@/content/football.json';
import guitarData from '@/content/guitar.json';
import coffeeData from '@/content/coffee.json';
import booksData from '@/content/books.json';
import moviesData from '@/content/movies.json';
import musicData from '@/content/music.json';
import travelData from '@/content/travel.json';

import type {
  PortfolioContent,
  FootballContent,
  GuitarContent,
  CoffeeContent,
  BooksContent,
  MoviesContent,
  MusicContent,
  TravelContent,
} from '@/types/content';

export function getPortfolioContent(): PortfolioContent {
  return portfolioData as PortfolioContent;
}

export function getFootballContent(): FootballContent {
  return footballData as FootballContent;
}

export function getGuitarContent(): GuitarContent {
  return guitarData as GuitarContent;
}

export function getCoffeeContent(): CoffeeContent {
  return coffeeData as CoffeeContent;
}

export function getBooksContent(): BooksContent {
  return booksData as BooksContent;
}

export function getMoviesContent(): MoviesContent {
  return moviesData as MoviesContent;
}

export function getMusicContent(): MusicContent {
  return musicData as MusicContent;
}

export function getTravelContent(): TravelContent {
  return travelData as TravelContent;
}
