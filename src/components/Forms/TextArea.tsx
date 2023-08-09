import React, { useState, useEffect, useRef } from "react";
import "../../styles/components/TextArea.css";

export interface TextAreaProps {
  style?: string;
  text?: string;
  placeholder?: string;
  disabled?: boolean;
  label?: string;
  name?: string;
  addClass?: string;
  values?: string | number;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  errors?: string | Array<string> | any;
  id?: string;
  size?: "default" | "small" | "medium" | "large";
  rows?: number | undefined;
  fixedSize?: boolean;
  AutoGrow?: boolean;
  helperText?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea = ({
  label,
  placeholder,
  disabled,
  addClass,
  name,
  errors,
  onBlur,
  values,
  size,
  helperText,
  rows = 1,
  fixedSize,
  onChange,
  AutoGrow,
}: TextAreaProps) => {
  const tabIndex = 0;

  //  Auto Growing Textarea Start //
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [textAreaValue, setTextAreaValue] = useState<String>();

  useEffect(() => {
    if (textareaRef && textareaRef.current && AutoGrow) {
      textareaRef.current.style.height = `${1 * rows}px`;
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + 1 + "px";
      console.log("scrollHeight", scrollHeight);
    }
  }, [textAreaValue]);

  const handleChange = (event: any) => {
    onChange(event);
    if (AutoGrow) {
      setTextAreaValue(event.target.value);
    }
  };
  //  Auto Growing Textarea End //
  return (
    <div className="textarea-wrap">
      <div className="input-group">
        {label && <label>{label}</label>}
        <textarea
          tabIndex={tabIndex}
          placeholder={placeholder}
          onChange={handleChange}
          disabled={disabled}
          name={name}
          className={addClass}
          onBlur={onBlur}
          value={values}
          rows={rows}
          ref={textareaRef}
        />
      </div>
    </div>
  );
};

export default React.memo(TextArea);
