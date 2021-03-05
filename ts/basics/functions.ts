function greeter(fn: (a: string) => void): void {
  fn("hello world");
}

function print(msg: string): void {
  console.log(msg);
}

greeter(print);

const fun: (s: string) => void = (s: string): void => {};

function longest<Type extends { length: number }>(a: Type, b: Type): Type {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}

const longerArray = longest([1, 2], [1, 2, 3]);

const longerString = longest("alice", "bob");
