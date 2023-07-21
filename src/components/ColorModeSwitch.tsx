import { useState, useEffect } from "react";
import classes from "./ColorModeSwitch.module.css";
const ColorModeSwitch = () => {
  const [isChecked, setIsChecked] = useState(true);

  const toggleSwitch = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    if (isChecked) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isChecked]);
  return (
    <div className="flex items-center p-4">
      <label className={classes.switchToggle}>
        <input type="checkbox" checked={isChecked} onChange={toggleSwitch} />
        <span className={classes.slider}></span>
      </label>
      <h3 className=" ml-2">Dark Mode</h3>
    </div>
  );
};

export default ColorModeSwitch;
