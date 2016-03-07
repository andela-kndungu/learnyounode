total = 0;

// First two arguments are node and the program path
for (var i = 2; i < process.argv.length; i++) {

  num = Number(process.argv[i]);

  total += num;
}

console.log(total);
