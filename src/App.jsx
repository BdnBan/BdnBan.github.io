export default function App() {
  return (
    <main className="container mx-auto px-4 py-12"> 
      <div className="max-w-2xl">
        <h1 className="text-5xl font-bold text-(--text) mb-6">
          Welcome to My Portfolio
        </h1>

        <p className="text-lg text-(--muted) leading-relaxed mb-8">
          This is a simple portfolio website built with React and Tailwind CSS.
        </p>

        <div className="bg-(--surface) border border-(--bordercolor) rounded-lg p-6">
          <div className="text-sm text-(--muted) space-y-1">
            <p> Tailwind Active!</p>
            <p> Thema Loaded! </p>
            <p> First UI Works! </p>
          </div>
        </div>
      </div>
    </main>
  );
}