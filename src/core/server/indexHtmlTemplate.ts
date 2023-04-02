export const indexHtmlTemplate = (content: string, token?: string) => {
  const jsPath = '/static/client.js';

  const ReactRootElementId = 'react-root';

  const ModalRootElementId = 'modal-root';

  const title = 'Mirror Reddit';

  const head = token
    ? `<head>
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>${title}</title>
          <script src="${jsPath}"></script>
          <script>
            /* reddit */
            window.__token__ = '${token}'
          </script>
        </head>`
    : `<head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${title}</title>
        <script src="${jsPath}"></script>
      </head>`;

  const body = `<body>
                  <div id="${ReactRootElementId}">${content}</div>
                  <div id="${ModalRootElementId}"></div>
                </body>`;

  return `<!DOCTYPE html>
            <html lang="ru">
              ${head}
              ${body}
            </html>`;
};
