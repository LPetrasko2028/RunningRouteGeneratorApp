import Express from 'express'
import dataRouter from './routes/routes.js'

const PORT = 3000;
const app = new Express();

app.use(Express.json());

// -- For testing, REMOVE before deployment --
app.use((req, res, next) => {
    console.log(`${req.method} request at ${req.url}`)
    next()
})
// -------------------------------------------

app.use(Express.static(path.join('./public')));

app.use('/api', dataRouter);

app.get('*', (req, res) => {
    res.sendFile('index.html', { root: './public' })
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`)
});

