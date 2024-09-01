
import { useState } from "react";
import { Skeleton } from "@mui/material";
import "../style.css";

const ImageWithLoading = ({ src, alt, ...props }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {!loaded && (
        <Skeleton
          variant="rectangular"
          width="100%"
          height="100%"
          animation="wave"
          sx={{ bgcolor: "rgba(0, 0, 0, 0.1)" }} // تنظیم رنگ زمینه برای حالت تار
        />
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        style={{
          display: loaded ? "block" : "none",
          width: "100%",
          height: "auto",
          transition: "opacity 0.5s ease",
        }}
        {...props}
      />
    </div>
  );
};

export default ImageWithLoading;
