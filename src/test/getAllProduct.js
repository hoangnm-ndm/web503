import chai from "./chai.js";
import { viteNodeApp } from "../app.js";

describe("GET /products", () => {
  it("Should return status 200", (done) => {
    chai
      .request(viteNodeApp)
      .get(`/api/products`)
      .set("Authorization", "Bearer asdfghjk")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an("object");
        res.body.should.have.property("message");
        done();
      });
  });
});
