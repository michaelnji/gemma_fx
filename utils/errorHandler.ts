export const getHumanFriendlyErrorMessage = (error: string): string => {
    // Common error patterns and their friendly messages
    const errorPatterns: { [key: string]: string } = {
        // Network errors
        'getaddrinfo': 'Unable to connect to the server. Please check your internet connection and try again',
        'timeout': 'The request took too long to complete. Please try again.',
        'failed to fetch': 'Unable to reach the server. Please check your internet connection and try again',
        'fetch failed': 'Unable to reach the server. Please check your internet connection and try again',
        'fetch': 'Unable to reach the server. Please check your internet connection and try again',


        // Validation errors
        'invalid input': 'Please check your input and try again.',
        'required field': 'Please fill in all required fields.',
        'invalid email': 'Please enter a valid email address.',
        'invalid password': 'Password must meet the minimum requirements.',


        // Server errors
        'internal server error': 'An unexpected error occurred. Please try again later.',
        'service unavailable': 'The service is temporarily unavailable.',
        'bad gateway': 'Unable to connect to the server. Please try again later.',
    };

    // Convert error to lowercase for case-insensitive matching
    const lowerError = error.toLowerCase();

    // Check for matching error patterns
    for (const [pattern, message] of Object.entries(errorPatterns)) {
        if (lowerError.includes(pattern)) {
            return message;
        }
    }

    // Default message for unknown errors
    return 'An unexpected error occurred. Please try again later.';
};
