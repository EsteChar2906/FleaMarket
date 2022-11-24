import express from "express";

import {
  createReview,
  getReview
} from '../controllers/review.controllers.js';

const router = express();

router.post("/review", createReview);

router.get("/review", getReview);

export default router