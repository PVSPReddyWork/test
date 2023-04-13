import React, { useEffect } from 'react';
import { CustomLogger } from './../../Javascript/Modules/CustomLogger.js';
import DigitalSwitch from './../CustomControls/DigitalSwitch/DigitalSwitch.js';
import AnalogSwitch from './../CustomControls/AnalogSwitch/AnalogSwitch.js';

const FaceRecognition_Page = (parms) => {
  useEffect(() => {
    try {
    } catch (ex) {
      CustomLogger.ErrorLogger(ex);
    }
    // imgRef.current && loadModels();
  }, []);
  const onChangeValueHandler = (values) => {
    try {
      CustomLogger.DataLogger(values);
    } catch (ex) {
      CustomLogger.ErrorLogger(ex);
    }
  };
  return (
    <>
      <div className="divBody">
        <div className="divData">
          <div className="divDataInput">
            <DigitalSwitch
              switchName="Test Switch"
              onChangeValue={onChangeValueHandler}
            />
            <AnalogSwitch
              switchName="Test Switch"
              onChangeValue={onChangeValueHandler}
            />
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

const FaceRecognitionPage = FaceRecognition_Page;
export default FaceRecognitionPage;
