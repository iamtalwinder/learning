//Basic Interface

console.log("\n****Basic Interface****\n");

interface LabelValue {
  label: string;
}

function printLabel(obj: LabelValue): void {
  console.log(obj.label);
}

printLabel({ label: "hello" });

//Optional Property

console.log("\n****Optional Property****\n");

interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };

  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }

  return newSquare;
}

console.log(createSquare({}));
console.log(createSquare({ color: "red", width: 20 }));

//Function Types

console.log("\n****Function Types****\n");

interface SearchFunc {
  (source: string, subString: string): boolean;
}

let search: SearchFunc = function (source, subString) {
  let result = source.search(subString);
  return result > -1;
};

console.log(search("talwinder", "win"));
