import { useState } from "react";
import { InputBox } from "./components/InputBox";
import { MyLineChart } from "./components/Chart";
import { Analytics } from "@vercel/analytics/react"

function App() {
  const [isHome, setIsHome] = useState<boolean>(true);
  const [name, setName] = useState<string>("");
  const [followers, setFollowers] = useState<number|null>(null);
  const [posts, setPosts] = useState<number|null>(null);

  const handleSubmit = () => {
    if (name === "" || followers === null || posts === null) {
      alert("please fill rest of the inputs");
      return;
    }
    setIsHome(false);
  }
  if (!isHome) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-white border-4 px-8 py-4 border-black rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] w-full max-w-lg flex flex-col gap-1">
          <h1 className="text-xl font-black uppercase">
            @{name}
          </h1>
          <div className="border-0 border-amber-400">
            <MyLineChart followers={followers || 0} posts={posts || 0} />
          </div>
          
        </div>
        <Analytics />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white border-4 border-black p-8 rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] w-full max-w-lg flex flex-col gap-8">
        
        <h1 className="text-4xl font-black text-center tracking-tighter uppercase">
          kms-chart
        </h1>

        <div className="flex flex-col gap-4">
          <InputBox 
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Name" 
            placeholder="Enter Name..." 
            type="text"
          />
          <InputBox 
            value={followers || ""}
            onChange={(e) => setFollowers(Number(e.target.value))}
            label="Followers" 
            placeholder="Enter Number of Followers..." 
            type="number"
          />
          <InputBox 
            value={posts || ""}
            onChange={(e) => setPosts(Number(e.target.value))}
            label="Number of Posts" 
            placeholder="Enter Number of Posts..." 
            type="number"
          />
          <Submit onClick={handleSubmit} />
        </div>

      </div>
    </div>
  )
}

function Submit({onClick}: {onClick: () => void}) {
  return (
    <div className="w-full flex justify-center">
      <button
        className={`cursor-pointer px-5 py-2 border-2 border-black rounded-lg bg-black text-white placeholder-gray-500 selection:bg-black selection:text-white`}
        onClick={onClick}
      >
        Submit
      </button>
    </div>
  );
}


export default App
