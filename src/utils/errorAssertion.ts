export function errorAssertion(value: unknown): string {
    if (value instanceof Error) return value.message;
    if (typeof value === "string") return value;
    return "Login failed";
}