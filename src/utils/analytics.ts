declare global {
  interface Window {
    clarity?: (command: string, ...args: string[]) => void;
  }
}

export function trackClarityEvent(eventName: string): void {
  try {
    if (typeof window !== 'undefined' && typeof window.clarity === 'function') {
      window.clarity('event', eventName);
    }
  } catch {
    // Ignore analytics errors to never block navigation
  }
}

export function setClarityTag(key: string, value: string): void {
  try {
    if (typeof window !== 'undefined' && typeof window.clarity === 'function') {
      window.clarity('set', key, value);
    }
  } catch {
    // Ignore analytics errors
  }
}
