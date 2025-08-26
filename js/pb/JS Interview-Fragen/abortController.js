// javascript
function fetchWithTimeout(url, options = {}) {
  const { timeout = 5000, ...init } = options; // original options nicht mutieren
  const controller = new AbortController();
  const finalInit = { ...init, signal: controller.signal };

  // Wenn caller bereits ein Signal übergab, verknüpfen wir es mit unserem Controller
  const externalSignal = init.signal;
  let externalListener;
  if (externalSignal) {
    if (externalSignal.aborted) {
      controller.abort();
    } else {
      externalListener = () => controller.abort();
      externalSignal.addEventListener('abort', externalListener);
    }
  }

  const timer = setTimeout(() => controller.abort(), timeout);

  return fetch(url, finalInit)
    .finally(() => {
      clearTimeout(timer);
      if (externalSignal && externalListener) {
        externalSignal.removeEventListener('abort', externalListener);
      }
    });
}