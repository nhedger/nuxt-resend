export default defineEventHandler(async () => {
	const { emails } = useResend();

	const result = await emails.send({
		from: "Nicolas Hedger <nicolas@hedger.ch>",
		to: ["nicolas@hedger.ch"],
		subject: "Hello from Nuxt Resend",
		text: "Hello world!",
	});

	console.log(result);
});
