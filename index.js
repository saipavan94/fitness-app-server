const express = require('express')
const app = express()
const config = require('./config');
const mongoose = require('mongoose');
const registerUser = require('./routes/registerUser');
const signinUser = require('./routes/signinUser');
const createNewProgram = require('./routes/createNewProgram');
const getPrograms = require('./routes/getPrograms');
const yourPrograms = require('./routes/yourPrograms');
const deleteProgram = require('./routes/deleteProgram');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const CustomerSelectedProgram = require('./routes/CustomerSelectedProgram');
const downloadFile = require('./routes/downloadFile');
const deleteFile = require('./routes/deleteFile')
const subscribedPrograms = require('./routes/subscribedPrograms')
const updateCustomerProgramDetails = require('./routes/updateCustomerProgramDetails')
const deleteFolder = require('./routes/deleteFolder')
const getUserProgramsData = require('./routes/getUserProgramsData')
const initProgramDataTable = require('./routes/initProgramDataTable')
const sendMail = require('./routes/sendMail')

mongoose.connect(config.database)
  .then(() => console.log('connected to mongoose'))
  .catch((err) => console.error('error connecting to mongo', err));



app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(cookieParser());


app.get('/', (req, res) =>{
  res.send('Hello World!')
});

app.post('/registerUser', registerUser);
app.post('/signinUser', signinUser);
app.post('/createNewProgram', createNewProgram);
app.get('/getPrograms', getPrograms);
app.post('/yourPrograms', yourPrograms);
app.post('/CustomerSelectedProgram', CustomerSelectedProgram);
app.post('/subscribedPrograms', subscribedPrograms);
app.post('/getUserProgramsData', getUserProgramsData);
app.post('/initProgramDataTable', initProgramDataTable);
app.post('/sendEMail', sendMail);
app.post('/deleteProgram', deleteProgram);

app.post('/updateCustomerProgramDetails', updateCustomerProgramDetails);
app.get('/deleteFolder/:userId/:folderName', deleteFolder);

app.get('/downloadFile/:userId/:folderName/:fileName/:hash', downloadFile);
app.get('/deleteFile/:userId/:folderName/:fileName', deleteFile);

app.listen(3004, () => console.log('Example app listening on port 3004!'))
