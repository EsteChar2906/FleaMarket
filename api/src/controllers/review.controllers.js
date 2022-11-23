const Reviews = require('../models/reviews');

export const postReviews = async (req, res) => {
  try {
    const newReview = Reviews(req.body);
    await newReview.save();
    console.log(newReview);
    return res.json(newReview);
  } catch (e) {
    return res.status(500).json({message: e.message});
  };
};

export const getReview = async (req, res) => {
  try {
    const findreview = await Reviews.find();
    
  } catch (e) {
    
  }
}