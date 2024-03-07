const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

app.post('/newebpay-notify', async (req, res) => {
  const data = req.body; // 接收蓝新金流的数据
  try {
    // 转发数据到GAS
    await axios.post('https://script.google.com/macros/s/AKfycbyxUgzl8NyQdjvQ3sD1e8m3D22dk3EmzT19rRBR7dZcge9y4bNCea_c0hpJKM3oHMWMMA/exec', data);
    res.status(200).send('Success');
  } catch (error) {
    console.error('Error forwarding data:', error);
    res.status(500).send('Error');
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
