export async function onRequestPost(context) {
  try {
    const body = await context.request.json();
    const { name, email, reason, message } = body;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'All fields required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // TODO: send email via context.env.RESEND_API_KEY or similar
    console.log('Contact form submission:', { name, email, reason, message });

    return new Response(JSON.stringify({ success: true, message: 'Message received!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
