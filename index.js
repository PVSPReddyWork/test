const express = require('express');
const app = express();
var cors = require('cors');
const port = 3010;
const path = require('path');

//const faceAPILocal = require('./public/JavaScript/FaceRecognition.js');
//const mongoDataBase = require('./public/JavaScript/MongoDB.js');
//const faceAPILocal = require('./public/JavaScript/index.js');
const { CustomLogger } = require('./public/JavaScript/Modules/CustomLogger.js');
const { Helper } = require('./public/JavaScript/Helper.js');

/** /
var whitelist = ['http://example1.com', 'http://example2.com']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions));
/**/
app.use(cors());

//app.use(express.static('static'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('./public/index.html'));
});

app.get('/LoadModels', async (req, res) => {
  //await faceAPILocal.loadRequiredModels();
  res.send('Loading');
});

app.post('/IdentifyKnownFaces', async function (req, res) {
  try {
    //CustomLogger.MessageLogger(`body is  ${JSON.stringify(req)}`);

    let body = '';
    req.on('data', (chunk) => {
      body += chunk; // convert Buffer to string
    });
    req.on('end', async () => {
      /*
      const result = JSON.parse(body);
      const response = await faceAPILocal.SearchForFaces(result.image); //loadDescriptiors();//SearchForFaces
      const responseObj = response; //await createResponseObject(response, 200, '');
      //CustomLogger.MessageLogger(responseObj);
      res.send(responseObj);
      */
    });
  } catch (ex) {
    CustomLogger.ErrorLogger(ex);
    const responseObj = Helper.createResponseObject(
      Helper.CodeClientError,
      null,
      'Unexpected JSON data, please provide a valid data'
    );
    res.send(responseObj);
  }
});

app.get('/GetMongo', async (req, res) => {
  //await mongoDataBase.GetAllFaceDescriptiors();
  //await faceAPILocal.loadDescriptiors();//SearchForFaces
  res.send('Loading');
});

app.post('/TestForServer', function (req, res) {
  try {
    CustomLogger.MessageLogger('receiving TestForServer request data ...');
    let body = '';
    req.on('data', (chunk) => {
      body += chunk; // convert Buffer to string
    });
    req.on('end', async () => {
      const result = JSON.parse(body);
      CustomLogger.MessageLogger('sending TestForServer response data ...');
      //CustomLogger.MessageLogger(result);
      res.send(result);
    });
  } catch (ex) {
    CustomLogger.ErrorLogger(ex);
    res.send('Unexpected data, please provide a valid data');
  }
});

app.listen(port, () => {
  CustomLogger.MessageLogger(
    `Example app listening at http://localhost:${port}`
  );
});
