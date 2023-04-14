import React, { useEffect } from 'react';
import { CustomLogger } from './../../Javascript/Modules/CustomLogger.js';
import { fetchCurrentConfig } from './../../Javascript/APILogic/PinConfigAPIs.js';
import { GetDeviceConfigEndPoint } from './../../Javascript/APILogic/APIConstants.js';

const LoginToBoard_Page = (parms) => {
  useEffect(() => {
    try {
    } catch (ex) {
      CustomLogger.ErrorLogger(ex);
    }
    // imgRef.current && loadModels();
  }, []);

  var deviceId = '';
  var deviceName = '';
  const onTextValueChanged = (e) => {
    try {
      var ownerId = e.target.name;
      if (ownerId !== null && ownerId !== undefined) {
        switch (ownerId) {
          case 'deviceId':
            deviceId = e.target.value;
            break;
          case 'deviceName':
            deviceName = e.target.value;
            break;
          default:
            break;
        }
      }
    } catch (ex) {
      CustomLogger.ErrorLogger(ex);
    }
  };
  const onLoginClicked = async (e) => {
    try {
      if (
        deviceId !== null &&
        deviceId !== undefined &&
        deviceId !== '' &&
        deviceName !== null &&
        deviceName !== undefined &&
        deviceName !== ''
      ) {
        var postData = {
          device_id: deviceId,
          device_name: deviceName,
        };
        var response = await fetchCurrentConfig( GetDeviceConfigEndPoint, postData);
        CustomLogger.DataLogger(response);
      }
    } catch (ex) {
      CustomLogger.ErrorLogger(ex);
    }
  };
  return (
    <>
      <div className="divBody">
        <div className="divData">
          <div className="divDataInput">
            <input
              type="text"
              name="deviceId"
              onChange={onTextValueChanged}
              required
            />
            <br></br>
            <input
              type="text"
              name="deviceName"
              onChange={onTextValueChanged}
              required
            />
            <br></br>
            <button type="submit" onClick={onLoginClicked} name="submitButton">
              Login
            </button>
          </div>
          <div className="divDataOutputDisplay"></div>
        </div>
      </div>
      {/* <div className="divPopup">
        <h1 className="textLoadingPopup">Loading</h1>
      </div> */}
    </>
  );
};

const LoginToBoardPage = LoginToBoard_Page;
export default LoginToBoardPage;
