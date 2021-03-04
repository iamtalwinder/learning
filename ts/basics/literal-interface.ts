function handleRequest(url: string, method: "GET" | "POST"): void {}

const req = { url: "https://example.com", method: "GET" };
handleRequest(req.url, req.method as "GET");

function handleInt(int: 1 | 2) {}

const int = { int: 2 };
handleInt(int.int as 1);
