import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-white">
          4<span className="text-blue-500">0</span>4
        </h1>
        <p className="mt-4 text-xl text-gray-400">Page not found</p>
        <p className="mt-2 text-gray-500">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <div className="mt-8">
          <Button variant="primary" href="/">
            Back Home
          </Button>
        </div>
      </div>
    </div>
  );
}
