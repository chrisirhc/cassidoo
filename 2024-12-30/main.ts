const DATE_FORMAT = new Intl.DateTimeFormat('en-US', {
  weekday: 'long',
});
export function newYearsDay(year: number): string {
  const date = Date.UTC(year, 0, 1);
  return DATE_FORMAT.formatToParts(date)[0].value;
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("newYearsDay(2025)", newYearsDay(2025));
}
