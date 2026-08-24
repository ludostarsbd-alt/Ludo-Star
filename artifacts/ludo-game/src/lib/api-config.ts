/**
 * API origin used by the bundled Capacitor application.
 *
 * Web deployments can leave VITE_API_ORIGIN empty and use same-origin `/api`.
 * Native builds should provide the HTTPS origin of the Express server.
 */
const configuredOrigin = (import.meta.env.VITE_API_ORIGIN ?? '').trim();

export const API_ORIGIN = configuredOrigin.replace(/\/$/, '');

export function apiUrl(path: string): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${API_ORIGIN}${normalizedPath}`;
}
