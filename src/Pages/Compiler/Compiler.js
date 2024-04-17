import React, { useEffect, useState } from "react";
import "./Compiler.css";
import { Editor } from "@monaco-editor/react";
import HeaderPart from "./HeaderPart";
import { CODE_SNIPPETS } from "./Constants";
import Output from "./Output";

export default function Compiler() {
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState(CODE_SNIPPETS[language]);
  useEffect(() => {
    setCode(CODE_SNIPPETS[language]);
  }, [language]);
  const handleChange = (newCode) => {
    setCode(newCode);
  };
  console.log(code);
  return (
    <div className="compiler">
      <HeaderPart language={language} setLanguage={setLanguage} code={code} />
      <Editor
        height="60vh"
        theme="vs-dark"
        language={language}
        value={code}
        onChange={handleChange}
      />
      <hr style={{ margin: "3px 0" }} />
      <Output />
    </div>
  );
}
