


export default function HeaderComponent({ setSidebarOpen = () => { } }: HeaderComponent) {

  return (
    <header className="bg-white w-full">
      <div className="p-4">
        <button className="cursor-pointer" onClick={() => setSidebarOpen(open => !open)}>
          <div className="h-8 w-8 p-1.5 bg-gray-200 rounded-md">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
              <path d="M27 193.6c-8.2-8.2-12.2-18.6-12.2-31.2s4-23 12.2-31.2S45.6 119 58.2 119h912.4c12.6 0 23 4 31.2 12.2s12.2 18.6 12.2 31.2-4 23-12.2 31.2-18.6 12.2-31.2 12.2H58.2c-12.6 0-23-4-31.2-12.2zm974.8 285.2c8.2 8.2 12.2 18.6 12.2 31.2s-4 23-12.2 31.2-18.6 12.2-31.2 12.2H58.2c-12.6 0-23-4-31.2-12.2S14.8 522.6 14.8 510s4-23 12.2-31.2 18.6-12.2 31.2-12.2h912.4c12.6 0 23 4 31.2 12.2zm0 347.4c8.2 8.2 12.2 18.6 12.2 31.2s-4 23-12.2 31.2-18.6 12.2-31.2 12.2H58.2c-12.6 0-23-4-31.2-12.2S14.8 870 14.8 857.4s4-23 12.2-31.2S45.6 814 58.2 814h912.4c12.6 0 23 4.2 31.2 12.2z"></path>
            </svg>
          </div>
        </button>
      </div>
    </header>
  );
}