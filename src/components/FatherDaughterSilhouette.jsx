export default function FatherDaughterSilhouette() {
  return (
    <div className="relative h-full w-full">
      {/* Contraluz dourado */}
      <div
        className="absolute bottom-[8%] left-[10%] h-[70%] w-[55%] rounded-full opacity-90"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255, 190, 90, 0.85) 0%, rgba(255, 120, 60, 0.45) 35%, rgba(255, 77, 157, 0.15) 60%, transparent 75%)",
          filter: "blur(8px)",
        }}
      />
      <div
        className="absolute bottom-[15%] left-[18%] h-[45%] w-[35%] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 220, 130, 0.95) 0%, rgba(255, 160, 70, 0.5) 50%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />

      <svg
        viewBox="0 0 420 480"
        className="relative z-10 h-full w-full drop-shadow-[0_0_40px_rgba(255,120,60,0.3)]"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="silhouetteGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1a0a20" />
            <stop offset="100%" stopColor="#0a0410" />
          </linearGradient>
          <filter id="heartNeon" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="silhouetteGlow">
            <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#ff8040" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* Coração neon */}
        <path
          d="M210 430 C210 430 35 270 35 155 C35 75 90 25 145 25 C182 25 205 55 210 95 C215 55 238 25 275 25 C330 25 385 75 385 155 C385 270 210 430 210 430Z"
          fill="none"
          stroke="#ff4d9d"
          strokeWidth="2.5"
          opacity="0.95"
          filter="url(#heartNeon)"
        />
        <path
          d="M210 430 C210 430 35 270 35 155 C35 75 90 25 145 25 C182 25 205 55 210 95 C215 55 238 25 275 25 C330 25 385 75 385 155 C385 270 210 430 210 430Z"
          fill="none"
          stroke="#ff8ec4"
          strokeWidth="1"
          opacity="0.5"
        />

        {/* Chão / horizonte */}
        <ellipse cx="210" cy="420" rx="180" ry="18" fill="rgba(255,140,60,0.15)" />

        {/* Silhueta — pai */}
        <g filter="url(#silhouetteGlow)">
          {/* Pernas */}
          <path d="M155 380 L148 420 L168 420 L175 380 Z" fill="url(#silhouetteGrad)" />
          <path d="M235 380 L228 420 L248 420 L255 380 Z" fill="url(#silhouetteGrad)" />
          {/* Corpo */}
          <path
            d="M148 280 Q140 220 165 180 Q195 155 210 165 Q225 155 255 180 Q280 220 272 280 L260 380 L155 380 Z"
            fill="url(#silhouetteGrad)"
          />
          {/* Braço esquerdo segurando filha */}
          <path
            d="M148 220 Q110 200 95 240 Q88 270 105 285 Q120 295 140 270 Q155 250 148 220Z"
            fill="url(#silhouetteGrad)"
          />
          {/* Braço direito abraçando */}
          <path
            d="M272 220 Q310 200 325 245 Q332 275 310 290 Q290 300 270 275 Q258 250 272 220Z"
            fill="url(#silhouetteGrad)"
          />
          {/* Cabeça pai */}
          <ellipse cx="210" cy="148" rx="38" ry="42" fill="url(#silhouetteGrad)" />
          {/* Cabelo/contorno cabeça */}
          <path
            d="M172 145 Q168 115 195 105 Q210 98 225 105 Q252 115 248 145 Q245 130 210 125 Q175 130 172 145Z"
            fill="#0a0410"
          />

          {/* Silhueta — filha (no colo) */}
          <path
            d="M185 250 Q170 230 175 210 Q180 195 198 188 Q215 182 228 195 Q240 210 235 230 Q230 250 215 265 Q200 275 185 250Z"
            fill="url(#silhouetteGrad)"
          />
          {/* Cabeça filha */}
          <ellipse cx="205" cy="198" rx="22" ry="24" fill="url(#silhouetteGrad)" />
          {/* Cabelo filha */}
          <path
            d="M183 198 Q180 178 200 172 Q215 168 225 178 Q230 188 228 198 Q220 185 205 182 Q190 185 183 198Z"
            fill="#0a0410"
          />
          {/* Braços filha abraçando pai */}
          <path
            d="M183 230 Q165 225 160 245 Q158 258 172 262 Q185 265 190 248 Q188 238 183 230Z"
            fill="url(#silhouetteGrad)"
          />
          <path
            d="M227 230 Q245 225 250 245 Q252 258 238 262 Q225 265 220 248 Q222 238 227 230Z"
            fill="url(#silhouetteGrad)"
          />
        </g>
      </svg>
    </div>
  );
}
