import { useState } from "react";
import { Texto } from "../atomic/Texto";
import { Input } from "../atomic/Input";
import { Icono } from "../atomic/Icono";
import "../../styles/molecule/PasswordInput.css";

export function PasswordInput({ label, id, placeholder, value, onChange,error
}) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="input-group">
      <Texto id={id} variant="label" className="form-label">
        {label}
      </Texto>

      <div className="password-box">
        <Input
          id={id}
          type={visible ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />

        <button
          type="button" className="show-password"
          onClick={() => setVisible(!visible)}>
          <Icono> 👁 </Icono>
        </button>
        
      </div>
         {error && (
        <span className="input-error">
          {error}
        </span>)}
      
    </div>
  );
}