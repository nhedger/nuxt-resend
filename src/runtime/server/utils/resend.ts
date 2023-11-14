import { Resend } from "resend";
import { useRuntimeConfig } from "#imports";

export const useResend = () => {
	const apiKey = useRuntimeConfig().resend.apiKey;
	return new Resend(apiKey);
};
