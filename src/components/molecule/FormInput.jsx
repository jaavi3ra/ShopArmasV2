import { Texto } from "../atomic/Texto";
import { Input } from "../atomic/Input";
import "../../styles/molecule/FormInput.css";

export function FormInput({ label, id, type = "text", placeholder, value, onChange,error
}) {
  return (
    <div className="input-group">
      <Texto id={id} variant="label" className="form-label">
        {label}
      </Texto>

      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
        {error && (
        <span className="input-error">
          {error}
        </span>
      )}
    </div>
  );
}