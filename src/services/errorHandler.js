/**
 * Extracts a human-readable error message from an Axios error object.
 * Falls back to a generic message if no specific message is found.
 */
export function getErrorMessage(error) {
  if (error?.response?.data?.message) {
    return error.response.data.message;
  }
  if (error?.response?.data?.data && typeof error.response.data.data === 'object') {
    // Validation error map { field: message }
    const firstError = Object.values(error.response.data.data)[0];
    if (firstError) return firstError;
  }
  if (error?.message === 'Network Error') {
    return 'Unable to reach the server. Please check your connection and try again.';
  }
  if (error?.code === 'ECONNABORTED') {
    return 'The request timed out. Please try again.';
  }
  return 'Something went wrong. Please try again later.';
}