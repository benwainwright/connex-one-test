import { renderHook } from "@testing-library/react-hooks";
import { jest } from "@jest/globals";
import nock from "nock";
import { useRequest } from "./use-request";

beforeEach(() => {
  jest.resetAllMocks();
});

afterEach(() => {
  jest.useRealTimers();
  nock.cleanAll();
});

describe("useRequest", () => {
  it("returns the data from the api", async () => {
    nock(`http://api.fake.com`).get(`/path`).reply(
      200,
      {
        response: "some-string",
      },
      {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      }
    );

    const { result, waitForNextUpdate } = renderHook(() =>
      useRequest(`http://api.fake.com/path`, 30)
    );

    const wait = waitForNextUpdate();
    jest.advanceTimersByTime(1);
    await wait;

    expect(!result.current.loading && result.current.data).toEqual({
      response: "some-string",
    });
  });

  it("starts off with loading as true", () => {
    nock(`http://api.fake.com`).get(`/path`).reply(
      200,
      {
        response: "some-string",
      },
      {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      }
    );

    const { result } = renderHook(() =>
      useRequest(`http://api.fake.com/path`, 30)
    );

    expect(result.current.loading).toEqual(true);
  });
});
