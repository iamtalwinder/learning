import express from 'express';

const app: express.Application = express();
const port = 3000;
const sayHelloTo = (name: string): string => `Hello ${name}!`;
app.get('/', (req: express.Request, res: express.Response) => res.send(sayHelloTo('World!')));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
