<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
  <meta name="theme-color" content="#04070d" />
  <title>CARDZONE26 — Luxury Virtual Vault</title>

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800&family=Great+Vibes&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

  <!-- FontAwesome 6.4.0 -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

  <!-- QRCodeJS Fallback -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            midnight: '#04070d',
            obsidian: '#050912',
            gold: {
              DEFAULT: '#d4af37',
              light: '#f6e27a',
              dark: '#9e7b18',
            }
          },
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'sans-serif'],
          }
        }
      }
    };
  </script>

  <style>
    :root {
      --bg-primary: #04070d;
      --bg-secondary: #050912;
      --gold-1: #d4af37;
      --gold-2: #f6e27a;
      --emerald-glow: rgba(16, 185, 129, 0.35);
    }

    * {
      -webkit-tap-highlight-color: transparent;
      box-sizing: border-box;
    }

    html, body {
      background-color: var(--bg-primary);
      color: #f8fafc;
      font-family: 'Plus Jakarta Sans', sans-serif;
      overscroll-behavior-y: contain;
      -ms-overflow-style: none;
      scrollbar-width: none;
    }

    ::-webkit-scrollbar {
      display: none;
      width: 0;
      height: 0;
    }

    .font-serif-card { font-family: 'Cinzel', serif; }
    .font-script { font-family: 'Great Vibes', cursive; }

    .text-gold-gradient {
      background: linear-gradient(135deg, #f6e27a 0%, #d4af37 45%, #fbf5b7 70%, #b38728 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .bg-gold-gradient {
      background: linear-gradient(135deg, #d4af37 0%, #f6e27a 50%, #b38728 100%);
    }

    .glass-panel {
      background: linear-gradient(180deg, rgba(14, 21, 38, 0.85) 0%, rgba(5, 9, 18, 0.95) 100%);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(212, 175, 55, 0.2);
    }

    .luxury-gold-card {
      position: relative;
      border-radius: 20px;
      background:
        radial-gradient(circle at 20% 20%, rgba(251, 245, 183, 0.45), transparent 45%),
        radial-gradient(circle at 85% 80%, rgba(179, 135, 40, 0.5), transparent 50%),
        linear-gradient(135deg, #c69a2c 0%, #f6e27a 28%, #d4af37 55%, #f9eab0 78%, #9e7419 100%);
      box-shadow:
        0 20px 45px -12px rgba(212, 175, 55, 0.35),
        0 0 0 1px rgba(251, 245, 183, 0.55) inset,
        0 2px 10px rgba(0, 0, 0, 0.6);
      overflow: hidden;
    }

    .guilloche-overlay {
      position: absolute;
      inset: 0;
      opacity: 0.22;
      pointer-events: none;
      background-image:
        repeating-radial-gradient(circle at 50% 50%, transparent 0, transparent 7px, rgba(90, 62, 12, 0.55) 7.5px, transparent 8.5px),
        repeating-linear-gradient(45deg, rgba(90, 62, 12, 0.25) 0px, rgba(90, 62, 12, 0.25) 1px, transparent 1px, transparent 6px),
        repeating-linear-gradient(-45deg, rgba(255, 255, 255, 0.35) 0px, rgba(255, 255, 255, 0.35) 1px, transparent 1px, transparent 6px);
    }

    .card-inner-frame {
      position: absolute;
      inset: 9px;
      border-radius: 13px;
      border: 1px solid rgba(92, 63, 12, 0.45);
      box-shadow: inset 0 0 0 1px rgba(255, 250, 214, 0.35);
      pointer-events: none;
    }

    .emv-chip {
      width: 44px;
      height: 32px;
      border-radius: 6px;
      background: linear-gradient(145deg, #fff3b0 0%, #d4af37 45%, #8f6b14 100%);
      border: 1px solid rgba(82, 56, 8, 0.65);
      box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.8), 0 2px 4px rgba(0, 0, 0, 0.25);
      position: relative;
      overflow: hidden;
    }
    .emv-chip::before, .emv-chip::after {
      content: '';
      position: absolute;
      border: 1px solid rgba(92, 64, 12, 0.45);
    }
    .emv-chip::before { inset: 6px 0; border-left: none; border-right: none; }
    .emv-chip::after { inset: 0 13px; border-top: none; border-bottom: none; }

    .embossed-text {
      color: #2b1d04;
      text-shadow: 0 1px 0 rgba(255, 249, 209, 0.85), 0 -1px 1px rgba(59, 39, 4, 0.45);
      letter-spacing: 0.11em;
    }

    .emerald-wallet-pill {
      background: linear-gradient(135deg, rgba(6, 78, 59, 0.45), rgba(5, 9, 18, 0.95));
      border: 1px solid rgba(16, 185, 129, 0.45);
      box-shadow: 0 0 18px var(--emerald-glow);
    }

    @keyframes tickerScroll {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-50%); }
    }
    .ticker-track {
      display: flex;
      width: max-content;
      animation: tickerScroll 26s linear infinite;
    }

    .tab-pane { display: none; animation: fadeSlideUp 0.28s ease-out forwards; }
    .tab-pane.active { display: block; }
    @keyframes fadeSlideUp {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .nav-btn.active { color: #f6e27a; }
    .nav-btn.active .nav-indicator { opacity: 1; transform: scaleX(1); }
    .nav-indicator { opacity: 0; transform: scaleX(0); transition: all 0.25s ease; }

    #qrFallbackBox img, #qrFallbackBox canvas {
      border-radius: 10px;
    }
  </style>
</head>
<body class="bg-midnight min-h-screen flex justify-center selection:bg-gold/30 selection:text-gold-light">

  <div class="w-full max-w-md min-h-screen bg-obsidian relative flex flex-col shadow-2xl border-x border-white/5 overflow-x-hidden">

    <!-- Ambient Glows -->
    <div class="pointer-events-none fixed inset-0 max-w-md mx-auto overflow-hidden z-0">
      <div class="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-gold/10 blur-3xl"></div>
      <div class="absolute top-1/3 -right-24 w-64 h-64 rounded-full bg-blue-900/15 blur-3xl"></div>
    </div>

    <!-- ==================== AUTHENTICATION OVERLAY (SIGN IN / SIGN UP) ==================== -->
    <div id="authScreen" class="fixed inset-0 z-50 max-w-md mx-auto bg-midnight/95 backdrop-blur-xl flex flex-col justify-center px-6 py-8 overflow-y-auto transition-opacity duration-300">
      <div class="my-auto">
        <div class="text-center mb-7">
          <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/25 to-obsidian border border-gold/40 shadow-lg shadow-gold/10 mb-4">
            <i class="fa-solid fa-crown text-2xl text-gold-light"></i>
          </div>
          <h1 id="brandTitleLogin" class="font-serif-card text-2xl font-bold tracking-widest text-gold-gradient">CARDZONE26</h1>
          <p id="brandScriptLogin" class="font-script text-2xl text-gold-light/90 -mt-1">Private Virtual Vault</p>
          <p class="text-xs text-slate-400 mt-2">Sign in with your Gmail or create a new vault account</p>
        </div>

        <div class="glass-panel rounded-3xl p-6 shadow-2xl">
          <div class="grid grid-cols-2 gap-1.5 p-1 rounded-xl bg-midnight/90 border border-white/5 mb-6">
            <button type="button" id="modeSignInBtn" onclick="setAuthMode('signin')" class="py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all bg-gold-gradient text-midnight shadow">
              Sign In
            </button>
            <button type="button" id="modeSignUpBtn" onclick="setAuthMode('signup')" class="py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all text-slate-400 hover:text-white">
              Sign Up
            </button>
          </div>

          <form id="authForm" onsubmit="handleAuthSubmit(event)" class="space-y-4">
            <div>
              <label class="block text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1.5">Gmail Address</label>
              <div class="relative">
                <i class="fa-regular fa-envelope absolute left-3.5 top-1/2 -translate-y-1/2 text-gold/70 text-sm"></i>
                <input id="authEmail" type="email" required placeholder="name@gmail.com"
                  class="w-full bg-midnight/90 border border-white/10 focus:border-gold/60 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition" />
              </div>
            </div>

            <div>
              <label class="block text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1.5">Vault Password</label>
              <div class="relative">
                <i class="fa-solid fa-lock absolute left-3.5 top-1/2 -translate-y-1/2 text-gold/70 text-sm"></i>
                <input id="authPassword" type="password" required minlength="6" placeholder="••••••••"
                  class="w-full bg-midnight/90 border border-white/10 focus:border-gold/60 rounded-xl pl-10 pr-11 py-3 text-sm text-white placeholder-slate-500 outline-none transition" />
                <button type="button" onclick="togglePasswordVisibility('authPassword', 'authEyeIcon')" aria-label="Toggle Password"
                  class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-gold-light p-1">
                  <i id="authEyeIcon" class="fa-regular fa-eye text-sm"></i>
                </button>
              </div>
            </div>

            <p id="authError" class="hidden text-xs text-rose-400 bg-rose-500/10 border border-rose-500/20 rounded-lg px-3 py-2"></p>

            <button type="submit" id="authSubmitBtn"
              class="w-full py-3.5 rounded-xl bg-gold-gradient text-midnight font-bold text-sm uppercase tracking-wider shadow-lg shadow-gold/20 active:scale-[0.98] transition">
              Access Vault <i class="fa-solid fa-arrow-right ml-1.5"></i>
            </button>
          </form>

          <div class="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500">
            <span><i class="fa-solid fa-shield-halved text-emerald-400 mr-1"></i> 256-Bit Encrypted</span>
            <span>EST. 2026</span>
          </div>
        </div>
      </div>
    </div>

    <!-- ==================== FIXED TOP HEADER ==================== -->
    <header class="fixed top-0 z-30 w-full max-w-md bg-midnight/85 backdrop-blur-xl border-b border-gold/15 px-4 py-3 flex items-center justify-between">
      <div class="flex items-center gap-2.5">
        <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-gold/25 to-obsidian border border-gold/40 flex items-center justify-center shadow-inner">
          <i class="fa-solid fa-gem text-gold-light text-sm"></i>
        </div>
        <div>
          <div class="flex items-center gap-1.5">
            <span id="brandTitleHeader" class="font-serif-card font-bold text-sm tracking-wider text-gold-gradient">CARDZONE26</span>
            <span id="brandBadgeHeader" class="text-[9px] font-bold px-1.5 py-0.5 rounded bg-gold/15 border border-gold/35 text-gold-light tracking-widest">EST. 26</span>
          </div>
          <p id="brandSubtitleHeader" class="text-[10px] text-slate-400 leading-tight">Luxury Virtual Cards</p>
        </div>
      </div>

      <div class="emerald-wallet-pill rounded-full pl-3 pr-1.5 py-1 flex items-center gap-2">
        <div class="flex items-center gap-1.5">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span id="liveBalance" class="text-xs font-extrabold text-emerald-300 tracking-wide">$0.00</span>
        </div>
        <button onclick="openDepositModal()" aria-label="Deposit Funds"
          class="w-6 h-6 rounded-full bg-emerald-500 hover:bg-emerald-400 text-midnight flex items-center justify-center text-xs font-bold shadow transition active:scale-90">
          <i class="fa-solid fa-plus"></i>
        </button>
      </div>
    </header>

    <!-- ==================== MAIN APP PAGES ==================== -->
    <main class="relative z-10 flex-1 pt-[74px] pb-24 px-4 overflow-y-auto">

      <!-- TAB 1: STORE -->
      <section id="tab-store" class="tab-pane active space-y-4">
        <div class="luxury-gold-card p-5 aspect-[1.586/1] flex flex-col justify-between select-none">
          <div class="guilloche-overlay"></div>
          <div class="card-inner-frame"></div>

          <div class="relative z-10 flex items-start justify-between">
            <div>
              <p id="goldCardTitle" class="font-serif-card text-[11px] font-extrabold tracking-[0.22em] text-[#3a2806]">CARDZONE CENTURION</p>
              <p id="goldCardScript" class="font-script text-lg text-[#4e3609] -mt-1">Black Gold Reserve</p>
            </div>
            <svg class="w-11 h-11 drop-shadow-sm" viewBox="0 0 64 64" fill="none">
              <circle cx="32" cy="32" r="24" stroke="#473007" stroke-width="1.5" stroke-dasharray="3 2" opacity="0.75"/>
              <circle cx="32" cy="32" r="18" fill="rgba(71, 48, 7, 0.14)" stroke="#473007" stroke-width="1.3"/>
              <path d="M18 42C12 36 12 24 19 17M15 34C13 31 14 27 16 25M16 39C14 37 14 34 16 32" stroke="#3d2805" stroke-width="1.8" stroke-linecap="round"/>
              <path d="M46 42C52 36 52 24 45 17M49 34C51 31 50 27 48 25M48 39C50 37 50 34 48 32" stroke="#3d2805" stroke-width="1.8" stroke-linecap="round"/>
              <path d="M32 19C27 19 24 23 24 28V35L28 39H36L40 35V28C40 23 37 19 32 19Z" fill="#473007" opacity="0.85"/>
              <path d="M32 14V19M27 27H37M32 27V39" stroke="#f6e27a" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </div>

          <div class="relative z-10 flex items-center gap-3 my-1">
            <div class="emv-chip"></div>
            <i class="fa-solid fa-wifi rotate-90 text-[#473007]/80 text-base"></i>
            <span id="goldCardTag" class="ml-auto text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-[#3a2806]/15 text-[#2b1d04] border border-[#3a2806]/25">
              Member Since 26
            </span>
          </div>

          <div class="relative z-10">
            <p id="goldCardNumber" class="embossed-text font-serif-card text-lg sm:text-[19px] font-bold tracking-widest">3759 876543 21001</p>
            <div class="flex items-end justify-between mt-2 text-[#2b1d04]">
              <div>
                <p class="text-[8px] font-bold uppercase tracking-widest opacity-75">Cardholder</p>
                <p class="font-serif-card text-[11px] font-bold tracking-wider uppercase" id="featuredCardHolder">VAULT MEMBER</p>
              </div>
              <div class="text-right">
                <p class="text-[8px] font-bold uppercase tracking-widest opacity-75">Valid Thru</p>
                <p id="goldCardValid" class="font-serif-card text-[11px] font-bold">12/30</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Live Ticker -->
        <div class="glass-panel rounded-xl py-2 px-3 overflow-hidden border border-gold/20 flex items-center gap-2.5">
          <span class="shrink-0 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-2 py-0.5 rounded-md">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span> Live
          </span>
          <div class="overflow-hidden flex-1">
            <div id="liveTickerTrack" class="ticker-track text-xs text-slate-300 gap-8"></div>
          </div>
        </div>

        <!-- Search & Category Filters -->
        <div class="space-y-2.5">
          <div class="relative">
            <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
            <input id="cardSearchInput" type="text" oninput="renderProducts()" placeholder="Search 50 luxury cards (starting $6)..."
              class="w-full glass-panel rounded-xl pl-9 pr-4 py-2.5 text-xs text-white placeholder-slate-500 outline-none focus:border-gold/60" />
          </div>

          <div class="flex items-center justify-between gap-2">
            <div class="flex items-center gap-1.5 overflow-x-auto">
              <button onclick="filterProducts('all', this)" class="filter-btn active px-3.5 py-2 rounded-xl text-xs font-bold tracking-wide transition bg-gold-gradient text-midnight shadow">All (<span id="countAllBtn">50</span>)</button>
              <button onclick="filterProducts('Visa', this)" class="filter-btn px-3.5 py-2 rounded-xl text-xs font-bold tracking-wide transition glass-panel text-slate-300 hover:text-gold-light"><i class="fa-brands fa-cc-visa mr-1"></i> Visa (<span id="countVisaBtn">25</span>)</button>
              <button onclick="filterProducts('Mastercard', this)" class="filter-btn px-3.5 py-2 rounded-xl text-xs font-bold tracking-wide transition glass-panel text-slate-300 hover:text-gold-light"><i class="fa-brands fa-cc-mastercard mr-1"></i> MC (<span id="countMcBtn">25</span>)</button>
            </div>
            <span id="showingCardsCount" class="text-[10px] font-bold text-gold-light shrink-0">50 Cards</span>
          </div>
        </div>

        <div class="space-y-3" id="productList"></div>
      </section>

      <!-- TAB 2: MY PURCHASED CARDS -->
      <section id="tab-orders" class="tab-pane space-y-4">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="font-serif-card text-lg font-bold text-gold-gradient">My Purchased Vault</h2>
            <p class="text-xs text-slate-400">Unmasked 16-digit cards ready for instant use</p>
          </div>
          <span id="ordersCountBadge" class="text-xs font-bold px-2.5 py-1 rounded-full bg-gold/15 border border-gold/30 text-gold-light">0 Cards</span>
        </div>
        <div id="purchasedCardsList" class="space-y-4"></div>
      </section>

      <!-- TAB 3: TRANSACTION HISTORY -->
      <section id="tab-update" class="tab-pane space-y-4">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="font-serif-card text-lg font-bold text-gold-gradient">Transaction Ledger</h2>
            <p class="text-xs text-slate-400">Real-time Tron deposits &amp; vault purchases</p>
          </div>
          <span class="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-1 rounded-full">
            <i class="fa-solid fa-circle-check mr-1"></i> Synced
          </span>
        </div>
        <div id="transactionList" class="space-y-3"></div>
      </section>

      <!-- TAB 4: PROFILE -->
      <section id="tab-profile" class="tab-pane space-y-4">
        <div class="glass-panel rounded-2xl p-5 flex items-center gap-4 border border-gold/25">
          <div class="w-14 h-14 rounded-2xl bg-gold-gradient flex items-center justify-center text-midnight text-xl font-extrabold shadow-lg shadow-gold/20">
            <i class="fa-solid fa-user-shield"></i>
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2">
              <span class="font-serif-card font-bold text-base text-white">Vault Member</span>
              <span id="profileUid" class="text-[11px] font-bold px-2 py-0.5 rounded bg-gold/15 border border-gold/35 text-gold-light">#7997</span>
            </div>
            <p id="profileEmail" class="text-xs text-slate-400 truncate mt-0.5">member@gmail.com</p>
            <p id="profileTierText" class="text-[10px] text-emerald-400 mt-1"><i class="fa-solid fa-shield-check mr-1"></i> Verified Elite Tier</p>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div class="glass-panel rounded-2xl p-4">
            <p class="text-[11px] text-slate-400 uppercase tracking-wider">Wallet Balance</p>
            <p id="profileBalance" class="text-lg font-extrabold text-emerald-400 mt-1">$0.00</p>
          </div>
          <div class="glass-panel rounded-2xl p-4">
            <p class="text-[11px] text-slate-400 uppercase tracking-wider">Owned Cards</p>
            <p id="profileCardCount" class="text-lg font-extrabold text-gold-light mt-1">0</p>
          </div>
        </div>

        <div class="glass-panel rounded-2xl p-5 space-y-4">
          <h3 class="text-sm font-bold text-white flex items-center gap-2">
            <i class="fa-solid fa-key text-gold-light"></i> Security &amp; Password
          </h3>
          <div>
            <label class="block text-[11px] text-slate-400 mb-1.5">Current Vault Password</label>
            <div class="relative">
              <input id="profilePasswordDisplay" type="password" readonly value="••••••••"
                class="w-full bg-midnight/90 border border-white/10 rounded-xl pl-3.5 pr-11 py-2.5 text-sm text-slate-200 outline-none" />
              <button type="button" onclick="togglePasswordVisibility('profilePasswordDisplay', 'profileEyeIcon')"
                class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-gold-light p-1">
                <i id="profileEyeIcon" class="fa-regular fa-eye text-sm"></i>
              </button>
            </div>
          </div>

          <div class="pt-2 border-t border-white/5 flex gap-2.5">
            <button onclick="openDepositModal()" class="flex-1 py-2.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold hover:bg-emerald-500/25 transition">
              <i class="fa-solid fa-wallet mr-1.5"></i> Add Funds
            </button>
            <button onclick="logoutUser()" class="flex-1 py-2.5 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs font-bold hover:bg-rose-500/25 transition">
              <i class="fa-solid fa-right-from-bracket mr-1.5"></i> Sign Out
            </button>
          </div>
        </div>
      </section>
    </main>

    <!-- ==================== BOTTOM NAVIGATION ==================== -->
    <nav class="fixed bottom-0 z-30 w-full max-w-md bg-midnight/90 backdrop-blur-xl border-t border-gold/15 px-2 py-2 grid grid-cols-4 gap-1">
      <button data-tab="tab-store" onclick="switchTab('tab-store', this)" class="nav-btn active flex flex-col items-center justify-center py-1 text-slate-400 transition">
        <i class="fa-solid fa-store text-base mb-1"></i>
        <span class="text-[10px] font-bold tracking-wide">Store</span>
        <span class="nav-indicator w-5 h-0.5 rounded-full bg-gold-light mt-1"></span>
      </button>
      <button data-tab="tab-orders" onclick="switchTab('tab-orders', this)" class="nav-btn flex flex-col items-center justify-center py-1 text-slate-400 transition">
        <i class="fa-solid fa-credit-card text-base mb-1"></i>
        <span class="text-[10px] font-bold tracking-wide">My Cards</span>
        <span class="nav-indicator w-5 h-0.5 rounded-full bg-gold-light mt-1"></span>
      </button>
      <button data-tab="tab-update" onclick="switchTab('tab-update', this)" class="nav-btn flex flex-col items-center justify-center py-1 text-slate-400 transition">
        <i class="fa-solid fa-clock-rotate-left text-base mb-1"></i>
        <span class="text-[10px] font-bold tracking-wide">History</span>
        <span class="nav-indicator w-5 h-0.5 rounded-full bg-gold-light mt-1"></span>
      </button>
      <button data-tab="tab-profile" onclick="switchTab('tab-profile', this)" class="nav-btn flex flex-col items-center justify-center py-1 text-slate-400 transition">
        <i class="fa-solid fa-user-astronaut text-base mb-1"></i>
        <span class="text-[10px] font-bold tracking-wide">Profile</span>
        <span class="nav-indicator w-5 h-0.5 rounded-full bg-gold-light mt-1"></span>
      </button>
    </nav>

    <!-- ==================== TRON DEPOSIT MODAL ==================== -->
    <div id="depositModal" class="fixed inset-0 z-50 max-w-md mx-auto bg-black/80 backdrop-blur-sm hidden items-end sm:items-center justify-center p-4">
      <div class="glass-panel w-full rounded-3xl p-5 border border-gold/30 shadow-2xl animate-[fadeSlideUp_0.22s_ease-out] max-h-[92vh] overflow-y-auto">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-2">
            <span class="w-7 h-7 rounded-lg bg-[#ef0027] flex items-center justify-center text-white text-xs font-bold shadow">
              <i class="fa-solid fa-diamond"></i>
            </span>
            <div>
              <h3 class="font-serif-card text-base font-bold text-gold-gradient">Tron (TRC20) Deposit</h3>
              <p class="text-[11px] text-slate-400">Min $<span id="modalMinDepositLabel">6</span> • Scan QR or Copy Address</p>
            </div>
          </div>
          <button onclick="closeDepositModal()" class="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 flex items-center justify-center">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>

        <!-- QR & Address Card -->
        <div class="bg-white rounded-2xl p-4 text-center shadow-inner mb-3">
          <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold mb-2.5">
            <span class="w-4 h-4 rounded bg-[#ef0027] text-white flex items-center justify-center text-[9px]"><i class="fa-solid fa-diamond"></i></span>
            Tron (TRC20) • USDT / TRX
          </div>

          <div class="relative inline-flex items-center justify-center mx-auto">
            <img id="tronApiQrImg" src="" alt="Tron QR" class="hidden w-40 h-40 object-contain" />
            <div id="qrFallbackBox"></div>
            <div class="absolute w-8 h-8 rounded-lg bg-white p-0.5 shadow-md flex items-center justify-center pointer-events-none">
              <div class="w-full h-full rounded-md bg-[#ef0027] flex items-center justify-center text-white">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <path d="M3 4.5L13.5 21L21 9.5L16.5 5.5L3 4.5Z" stroke-linejoin="round"/>
                  <path d="M3 4.5L14 10.5L21 9.5M14 10.5L13.5 21M14 10.5L16.5 5.5" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          <p id="depositTronAddressDisplay" class="mt-2.5 font-mono text-[11px] sm:text-xs font-bold text-slate-900 break-all select-all">
            TU4PRGUqACPXRtsSM1zZejygQLGzLv1fBV
          </p>
        </div>

        <button type="button" onclick="copyTronAddress()"
          class="w-full py-2.5 rounded-xl bg-gold-gradient text-midnight text-xs font-extrabold mb-3 shadow-md active:scale-[0.98] transition flex items-center justify-center gap-2">
          <i class="fa-regular fa-copy"></i> Copy Tron Address
        </button>

        <div class="bg-amber-500/10 border border-amber-500/25 rounded-xl p-3 flex items-start gap-2">
          <i class="fa-solid fa-circle-exclamation text-amber-400 text-xs mt-0.5"></i>
          <p id="depositWarningText" class="text-[11px] text-amber-200/90 leading-snug">
            Only send Tron (TRC20) USDT or TRX to this address. Real amount sent on-chain will be credited automatically.
          </p>
        </div>
      </div>
    </div>

    <!-- ==================== PURCHASE CONFIRMATION MODAL ==================== -->
    <div id="confirmPurchaseModal" class="fixed inset-0 z-50 max-w-md mx-auto bg-black/80 backdrop-blur-sm hidden items-center justify-center p-4">
      <div class="glass-panel w-full rounded-3xl p-5 border border-gold/35 shadow-2xl animate-[fadeSlideUp_0.2s_ease-out]">
        <h3 class="font-serif-card text-base font-bold text-gold-gradient mb-1">Confirm Card Unlock</h3>
        <p id="confirmCardDesc" class="text-xs text-slate-300 mb-4"></p>
        <div class="flex gap-2.5">
          <button type="button" onclick="closeConfirmModal()" class="flex-1 py-2.5 rounded-xl bg-white/10 text-slate-200 text-xs font-bold">Cancel</button>
          <button type="button" id="confirmPurchaseBtn" onclick="executePurchase()" class="flex-1 py-2.5 rounded-xl bg-gold-gradient text-midnight text-xs font-extrabold">Confirm &amp; Pay</button>
        </div>
      </div>
    </div>

    <!-- Toast -->
    <div id="toast" class="fixed top-20 left-1/2 -translate-x-1/2 z-[70] hidden max-w-[92%] px-4 py-2.5 rounded-xl bg-midnight/95 border border-gold/40 text-xs font-semibold text-white shadow-2xl backdrop-blur-md items-center gap-2">
      <i id="toastIcon" class="fa-solid fa-circle-check text-emerald-400 shrink-0"></i>
      <span id="toastMsg" class="leading-tight">Notification</span>
    </div>
  </div>

  <!-- ==================== USER PANEL SCRIPT (SYNCED WITH ADMIN PANEL) ==================== -->
  <script>
    const API_BASE_URL = window.location.protocol.startsWith('http') ? window.location.origin : 'http://localhost:3000';
    const SHARED_STORAGE_KEY = 'cardzone26_shared_db_v1';
    const SESSION_EMAIL_KEY = 'cardzone26_logged_user_email';
    const syncChannel = typeof BroadcastChannel !== 'undefined' ? new BroadcastChannel('cardzone26_sync') : null;

    const CARD_TIERS = ['Obsidian', 'Royal Gold', 'Imperial', 'Sovereign', 'Platinum', 'Centurion', 'Titan', 'Sapphire', 'Emerald', 'Diamond', 'Aurelia', 'Monaco VIP', 'Geneva Elite', 'Zurich Prime', 'Mayfair', 'Velvet Black', 'Apex', 'Zenith', 'Crown', 'Celestial', 'Majestic', 'Vanguard', 'Heritage', 'Prestige', 'Infinite'];
    const PRICE_CURVE = [6, 8, 10, 12, 14, 16, 18, 20, 22, 25, 28, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 275, 300, 325, 350, 375, 400, 425, 450, 500];

    function escapeHtml(str) {
      return String(str ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    }

    function roundUsd(num) {
      return Math.round((Number(num) + Number.EPSILON) * 100) / 100;
    }

    function buildDefaultProducts() {
      return Array.from({ length: 50 }, (_, index) => {
        const num = index + 1;
        const network = index % 2 === 0 ? 'Visa' : 'Mastercard';
        const price = PRICE_CURVE[index];
        return {
          id: `cz-card-${num}`, numberTag: `#${String(num).padStart(2, '0')}`, network,
          name: `${network} ${CARD_TIERS[Math.floor(index / 2) % CARD_TIERS.length]} Vault`,
          tier: price >= 250 ? 'VIP Black Reserve' : (price >= 100 ? 'Elite Prestige' : (price >= 30 ? 'Gold Vault' : 'Starter Vault')),
          price, limit: `$${(price * 30).toLocaleString()} Limit`,
          features: ['Instant Unlock', '3D Secure', 'Global Online Pay'],
          badge: index === 0 ? 'From $6' : ['Starter', 'Popular', 'Best Value', 'Elite', 'VIP'][num % 5]
        };
      });
    }

    function buildDefaultUIConfig() {
      return {
        appName: 'CARDZONE26', appBadge: 'EST. 26', appSubtitle: 'Luxury Virtual Cards',
        loginScript: 'Private Virtual Vault', tierLabel: 'Verified Elite Tier',
        cardTitle: 'CARDZONE CENTURION', cardScript: 'Black Gold Reserve',
        cardNumber: '3759 876543 21001', cardValid: '12/30', cardTag: 'Member Since 26',
        tickerLines: ['Al*m K. purchased $6 Visa Starter', 'Ra*ul S. unlocked $35 Visa Platinum', 'Za*a M. purchased $18 Obsidian Vault'],
        depositWarning: 'Only send Tron (TRC20) USDT or TRX to this address. Real amount sent on-chain will be credited automatically.'
      };
    }

    let authMode = 'signin';
    let currentFilter = 'all';
    let loggedEmail = null;
    let lastQrAddress = '';
    let pendingPurchaseId = null;

    let sharedDB = {
      adminPassword: 'admin2026', receivingAddress: 'TU4PRGUqACPXRtsSM1zZejygQLGzLv1fBV', minDeposit: 6,
      uiConfig: buildDefaultUIConfig(), products: buildDefaultProducts(),
      users: [], depositRequests: [], adminWithdrawals: [], usedTxHashes: [], totalApprovedVolume: 0, totalWithdrawn: 0
    };

    document.addEventListener('DOMContentLoaded', async () => {
      loadLocalSharedDB();
      try { loggedEmail = localStorage.getItem(SESSION_EMAIL_KEY); } catch (e) {}
      await syncWithServer();
      renderAll();
      loadTronQR();

      setInterval(async () => {
        if (await syncWithServer()) renderAll();
      }, 4000);

      window.addEventListener('storage', () => {
        loadLocalSharedDB();
        renderAll();
      });
      if (syncChannel) {
        syncChannel.onmessage = () => {
          loadLocalSharedDB();
          renderAll();
        };
      }
    });

    function loadLocalSharedDB() {
      try {
        const raw = localStorage.getItem(SHARED_STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          sharedDB = { ...sharedDB, ...parsed };
          if (!Array.isArray(sharedDB.usedTxHashes)) sharedDB.usedTxHashes = [];
        }
      } catch (e) {}
    }

    function saveLocalSharedDB() {
      try {
        localStorage.setItem(SHARED_STORAGE_KEY, JSON.stringify(sharedDB));
        if (syncChannel) syncChannel.postMessage('updated');
      } catch (e) {}
    }

    async function syncWithServer() {
      try {
        const url = loggedEmail ? `${API_BASE_URL}/api/user/sync?email=${encodeURIComponent(loggedEmail)}` : `${API_BASE_URL}/api/public-config`;
        const res = await fetch(url);
        if (!res.ok) return false;
        const ct = res.headers.get('content-type') || '';
        if (!ct.includes('application/json')) return false;
        const data = await res.json();
        if (data.uiConfig) sharedDB.uiConfig = data.uiConfig;
        if (data.products) sharedDB.products = data.products;
        if (data.receivingAddress) sharedDB.receivingAddress = data.receivingAddress;
        if (data.minDeposit) sharedDB.minDeposit = Number(data.minDeposit) || 6;
        if (loggedEmail) {
          if (data.user) {
            const idx = sharedDB.users.findIndex(u => u.email === loggedEmail);
            if (idx !== -1) sharedDB.users[idx] = data.user;
            else sharedDB.users.push(data.user);
          } else {
            loggedEmail = null;
            try { localStorage.removeItem(SESSION_EMAIL_KEY); } catch (e) {}
          }
        }
        saveLocalSharedDB();
        return true;
      } catch (e) { return false; }
    }

    function getCurrentUser() {
      if (!loggedEmail) return null;
      return sharedDB.users.find(u => u.email === loggedEmail) || null;
    }

    function renderAll() {
      const user = getCurrentUser();
      if (user && user.status === 'blocked') {
        logoutUser();
        showToast('Account blocked by Admin!', 'error');
        return;
      }
      document.getElementById('authScreen').classList.toggle('hidden', !!user);

      const c = sharedDB.uiConfig || buildDefaultUIConfig();
      document.getElementById('brandTitleHeader').textContent = c.appName;
      document.getElementById('brandBadgeHeader').textContent = c.appBadge;
      document.getElementById('brandSubtitleHeader').textContent = c.appSubtitle;
      document.getElementById('brandTitleLogin').textContent = c.appName;
      document.getElementById('brandScriptLogin').textContent = c.loginScript;
      document.getElementById('profileTierText').innerHTML = `<i class="fa-solid fa-shield-check mr-1"></i> ${escapeHtml(c.tierLabel)}`;
      document.getElementById('goldCardTitle').textContent = c.cardTitle;
      document.getElementById('goldCardScript').textContent = c.cardScript;
      document.getElementById('goldCardNumber').textContent = c.cardNumber;
      document.getElementById('goldCardValid').textContent = c.cardValid;
      document.getElementById('goldCardTag').textContent = c.cardTag;
      document.getElementById('depositWarningText').textContent = c.depositWarning;
      document.getElementById('modalMinDepositLabel').textContent = sharedDB.minDeposit;
      document.getElementById('depositTronAddressDisplay').textContent = sharedDB.receivingAddress;

      if (lastQrAddress && lastQrAddress !== sharedDB.receivingAddress) {
        loadTronQR();
      }

      const lines = (c.tickerLines || []).filter(Boolean);
      const safeLines = lines.length ? lines : ['Live Vault Sync Active'];
      const track = document.getElementById('liveTickerTrack');
      const itemsHtml = safeLines.map(l => `<span class="flex items-center gap-1.5"><i class="fa-solid fa-bolt text-gold-light"></i> ${escapeHtml(l)}</span>`).join('');
      track.innerHTML = itemsHtml + itemsHtml;

      renderProducts();
      updateBalanceAndProfile();
      renderPurchasedCards();
      renderTransactions();
    }

    function setAuthMode(mode) {
      authMode = mode;
      const signInBtn = document.getElementById('modeSignInBtn');
      const signUpBtn = document.getElementById('modeSignUpBtn');
      const submitBtn = document.getElementById('authSubmitBtn');
      document.getElementById('authError').classList.add('hidden');
      if (mode === 'signin') {
        signInBtn.className = 'py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all bg-gold-gradient text-midnight shadow';
        signUpBtn.className = 'py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all text-slate-400 hover:text-white';
        submitBtn.innerHTML = 'Access Vault <i class="fa-solid fa-arrow-right ml-1.5"></i>';
      } else {
        signUpBtn.className = 'py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all bg-gold-gradient text-midnight shadow';
        signInBtn.className = 'py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all text-slate-400 hover:text-white';
        submitBtn.innerHTML = 'Create Vault <i class="fa-solid fa-user-plus ml-1.5"></i>';
      }
    }

    async function handleAuthSubmit(e) {
      e.preventDefault();
      const email = document.getElementById('authEmail').value.trim().toLowerCase();
      const password = document.getElementById('authPassword').value;
      const errorEl = document.getElementById('authError');

      if (!email.endsWith('@gmail.com') || email.length < 11) {
        errorEl.textContent = 'Please use a valid @gmail.com address.';
        errorEl.classList.remove('hidden');
        return;
      }
      if (password.length < 6) {
        errorEl.textContent = 'Password must be at least 6 characters.';
        errorEl.classList.remove('hidden');
        return;
      }

      let usedServer = false;
      try {
        const endpoint = authMode === 'signup' ? '/api/auth/signup' : '/api/auth/login';
        const res = await fetch(`${API_BASE_URL}${endpoint}`, {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        });
        const ct = res.headers.get('content-type') || '';
        if (ct.includes('application/json')) {
          usedServer = true;
          const data = await res.json();
          if (!res.ok || !data.success) {
            errorEl.textContent = data.message || 'Authentication failed';
            errorEl.classList.remove('hidden');
            return;
          }
          const idx = sharedDB.users.findIndex(u => u.email === email);
          if (idx !== -1) sharedDB.users[idx] = data.user;
          else sharedDB.users.unshift(data.user);
        }
      } catch (err) {}

      if (!usedServer) {
        loadLocalSharedDB();
        const existing = sharedDB.users.find(u => u.email === email);
        if (authMode === 'signup') {
          if (existing) { errorEl.textContent = 'Gmail already registered! Sign In karein.'; errorEl.classList.remove('hidden'); return; }
          sharedDB.users.unshift({
            uid: `#${7997 + sharedDB.users.length}`, email, password, balance: 0, totalDeposited: 0,
            status: 'active', purchasedCards: [], transactions: [],
            createdAt: new Date().toLocaleString(), lastLogin: new Date().toLocaleString()
          });
        } else {
          if (!existing) { errorEl.textContent = 'Account not found! Pehle Sign Up karein.'; errorEl.classList.remove('hidden'); return; }
          if (existing.password !== password) { errorEl.textContent = 'Incorrect password.'; errorEl.classList.remove('hidden'); return; }
          if (existing.status === 'blocked') { errorEl.textContent = 'Account BLOCKED by Admin.'; errorEl.classList.remove('hidden'); return; }
          existing.lastLogin = new Date().toLocaleString();
        }
      }

      loggedEmail = email;
      try { localStorage.setItem(SESSION_EMAIL_KEY, email); } catch (e) {}
      saveLocalSharedDB();
      errorEl.classList.add('hidden');
      renderAll();
      showToast('Welcome to CARDZONE26!');
    }

    function logoutUser() {
      loggedEmail = null;
      try { localStorage.removeItem(SESSION_EMAIL_KEY); } catch (e) {}
      renderAll();
      showToast('Signed out', 'info');
    }

    function togglePasswordVisibility(inputId, iconId) {
      const input = document.getElementById(inputId);
      const icon = document.getElementById(iconId);
      if (input.type === 'password') { input.type = 'text'; icon.classList.replace('fa-eye', 'fa-eye-slash'); }
      else { input.type = 'password'; icon.classList.replace('fa-eye-slash', 'fa-eye'); }
    }

    function switchTab(tabId, btnEl) {
      document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
      document.getElementById(tabId).classList.add('active');
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      if (btnEl) {
        btnEl.classList.add('active');
      } else {
        const match = document.querySelector(`.nav-btn[data-tab="${tabId}"]`);
        if (match) match.classList.add('active');
      }
    }

    async function loadTronQR() {
      const addr = sharedDB.receivingAddress;
      lastQrAddress = addr;
      const img = document.getElementById('tronApiQrImg');
      const fallback = document.getElementById('qrFallbackBox');
      img.classList.add('hidden');
      fallback.classList.remove('hidden');
      fallback.innerHTML = '';
      if (typeof QRCode !== 'undefined') {
        new QRCode(fallback, { text: addr, width: 160, height: 160, colorDark: '#000000', colorLight: '#ffffff', correctLevel: QRCode.CorrectLevel.H });
      }
      try {
        const res = await fetch(`${API_BASE_URL}/api/generate-qr?text=${encodeURIComponent(addr)}`);
        if (res.ok) {
          const ct = res.headers.get('content-type') || '';
          if (ct.includes('application/json')) {
            const data = await res.json();
            if (data.success && data.qrCode) { img.src = data.qrCode; img.classList.remove('hidden'); fallback.classList.add('hidden'); }
          }
        }
      } catch (e) {}
    }

    function copyTronAddress() { copyText(sharedDB.receivingAddress, 'Tron address copied!'); }

    function filterProducts(category, btnEl) {
      currentFilter = category;
      document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.className = 'filter-btn px-3.5 py-2 rounded-xl text-xs font-bold tracking-wide transition glass-panel text-slate-300 hover:text-gold-light';
      });
      btnEl.className = 'filter-btn active px-3.5 py-2 rounded-xl text-xs font-bold tracking-wide transition bg-gold-gradient text-midnight shadow';
      renderProducts();
    }

    function renderProducts() {
      const container = document.getElementById('productList');
      const query = (document.getElementById('cardSearchInput')?.value || '').trim().toLowerCase();
      const allProds = sharedDB.products || [];
      document.getElementById('countAllBtn').textContent = allProds.length;
      document.getElementById('countVisaBtn').textContent = allProds.filter(p => p.network === 'Visa').length;
      document.getElementById('countMcBtn').textContent = allProds.filter(p => p.network === 'Mastercard').length;

      const items = allProds.filter(p =>
        (currentFilter === 'all' || p.network === currentFilter) &&
        (!query || p.name.toLowerCase().includes(query) || String(p.price).includes(query) || p.tier.toLowerCase().includes(query))
      );
      document.getElementById('showingCardsCount').textContent = `${items.length} Card${items.length === 1 ? '' : 's'}`;

      if (items.length === 0) {
        container.innerHTML = `<div class="glass-panel rounded-2xl p-8 text-center border border-dashed border-white/10"><i class="fa-solid fa-magnifying-glass text-2xl text-slate-500 mb-2"></i><p class="text-xs font-bold text-slate-300">No cards match your search</p></div>`;
        return;
      }

      container.innerHTML = items.map(product => `
        <div class="glass-panel rounded-2xl p-4 border border-gold/20 hover:border-gold/45 transition">
          <div class="flex items-start justify-between gap-3">
            <div class="flex items-center gap-3">
              <div class="w-11 h-11 rounded-xl bg-midnight border border-white/10 flex items-center justify-center text-2xl">
                <i class="fa-brands ${product.network === 'Visa' ? 'fa-cc-visa text-blue-400' : 'fa-cc-mastercard text-amber-400'}"></i>
              </div>
              <div>
                <div class="flex items-center gap-1.5 flex-wrap">
                  <span class="text-[10px] font-mono text-slate-400">${escapeHtml(product.numberTag)}</span>
                  <h3 class="font-bold text-sm text-white">${escapeHtml(product.name)}</h3>
                  <span class="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-gold/15 text-gold-light border border-gold/30">${escapeHtml(product.badge)}</span>
                </div>
                <p class="text-[11px] text-slate-400 mt-0.5">${escapeHtml(product.tier)} • <span class="text-emerald-400 font-semibold">${escapeHtml(product.limit)}</span></p>
              </div>
            </div>
            <p class="font-serif-card text-lg font-bold text-gold-light">$${Number(product.price)}</p>
          </div>
          <div class="flex flex-wrap gap-1.5 my-3">
            ${(product.features || ['Instant Unlock', '3D Secure', 'Global Online Pay']).map(f => `<span class="text-[10px] px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/5"><i class="fa-solid fa-check text-emerald-400 mr-1 text-[9px]"></i>${escapeHtml(f)}</span>`).join('')}
          </div>
          <button onclick="purchaseCard('${escapeHtml(product.id)}')" class="w-full py-2.5 rounded-xl bg-gold-gradient text-midnight font-extrabold text-xs uppercase tracking-wider shadow-md active:scale-[0.98] transition flex items-center justify-center gap-2">
            <i class="fa-solid fa-unlock-keyhole"></i> Unlock Card — $${Number(product.price)}
          </button>
        </div>
      `).join('');
    }

    // ==================== DEPOSIT MODAL ====================
    function openDepositModal() {
      document.getElementById('depositModal').classList.remove('hidden');
      document.getElementById('depositModal').classList.add('flex');
      loadTronQR();
    }

    function closeDepositModal() {
      document.getElementById('depositModal').classList.add('hidden');
      document.getElementById('depositModal').classList.remove('flex');
    }

    // ==================== CARD PURCHASE WITH CONFIRMATION ====================
    function purchaseCard(productId) {
      const user = getCurrentUser();
      if (!user) return;
      const product = sharedDB.products.find(p => p.id === productId);
      if (!product) return;
      if (user.balance < product.price) {
        showToast(`Insufficient balance! Need $${product.price}.`, 'error');
        openDepositModal();
        return;
      }
      pendingPurchaseId = productId;
      document.getElementById('confirmCardDesc').innerHTML = `Unlock <strong class="text-gold-light">${escapeHtml(product.name)}</strong> (${escapeHtml(product.limit)}) for <strong class="text-emerald-400">$${Number(product.price)}</strong>?`;
      document.getElementById('confirmPurchaseModal').classList.remove('hidden');
      document.getElementById('confirmPurchaseModal').classList.add('flex');
    }

    function closeConfirmModal() {
      pendingPurchaseId = null;
      document.getElementById('confirmPurchaseModal').classList.add('hidden');
      document.getElementById('confirmPurchaseModal').classList.remove('flex');
    }

    function generateLuhnCardNumber(network) {
      const prefix = network === 'Visa' ? '4532' : '5412';
      let digits = prefix.split('').map(Number);
      while (digits.length < 15) digits.push(Math.floor(Math.random() * 10));
      let sum = 0;
      for (let i = 0; i < 15; i++) {
        let d = digits[14 - i];
        if (i % 2 === 0) { d *= 2; if (d > 9) d -= 9; }
        sum += d;
      }
      const checkDigit = (10 - (sum % 10)) % 10;
      digits.push(checkDigit);
      const raw = digits.join('');
      return `${raw.slice(0, 4)} ${raw.slice(4, 8)} ${raw.slice(8, 12)} ${raw.slice(12, 16)}`;
    }

    async function executePurchase() {
      const productId = pendingPurchaseId;
      closeConfirmModal();
      const user = getCurrentUser();
      if (!user || !productId) return;
      const product = sharedDB.products.find(p => p.id === productId);
      if (!product) return;

      let serverRespondedJson = false;
      try {
        const res = await fetch(`${API_BASE_URL}/api/user/purchase`, {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: user.email, productId })
        });
        const ct = res.headers.get('content-type') || '';
        if (ct.includes('application/json')) {
          serverRespondedJson = true;
          const data = await res.json();
          if (!res.ok || !data.success) {
            showToast(data.message || 'Purchase rejected by server', 'error');
            return;
          }
          const idx = sharedDB.users.findIndex(u => u.email === user.email);
          if (idx !== -1) sharedDB.users[idx] = data.user;
          saveLocalSharedDB();
          renderAll();
          switchTab('tab-orders');
          showToast(`${product.name} unlocked in My Cards!`);
          return;
        }
      } catch (e) {}

      if (serverRespondedJson) return;

      if (user.balance < product.price) {
        showToast(`Insufficient balance! Need $${product.price}.`, 'error');
        return;
      }

      user.balance = roundUsd(user.balance - product.price);
      const now = new Date().toLocaleString([], { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
      user.purchasedCards.unshift({
        uid: 'CARD-' + Date.now(), name: product.name, network: product.network, limit: product.limit, price: product.price,
        number: generateLuhnCardNumber(product.network),
        expiry: `${String(Math.floor(1 + Math.random() * 12)).padStart(2, '0')}/${28 + Math.floor(Math.random() * 4)}`,
        cvv: String(Math.floor(100 + Math.random() * 900)), purchasedAt: now
      });
      user.transactions.unshift({
        id: 'TXN-' + Math.floor(100000 + Math.random() * 900000),
        type: 'purchase', title: `Purchased ${product.name}`, amount: -product.price, date: now, status: 'Unlocked'
      });
      saveLocalSharedDB();
      renderAll();
      switchTab('tab-orders');
      showToast(`${product.name} unlocked in My Cards!`);
    }

    function renderPurchasedCards() {
      const user = getCurrentUser();
      const cards = user ? (user.purchasedCards || []) : [];
      document.getElementById('ordersCountBadge').textContent = `${cards.length} Card${cards.length === 1 ? '' : 's'}`;
      const container = document.getElementById('purchasedCardsList');
      if (cards.length === 0) {
        container.innerHTML = `<div class="glass-panel rounded-2xl p-8 text-center border border-dashed border-gold/25"><i class="fa-regular fa-credit-card text-3xl text-gold/50 mb-3"></i><p class="text-sm font-bold text-slate-300">Your Vault is Empty</p></div>`;
        return;
      }
      container.innerHTML = cards.map(card => `
        <div class="rounded-2xl p-5 bg-gradient-to-br from-[#0f172a] via-[#070d1b] to-[#04070d] border border-gold/35 shadow-xl">
          <div class="flex items-center justify-between mb-4">
            <div><span class="text-[10px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">Active Vault</span><h3 class="font-serif-card font-bold text-sm text-gold-light mt-1.5">${escapeHtml(card.name)}</h3></div>
            <i class="fa-brands ${card.network === 'Visa' ? 'fa-cc-visa text-blue-400' : 'fa-cc-mastercard text-amber-400'} text-3xl"></i>
          </div>
          <div class="bg-midnight/80 border border-white/10 rounded-xl p-3.5 mb-3 flex items-center justify-between">
            <div><p class="text-[9px] uppercase tracking-widest text-slate-400">Card Number</p><p class="font-mono text-sm sm:text-base font-bold text-white tracking-widest mt-0.5">${escapeHtml(card.number)}</p></div>
            <button onclick="copyText('${escapeHtml(card.number)}', 'Card number copied!')" class="px-2.5 py-1.5 rounded-lg bg-gold/15 hover:bg-gold/25 text-gold-light text-xs font-semibold"><i class="fa-regular fa-copy"></i></button>
          </div>
          <div class="grid grid-cols-3 gap-2 text-center">
            <div onclick="copyText('${escapeHtml(card.expiry)}', 'Expiry copied!')" class="cursor-pointer bg-midnight/70 border border-white/5 hover:border-gold/30 rounded-xl p-2.5"><p class="text-[9px] uppercase text-slate-400">Expiry</p><p class="font-mono text-xs font-bold text-white mt-0.5">${escapeHtml(card.expiry)}</p></div>
            <div onclick="copyText('${escapeHtml(card.cvv)}', 'CVV copied!')" class="cursor-pointer bg-midnight/70 border border-white/5 hover:border-gold/30 rounded-xl p-2.5"><p class="text-[9px] uppercase text-slate-400">CVV</p><p class="font-mono text-xs font-bold text-gold-light mt-0.5">${escapeHtml(card.cvv)}</p></div>
            <div class="bg-midnight/70 border border-white/5 rounded-xl p-2.5"><p class="text-[9px] uppercase text-slate-400">Cap</p><p class="text-[11px] font-bold text-emerald-400 mt-0.5">${escapeHtml(String(card.limit || '').replace(' Limit', ''))}</p></div>
          </div>
        </div>
      `).join('');
    }

    function renderTransactions() {
      const user = getCurrentUser();
      const txs = user ? (user.transactions || []) : [];
      const container = document.getElementById('transactionList');
      if (txs.length === 0) {
        container.innerHTML = `<div class="glass-panel rounded-2xl p-8 text-center border border-dashed border-white/10"><i class="fa-solid fa-receipt text-3xl text-slate-600 mb-3"></i><p class="text-sm font-bold text-slate-300">No Transactions Yet</p></div>`;
        return;
      }
      container.innerHTML = txs.map(tx => {
        const isDep = tx.type === 'deposit';
        const isTxHash = /^[a-fA-F0-9]{64}$/.test(tx.id || '');
        return `
          <div class="glass-panel rounded-2xl p-3.5 flex items-center justify-between gap-3">
            <div class="flex items-center gap-3 min-w-0">
              <div class="w-10 h-10 rounded-xl ${isDep ? 'bg-emerald-500/10 text-emerald-400' : 'bg-gold/10 text-gold-light'} flex items-center justify-center shrink-0"><i class="fa-solid ${isDep ? 'fa-plus' : 'fa-credit-card'} text-sm"></i></div>
              <div class="min-w-0">
                <p class="text-xs font-bold text-white truncate">${escapeHtml(tx.title)}</p>
                <p class="text-[10px] text-slate-400 mt-0.5">${escapeHtml(tx.shortId || tx.id)} • ${escapeHtml(tx.date)} ${isTxHash ? `<a href="https://tronscan.org/#/transaction/${encodeURIComponent(tx.id)}" target="_blank" rel="noopener noreferrer" class="text-sky-400 underline ml-1">TronScan</a>` : ''}</p>
              </div>
            </div>
            <div class="text-right shrink-0">
              <p class="text-sm font-extrabold ${isDep ? 'text-emerald-400' : 'text-gold-light'}">${isDep ? '+' : '-'}$${Math.abs(Number(tx.amount || 0)).toFixed(2)}</p>
              <span class="inline-block text-[9px] font-bold uppercase px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mt-0.5">${escapeHtml(tx.status)}</span>
            </div>
          </div>
        `;
      }).join('');
    }

    function updateBalanceAndProfile() {
      const user = getCurrentUser();
      const formatted = `$${roundUsd(user ? user.balance : 0).toFixed(2)}`;
      document.getElementById('liveBalance').textContent = formatted;
      document.getElementById('profileBalance').textContent = formatted;
      document.getElementById('profileCardCount').textContent = user ? (user.purchasedCards || []).length : 0;
      document.getElementById('profileEmail').textContent = user ? user.email : 'member@gmail.com';
      document.getElementById('profileUid').textContent = user ? user.uid : '#7997';
      document.getElementById('profilePasswordDisplay').value = user ? user.password : '••••••••';
      document.getElementById('featuredCardHolder').textContent = user
        ? (user.email.split('@')[0].replace(/[^a-zA-Z0-9 ]/g, ' ').toUpperCase() || 'VAULT MEMBER').slice(0, 18)
        : 'VAULT MEMBER';
    }

    function copyText(text, msg = 'Copied!') {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => showToast(msg)).catch(() => fallbackCopy(text, msg));
      } else {
        fallbackCopy(text, msg);
      }
    }

    function fallbackCopy(text, msg) {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); showToast(msg); } catch (e) {}
      document.body.removeChild(ta);
    }

    let toastTimer;
    function showToast(msg, type = 'success') {
      const toast = document.getElementById('toast');
      document.getElementById('toastMsg').textContent = msg;
      document.getElementById('toastIcon').className = type === 'error' ? 'fa-solid fa-triangle-exclamation text-rose-400 shrink-0' : (type === 'info' ? 'fa-solid fa-circle-info text-gold-light shrink-0' : 'fa-solid fa-circle-check text-emerald-400 shrink-0');
      toast.classList.remove('hidden'); toast.classList.add('flex');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => { toast.classList.add('hidden'); toast.classList.remove('flex'); }, 3200);
    }
  </script>
</body>
</html>