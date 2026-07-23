export type ActionResult<T = unknown> =
  | {
      success: true;
      data?: T;
      message?: string;
    }
  | {
      success: false;
      errors: Record<string, string[]>;
    };