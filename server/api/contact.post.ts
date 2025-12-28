export default defineEventHandler(async (event) => {
  const { emails } = useResend();

  const body = await readBody(event);
  const { name, email, message } = body;

  const response = await emails.send({
    from: "info@musnajelectricals.com",
    to: "info@musnajelectricals.com",
    subject: "New Contact Form Submission",
    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
  });

  if (response.error) {
    throw createError({
      statusCode: 500,
      statusMessage: response.error.message || "Failed to send email",
    });
  }

  return response;
});
