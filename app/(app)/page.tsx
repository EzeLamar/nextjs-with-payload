import Image from "next/image";
import { FormName } from "@/components/Form/CMSForm";
import CMSForm from "@/components/Form/CMSForm";
import { getPayloadSession } from "payload-authjs";
import {
  signIn as adminsSignIn,
  signOut as adminsSignOut,
} from "@/auth.admins";
import {
  signIn as customersSignIn,
  signOut as customersSignOut,
} from "@/auth.customers";

import { SubmitButton } from "@/components/Auth/SubmitButton";
import { CUSTOMERS } from "@/collections/Customers";
import { ADMINS } from "@/collections/Admins";

export default async function Home() {
  const customerSession = await getPayloadSession({
    userCollectionSlug: CUSTOMERS,
  });
  const adminSession = await getPayloadSession({
    userCollectionSlug: ADMINS,
  });

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {!adminSession ? (
          <form
            action={async () => {
              "use server";
              await adminsSignIn("github");
            }}
          >
            <SubmitButton label="Signin as Admin" />
          </form>
        ) : (
          <>
            <pre>Welcome {JSON.stringify(adminSession?.user.email)}!</pre>
            <form
              action={async () => {
                "use server";
                await adminsSignOut();
              }}
            >
              <SubmitButton variant="destructive" label="Logout" />
            </form>
          </>
        )}

        {!customerSession ? (
          <form
            action={async () => {
              "use server";
              await customersSignIn("google");
            }}
          >
            <SubmitButton className="bg-blue-800 hover:bg-blue-900" label="Signin as Customer" />
          </form>
        ) : (
          <>
            <pre>Welcome {JSON.stringify(customerSession?.user.email)}!</pre>
            <form
              action={async () => {
                "use server";
                await customersSignOut();
              }}
            >
              <SubmitButton variant="destructive" label="Logout" />
            </form>
          </>
        )}

        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          {/* {!user && <h1>Welcome to your new project.</h1>}
          {user && <h1>Welcome back, {user.email}</h1>} */}
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <CMSForm name={FormName.TestForm} />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
