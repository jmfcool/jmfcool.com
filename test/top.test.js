import { expect } from "chai";
import { top } from "../js/top.js";

describe("scroll", () => {
    it("should be a function", () => {
        expect(top.scroll).to.be.a("function")
    });
});

describe("hide", () => {
    it("should be a function", () => {
        expect(top.hide).to.be.a("function")
    });
});

describe("load", () => {
    it("should be a function", () => {
        expect(top.load).to.be.a("function")
    });
});

describe("init", () => {
    it("should be a function", () => {
        expect(top.init).to.be.a("function")
    });
});
