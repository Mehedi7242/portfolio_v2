


export default function WaveBorderAvatar() {
  return (
<div className="relative w-48 h-48 mx-auto">
  {/* Blurry animated border with light/dark support */}
  <div className="absolute inset-0 rounded-full blur-2xl z-0 animate-pulse 
    bg-gradient-to-br 
    from-blue-400 via-purple-500 to-green-400 
    dark:from-blue-700 dark:via-purple-800 dark:to-green-600 
    opacity-60" 
  />

  {/* Profile Image */}
  <img
    src="/mehedi1.jpg"
    alt="Mehedi Hasan"
    className="relative z-10 w-48 h-48 rounded-full object-cover 
      border-4 border-white 
      dark:border-zinc-800 
      shadow-lg dark:shadow-black/40"
  />
</div>

  );
}
