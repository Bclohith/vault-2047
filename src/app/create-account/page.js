import Image from "next/image";
import Link from "next/link";

export default function CreateAccountPage() {
  return (
    <div className="w-full min-h-screen bg-[#040b0e] flex flex-col">
      
      {/* Sub-navigation */}
      <div className="w-full bg-[#101010] border-b border-white/10 flex justify-center items-center py-4 relative z-20">
        <div className="flex justify-center items-center gap-8">
          <Link href="/create-account" className="text-[#B86A2E] text-sm font-semibold uppercase tracking-wider transition-colors hover:text-[#9a5624]" style={{ fontFamily: "var(--font-ibm)" }}>
            Create new account
          </Link>
          <Link href="/get-your-pass" className="text-white/70 text-sm font-semibold uppercase tracking-wider transition-colors hover:text-white" style={{ fontFamily: "var(--font-ibm)" }}>
            Get Your Pass
          </Link>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 w-full relative flex justify-center items-center py-16 md:py-24 px-4">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/Vault-2047/assets/login-bg.jpg"
            alt="Audience Background"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#040b0e]/80 via-transparent to-[#040b0e]/80" />
        </div>

        {/* Login Card */}
        <div className="w-full max-w-[650px] p-8 md:p-14 relative z-10 bg-[#171717]/60 border border-white/5 backdrop-blur-xl shadow-2xl flex flex-col justify-start items-center gap-10">
          
          {/* Header */}
          <div className="w-full flex flex-col justify-start items-center gap-4 text-center">
            <h1 className="text-white text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-orbitron)" }}>
              Login
            </h1>
            <p className="text-white/70 text-sm md:text-base font-normal leading-relaxed max-w-[500px]" style={{ fontFamily: "var(--font-ibm)" }}>
              If you already have an account for VAULT2047 log in using the same details. Otherwise, you can sign up to create a new account
            </p>
          </div>

          {/* Form Area */}
          <div className="w-full flex flex-col justify-start items-center gap-10">
            
            <div className="w-full flex flex-col justify-start items-start gap-5">
              
              {/* Email Input */}
              <div className="w-full">
                <div className="w-full h-14 px-5 bg-white/5 border border-white/10 flex items-center focus-within:border-[#0D6665] transition-colors">
                  <input 
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-transparent border-none outline-none text-white placeholder-white/40 text-sm md:text-base"
                    style={{ fontFamily: "var(--font-ibm)" }}
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="w-full">
                <div className="w-full h-14 px-5 bg-white/5 border border-white/10 flex items-center justify-between focus-within:border-[#0D6665] transition-colors">
                  <input 
                    type="password"
                    placeholder="Password"
                    className="w-full bg-transparent border-none outline-none text-white placeholder-white/40 text-sm md:text-base"
                    style={{ fontFamily: "var(--font-ibm)" }}
                  />
                  <button type="button" className="text-[#0D6665] hover:text-[#0a4f4e] transition-colors flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Reset Password */}
              <button type="button" className="text-white/60 hover:text-white text-sm transition-colors" style={{ fontFamily: "var(--font-ibm)" }}>
                Reset Password
              </button>
            </div>

            {/* Actions */}
            <div className="w-full flex flex-col justify-center items-center gap-6">
              
              <button className="w-full h-14 bg-[#B86A2E] text-white text-base font-semibold hover:bg-[#9a5624] transition-colors shadow-lg" style={{ fontFamily: "var(--font-ibm)" }}>
                Submit
              </button>
              
              <div className="text-white/70 text-sm md:text-base" style={{ fontFamily: "var(--font-ibm)" }}>
                Don&apos;t have an account? <Link href="#" className="text-[#0D6665] font-bold hover:underline">Sign up</Link>
              </div>
              
              <p className="text-white/50 text-xs md:text-sm text-center leading-relaxed max-w-[500px]" style={{ fontFamily: "var(--font-ibm)" }}>
                If you already have an account for VAULT2047 log in using the same details. Otherwise, you can sign up to create a new account
              </p>
            </div>

          </div>
        </div>

      </main>
    </div>
  );
}
