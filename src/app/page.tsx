import { Counter } from "@/components/counter";
import { Button } from "@/components/ui/button";
import SplitText from "@/components/ui/split-text";
import { WaitlistForm } from "@/components/waitlist-form";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div 
      className="flex flex-col h-screen justify-center items-center text-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/anuna-bg.png')`
      }}
    >

      <SplitText className="text-7xl tracking-tighter font-bold text-[#ffda47]">
        anuna?!
      </SplitText>
      <SplitText className="tracking-tight text-l text-[#ffffff]">
      Sumali para lagi kang may paalala sa mga national issues na madalas nakakalimutan.
      </SplitText>
      <WaitlistForm />
      <div className="mt-4">
        <Counter />
      </div>
      
      {/* Sample Email Section */}
      <div 
        className="mt-8 w-full max-w-md rounded-2xl p-6 shadow-xl"
      >
        <h3 className="tracking-tight text-xl mb-4 text-[#ffffff]">
          Sample Email na matatanggap mo:
        </h3>
        <img 
          src="/email-screenshot.png" 
          alt="Sample email screenshot" 
        />
      </div>
      
      <footer className="sticky top-[100vh]">
        <Button size="icon" variant="ghost">
          <Link href="https://github.com/zeitgg/zeitlist" target="_blank">
            <FaGithub />
          </Link>
        </Button>
      </footer>
    </div>
  );
}
