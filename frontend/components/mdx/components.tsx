import type { ComponentProps } from "react";
import Link from "next/link";

function A({ href = "", ...rest }: ComponentProps<"a">) {
  if (href.startsWith("/") || href.startsWith("#")) return <Link href={href} {...rest} />;
  return <a href={href} rel="noopener noreferrer" target="_blank" {...rest} />;
}
function Img(props: ComponentProps<"img">) {
  return <img loading="lazy" decoding="async" {...props} alt={props.alt ?? ""} />;
}
const MDXComponents = { a: A, img: Img };
export default MDXComponents;
