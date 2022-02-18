import configurations from "../config/config";
import connectService from "./connector";
describe("configurations", () => {
  test("should be defined", () => {
    expect(configurations.base_url).toBeDefined();
  });
  test("should contain app configuration", () => {
    expect(configurations.app).toBeDefined();
  });
  test("should app contain posts", () => {
    expect(configurations.app.posts).toBeDefined();
  });
  test("should app contain comments", () => {
    expect(configurations.app.comments).toBeDefined();
  });
  test("should connect using base_url and app posts", () => {
    expect(connectService().connectTo(configurations.app.posts)).toBeDefined();
  });
});
