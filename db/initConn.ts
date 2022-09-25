"use strict";

import mongoose from "mongoose";

export default async function initConnection() {
  const conn = await mongoose
    .connect(process.env.MONGO_URI)
    .catch((e) => console.error(e));

  return conn;
}
