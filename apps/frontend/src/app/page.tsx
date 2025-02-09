

export default function Home() {
  return (
    <div className=" bg-white px-20">
     <nav className="flex items-center justify-between p-6">
      <div className="flex items-center">
        <div className="w-10 h-10 bg-blue-600 rounded-full"></div>
        <span className="ml-2 text-xl font-semibold">ChatFlow</span>
      </div>
      <div className="flex items-center gap-8">
        <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
        <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
        <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
        <button className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
          Sign Up
        </button>
      </div>
    </nav>

    <main className="max-w-7xl rounded-xl bg-blue-200  mx-auto px-6 py-12">
     <div className="max-w-6xl mx-auto px-6 py-12">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold">
            Connect with Anyone,{' '}
            <span className="text-blue-600">
              Anywhere, Anytime
            </span>
          </h1>
          <p className="text-xl text-gray-600">
            Experience seamless communication with our modern chat platform
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
              Get Started
            </button>
            <button className="px-6 py-3 text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50">
              Learn More
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="space-y-4">
            <div className="bg-gray-100 rounded-lg p-4 max-w-xs">
              Hey, how are you?
            </div>
            <div className="flex justify-end">
              <div className="bg-blue-600 text-white rounded-lg p-4 max-w-xs">
                I'm doing great!
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="w-12 h-12 bg-blue-600 rounded-full mb-4"></div>
          <h3 className="text-xl font-semibold mb-2">Real-time Chat</h3>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="w-12 h-12 bg-blue-600 rounded-full mb-4"></div>
          <h3 className="text-xl font-semibold mb-2">Group Chats</h3>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="w-12 h-12 bg-blue-600 rounded-full mb-4"></div>
          <h3 className="text-xl font-semibold mb-2">File Sharing</h3>
        </div>
      </div>
      </div>
    </main> 
  </div>
  
  );
}
