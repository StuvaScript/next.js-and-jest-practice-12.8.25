import { fetchData } from "@/lib/async";

test("the data is peanut butter", (done) => {
  //* ``** Arrange **``
  function callback(data) {
    try {
      //* ``** Assert **``
      expect(data).toBe("peanut butter");
      done();
    } catch (error) {
      done(error);
    }
  }

  //* ``** Act **``
  fetchData(callback);
});
