export const colorCode = (colour: string) : number => {
  return COLORS.indexOf(colour as typeof COLORS[number]);
}

export const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
] as const
