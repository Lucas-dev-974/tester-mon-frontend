import { render } from "@solidjs/testing-library";
import userEvent from "@testing-library/user-event";
import { Counter } from "./Counter";

const user = userEvent.setup();
test("counts on click", async () => {
  const { getByRole } = render(() => <Counter />);
  const button: HTMLButtonElement = getByRole("button");

  expect(button).toHaveTextContent("1");
  await user.click(button);

  expect(button).toHaveTextContent("2");
  await user.click(button);

  expect(button).toHaveTextContent("3");
});