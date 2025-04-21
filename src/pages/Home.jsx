import sm1 from '../utils/sm1.jpeg';


import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-4xl mx-auto mb-12">
        <div className="relative aspect-video overflow-hidden rounded-xl shadow-xl">
          <img
            src={sm1}
            alt="Seedhe Maut Fan Art"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 md:p-8">
            <h1 className="text-white text-3xl md:text-5xl font-bold mb-2">SEEDHE MAUT</h1>
            <p className="text-gray-200 text-lg md:text-xl">The voice of India's underground hip-hop</p>
          </div>
        </div>
      </div>

      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Welcome to the Zone</h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
          The ultimate fan space dedicated to India's most raw and authentic hip-hop duo. Dive into their journey,
          stats, and connect with other fans.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/about" className="btn btn-primary">
            Discover Their Story
          </Link>
          <Link to="/stats" className="btn bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600">
            Check The Numbers
          </Link>
        </div>
      </div>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card p-6 bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
          <h3 className="text-xl font-bold mb-2">Latest Release</h3>
          <p className="mb-4">Stay updated with their newest tracks and albums</p>
          <Link
            to="/stats"
            className="inline-block px-4 py-2 bg-white text-purple-600 rounded-md font-medium hover:bg-gray-100"
          >
            View Discography
          </Link>
        </div>

        <div className="card p-6">
          <h3 className="text-xl font-bold mb-2">Join The Community</h3>
          <p className="mb-4 text-gray-700 dark:text-gray-300">Share your thoughts and connect with other fans</p>
          <Link
            to="/feedback"
            className="inline-block px-4 py-2 bg-purple-600 text-white rounded-md font-medium hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-800"
          >
            Leave Feedback
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
