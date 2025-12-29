import { memo, useEffect, useLayoutEffect, useMemo, useState } from "react"
import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion"

import workImg1 from '../../assets/images/workImg1.jpg'
import workImg2 from '../../assets/images/workImg2.jpg'
import workImg3 from '../../assets/images/workImg3.jpg'
import workImg4 from '../../assets/images/workImg4.jpg'
import workImg5 from '../../assets/images/workImg5.jpg'
import workImg6 from '../../assets/images/workImg6.jpg'
import workImg7 from '../../assets/images/workImg7.jpg'
import workImg8 from '../../assets/images/workImg8.jpg'
import workImg9 from '../../assets/images/workImg9.jpg'
import workImg10 from '../../assets/images/workImg10.jpg'
import workImg11 from '../../assets/images/workImg11.jpg'
import workImg12 from '../../assets/images/workImg12.jpg'
import workImg13 from '../../assets/images/workImg13.jpg'
import workImg14 from '../../assets/images/workImg14.jpg'
import workImg15 from '../../assets/images/workImg15.jpg'



const images = [
  {
    id: 1,
    src: workImg1,
  },
  {
    id: 2,
    src: workImg2,
  },
  {
    id: 3,
    src: workImg3,
  },
  {
    id: 4,
    src: workImg4,
  },
  {
    id: 5,
    src: workImg5,
  },
  {
    id: 6,
    src: workImg6,
  },
  {
    id: 7,
    src: workImg7,
  },
  {
    id: 8,
    src: workImg8,
  },
  {
    id: 9,
    src: workImg9,
  },
  {
    id: 10,
    src: workImg10,

  },
  {
    id: 11,
    src: workImg11,

  },
  {
    id: 12,
    src: workImg12,

  },
  {
    id: 13,
    src: workImg13,

  },
  {
    id: 14,
    src: workImg14,

  },
  {
    id: 15,
    src: workImg15,

  }
];

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect

const IS_SERVER = typeof window === "undefined"

export function useMediaQuery(
  query,
  {
    defaultValue = false,
    initializeWithValue = true
  } = {}
) {
  const getMatches = query => {
    if (IS_SERVER) {
      return defaultValue
    }
    return window.matchMedia(query).matches;
  }

  const [matches, setMatches] = useState(() => {
    if (initializeWithValue) {
      return getMatches(query);
    }
    return defaultValue
  })

  const handleChange = () => {
    setMatches(getMatches(query))
  }

  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query)
    handleChange()

    matchMedia.addEventListener("change", handleChange)

    return () => {
      matchMedia.removeEventListener("change", handleChange)
    };
  }, [query])

  return matches
}



const duration = 0.15
const transition = { duration, ease: [0.32, 0.72, 0, 1], filter: "blur(4px)" }
const transitionOverlay = { duration: 0.5, ease: [0.32, 0.72, 0, 1] }

const Carousel = memo(({
  handleClick,
  controls,
  cards,
  isCarouselActive
}) => {
  const isScreenSizeSm = useMediaQuery("(max-width: 640px)")
  const cylinderWidth = isScreenSizeSm ? 1100 : 1800
  const faceCount = cards.length
  const faceWidth = cylinderWidth / faceCount
  const radius = cylinderWidth / (2 * Math.PI)
  const rotation = useMotionValue(0)
  const transform = useTransform(rotation, (value) => `rotate3d(0, 1, 0, ${value}deg)`)

  return (
    <div
      className="flex h-full items-center justify-center bg-mauve-dark-2"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}>
      <motion.div
        drag={isCarouselActive ? "x" : false}
        className="relative flex h-full origin-center cursor-grab justify-center active:cursor-grabbing"
        style={{
          transform,
          rotateY: rotation,
          width: cylinderWidth,
          transformStyle: "preserve-3d",
        }}
        onDrag={(_, info) =>
          isCarouselActive &&
          rotation.set(rotation.get() + info.offset.x * 0.05)
        }
        onDragEnd={(_, info) =>
          isCarouselActive &&
          controls.start({
            rotateY: rotation.get() + info.velocity.x * 0.05,
            transition: {
              type: "spring",
              stiffness: 100,
              damping: 30,
              mass: 0.1,
            },
          })
        }
        animate={controls}>
        {cards.map((imgUrl, i) => (
          <motion.div
            key={`key-${imgUrl}-${i}`}
            className="absolute flex h-full origin-center items-center justify-center rounded-xl bg-mauve-dark-2 p-2"
            style={{
              width: `${faceWidth}px`,
              transform: `rotateY(${
                i * (360 / faceCount)
              }deg) translateZ(${radius}px)`,
            }}
            onClick={() => handleClick(imgUrl, i)}>
            <motion.img
              src={imgUrl}
              alt={`keyword_${i} ${imgUrl}`}
              layoutId={`img-${imgUrl}`}
              className="pointer-events-none  w-full rounded-xl object-cover aspect-square"
              initial={{ filter: "blur(4px)" }}
              layout="position"
              animate={{ filter: "blur(0px)" }}
              transition={transition} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
})

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`
function ThreeDPhotoCarousel() {
  const [activeImg, setActiveImg] = useState(null)
  const [isCarouselActive, setIsCarouselActive] = useState(true)
  const controls = useAnimation()
 const cards = useMemo(
  () => [
    workImg1,
    workImg2,
    workImg3,
    workImg4,
    workImg5,
    workImg6,
    workImg7,
    workImg8,
    workImg9,
    workImg10,
    workImg11,
    workImg12,
    workImg13,
    workImg14,
    workImg15,

  ],
  []
)


  useEffect(() => {
    console.log("Cards loaded:", cards)
  }, [cards])

  const handleClick = (imgUrl) => {
    setActiveImg(imgUrl)
    setIsCarouselActive(false)
    controls.stop()
  }

  const handleClose = () => {
    setActiveImg(null)
    setIsCarouselActive(true)
  }

  return (
    <motion.div layout className="relative">
      <AnimatePresence mode="sync">
        {activeImg && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            layoutId={`img-container-${activeImg}`}
            layout="position"
            onClick={handleClose}
            className="fixed inset-0  bg-opacity-10 flex items-center justify-center z-50 m-5 md:m-36 lg:mx-[19rem] rounded-3xl"
            style={{ willChange: "opacity" }}
            transition={transitionOverlay}>
            <motion.img
              layoutId={`img-${activeImg}`}
              src={activeImg}
              className="md:max-w-120 md:max-h-120 max-h-90  max-w-90  rounded-lg shadow-lg"
              // Start with a smaller scale
              initial={{ scale: 0.5 }}
              // Animate to full scale
              animate={{ scale: .9}}
              // Clean ease-out curve
              transition={{
                delay: 0.5,
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              style={{
                willChange: "transform",
              }} />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative md:h-110 h-80 mx-auto w-full  overflow-hidden">
        <Carousel
          handleClick={handleClick}
          controls={controls}
          cards={cards}
          isCarouselActive={isCarouselActive} />
      </div>
    </motion.div>
  );
}

export { ThreeDPhotoCarousel };
