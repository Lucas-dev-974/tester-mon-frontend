import { fireEvent, render, screen } from "@solidjs/testing-library";
import Modal from "./Modal";

describe("Modal", () => {
  test("affiche le contenu du modal lorsqu'il est ouvert", () => {
    const mockChildren = "Contenu du modal";
    const isOpen = jest.fn().mockReturnValue(true);
    const onClose = jest.fn();

    render(() => (
      <Modal isOpen={isOpen} onClose={onClose}>
        {mockChildren}
      </Modal>
    ));

    const modalContent = screen.getByText(mockChildren);
    expect(modalContent).toBeInTheDocument();
  });

  test("ne rend rien lorsqu'il est fermé", () => {
    const isOpen = jest.fn().mockReturnValue(false);
    const onClose = jest.fn();

    render(() => (
      <Modal isOpen={isOpen} onClose={onClose}>
        Contenu du modal
      </Modal>
    ));

    const modalContent = screen.queryByText("Contenu du modal");
    expect(modalContent).toBeNull();
  });

  test("appelle la fonction onClose lorsqu'on clique sur l'overlay", () => {
    const isOpen = jest.fn().mockReturnValue(true);
    const onClose = jest.fn();

    render(() => (
      <Modal isOpen={isOpen} onClose={onClose}>
        Contenu du modal
      </Modal>
    ));

    const overlay = screen.getByTestId("modal-overlay");
    fireEvent.click(overlay);

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
