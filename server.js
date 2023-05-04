const express = require('express');

const PORT = process.env.PORT || 8080;

const server = express();
const es6Renderer = require('express-es6-template-engine');

server.engine('html', es6Renderer);
server.set('views', 'views');
server.set('view engine', 'html');

server.use(express.static(__dirname + '/public'));

server.get('/', (req, res) => {
    res.render('index', {
        partials:    
            setMainView('landing')
    });
}); 

server.get('/heartbeat', (req, res) => {
    res.json({ 'is': 'working',
    "status": "good" })
});

server.listen(PORT, () => console.log(`The server is running on port ${PORT}.`));
