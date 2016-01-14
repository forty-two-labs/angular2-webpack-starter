// TODO support log level debug/error/warn
export function log(target: Object, key: string, descriptor: TypedPropertyDescriptor<any>) {
  let originalMethod = descriptor.value;

  descriptor.value = function(...args: any[]) {
    let a = args.map(a => JSON.stringify(a)).join();
    let result = originalMethod.apply(this, args);
    let r = JSON.stringify(result);
    console.debug(`Invoking: ${key}(${a}) Returning: ${r}`);
    return result;
  };

  return descriptor;
}
