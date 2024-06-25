// utility types
type User = { id: number; name: string; age: number };

type PartialUser = Partial<User>;
type JustName = Pick<User, 'name'>;
type WithoutAge = Omit<User, 'age'>;
type ById = Record<string, User>;

// generic constraint
function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const k of keys) out[k] = obj[k];
  return out;
}

const u: User = { id: 1, name: 'Minh', age: 30 };
const p = pick(u, ['name', 'age']); // typed as { name: string; age: number }

// conditional
type Awaited<T> = T extends Promise<infer U> ? U : T;
type X = Awaited<Promise<string>>; // string
