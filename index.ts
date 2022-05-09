import { SVG, Text } from "@svgdotjs/svg.js";

declare var lorem: string;

const mainDoc = SVG("#mainDoc");
const text1 = SVG("#text0") as Text;
text1.text(lorem);