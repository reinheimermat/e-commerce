import { SignUp } from "@clerk/nextjs";

type SignUpPageProps = {
  searchParams: {
    redirectUrl: string;
  };
};

export default function SignUpPage({ searchParams: { redirectUrl } }: SignUpPageProps) {
  return (
    <section className="py-14">
      <article className="container mx-auto px-4">
        <aside className="flex justify-center">
          <SignUp signInUrl="/sign-in" redirectUrl={redirectUrl} />
        </aside>
      </article>
    </section>
  );
}
