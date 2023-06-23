export default function ModalOverlay({ onClose }: { onClose: () => void }) {
  return (
    <div
      data-testid="modal-overlay"
      class="modal-overlay fixed inset-0 bg-gray-500 opacity-50 z-10"
      onClick={onClose}
    ></div>
  );
}
