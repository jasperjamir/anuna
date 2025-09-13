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
        backgroundImage: `url('/anuna-bg.jpg')`
      }}
    >
      <div 
        className="mb-8 rounded-2xl p-8 shadow-xl max-w-4xl mx-auto"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
      >
        <SplitText className="text-8xl tracking-tighter font-bold text-gray-800">
          Anuna!?
        </SplitText>
        <SplitText className="tracking-tight text-xl text-gray-800">
        Sumali para lagi kang may paalala sa mga national issues na madalas nakakalimutan.
        </SplitText>
      </div>
      <WaitlistForm />
      <div className="mt-4">
        <Counter />
      </div>
      
      {/* Sample Email Section */}
      <div 
        className="mt-8 w-4/5 max-w-md rounded-2xl p-6 shadow-xl"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
      >
        <h3 className="tracking-tight text-xl mb-4 text-gray-800">
          Sample Email na matatanggap mo:
        </h3>
        <img 
          src="/email-screenshot.png" 
          alt="Sample email screenshot" 
          className="w-full h-auto rounded-lg shadow-lg border-2 border-gray-300"
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
