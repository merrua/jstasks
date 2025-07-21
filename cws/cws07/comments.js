// Task Description
// Your task is to create a function that takes two parameters:
//     text: A string containing the text to be wrapped in comments.
//     style: A string indicating the style of comments to use. It can be one of the following:
//         "Bash"
//         "Bash Multiline"
//         "JavaDoc"
//         "Python"
//         "Python Multiline"
//         "Javascript"
//         "Javascript Multiline"
//         "SGML"
//         "SQL"
// The function should wrap the given text in the appropriate comment style and return the result.

function comment(text, style) {
  switch (style.toLowerCase()) {
    case "bash":
      let b = text.split("\n");
      b.forEach((e, i, arr) => {
        b[i] = `# ${e}`;
      });
      return b.join("\n");
    case "bash multiline":
      let t3 = text.split("\n");
      t3.unshift(`: "`);
      t3.push(`"`);
      return t3.join("\n");
      break;
    case "javadoc":
      let jd = text.split("\n");
      jd.forEach((e, i, arr) => {
        jd[i] = `* ${e}`;
      });
      jd.unshift(`/**`);
      jd.push(`*/`);
      return jd.join("\n");
    case "python":
      let p = text.split("\n");
      p.forEach((e, i, arr) => {
        p[i] = `# ${e}`;
      });
      return p.join("\n");
    case "python multiline":
      let t1 = text.split("\n");
      t1.unshift(`"""`);
      t1.push(`"""`);
      return t1.join("\n");
      break;
    case "javascript":
      let j = text.split("\n");
      j.forEach((e, i, arr) => {
        j[i] = `// ${e}`;
      });
      return j.join("\n");
    case "javascript multiline":
      let t2 = text.split("\n");
      t2.unshift(`/*`);
      t2.push(`*/`);
      return t2.join("\n");
      break;
    case "sgml":
      let t = text.split("\n");
      t.forEach((e, i, arr) => {
        t[i] = `<!-- ${e} -->`;
        console.log(e);
      });
      return t.join("\n");
    case "sql":
      let s = text.split("\n");
      s.forEach((e, i, arr) => {
        s[i] = `-- ${e}`;
      });
      return s.join("\n");
    default:
      console.log(`invalid case ${text}.`);
  }
}

console.log(comment("\nHello\nWorld!\n", "javascript multiline"));
console.log(comment("Hello\nWorld!", "sgml"));
console.log(comment("Hello \nWorld! \n", "sqml"));
console.log(comment("Hello \nWorld! \n", "sql"));
