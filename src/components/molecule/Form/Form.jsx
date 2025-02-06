import React from "react";
import Input from "../../atom/Input/Input";
import Button from "../../atom/Button/Button";
import AddIcon from "../../atom/AddIcon/AddIcon"


export default function Form({className, placeholder, value, onChange, onClick}) {

  
  return (
    <div className={className}>
      <Input placeholder={placeholder} value={value} onChange={onChange} />
      <Button onClick={onClick} Icon={AddIcon} />
    </div>
  );
}
