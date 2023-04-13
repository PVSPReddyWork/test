import React, { useEffect, useState } from 'react';
import { CustomLogger } from './../../../Javascript/Modules/CustomLogger.js';
import './AnalogSwitch.css';

const Analog_Switch = (parms) => {
  var {
    switchId,
    sliderId,
    switchName,
    onChangeValue,
    switchValue,
    sliderMin,
    sliderMax,
    sliderValue,
  } = parms;
  //let slider_Value = sliderValue; //0
  //let switch_Value; //false
  //let switchStatus;
  const [switch_Status, setSwitch_Status] = useState({
    slider_Value: sliderValue,
    switch_Value: switchValue,
    switch_Text: `${
      switchValue !== null && switchValue !== undefined && switchValue === true
        ? `On-${
            sliderValue !== null && sliderValue !== undefined ? sliderValue : 0
          }`
        : `Off`
    }`,
  });
  //const [slider_Value, setSlider_Value] = useState(sliderValue);
  //const [slider_Value, setSlider_Value] = useState(sliderValue);
  /*
  if (sliderValue !== null && sliderValue !== undefined) {
    slider_Value = sliderValue;
  } else {
    slider_Value = 0;
  }
  */
  /*
  if (switchValue !== null && switchValue !== undefined) {
    switch_Value = switchValue;
    /*
    if (switch_Value) {
    } else {
      slider_Value = 0;
    }
    * /
  } else {
    switch_Value = false;
  }
  */
  useEffect(() => {
    try {
    } catch (ex) {
      CustomLogger.ErrorLogger(ex);
    }
    // imgRef.current && loadModels();
  }, []);
  const onSliderValueChanged = (e) => {
    /*
    if (switch_Status.switch_Value) {
      switch_Status.slider_Value = e.target.value;
      setSwitch_Status({ ...switch_Status, slider_Value: e.target.value });
      //CustomLogger.DataLogger(slider_Value);
      onValueChanged();
    } else {
      e.target.value = switch_Status.slider_Value;
    }
    */
    try {
      if (switch_Status.switch_Value) {
        /*
        switch_Status.slider_Value = e.target.value;
        setSwitch_Status({ ...switch_Status, slider_Value: e.target.value });
        */
        //CustomLogger.DataLogger(slider_Value);
        updateState(switch_Status.switch_Value, e.target.value);
      } else {
        e.target.value = switch_Status.slider_Value;
      }
    } catch (ex) {
      CustomLogger.ErrorLogger(ex);
    }
  };
  const onSwitchValueChanged = (e) => {
    //switch_Status.switch_Value = !switch_Status.switch_Value;
    /*
    setSwitch_Status({
      ...switch_Status,
      switch_Value: !switch_Status.switch_Value,
    });
    */
    //CustomLogger.DataLogger(switch_Value);
    updateState(!switch_Status.switch_Value, switch_Status.slider_Value);
  };

  const onValueChanged = (_switchValue, _sliderValue) => {
    try {
      if (_switchValue) {
        onChangeValue({ pinValue: _sliderValue });
        setSwitch_Status(`On-${_sliderValue}`);
      } else {
        onChangeValue({ pinValue: 0 });
        setSwitch_Status(`Off`);
      }
    } catch (ex) {}
  };

  const updateState = (_switchValue, _sliderValue) => {
    try {
      onValueChanged(_switchValue, _sliderValue);
      setSwitch_Status({
        slider_Value: _sliderValue,
        switch_Value: _switchValue,
        switch_Text: `${
          _switchValue !== null &&
          _switchValue !== undefined &&
          _switchValue === true
            ? `On-${
                _sliderValue !== null && _sliderValue !== undefined
                  ? _sliderValue
                  : 0
              }`
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
          <input
            type="range"
            id={sliderId}
            min={sliderMin}
            max={sliderMax}
            value={switch_Status._sliderValue}
            className="slider"
            id="myRange"
            onChange={onSliderValueChanged}
          />
        </div>
      </div>
    </>
  );
};

const AnalogSwitch = Analog_Switch;
export default AnalogSwitch;
