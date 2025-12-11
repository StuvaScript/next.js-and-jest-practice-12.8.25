import { getCredentials } from "@/api/roles/Access";

describe("Access", () => {
  const testCases = [
    {
      testName: "populates admin data",
      input: {
        isAdmin: true,
      },
      expected: {
        name: expect.any(String),
        id: expect.any(Number),
        email: expect.any(String),
        techLead: expect.any(Boolean),
      },
    },

    {
      testName: "populates apprentice data",
      input: {
        isAdmin: false,
      },
      expected: {
        name: expect.any(String),
        id: expect.any(Number),
        email: expect.any(String),
        techLead: expect.any(Boolean),
        isApprentice: true,
      },
    },
  ];

  for (const testCase of testCases) {
    const { isAdmin } = testCase.input;
    const { expected, testName } = testCase;

    test(`${testName}`, () => {
      const actualReturnValue = getCredentials(isAdmin);

      expect(actualReturnValue).toStrictEqual(expected);
    });
  }
});
