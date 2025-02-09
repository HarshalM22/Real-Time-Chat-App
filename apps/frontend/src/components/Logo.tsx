interface LogoProps{
  label : string
}
export const Logo = ({label}:LogoProps) => (
    <div className="flex flex-col items-center gap-4 mb-8">
      <div className="w-16 h-16 bg-blue-500 rounded-full"/>
      <h1 className="text-3xl font-bold">{label}</h1>
    </div>
  );