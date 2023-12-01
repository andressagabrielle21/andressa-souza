import Navbar from "./Navbar"

const PageContent = ({children}) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}

export default PageContent