import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <main>
      <h1>HomePage</h1>

      <Button asChild>
        <a href="/editor">Editor</a>
      </Button>
    </main>
  );
};

export default HomePage;
