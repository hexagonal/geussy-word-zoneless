//** Load from local storage. */
export function load<T>(key: string): T | null {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
}

//** Save to local storage. */
export function save<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
}

//** Remove from local storage. */
export function remove(key: string): void {
    localStorage.removeItem(key);
}

//** Clear local storage. */
export function clear(): void {
    localStorage.clear();
}
