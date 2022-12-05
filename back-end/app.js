const fs = require("fs");

const userName = "Prit";

fs.writeFile("myFile.txt", "Helloooooooooo :" + userName, (err, data) => {
  if (err) {
    console.log("something went wrong");
    return;
  }
  console.log("wrote successfully", data);
});

console.log(userName);
