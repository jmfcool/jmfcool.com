import { expect } from "chai";
import fetch from "node-fetch";
import { forms } from "../js/forms.js";

beforeEach(async () => {
    global.fetch = fetch;
});

describe("contact", () => {
    it("should be a function", () => {
        expect(forms.contact).to.be.instanceOf(Function)
    });
    it("should send form", () => {
        const form = {
            site: { value: "jmfcool.com - contact (test)" },
            name: { value: "test" },
            body: { value: "test" },
            subject: { value: "test" },
            address: { value: "test" }
        };
        expect(forms.contact({ _fetch: fetch, form: form })).to.be.true
    });
});

describe("newsletter", () => {
    it("should be a function", () => {
        expect(forms.newsletter).to.be.instanceOf(Function)
    });
    it("should send form", () => {
        const form = {
            site: { value: "jmfcool.com - newsletter (test)" },
            address: { value: "test" }
        };
        expect(forms.newsletter({ _fetch: fetch, form: form })).to.be.true
    });
});
