function isObject(v) { return v && typeof v === 'object' && !Array.isArray(v); }

function clone(v) {
  if (v === null || typeof v !== 'object') return v;
  if (Array.isArray(v)) return v.map(clone);
  const out = {};
  for (const k in v) {
    if (Object.prototype.hasOwnProperty.call(v, k)) out[k] = clone(v[k]);
  }
  return out;
}

function deepMerge(a, b) {
  // Wenn a kein Objekt ist, gib eine Kopie von b zurück (b hat Vorrang)
  if (!isObject(a)) return clone(b);
  if (!isObject(b)) return clone(b);

  const result = {};
  const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
  for (const k of keys) {
    if (k in b) {
      if (isObject(a[k]) && isObject(b[k])) result[k] = deepMerge(a[k], b[k]);
      else result[k] = clone(b[k]); // b überschreibt a (als Kopie)
    } else {
      result[k] = clone(a[k]);
    }
  }
  return result;
}

/* Beispiel */
const a = { user: { name: 'Ali', prefs: { theme: 'dark' } }, list: [1] };
const b = { user: { prefs: { theme: 'light', lang: 'tr' } }, list: [2] };
console.log(deepMerge(a, b));
// a