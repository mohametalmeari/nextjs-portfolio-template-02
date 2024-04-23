import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req, res) {
  try {
    const body = await req.json();
    const { email, name, message } = body;
    const data = await resend.emails.send({
      from: `${name} <onboarding@resend.dev>`,
      to: ["mohamet.almeari@gmail.com", email],
      subject: "Message from portfolio",
      react: (
        <>
          <p>{message}</p>
        </>
      ),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
