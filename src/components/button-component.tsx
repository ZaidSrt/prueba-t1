import { Children } from 'react';


interface ButtonComponent {
  variante: "primary" | "secondary" | "danger";
  children: React.ReactNode
}

export default function Button({ variante = "primary", children = "" }: ButtonComponent) {

  return (
    <button className={`bg-${variante} text-white py-1.5 px-5 rounded cursor-pointer`}>{children}</button>
  );
}