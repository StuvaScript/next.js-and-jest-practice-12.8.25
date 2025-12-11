import { getCredentials } from "@/api/roles/Access";

describe("Access", () => {
  test("populates admin data", () => {
    const isAdmin = true;
    const expectedObjectShape = {
      name: expect.any(String),
      id: expect.any(Number),
      email: expect.any(String),
      techLead: expect.any(Boolean),
    };

    const actualReturnValue = getCredentials(isAdmin);

    expect(actualReturnValue).toStrictEqual(expectedObjectShape);
  });
});
