const express = require('express');
const actorsService = require('../services/actors.service');

/**
 * returns a list actors attached with the movies each actor played in
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @param {express.NextFunction} next 
 */
const getAllMarvelActors = async (req, res, next) => {
  try {
    const marvelActors = await actorsService.fetchAllMarvelActors();

    res.status(200).json(marvelActors);
  } catch (err) {
    console.log(err);
  }
};

/**
 * returns a list actors attached with the movies each actor played in
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const getAllMarvelActorsMultipleCharacters = async (req, res, next) => {
  try {
    const multipleCharactersActors =
      await actorsService.fetchAllMarvelActorsMultipleCharacters();

    res.status(200).json(multipleCharactersActors);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAllMarvelActors,
  getAllMarvelActorsMultipleCharacters,
};
