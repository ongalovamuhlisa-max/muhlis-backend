const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const tests = [
  {
    id: 1,
    question: "O‘zbekiston poytaxti qaysi shahar?",
    options: ["Toshkent", "Samarqand", "Buxoro", "Farg‘ona"],
    answer: "Toshkent"
  }
];

app.get('/api/tests', (req, res) => {
  res.json(tests);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
