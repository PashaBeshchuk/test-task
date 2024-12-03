let requestCount = 0;
let timestamp = Date.now();

const limitRequests = (req, res, next) => {
  const currentTime = Date.now();

  if (currentTime - timestamp >= 1000) {
    requestCount = 0;
    timestamp = currentTime;
  }

  if (requestCount >= 50) {
    return res
      .status(429)
      .json({ error: "Too many requests, try again later." });
  }

  requestCount++;

  next();
};

export default limitRequests;
