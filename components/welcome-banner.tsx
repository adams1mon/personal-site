'use client';

export function WelcomeBanner() {
  return (
    <div className="welcome-banner">
      <pre className="ascii-art text-center text-sm">
{`  _    _      _ _         _____ _                    _ 
 | |  | |    | | |       |_   _| |                  | |
 | |__| | ___| | | ___     | | | |__   ___ _ __ ___| |
 |  __  |/ _ \\ | |/ _ \\    | | | '_ \\ / _ \\ '__/ _ \\ |
 | |  | |  __/ | | (_) |   | | | | | |  __/ | |  __/_|
 |_|  |_|\\___|_|_|\\___/    \\_/ |_| |_|\\___|_|  \\___(_)`}
      </pre>
      <div className="text-center mt-4">
        <p className="text-accent">Welcome to my digital garden 🌱</p>
        <p className="text-sm text-muted">A cozy corner of the internet where I explore ideas and share discoveries</p>
      </div>
    </div>
  );
}