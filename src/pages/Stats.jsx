"use client"

import { useState, useEffect } from "react"
import Card from "../components/Card"
import axios from "axios"

const Stats = () => {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    
    const fetchStats = async () => {
      try {
        
        const res = await axios.get("https://raw.githubusercontent.com/sandhu-boop/sm-data/main/data.json")
        // console.log(res)
        setStats(res.data)
        setLoading(false);
      } catch (error) {
        console.error("Error fetching stats:", error)
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600"></div>
      </div>
    )
  }

  if (!stats) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Failed to load stats</h2>
        <p>Please try again later</p>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">By The Numbers</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Card
          title="Spotify Stats"
          className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border border-green-200 dark:border-green-800"
        >
          <div className="flex flex-col space-y-4">
            <div className="flex items-center">
              <svg className="w-8 h-8 text-green-600 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
              <div>
                <h3 className="text-lg font-bold">Monthly Listeners</h3>
                <p className="text-2xl font-bold">{stats.spotify.monthlyListeners.toLocaleString()}</p>
              </div>
            </div>

            <h4 className="font-bold mt-4">Top Tracks</h4>
            <ul className="space-y-2">
              {stats.spotify.topTracks.map((track, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center p-2 bg-white dark:bg-gray-800 rounded-md shadow-sm"
                >
                  <span className="font-medium">{track.title}</span>
                  <span className="text-gray-600 dark:text-gray-400">
                    {(track.streams / 1000000).toFixed(1)}M streams
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Card>

        <Card
          title="YouTube Stats"
          className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border border-red-200 dark:border-red-800"
        >
          <div className="flex flex-col space-y-4">
            <div className="flex items-center">
              <svg className="w-8 h-8 text-red-600 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              <div>
                <h3 className="text-lg font-bold">Subscribers</h3>
                <p className="text-2xl font-bold">{stats.youtube.subscribers.toLocaleString()}</p>
              </div>
            </div>

            <div className="flex items-center mt-4">
              <svg
                className="w-8 h-8 text-red-600 mr-3"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              <div>
                <h3 className="text-lg font-bold">Total Views</h3>
                <p className="text-2xl font-bold">{stats.youtube.totalViews.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="Discography" className="h-full">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">{stats.discography.albums}</p>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Albums</p>
            </div>
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">{stats.discography.eps}</p>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">EPs</p>
            </div>
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">{stats.discography.singles}</p>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Singles</p>
            </div>
          </div>
        </Card>

        <Card title="Live Performances" className="h-full">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">{stats.performances.liveShows}</p>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Shows</p>
            </div>
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">{stats.performances.festivals}</p>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Festivals</p>
            </div>
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                {stats.performances.internationalTours}
              </p>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Int'l Tours</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Stats
