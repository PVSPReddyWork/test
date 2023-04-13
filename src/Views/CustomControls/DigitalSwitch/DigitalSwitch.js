import React, { useEffect, useState } from 'react';
import { CustomLogger } from './../../../Javascript/Modules/CustomLogger.js';
import './DigitalSwitch.css';

const Digital_Switch = (parms) => {
  var { switchId, switchName, onChangeValue, switchValue } = parms;
  const [switch_Status, setSwitch_Status] = useState({
    slider_Value: `${switchValue ? 1023 : 0}`,
    switch_Value: switchValue,
    switch_Text: `${
      switchValue !== null && switchValue !== undefined && switchValue === true
        ? `On`
        : `Off`
    }`,
  });
  useEffect(() => {
    try {
    } catch (ex) {
      CustomLogger.ErrorLogger(ex);
    }
  }, []);
  const onSwitchValueChanged = (e) => {
    updateState(!switch_Status.switch_Value, switch_Status.slider_Value);
  };

  const onValueChanged = (_switchValue, _sliderValue) => {
    try {
      onChangeValue({ pinValue: _sliderValue });
    } catch (ex) {}
  };

  const updateState = (_switchValue, _sliderValue) => {
    try {
      let sliderVal = _switchValue ? 1023 : 0;
      onValueChanged(_switchValue, sliderVal);
      setSwitch_Status({
        slider_Value: sliderVal,
        switch_Value: _switchValue,
        switch_Text: `${
          _switchValue !== null &&
          _switchValue !== undefined &&
          _switchValue === true
            ? `On`
            : `Off`
        }`,
      });
    } catch (ex) {}
  };

  return (
    <>
      <div className="divSwitchHolder">
        <label>{switchName}</label>
        <label>: </label>
        <label>{switch_Status.switch_Text}</label>
        <div className="divSwitches">
          <label className="switch">
            <input
              type="checkbox"
              className="checkboxInput"
              id={switchId}
              onChange={onSwitchValueChanged}
            />
            <span className="Switchcontainer round"></span>
          </label>
        </div>
      </div>
    </>
  );
};

const DigitalSwitch = Digital_Switch;
export default DigitalSwitch;
