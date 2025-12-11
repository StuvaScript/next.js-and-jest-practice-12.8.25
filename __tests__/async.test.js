import { fetchData, fetchPromise, fetchUser, fetchReject } from "@/lib/async";

describe("async", () => {
  //? ``** Using the "done" keyword to signify to Jest that the test is complete
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

  //? ``** Using the "resolves" and "rejects" keywords to catch the data or an error
  test("the data is chocolate", () => {
    //* ``** Act and Assert. No Arrange**``
    expect(fetchPromise()).resolves.toBe("chocolate");
  });

  test("the fetch fails with an error", () => {
    expect(fetchReject()).rejects.toThrow("error");
  });

  //? ``** Using "async/await" to handle asynchronous data
  test("the user is Billy", async () => {
    const user = await fetchUser();
    expect(user).toBe("Billy");
  });

  //? ``** Mock functions
  test("mock implementation of a basic function", () => {
    const mock = jest.fn((x) => 42 + x);
    expect(mock(1)).toBe(43);
    expect(mock).toHaveBeenCalledWith(1);
  });

  test("spying on a method of an object", () => {
    const video = {
      play() {
        return true;
      },
    };
    //? ``** spyOn() just tracks if a function has been called
    const spy = jest.spyOn(video, "play");
    video.play();

    expect(spy).toHaveBeenCalled();
    //? ``** When using fn() or spyOn(), it changes the function called on into a mock function which allows you to track it. Using mockRestore() reverts the function back into it's original implementation
    spy.mockRestore();
  });
});
