import { describe, expect, it } from "vitest";
import { CheckAuth, Login, Register } from "../src/services/api";

describe("Auth", () => {
  it("Test Register", async () => {
    const data = await Register({
      name: "John Doe",
      email: "john@example.com",
      password: "password123",
      confirm_password: "password123",
    });

    console.log(data);
  });

  it("Test Login", async () => {
    const data = await Login({
      email: "john@example.com",
      password: "password123",
    });

    console.log(data);
  });

  it("Test Check Auth", async () => {
    const data_login = await Login({
      email: "john@example.com",
      password: "password123",
    });

    const data = await CheckAuth(data_login.token);

    console.log(data);
  });
});
