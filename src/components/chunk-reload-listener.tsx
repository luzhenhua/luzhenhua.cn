"use client";

import { useEffect } from "react";

const STORAGE_KEY = "__next_chunk_reload_once";

function reloadOnce() {
  try {
    if (sessionStorage.getItem(STORAGE_KEY)) {
      return;
    }
    sessionStorage.setItem(STORAGE_KEY, "1");
  } catch {
    // ignore storage errors
  }
  window.location.reload();
}

export function ChunkReloadListener() {
  useEffect(() => {
    // Clear the flag on a clean load.
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore storage errors
    }

    const handleScriptError = (event: Event) => {
      const target = event.target as HTMLScriptElement | null;
      if (!target || target.tagName !== "SCRIPT") return;
      const src = target.src || "";
      if (src.includes("/_next/static/")) {
        reloadOnce();
      }
    };

    const handleChunkRejection = (event: PromiseRejectionEvent) => {
      const reason = event?.reason;
      const name = reason?.name || "";
      const message = reason?.message || "";
      if (
        name === "ChunkLoadError" ||
        message.includes("Loading chunk") ||
        message.includes("/_next/static/")
      ) {
        reloadOnce();
      }
    };

    window.addEventListener("error", handleScriptError, true);
    window.addEventListener("unhandledrejection", handleChunkRejection);

    return () => {
      window.removeEventListener("error", handleScriptError, true);
      window.removeEventListener("unhandledrejection", handleChunkRejection);
    };
  }, []);

  return null;
}
