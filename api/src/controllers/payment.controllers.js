import stripe from 'stripe';
const stripes = stripe('sk_test_CGGvfNiIPwLXiDwaOfZ3oX6Y');

export const createPayment = async (req, res) => {
	try{
		stripes.charges.create({
			source: req.body.tokenId,
			amount: req.body.amount,
			currency: 'usd'
		},
		(stripeError, stripeRes) => {
			if(stripeError){
				res.status(500).json(stripeError)
			} else {
				res.status(200).json(stripeRes)
			}
		})
	} catch(error){
		res.status(500).json({message: error.message})
	}
};