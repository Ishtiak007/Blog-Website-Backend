/* eslint-disable no-console */
import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

const { port, databaseURI } = config;

async function connectServer() {
  try {
    await mongoose.connect(databaseURI as string);
    app.listen(port, () => {
      console.log(`PH-University server running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

connectServer();
