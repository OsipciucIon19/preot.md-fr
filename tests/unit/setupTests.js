
jest.mock("axios", () => ({
    default: {
        create: jest.fn()
    },
    __esModule: true,
    create: jest.fn()
}))