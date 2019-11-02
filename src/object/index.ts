export function set<T extends object, K extends keyof T>(
  object: T,
  key: K,
  value: T[K]
): T {
  return {
    ...object,
    [key]: value
  };
}

export function remove<T extends object, K extends keyof T>(
  object: T,
  key: K
): Omit<T, K> {
  const { [key]: value, ...result } = object;

  return result;
}
