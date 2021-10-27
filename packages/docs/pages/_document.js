import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(context) {
    const initialProps = await Document.getInitialProps(context);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
              (function() {
                var direction;

                try {
                  direction = localStorage.getItem('direction');
                } catch (err) {}


                function setDirection(newDirection) {
                  window.__direction = newDirection;
                  direction = newDirection;
                  document.documentElement.setAttribute('dir', newDirection);
                  window.__onDirectionChange(newDirection);

                  try {
                    localStorage.setItem('direction', newDirection);
                  } catch (err) {}
                }

                window.__onDirectionChange = function(newDirection) {};
                window.__setDirection = setDirection;

                setDirection(direction || 'ltr');
              })();
            `,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
