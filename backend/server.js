const express = require("express");
const cors = require("cors");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const orderRoutes = require("./routes/orderRoutes");
const checkoutRoutes = require("./routes/stripeRoutes");

const driverRoutes = require("./routes/driverRoutes");
const deliverRoutes = require('./routes/deliverRoutes');

const inventoryRoutes = require('./routes/inventoryRoutes');
const supplierRoutes = require('./routes/supplierRoutes');
const releaseItemsRoutes = require('./routes/releaseItemsRoutes')

//staff management
const staffRoutes = require('./routes/staffRoutes')
//leave management
const leaveRoutes = require('./routes/leaveRoutes')
//payroll management
const payrollRoutes = require('./routes/payrollRoutes')

//Pet Management
const petRegisterRoutes= require('./routes/petRegisterRoutes')
const petTreatmentsRoutes= require('./routes/petTreatmentsRoutes')

//service management
const serviceRoutes = require('./routes/serviceRoutes')
//service records management
const servicerecordsRoutes = require('./routes/servicerecordsRoutes')

//veterinary management
const vetRoutes  = require('./routes/vetRoutes')
const prescriptionRoutes  = require('./routes/prescriptionRoutes')
const medicineRoutes  = require('./routes/medicineRoutes')

//appointment management
const appointmentRoutes  = require('./routes/appointmentRoutes')

const port = process.env.PORT || 4000;

const app = express();

app.use(cors({origin: [process.env.CLIENT_URL, process.env.CLIENT_URL2]}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", userRoutes);

//product management
app.use("/api/products", productRoutes);
app.use("/api/carts", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/checkout", checkoutRoutes);

//delivery management
app.use("/api/drivers", driverRoutes);
app.use("/api/deliver-orders", deliverRoutes);

//inventory management
app.use('/api/inventory', inventoryRoutes);
app.use('/api/suppliers', supplierRoutes);
app.use('/api/release-items',releaseItemsRoutes)

//staff management
app.use('/api/staff', staffRoutes);
app.use('/api/leave', leaveRoutes);
app.use('/api/payroll', payrollRoutes);

//pet Management
app.use('/api/pets', petRegisterRoutes);
app.use('/api/treatments', petTreatmentsRoutes);

//service management
app.use('/api/services', serviceRoutes);
app.use('/api/servicerecords', servicerecordsRoutes);

//veterinary management
app.use('/api/vets', vetRoutes);
app.use('/api/prescriptions', prescriptionRoutes);
app.use('/api/medicines', medicineRoutes);

//appointment management
app.use('/api/appointments', appointmentRoutes);


app.use(errorHandler);

connectDB();

app.listen(port, () => console.log(`🚀 Server started on port ${port}`));