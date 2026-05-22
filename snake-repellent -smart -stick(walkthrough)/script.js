/**
 * Snake Repellent Smart Stick - Execution Engine Logic
 * Developed for Swasthika Bhattacharya (Roll No: 25RBAID0002)
 */

// Simulation Timeline Control Variables
let runningTimers = [];

function writeLog(text, colorClass = "text-blue-400") {
    const consoleBox = document.getElementById("consoleTerminal");
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const logItem = document.createElement("p");
    logItem.innerHTML = `<span class="text-slate-600">[${timestamp}]</span> <span class="${colorClass}">> ${text}</span>`;
    consoleBox.appendChild(logItem);
    consoleBox.scrollTop = consoleBox.scrollHeight;
}

function updateStepUI(activePhaseNum) {
    for (let i = 1; i <= 5; i++) {
        const element = document.getElementById(`step-${i}`);
        if (!element) continue;
        element.className = "step-card p-3.5 rounded-xl border flex gap-3 transition-all duration-300 ";
        
        if (i < activePhaseNum) {
            element.classList.add("completed-step");
        } else if (i === activePhaseNum) {
            element.classList.add("active-step");
        } else {
            element.classList.add("pending-step");
        }
    }
}

function resetPresentationModel() {
    // Clear out any running timers
    runningTimers.forEach(clearTimeout);
    runningTimers = [];

    // Reset Interactive Layout Nodes
    document.getElementById("autoplayBtn").disabled = false;
    document.getElementById("autoplayBtn").className = "flex-1 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold font-mono py-2 rounded-lg transition active:scale-95 flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-900/20";
    
    document.getElementById("canvasHeaderPhase").innerText = "Phase I: Active Scanning";
    document.getElementById("canvasHeaderPhase").className = "text-xs font-mono font-bold uppercase tracking-wider text-emerald-400";
    
    // Reset layout elements
    document.getElementById("visionCone").classList.remove("scale-x-100");
    document.getElementById("visionCone").classList.add("scale-x-0");
    document.getElementById("vibrationRings").classList.add("hidden");
    document.getElementById("nodeStick").classList.remove("motor-vibrate");
    document.getElementById("stickMainIcon").className = "fa-solid fa-user-ninja";
    
    // Hide threat target
    const nodeThreat = document.getElementById("nodeThreat");
    nodeThreat.style.opacity = "0";
    nodeThreat.style.transform = "scale(0.75)";
    
    // Base station recovery structures
    document.getElementById("nodeBase").style.opacity = "0.4";
    document.getElementById("rfNetworkPulse").classList.add("hidden");
    document.getElementById("mapCoordinatesCard").classList.add("hidden");
    document.getElementById("sosButtonContainer").classList.add("hidden");

    // Telemetry and output matrices
    document.getElementById("telCam").innerText = "STANDBY";
    document.getElementById("telCam").className = "text-slate-500 font-bold";
    document.getElementById("telMotor").innerText = "OFF (Idle Vector)";
    document.getElementById("telMotor").className = "text-slate-500 font-bold";
    document.getElementById("telLora").innerText = "STANDBY";
    document.getElementById("telLora").className = "text-slate-500 font-bold";
    document.getElementById("telGps").innerText = "UNLOCKED";
    document.getElementById("telGps").className = "text-slate-500 font-bold";

    document.getElementById("hubStatusIcon").className = "w-10 h-10 rounded-full bg-slate-900 border border-slate-800 text-slate-600 flex items-center justify-center mb-2";
    document.getElementById("hubStatusIcon").innerHTML = '<i class="fa-solid fa-lock"></i>';
    document.getElementById("hubStatusTitle").innerText = "Data Pipeline Nominal";
    document.getElementById("hubStatusTitle").className = "text-xs font-bold text-slate-400 tracking-wide";
    document.getElementById("hubStatusDesc").innerText = "Ecosystem checks active. Monitoring radio link status fields.";
    
    updateStepUI(1);
    document.getElementById("consoleTerminal").innerHTML = "";
    writeLog("Ecosystem dashboard reset completed successfully. Standby model ready.", "text-slate-400");
}

