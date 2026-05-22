# 🐍 Snake Repellent Smart Stick 

🚀 **An Autonomous Off-Grid Safety Framework & Digital Twin Simulation for Smart Agriculture**

---

## 📌 Project Overview
 PROBLEM STATEMENT 
_______________________________

► Zero Visibility: Total darkness in fields makes it extremely hard to navigate or spot hazards during night patrolling. 

► Life Risk: Farmers face life-threatening snake bites because they cannot see where they are stepping.
 
► Communication Gaps: Lack of reliable communication in remote areas prevents immediate assistance.

## PROJECT OBJECTIVES 
__________________________________

► Design a smart system that can detect the presence of a snake near the farmer. 

► Prevent snake–human contact by identifying the snake before it approaches the 
    farmer. 

► Generate specific frequency waves/vibrations that safely repel the snake and make it move away. 

► Implement an SOS emergency feature for quick help during dangerous situations.
 
► Enable location sharing so that family members or rescue teams can track the farmer in emergencies.
 
► Create a portable, easy-to-use, and low-power device suitable for agricultural fields.

## PROPOSED SOLUTION 
__________________________________________
The proposed solution is the Snake Repellent Smart Stick , a handheld safety device specially designed for farmers. When the stick is switched ON, it give vibration  that travel on the ground and scare the reptiles animals like snakes. 
Snakes sense these vibration as danger and naturally move away from the area . The stick also includes an LED light to help farmers see clearly at night. making the device suitable for rural areas. This solution is safe, easy to use, and does not harm snakes or the environment.

---
## Hardware components 
*panic button (sos alert)
*GPS neo-6m(location)
*loraSX1262
(communication)
*battery(power supply)
*ERM motor(vibration)
*IR LED(night illumination)
*ESP32 camera(main microcontroller and capture image 
*AI module(detection)

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
## work flow
## 1.   Power ON the Stick
Battery supplies power to all components.
LED torch and IR LED turn ON for night visibility.

## 2.   Monitoring
ESP32-CAM + IR LED  captures image.
AI module   analyses   the image frames continuously.

## 3.  Snake Detection
If no snake is detected → system keeps scanning.
If snake is detected → system moves to alert mode.

## 4.  Snake Repelling Action
ERM motor starts vibrating.
Ground vibrations   scare the snake and make it move away.

 ## 5.  Location tracking 
GPS NEO-6M captures current latitude and longitude.

## 6.   Alert Transmission
SX1262 sends alert message with location to base station/home receiver.

## 7.   Emergency Mode (Panic Button)
If panic button is pressed →
Immediate alert + GPS location sent.

---
