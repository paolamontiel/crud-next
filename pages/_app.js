import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <footer className="footer">
        2023. Crud con Next. Actividad Integradora 3
      </footer>
    </>
  );
}

export default MyApp;
