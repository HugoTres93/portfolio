const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Portfolio</p>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.89-2.38 8.56 8.56 0 01-2.72 1.04 4.3 4.3 0 00-7.32 3.92 12.2 12.2 0 01-8.84-4.48 4.3 4.3 0 001.33 5.74c-.66-.02-1.28-.2-1.82-.5v.05a4.3 4.3 0 003.45 4.2 4.27 4.27 0 01-1.94.07 4.3 4.3 0 004.02 3 8.6 8.6 0 01-5.3 1.83A8.43 8.43 0 012 18.57a12.14 12.14 0 006.6 1.93c7.92 0 12.26-6.55 12.26-12.26 0-.19 0-.37-.01-.56A8.76 8.76 0 0024 5.13a8.53 8.53 0 01-2.54.7z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-gray-400 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.75 3H4.25C3.56 3 3 3.56 3 4.25v15.5C3 20.44 3.56 21 4.25 21h15.5c.69 0 1.25-.56 1.25-1.25V4.25C21 3.56 20.44 3 19.75 3zM8.09 17.27H5.5V9h2.59v8.27zM6.8 7.77c-.83 0-1.5-.67-1.5-1.5S5.97 4.77 6.8 4.77s1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm10.47 9.5h-2.59v-4.02c0-.96-.02-2.2-1.34-2.2-1.35 0-1.56 1.05-1.56 2.14v4.08H9.2V9h2.48v1.13h.03c.35-.67 1.2-1.38 2.46-1.38 2.63 0 3.12 1.73 3.12 3.98v4.54z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;