import React from 'react';
import express from 'express';

import ReactDOMServer from 'react-dom/server';
import axios from 'axios';
import { StaticRouter } from 'react-router-dom/server';

import { App } from '../App';
import { indexHtmlTemplate } from './indexHtmlTemplate';

const app = express();

const staticPath = './dist/client';

app.use('/static', express.static(staticPath));

//* reddit start
app.get('/auth', (req, res) => {
  const { code } = req.query;

  const url = 'https://www.reddit.com/api/v1/access_token';

  let redirectUri = '';

  try {
    if (process.env.REDIRECT_URI) {
      redirectUri = process.env.REDIRECT_URI; // 'http://localhost:3000/auth';
    }
  } catch {
    throw new Error('Error: redirectUri is undefined');
  }

  const data = `grant_type=authorization_code&code=${code}&redirect_uri=${redirectUri}`;

  let username = '';

  try {
    if (process.env.CLIENT_ID) {
      username = process.env.CLIENT_ID;
    }
  } catch {
    throw new Error('Error: username is undefined');
  }

  const secret = 'VSz3xTotPI0NPRtQXJBs63VOhTqK0g';

  const config = {
    auth: { username, password: secret },
    headers: { 'Content-type': 'application/x-www-form-urlencoded' },
  };

  axios
    .post(url, data, config)
    .then((axiosResponse) => {
      const token = axiosResponse.data.access_token as string;

      const content = getContent(req.url);

      res.send(indexHtmlTemplate(content, token));
    })
    // eslint-disable-next-line no-console
    .catch(console.error);
});

app.get('*', (req, res) => {
  const content = getContent(req.url);

  res.send(indexHtmlTemplate(content));
});

//* reddit finish

const PORT = 3000;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`[server.tsx] >> Server started on http://localhost:${PORT}`);
});

function getContent(url: string) {
  return ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
}
