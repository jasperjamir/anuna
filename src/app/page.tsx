"use client";
import { Counter, CounterRef } from "@/components/counter";
import { Button } from "@/components/ui/button";
import SplitText from "@/components/ui/split-text";
import { WaitlistForm } from "@/components/waitlist-form";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { useRef, useState, useEffect } from "react";

export default function Home() {
  const counterRef = useRef<CounterRef>(null);
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);
  const [showEmailSection, setShowEmailSection] = useState(false);

  const handleWaitlistSuccess = async () => {
    // Refetch counter when someone successfully joins the waitlist
    if (counterRef.current) {
      await counterRef.current.refetchCount();
    }
  };

  useEffect(() => {
    // Preload background image
    const img = new Image();
    img.onload = () => {
      setBackgroundLoaded(true);
      // Show email section after background loads with additional delay
      setTimeout(() => {
        setShowEmailSection(true);
      }, 500);
    };
    img.src = '/anuna-bg.png';
  }, []);
  return (
    <div 
      className="flex flex-col h-screen justify-center items-center text-center bg-cover bg-center bg-no-repeat transition-all duration-1000"
      style={{
        backgroundColor: '#8B5A96',
        backgroundImage: backgroundLoaded ? `url('/anuna-bg.png')` : 'none'
      }}
    >

      <SplitText className="text-8xl tracking-tighter font-bold text-[#ffda47] mb-2">
        anuna?!
      </SplitText>
      <SplitText className="tracking-tight text-xl text-[#ffffff] mb-6">
      Sumali para lagi kang may paalala sa mga national issues na madalas nakakalimutan.
      </SplitText>
      <WaitlistForm onSuccess={handleWaitlistSuccess} />
      <div className="mt-4">
        <Counter ref={counterRef} />
      </div>
      
      {/* Sample Email Section - Loads Last */}
      {showEmailSection && (
        <div 
          className="mt-8 w-full max-w-md rounded-2xl p-6 shadow-xl opacity-0 animate-fade-in"
          style={{ 
            animation: 'fadeIn 0.8s ease-in-out forwards'
          }}
        >
          <h3 className="tracking-tight text-xl mb-2 text-[#ffffff] font-bold">
            Sample Email na matatanggap mo:
          </h3>
          <img 
            src="/email-screenshot.png" 
            alt="Sample email screenshot" 
          />
        </div>
      )}
      
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
