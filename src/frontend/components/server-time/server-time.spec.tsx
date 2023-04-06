import { render, screen } from "@testing-library/react";
import { ServerTime } from "./server-time";

import { useRequest } from "../../hooks/use-request";

jest.mock("../../hooks/use-request");

const currentDate = new Date("4/6/2023");

beforeEach(() => {
  jest.resetAllMocks();
  jest.useFakeTimers();
  jest.setSystemTime(currentDate);
});

afterEach(() => {
  jest.useRealTimers();
});

describe(`<ServerTime>`, () => {
  it(`displays the most recent epoch time in seconds`, () => {
    jest
      .mocked(useRequest)
      .mockReturnValue({ loading: false, data: { epoch: 12314 } });

    render(<ServerTime />);

    expect(screen.getByText(`12314 seconds`)).toBeInTheDocument();
  });

  it(`displays the difference between the epoch time and the current time in stopwatch time`, () => {
    const inputTime = Math.floor(currentDate.getTime() / 1000) - 78;
    jest
      .mocked(useRequest)
      .mockReturnValue({ loading: false, data: { epoch: inputTime } });

    render(<ServerTime />);

    expect(
      screen.getByText((contents) => contents.includes(`00:01:18`))
    ).toBeInTheDocument();
  });

  it(`Displays loading if the data hook returns loading`, () => {
    jest.mocked(useRequest).mockReturnValue({ loading: true });

    render(<ServerTime />);

    expect(
      screen.getByText((contents) => contents.includes(`Loading`))
    ).toBeInTheDocument();
  });
});
