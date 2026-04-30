const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Static files (HTML, CSS, JS) တွေကို folder အလိုက် သုံးနိုင်အောင် လုပ်တာပါ
app.use(express.static(path.join(__dirname)));

// Main Route (Customer မြင်ရမယ့် နေရာ)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Inventory Route (Agent စီမံမယ့် နေရာ)
app.get('/inventory', (req, res) => {
    res.sendFile(path.join(__dirname, 'inventory.html'));
});

app.listen(PORT, () => {
    console.log(`Spider.io server is running on port ${PORT}`);
});
