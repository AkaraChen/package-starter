// @vitest-environment node
import { describe, expect, test } from "vitest";
import { Animal } from "./index";

describe("index module", () => {
	test("1 equal 1", () => {
		const date = new Date();
		expect(new Animal(date).birth).toBe(date);
	});
});
