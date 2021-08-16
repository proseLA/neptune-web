export default function hightlight(value, query) {
  if (value && query) {
    const highlightStart = value.toUpperCase().indexOf(query.trim().toUpperCase());
    const highlightEnd = highlightStart + query.trim().length;
    if (highlightStart !== -1) {
      return (
        <>
          {value.slice(0, Math.max(0, highlightStart))}
          <strong>{value.slice(highlightStart, highlightEnd)}</strong>
          {value.slice(Math.max(0, highlightEnd))}
        </>
      );
    }
  }
  return value;
}
