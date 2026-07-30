// formData.util.ts

type FieldType = 'string' | 'number' | 'boolean';

type FieldTypeMap = {
  string: string;
  number: number;
  boolean: boolean;
};

type Schema = Record<string, FieldType>;

type ParsedFormData<S extends Schema> = {
  [K in keyof S]: FieldTypeMap[S[K]];
};

function parseValue<T extends FieldType>(
  raw: FormDataEntryValue | null,
  type: T,
): FieldTypeMap[T] {
  switch (type) {
    case 'number':
      return Number(raw ?? 0) as FieldTypeMap[T];
    case 'boolean':
      return (raw === 'true' || raw === 'on') as FieldTypeMap[T];
    case 'string':
    default:
      return (raw?.toString() ?? '') as FieldTypeMap[T];
  }
}

// Extrae un solo campo tipado
export function getFormValue<T extends FieldType>(
  formData: FormData,
  key: string,
  type: T,
): FieldTypeMap[T] {
  return parseValue(formData.get(key), type);
}

// Extrae varios campos a la vez, tipado por schema
export function parseFormData<S extends Schema>(
  formData: FormData,
  schema: S,
): ParsedFormData<S> {
  const result = {} as ParsedFormData<S>;
  for (const key in schema) {
    result[key] = parseValue(formData.get(key), schema[key]);
  }
  return result;
}