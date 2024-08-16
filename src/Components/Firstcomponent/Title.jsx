
import girl from "/assets/Images/girl.jpeg"
import "./Title.css"
function Title() {
  return (
    <div id="title">
        <img src={girl}></img>
        <h1>Jessica Randall</h1>
        <label>London,United Kingdom</label>
        <p>"front-end developer and avid reader."</p>
    </div>
  )
}

export default Title