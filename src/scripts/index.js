import 'regenerator-runtime';
import '../styles/main.css';
import './components/navbar/navbar';
import './components/jumbotron/jumbotron';
import './components/jumbotron/jumbotron-favorite';
import './components/hero/hero';
import App from './views/app';
import swRegister from './utils/swRegister';
import renderNotifikasi from './utils/notification-helper'; 
import 'lazysizes';

window.addEventListener('load', () => {
  swRegister();
  renderNotifikasi(); 
  const app = new App();
  app.renderPage();
});

window.addEventListener('hashchange', () => {
  const app = new App();
  app.renderPage();
});

function loadScript(url, integrity, crossorigin) {
  const script = document.createElement('script');
  script.src = url;
  script.integrity = integrity;
  script.crossOrigin = crossorigin;
  document.head.appendChild(script);
}

function loadStylesheet(url, integrity, crossorigin) {
  const link = document.createElement('link');
  link.href = url;
  link.rel = 'stylesheet';
  link.integrity = integrity;
  link.crossOrigin = crossorigin;
  document.head.appendChild(link);
}
loadStylesheet(
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css'
);
loadStylesheet(
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
  'sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH',
  'anonymous'
);
loadStylesheet(
  'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css'
);
loadScript(
  'https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js',
  'sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r',
  'anonymous'
);
loadScript(
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js',
  'sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy',
  'anonymous'
);
