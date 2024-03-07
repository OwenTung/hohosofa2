const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

app.post('/newebpay/callback', async (req, res) => {
  try {
    // 转发收到的数据到GAS
    await axios.post('https://script.google.com/macros/s/AKfycbyxUgzl8NyQdjvQ3sD1e8m3D22dk3EmzT19rRBR7dZcge9y4bNCea_c0hpJKM3oHMWMMA/exec', req.body);
    res.sendStatus(200);
  } catch (error) {
    console.error('Error forwarding data to GAS:', error);
    res.sendStatus(500);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
