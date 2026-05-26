"use client";
import React from "react";

export const PHONE_ASPECT = 188 / 390; // ≈ 0.4821

const SHELL_RX = 26 / 188;
const SCREEN_INSET_X = 8 / 188;
const SCREEN_INSET_Y = 12 / 188;
const SCREEN_RX = 20 / 188;
const DI_W = 34 / 188;
const DI_H = 10 / 188;
const DI_Y = 18 / 188;
const HI_W = 44 / 188;
const HI_H = 4 / 188;
const HI_INSET_BOTTOM = 10 / 188;

export type PhoneFrameProps = {
  x: number;
  y: number;
  width: number;
  children?: React.ReactNode;
};

export function phoneScreenBounds(x: number, y: number, width: number) {
  const height = width / PHONE_ASPECT;
  const insetX = width * SCREEN_INSET_X;
  const insetY = width * SCREEN_INSET_Y;
  return {
    screenX: x + insetX,
    screenY: y + insetY,
    screenWidth: width - 2 * insetX,
    screenHeight: height - 2 * insetY,
  };
}

export default function PhoneFrame({ x, y, width, children }: PhoneFrameProps) {
  const height = width / PHONE_ASPECT;
  const { screenX, screenY, screenWidth, screenHeight } = phoneScreenBounds(x, y, width);
  const diW = width * DI_W;
  const diH = width * DI_H;
  const hiW = width * HI_W;
  const hiH = width * HI_H;

  return (
    <g>
      <rect x={x} y={y} width={width} height={height} rx={width * SHELL_RX} fill="#2A2419" />
      <rect x={screenX} y={screenY} width={screenWidth} height={screenHeight} rx={width * SCREEN_RX} fill="#FDF6EC" />
      <rect
        x={x + (width - diW) / 2}
        y={y + width * DI_Y}
        width={diW}
        height={diH}
        rx={diH / 2}
        fill="#2A2419"
      />
      {children}
      <rect
        x={x + (width - hiW) / 2}
        y={screenY + screenHeight - width * HI_INSET_BOTTOM - hiH}
        width={hiW}
        height={hiH}
        rx={hiH / 2}
        fill="#2A2419"
        opacity={0.25}
      />
    </g>
  );
}
