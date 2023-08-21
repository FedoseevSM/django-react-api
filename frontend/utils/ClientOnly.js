import dynamic from "next/dynamic"

function ClientOnly({ children }) {
  const Dynamic = dynamic(async () => () => children, { ssr: false })

  return <Dynamic></Dynamic>
}

export default ClientOnly
