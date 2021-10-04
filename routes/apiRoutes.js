const db = require('../db/db.json');
//refer to github for assistance requiring uuid 
//https://github.com/uuidjs/uuid.git
const { v4: uuidv4 } = require('uuid');

//Routes
module.exports = (app) => {

    app.get('/api/notes', (req, res) => res.json(db));

    app.get('/api/notes/:id', (req, res) => {

        const prevNote = req.params.id;
        for (let i = 0; i < db.length; i++) {
            if (prevNote === db[i].id) {
                db.splice([i], 1)
            }
        }
        res.end();

    });


    app.post('/api/notes', (req, res) => {

        const id = uuidv4();

        prevNote.push({id});
        res.end();
    });

}