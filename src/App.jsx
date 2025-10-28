import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Zap, Brain, TrendingUp, Menu, X, DollarSign, Target, Rocket } from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    companySize: '',
    challenge: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/manpdqyr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        alert('Thank you! We will be in touch soon about early access.');
        // Clear the form
        setFormData({
          name: '',
          email: '',
          company: '',
          role: '',
          companySize: '',
          challenge: ''
        });
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-black">
      <style>{`
        @keyframes pulse-glow {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.15);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse-icon {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        @keyframes wiggle {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-5deg);
          }
          75% {
            transform: rotate(5deg);
          }
        }

        @keyframes number-pulse {
          0%, 100% {
            transform: scale(1);
            text-shadow: 0 0 15px currentColor;
          }
          50% {
            transform: scale(1.02);
            text-shadow: 0 0 20px currentColor;
          }
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse-icon {
          animation: pulse-icon 2s ease-in-out infinite;
        }

        .animate-wiggle {
          animation: wiggle 2.5s ease-in-out infinite;
        }

        .animate-number-pulse {
          animation: number-pulse 3s ease-in-out infinite;
        }
      `}</style>

      <div className="fixed inset-0 w-full h-screen z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
      </div>

      <div className="relative z-10">
        <nav className="fixed top-0 w-full backdrop-blur-md bg-black/30 border-b border-white/10 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center">
                <a href="/" className="cursor-pointer">
                  <img 
                    src="/logo.png" 
                    alt="Multikor.ai" 
                    className="h-10 md:h-12 hover:opacity-80 transition"
                  />
                </a>
              </div>
              
              <div className="hidden md:flex items-center space-x-8">
                <a href="#value-pillars" className="text-gray-300 hover:text-white transition">Value Pillars</a>
                <a href="#solution" className="text-gray-300 hover:text-white transition">Platform</a>
                <a href="#how-it-works" className="text-gray-300 hover:text-white transition">How It Works</a>
                <a href="#early-access" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-cyan-400 hover:to-blue-500 transition">
                  Get Started
                </a>
              </div>

              <button
                className="md:hidden text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden backdrop-blur-md bg-black/90 border-t border-white/10">
              <div className="px-4 pt-2 pb-3 space-y-1">
                <a href="#value-pillars" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded" onClick={() => setMobileMenuOpen(false)}>Value Pillars</a>
                <a href="#solution" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded" onClick={() => setMobileMenuOpen(false)}>Platform</a>
                <a href="#how-it-works" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
                <a href="#early-access" className="block px-3 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg text-center mt-2" onClick={() => setMobileMenuOpen(false)}>
                  Get Started
                </a>
              </div>
            </div>
          )}
        </nav>

        <section className="min-h-screen flex items-center justify-center px-4 pt-20">
          <div className="max-w-4xl w-full text-center">
            <div className="text-white space-y-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(34,211,238,0.5)]">
                  Turn BPO operations into profit engines.
                </span>
              </h1>

              <p className="text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
                Multikor is the automation platform built for BPO providers. Increase margins 15-30%, win outcome-based contracts, and scale without adding headcount—across customer support, finance & accounting, and procurement.
              </p>

              <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto mt-4">
                Labor arbitrage is over. Outcome-based contracts are the new reality. We give BPO providers the platform to thrive in both.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <a
                  href="#early-access"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:from-cyan-400 hover:to-blue-500 transition shadow-lg shadow-cyan-500/50"
                >
                  Calculate Your Margin Impact
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="#solution"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-lg hover:bg-white/20 transition"
                >
                  See How It Works
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="value-pillars" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Built for BPO Economics</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Purpose-built automation that addresses the three critical challenges facing BPO providers today.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-green-900/30 to-emerald-950/30 backdrop-blur-sm p-8 rounded-xl border border-green-500/30 hover:border-green-500/50 transition">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-green-500/50 animate-float">
                  <TrendingUp className="h-8 w-8 text-white animate-wiggle" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Increase Margins 15-30%</h3>
                <p className="text-gray-300">Reduce cost-per-process by 40-60% through intelligent automation while maintaining service quality. Your clients get better outcomes. You capture higher margins.</p>
              </div>
              <div className="bg-gradient-to-br from-cyan-900/30 to-blue-950/30 backdrop-blur-sm p-8 rounded-xl border border-cyan-500/30 hover:border-cyan-500/50 transition">
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/50 animate-float">
                  <Target className="h-8 w-8 text-white animate-pulse-icon" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Win Outcome-Based Contracts</h3>
                <p className="text-gray-300">76% of enterprise buyers now demand outcome-based pricing. Multikor gives you the automation infrastructure to profitably deliver guaranteed results and win more contracts.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-950/30 backdrop-blur-sm p-8 rounded-xl border border-purple-500/30 hover:border-purple-500/50 transition">
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-purple-500/50 animate-float">
                  <Rocket className="h-8 w-8 text-white animate-pulse-glow" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Scale Without Linear Headcount</h3>
                <p className="text-gray-300">Automate high-volume operations across customer support (75% of tickets), F&A processes (60% automation), and procurement workflows (70% automation). Grow revenue without proportional cost growth.</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-900/40 to-blue-900/40 backdrop-blur-sm border border-cyan-500/30 p-8 rounded-xl text-center">
              <p className="text-2xl font-bold mb-2 text-white">One platform. Three high-value verticals.</p>
              <p className="text-xl text-gray-200">Customer Support • Finance & Accounting • Procurement</p>
            </div>
          </div>
        </section>

        <section id="solution" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Purpose-Built for BPO Operations
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Unlike horizontal RPA tools that require massive customization, Multikor is purpose-built for BPO operations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 backdrop-blur-sm p-8 rounded-xl border border-cyan-500/30 hover:border-cyan-500/50 transition">
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/50 animate-float">
                  <Zap className="h-8 w-8 text-white animate-pulse-icon" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">BPO-Specific Integrations</h3>
                <p className="text-gray-300">
                  Pre-built connectors for client systems. No massive customization projects required.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm p-8 rounded-xl border border-purple-500/30 hover:border-purple-500/50 transition">
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-purple-500/50 animate-float">
                  <Brain className="h-8 w-8 text-white animate-pulse-glow" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Transaction-Based Pricing</h3>
                <p className="text-gray-300">
                  $0.50-$5 per process. Pricing that aligns with your BPO economics and scales with your volume.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-sm p-8 rounded-xl border border-green-500/30 hover:border-green-500/50 transition">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-green-500/50 animate-float">
                  <TrendingUp className="h-8 w-8 text-white animate-wiggle" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Multi-Vertical Coverage</h3>
                <p className="text-gray-300">
                  Support, F&A, and procurement on one platform. Consolidate your automation stack.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 backdrop-blur-sm p-8 rounded-xl border border-orange-500/30 hover:border-orange-500/50 transition">
                <div className="bg-gradient-to-br from-orange-500 to-red-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-orange-500/50 animate-float">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Client Transparency</h3>
                <p className="text-gray-300">
                  Performance dashboards your clients can access. Build trust and win renewals.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">From Fragmented to Unified in Weeks</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-12 relative">
              <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-green-500 opacity-30"></div>

              <div className="relative group">
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/50 transition-transform group-hover:scale-110 group-hover:rotate-12">
                  <svg className="w-8 h-8 animate-pulse-glow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Integrate</h3>
                <p className="text-gray-300">
                  Multikor plugs into your existing infrastructure—Salesforce, ERPs, databases, whatever you use. Cloud-agnostic architecture works anywhere.
                </p>
              </div>

              <div className="relative group">
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 text-white w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-purple-500/50 transition-transform group-hover:scale-110 group-hover:-rotate-12">
                  <svg className="w-8 h-8 animate-spin-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Orchestrate</h3>
                <p className="text-gray-300">
                  Our proprietary engine creates domain-specific AI workflows tailored to your business. Automates code generation, decisions, and operations.
                </p>
              </div>

              <div className="relative group">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-green-500/50 transition-transform group-hover:scale-110">
                  <svg className="w-8 h-8 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Evolve</h3>
                <p className="text-gray-300">
                  The system continuously learns from your data, self-optimizes, and improves. When your business changes, Multikor adapts automatically.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">Why Multikor vs. Traditional RPA</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-6">Horizontal RPA Tools</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 text-2xl">✗</span>
                    <span className="text-gray-300">Requires massive customization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 text-2xl">✗</span>
                    <span className="text-gray-300">Generic, not BPO-specific</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 text-2xl">✗</span>
                    <span className="text-gray-300">License-based pricing (doesn't match your model)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 text-2xl">✗</span>
                    <span className="text-gray-300">Separate tools for each vertical</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 text-2xl">✗</span>
                    <span className="text-gray-300">6-12 months to deploy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 text-2xl">✗</span>
                    <span className="text-gray-300">No client-facing transparency</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-cyan-900/40 to-blue-900/40 backdrop-blur-sm p-8 rounded-xl border-2 border-cyan-500/50 shadow-lg shadow-cyan-500/20">
                <h3 className="text-2xl font-bold text-white mb-6">Multikor</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3 text-2xl">✓</span>
                    <span className="text-white font-medium">Pre-built for BPO operations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3 text-2xl">✓</span>
                    <span className="text-white font-medium">Purpose-built for your industry</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3 text-2xl">✓</span>
                    <span className="text-white font-medium">Transaction-based ($0.50-$5 per process)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3 text-2xl">✓</span>
                    <span className="text-white font-medium">Support, F&A, procurement on one platform</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3 text-2xl">✓</span>
                    <span className="text-white font-medium">2-4 weeks to deploy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3 text-2xl">✓</span>
                    <span className="text-white font-medium">Client-accessible dashboards</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Proven Results Across BPO Providers</h2>
              <p className="text-2xl text-cyan-400 font-semibold mb-2">
                Millions in automated cost savings across BPO providers serving Fortune 500 clients
              </p>
              <p className="text-xl text-gray-300">
                in customer support, finance operations, and procurement.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 backdrop-blur-sm p-8 rounded-xl border border-cyan-500/30 hover:border-cyan-500/50 transition-all group">
                <div className="text-5xl font-bold text-cyan-400 mb-2 animate-number-pulse">75%</div>
                <h3 className="text-xl font-bold text-white mb-3">Customer Support</h3>
                <p className="text-gray-300">
                  Automated ticket resolution with intelligent routing and response generation
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm p-8 rounded-xl border border-purple-500/30 hover:border-purple-500/50 transition-all group">
                <div className="text-5xl font-bold text-purple-400 mb-2 animate-number-pulse" style={{animationDelay: '0.3s'}}>60%</div>
                <h3 className="text-xl font-bold text-white mb-3">Finance & Accounting</h3>
                <p className="text-gray-300">
                  Process automation across invoice processing, reconciliation, and reporting
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-sm p-8 rounded-xl border border-green-500/30 hover:border-green-500/50 transition-all group">
                <div className="text-5xl font-bold text-green-400 mb-2 animate-number-pulse" style={{animationDelay: '0.6s'}}>70%</div>
                <h3 className="text-xl font-bold text-white mb-3">Procurement</h3>
                <p className="text-gray-300">
                  Automated workflows for PO processing, vendor management, and approvals
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-sm rounded-xl p-10 border border-blue-500/30">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
                Demanding automation from your BPO provider?
              </h2>
              <p className="text-xl text-gray-200 mb-6 text-center leading-relaxed">
                Enterprise operations leaders: Multikor reduces your total BPO spend by 20-40% while delivering better outcomes.
              </p>
              <p className="text-lg text-gray-300 mb-8 text-center">
                Add "Multikor-powered automation" to your next BPO RFP—or contact us about bringing automation in-house.
              </p>
              <div className="flex justify-center">
                <a
                  href="#early-access"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-500 hover:to-purple-500 transition shadow-lg shadow-blue-500/50"
                >
                  Enterprise Automation Options
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="early-access" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-900 via-blue-900 to-purple-900">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Ready to Transform Your BPO Operations?</h2>
              <p className="text-xl text-gray-200">
                Join leading BPO providers increasing margins and winning outcome-based contracts with Multikor. Limited spots available in our private beta.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Company *</label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                      placeholder="Acme Corp"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Role *</label>
                    <input
                      type="text"
                      name="role"
                      required
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                      placeholder="CTO, VP Engineering, etc."
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Company Size *</label>
                    <select
                      name="companySize"
                      required
                      value={formData.companySize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                    >
                      <option value="" className="bg-gray-900">Select size</option>
                      <option value="1-50" className="bg-gray-900">1-50 employees</option>
                      <option value="51-200" className="bg-gray-900">51-200 employees</option>
                      <option value="201-1000" className="bg-gray-900">201-1000 employees</option>
                      <option value="1001-5000" className="bg-gray-900">1001-5000 employees</option>
                      <option value="5000+" className="bg-gray-900">5000+ employees</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Primary AI Challenge *</label>
                    <select
                      name="challenge"
                      required
                      value={formData.challenge}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                    >
                      <option value="" className="bg-gray-900">Select challenge</option>
                      <option value="fragmented-tools" className="bg-gray-900">Fragmented AI tools</option>
                      <option value="deployment-time" className="bg-gray-900">Long deployment times</option>
                      <option value="manual-maintenance" className="bg-gray-900">Too much manual maintenance</option>
                      <option value="lacks-context" className="bg-gray-900">AI lacks business context</option>
                      <option value="integration" className="bg-gray-900">Integration challenges</option>
                      <option value="other" className="bg-gray-900">Other</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-cyan-400 hover:to-blue-500 transition flex items-center justify-center shadow-lg shadow-cyan-500/50"
                >
                  Request Early Access
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </section>

        <footer className="py-8 px-4 bg-black border-t border-white/10">
          <div className="max-w-7xl mx-auto text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Multikor.ai - All rights reserved</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;