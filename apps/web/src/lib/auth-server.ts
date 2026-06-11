import { auth } from "@homepage/auth";
import { headers } from "next/headers";

export async function getServerSession() {
	try {
		return await auth.api.getSession({
			headers: await headers(),
		});
	} catch {
		return null;
	}
}
