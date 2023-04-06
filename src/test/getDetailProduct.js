import chai from "./chai.js";
import { viteNodeApp } from "../app.js";

describe("GET /product", () => {
  const _id = "641e311432d8b9c37e372193";
  it("Should return status 200", (done) => {
    chai
      .request(viteNodeApp)
      .get(`/api/products/${_id}`)
      // .set(
      //   "Authorization",
      //   "Bearer aGsdYd1sdf2323safaage82J9gaUHFnsdfgsaa8dsFF8sgeag"
      // )
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an("object");
        res.body.should.have.property("message");
        done();
      });
  });
});
