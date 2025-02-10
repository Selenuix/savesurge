export function getAvatarFallback(
  firstname: string | null | undefined,
  lastname: string | null | undefined
): string {
  // Early return if both names are missing
  if (!firstname && !lastname) {
    return 'N/A';
  }

  // Both names are present
  return `${firstname!.charAt(0)}${lastname!.charAt(0)}`.toUpperCase();
}