function runEcosystemWalkthrough() {
    resetPresentationModel();
    
    // Lock autoplay execution triggers
    const autoplayBtn = document.getElementById("autoplayBtn");
    autoplayBtn.disabled = true;
    autoplayBtn.className = "flex-1 bg-slate-800 text-slate-600 border border-slate-800 text-xs font-bold font-mono py-2 rounded-lg cursor-not-allowed flex items-center justify-center gap-1.5";
    
    // Phase 1 - Active Walking Patrol
    updateStepUI(1);
    writeLog("Walkthrough simulation cycle started automatically.");
    writeLog("Farmer navigating field perimeter. ESP32-CAM active.", "text-emerald-400");
    
    document.getElementById("telCam").innerText = "ACTIVE (0-Lux)";
    document.getElementById("telCam").className = "text-emerald-400 font-bold";
    document.getElementById("visionCone").classList.remove("scale-x-0");
    document.getElementById("visionCone").classList.add("scale-x-100");

    // Phase 2 - Threat Tracking Detection
    runningTimers.push(setTimeout(() => {
        updateStepUI(2);
        document.getElementById("canvasHeaderPhase").innerText = "Phase II: Threat Detection";
        document.getElementById("canvasHeaderPhase").className = "text-xs font-mono font-bold uppercase tracking-wider text-amber-500";
        
        const nodeThreat = document.getElementById("nodeThreat");
        nodeThreat.style.opacity = "1";
        nodeThreat.style.transform = "scale(1)";
        
        writeLog("Proximity trigger fired. Edge AI model analyzing target morphology...", "text-amber-400");
        writeLog("[ALERT] Cryptic crawling anomaly flagged close to smart stick framework!", "text-red-400");
    }, 3000));

    // Phase 3 - Mechanical ERM Dispersal Fields
    runningTimers.push(setTimeout(() => {
        updateStepUI(3);
        document.getElementById("canvasHeaderPhase").innerText = "Phase III: Repellent Active";
        document.getElementById("canvasHeaderPhase").className = "text-xs font-mono font-bold uppercase tracking-wider text-yellow-500";
        
        document.getElementById("nodeStick").classList.add("motor-vibrate");
        document.getElementById("vibrationRings").classList.remove("hidden");
        
        document.getElementById("telMotor").innerText = "HIGH FREQ PULSE";
        document.getElementById("telMotor").className = "text-yellow-500 font-bold";

        writeLog("ERM Vibration Motor engaged. Launching seismic kinetic countermeasures.", "text-yellow-400");
        writeLog("Propagating ground-borne surface waves to allow reptile to scatter away.", "text-yellow-400");
    }, 6500));

    // Phase 4 - Standoff Hold & Manual Action Generation Request
    runningTimers.push(setTimeout(() => {
        updateStepUI(4);
        document.getElementById("canvasHeaderPhase").innerText = "Phase IV: Action Required";
        document.getElementById("canvasHeaderPhase").className = "text-xs font-mono font-bold uppercase tracking-wider text-red-500 animate-pulse";
        
        document.getElementById("nodeStick").classList.remove("motor-vibrate");
        document.getElementById("vibrationRings").classList.add("hidden");
        
        // Expose critical action item overlay triggers requested
        document.getElementById("sosButtonContainer").classList.remove("hidden");

        writeLog("Countermeasure threshold reached. Reptile target fails to detour (Stationary threat).", "text-red-400");
        writeLog("Autoplay paused. Click 'SOS ALERT TO FAMILY (SEND)' in the header panel corner now.", "text-slate-200 font-bold");
    }, 10500));
}

function sendFamilyAlertPacket() {
    // Hide processing target toggle layout handles instantly
    document.getElementById("sosButtonContainer").classList.add("hidden");
    
    document.getElementById("canvasHeaderPhase").innerText = "Phase IV: Transmitting SOS Alert";
    document.getElementById("canvasHeaderPhase").className = "text-xs font-mono font-bold uppercase tracking-wider text-blue-400";
    
    document.getElementById("telLora").innerText = "TX CODES ACTIVE";
    document.getElementById("telLora").className = "text-blue-400 font-bold";
    document.getElementById("telGps").innerText = "GPS LOCK FIXED";
    document.getElementById("telGps").className = "text-emerald-400 font-bold";

    writeLog("Manual dispatch override accepted.", "text-blue-400");
    writeLog("GPS Neo-6m coordinates calculated: Lat 17.3850, Lon 78.4867", "text-blue-400");
    writeLog("LoRa SX1262 bypassing local network gaps. Firing direct radio link packets...", "text-blue-400");

    // Audio Frequency feedback simulation chirp logic
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(880, audioCtx.currentTime);
        gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime); 
        osc.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.4);
    } catch (e) { /* Browser block protection fallback */ }

    // Phase 5 - Data Pipeline Delivery Confirmed & Map Card Render
    setTimeout(() => {
        updateStepUI(5);
        document.getElementById("canvasHeaderPhase").innerText = "Phase V: Farmhouse Alert Received";
        document.getElementById("canvasHeaderPhase").className = "text-xs font-mono font-bold uppercase tracking-wider text-emerald-400";

        document.getElementById("nodeBase").style.opacity = "1";
        document.getElementById("rfNetworkPulse").classList.remove("hidden");
        document.getElementById("mapCoordinatesCard").classList.remove("hidden");

        // Update Hub Status Visual Dashboard Blocks
        document.getElementById("hubStatusIcon").className = "w-10 h-10 rounded-full bg-emerald-950/60 border border-emerald-500 text-emerald-400 flex items-center justify-center mb-2 animate-bounce";
        document.getElementById("hubStatusIcon").innerHTML = '<i class="fa-solid fa-bell shadow-glow"></i>';
        document.getElementById("hubStatusTitle").innerText = "CRITICAL DISPATCH COMPLETED";
        document.getElementById("hubStatusTitle").className = "text-xs font-bold text-emerald-400 tracking-wide";
        document.getElementById("hubStatusDesc").innerText = "LoRa payload data successfully parsed at remote gateway. Map pin established.";

        writeLog("Packet receipt acknowledged by remote base gateway module.", "text-emerald-400");
        writeLog("Ecosystem walkthrough presentation sequence completed successfully.", "text-emerald-400 font-bold");

        // Re-enable and reset presentation autoplay option configuration fields
        const autoplayBtn = document.getElementById("autoplayBtn");
        autoplayBtn.disabled = false;
        autoplayBtn.className = "flex-1 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold font-mono py-2 rounded-lg transition active:scale-95 flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-900/20";
        autoplayBtn.innerHTML = '<i class="fa-solid fa-rotate-right"></i> Restart Presentation';
    }, 2500);
}