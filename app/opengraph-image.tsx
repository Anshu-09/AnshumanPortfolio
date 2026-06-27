import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Anshuman Giri — Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0f",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <p style={{ color: "#818CF8", fontSize: 16, letterSpacing: "0.2em", marginBottom: 24, textTransform: "uppercase" }}>
          CS Undergrad @ KIIT University
        </p>
        <h1 style={{ color: "#e8e8f0", fontSize: 80, fontWeight: 700, lineHeight: 0.9, margin: 0 }}>
          Anshuman
        </h1>
        <h1 style={{ color: "#4a4a6a", fontSize: 80, fontWeight: 700, lineHeight: 0.9, margin: "0 0 32px" }}>
          Giri
        </h1>
        <p style={{ color: "#8888aa", fontSize: 20, maxWidth: 500 }}>
          Building things that work. Full-stack developer focused on clean engineering.
        </p>
      </div>
    ),
    size
  );
}
