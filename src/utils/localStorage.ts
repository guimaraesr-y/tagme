export class LocalStorageCache {
  private prefix: string;

  constructor(prefix: string = 'default') {
    this.prefix = prefix;
  }

  save(key: string, data: any) {
    localStorage.setItem(`${this.prefix}.${key}`, JSON.stringify(data));
  }

  get<T>(key: string): T | null {
    const cached = localStorage.getItem(`${this.prefix}.${key}`);
    return cached ? JSON.parse(cached) : null;
  }
}
