import Review from '../models/reviews.js';

export const createReview = async (req, res) => {
  try {
    const newReview = Review(req.body);
    await newReview.save();
    console.log(newReview);
    return res.json(newReview);
  } catch (e) {
    return res.status(500).json({message: e.message});
  };
};

export const getReview = async (req, res) => {
  try {
    const findreview = await Review.find();
    return res.status(200).json(findreview);
  } catch (e) {
    return res.status(500).json({message: e.message});
  }
}