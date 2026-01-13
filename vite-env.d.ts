declare global {
  interface Window {
    dataLayer?: Object[];
  }
}

declare module "*?format=webp" {
  const value: string;

  export default value;
}
