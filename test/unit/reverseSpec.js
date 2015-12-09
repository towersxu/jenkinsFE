/**
 * Created by taox on 15-12-7.
 */
describe("A suite of basic functions", function() {
  it("reverse word",function(){
    expect("DCBA").toEqual(debug.reverse("ABCD"));
    expect("Conan").toEqual(debug.reverse("nanoC"));
  });
});