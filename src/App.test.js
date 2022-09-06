import Navigation from "./routes/navigation/navigation.component";
import { fireEvent, render, screen } from "./utils/test/test.utils";

test("empty dropdown has correct message", () => {
  render(<Navigation />);
  const dropdown = screen.getByRole("dropdown-button");
  fireEvent.click(dropdown);
  const dropdownMenu = screen.getByRole("dropdown-menu");
  expect(dropdownMenu).toHaveTextContent("Your cart is empty");
});
