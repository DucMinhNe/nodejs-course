# Dates & Time

Built-in Date is clunky. Modern code uses Temporal (proposal) or date-fns / luxon.

## Key points

- months are 0-indexed (January = 0)
- Date stores milliseconds since epoch (UTC)
- toISOString() for portable serialization
- Intl.DateTimeFormat for localised display

## Examples

See `examples/` for runnable demos.

## Exercise

Format `new Date()` as `YYYY-MM-DD HH:mm:ss` without a library.
