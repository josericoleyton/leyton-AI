// tests/content.test.ts
import { describe, it, expect } from 'vitest';
import {
  getPortfolioContent,
  getFootballContent,
  getGuitarContent,
  getCoffeeContent,
  getBooksContent,
  getMoviesContent,
  getMusicContent,
  getTravelContent,
} from '../src/lib/content';

describe('Content Layer', () => {
  it('loads portfolio content with timeline items and current project', () => {
    const portfolio = getPortfolioContent();
    expect(portfolio.title).toBeDefined();
    expect(portfolio.timeline.length).toBeGreaterThan(0);
    expect(portfolio.currentProject).toBeDefined();
    expect(portfolio.techStack.length).toBeGreaterThan(0);
    expect(portfolio.philosophy).toBeDefined();
  });

  it('loads football content with rankings and leagues', () => {
    const football = getFootballContent();
    expect(football.teamsRanking.length).toBeGreaterThan(0);
    expect(football.favoritePlayers.length).toBeGreaterThan(0);
  });

  it('loads guitar content with journey and learning goals', () => {
    const guitar = getGuitarContent();
    expect(guitar.learningJourney).toBeDefined();
    expect(guitar.favoriteGenres.length).toBeGreaterThan(0);
  });

  it('loads coffee content with brewing methods', () => {
    const coffee = getCoffeeContent();
    expect(coffee.brewingMethods.length).toBeGreaterThan(0);
    expect(coffee.ritual).toBeDefined();
  });

  it('loads books content with reading list', () => {
    const books = getBooksContent();
    expect(books.readingList.length).toBeGreaterThan(0);
    expect(books.currentlyReading).toBeDefined();
  });

  it('loads movies content with rankings and directors', () => {
    const movies = getMoviesContent();
    expect(movies.topMovies.length).toBeGreaterThan(0);
    expect(movies.favoriteDirectors.length).toBeGreaterThan(0);
  });

  it('loads music content with playlists and philosophy', () => {
    const music = getMusicContent();
    expect(music.curatedPlaylists.length).toBeGreaterThan(0);
    expect(music.favoriteArtists.length).toBeGreaterThan(0);
  });

  it('loads travel content with visited countries and cities', () => {
    const travel = getTravelContent();
    expect(travel.countriesVisited.length).toBeGreaterThan(0);
    expect(travel.citiesVisited.length).toBeGreaterThan(0);
    expect(travel.bucketList.length).toBeGreaterThan(0);
  });
});
