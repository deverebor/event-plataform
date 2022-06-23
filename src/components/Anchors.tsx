import { DiscordLogo, Lightning,  } from "phosphor-react";

interface AnchorsProps {
  anchorTitle: string;
  primary?: boolean;
  secondary?: boolean;
}

export function Anchors(props: AnchorsProps) {
  return (
    <>
      {
        props.primary 
          && (
              <a
                href="#"
                className="
                p-4  
                flex 
                items-center
                gap-2 
                justify-center
                rounded
                text-sm 
                bg-green-500
                font-bold 
                uppercase
                hover:bg-green-700
                transition-colors
            ">
              <DiscordLogo size={24} />
              {props.anchorTitle}
            </a>
          )
      }

      {
        props.secondary 
        && (
            <a
              href="#"
              className="
              p-4  
              flex 
              items-center
              gap-2 
              justify-center
              rounded
              border
              border-blue-500
              text-blue-500
              text-sm 
              font-bold 
              uppercase
              hover:bg-blue-500
              hover:text-gray-900
              transition-colors
          ">
            <Lightning size={24} />
            {props.anchorTitle}
          </a>
        )
      }
    </>
  )
}