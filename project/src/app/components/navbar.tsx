import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useCartStore } from "@/store";
import { ShoppingCartIcon } from "lucide-react";
import { Cart } from "./cart";

export function Navbar() {
  /*   const useStore = useCardStore();*/
  return (
    <nav className="fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-slate-800 text-gray-300">
      <Link
        href="/"
        className="uppercase font-bold text-md h-12 flex items-center"
      >
        Next Store
      </Link>
      <section className="flex items-center gap-8">
        <Cart />
        <article>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="border rounded-md border-gray-400 px-3 py-2">
                Fazer Login
              </button>
            </SignInButton>
          </SignedOut>
        </article>
      </section>
    </nav>
  );
}
