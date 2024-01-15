const express = require('express')
const cors = require('cors')
const adminController = require('./controllers/adminController');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', adminController.getAllAdmins);
app.post('/create', adminController.createAdmin);
app.put('/update/:id', adminController.updateAdmin);
app.delete('/delete/:id', adminController.deleteAdmin);
app.get('/getrecord/:id', adminController.getRecordById);

app.listen(3030, () => {
  console.log("Running");
});