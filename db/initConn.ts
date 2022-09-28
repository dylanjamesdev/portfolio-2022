"use strict";

import mongoose from "mongoose";

const initConnection = async () => {
  let conn = await mongoose
    .connect(process.env.MONGO_URI)
    .then((i) => {})
    .catch((e) => {
      console.log(e);
    });

  return conn;
};

export default initConnection;
