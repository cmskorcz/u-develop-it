const express = require('express');
const app = express();

const apiRoutes = require('./routes/apiRoutes')

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', apiRoutes);
app.use((req, res) => {
    res.status(404).end();
})

app.listen(PORT, () => {
    console.log(`Application serving on PORT:${PORT}`);
})