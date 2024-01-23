const path = require("path");
const fs = require("fs");
const {stdin, stdout} = process;
const writableStream = fs.createWriteStream(path.join(__dirname, "text.txt"), "utf-8");

stdout.write("Hello! Enter text\n");
stdin.on("data", (data) => {
  const dataStr = data.toString();
  
  if (dataStr.trim().toLowerCase() === "exit") {
    process.on("exit", () => stdout.write("Bye!")).exit();
  }

  fs.appendFile(
    path.join(__dirname, "text.txt"), dataStr, () => {
      writableStream.write(dataStr);
    }
  );
});