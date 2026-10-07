import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ href: "/quiz.html" });
  },
  component: Home,
});

function Home() {
  return (
    <main className="flex min-h-dvh items-center justify-center bg-bg p-6 text-fg">
      <p>Opening APES practice quiz…</p>
    </main>
  );
}
