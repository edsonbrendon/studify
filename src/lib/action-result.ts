import { ActionResult } from "@/types/action-result";

export function success<T>(
  data?: T,
  message?: string
): ActionResult<T> {
  return {
    success: true,
    data,
    message,
  };
}

export function failure(
  message?: string,
  errors?: Record<string, string[]>
): ActionResult {
  return {
    success: false,
    message,
    errors,
  };
}