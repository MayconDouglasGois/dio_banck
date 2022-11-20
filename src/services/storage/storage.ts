interface IDioBank {
  login: boolean;
}
const dioBank: IDioBank = {
  login: false,
};

export function getLocalStorage(): string | null {
  return localStorage.getItem("dioBank");
}
export function createLocalStorage(): void {
  return localStorage.setItem("dioBank", JSON.stringify(dioBank));
}
export function changeLocalStorage(value: IDioBank): void {
  return localStorage.setItem("dioBank", JSON.stringify(value));
}
