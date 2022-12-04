const express  = require('express');
const fileUpload = require('express-fileupload');
const { PrismaClient } = require('@prisma/client');


const prisma = new PrismaClient();
const app = express();

// Middlewares
app.use(fileUpload());

//model handlers
async function modelsCache(model_name) {
    // const models = await prisma.models.deleteMany();
    // await prisma.models.create({data: {name: "bed"}});
    const models = await prisma.models.findMany();
    for(let i=0; i< models.length; i++) {
        if (models[i]['name'] === model_name) {
            return true;
        } else {
            return false;
        }
    }
}

// Endpoints
app.get('/model/:name', (req, res) => {
    let model_name = req.params.name+'.glb';
    let model_status = false;
    model_status = modelsCache(model_name)
        .catch(e => {
            console.error(e.message);
        })
        .finally(async () => {
            await prisma.$disconnect();
        });
    if (model_status) {
        // res.download(`${__dirname}/r3f-frontend/public/uploads/${model_name}`);
        console.log(true);
    } else {
        res.json({message: 'model not found'});
    }
});

app.listen(5000, () => console.log('server running at port 5000\ngo to http://localhost:5000'));