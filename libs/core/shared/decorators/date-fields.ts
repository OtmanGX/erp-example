export function DateFields<T extends { new (...args: any[]): {} }>(target: T)  {
  return class extends target {
    createdAt:Date;
    createdBy:string;
    updatedAt:Date;
    updatedBy:string;
  }
}
