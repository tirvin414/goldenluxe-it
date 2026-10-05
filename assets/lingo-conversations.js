/*
  GoldenLUXE Lingo Lab — "Talk Tech" conversations.
  Each conversation: id, title, l (level 1–3), setting, roles (name → job title),
  lines: [{ w: speaker, s: what they say, p: plain-English translation }],
  check: [{ q: question, o: [options], a: index of correct option, why: explanation }].

  Jargon markup inside s: [[Term]] or [[shown words|Term]] links to a glossary term
  (Term must match a term's name in lingo-terms.js, ignoring case).
*/
window.LINGO_CONVERSATIONS = [

  /* =================== BEGINNER =================== */
  {
    id: "helpdesk-internet", l: 1, title: "\"My internet is down\"", setting: "Help desk phone call",
    roles: { Dana: "Help desk technician (Tier 1)", Marcus: "Office manager" },
    lines: [
      { w: "Marcus", s: "Hi, my internet's completely down. Nothing loads.", p: "I can't reach any websites." },
      { w: "Dana", s: "Sorry about that! I'll open a [[ticket]] so we can track it. Are you on [[Wi-Fi|Access Point (AP)]] or plugged in with [[Ethernet]]?", p: "I'm logging your problem in our system. Is your computer connected wirelessly or by cable?" },
      { w: "Marcus", s: "Wi-Fi. And it says I'm connected.", p: "Wireless, and the computer thinks it's connected." },
      { w: "Dana", s: "Okay. Can you check you're on the right [[SSID]]? It should be 'Corp-Staff', not 'Corp-Guest'.", p: "Make sure you joined the correct Wi-Fi network name." },
      { w: "Marcus", s: "Oh — it's on Guest.", p: "I'm on the wrong network." },
      { w: "Dana", s: "That's the issue. Guest is isolated from internal systems. Switch to Staff and sign in with your normal password and [[MFA|MFA / 2FA]].", p: "The guest network is walled off on purpose. Join the staff network and log in, approving the code on your phone." },
      { w: "Marcus", s: "Done. Email's loading now, but our shared drive still won't open.", p: "Email works, but the shared files don't." },
      { w: "Dana", s: "Let's [[reboot|Boot / Reboot]] so it picks up a fresh [[IP address]] and maps the drive again. If it's still down, I'll [[escalate|Escalation]] to Tier 2.", p: "Restart so the computer gets correct network settings. If that doesn't fix it, I'll pass it to a more senior technician." },
      { w: "Marcus", s: "Rebooted… and it works! Thank you.", p: "Fixed!" },
      { w: "Dana", s: "Great! I'll note the fix and close the ticket. Have a good day.", p: "I'm recording what fixed it so others can learn from it, and marking it resolved." }
    ],
    check: [
      { q: "What was the actual cause of the problem?", o: ["The internet provider was down", "Marcus was on the guest Wi-Fi network", "His password expired", "The router needed replacing"], a: 1, why: "He was connected to the Guest SSID, which is isolated from internal systems." },
      { q: "What does 'escalate to Tier 2' mean?", o: ["Restart the computer twice", "Hand the issue to more experienced support staff", "Upgrade the internet plan", "Close the ticket"], a: 1, why: "Escalation passes a problem to a higher support tier." }
    ]
  },
  {
    id: "onboarding-day1", l: 1, title: "First-day IT onboarding", setting: "New-hire setup at the IT desk",
    roles: { Priya: "IT support specialist", Jordan: "New employee" },
    lines: [
      { w: "Priya", s: "Welcome! Here's your laptop. First, let's get your accounts set up — part of [[onboarding|Onboarding / Offboarding]].", p: "Let's set up everything you need as a new hire." },
      { w: "Priya", s: "We use [[SSO]], so one login gets you into email, Teams and the HR portal.", p: "You only need one username and password for all our work apps." },
      { w: "Jordan", s: "Nice. Do I need one of those code apps?", p: "Do I need an authenticator app?" },
      { w: "Priya", s: "Yes — we require [[MFA|MFA / 2FA]]. Install Microsoft Authenticator and scan this QR code. Even better, set up a [[passkey]] so you can sign in with your fingerprint.", p: "You'll prove it's you with a second step on your phone. A passkey is even safer and easier." },
      { w: "Jordan", s: "Got it. What about all my other passwords?", p: "How do I remember everything else?" },
      { w: "Priya", s: "Use the company [[password manager]]. Never reuse passwords — that's how [[credential stuffing]] works.", p: "Store unique passwords in the secure vault. Reusing them lets criminals use leaked passwords from other sites." },
      { w: "Priya", s: "When you work from home, connect to the [[VPN]] before opening the file shares.", p: "At home, turn on the secure tunnel to reach office files." },
      { w: "Jordan", s: "And if I get a weird email?", p: "What if I get a suspicious message?" },
      { w: "Priya", s: "Hit the 'Report [[Phishing]]' button. You'll also do [[security awareness training]] this week, and please sign the [[AUP]].", p: "Use the report button — don't click anything. You'll get training and must agree to the computer-use rules." }
    ],
    check: [
      { q: "What does SSO give Jordan?", o: ["A faster laptop", "One login for many apps", "Free Wi-Fi at home", "Admin rights"], a: 1, why: "Single Sign-On means one identity unlocks many apps." },
      { q: "Why does Priya say never to reuse passwords?", o: ["It slows down the computer", "IT can't reset them", "Leaked passwords from one site get tried on others", "It breaks SSO"], a: 2, why: "That's credential stuffing — attackers replay leaked username/password pairs." }
    ]
  },
  {
    id: "phish-report", l: 1, title: "\"I think I clicked something bad\"", setting: "Walk-up to the security team",
    roles: { Aisha: "Security analyst", Tom: "Accountant" },
    lines: [
      { w: "Tom", s: "I got an email saying my mailbox was full and I clicked the link… then it asked for my password.", p: "I fell for a fake email and typed my password into a website." },
      { w: "Aisha", s: "Thanks for telling us right away — that really helps. That was a [[phishing]] page designed to steal [[credentials|Authentication (AuthN)]].", p: "Reporting quickly is the right move. That site was fake and built to steal your login." },
      { w: "Aisha", s: "I'm forcing a password reset and signing you out of every [[session|Token]] now.", p: "I'm changing your password and kicking any attacker out of your logged-in sessions." },
      { w: "Tom", s: "Did they get in?", p: "Did the attacker access my account?" },
      { w: "Aisha", s: "Your [[MFA|MFA / 2FA]] blocked the login — I can see a denied sign-in from overseas. That's why we use it.", p: "The second login step stopped them. I can see a failed attempt from another country." },
      { w: "Aisha", s: "I'll also check for any new inbox rules — attackers set those up to hide replies in [[BEC]] scams.", p: "Criminals sometimes secretly forward or hide emails to run invoice fraud, so I'm checking." },
      { w: "Tom", s: "How do I spot these next time?", p: "What are the warning signs?" },
      { w: "Aisha", s: "Urgency, a sender domain that's slightly off, and any link asking you to log in. When in doubt, report it — no one gets in trouble for reporting.", p: "Watch for pressure, misspelled addresses, and login links. Reporting is always safe." }
    ],
    check: [
      { q: "What stopped the attacker from logging in?", o: ["Antivirus", "The firewall", "Multi-factor authentication", "The VPN"], a: 2, why: "Even with the password, the attacker couldn't pass the MFA step." },
      { q: "Why check for new inbox rules?", o: ["To free up mailbox space", "Attackers use them to hide or forward emails for fraud", "To speed up Outlook", "They're required for MFA"], a: 1, why: "Hidden forwarding/deletion rules are a classic sign of Business Email Compromise." }
    ]
  },
  {
    id: "slow-laptop", l: 1, title: "\"Why is my laptop so slow?\"", setting: "Tutoring session with a small-business owner",
    roles: { Avery: "IT consultant", Rosa: "Bakery owner" },
    lines: [
      { w: "Rosa", s: "My laptop takes forever to start and freezes when I have a few tabs open.", p: "My computer is very slow." },
      { w: "Avery", s: "Let's look. You've got 4 GB of [[RAM]] and you're using 98% of it — that's your bottleneck.", p: "Your computer's short-term working memory is almost completely full, so everything has to wait." },
      { w: "Avery", s: "It's also an old spinning hard drive. Swapping to an [[SSD]] would make it boot in seconds.", p: "Your storage is old technology. A modern drive would be dramatically faster." },
      { w: "Rosa", s: "Is it a virus?", p: "Could it be malicious software?" },
      { w: "Avery", s: "Good question. Your [[antivirus|Antivirus (AV)]] is clean, but you have 40 Windows updates pending. Installing those [[patches|Patch]] closes security holes too.", p: "No infection found, but the system is badly out of date — updates fix security problems." },
      { w: "Avery", s: "And before we touch anything, let's confirm you have a [[backup]] of your recipes and invoices.", p: "Let's make sure your important files are safely copied first." },
      { w: "Rosa", s: "Um… they're just on the desktop.", p: "They're not backed up." },
      { w: "Avery", s: "Then that's step one. We'll sync them to OneDrive and keep a copy on an external drive — that's [[cloud computing]] plus local, so you're covered either way.", p: "We'll keep copies online and on a separate drive so you won't lose them." }
    ],
    check: [
      { q: "What was the main bottleneck?", o: ["The internet speed", "Almost-full RAM", "A virus", "The monitor"], a: 1, why: "98% RAM usage means the computer constantly runs out of working memory." },
      { q: "Why back up before making changes?", o: ["It's required for updates", "So files can be restored if something goes wrong", "It speeds up the SSD", "It removes viruses"], a: 1, why: "A backup is your safety net before any repair work." }
    ]
  },
  {
    id: "client-backup", l: 1, title: "Ransomware worries", setting: "Consultation with a salon owner",
    roles: { Avery: "IT consultant", Keisha: "Salon owner" },
    lines: [
      { w: "Keisha", s: "My friend's shop got hit by [[ransomware]] and lost everything. Could that happen to me?", p: "Could criminals lock up all my files and demand money?" },
      { w: "Avery", s: "It could, but we can make it a lot less likely and a lot less painful. The biggest protection is good [[backups|Backup]].", p: "We can lower the chance and make recovery easy." },
      { w: "Avery", s: "We follow the 3-2-1 rule: three copies, two types of storage, one kept offsite or offline.", p: "Keep three copies on two kinds of storage, with one away from the shop." },
      { w: "Keisha", s: "Why offline?", p: "Why disconnect a copy?" },
      { w: "Avery", s: "Because ransomware spreads to anything connected. An offline copy can't be encrypted.", p: "The malware can only scramble what it can reach." },
      { w: "Avery", s: "We'll also turn on [[MFA|MFA / 2FA]] for your booking system and email, keep everything [[patched|Patch]], and set up a [[firewall]] on your router.", p: "Extra login protection, regular updates, and a filter on your internet traffic." },
      { w: "Keisha", s: "How do I know the backups actually work?", p: "How can I trust them?" },
      { w: "Avery", s: "We'll do a test restore every quarter. A backup you've never restored is just a hope.", p: "We'll practise recovering files regularly to prove it works." }
    ],
    check: [
      { q: "What does the '1' in 3-2-1 stand for?", o: ["One password", "One copy offsite or offline", "One antivirus", "One backup per year"], a: 1, why: "Keeping one copy offsite/offline protects it from fire, theft and ransomware." },
      { q: "Why test restores?", o: ["To prove backups actually work", "To delete old files", "Insurance requires daily restores", "To install patches"], a: 0, why: "Untested backups often fail exactly when you need them." }
    ]
  },

  /* =================== INTERMEDIATE =================== */
  {
    id: "standup", l: 2, title: "Daily stand-up", setting: "IT operations team, 9:00 AM",
    roles: { Lee: "IT manager", Sam: "Systems administrator", Nia: "Help desk lead" },
    lines: [
      { w: "Lee", s: "Morning! Quick [[stand-up]]. Sam, you're up.", p: "Short daily check-in — Sam goes first." },
      { w: "Sam", s: "Yesterday I [[spun up|Spin up / Tear down]] the new file server in [[staging|Environment (Dev / Staging / Prod)]]. Today I'm migrating the shares. My [[blocker]] is I'm still waiting on the [[change request|Change Management]] approval.", p: "I built the new server in the test environment. Today I'll move the files. I'm stuck until the change is approved." },
      { w: "Lee", s: "I'll [[ping|Ping me]] the [[CAB]] after this. What's the [[ETA]] once approved?", p: "I'll nudge the approval board. How long will it take once approved?" },
      { w: "Sam", s: "Saturday's [[maintenance window]]. I've written a [[rollback]] plan in case the permissions don't carry over.", p: "During the scheduled off-hours slot, with an undo plan ready." },
      { w: "Nia", s: "Help desk: we closed 42 tickets. Heads-up, we've had six 'Outlook keeps crashing' calls — I think it's a [[problem|Incident vs Problem]], not separate incidents.", p: "Lots of tickets handled. Six crash reports likely share one root cause." },
      { w: "Lee", s: "Agreed. Open a problem ticket and [[loop in]] Sam. Probably that new add-in we pushed via [[GPO|Group Policy (GPO)]].", p: "Track it as one underlying issue and involve Sam. It's likely the add-in we deployed with central Windows policy." },
      { w: "Nia", s: "Will do. That's it from me — no blockers.", p: "Done, nothing stopping me." },
      { w: "Lee", s: "Great. Let's [[circle back]] on the add-in at EOD.", p: "We'll revisit the add-in issue at the end of the day." }
    ],
    check: [
      { q: "What is Sam's blocker?", o: ["No server hardware", "Waiting for change approval", "Network outage", "Sick leave"], a: 1, why: "The migration can't start until the change request is approved." },
      { q: "Why does Nia call it a 'problem' rather than 'incidents'?", o: ["It's a P1", "Several incidents share one underlying cause", "It's out of scope", "Problems are lower priority"], a: 1, why: "In ITIL, a problem is the root cause behind multiple incidents." }
    ]
  },
  {
    id: "network-outage", l: 2, title: "Second floor is offline", setting: "Network troubleshooting call",
    roles: { Chris: "Network engineer", Dana: "Help desk technician" },
    lines: [
      { w: "Dana", s: "Second floor says no internet. I've got 15 tickets in ten minutes. I'm calling it a [[P2|Priority (P1–P4)]].", p: "A whole floor is down and complaints are piling up — high priority." },
      { w: "Chris", s: "Okay. Can their machines [[ping]] the [[default gateway|Gateway]]?", p: "Can their computers reach the router at all?" },
      { w: "Dana", s: "They don't even have a valid [[IP address]] — they've got 169.254 addresses.", p: "The computers never received network addresses." },
      { w: "Chris", s: "169.254 means [[DHCP]] failed. Let me check the scope… yep, it's exhausted. Every address in that [[subnet]] is leased.", p: "That address range means the automatic address service didn't respond — it has run out of addresses to hand out." },
      { w: "Dana", s: "How? There aren't that many people up there.", p: "Why would it run out?" },
      { w: "Chris", s: "Someone plugged a personal [[access point|Access Point (AP)]] into a wall port and it's handing out leases to every phone in range. Classic [[shadow IT]].", p: "Someone added their own Wi-Fi device without IT's approval and it's consuming the addresses." },
      { w: "Chris", s: "I'm shutting down that [[switch]] port and clearing stale leases. Long term, we should put devices on their own [[VLAN]] and enable port security.", p: "Turning off that connection and freeing up addresses. Later we'll separate device types and lock down wall ports." },
      { w: "Dana", s: "Users are back online. I'll document it for the [[RCA]].", p: "Fixed — I'll write up the root cause." }
    ],
    check: [
      { q: "What does a 169.254.x.x address usually indicate?", o: ["A VPN is connected", "The device couldn't get an address from DHCP", "The device is infected", "IPv6 is enabled"], a: 1, why: "169.254 is a self-assigned (APIPA) address used when DHCP doesn't answer." },
      { q: "What was the root cause?", o: ["ISP outage", "A rogue personal access point exhausting DHCP leases", "Expired certificate", "Firewall rule"], a: 1, why: "Shadow IT — an unauthorised AP — used up the DHCP scope." }
    ]
  },
  {
    id: "soc-handoff", l: 2, title: "SOC shift handoff", setting: "Security Operations Center, 7:00 AM",
    roles: { Ravi: "Night-shift SOC analyst", Mei: "Day-shift SOC analyst" },
    lines: [
      { w: "Ravi", s: "Quiet-ish night. The [[SIEM]] fired 180 alerts; most were [[false positives|False Positive / False Negative]] from the vulnerability scanner.", p: "Lots of alerts, but nearly all harmless — triggered by our own scanning tool." },
      { w: "Mei", s: "Again? We need to [[tune|Tuning]] that rule. The [[alert fatigue]] is real.", p: "Let's adjust that rule so it stops crying wolf." },
      { w: "Ravi", s: "Agreed, I opened a ticket for it. Two real ones though. First: [[EDR]] caught an [[infostealer]] on a marketing laptop and [[isolated|Quarantine / Isolate]] it automatically.", p: "Our endpoint tool found password-stealing malware and cut the laptop off the network." },
      { w: "Mei", s: "Do we know how it got there?", p: "What was the source?" },
      { w: "Ravi", s: "User downloaded a 'free' video editor — a [[trojan]]. I pulled the file hash as an [[IOC]] and blocked it org-wide.", p: "It was disguised as free software. I recorded its fingerprint and blocked it everywhere." },
      { w: "Mei", s: "Since infostealers grab browser cookies, did you revoke their sessions?", p: "Did you kick out any stolen logins?" },
      { w: "Ravi", s: "Yes — password reset, [[tokens|Token]] revoked. Second item: a burst of failed logins across 300 accounts from one IP. Looks like [[password spraying]]. No successes; I blocked the IP.", p: "Done. Also, someone tried a few common passwords on hundreds of accounts — none worked, IP blocked." },
      { w: "Mei", s: "Nice work. I'll [[escalate|Escalation]] the laptop to Tier 2 for [[forensics]] and keep an eye on sign-ins.", p: "I'll send the laptop to senior analysts for a deep investigation." }
    ],
    check: [
      { q: "Why revoke tokens and not just reset the password?", o: ["Tokens slow down the network", "Stolen session cookies can bypass a new password and MFA", "It's required by GDPR", "To free up licences"], a: 1, why: "Session hijacking uses stolen tokens, which stay valid until revoked." },
      { q: "What made the login attempts look like password spraying?", o: ["Many passwords against one account", "A few common passwords against many accounts", "A phishing email", "A USB stick"], a: 1, why: "Spraying tries common passwords across many accounts to avoid lockouts." }
    ]
  },
  {
    id: "cab-meeting", l: 2, title: "Change Advisory Board", setting: "Weekly change review meeting",
    roles: { Ana: "Change manager", Sam: "Systems administrator", Omar: "Security engineer" },
    lines: [
      { w: "Ana", s: "Next change: Sam's firewall [[firmware]] upgrade. Sam?", p: "Next on the list: updating the firewall's built-in software." },
      { w: "Sam", s: "The vendor released a fix for a critical [[CVE]] — [[CVSS]] 9.8, an unauthenticated [[RCE]] on the VPN portal.", p: "There's a publicly known, extremely severe flaw letting attackers take over the device without logging in." },
      { w: "Omar", s: "And it's being exploited in the wild, so this is urgent.", p: "Attackers are already using it." },
      { w: "Ana", s: "What's the [[blast radius]] if the upgrade goes wrong?", p: "What breaks if this fails?" },
      { w: "Sam", s: "Worst case, all remote users lose [[VPN]] for about 20 minutes. We have an HA pair, so I'll upgrade the standby first, fail over, then do the primary.", p: "Remote workers might lose access briefly. We have two firewalls, so I'll update one at a time." },
      { w: "Ana", s: "[[Rollback]] plan?", p: "How do we undo it?" },
      { w: "Sam", s: "Firewalls keep the previous image — I can boot back to it in five minutes. Config is backed up too.", p: "We can revert to the old version quickly." },
      { w: "Ana", s: "Okay. Approved as an emergency change for tonight's window instead of Saturday. Please update the ticket after.", p: "Approved to do it tonight because of the risk." }
    ],
    check: [
      { q: "Why was this change rushed?", o: ["The vendor's contract expired", "A critical vulnerability is being actively exploited", "The CAB meets monthly", "Users asked for new features"], a: 1, why: "A CVSS 9.8 RCE exploited in the wild justifies an emergency change." },
      { q: "How does Sam reduce the blast radius?", o: ["Skipping testing", "Upgrading the standby firewall first and failing over", "Turning off the VPN permanently", "Doing it during business hours"], a: 1, why: "Using the HA pair keeps one firewall running while the other upgrades." }
    ]
  },
  {
    id: "interview-helpdesk", l: 2, title: "Job interview: IT support", setting: "Interview for an IT support specialist role",
    roles: { Grace: "Hiring manager", You: "Candidate" },
    lines: [
      { w: "Grace", s: "A user says they can't reach any websites, but Teams works. Walk me through it.", p: "Some internet works, some doesn't. How would you troubleshoot?" },
      { w: "You", s: "I'd follow a [[troubleshooting methodology]]. Since Teams works, the network connection is fine, so I suspect [[DNS]]. I'd try to [[ping]] 8.8.8.8, then ping google.com.", p: "I'll be methodical. If one app works, the connection is up; the name lookup service is suspect. I'd test an IP, then a name." },
      { w: "Grace", s: "IP works, name fails. Next?", p: "Your guess was right. Then what?" },
      { w: "You", s: "That confirms DNS. I'd check the DNS settings with ipconfig /all, flush the [[cache]], and see if other users are affected before [[escalating|Escalation]].", p: "I'd check which DNS server it uses, clear saved results, and check whether it's widespread." },
      { w: "Grace", s: "Good. How would you handle a frustrated VP who's locked out before a board meeting?", p: "How do you handle an upset, important user?" },
      { w: "You", s: "Stay calm and acknowledge the urgency. I'd verify their identity first — [[social engineering]] often impersonates executives — then unlock the account and confirm they're in.", p: "Be empathetic, but still confirm it's really them, because attackers pretend to be bosses." },
      { w: "Grace", s: "Great answer. What's the difference between [[authentication|Authentication (AuthN)]] and [[authorization|Authorization (AuthZ)]]?", p: "Explain these two security terms." },
      { w: "You", s: "Authentication proves who you are; authorization decides what you're allowed to do. Like showing ID at a hotel, then your key card only opens your room.", p: "Same thing, with an analogy." }
    ],
    check: [
      { q: "Pinging an IP works but a domain name fails. What's the likely culprit?", o: ["Firewall", "DNS", "RAM", "Printer driver"], a: 1, why: "If raw IPs work but names don't, name resolution (DNS) is failing." },
      { q: "Why verify the VP's identity before unlocking?", o: ["Company policy on VIPs", "Attackers often impersonate executives to get resets", "To log the call time", "To check their licence"], a: 1, why: "Help desk impersonation of executives is a common social-engineering tactic." }
    ]
  },

  /* =================== ADVANCED =================== */
  {
    id: "ransomware-bridge", l: 3, title: "Ransomware incident bridge", setting: "P1 incident call, 3:12 AM",
    roles: { Elena: "Incident commander", Kwame: "SOC lead", Jess: "Infrastructure lead", Paul: "Legal counsel" },
    lines: [
      { w: "Elena", s: "Thanks for joining the [[bridge|War room / Bridge]]. This is a [[P1|Priority (P1–P4)]]. Kwame, what do we know?", p: "This is a critical, all-hands incident call. What's happened?" },
      { w: "Kwame", s: "[[EDR]] flagged mass file encryption on two file servers at 02:48. Ransom note matches a known group doing [[double extortion]].", p: "Our tools saw files being scrambled. The criminals usually steal data too and threaten to leak it." },
      { w: "Elena", s: "Priority one is containment. Jess?", p: "Stop it from spreading first." },
      { w: "Jess", s: "I've [[isolated|Quarantine / Isolate]] both servers and disabled the compromised [[service account]]. I'm blocking SMB [[east-west|East-West / North-South Traffic]] between server segments.", p: "Cut off the infected servers, disabled the hijacked account, and blocked server-to-server file sharing." },
      { w: "Kwame", s: "Initial look suggests they came in through the VPN with valid creds — possibly bought from an [[initial access broker|Initial Access Broker (IAB)]] — then used [[living off the land|Living Off the Land (LotL)]] techniques for [[lateral movement]].", p: "They logged in normally with stolen credentials, then used built-in Windows tools to hop between systems." },
      { w: "Elena", s: "[[Dwell time]]?", p: "How long were they inside?" },
      { w: "Kwame", s: "First suspicious login was nine days ago. We're seeing outbound traffic to a [[C2]] domain and about 40 GB of [[exfiltration|Data Exfiltration]].", p: "Over a week. Infected machines talked to the attacker's server, and lots of data left." },
      { w: "Paul", s: "If [[PII]] was taken, notification deadlines may apply. Preserve everything — maintain [[chain of custody]] for [[forensics]]. And no one talks to the attackers without legal and the insurer.", p: "If personal data leaked we may legally have to notify people. Keep evidence properly, and don't negotiate on your own." },
      { w: "Jess", s: "Immutable [[backups|Backup]] are intact. [[RTO|RTO / RPO]] for the file servers is eight hours once we're confident [[eradication|Incident Response (IR)]] is complete.", p: "Our tamper-proof backups survived. We can restore within eight hours after removing the attacker." },
      { w: "Elena", s: "Good. Next steps: reset all privileged creds, rotate the KRBTGT key twice, hunt for persistence, and we reconvene at 04:00. Comms will draft the exec update.", p: "Change all admin passwords, invalidate forged login tickets, search for hidden backdoors, and meet again in under an hour." }
    ],
    check: [
      { q: "What is the first priority in this incident?", o: ["Paying the ransom", "Containment", "Writing the postmortem", "Restoring from backup immediately"], a: 1, why: "Contain first; restoring before the attacker is removed risks re-infection." },
      { q: "Why does double extortion change the response?", o: ["Backups don't address the threat to leak stolen data", "It doubles the ransom only", "It means two servers were hit", "It requires two firewalls"], a: 0, why: "Even with good backups, stolen data can still be leaked, creating legal and notification issues." }
    ]
  },
  {
    id: "threat-hunt", l: 3, title: "Threat hunting sync", setting: "Detection engineering team meeting",
    roles: { Ines: "Threat hunter", Ben: "Detection engineer" },
    lines: [
      { w: "Ines", s: "New [[threat intelligence]] says the group targeting our sector relies on [[Kerberoasting]] after initial access.", p: "Intel says these attackers try to steal and crack service-account passwords." },
      { w: "Ben", s: "That's T1558.003 in [[MITRE ATT&CK]]. Do we have coverage?", p: "Do our detections catch that known technique?" },
      { w: "Ines", s: "Partially. We log [[Kerberos]] ticket requests, but the rule is too noisy to alert on.", p: "We collect the right data, but the alert fires too often to be useful." },
      { w: "Ben", s: "Let's write a [[Sigma|Sigma / YARA Rules]] rule for RC4-encrypted ticket requests to many different service accounts from one user in a short window.", p: "We'll write a precise, shareable detection for the attack's tell-tale pattern." },
      { w: "Ines", s: "I'll hunt the last 90 days first. Hypothesis: if they've been here, we'll see that pattern plus [[LotL|Living Off the Land (LotL)]] recon — things like 'setspn' or AD queries from a workstation.", p: "I'll search past logs for signs they were already here, using a specific theory to test." },
      { w: "Ben", s: "Do we have [[telemetry]] from the domain controllers?", p: "Are we collecting detailed logs from the servers that matter?" },
      { w: "Ines", s: "Security logs yes, [[Sysmon]] no. That's a gap — I'll raise it.", p: "Basic logs only; we're missing detailed activity logging." },
      { w: "Ben", s: "Long-term fix is to make service account passwords 30+ random characters, use [[gMSAs|Service Account]], and kill RC4. Then even if they roast tickets, they can't crack them.", p: "Strong, auto-managed passwords and modern encryption make the attack useless." },
      { w: "Ines", s: "Agreed — detection plus hardening. I'll purple-team it with an Atomic Red Team test once the rule's live.", p: "We'll both detect and prevent it, then test the detection with a simulated attack." }
    ],
    check: [
      { q: "What is a threat hunt's starting point here?", o: ["A random search", "A hypothesis based on threat intel", "A customer complaint", "A failed backup"], a: 1, why: "Good hunts test a specific hypothesis, often driven by threat intelligence." },
      { q: "Why do long random service-account passwords defeat Kerberoasting?", o: ["They stop tickets being issued", "Stolen tickets become practically impossible to crack offline", "They disable Kerberos", "They encrypt the SIEM"], a: 1, why: "Kerberoasting relies on cracking tickets offline; strong passwords make that infeasible." }
    ]
  },
  {
    id: "cloud-review", l: 3, title: "Cloud security architecture review", setting: "Design review before launch",
    roles: { Zara: "Cloud security architect", Nate: "DevOps engineer" },
    lines: [
      { w: "Nate", s: "The new customer portal is ready. It's all [[Terraform|Infrastructure as Code (IaC)]] and deploys through our [[CI/CD]] pipeline.", p: "Everything is defined in code and deployed automatically." },
      { w: "Zara", s: "Great — that lets us [[shift left]]. Is there [[IaC|Infrastructure as Code (IaC)]] scanning in the pipeline?", p: "We can catch problems before deployment. Are we checking the code for misconfigurations?" },
      { w: "Nate", s: "Checkov runs on every pull request. It flagged an S3 bucket without encryption, which we fixed.", p: "Yes, an automated scan found and we fixed an unencrypted storage bucket." },
      { w: "Zara", s: "I see the app's [[IAM|IAM]] role has s3:* on all buckets. That violates [[least privilege]] — the [[blast radius]] is everything.", p: "The app can do anything to any storage. It should only access what it needs." },
      { w: "Nate", s: "Fair. I'll scope it to read/write on the uploads bucket only.", p: "I'll restrict it." },
      { w: "Zara", s: "Database credentials are in an environment variable. Move them to [[secrets management]] with automatic [[key rotation]].", p: "Store the database password in a secure vault that changes it automatically." },
      { w: "Zara", s: "And the [[security group]] allows 0.0.0.0/0 on port 5432?", p: "The database is open to the whole internet?" },
      { w: "Nate", s: "Leftover from testing. I'll put the DB in a private subnet of the [[VPC]] — only the app tier can reach it.", p: "A mistake from testing. I'll hide it in the private network." },
      { w: "Zara", s: "Good. Last thing: generate an [[SBOM]] and turn on [[CSPM]] alerts so [[configuration drift]] gets caught after launch. Then I'm happy to sign off.", p: "List all software components, and monitor the cloud for settings changing over time. Then it's approved." }
    ],
    check: [
      { q: "What principle does the s3:* permission violate?", o: ["Defense in depth", "Least privilege", "Non-repudiation", "Availability"], a: 1, why: "Granting all actions on all buckets is far more access than the app needs." },
      { q: "What does 'shift left' mean here?", o: ["Move servers to another region", "Catch security issues earlier, in code and pipeline", "Rotate keys left to right", "Delay the launch"], a: 1, why: "Shifting left means finding problems earlier in the development lifecycle." }
    ]
  },
  {
    id: "postmortem", l: 3, title: "Blameless postmortem", setting: "Review after a 3-hour outage",
    roles: { Lena: "SRE lead", Diego: "On-call engineer", Ana: "Change manager" },
    lines: [
      { w: "Lena", s: "This is a blameless [[postmortem]] — we're looking at systems, not people. Diego, timeline?", p: "We're here to learn, not blame. What happened when?" },
      { w: "Diego", s: "I got [[paged]] at 1:05 for login failures. Root cause: the TLS cert on the auth service hit [[certificate expiry]] at 1:00.", p: "I was alerted about login failures. The security certificate had expired." },
      { w: "Lena", s: "Our [[MTTD|MTTD / MTTR]] was good — five minutes. Why was [[MTTR|MTTD / MTTR]] three hours?", p: "We noticed quickly. Why did fixing it take so long?" },
      { w: "Diego", s: "The private key was in an [[HSM|HSM / KMS]] only one person could access, and he was on a flight. Classic [[SPOF]].", p: "Only one person could reach the key and he was unavailable — one point of failure." },
      { w: "Ana", s: "And there was no [[runbook|Playbook / Runbook]] for cert renewal on that service.", p: "There were no written steps for renewing it." },
      { w: "Lena", s: "Contributing factors: no expiry monitoring, single key custodian, no runbook. Action items?", p: "What do we change?" },
      { w: "Diego", s: "Automate renewal with ACME, alert at 30, 14 and 7 days, and add a second key custodian with a [[break-glass account]].", p: "Auto-renew certificates, warn well in advance, and give a backup person emergency access." },
      { w: "Lena", s: "Good. Each action gets an owner and a due date. TL;DR for execs: expired cert, three-hour login outage, fixes in progress.", p: "Everything gets assigned. Short summary for leadership." }
    ],
    check: [
      { q: "What makes a postmortem 'blameless'?", o: ["No one attends", "It focuses on system and process failures, not individual fault", "Nobody writes it down", "Only managers speak"], a: 1, why: "Blameless culture encourages honesty so real causes get fixed." },
      { q: "Why was MTTR long even though detection was fast?", o: ["Slow monitoring", "A single person controlled the key and there was no runbook", "The ISP was down", "Too many alerts"], a: 1, why: "A single point of failure and missing documentation delayed recovery." }
    ]
  },
  {
    id: "board-briefing", l: 3, title: "Briefing the board on cyber risk", setting: "Quarterly executive meeting",
    roles: { Monique: "CISO", Richard: "CEO", Helen: "CFO" },
    lines: [
      { w: "Richard", s: "In plain terms — are we secure?", p: "Are we safe?" },
      { w: "Monique", s: "No one is 100% secure, so I frame it as [[risk]]. Using the [[NIST CSF]], we've improved our [[security posture]] in Protect and Detect this quarter.", p: "Security is about managing risk. By an industry framework, we're stronger at preventing and spotting attacks." },
      { w: "Helen", s: "What's our biggest exposure?", p: "What worries you most?" },
      { w: "Monique", s: "[[Third-party risk|Third-Party Risk Management (TPRM)]]. Our payroll vendor holds employee [[PII]], and their [[SOC 2]] report showed exceptions in access reviews.", p: "Our outside vendors. Our payroll provider has our staff's personal data and their audit found weaknesses." },
      { w: "Helen", s: "Can you put a number on it?", p: "In dollars?" },
      { w: "Monique", s: "Our model puts the [[ALE|SLE / ARO / ALE]] for a vendor breach at about $400K. Requiring the fixes in the contract and keeping [[cyber insurance]] brings [[residual risk]] within our [[risk appetite]].", p: "We estimate the yearly expected loss at $400K. Contract fixes and insurance lower what's left to a level the board accepts." },
      { w: "Richard", s: "What do you need from us?", p: "What should leadership do?" },
      { w: "Monique", s: "Two things: budget for [[phishing-resistant MFA|FIDO2 / WebAuthn]] for all admins, and your time for a ransomware [[tabletop exercise]] next month. Leadership decisions are part of the response.", p: "Money for stronger logins for administrators, and the executives' participation in an incident practice run." }
    ],
    check: [
      { q: "Why does the CISO avoid saying 'we're secure'?", o: ["She's unsure of the tools", "Security is about managing risk, not reaching zero risk", "Legal forbids it", "The board doesn't care"], a: 1, why: "Framing security as risk management sets realistic expectations." },
      { q: "What does 'residual risk within our risk appetite' mean?", o: ["All risk is eliminated", "The risk left after controls is at a level leadership accepts", "Insurance pays for everything", "The vendor is fired"], a: 1, why: "Residual risk remains after controls; risk appetite is how much leadership will accept." }
    ]
  }
];
