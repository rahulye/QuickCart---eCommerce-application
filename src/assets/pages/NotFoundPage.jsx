import { Header } from "../components/Header"
import './NotFoundPage.css'
export function NotFoundPage () {
  return (
    <div className="error-cont">
      <link rel="icon" href="images/icons/app-icon.png"/>
      <title>QuickCart</title>
      <Header/>
      <h2>404. That&apos;s an error.</h2>
      <div>The requested ws not found on this server right now.</div>
    </div>
  )
};