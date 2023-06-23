import { JSXElement, children } from "solid-js";

export default function ModalContent(props: { children: JSXElement }) {
  const child = children(() => props.children);

  return (
    <div class="modal-content bg-slate-900 py-5 px-10 rounded-lg shadow-lg text-white z-20">
      {child()}
    </div>
  );
}
