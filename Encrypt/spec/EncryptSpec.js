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

  it("should return 115rlvei when passed silver", () => {
    const encrypt = new Encrypt();
    expect(encrypt.encryptThis("silver")).toEqual("115rlvei");
  });

  it("should encrypt a string containng two words", () => {
    const encrpyt = new Encrypt();
    expect(encrpyt.encryptThis("Hello world")).toEqual("72olle 119drlo");
  });

  it("should encrpyt any", () => {
    const encrypt = new Encrypt();
    expect(encrypt.encryptThis("Hello strange world")).toEqual(
      "72olle 115erangt 119drlo"
    );
  });
});
