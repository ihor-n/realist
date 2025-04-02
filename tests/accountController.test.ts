import request from "supertest";
import app from "../src/index";

describe("Account Controller", () => {
  it("should create an account", async () => {
    const res = await request(app)
      .post("/accounts/open")
      .send({ userId: 1, accountType: "investment" });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("id");
  });
});