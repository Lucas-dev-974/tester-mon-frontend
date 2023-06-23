import { fireEvent, render, screen } from "@solidjs/testing-library";
import Button, { colorEnum } from "./Button";

describe("DataTable", () => {
  test("affiche les données dans le tableau", async () => {
    const onClickMock = jest.fn();

    render(() => (
      <Button label="test" color={colorEnum.green} onClick={onClickMock} />
    ));

    const button = screen.getByRole("button", { name: /test/i });

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("test");
    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
