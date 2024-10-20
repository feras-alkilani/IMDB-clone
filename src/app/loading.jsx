import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Image 
        className="h-24 w-24" 
        src="/spinner.svg" // تأكد من استخدام / في بداية المسار 
        alt="Loading..." 
        width={96}
        height={96} 
      />
    </div>
  );
}
