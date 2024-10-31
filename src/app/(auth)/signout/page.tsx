import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";

export default async function SignOutPage() {
  try {
    await signOut(auth);
  } catch (err) {
    console.error(err);
  }
  return null;
}
