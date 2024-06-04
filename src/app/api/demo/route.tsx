import { demoRequestSchema } from "~/schemas/demo";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const parsedBody = demoRequestSchema.safeParse(body);

    if (!parsedBody.success) {
      const errors = parsedBody.error.errors.map((error) => ({
        path: error.path.join("."),
        message: error.message,
      }));

      return new Response(JSON.stringify({ errors }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const { name, email, notes } = parsedBody.data;

    return Response.json({ response: "Hello World", data: { name, email, notes } });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Invalid request" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}
