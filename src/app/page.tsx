export default function Page() {
  return (
    <main className="flex flex-col gap-3">
      <h1>Public</h1>
      <a href="/auth">sign in</a>
      <a href="/protected">protected route</a>
    </main>
  );
}
