import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      // We generate a QR Code
      message: "Make a QR Code = ",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    let qr1 = qr.image(url);
    qr1.pipe(fs.createWriteStream("qr.png"));
  });
