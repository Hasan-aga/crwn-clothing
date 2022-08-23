require("dotenv").config(); //import env and configure it with our environment variables

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY); //import stripe and give it our secret key from the env

//old way of exporting, we export the serverless function
// we handle any request in this function
exports.handler = async (event) => {
  try {
    const { amount } = JSON.parse(event.body);

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.log("Serverless function error, ", error);
    return {
      status: 400,
      body: JSON.stringify({ error }),
    };
  }
};
