export default function useAge() {
  return Math.abs(new Date(Date.now() - new Date('2001-07-30').getTime()).getUTCFullYear() - 1970)
}