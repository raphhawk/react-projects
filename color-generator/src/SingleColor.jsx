import { toast } from "react-toastify";

const SingleColor = ({ color, idx }) => {
  const { hex, weight } = color;
  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success("Color Copied to Clipboard");
      } catch (err) {
        toast.error("Failed Copying to Clipboard");
      }
    } else {
      toast.error("Clipboard not found");
    }
  };
  return (
    <article
      className={`w-50 h-40 p-4 ${idx > 10 ? "text-white" : "text-black"}`}
      style={{ background: `#${hex}` }}
      onClick={saveToClipboard}
    >
      <p>{weight}%</p>
      <p>{`#${hex}`}</p>
    </article>
  );
};

export default SingleColor;
