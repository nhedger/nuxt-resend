import { Resend } from "resend";

export const useResend = () => {
	const apiKey = useRuntimeConfig().resend.apiKey;
	return new Resend(apiKey);
};
