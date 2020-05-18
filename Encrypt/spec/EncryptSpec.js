describe("Encrypt", () => {
  it("should return 72 when passed H", () => {
    const encrypt = new Encrypt();
    expect(encrypt.encryptThis("H")).toEqual("72");
  });

  it("should return 72olle when passed Hello", () => {
    const encrpyt = new Encrypt();
    expect(encrpyt.encryptThis("Hello")).toEqual("72olle");
  });

  it("should return 103doo when passed good", () => {
    const encrypt = new Encrypt();
    expect(encrypt.encryptThis("good")).toEqual("103doo");
  });
});
