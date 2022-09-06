import Navigation from "./routes/navigation/navigation.component";
import { render, screen } from "./utils/test/test.utils";

test("renders navigation bar", () => {
  const { container } = render(<Navigation />);
  screen.debug();

  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
