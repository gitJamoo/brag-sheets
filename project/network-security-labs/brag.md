---
type: project
title: Network security labs — recon, packet-capture forensics, insecure-protocol detector (ECE/CS 478, Spring 2026)
textbook: Stallings, Cryptography & Network Security 8e
dates: Spring 2026
---

# Network Security Labs (CS 478)

| Work | Detail | Result (tag) |
|---|---|---|
| **Network recon lab** | arp-scan, netdiscover, nmap (`-O -sV -T4 --min-rate`), netcat, amap, p0f on a home lab (Raspberry Pi, Vantiva router, Intel laptop; Kali VM NAT→Bridged); **identified VPN/tunnel via MTU 1440**; **TCP-timestamp uptime** calculation | ~92/100 per vault notes 🟡 (AI-assisted rubric check; confirm official) |
| **Packet-capture forensics (4 pcaps)** | L2TPv3 lifecycle; ESP/IKE/L2TP/GRE → counted **9 VPN sessions (5 IPsec + 3 GRE + 1 inferred L2TP)** using sequential ESP-SPI analysis (19 SPIs ≈ 5 tunnels); WebRTC tunnel-vs-signaling discrimination (excluded ICE-only); Tor relay verification via ExoneraTor | **100/100** per vault notes 🟡 (confirm official grade) |
| **Insecure-protocol detector (pyshark)** | Python script flags **FTP, Telnet, HTTP, SSL/TLS**; extracts plaintext credentials (FTP USER/PASS, Telnet scraping, HTTP Authorization headers); bidirectional port detection + layer-based detection; later enhanced | ✅ concept in notes; script location ❓ |
| **Writing** | Paper cited IANA, MITRE ATT&CK **T1040**, OWASP; fixed git-port justification | ~93–97/100 🟡 |
| **Home-network design** | WireGuard in DMZ, double-NAT three-zone segmentation (public/private/confidential), Curve25519 key pinning, pre-shared keys, UPnP disabled; **fail2ban/iptables hardening** + a bash fail2ban subshell-array bug fix | 🟢 design notes |
| **Security policy coursework** | EISP/ISSP/SysSP taxonomy, OSU Policy 08-015 data classification (Confidential/Sensitive/Unrestricted), SecSDLC, phishing hidden-link inspection (urlscan/VirusTotal) | 🟢 |

**Bullets**
- Performed network reconnaissance and protocol analysis with nmap, arp-scan, netdiscover, p0f, Wireshark/tshark/pyshark; identified VPN tunneling via MTU analysis and computed host uptime from TCP timestamps.
- Classified 9 VPN sessions across mixed IPsec/GRE/L2TP captures using ESP-SPI grouping, and built a pyshark detector for plaintext FTP/Telnet/HTTP credentials.
- Designed a WireGuard-based, three-zone home network (DMZ, double NAT, IoT isolation) and hardened lab hosts with fail2ban/iptables.

**Keywords:** Wireshark, tshark, pyshark/scapy, nmap, Kali Linux, WireGuard, IPsec/IKE/ESP, GRE, L2TP, Tor, WebRTC/STUN, MITRE ATT&CK, OWASP, iptables, fail2ban, network segmentation, security policy.
**Soundbite:** "Raw ESP SPI counts lie — 19 SPIs were really 5 tunnels because of rekeys. Count sessions, not packets."
