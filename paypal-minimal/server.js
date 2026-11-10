require("dotenv").config();
const cors = require("cors");
const express = require("express");
const paypal = require("@paypal/checkout-server-sdk");

var mess
var mess2
const app = express();
app.use(express.json());
app.use(express.static("public"));



 app.use(cors({ origin: "http://localhost:3000/*" }));

app.use(function(req, res, next) {
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type"
    );
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});
// PayPal configuration
const environment =
  process.env.NODE_ENV === "production"
    ? new paypal.core.LiveEnvironment(
        process.env.PAYPAL_CLIENT_ID,
        process.env.PAYPAL_CLIENT_SECRET,
      )
    : new paypal.core.SandboxEnvironment(
        process.env.PAYPAL_CLIENT_ID,
        process.env.PAYPAL_CLIENT_SECRET,
      );
const client = new paypal.core.PayPalHttpClient(environment);

// Helper for negative testing
const addNegativeTesting = (request) => {
  if (
    process.env.NODE_ENV !== "production" &&
    process.env.ENABLE_NEGATIVE_TESTING === "true" &&
    process.env.NEGATIVE_TEST_TYPE
  ) {
    request.headers["PayPal-Mock-Response"] = JSON.stringify({
      mock_application_codes: process.env.NEGATIVE_TEST_TYPE,
    });
  }
};

// Create order
app.post("/api/orders", async (req, res) => {
  const request = new paypal.orders.OrdersCreateRequest();
  addNegativeTesting(request);
  request.requestBody({
    intent: "CAPTURE",
    purchase_units: [
      { amount: { currency_code: "USD", value: req.body.amount || "1.99" } },
    ],
  });

  try {
    const order = await client.execute(request);
    res.json({ id: order.result.id });
     mess = order.status
     mess2 = order.result.id
      console.log("inside create", mess)
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Capture order
app.post("/api/orders/:orderID/capture", async (req, res) => {
  const request = new paypal.orders.OrdersCaptureRequest(req.params.orderID);
  addNegativeTesting(request);

  try {
    const capture = await client.execute(request);
    res.json({ id: capture.result.id, status: capture.result.status });
    
    mess = capture.result.status 
    mess2 = capture.result.id
    console.log("inside capture",mess)
  } catch (err) {
    res.status(500).json({ error: err.message });
    mess = 'Payment canceled'
  }
   
});
// messages
 app.post("/api/messages", async (req, res) => {
   console.log("Inside server message===========")
 // const request = new paypal.orders.OrdersCaptureRequest(req.params.orderID);
 // addNegativeTesting(request);
  if ((mess == undefined) || (mess == null))
  {
   mess = "Payment Cancelled"
  }
 else
  {
  console.log("mess.....mess2......",mess,mess2)
  }

  
  res.json({mess2:mess2,mess: mess})

 });
app.listen(process.env.PORT || 3000, () => {
 
  console.log(
    `Server running on port ${process.env.PORT || 3000} in ${process.env.NODE_ENV === "production" ? "production" : "sandbox"} mode`,
  );
});