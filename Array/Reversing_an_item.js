//input:i am arnob
// output:bonra ma i
function reverse(str) {
  if (!str || str < 2 || typeof str !== "string") {
    console.log("give the proper string");
  }

  const totalItem = str.length - 1;
  const backWard = [];
  for (let i = totalItem; i >= 0; i--) {
    backWard.push(str[i]);
  }
  return backWard.join("");
}

// using built i function

function Reverse(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

// using arrow function
reverseIt = str =>
  str
    .split("")
    .reverse()
    .join("");

const reverse1 = Reverse("i am arnob");
console.log(reverse1);
