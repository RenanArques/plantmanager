declare module '*.png' {
  const content: ImageSourcePropType
  export default content
}

interface SvgProps {
  width?: number | string,
  height?: number | string
}

declare module '*.svg' {
  const content: React.FC<SvgProps>
  export default content
}