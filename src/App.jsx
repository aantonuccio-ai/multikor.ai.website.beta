import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Zap, Brain, TrendingUp, Menu, X, Database, Network, Cpu, Shield, Activity } from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    interest: ''
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
        alert('Thank you! We will be in touch soon.');
        setFormData({
          name: '',
          email: '',
          company: '',
          role: '',
          interest: ''
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
    <div className="relative min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <style>{`
        @keyframes pulse-glow {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }
      `}</style>

      <div className="fixed inset-0 w-full h-screen z-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-900/40 to-gray-900/60" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20px 20px, rgba(59, 130, 246, 0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10">
        <nav className="fixed top-0 w-full backdrop-blur-md bg-black/30 border-b border-blue-500/20 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center space-x-3">
                <img
                  src="/multikor-logo.png"
                  alt="Multikor.ai Logo"
                  className="h-10 w-10 animate-pulse-glow"
                />
                <a href="/" className="cursor-pointer">
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Multikor.ai
                  </span>
                </a>
              </div>

              <div className="hidden md:flex items-center space-x-8">
                <a href="#concept" className="text-gray-300 hover:text-blue-400 transition">Concept</a>
                <a href="#architecture" className="text-gray-300 hover:text-blue-400 transition">Architecture</a>
                <a href="#methodology" className="text-gray-300 hover:text-blue-400 transition">Methodology</a>
                <a href="#metrics" className="text-gray-300 hover:text-blue-400 transition">Metrics</a>
                <a href="#contact" className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-lg hover:from-blue-400 hover:to-cyan-400 transition">
                  Get in Touch
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
            <div className="md:hidden backdrop-blur-md bg-black/90 border-t border-blue-500/20">
              <div className="px-4 pt-2 pb-3 space-y-1">
                <a href="#concept" className="block px-3 py-2 text-gray-300 hover:text-blue-400 hover:bg-white/10 rounded" onClick={() => setMobileMenuOpen(false)}>Concept</a>
                <a href="#architecture" className="block px-3 py-2 text-gray-300 hover:text-blue-400 hover:bg-white/10 rounded" onClick={() => setMobileMenuOpen(false)}>Architecture</a>
                <a href="#methodology" className="block px-3 py-2 text-gray-300 hover:text-blue-400 hover:bg-white/10 rounded" onClick={() => setMobileMenuOpen(false)}>Methodology</a>
                <a href="#metrics" className="block px-3 py-2 text-gray-300 hover:text-blue-400 hover:bg-white/10 rounded" onClick={() => setMobileMenuOpen(false)}>Metrics</a>
                <a href="#contact" className="block px-3 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg text-center mt-2" onClick={() => setMobileMenuOpen(false)}>
                  Get in Touch
                </a>
              </div>
            </div>
          )}
        </nav>

        <section className="min-h-screen flex items-center justify-center px-4 pt-20">
          <div className="max-w-5xl w-full text-center">
            <div className="text-white space-y-8">
              <div className="flex justify-center mb-8">
                <img
                  src="/multikor-logo.png"
                  alt="Multikor.ai"
                  className="h-32 w-32 animate-float drop-shadow-[0_0_40px_rgba(59,130,246,0.6)]"
                />
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                  Multikor.ai
                </span>
              </h1>

              <p className="text-xl md:text-2xl lg:text-3xl text-blue-200 leading-relaxed max-w-4xl mx-auto font-light">
                Cloud-Native Agentic AI for Enterprise Infrastructure
              </p>

              <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mt-6">
                Autonomous AI-powered orchestration derived from Directed Acyclic Graph (DAG) architecture,
                operating with Domain Language Models (DLM) as proprietary sources-of-truth at the neural networking level
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <a
                  href="#concept"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg hover:from-blue-400 hover:to-cyan-400 transition shadow-lg shadow-blue-500/50"
                >
                  Explore the Technology
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-white/10 backdrop-blur-sm border-2 border-blue-400/30 rounded-lg hover:bg-white/20 hover:border-blue-400/50 transition"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="concept" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black/40 via-gray-900/60 to-black/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Multikor.ai Concept
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Enterprise-grade AI orchestration at the Infrastructure as a Service (IaaS) level
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-sm p-8 rounded-xl border border-blue-500/30 hover:border-blue-500/50 transition">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-blue-500/50">
                  <Network className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Cloud-Native & Agnostic</h3>
                <p className="text-gray-300 leading-relaxed">
                  Solution is a cloud-native and cloud-agnostic Agentic AI for enterprise utilization
                  at the Infrastructure as a Service (IaaS) Organizational level
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm p-8 rounded-xl border border-purple-500/30 hover:border-purple-500/50 transition">
                <div className="bg-gradient-to-br from-purple-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-purple-500/50">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">DAG Orchestration</h3>
                <p className="text-gray-300 leading-relaxed">
                  The autonomous and agentic AI-powered solution is derived from Directed Acyclic Graph (DAG)
                  orchestration based upon Domain Language Models (DLM), as proprietary sources-of-truth,
                  operating at the neural networking level
                </p>
              </div>

              <div className="bg-gradient-to-br from-cyan-900/30 to-teal-900/30 backdrop-blur-sm p-8 rounded-xl border border-cyan-500/30 hover:border-cyan-500/50 transition">
                <div className="bg-gradient-to-br from-cyan-500 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/50">
                  <Cpu className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Inferenced Code Generation</h3>
                <p className="text-gray-300 leading-relaxed">
                  The DAG creates domain-allocated, user-centric inferenced code generation for a ground truth
                  source graph to be utilized as scaffolding for the Business Development Unit (BDU) Large
                  Language Model (LLM) inferenced pipeline
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 backdrop-blur-sm p-8 rounded-xl border border-green-500/30 hover:border-green-500/50 transition">
                <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-green-500/50">
                  <Database className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Seamless Integration</h3>
                <p className="text-gray-300 leading-relaxed">
                  Multikor.ai seamlessly integrates into cloud structure and database configurations with
                  source validation and confidence variable controls for a CI/CD enterprise knowledge pipeline
                  which evolves in scalability and elasticity
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="architecture" className="py-24 px-4 sm:px-6 lg:px-8 bg-black/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  High Level Architecture
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Enterprise-grade infrastructure designed for scalability, security, and performance
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-blue-900/30 backdrop-blur-sm rounded-2xl border border-blue-500/30 p-8 shadow-2xl">
              <img
                src="/architecture-diagram.png"
                alt="Multikor.ai Architecture Diagram"
                className="w-full rounded-lg shadow-xl"
              />
              <p className="text-center text-gray-400 mt-4 text-sm">
                Proprietary architecture diagram - For authorized viewing only
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-sm p-6 rounded-xl border border-blue-500/30">
                <Shield className="h-10 w-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Secure by Design</h3>
                <p className="text-gray-300">
                  Built with enterprise-grade security protocols and compliance standards
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30">
                <Activity className="h-10 w-10 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Real-Time Processing</h3>
                <p className="text-gray-300">
                  Low-latency data processing with continuous monitoring and optimization
                </p>
              </div>
              <div className="bg-gradient-to-br from-cyan-900/20 to-teal-900/20 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/30">
                <TrendingUp className="h-10 w-10 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Scalable Infrastructure</h3>
                <p className="text-gray-300">
                  Elastic architecture that grows with your business needs
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="methodology" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black/40 via-gray-900/60 to-black/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Phased Approach Method</h2>
              <p className="text-xl text-gray-300">
                A systematic three-phase implementation strategy for enterprise AI deployment
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 backdrop-blur-sm rounded-xl border border-blue-500/40 p-8 hover:border-blue-400/60 transition">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white font-bold text-2xl w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">Phase 1: Ingest & Allocate</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                        <span>Ingest raw data</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                        <span>Catalog and Orchestrate Tags and Vertices</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                        <span>Validation & Verification Automated Workflow</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                        <span>Build Knowledge Lake</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                        <span>Validation & Reconciliation Automated Workflow</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 backdrop-blur-sm rounded-xl border border-purple-500/40 p-8 hover:border-purple-400/60 transition">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-purple-500 to-blue-500 text-white font-bold text-2xl w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">Phase 2: Source & Vector Graphing</h3>
                    <p className="text-gray-300 mb-3 font-semibold">Metadata Rigged-Confinement Allocation</p>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                        <span>DAG Allocation & Tagging</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                        <span>Validation & Reconciliation Automated Workflow</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                        <span>Orchestrate Domain Dependency Indices</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                        <span>Confidence and Accuracy Automated Workflow</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                        <span>Attribute and Index Resource Allocation Graph (RAG)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                        <span>Validation & Confirmation of Rigged-Confined Allocation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                        <span>Retrieval-Augmented Generation (RAG)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                        <span>Confidence Validation and Variable Reconciliation of RAG</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 backdrop-blur-sm rounded-xl border border-green-500/40 p-8 hover:border-green-400/60 transition">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-green-500 to-emerald-500 text-white font-bold text-2xl w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">Phase 3: Automated LLM Generation CI/CD Pipeline</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                        <span>Automated LLM Generation for BDU allocation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                        <span>Confidence Validation and Variable Reconciliation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                        <span>Automated LLM Generation for BDU with Inferenced-Rigged Allocation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                        <span>Validation & Confirmation of Generative BDU LLMs</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                        <span>Integrate with AI Mesh and Service Templates for Deployment</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                        <span>Run Unit/Integration/Threshold/Security Automated Testing</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                        <span>Confidence Validation and Interoperability Automated Workflow</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                        <span>Staging → DEV → QA → PRD Phased Deployment and Acceptance Testing</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                        <span>Automated CI/CD Pipeline Event Workflows Initiated</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="metrics" className="py-24 px-4 sm:px-6 lg:px-8 bg-black/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Derived Metrics</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive monitoring and analytics for enterprise AI performance
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-sm p-6 rounded-xl border border-blue-500/30 hover:border-blue-400/50 transition">
                <Zap className="h-10 w-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Data Quality and Telemetry</h3>
                <p className="text-gray-300 text-sm">Real-time monitoring of data integrity and system performance</p>
              </div>

              <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30 hover:border-purple-400/50 transition">
                <Brain className="h-10 w-10 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Model Performance</h3>
                <p className="text-gray-300 text-sm">Continuous evaluation of AI model accuracy and efficiency</p>
              </div>

              <div className="bg-gradient-to-br from-cyan-900/30 to-teal-900/30 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/30 hover:border-cyan-400/50 transition">
                <TrendingUp className="h-10 w-10 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Operational Efficiency</h3>
                <p className="text-gray-300 text-sm">Track and optimize operational workflows and resource utilization</p>
              </div>

              <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 backdrop-blur-sm p-6 rounded-xl border border-green-500/30 hover:border-green-400/50 transition">
                <CheckCircle className="h-10 w-10 text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Acceptance/Launch Rates</h3>
                <p className="text-gray-300 text-sm">Measure deployment success and user adoption metrics</p>
              </div>

              <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 backdrop-blur-sm p-6 rounded-xl border border-orange-500/30 hover:border-orange-400/50 transition">
                <Activity className="h-10 w-10 text-orange-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Confidence Variability</h3>
                <p className="text-gray-300 text-sm">Monitor prediction confidence and model reliability</p>
              </div>

              <div className="bg-gradient-to-br from-pink-900/30 to-purple-900/30 backdrop-blur-sm p-6 rounded-xl border border-pink-500/30 hover:border-pink-400/50 transition">
                <Shield className="h-10 w-10 text-pink-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Metadata Analysis Verification</h3>
                <p className="text-gray-300 text-sm">Ensure data accuracy and metadata consistency</p>
              </div>

              <div className="bg-gradient-to-br from-indigo-900/30 to-blue-900/30 backdrop-blur-sm p-6 rounded-xl border border-indigo-500/30 hover:border-indigo-400/50 transition">
                <Database className="h-10 w-10 text-indigo-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">BDU Impact Metrics per I/O</h3>
                <p className="text-gray-300 text-sm">Analyze business development unit performance and impact</p>
              </div>

              <div className="bg-gradient-to-br from-violet-900/30 to-purple-900/30 backdrop-blur-sm p-6 rounded-xl border border-violet-500/30 hover:border-violet-400/50 transition">
                <TrendingUp className="h-10 w-10 text-violet-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">BDU Overall Performance</h3>
                <p className="text-gray-300 text-sm">Comprehensive cost tracking and performance optimization</p>
              </div>

              <div className="bg-gradient-to-br from-teal-900/30 to-cyan-900/30 backdrop-blur-sm p-6 rounded-xl border border-teal-500/30 hover:border-teal-400/50 transition">
                <Shield className="h-10 w-10 text-teal-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Governance & Compliance</h3>
                <p className="text-gray-300 text-sm">Ensure adherence to regulatory and compliance standards</p>
              </div>

              <div className="bg-gradient-to-br from-emerald-900/30 to-green-900/30 backdrop-blur-sm p-6 rounded-xl border border-emerald-500/30 hover:border-emerald-400/50 transition md:col-span-2 lg:col-span-1">
                <Cpu className="h-10 w-10 text-emerald-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Refactoring Analysis</h3>
                <p className="text-gray-300 text-sm">Automated analysis and optimization recommendations</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 via-cyan-900 to-blue-900">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get in Touch</h2>
              <p className="text-xl text-gray-200">
                Interested in learning more about Multikor.ai? Contact us to discuss how our enterprise AI platform can transform your infrastructure.
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
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
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
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
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
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
                      placeholder="Your Company"
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
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
                      placeholder="CTO, Engineering Director, etc."
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-white mb-2">Area of Interest *</label>
                  <select
                    name="interest"
                    required
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
                  >
                    <option value="" className="bg-gray-900">Select an option</option>
                    <option value="architecture" className="bg-gray-900">Architecture & Infrastructure</option>
                    <option value="implementation" className="bg-gray-900">Implementation & Deployment</option>
                    <option value="partnership" className="bg-gray-900">Partnership Opportunities</option>
                    <option value="demo" className="bg-gray-900">Request a Demo</option>
                    <option value="other" className="bg-gray-900">Other</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-4 rounded-lg font-semibold text-lg hover:from-blue-400 hover:to-cyan-400 transition flex items-center justify-center shadow-lg shadow-blue-500/50"
                >
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </section>

        <footer className="py-8 px-4 bg-black border-t border-blue-500/20">
          <div className="max-w-7xl mx-auto text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Multikor.ai - All rights reserved</p>
            <p className="text-sm mt-2 text-gray-500">Enterprise AI Infrastructure Solutions</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
