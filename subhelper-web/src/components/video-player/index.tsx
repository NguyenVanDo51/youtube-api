'use client'

import { FC } from 'react'

interface IProps {
  urlVideo: string
}

export const VideoPlayer: FC<IProps> = ({ urlVideo }) => {
  return (
    <div>
      {urlVideo && (
        <div className="grid gap-3" style={{ gridTemplateColumns: 'auto 350px' }}>
          <div>
            <iframe
              width="100%"
              height="500"
              src={urlVideo}
              title="MÌNH ĐÃ ÔN THI TIẾNG ANH THPTQG TỪ 5 ĐẾN 9.2 ĐIỂM NHƯ THẾ NÀO? | Kinh nghiệm tự học hiệu quả"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <div className="transcript" style={{ width: 400 }}>
            ass
          </div>
        </div>
      )}
    </div>
  )
}
