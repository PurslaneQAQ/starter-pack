// declaration.d.ts
declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}
// To use scss variables in js

declare module '*.svg' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const content: any;
  export default content;
}

declare module '*.png';
declare module '*.jpg';
