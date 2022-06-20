import express, { json, urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";

//routes
import transactionRoutes from "./routes/transaction.routes.js";

const app = express();
dotenv.config();

app.use(cors());
app.use(
  json({
    limit: "5000mb",
  })
);
app.use(urlencoded({ extended: true }));

app.use("/transaction", transactionRoutes);

const PORT = 3000;

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
