"use client";

import dynamic from "next/dynamic";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// 动态导入 ReactPlayer
const ReactPlayer = dynamic(() => import("react-player/lazy"), {
  loading: () => (
    <div className="w-full h-[60vh] animate-pulse bg-muted rounded-lg" />
  ),
  ssr: false,
});

interface VideoPlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

export function VideoPlayerModal({
  isOpen,
  onClose,
  videoUrl,
}: VideoPlayerModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <div className="aspect-video">
          <ReactPlayer
            url={videoUrl}
            width="100%"
            height="100%"
            controls
            playing
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
