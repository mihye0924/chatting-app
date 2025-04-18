import { inputTextProps } from "./types";

 
const inputText = ({
  type
}: inputTextProps) => {
  return (
    <input :type="type" />
  );
};
export default inputText;
