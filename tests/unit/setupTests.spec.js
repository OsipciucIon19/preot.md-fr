export default function () {
  jest.mock("axios", () =>  ({
    crete: jest.fn()
  }))
}