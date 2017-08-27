const allowedErrors = [];
let consoleError;

beforeAll(() => {
    consoleError = console.error;

    console.error = error => {
        if (!allowedErrors.includes(error))
            consoleError(error);
    };
});

afterAll(() => {
   console.error = consoleError;
});
