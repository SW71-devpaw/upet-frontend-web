export function formatDateToYYYYMMDD(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // +1 porque los meses son indexados desde 0
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}