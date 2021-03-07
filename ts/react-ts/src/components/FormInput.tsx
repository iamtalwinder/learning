import React, { useState, useEffect, useRef } from "react";
import styles from "./FormInput.module.css";
import Icon from "@mdi/react";
import { mdiAlphaXCircleOutline } from "@mdi/js";
import { mdiCheckCircleOutline } from "@mdi/js";

type Props = {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
  wrong?: boolean;
  correct?: boolean;
};

export default function FormInput({
  type: initialType,
  name,
  placeholder,
  value,
  onChange,
  required = false,
  wrong = false,
  correct = false,
}: Props) {
  const [type, setType] = useState<string>(initialType);
  const [text, setText] = useState<"Show" | "Hide">("Show");
  const [focus, setFocus] = useState<boolean>(false);
  const isMounted = useRef<boolean>(true);
  const container = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLInputElement>(null);

  const handleChange = () => {
    if (type === "password") {
      setType("text");
      setText("Hide");
    } else {
      setType("password");
      setText("Show");
    }
  };

  useEffect(() => {
    if (input.current) {
      input.current.addEventListener("focus", () => {
        if (container.current) {
          container.current.style.borderColor = "#262626";
          setFocus(true);
        }
      });

      input.current.addEventListener("blur", () => {
        if (container.current) {
          container.current.style.borderColor = "#cfccca";
          setFocus(false);
        }
      });
    }

    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <div className={styles.container} ref={container}>
      <input
        ref={input}
        className={styles.input}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
      <label className={styles.label}>{placeholder}</label>
      <div className={styles.box}>
        {!focus && wrong && (
          <Icon
            path={mdiAlphaXCircleOutline}
            size={1}
            vertical={true}
            color="red"
          />
        )}
        {correct && (
          <Icon
            path={mdiCheckCircleOutline}
            size={1}
            vertical={true}
            color="green"
          />
        )}
        {type === "password" && value !== "" && (
          <button
            className={styles.button}
            type="button"
            onClick={handleChange}
          >
            {text}
          </button>
        )}
      </div>
    </div>
  );
}
