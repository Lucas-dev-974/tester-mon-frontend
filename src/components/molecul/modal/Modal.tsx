import { JSXElement, Show } from "solid-js";
import ModalOverlay from "../../atoms/modal/ModalOverlay";
import ModalContent from "../../atoms/modal/ModalContent";

export interface ModalProps {
  isOpen: () => boolean;
  onClose: () => void;
  children: JSXElement;
}

export default function (props: ModalProps) {
  const { isOpen, onClose } = props;

  return (
    <Show when={isOpen()}>
      <div class="fixed inset-0 flex items-center justify-center z-50">
        <ModalOverlay onClose={onClose} />
        <ModalContent>{props.children}</ModalContent>
      </div>
    </Show>
  );
}
