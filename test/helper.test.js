import { expect } from "chai";
import { helper } from "../js/helper.js";

describe("random", () => {
    it("should be a function", () => {
        expect(helper.random).to.be.instanceOf(Function);
    });
    it("return random number", () => {
        const random = helper.random(26);
        expect(random).to.be.a("number");
    });
});

describe("capitalize", () => {
    it("should be a function", () => {
        expect(helper.capitalize).to.be.instanceOf(Function);
    });
    it("return capital letter", () => {
        const capitalize = helper.capitalize("apple");
        expect(capitalize).to.equal("Apple");
    });
});
