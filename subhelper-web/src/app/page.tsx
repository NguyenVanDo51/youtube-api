'use client'
import { VideoPlayer } from '@/components/video-player'
import { useState } from 'react'

export default function Home() {
  const [videoId, setVideoId] = useState('')
  const [urlVideo, setUrlVideo] = useState('')
  const [transcript, setTranscript] = useState()

  const onSubmit = () => {
    setUrlVideo(`https://www.youtube.com/embed/${videoId}`)
    fetch(`http://127.0.0.1:8000/youtube/transcript?video_id=${videoId}`)
      .then((res) => {
        console.log(res)
        return res.json()
      })
      .then((data) => {
        setTranscript(data)
      })
      .catch(() => {})
  }

  return (
    <main className="p-24">
      <div className="flex items-center gap-2">
        <label htmlFor="">Video ID: </label>
        <input autoFocus value={videoId} onChange={(e) => setVideoId(e.target.value)} />
        <button onClick={onSubmit}>Xác nhận</button>
      </div>

      <div className="mt-4">
        <VideoPlayer urlVideo={urlVideo} />
      </div>
    </main>
  )
}
