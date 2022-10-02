export {};

declare global {
  interface Window {
    fletch: any;
    martian: any;
    aptos: any; // 👈️ turn off type checking
  }
}
