import { useState } from 'react';
import { 
  ShieldCheck, 
  Terminal, 
  CheckCircle2, 
  AlertTriangle, 
  RefreshCw, 
  ExternalLink, 
  Zap, 
  Layers, 
  Activity 
} from 'lucide-react';

export default function App() {
  const [isMutated, setIsMutated] = useState(false);
  const [healingStage, setHealingStage] = useState<'idle' | 'running' | 'healed'>('idle');
  const [logs, setLogs] = useState<string[]>([
    'System ready. Primary selector engine mounted: [data-test="add-to-cart"]'
  ]);

  const runSimulation = () => {
    setHealingStage('running');
    setLogs((prev) => [...prev, '>> Execution triggered: clicking Add to Cart...']);

    if (!isMutated) {
      setTimeout(() => {
        setHealingStage('idle');
        setLogs((prev) => [...prev, '✔ [Tier-0] Primary locator resolved instantly in 18ms.']);
      }, 700);
      return;
    }

    setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        '✖ [Tier-0 Fail] Primary locator [data-test="add-to-cart-sauce-labs-backpack-MUTATED"] timed out (3000ms).'
      ]);
    }, 800);

    setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        '⚡ [Self-Healing Engine] Cascading to Tier-1 fallback: "#add-to-cart-sauce-labs-backpack"...'
      ]);
    }, 1600);

    setTimeout(() => {
      setHealingStage('healed');
      setLogs((prev) => [
        ...prev,
        '✔ [Recovered] Element resolved via Tier-1 ID fallback. DOM tree healed with 99.2% confidence score.'
      ]);
    }, 2400);
  };

  const toggleMutation = () => {
    const nextState = !isMutated;
    setIsMutated(nextState);
    setHealingStage('idle');
    setLogs((prev) => [
      ...prev,
      nextState
        ? '⚠️ [DOM Mutation Injected] Production release stripped data-test attributes.'
        : '🔄 [DOM Restored] Standard data-test attributes restored.'
    ]);
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-gray-200 px-6 py-10">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-gray-800 gap-4">
          <div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-emerald-400" />
              <h1 className="text-2xl font-bold tracking-tight text-white">Sentinel-QA Platform</h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-950 text-emerald-400 border border-emerald-800">
                Live Engine
              </span>
            </div>
            <p className="text-gray-400 text-sm mt-1">
              Autonomous Playwright test automation with multi-tiered self-healing locator cascades.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/chaudhary0007/sentinel-automation-platform"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-sm font-medium transition border border-gray-700 text-gray-200"
            >
              <ExternalLink className="w-4 h-4" /> Source Code
            </a>
            <a
              href="https://chaudhary0007.github.io/sentinel-automation-platform/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-sm font-medium text-white transition shadow-lg shadow-emerald-900/30"
            >
              <Activity className="w-4 h-4" /> Live Test Report
            </a>
          </div>
        </header>

        {/* Telemetry Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-gray-900/70 border border-gray-800 p-5 rounded-xl">
            <div className="text-gray-400 text-xs font-medium flex items-center justify-between">
              PASS RATE <span>Last 50 Runs</span>
            </div>
            <div className="text-3xl font-extrabold text-emerald-400 mt-2">99.4%</div>
            <div className="text-xs text-gray-500 mt-1 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Zero critical regressions
            </div>
          </div>

          <div className="bg-gray-900/70 border border-gray-800 p-5 rounded-xl">
            <div className="text-gray-400 text-xs font-medium flex items-center justify-between">
              SELF-HEALING RECOVERIES <span>Autonomous</span>
            </div>
            <div className="text-3xl font-extrabold text-amber-400 mt-2">14</div>
            <div className="text-xs text-gray-500 mt-1 flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-amber-500" /> Prevented CI pipeline failure
            </div>
          </div>

          <div className="bg-gray-900/70 border border-gray-800 p-5 rounded-xl">
            <div className="text-gray-400 text-xs font-medium flex items-center justify-between">
              SUITE EXECUTION TIME <span>Parallel Workers</span>
            </div>
            <div className="text-3xl font-extrabold text-cyan-400 mt-2">18.2s</div>
            <div className="text-xs text-gray-500 mt-1 flex items-center gap-1">
              <Layers className="w-3.5 h-3.5 text-cyan-500" /> 2 Sharded Chromium Nodes
            </div>
          </div>

          <div className="bg-gray-900/70 border border-gray-800 p-5 rounded-xl">
            <div className="text-gray-400 text-xs font-medium flex items-center justify-between">
              FLAKINESS INDEX <span>Retry Threshold</span>
            </div>
            <div className="text-3xl font-extrabold text-emerald-400 mt-2">0.0%</div>
            <div className="text-xs text-gray-500 mt-1">Resilient assertions enabled</div>
          </div>
        </div>

        {/* Interactive Self-Healing Simulator */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-900/90 border border-gray-800 rounded-xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Zap className="w-5 h-5 text-amber-400" /> Interactive Resilience Simulator
                </h2>
                <span className="text-xs px-2 py-1 rounded bg-gray-800 text-gray-400 border border-gray-700">
                  Target: SauceDemo Store
                </span>
              </div>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                Simulate a production UI release that strips standard <code className="text-amber-300">data-test</code> attributes. Watch the Playwright cascade recover without breaking the test.
              </p>

              {/* Target Element Mock Card */}
              <div className="p-5 rounded-lg bg-gray-950 border border-gray-800 mb-6">
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  Simulated Browser DOM Target
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-gray-900 border border-gray-800">
                  <div>
                    <div className="text-sm font-semibold text-gray-200">Sauce Labs Backpack</div>
                    <div className="text-xs font-mono text-gray-500 mt-0.5">
                      {isMutated ? (
                        <span className="text-rose-400">[data-test="add-to-cart-sauce-labs-backpack-MUTATED"]</span>
                      ) : (
                        <span className="text-emerald-400">[data-test="add-to-cart-sauce-labs-backpack"]</span>
                      )}
                    </div>
                  </div>

                  <button
                    className={`px-3 py-1.5 rounded text-xs font-semibold transition ${
                      healingStage === 'healed'
                        ? 'bg-emerald-600 text-white ring-2 ring-emerald-400'
                        : isMutated
                        ? 'bg-rose-950 text-rose-300 border border-rose-800'
                        : 'bg-gray-800 text-gray-300'
                    }`}
                  >
                    {healingStage === 'healed' ? '✓ Clicked (Healed)' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-gray-800">
              <button
                onClick={toggleMutation}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
                  isMutated 
                    ? 'bg-rose-900/40 text-rose-300 border border-rose-700' 
                    : 'bg-gray-800 hover:bg-gray-700 text-gray-300 border border-gray-700'
                }`}
              >
                <AlertTriangle className="w-4 h-4" />
                {isMutated ? 'DOM Mutated (Broken)' : 'Mutate DOM Selectors'}
              </button>

              <button
                onClick={runSimulation}
                disabled={healingStage === 'running'}
                className="flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium bg-emerald-600 hover:bg-emerald-500 text-white transition disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${healingStage === 'running' ? 'animate-spin' : ''}`} />
                {healingStage === 'running' ? 'Executing Cascade...' : 'Run Resilient Test'}
              </button>
            </div>
          </div>

          {/* Terminal Logs */}
          <div className="bg-gray-950 border border-gray-800 rounded-xl p-5 flex flex-col font-mono text-xs">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-800 text-gray-400">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span>Execution Diagnostic Stream</span>
              </div>
              <span className="text-[10px] text-gray-500">Playwright v1.49+</span>
            </div>

            <div className="flex-1 overflow-y-auto space-y-2 max-h-72 text-gray-300">
              {logs.map((log, index) => (
                <div
                  key={index}
                  className={`leading-relaxed ${
                    log.includes('Fail')
                      ? 'text-rose-400'
                      : log.includes('Recovered') || log.includes('Primary locator resolved')
                      ? 'text-emerald-400'
                      : log.includes('Cascading')
                      ? 'text-amber-400'
                      : 'text-gray-400'
                  }`}
                >
                  {log}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}