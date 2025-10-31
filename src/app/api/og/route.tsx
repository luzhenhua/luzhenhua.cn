import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import { DATA } from "@/data/resume";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title");

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          padding: "40px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1
            style={{
              fontSize: "60px",
              fontWeight: "bold",
              color: "black",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            {title || DATA.username}
          </h1>
          <h2
            style={{
              fontSize: "30px",
              color: "#666",
              textAlign: "center",
            }}
          >
            全栈工程师 | React/Next.js 专家
          </h2>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
