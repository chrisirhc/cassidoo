import { assertEquals } from "@std/assert";
import { newYearsDay } from "./main.ts";

Deno.test(function tests() {
  assertEquals(newYearsDay(2025), "Wednesday");
  assertEquals(newYearsDay(2024), "Monday");
});
