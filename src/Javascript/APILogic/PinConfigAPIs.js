import { CustomLogger } from './../Modules/CustomLogger.js';
import * as Constants from './APIConstants';
import {
  GetAPIRequest,
  PostAPIRequest,
} from './../Modules/DataBaseConnection.js';

export const sendCurrentConfig = async (endpoint, postData) => {
  try {
    let url = Constants.baseURL + endpoint;
    let _postData = JSON.stringify(postData);
    var response = await PostAPIRequest(url, _postData);
    return response;
  } catch (ex) {
    CustomLogger.ErrorLogger(ex);
  }
};

export const fetchCurrentConfig = async (endpoint, postData) => {
  try {
    let url = Constants.baseURL + endpoint;
    let _postData = JSON.stringify(postData);
    var response = await PostAPIRequest(url, _postData);
    return response;
  } catch (ex) {
    CustomLogger.ErrorLogger(ex);
  }
};
