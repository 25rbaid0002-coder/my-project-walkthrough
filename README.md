# 🐍 Snake Repellent Smart Stick - System Ecosystem Walkthrough

🚀 **An Autonomous Off-Grid Safety Framework & Digital Twin Simulation for Smart Agriculture**

---

## 📌 Project Overview
Farmers conducting nighttime field patrols in remote areas face life-threatening hazards from nocturnal reptile encounters. To make matters worse, severe cellular network dead zones mean that if an emergency happens, they cannot call for help or share their location coordinates.

This project introduces an autonomous safety ecosystem built right into a smart stick. It features integrated night patrolling illumination to solve zero-visibility issues, paired with intelligent computer vision edge sensors to detect crawling threats and trigger localized countermeasures, alongside an off-grid long-range RF communication backup network.

---

## ⚙️ Core System Architecture Logic
This repository hosts a high-fidelity **functional walkthrough dashboard** designed over an intense 48-hour sprint. It acts as a digital twin to map out data handling constraints, RF propagation steps, and sensor trigger parameters before finalizing physical hardware integration.

The final physical system logic flows across 5 distinct phases:
1. **Phase I (Continuous Scanning & Light):** Integrated high-visibility illumination maps the terrain while an ESP32-CAM scans the localized perimeter.
2. **Phase II (Threat Detection):** Edge AI models process crawling morphology patterns to instantly isolate reptile anomalies.
3. **Phase III (Mechanical Repellent):** An Eccentric Rotating Mass (ERM) Vibration Motor generates localized mechanical pulses through the soil to encourage the threat to detour away safely.
4. **Phase IV (SOS Broadcast):** If a threat remains stationary, a manual panic switch overrides cellular gaps by calculating GPS Neo-6m coordinates.
5. **Phase V (Farmhouse Alert):** A LoRa SX1262 long-range transceiver broadcasts a direct radio packet up to 10km away, rendering a live emergency pin on the farmhouse base station receiver unit app.

---

## 🛠️ Technical Hardware Stack Model
* **Core Compute & Vision:** ESP32-CAM Module
* **Off-Grid RF Network Link:** LoRa SX1262 Transceiver
* **Location Tracking Parser:** GPS Neo-6m Module
* **Physical Actuator:** ERM Vibration Motor
* **Illumination Module:** High-Visibility Night Patrolling LEDs
* **Frontend Web Architecture:** HTML5, Tailwind CSS, JavaScript (ES6 Execution Engine)

---
