import { Button } from "./button.js";
export function Navigation () {
    return (
      <nav className={"flex items-center justify-between p-6"}>
        <div className="flex items-center">
          <div className="w-10 h-10 bg-blue-600 rounded-full" />
          <span className="ml-2 text-xl font-semibold">ChatFlow</span>
        </div>
        <div className="flex items-center gap-8">
          <Button variant="ghost" size="md" >Features</Button>
          <Button variant="ghost" size="md" >Pricing</Button>
          <Button variant="ghost" size="md" >About</Button>
          <Button variant="primary" size="lg" >Sign Up</Button>
        </div>
      </nav>
    );
  };