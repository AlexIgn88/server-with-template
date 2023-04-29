import { createServer } from 'node:http';
import { compileFile } from 'pug';

const
  posts = await ((await fetch('https://jsonplaceholder.typicode.com/posts')).json()),
  fn = compileFile('./pug/index.pug'),
  port = 5000,
  server = createServer((request, response) => {
    console.log((new Date()).toLocaleTimeString(), request.method, request.url, 'HTTP/' + request.httpVersion);
    response.end(fn({ posts }));
  });

server.listen(port, () => console.log(`The server started at ${(new Date()).toLocaleTimeString()} on http://localhost:${port}`));
