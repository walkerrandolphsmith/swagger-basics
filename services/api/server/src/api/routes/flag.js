const express = require('express');
const flag = require('../services/flag');

const router = new express.Router();

/**
 */
router.post('/', async (req, res, next) => {
  const options = {
  };

  try {
    const result = await flag.addFlag(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    return res.status(err.status).send({
      status: err.status,
      error: err.error
    });
  }
});

/**
 */
router.get('/:id', async (req, res, next) => {
  const options = {
    id: req.params.id
  };

  try {
    const result = await flag.getFlagById(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    return res.status(err.status).send({
      status: err.status,
      error: err.error
    });
  }
});

/**
 */
router.post('/:id', async (req, res, next) => {
  const options = {
    id: req.params.id
  };

  try {
    const result = await flag.updateFlagWithForm(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    return res.status(err.status).send({
      status: err.status,
      error: err.error
    });
  }
});

/**
 */
router.delete('/:id', async (req, res, next) => {
  const options = {
    id: req.params.id
  };

  try {
    const result = await flag.deleteFlag(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    return res.status(err.status).send({
      status: err.status,
      error: err.error
    });
  }
});

module.exports = router;
