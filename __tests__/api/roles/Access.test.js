import Access from "@/api/roles/Access";

describe("Access", () => {
  test("populates admin data", () => {
    const isAdmin = true;
    const expectedObject = {
      name: "Stu",
      id: 123,
      email: "stu@codethedream.org",
      isAdmin: true,
    };

    const actualReturnValue = getCredentials(isAdmin);

    expect(actualReturnValue).toEqual(expectedObject);
  });
});
