export default abstract class Middleware {
  next: Middleware | null = null;

  linkWith(next: Middleware): Middleware {
    this.next = next;
    return next;
  }

  abstract handler(email: string, password: string): boolean;

  protected checkNext(email: string, password: string): boolean {
    if (!this.next) return true;
    return this.next.handler(email, password);
  }
}
