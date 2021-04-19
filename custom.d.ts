declare module '*.png' {
  const content: ImageSourcePropType
  export default content
}

interface SvgProps {
  width?: number,
  height?: number
}

declare module '*.svg' {
  const content: React.FC<SvgProps>
  export default content
}