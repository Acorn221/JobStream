import { createServer } from 'app';
import { port } from 'config/environment';

const main = async () => {
  console.time('server-start');
  const { app, yoga } = createServer();
  app.listen(port, () => {
    console.log(`Running a GraphQL API server at http://localhost:${port}${yoga.graphqlEndpoint}`);
  });
  console.timeEnd('server-start');
};

process.on('unhandledRejection', (reason: Error | any) => {
  console.log(`Unhandled Rejection: ${reason.message || reason}`);

  throw new Error(reason.message || reason);
});

main();
