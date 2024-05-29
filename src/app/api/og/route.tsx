/* eslint-disable @next/next/no-img-element */
import { readFile } from "fs/promises";
import path from "path";
import satori from "satori";
import sharp from "sharp";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const title = searchParams.get("title") ?? "Arc Docs";

  const fontsFolderPath = path.join(process.cwd(), "public", "fonts");

  const geistRegular = await readFile(`${fontsFolderPath}/Geist-Regular.ttf`);
  const geistSemibold = await readFile(`${fontsFolderPath}/Geist-SemiBold.ttf`);
  const geistBlack = await readFile(`${fontsFolderPath}/Geist-Black.ttf`);

  const imageBuffer = await readFile(path.join(process.cwd(), "public", "logo.png"));

  const imageBase64 = imageBuffer.toString("base64");

  const imageDataURI = `data:image/png;base64,${imageBase64}`;

  const svg = await satori(
    <div
      tw="w-full h-full flex flex-col justify-between p-[68px]"
      style={{
        background: "radial-gradient(at right bottom, #27272A 0%, #09090B 70%)",
      }}
    >
      <div tw="flex">
        <img src={`${imageDataURI}`} height="50" alt="" />
      </div>
      <div tw="flex flex-col">
        <div tw="font-black text-6xl mt-10" style={{ color: "#FFFFFF" }}>
          {title}
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Geist",
          data: geistRegular,
          weight: 400,
          style: "normal",
        },
        {
          name: "Geist",
          data: geistSemibold,
          weight: 600,
          style: "normal",
        },
        {
          name: "Geist",
          data: geistBlack,
          weight: 800,
          style: "normal",
        },
      ],
    },
  );

  const png = await sharp(Buffer.from(svg)).png().toBuffer();

  return new Response(png, {
    headers: { "Content-Type": "image/png" },
  });
}
