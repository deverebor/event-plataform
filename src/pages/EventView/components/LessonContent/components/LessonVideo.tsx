import { DefaultUi, Player, Youtube } from "@vime/react";
import '@vime/core/themes/default.css'

interface LessonVideoProp {
  videoId: string
}

export function LessonVideo(prop: LessonVideoProp) {
  return(
    <div className="bg-black flex justify-center">
        <div className="
          h-full 
          w-full 
          max-w-[1100px] 
          max-h-[60vh] 
          aspect-video
        ">
          <Player>
            <Youtube videoId={prop.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>
  )
}