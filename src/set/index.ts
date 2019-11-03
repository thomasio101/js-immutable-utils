export function add<T>(set: Set<T>, value: T): Set<T> {
  return new Set(set).add(value);
}

export function remove<T>(
  set: Set<T>,
  value: T
): { removed: boolean; set: Set<T> } {
  const newSet = new Set(set);

  return {
    removed: newSet.delete(value),
    set: newSet
  };
}
