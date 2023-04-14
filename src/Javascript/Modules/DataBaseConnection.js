import axios from 'axios';

const { CustomLogger } = require('./CustomLogger.js');

export const GetAPIRequest = async (url) => {
  try {
    const response = await axios.get(url);
    console.log('response  ', response);
    return response.data;
  } catch (ex) {
    CustomLogger.ErrorLogger(ex);
  }
};

export const PostAPIRequest = async (url, postData) => {
  try {
    const response = await axios.post(url, postData);
    return response.data;
  } catch (ex) {
    CustomLogger.ErrorLogger(ex);
  }
};

//module.exports = { GetAPIRequest, PostAPIRequest };
