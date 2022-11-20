import { changeLocalStorage, createLocalStorage, getLocalStorage } from "./storage";

describe("localStorage", () => {

  const mockValue = {
    login: false,
  };

  it("Deve retornar do LocalStorage o objeto de chave dioBank", () => {
    const mockGetItem = jest.spyOn(Storage.prototype, "getItem");
    getLocalStorage();
    expect(mockGetItem).toHaveBeenCalledWith("dioBank");
  });
  it("Deve criar no LocalStorage um objeto de chave dioBank", () => {
    
    const mockSetItem = jest.spyOn(Storage.prototype, "setItem");
    createLocalStorage();
    expect(mockSetItem).toHaveBeenCalledWith(
      "dioBank",
      JSON.stringify(mockValue)
    );
  });
  it("Deve editar o objeto de chave dioBank no LocalStorage", () => {
    
    const mockSetItem = jest.spyOn(Storage.prototype, "setItem");
    changeLocalStorage(mockValue);
    expect(mockSetItem).toHaveBeenCalledWith(
      "dioBank",
      JSON.stringify(mockValue)
    );
  });
});
