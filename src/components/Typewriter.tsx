import { useState, useEffect } from "react";

export default function Typewriter({ words }: { words: string[] }) {
  const [wi, setWi] = useState(0);
  const [ci, setCi] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[wi];
    const delay = del ? 40 : ci === word.length ? 2000 : 70;
    const t = setTimeout(() => {
      if (!del && ci < word.length) {
        setCi(c => c + 1);
      } else if (!del && ci === word.length) {
        setDel(true);
      } else if (del && ci > 0) {
        setCi(c => c - 1);
      } else {
        setDel(false);
        setWi(w => (w + 1) % words.length);
      }
    }, delay);
    return () => clearTimeout(t);
  }, [wi, ci, del, words]);

  return (
    <span>
      {words[wi].slice(0, ci)}
      <span style={{ opacity: 1, animation: "pulse-glow 1s ease-in-out infinite", color: "#00E5FF" }}>|</span>
    </span>
  );
}
