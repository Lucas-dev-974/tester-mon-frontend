import GameService from "./GameService";

describe("TEST API", () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ message: "Mocked response" }),
    });
  });

  it("Test get one", async () => {
    const id = 1;
    const response = await GameService.get(id);

    // fetch.mockReturnValue(JestMockPromise.resolve(new Response()));

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith("http://127.0.0.1:8000/api/game/" + id, {
      method: "GET",
    });
  });

  it("Test get one", async () => {
    const id = 1;
    const response = await GameService.get(id);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith("http://127.0.0.1:8000/api/game/" + id, {
      method: "GET",
    });
  });
});
