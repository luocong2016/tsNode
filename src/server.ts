import app from './app';
import serverConfig from './config/serverConfig';

app.listen(
  serverConfig.port,
  () => {
    console.log(`Express server listening on port ${serverConfig.port}`);
  }
);