export const LANGUAGE_VERSIONS = [
  { language: "javascript", lang_Title:"Javascript",version: "18.15.0" },
  // { language: "typescript", version: "5.0.3" },
  { language: "python2", lang_Title:"Python2",version: "2.7.18" },
  { language: "python", lang_Title:"Python3",version: "3.10.0" },
  { language: "cpp",lang_Title:"C++", version: "10.2.0" },
  { language: "java", lang_Title:"Java",version: "15.0.2" },
  { language: "csharp", lang_Title:"C#",version: "6.12.0" },
  { language: "php", lang_Title:"php",version: "8.2.3" },
];

export const CODE_SNIPPETS = {
  javascript: `function greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("Alex");\n`,
  // typescript: `\ntype Params = {\n\tname: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log("Hello, " + data.name + "!");\n}\n\ngreet({ name: "Alex" });\n`,
  python: `def greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("Alex")\n`,
  python2: `def greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("Alex")\n`,
  java: `public class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}\n`,
  csharp:
    'using System;\n\nnamespace HelloWorld\n{\n\tclass Hello { \n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Hello World in C#");\n\t\t}\n\t}\n}\n',
  php: "<?php\n\n$name = 'Alex';\necho $name;\n",
  cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello, Alex!" << endl;\n    return 0;\n}\n`,
};
