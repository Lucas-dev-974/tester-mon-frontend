export enum colorEnum {
  green = "green",
  red = "red",
}

export interface ButtonProps {
  label: string;
  color: colorEnum;
  onClick: () => void;
}

export default function (props: ButtonProps) {
  return (
    <button
      type="button"
      class={
        "rounded-md bg-[var(--" +
        props.color +
        ")] px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-[var(--" +
        props.color +
        ")] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
      }
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
}
