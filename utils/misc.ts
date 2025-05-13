export function capitalizeStr(str: string): string {
    if (!str) { return '' };
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function spacesToDashes(str: string): string {
    if (!str) { return '' };
    return str.toLowerCase().replace(/\s+/g, '-');
}