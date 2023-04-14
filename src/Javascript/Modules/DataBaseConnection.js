import { Axios } from 'axios';

const { CustomLogger } = require('./CustomLogger.js');

const GetAPIRequest = async (url) => {
  try {
    const response = await Axios.get(url);
    console.log('response  ', response);
    return response.data;
  } catch (ex) {
    CustomLogger.ErrorLogger(ex);
  }
};

const PostAPIRequest = async (url, postData) => {
  try {
    const response = await Axios.post(url, postData);
    return response.data;
  } catch (ex) {
    CustomLogger.ErrorLogger(ex);
  }
};

module.exports = { GetAPIRequest, PostAPIRequest };
