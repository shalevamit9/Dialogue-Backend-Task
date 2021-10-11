const path = require('path');

const readJsonFile = require('../utils/read-json-file');
const sendRequests = require('../utils/send-requests');

/**
 * @param {string[]} actors 
 */
const fetchActorsId = async (actors) => {
  const urlsToSendRequests =
    actors.map(actor => `/search/person?query=${actor}`);
  const requests = sendRequests(urlsToSendRequests);
  const actorsSearchResult = await Promise.all(requests);

  /** @type {string[]} */
  const actorsId =
    actorsSearchResult.map(searchResult => searchResult.data.results[0].id);

  return actorsId;
};

/**
 * @param {string[]} actorsId 
 */
const fetchMarvelActorsCasts = async (actorsId) => {
  const movies = Object.keys(
    await readJsonFile(path.join(__dirname, '..', 'assets', 'movies.json'))
  );

  const urlsToSendRequests =
    actorsId.map(actorId => `/person/${actorId}/movie_credits`);
  const requests = sendRequests(urlsToSendRequests);
  const actorsMovieCreditsResult = await Promise.all(requests);

  const actorsCasts = actorsMovieCreditsResult.map(actorMovieCredit => {
    const casts = actorMovieCredit.data.cast;

    return casts.filter(cast => movies.includes(cast.title));
  });

  return actorsCasts;
};

const fetchAllMarvelActors = async () => {
  /** @type {string[]} */
  const actors =
    await readJsonFile(path.join(__dirname, '..', 'assets', 'actors.json'));

  const actorsId = await fetchActorsId(actors);
  const marvelActorsCasts = await fetchMarvelActorsCasts(actorsId);

  /** @type {{name: string, movies: string[]}[]} */
  const marvelActors = actors.map((actor, index) => {
    return {
      name: actor,
      movies: marvelActorsCasts[index].map(cast => cast.title)
    };
  });

  return marvelActors;
};

const fetchAllMarvelActorsMultipleCharacters = async () => {
  /** @type {string[]} */
  const actors =
    await readJsonFile(path.join(__dirname, '..', 'assets', 'actors.json'));

  const actorsId = await fetchActorsId(actors);
  const marvelActorsCasts = await fetchMarvelActorsCasts(actorsId);

  const playedMultipleCharacters = marvelActorsCasts.map(casts => {
    /** @type {string[]} */
    const characters = casts.map(cast => cast.character);
    const uniqueCharacters = new Set(
      characters.filter(character => !character.includes('uncredited'))
        .map(character =>
          character.split(' / ').pop().replaceAll(/["']+|The/g, '').trim())
    );

    const charactersToDelete = new Set();
    uniqueCharacters.forEach(character => {
      uniqueCharacters.forEach(char => {
        if (character !== char && char.includes(character)) {
          charactersToDelete.add(char);
        }
      });
    });

    charactersToDelete.forEach(characterToDelete => {
      uniqueCharacters.delete(characterToDelete);
    });

    return uniqueCharacters.size > 1;
  });

  const marvelActorsMultipleCharacters = actors.filter((_, index) => {
    return playedMultipleCharacters[index];
  });

  return marvelActorsMultipleCharacters;
};

module.exports = {
  fetchAllMarvelActors,
  fetchAllMarvelActorsMultipleCharacters,
};
