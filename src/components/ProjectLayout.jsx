import './ProjectPageLayout.css';
// ProjectPageLayout.jsx
import { useEffect, useState } from "react";

export default function ProjectPageLayout({ children }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className={`project-page ${visible ? "visible" : ""}`}>
      {children}
    </div>
  );
}