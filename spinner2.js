const spinner = ['\r|  ', '\r/  ', '\r-  ', '\r\\  ', '\r|  ', '\r/  ', '\r-  ', '\r\\  ', '\r|  '];
let delay = 100;

for (const x of spinner) {
  setTimeout(() => {
    process.stdout.write(x);
  }, delay);
  delay += 200;
}

