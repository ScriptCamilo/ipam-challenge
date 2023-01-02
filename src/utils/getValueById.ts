interface NameByIdTypes {
  id: number;
  nome: string;
}

export function getValueById(id: string | undefined, data: NameByIdTypes[]) {
  const value = data.find(({ id: ufId }) => id === String(ufId));
  return value;
}
