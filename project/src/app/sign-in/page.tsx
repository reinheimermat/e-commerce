import { SignIn } from "@clerk/nextjs";

type SignInPageProps = {
  searchParams: {
    redirectUrl: string;
  };
};

export default function SignInPage({ searchParams: { redirectUrl } }: SignInPageProps) {
  return (
    <section className="py-14">
      <article className="container mx-auto px-4">
        <aside className="flex justify-center">
          <SignIn signUpUrl="/sign-up" redirectUrl={redirectUrl} />
        </aside>
      </article>
    </section>
  );
}
