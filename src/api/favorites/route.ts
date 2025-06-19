import { promises as fs } from "fs";
import path from "path";
import { NextRequest } from "next/server";

const filePath = path.resolve(process.cwd(), "src/data/favorites.json");

export async function GET() {
  const file = await fs.readFile(filePath, "utf-8");
  const favorites = JSON.parse(file);
  return Response.json(favorites);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const file = await fs.readFile(filePath, "utf-8");
  const favorites = JSON.parse(file);

  const alreadyExists = favorites.find((fav: any) => fav.cca3 === body.cca3);
  if (alreadyExists) {
    return Response.json(favorites); // não duplica
  }

  const updated = [...favorites, body];
  await fs.writeFile(filePath, JSON.stringify(updated, null, 2), "utf-8");
  return Response.json(updated);
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const cca3 = searchParams.get("cca3");

  const file = await fs.readFile(filePath, "utf-8");
  const favorites = JSON.parse(file);
  const updated = favorites.filter((fav: any) => fav.cca3 !== cca3);

  await fs.writeFile(filePath, JSON.stringify(updated, null, 2), "utf-8");
  return Response.json(updated);
}
