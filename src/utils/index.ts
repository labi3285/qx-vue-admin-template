
export function log(msg: any): void {
  if (process.env.NODE_ENV === "development") {
    console.log(msg);
  }
}
