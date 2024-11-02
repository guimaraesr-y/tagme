import { LocalStorageCache } from "@/utils/localStorage";

export const useCache = () => {
    const cache = new LocalStorageCache();

    return {
        setCache: (key: string, value: any) => {
            cache.save(key, value);
        },
        getCache: (key: string) => {
            return cache.get(key);
        },
    };
}
